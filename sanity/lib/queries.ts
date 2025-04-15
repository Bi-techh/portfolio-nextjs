import { groq } from 'next-sanity';

// Hero section query
export const heroQuery = groq`*[_type == "hero"][0]{
  title,
  titleStyle{
    textColor,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textAlign,
    marginTop,
    marginBottom
  },
  subtitle,
  subtitleStyle{
    textColor,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textAlign,
    marginTop,
    marginBottom
  },
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  "profileImage": profileImage{
    "asset": asset->{
      _id,
      _ref,
      url
    }
  }
}`;

// Navbar query
export const navbarQuery = groq`*[_type == "navbar"][0]{
  "logoUrl": logo.asset->url,
  logoText,
  menuItems[]{
    text,
    url,
    isButton,
    openInNewTab,
    submenu[]{
      text,
      url,
      openInNewTab
    }
  },
  ctaButton{
    text,
    url,
    openInNewTab
  }
}`;

// Services section query
export const servicesQuery = groq`*[_type == "services"][0]{
  sectionTitle,
  subtitle,
  servicesList[]{
    title,
    description,
    "iconUrl": icon.asset->url,
    iconCode
  }
}`;

// Trusted By section query
export const trustedByQuery = groq`*[_type == "trustedBy"][0]{
  sectionTitle,
  description,
  companies[]{
    name,
    "logoUrl": logo.asset->url,
    logoSvg,
    url
  }
}`;

// Projects showcase query
export const projectsShowcaseQuery = groq`*[_type == "projectsShowcase"][0]{
  sectionTitle,
  subtitle,
  "featuredProjects": featuredProjects[]->{ 
    title,
    "slug": slug.current,
    description,
    "mainImageUrl": mainImage.asset->url,
    "categories": categories[]->{ title },
    technologies,
    demoUrl,
    githubUrl,
    featured,
    publishedAt
  },
  showFeaturedOnly,
  numberOfProjects,
  viewAllButtonText,
  viewAllButtonLink,
  filterByCategories
}`;

// Projects query (for all projects)
export const projectsQuery = groq`*[_type == "project"] | order(publishedAt desc){
  title,
  "slug": slug.current,
  description,
  "mainImageUrl": mainImage.asset->url,
  "categories": categories[]->{ title },
  technologies,
  demoUrl,
  githubUrl,
  featured,
  publishedAt
}`;

// Blog showcase query
export const blogShowcaseQuery = groq`*[_type == "blogShowcase"][0]{
  sectionTitle,
  subtitle,
  "featuredPosts": featuredPosts[]->{ 
    title,
    "slug": slug.current,
    excerpt,
    "mainImageUrl": mainImage.asset->url,
    "categories": categories[]->{ title },
    publishedAt,
    "author": author->{ name, "imageUrl": profileImage.asset->url }
  },
  showLatest,
  numberOfPosts,
  viewAllButtonText,
  viewAllButtonLink
}`;

// Blog posts query (for all posts)
export const blogPostsQuery = groq`*[_type == "blog"] | order(publishedAt desc){
  title,
  "slug": slug.current,
  excerpt,
  "mainImageUrl": mainImage.asset->url,
  "categories": categories[]->{ title },
  publishedAt,
  "author": author->{ name, "imageUrl": profileImage.asset->url },
  tags,
  featured,
  readingTime
}`;

// About section query
export const aboutQuery = groq`*[_type == "about"][0]{
  name,
  role,
  "profileImageUrl": profileImage.asset->url,
  shortBio,
  longBio,
  email,
  phone,
  location,
  "resumeUrl": resume.asset->url
}`;

// Experience section query
export const experienceQuery = groq`*[_type == "experience"][0]{
  sectionTitle,
  subtitle,
  experiences[]{
    position,
    company,
    "companyLogoUrl": companyLogo.asset->url,
    startDate,
    endDate,
    isCurrent,
    description,
    technologies
  }
}`;

// Testimonials section query
export const testimonialsQuery = groq`*[_type == "testimonials"][0]{
  sectionTitle,
  subtitle,
  testimonialsList[]{
    name,
    position,
    company,
    "imageUrl": image.asset->url,
    quote,
    rating
  }
}`;

// Contact section query
export const contactQuery = groq`*[_type == "contact"][0]{
  sectionTitle,
  subtitle,
  email,
  phone,
  address,
  formTitle,
  formSubtitle,
  submitButtonText,
  successMessage,
  "backgroundImageUrl": backgroundImage.asset->url
}`;

// Footer section query
export const footerQuery = groq`*[_type == "footer"][0]{
  "logoUrl": logo.asset->url,
  logoText,
  tagline,
  copyrightText,
  navigationLinks[]{
    text,
    url
  },
  "socialLinks": socialLinks[]->{ 
    platform,
    url,
    icon
  },
  columns[]{
    title,
    links[]{
      text,
      url
    }
  }
}`;

// Site settings query
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title,
  description,
  keywords,
  "logoUrl": logo.asset->url,
  "faviconUrl": favicon.asset->url,
  "ogImageUrl": ogImage.asset->url,
  primaryColor,
  secondaryColor,
  googleAnalyticsId,
  contactEmail,
  contactPhone,
  address,
  "socialLinks": socialLinks[]->{ 
    platform,
    url,
    icon
  },
  enableBlog,
  enableContactForm
}`;
