# Portfolio Website - Next.js 15 Conversion

This project is a conversion of a Webflow-exported website into a modern Next.js 15 application with Tailwind CSS.

## Project Overview

The original Webflow website has been converted to a fully functional Next.js application while maintaining all design elements, text, and styling from the original version. The project follows modern Next.js best practices, including:

- Proper page routing with Next.js App Router
- Use of Server Components where applicable
- Implementation of Tailwind CSS for styling
- Creation of reusable React components for various sections
- Optimized image handling using the Next.js Image component
- Adherence to SEO best practices, including meta tags

## Components

The website consists of the following main components:

- **Navbar**: Responsive navigation bar with mobile menu
- **Preloader**: Loading animation when the site first loads
- **Hero**: Main hero section with call-to-action buttons
- **TrustedBy**: Section showcasing trusted companies/clients
- **About**: Information about the portfolio owner
- **Services**: Services offered section with cards
- **ProjectCard**: Reusable component for project listings
- **BlogCard**: Reusable component for blog post listings
- **Footer**: Site footer with contact information and links

## Pages

- **Home**: Main landing page with hero, trusted by, about, and services sections
- **Projects**: Gallery of projects with filtering options
- **Blog**: Blog posts listing
- **Contact**: Contact form and information

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Technologies Used

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)

## Project Structure

```
portfolio-nextjs/
├── app/                 # Next.js App Router pages
│   ├── blog/            # Blog page
│   ├── contact/         # Contact page
│   ├── projects/        # Projects page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Reusable React components
│   ├── About.tsx
│   ├── BlogCard.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Preloader.tsx
│   ├── ProjectCard.tsx
│   ├── Services.tsx
│   └── TrustedBy.tsx
├── public/              # Static assets
│   └── images/          # Image files
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```
