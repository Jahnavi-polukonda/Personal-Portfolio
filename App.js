import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-indigo-500 mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Hi, I’m Jahnavi</h1>
        <p className="text-lg text-gray-600 mb-4">
          Aspiring Software Developer specializing in C++ and DSA
        </p>
        <div className="flex gap-4">
          {/* Resume Button (opens PDF in new tab) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
          >
            Resume
          </a>

          <a
            href="https://github.com/Jahnavi-polukonda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 px-4 py-2 rounded-lg shadow hover:bg-gray-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/polukonda-jahnavi-0770b82b9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </motion.section>

      {/* About Me */}
      <motion.section
        className="py-20 px-6 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          I am passionate about solving problems using technology. With a strong
          foundation in C++ and Data Structures & Algorithms, I enjoy building
          efficient solutions. I’m also exploring Big Data technologies like
          Hadoop and have hands-on experience in tools like Git, VS Code, and
          Linux. My goal is to grow as a software developer and contribute to
          impactful projects.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        className="py-20 px-6 bg-gray-100"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">Technical</h3>
            <p>C++, DSA, OOPs, SQL, Hadoop basics</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">Tools</h3>
            <p>VS Code, Git</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">Soft Skills</h3>
            <p>Problem Solving, Teamwork</p>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        className="py-20 px-6 max-w-4xl mx-auto"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="space-y-6">
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="font-semibold">
              Online Payment Fraud Detection using ML Techniques
            </h3>
            <p className="text-sm text-gray-600">
              Built with Python & ML to detect fraudulent transactions and
              improve security.
            </p>
            <a
              href="https://github.com/Jahnavi-polukonda/Online-payment-fraud-detection-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              GitHub Link
            </a>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="font-semibold">Portfolio Website</h3>
            <p className="text-sm text-gray-600">
              Created with React & Tailwind to showcase skills and projects.
            </p>
            <a
              href="https://github.com/Jahnavi-polukonda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              GitHub Link
            </a>
          </div>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        className="py-20 px-6 bg-gray-100 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <p>
          B.Tech in Information Technology, Prasad V Potluri Siddhartha
          Institute Of Technology, 2026
        </p>
      </motion.section>

      {/* Achievements */}
      <motion.section
        className="py-20 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Achievements & Certifications</h2>
        <ul className="space-y-2 text-gray-700">
          <li>🏆 Hackathon Participant</li>
          <li>💡 Solved 200+ problems on LeetCode</li>
          <li>📜 NPTEL / Coursera Certifications</li>
        </ul>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="py-20 px-6 bg-gray-100 text-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-4">📧 Email: jahanavip2005@gmail.com</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/Jahnavi-polukonda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/polukonda-jahnavi-0770b82b9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </motion.section>
    </div>
  );
}

export default App;
