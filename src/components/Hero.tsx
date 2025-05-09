import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Pankaj Panchal
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              A passionate MCA student and aspiring software developer specializing in web development
              and problem-solving.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/pankaj-panchal-4b977031b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:pankaj.panchal2024@vitstudent.ac.in"
                className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+917723803977"
                className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="src\assets\481839240_1688668942045384_4546068097893802225_n.jpg"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl" height={"600px"} width={"400px"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}