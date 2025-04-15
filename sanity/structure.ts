import {StructureBuilder} from 'sanity/structure'
import {CogIcon, HomeIcon, DocumentIcon, UserIcon, TagIcon, LinkIcon, ImageIcon, DocumentsIcon, CommentIcon, RocketIcon} from '@sanity/icons'

// Helper function to create a section item with a custom title
const createSectionItem = (S: StructureBuilder, title: string, schemaType: string, icon: any) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.document()
        .schemaType(schemaType)
        .documentId(schemaType)
    )

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      
      // Page Sections
      S.listItem()
        .title('Page Sections')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Page Sections')
            .items([
              // Header Group
              S.listItem()
                .title('Header Sections')
                .icon(DocumentsIcon)
                .child(
                  S.list()
                    .title('Header Sections')
                    .items([
                      createSectionItem(S, 'Navigation Bar', 'navbar', LinkIcon),
                      createSectionItem(S, 'Hero Section', 'hero', HomeIcon),
                    ])
                ),
              
              // Main Content Group
              S.listItem()
                .title('Main Content Sections')
                .icon(DocumentsIcon)
                .child(
                  S.list()
                    .title('Main Content Sections')
                    .items([
                      createSectionItem(S, 'Services Section', 'services', RocketIcon),
                      createSectionItem(S, 'Trusted By Section', 'trustedBy', TagIcon),
                      createSectionItem(S, 'Projects Showcase', 'projectsShowcase', ImageIcon),
                      createSectionItem(S, 'Blog Showcase', 'blogShowcase', DocumentIcon),
                      createSectionItem(S, 'About Section', 'about', UserIcon),
                      createSectionItem(S, 'Experience Section', 'experience', TagIcon),
                      createSectionItem(S, 'Testimonials Section', 'testimonials', CommentIcon),
                    ])
                ),
              
              // Footer Group
              S.listItem()
                .title('Footer Sections')
                .icon(DocumentsIcon)
                .child(
                  S.list()
                    .title('Footer Sections')
                    .items([
                      createSectionItem(S, 'Contact Section', 'contact', UserIcon),
                      createSectionItem(S, 'Footer Section', 'footer', LinkIcon),
                    ])
                ),
            ])
        ),
      
      // Divider
      S.divider(),
      
      // Content Types
      S.listItem()
        .title('Projects')
        .icon(ImageIcon)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      
      S.listItem()
        .title('Blog Posts')
        .icon(DocumentIcon)
        .schemaType('blog')
        .child(S.documentTypeList('blog').title('Blog Posts')),
      
      S.listItem()
        .title('Categories')
        .icon(TagIcon)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      
      S.listItem()
        .title('Social Links')
        .icon(LinkIcon)
        .schemaType('social')
        .child(S.documentTypeList('social').title('Social Links')),
    ])
