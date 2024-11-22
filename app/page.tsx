"use client"

import { useState } from 'react'
import { Mail, Download, GitlabIcon as GitHub, Linkedin, Twitter, Code, Briefcase, User } from 'lucide-react'
import Image from 'next/image'

export default function EnhancedPortfolio() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, ASP.NET Core, and SQL Server",
      image: "/placeholder.svg",
      github: "#"
    },
    {
      title: "Task Management System",
      description: "A .NET-based task management application with real-time updates",
      image: "/placeholder.svg",
      github: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard built with React and C# backend for data analysis",
      image: "/placeholder.svg",
      github: "#"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-8 transition-all duration-300">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-3xl shadow-lg">
        <div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">John Doe</h1>
          <p className="text-xl text-gray-300">Web Developer | C# | .NET | SQL Server</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"><GitHub size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"><Linkedin size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"><Twitter size={24} /></a>
          <button className="bg-purple-500 bg-opacity-50 text-white rounded-md py-2 px-4 text-sm font-semibold hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
            <Mail size={16} className="mr-2" />
            Contact
          </button>
          <button className="bg-gray-700 bg-opacity-50 text-gray-100 rounded-md py-2 px-4 text-sm font-semibold hover:bg-opacity-70 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
            <Download size={16} className="mr-2" />
            CV
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow grid grid-cols-3 gap-8">
        {/* Left Column: About and Experience */}
        <div className="space-y-8">
          <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:bg-opacity-70">
            <h2 className="text-2xl font-bold mb-4 text-purple-300 flex items-center">
              <User className="mr-2" />
              About Me
            </h2>
            <p className="text-gray-300">
              I'm a passionate full-stack developer with expertise in C#, .NET, and web technologies. 
              I love creating efficient and user-friendly applications that solve real-world problems.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:bg-opacity-70">
            <h2 className="text-2xl font-bold mb-6 text-purple-300 flex items-center">
              <Briefcase className="mr-2" />
              Experience
            </h2>
            <div className="relative">
              <div className="absolute left-3 top-0 h-full w-0.5 bg-purple-400"></div>
              <ul className="space-y-8">
                <li className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-gray-900 border-2 border-purple-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-300">Senior Developer</h3>
                  <p className="text-sm text-gray-400 mb-2">Tech Solutions Inc. | 2018 - Present</p>
                  <p className="text-gray-300">Led development of enterprise-level .NET applications, focusing on scalability and performance optimization.</p>
                </li>
                <li className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-gray-900 border-2 border-purple-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-300">Web Developer</h3>
                  <p className="text-sm text-gray-400 mb-2">Digital Creations Co. | 2015 - 2018</p>
                  <p className="text-gray-300">Developed responsive web applications using C# and JavaScript, improving user engagement by 40%.</p>
                </li>
                <li className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-gray-900 border-2 border-purple-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-300">Junior Developer</h3>
                  <p className="text-sm text-gray-400 mb-2">StartUp Innovations | 2013 - 2015</p>
                  <p className="text-gray-300">Contributed to the development of innovative web solutions, focusing on front-end technologies and UX design.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle and Right Columns: Projects */}
        <div className="col-span-2">
          <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:bg-opacity-70">
            <h2 className="text-2xl font-bold mb-6 text-purple-300 flex items-center">
              <Code className="mr-2" />
              Projects
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {projects.map((project, index) => (
                <button
                  key={index}
                  className={`p-3 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                    activeProject === index ? 'bg-purple-500 bg-opacity-50 shadow-lg' : 'bg-gray-700 bg-opacity-50 hover:bg-opacity-70'
                  }`}
                  onClick={() => setActiveProject(index)}
                >
                  <h3 className="font-semibold">{project.title}</h3>
                </button>
              ))}
            </div>
            <div className="mt-6">
              <Image
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                width={800}
                height={400}
                className="rounded-xl mb-4 w-full h-64 object-cover transition-all duration-300 hover:shadow-lg hover:brightness-110"
              />
              <h3 className="text-2xl font-bold mb-2">{projects[activeProject].title}</h3>
              <p className="text-gray-300 mb-4">{projects[activeProject].description}</p>
              <a href={projects[activeProject].github} className="text-purple-400 hover:text-purple-300 transition-colors flex items-center group">
                <GitHub size={20} className="mr-2 transition-transform group-hover:rotate-12" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-400 text-sm transition-all duration-300 hover:text-purple-400">
        © 2023 John Doe. All rights reserved.
      </footer>
    </div>
  )
}

