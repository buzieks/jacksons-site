"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isProjectsModalOpen, setIsCommunityModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const projects = [
    { title: "Payment Processor", desc: "Payment processor for Discord communities", tech: "React, Node.js, Next.js" },
    { title: "Stock Options Flow Bot", desc: "Live options flow Discord bot", tech: "Python" },
    { title: "Engagement Bot", desc: "Discord bot to automate communities", tech: "Discord.js" },
  ];

  const skills = [
    "React", "Node.js", "Next.js", "Python", "Discord.js", 
    "TypeScript", "JavaScript", "Git", "API Development", "UI/UX"
  ];

  const contacts = [
    { name: "Twitter", link: "https://x.com/bbusickio" },
    { name: "GitHub", link: "https://github.com/buzieks" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/brandon-busickio-2527b4323/" },
    { name: "Email", link: "mailto:me@brandonbusickio.com" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white">
      {/* Header/Navbar */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-16 gap-4 sm:gap-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
          <h1 className="text-xl sm:text-2xl font-bold font-mono">Jackson Fairbanks</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-mono text-sm">
          <button
            onClick={() => setIsCommunityModalOpen(true)}
            className="hover:text-indigo-400 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => setIsSkillsModalOpen(true)}
            className="hover:text-indigo-400 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="hover:text-indigo-400 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center text-center max-w-3xl px-4">
        <div className="absolute inset-0 -z-10 bg-gradient-radial from-indigo-500/20 to-transparent w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] blur-3xl animate-pulse" />
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 animate-fade-in">
          Jackson Fairbanks
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-80 font-mono">
          Options Trader | Nasdaq Founder $ASST | Digital Community Builder
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => setIsCommunityModalOpen(true)}
            className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all hover:scale-105 border border-indigo-400/50 w-full sm:w-auto"
          >
            View Communities
          </button>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="px-6 py-3 bg-transparent rounded-lg hover:bg-purple-900/50 transition-all hover:scale-105 border border-purple-400/50 w-full sm:w-auto"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Communities Modal */}
      {isProjectsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-gray-800/90 p-6 sm:p-8 rounded-xl border border-indigo-500/50 w-11/12 sm:w-[600px] max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              My Communities
            </h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-700/50 rounded-lg hover:bg-indigo-600/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-indigo-400">{project.title}</h3>
                  <p className="text-sm opacity-70">{project.desc}</p>
                  <p className="text-xs font-mono text-purple-400 mt-2">{project.tech}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsCommunityModalOpen(false)}
              className="mt-6 w-full px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all border border-indigo-400/50"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Skills Modal */}
      {isSkillsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-gray-800/90 p-6 sm:p-8 rounded-xl border border-indigo-500/50 w-11/12 sm:w-96 max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              My Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-700/50 rounded-lg text-center text-sm font-mono hover:bg-indigo-600/30 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsSkillsModalOpen(false)}
              className="mt-6 w-full px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all border border-indigo-400/50"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-gray-800/90 p-6 sm:p-8 rounded-xl border border-indigo-500/50 w-11/12 sm:w-96 max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Contact Me
            </h2>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.link}
                  target="_blank"
                  className="block p-3 bg-gray-700/50 rounded-lg text-center text-sm font-mono hover:bg-indigo-600/30 transition-colors"
                >
                  {contact.name}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="mt-6 w-full px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all border border-indigo-400/50"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center text-xs sm:text-sm opacity-60 font-mono">
        <p>© 2025 Jackson Fairbanks</p>
      </div>
    </main>
  );
}