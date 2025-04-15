'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { client, Project, Category, urlFor } from '@/lib/sanity-client'

export default function ProjectForm({ params }: { params: { id: string } }) {
  const router = useRouter()
  const isNewProject = params.id === 'new'
  const [loading, setLoading] = useState(!isNewProject)
  const [saving, setSaving] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [error, setError] = useState<string | null>(null)
  
  const [project, setProject] = useState<Partial<Project>>({
    title: '',
    slug: { current: '' },
    description: '',
    technologies: [],
    featured: false,
    demoUrl: '',
    githubUrl: '',
  })
  
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [newTech, setNewTech] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  useEffect(() => {
    // Fetch categories
    async function fetchCategories() {
      try {
        const data = await client.fetch(`
          *[_type == "category"] {
            _id,
            title
          }
        `)
        setCategories(data)
      } catch (err) {
        console.error('Error fetching categories:', err)
      }
    }
    
    // Fetch project if editing
    async function fetchProject() {
      if (!isNewProject) {
        try {
          const data = await client.fetch(`
            *[_type == "project" && _id == $id][0] {
              _id,
              title,
              slug,
              description,
              mainImage,
              categories[]->{ _id, title },
              technologies,
              demoUrl,
              githubUrl,
              featured,
              publishedAt
            }
          `, { id: params.id })
          
          if (data) {
            setProject(data)
            if (data.categories) {
              setSelectedCategories(data.categories.map((cat: Category) => cat._id))
            }
            if (data.mainImage) {
              setImagePreview(urlFor(data.mainImage).width(400).url())
            }
          }
          setLoading(false)
        } catch (err) {
          console.error('Error fetching project:', err)
          setError('Failed to load project. Please try again.')
          setLoading(false)
        }
      }
    }

    fetchCategories()
    fetchProject()
  }, [isNewProject, params.id])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target as HTMLInputElement
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setProject({ ...project, [name]: checked })
    } else {
      setProject({ ...project, [name]: value })
    }
    
    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
      
      setProject({
        ...project,
        title: value,
        slug: { current: slug }
      })
    }
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  function handleAddTech() {
    if (newTech.trim() !== '') {
      setProject({
        ...project,
        technologies: [...(project.technologies || []), newTech.trim()]
      })
      setNewTech('')
    }
  }

  function handleRemoveTech(index: number) {
    const updatedTech = [...(project.technologies || [])]
    updatedTech.splice(index, 1)
    setProject({ ...project, technologies: updatedTech })
  }

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const options = e.target.options
    const values = []
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        values.push(options[i].value)
      }
    }
    setSelectedCategories(values)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    
    try {
      let mainImage = project.mainImage
      
      // Upload image if selected
      if (selectedImage) {
        const imageAsset = await client.assets.upload('image', selectedImage, {
          filename: selectedImage.name
        })
        mainImage = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset._id
          }
        }
      }
      
      // Prepare categories references
      const categories = selectedCategories.map(id => ({
        _type: 'reference',
        _ref: id
      }))
      
      // Prepare project document
      const projectDoc = {
        _type: 'project',
        title: project.title,
        slug: project.slug,
        description: project.description,
        mainImage,
        categories,
        technologies: project.technologies,
        demoUrl: project.demoUrl,
        githubUrl: project.githubUrl,
        featured: project.featured,
        publishedAt: project.publishedAt || new Date().toISOString()
      }
      
      if (isNewProject) {
        // Create new project
        await client.create(projectDoc)
      } else {
        // Update existing project
        await client.patch(params.id)
          .set(projectDoc)
          .commit()
      }
      
      router.push('/admin/projects')
    } catch (err) {
      console.error('Error saving project:', err)
      setError('Failed to save project. Please try again.')
      setSaving(false)
    }
  }

  if (loading) return <div className="p-8 text-center">Loading project...</div>
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          {isNewProject ? 'Add New Project' : 'Edit Project'}
        </h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Project Title*
            </label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              URL Slug*
            </label>
            <div className="flex">
              <span className="bg-gray-100 border border-gray-300 rounded-l-md px-3 py-2 text-gray-500">
                /projects/
              </span>
              <input
                type="text"
                name="slug.current"
                value={project.slug?.current || ''}
                onChange={(e) => setProject({
                  ...project,
                  slug: { current: e.target.value }
                })}
                className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Description*
            </label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Project Image
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="border border-gray-300 rounded-md px-3 py-2"
              />
              {imagePreview && (
                <div className="relative w-24 h-24">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImage(null)
                      setImagePreview(null)
                      setProject({ ...project, mainImage: undefined })
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Categories
            </label>
            <select
              multiple
              value={selectedCategories}
              onChange={handleCategoryChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              size={Math.min(5, categories.length)}
            >
              {categories.map(category => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Hold Ctrl (or Cmd) to select multiple categories
            </p>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Technologies
            </label>
            <div className="flex mb-2">
              <input
                type="text"
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                placeholder="Add a technology"
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <div key={index} className="bg-gray-100 rounded-full px-3 py-1 flex items-center">
                  <span>{tech}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTech(index)}
                    className="ml-2 text-gray-500 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Demo URL
            </label>
            <input
              type="url"
              name="demoUrl"
              value={project.demoUrl || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              GitHub URL
            </label>
            <input
              type="url"
              name="githubUrl"
              value={project.githubUrl || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://github.com/username/repo"
            />
          </div>
          
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="featured"
                checked={project.featured || false}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-gray-700">Featured Project</span>
            </label>
          </div>
          
          <div className="flex justify-between">
            <Link
              href="/admin/projects"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:bg-blue-400"
            >
              {saving ? 'Saving...' : 'Save Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
