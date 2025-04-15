'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { client, Project, urlFor } from '@/lib/sanity-client'

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await client.fetch(`
          *[_type == "project"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            description,
            mainImage,
            featured,
            publishedAt
          }
        `)
        setProjects(data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching projects:', err)
        setError('Failed to load projects. Please try again.')
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  async function deleteProject(id: string) {
    if (window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      try {
        await client.delete(id)
        setProjects(projects.filter(project => project._id !== id))
      } catch (err) {
        console.error('Error deleting project:', err)
        alert('Failed to delete project. Please try again.')
      }
    }
  }

  if (loading) return <div className="p-8 text-center">Loading projects...</div>
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Projects</h1>
          <Link 
            href="/admin/projects/new" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Add New Project
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 mb-4">No projects found.</p>
            <Link 
              href="/admin/projects/new" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Create your first project
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {projects.map(project => (
              <div key={project._id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {project.mainImage && (
                    <div className="w-full md:w-48 h-48 flex-shrink-0">
                      <img 
                        src={urlFor(project.mainImage).width(200).height(200).url()} 
                        alt={project.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        {project.featured && (
                          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mb-2">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Link 
                          href={`/admin/projects/${project._id}`}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Edit
                        </Link>
                        <button 
                          onClick={() => deleteProject(project._id)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600 line-clamp-2 mb-2">{project.description}</p>
                    <div className="text-sm text-gray-500">
                      {project.publishedAt && (
                        <span>Published: {new Date(project.publishedAt).toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Link 
            href="/admin" 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
