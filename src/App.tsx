import React from 'react';
import Navbar from './Navbar';
import { Mail, Github, Linkedin } from 'lucide-react';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiPostman,
  SiGithub,
  SiGit,
  SiFlutter,
  SiApache,
  SiJenkins,
  SiNginx,
  SiNodedotjs,
  SiAngular,
  SiAmazon,
  SiGooglecloud,
  SiFirebase,
  SiDocker,
  SiLinux
} from 'react-icons/si';

import { FaJava, FaGitAlt } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
    <div className="min-h-screen bg-gray-50 text-gray-900">
       <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12 font-mono leading-relaxed">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-3xl font-bold mb-4">Hey Vijay here!👋</h1>
          <p className="text-lg mb-2">
            Hi, I'm Vijay Sharan — a cs undergrad student from Chennai who loves building AI-powered solutions and building full-stack web apps.
          </p>
          <p className="text-gray-600">
            20 • Final year at Meenakshi College of Engineering • Chennai, Tamil Nadu, India
          </p>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="main-sections">About</h2>
          <p className="mb-4">
            <strong>tldr;</strong> learnt by building projects, contributing to open source, and participating in hackathons.
          </p>
          <p className="mb-4">
            I'm passionate about AI/ML, full-stack development, and automation. Love working on practical solutions 
            that solve real-world problems. Strong believer in open knowledge & FOSS culture. When I'm not coding, 
            I'm probably binge-watching my favourite sitcoms. 
          </p>
          <p>
            Currently exploring multi-agent systems, generative AI, and scalable web architectures. 
          </p>
           <p>
            <a
              href='https://tinyurl.com/vijaysharanresume'
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-black hover:text-blue-900 hover:no-underline hover:font-bold transition-all duration-150"
            >
            <p>Take a look at my resume 🔗</p>
            </a>
          </p>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="main-sections">Some cool places I worked at 👇</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-bold">GirlScript Summer of Code</h3>
              <p className="text-gray-600 mb-2">Aug 2025 – Present • Open Source Contributor</p>
              <p>Actively contributing to open-source repositories in Python and full-stack development.</p>
            </div>

            <div>
              <h3 className="font-bold">CodeKrafters Coding Club, Meenakshi College of Engineering</h3>
              <p className="text-gray-600 mb-2">Mar 2025 – present • Vice President</p>
              <p>Spearheading hackathon organization, sponsorships, and workshop series. Hosting seminars and mentoring juniors in AI, full stack development, and problem-solving. Promoted from Content Head → VP & Core Tech Team lead.</p>
            </div>

            <div>
              <h3 className="font-bold">ZScore Technologies</h3>
              <p className="text-gray-600 mb-2">Jun 2025 – Aug 2025 • QA & Backend Data Automation Intern</p>
              <p>Built robust Python pipeline to standardize insurance claim datasets using Pandas + NumPy. Automated invalid field cleanup, header normalization, structural validation. Added real-time logging and error handling for AutoQC model pipelines.</p>
            </div>

            <div>
              <h3 className="font-bold">InternPro</h3>
              <p className="text-gray-600 mb-2">Jun 2025 – Jul 2025 • Software Development Intern (Remote)</p>
              <p>Built & shipped AI-powered Budget Manager as desktop + web app. Developed authentication, dashboard visualizations, AI-powered finance insights using TypeScript + Electron + web stack.</p>
            </div>

            <div>
              <h3 className="font-bold">CodSoft</h3>
              <p className="text-gray-600 mb-2">Jan 2024 – Feb 2024 • Python Developer Intern (Remote)</p>
              <p>Built GUI apps in Tkinter (Password generator, Calculator) and backend Python automation scripts. Applied Pandas, Tkinter, NumPy, Seaborn, Django.</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="main-sections">Some things I built</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">BloodyQuiz (2025)</h3>
              <p className="text-gray-600 mb-1">Multiplayer quiz platform • Node.js, Express.js, JavaScript</p>
              <p>Won VAC Hackathon 1st Prize. Real-time multiplayer quiz with dynamic scoring.</p>
            </div>

            <div>
              <h3 className="font-bold">GailTrackr (2024)</h3>
              <p className="text-gray-600 mb-1">Blockchain + React Native + Flutter</p>
              <p>Secure, geolocation-based attendance tracking with AI data processing. Won SIH Internal Hackathon 1st Prize.</p>
            </div>

            <div>
              <h3 className="font-bold">AI Budget Manager (2025)</h3>
              <p className="text-gray-600 mb-1">Full-stack TypeScript, Electron</p>
              <p>Intelligent finance tracker with expense insights, built as desktop & web app during InternPro internship.</p>
            </div>

            <div>
              <h3 className="font-bold">Reddit Fake News Detection (2025)</h3>
              <p className="text-gray-600 mb-1">Python, NLP, Pandas, Scikit-learn, NLTK</p>
              <p>Built precision-heavy classifier for real/fake content detection with high accuracy.</p>
            </div>

            <div>
              <h3 className="font-bold">NLP Projects Collection (2025)</h3>
              <p className="text-gray-600 mb-1">HuggingFace, Transformers, BERT</p>
              <p>OCR systems, chatbots, custom sentiment analyzers built during Naan Mudhalvan program.</p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="main-sections">Achievements</h2>
          <ul className="space-y-2">
            <li><strong>VAC Intra-College Hackathon 2025</strong> — 1st Prize (BloodyQuiz)</li>
            <li><strong>Smart India Hackathon Internal 2024</strong> — 1st Prize (GailTrackr)</li>
            <li><strong>Invente'23 Hackathon @ SSN</strong> — Runner-up (₹1500 cash prize)</li>
          </ul>
        </section>

        {/* Skills */}
        <h2 className="main-sections">Skills</h2>
        <section> 
          <section>
  <div className="skills-section">
    <div className="skills-wrapper">
  <div className="skill-badge"><SiC size={18} /><span className="skill-label">C</span></div>
  <div className="skill-badge"><SiCplusplus size={18} /><span className="skill-label">C++</span></div>
  <div className="skill-badge"><SiPython size={18} /><span className="skill-label">Python</span></div>
  <div className="skill-badge"><FaJava size={18} /><span className="skill-label">Java</span></div>
  <div className="skill-badge"><SiJavascript size={18} /><span className="skill-label">JavaScript</span></div>
  <div className="skill-badge"><SiTypescript size={18} /><span className="skill-label">TypeScript</span></div>

  <div className="skill-badge"><SiHtml5 size={18} /><span className="skill-label">HTML5</span></div>
  <div className="skill-badge"><SiCss3 size={18} /><span className="skill-label">CSS3</span></div>
  <div className="skill-badge"><SiTailwindcss size={18} /><span className="skill-label">Tailwind CSS</span></div>
  <div className="skill-badge"><SiReact size={18} /><span className="skill-label">React.js</span></div>
  <div className="skill-badge"><SiAngular size={18} /><span className="skill-label">Angular.js</span></div>

  <div className="skill-badge"><SiNodedotjs size={18} /><span className="skill-label">Node.js</span></div>
  <div className="skill-badge"><SiDjango size={18} /><span className="skill-label">Django</span></div>

  <div className="skill-badge"><SiTensorflow size={18} /><span className="skill-label">TensorFlow</span></div>
  <div className="skill-badge"><SiPytorch size={18} /><span className="skill-label">PyTorch</span></div>

  <div className="skill-badge"><SiMysql size={18} /><span className="skill-label">MySQL</span></div>
  <div className="skill-badge"><SiPostgresql size={18} /><span className="skill-label">PostgreSQL</span></div>
  <div className="skill-badge"><SiMongodb size={18} /><span className="skill-label">MongoDB</span></div>
  <div className="skill-badge"><SiSupabase size={18} /><span className="skill-label">Supabase</span></div>

  <div className="skill-badge"><FaGitAlt size={18} /><span className="skill-label">Git</span></div>
  <div className="skill-badge"><SiPostman size={18} /><span className="skill-label">Postman</span></div>

  <div className="skill-badge"><SiFlutter size={18} /><span className="skill-label">Flutter</span></div>
  
  <div className="skill-badge"><SiDocker size={18} /><span className="skill-label">Docker</span></div>
  <div className="skill-badge"><SiLinux size={18} /><span className="skill-label">Linux</span></div>

  <div className="skill-badge"><SiApache size={18} /><span className="skill-label">Apache</span></div>
  <div className="skill-badge"><SiJenkins size={18} /><span className="skill-label">Jenkins</span></div>
  <div className="skill-badge"><SiNginx size={18} /><span className="skill-label">Nginx</span></div>

  <div className="skill-badge"><SiAmazon size={18} /><span className="skill-label">AWS</span></div>
  <div className="skill-badge"><SiGooglecloud size={18} /><span className="skill-label">GCP</span></div>
  <div className="skill-badge"><SiFirebase size={18} /><span className="skill-label">Firebase</span></div>
</div>

  </div>
</section>
        </section>
<br />

        {/* Contact */}
        <section>
          <h2 className="main-sections">Get in touch</h2>
          <div className="space-y-3">
            <p>
              <a 
                href="mailto:11224.vijaysharan@gmail.com" 
                className="inline-flex items-center hover:font-bold gap-2 hover:no-underline"
              >
                <Mail size={16} />
                drop a line at 11224.vijaysharan@gmail.com
              </a>
            </p>
            <p>
              <a 
                href="https://github.com/VJsharan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center hover:font-bold gap-2 hover:no-underline"
              >
                <Github size={16} />
                check out my code on GitHub
              </a>
            </p>
            <p>
              <a 
                href="https://linkedin.com/in/vijaysharan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center hover:font-bold gap-2 hover:no-underline"
              >
                <Linkedin size={16} />
                connect on LinkedIn
              </a>
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
            Built using React, TypeScript and with ❤️ by <a href="https://linkedin.com/in/vijaysharan" className="text-blue-500 hover:no-underline hover:font-bold">Vijay Sharan</a>
            </p>
          </div>
        </section>
      </div>
     <br />
     <br />
     <br />
    </div>
    </div>
  );
}

export default App;