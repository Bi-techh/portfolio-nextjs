import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import category from './category'
import about from './about'
import social from './social'
import hero from './hero'
import services from './services'
import trustedBy from './trustedBy'
import experience from './experience'
import testimonials from './testimonials'
import contact from './contact'
import footer from './footer'
import navbar from './navbar'
import blog from './blog'
import blogShowcase from './blogShowcase'
import projectsShowcase from './projectsShowcase'
import siteSettings from './siteSettings'

// Import custom text styling objects
import textStyle from './objects/textStyle'
import styledText from './objects/styledText'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Content types
    project,
    category,
    about,
    social,
    blog,
    
    // Section configurations
    hero,
    navbar,
    services,
    trustedBy,
    experience,
    testimonials,
    contact,
    footer,
    projectsShowcase,
    blogShowcase,
    siteSettings,
    
    // Custom objects
    textStyle as SchemaTypeDefinition,
    styledText as SchemaTypeDefinition,
  ],
}
