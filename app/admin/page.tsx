'use client'

import { useState } from 'react'
import Link from 'next/link'
import PreviewButton from './components/PreviewButton'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Portfolio Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardCard 
            title="Projects" 
            description="Manage your portfolio projects"
            icon="📁"
            href="/admin/projects"
          />
          
          <DashboardCard 
            title="About Me" 
            description="Update your personal information"
            icon="👤"
            href="/admin/about"
          />
          
          <DashboardCard 
            title="Categories" 
            description="Manage project categories"
            icon="🏷️"
            href="/admin/categories"
          />
          
          <DashboardCard 
            title="Social Links" 
            description="Manage your social media links"
            icon="🔗"
            href="/admin/social"
          />
        </div>
        
        <div className="mt-8 flex justify-center space-x-6 items-center">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to website
          </Link>
          
          <PreviewButton />
        </div>
      </div>
    </div>
  )
}

function DashboardCard({ title, description, icon, href }: { 
  title: string
  description: string
  icon: string
  href: string
}) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}
