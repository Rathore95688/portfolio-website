import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">

        {/* Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full border border-cyan-500 flex items-center justify-center text-cyan-400">
            {"</>"}
          </div>

          <div className="w-12 h-12 rounded-full border border-purple-500 flex items-center justify-center text-purple-400">
            QA
          </div>

          <div className="w-12 h-12 rounded-full border border-pink-500 flex items-center justify-center text-pink-400">
            🌐
          </div>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-white"
        >
          Welcome to my
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Portfolio Website
        </motion.h2>

        <p className="mt-5 text-gray-400">
          Frontend Developer • QA Tester
        </p>

        {/* Loading line */}
        <div className="mt-10 w-72 h-[4px] bg-gray-700 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        </div>

      </div>
    </motion.div>
  );
};

export default SplashScreen;