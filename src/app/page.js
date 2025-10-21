'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'LearnBridge',
      description: 'A Web-Based Peer-to-peer tutoring and Open Resource Catalog fostering student cooperation and ending knowledge gaps',
      category: 'web',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/LearnBridge.png'
    },
    {
      id: 2,
      title: 'Gordon College Career Hub',
      description: 'A Web-Based Job finder for fresh graduates of Gordon College',
      category: 'web',
      tech: ['Vue.js','Laravel','MySQL'],
      image: '/GCCH.png'
    },
    {
      id: 3,
      title: 'FlowTask',
      description: 'A Task Management designed to organize your daily operations',
      category: 'mobile',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/FlowTask.png'
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Aaron Jan Estacio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A BSIT student creating 
                digital experiences that blend innovation with functionality. I transform ideas 
                into seamless web applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  Get In Touch
                </Link>
                <a 
                  href="/resume.pdf" 
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <Image
                  src="/AJ.jpg"
                  alt="AJ student pic"
                  fill
                  className="rounded-2xl object-cover shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'web', 'mobile'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                  src={project.image}
                  alt="Project Image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 760px) 100vw, (max-width:1200) 50vw, 33vw"
                />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg font-medium transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            Have a project in mind? I&apos;d love to hear about it and bring your ideas to life.
          </p>
          
          {/* Social Platform Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { 
                name: 'GitHub', 
                href: 'https://github.com/Kyu020', 
                color: 'bg-gray-800 hover:bg-gray-900',
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )
              },
              { 
                name: 'Facebook', 
                href: 'https://www.facebook.com/aaronjan.borromeoestacio', 
                color: 'bg-blue-600 hover:bg-blue-700',
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )
              }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white p-3 rounded-lg transition-all transform hover:scale-110 shadow-lg flex items-center justify-center`}
                aria-label={`Visit my ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Interactive Button */}
          <button
            onClick={() => {
              alert('🚀 Thanks for your interest! Feel free to reach out through my contact page or social links above.');
            }}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg mx-2 mb-4"
          >
            Send Me a Message
          </button>

          <div className="mt-4">
            <Link 
              href="/contact" 
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 mx-2"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}