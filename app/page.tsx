export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
            Exams Platform
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Make Examination Seamless
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Create Exams</h3>
              <p className="text-gray-600">
                Design and create custom examinations with various question types
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Timed Tests</h3>
              <p className="text-gray-600">
                Set time limits and automatic submission for fair assessments
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Instant Results</h3>
              <p className="text-gray-600">
                Get immediate feedback and detailed performance analytics
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Welcome to the Exams Platform</h2>
            <p className="text-gray-700 mb-4">
              Our platform is designed to make examinations seamless for both educators and students.
              With modern technology and intuitive design, managing and taking exams has never been easier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button 
                aria-label="Get started with the exam platform"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Get Started
              </button>
              <button 
                aria-label="Learn more about the exam platform"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
