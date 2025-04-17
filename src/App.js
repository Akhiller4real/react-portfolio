import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
  
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-purple-700 to-indigo-700"
        data-aos="fade-up"
      >
        <h2 className="text-5xl font-bold mb-4">Hi, I'm Akhil 👋</h2>
        <p className="text-xl mb-6">Frontend Developer | React Enthusiast</p>
        <a href="#projects" className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300">
          View Projects
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20" data-aos="fade-up">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-lg leading-relaxed max-w-2xl">
          I'm a passionate frontend developer with a love for building sleek, responsive web interfaces. My tools of choice are React.js, Tailwind CSS, and animations that make websites come to life.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 bg-gray-800" data-aos="fade-up">
        <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold mb-2">Project One</h4>
            <p>A modern UI built with React and Tailwind CSS.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold mb-2">Project Two</h4>
            <p>A portfolio template featuring scroll animations and clean design.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20" data-aos="fade-up">
        <h3 className="text-3xl font-semibold mb-4">Contact</h3>
        <p className="mb-4">Reach out to me via email:</p>
        <a href="mailto:Akhilchirra.17@gmail.com" className="text-blue-400 hover:underline">you@example.com</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="flex justify-center mb-4 space-x-6">
          <a href="https://github.com/Akhiller4real" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={28} className="text-gray-400 hover:text-white transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/akhilkumarchirra/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={28} className="text-gray-400 hover:text-white transition duration-300" />
          </a>
        </div>
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Akhil. All rights reserved.</p>
      </footer>
    </div>
  );
}
