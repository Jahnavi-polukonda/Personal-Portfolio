import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/janu.jpg"   // ✅ place your photo in public/ as janu.jpg
          alt="Jahnavi"
          className="w-48 h-48 rounded-full border-4 border-white shadow-lg mb-6 transform transition-transform duration-300 hover:scale-110"
        />
        <h1 className="text-5xl font-extrabold mb-2 drop-shadow-lg">
          Hi, I’m Jahnavi
        </h1>
        <p className="text-xl mb-4 drop-shadow">
          Aspiring Software Developer | C++ | DSA
        </p>
        <div className="flex gap-4">
          <a
            href="https://drive.google.com/file/d/1wpZzpaWaUE18Vfo7gNXAcCY5Np_t2WDv/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Resume
          </a>
          <a
            href="https://github.com/Jahnavi-polukonda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/polukonda-jahnavi-0770b82b9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
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
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transform hover:-translate-y-2 transition">
            <h3 className="font-semibold mb-2 text-indigo-600">Technical</h3>
            <p>C++, DSA, OOPs, SQL, Hadoop basics</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transform hover:-translate-y-2 transition">
            <h3 className="font-semibold mb-2 text-indigo-600">Tools</h3>
            <p>VS Code, Git, Linux</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-xl transform hover:-translate-y-2 transition">
            <h3 className="font-semibold mb-2 text-indigo-600">Soft Skills</h3>
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
          {/* Project 1 */}
          <div className="p-6 bg-gray-50 border-l-4 border-indigo-500 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">
              💳 Online Payment Fraud Detection using ML
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              ⚡ Built with Python to detect fraudulent online transactions.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              💡 Motivation: Online payments are increasing rapidly, but so are
              fraudulent activities. Detecting fraud in real-time is critical.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              🌍 Importance: Helps banks reduce financial risk and protect
              customers.
            </p>
            <a
              href="https://github.com/Jahnavi-polukonda/Online-payment-fraud-detection-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-medium hover:underline"
            >
              GitHub →
            </a>
          </div>

          {/* Project 2 */}
          <div className="p-6 bg-gray-50 border-l-4 border-purple-500 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">🌐 Portfolio Website</h3>
            <p className="text-sm text-gray-700 mb-2">
              ⚡ A personal portfolio built using React & Tailwind CSS.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              💡 Motivation: To showcase my skills, projects, and achievements
              in a professional way.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              🌍 Importance: Acts as a digital resume and first impression for
              recruiters and interviewers.
            </p>
            <a
              href="https://github.com/Jahnavi-polukonda/Personal-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-medium hover:underline"
            >
              GitHub →
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
        <p className="text-lg font-medium">
          Prasad V. Potluri Siddhartha Institute Of Technology
        </p>
        <p>Bachelor of Information Technology - CGPA : 8.86 (2026)</p>
      </motion.section>

      {/* Certifications */}
      <motion.section
        className="py-20 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Smart-Interviews: Data Structures and Algorithms</li>
          <li>✅ NPTEL: Problem Solving through Programming using C</li>
          <li>✅ NPTEL: Data Base Management System</li>
          <li>
            ✅ Infosys Springboard – Programming Using C++, Basics of Python
          </li>
        </ul>
      </motion.section>

      {/* Achievements */}
      <motion.section
        className="py-20 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Achievements</h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            🏆 Presented a poster titled “Cloud-Based e-Learning Platforms” at
            EPISTEMICON-2K24, Andhra Loyola Institute of Engineering and
            Technology (2024).
          </li>
          <li>
            💡 Participated in Flipkart GRiD 5.0 – Software Development Track,
            organised by Flipkart (2024).
          </li>
           <li>
            🚀 Participated in the 8-Hours Hackathon (Java Fullstack) 2025 organized 
            by the Department of Information Technology, PVP Siddhartha Institute of 
            Technology on 24th July 2025.
          </li>
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
        <p className="mb-2">📧 Email: jahanavip2005@gmail.com</p>
        <p className="mb-4">📞 Phone: +91-8074274816</p>
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
