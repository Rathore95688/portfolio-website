const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]">
      <div className="text-center">
        <div className="flex justify-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full border border-cyan-500 flex items-center justify-center">
            💻
          </div>

          <div className="w-12 h-12 rounded-full border border-purple-500 flex items-center justify-center">
            👨‍💻
          </div>

          <div className="w-12 h-12 rounded-full border border-pink-500 flex items-center justify-center">
            🌐
          </div>
        </div>

        <h1 className="text-5xl font-bold">
          Welcome to my
        </h1>

        <h1 className="text-5xl font-bold text-cyan-400 mt-2">
          Portfolio Website
        </h1>

        <p className="mt-5 text-gray-400">
          Creating Websites That Feel Alive.
        </p>

        <div className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-cyan-400 animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;