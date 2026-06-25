'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from "motion/react"
import { useTheme } from '@/context/ThemeContext'
import { assets, workData } from '@/assets/assets'

const ProjectDetail = () => {
    const { isDarkMode } = useTheme();
    const { slug } = useParams();

    // Lấy dự án hiện tại và các dự án gợi ý
    const currentProject = workData.find(p => p.slug === slug) || workData[0];
    const sideProjects = workData.filter(p => p.slug !== slug).slice(0, 3);

    // Cấu trúc 5 mục chuyên nghiệp
    const sections = [
        { id: 'overview', label: '1. Project Overview' },
        { id: 'challenges', label: '2. Challenges & Solutions' },
        { id: 'architecture', label: '3. Architecture & Database' },
        { id: 'features', label: '4. Key Features' },
        { id: 'results', label: '5. Results & Lessons' },
    ];

    // Dữ liệu fallback nếu chưa có details trong assets.js
    const details = currentProject.details || {
        overview: { summary: "No summary available.", role: "Not specified.", techStack: currentProject.tags },
        challenges: [],
        architecture: { description: "Architecture details not provided.", databaseSchema: null },
        features: [],
        results: { performance: "N/A", lessons: "Not specified." }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 duration-500">

            {/* --- HERO SECTION --- */}
            <header className="text-center px-[10%] mb-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-bold mb-6 font-Ovo leading-tight"
                >
                    {currentProject.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-Ovo"
                >
                    {currentProject.description}
                </motion.p>

                {/* HERO GALLERY */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
                    className="mt-10 grid grid-cols-1 md:grid-cols-10 gap-4 w-full"
                >
                    <div className="md:col-span-7 relative aspect-video rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-white/10 group">
                        <Image
                            src={currentProject.bgImage}
                            alt="Main Project"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                            className="object-cover group-hover:scale-105 duration-700"
                            priority
                        />
                    </div>

                    <div className="md:col-span-3 flex flex-col">
                        <div className="flex flex-col gap-4 flex-1">
                            {sideProjects.map((project, index) => (
                                <Link
                                    href={`/projects/${project.slug}`}
                                    key={index}
                                    className="relative flex-1 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 group min-h-[80px]"
                                >
                                    <Image
                                        src={project.bgImage}
                                        alt="Side Project"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 20vw"
                                        className="object-cover group-hover:scale-110 duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <p className="text-white text-xs font-Ovo">View Project</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </header>

            {/* --- MAIN CONTENT --- */}
            <div className="w-full px-[10%] grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* LEFT SIDEBAR (NAV) */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-28 space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-Ovo">Table of Contents</h4>
                        <nav className="space-y-4">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="block text-sm font-medium hover:text-primary-blue transition-colors text-gray-500 dark:text-gray-400 font-Ovo"
                                >
                                    {section.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* CONTENT AREA */}
                <main className="lg:col-span-9 p-8 md:p-14 rounded-3xl border border-gray-200 dark:border-white/10 space-y-24 shadow-sm bg-white/50 dark:bg-transparent backdrop-blur-sm">

                    {/* 1. Project Overview */}
                    <section id="overview" className="scroll-mt-28">
                        <h2 className="text-3xl font-bold mb-8 font-Ovo">1. Project Overview</h2>
                        <div className="space-y-6 font-Ovo">
                            <div>
                                <h4 className="text-sm font-bold uppercase text-gray-400 mb-2">Summary</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg italic">
                                    "{details.overview.summary}"
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-sm font-bold uppercase text-gray-400 mb-2">My Role</h4>
                                    <p className="text-gray-600 dark:text-gray-300">{details.overview.role}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase text-gray-400 mb-2">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {details.overview.techStack.map((tech: string) => (
                                            <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-md text-xs border border-gray-200 dark:border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Challenges & Solutions */}
                    <section id="challenges" className="scroll-mt-28">
                        <h2 className="text-3xl font-bold mb-8 font-Ovo">2. Challenges & Solutions</h2>
                        <div className="space-y-8">
                            {details.challenges.length > 0 ? details.challenges.map((item: any, idx: number) => (
                                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10">
                                        <h4 className="font-bold mb-3 text-red-600 dark:text-red-400 text-sm uppercase">The Challenge</h4>
                                        <p className="text-gray-700 dark:text-gray-300 font-Ovo">{item.issue}</p>
                                    </div>
                                    <div className="p-6 rounded-2xl border border-green-100 dark:border-green-900/30 bg-green-50/50 dark:bg-green-900/10">
                                        <h4 className="font-bold mb-3 text-green-600 dark:text-green-400 text-sm uppercase">The Solution</h4>
                                        <p className="text-gray-700 dark:text-gray-300 font-Ovo">{item.solution}</p>
                                    </div>
                                </div>
                            )) : (
                                <p className="text-gray-400 italic font-Ovo">No challenges documented yet.</p>
                            )}
                        </div>
                    </section>

                    {/* 3. Architecture & Database */}
                    <section id="architecture" className="scroll-mt-28">
                        <h2 className="text-3xl font-bold mb-8 font-Ovo">3. Architecture & Database</h2>
                        <div className="space-y-8">
                            <p className="text-gray-600 dark:text-gray-300 font-Ovo leading-relaxed">
                                {details.architecture.description}
                            </p>
                            {details.architecture.databaseSchema ? (
                                <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10">
                                    <Image src={details.architecture.databaseSchema} alt="Database Schema" fill className="object-contain bg-gray-50 dark:bg-white/5" />
                                </div>
                            ) : (
                                <div className="p-12 rounded-2xl border-2 border-dashed border-gray-200 dark:border-white/5 flex flex-col items-center justify-center text-center">
                                    <p className="text-gray-400 font-Ovo">Schema Diagram Placeholder</p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* 4. Key Features */}
                    <section id="features" className="scroll-mt-28">
                        <h2 className="text-3xl font-bold mb-8 font-Ovo">4. Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {details.features.map((feature: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-white/5 hover:bg-light-hover dark:hover:bg-dark-hover transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-primary-blue shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                    <span className="font-Ovo text-gray-700 dark:text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 5. Results & Lessons */}
                    <section id="results" className="scroll-mt-28">
                        <h2 className="text-3xl font-bold mb-8 font-Ovo">5. Results & Lessons</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-3xl bg-black text-white dark:bg-white/5 border border-white/10 shadow-xl">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Performance Metrics</h4>
                                <p className="text-2xl font-bold font-Ovo">{details.results.performance}</p>
                            </div>
                            <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-transparent">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Key Takeaway</h4>
                                <p className="text-gray-600 dark:text-gray-300 font-Ovo italic leading-relaxed">
                                    "{details.results.lessons}"
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Footer Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                        <Link href={"#"} className="px-10 py-3 border border-white rounded-full bg-black text-white dark:bg-transparent flex items-center gap-2 font-Ovo hover:scale-105 transition-all shadow-lg">
                            Live Demo <Image src={assets.right_arrow_white} alt='' className='w-4' />
                        </Link>
                        <Link href={"#"} className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black font-Ovo hover:scale-105 transition-all shadow-md">
                            View Code <Image src={assets.download_icon} alt='' className='w-4' />
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ProjectDetail
