export default function Education() {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Vellore Institute of Technology",
      year: "2024-26",
      details: "Currently pursuing MCA with focus on advanced computing concepts"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "DAVV University, India",
      year: "2024",
      grade: "CGPA: 7.7/10",
      details: "Completed BCA with strong foundation in computer science fundamentals"
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Jawahar Navodaya Vidhyalaya (Dhar)",
      year: "2021",
      grade: "Percentage: 87.2%",
      details: "Specialized in Science and Mathematics"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Education <span className="text-purple-600">Journey</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-purple-600">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{edu.year}</p>
                    {edu.grade && <p className="text-green-600">{edu.grade}</p>}
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}