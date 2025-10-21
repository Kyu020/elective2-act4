export default function About() {
  const experiences = [
    {
      year: "2022 - Present",
      role: "Senior Full Stack Developer",
      company: "TechInnovate Inc.",
      description: "Leading development of web applications using React, Next.js, and cloud technologies."
    },
    {
      year: "2020 - 2022",
      role: "Frontend Developer",
      company: "Digital Solutions LLC",
      description: "Built responsive web interfaces and collaborated with design teams to create user-friendly experiences."
    },
    {
      year: "2018 - 2020",
      role: "Junior Developer",
      company: "StartUp Ventures",
      description: "Started my career developing mobile apps and learning modern web technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An aspiring web-developer on a quest of improving their skills towards professional coding.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hello! I&apos;m Aaron Jan Estacio, a BSIT student learning his way towards being a fullstack developer 
                  by building creative and innovative digital experiences. Currently undertaking this journey since the 
                  beginning of college, and I&apos;ve been hooked ever since.
                </p>
                <p>
                  I specialize in building scalable web applications using modern technologies 
                  like React, Next.js, Node.js, and TypeScript. I believe in writing clean, 
                  maintainable code and following best practices.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <span className="text-blue-600 font-semibold">{exp.year}</span>
                        <h3 className="text-xl font-bold text-gray-900 mt-2">{exp.role}</h3>
                        <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                        <p className="text-gray-600">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Bachelor of Science in Information Technology</h4>
                  <p className="text-blue-600">Gordon College</p>
                  <p className="text-gray-600 text-sm">2023 - Present</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-3">
                {[
                  "Filler Data",
                  "Filler Data",
                  "Filler Data",
                  "Filler Data"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fun Facts</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">25+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}