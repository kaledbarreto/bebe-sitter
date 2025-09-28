export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold text-blue-600 mb-4">
            Bebe Sitter
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Your trusted baby sitting service
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
            Welcome to Bebe Sitter
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We provide professional, caring, and reliable baby sitting services for your family. 
            Our experienced sitters are here to ensure your children are safe, happy, and well-cared for.
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Experienced and vetted sitters
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Flexible scheduling
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Safe and nurturing environment
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              24/7 support available
            </li>
          </ul>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center text-white gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8">
            Book a Sitter
          </button>
          <button className="rounded-full border border-solid border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8">
            Learn More
          </button>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500">
        <p>&copy; 2024 Bebe Sitter. All rights reserved.</p>
      </footer>
    </div>
  );
}
