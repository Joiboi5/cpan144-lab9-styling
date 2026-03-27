export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Image" 
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Card Title</h2>
        <p className="text-gray-600 mb-4">This is a sample card description.</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}