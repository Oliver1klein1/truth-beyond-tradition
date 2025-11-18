export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center relative z-10">
        {/* Animated Logo/Text */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text animate-pulse-slow">
            Truth Beyond Tradition
          </h1>
        </div>
        
        {/* Animated Spinner */}
        <div className="flex justify-center items-center mb-8">
          <div className="relative w-16 h-16">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
            {/* Cyan spinning arc */}
            <div className="absolute inset-0 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin-slow"></div>
            {/* Purple spinning arc (reverse) */}
            <div className="absolute inset-0 border-4 border-transparent border-r-purple-500 rounded-full animate-spin-slow-reverse"></div>
            {/* Inner glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-500/30 rounded-full blur-sm animate-pulse-slow"></div>
          </div>
        </div>
        
        {/* Loading Dots */}
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div 
            className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-bounce-slow shadow-lg shadow-cyan-500/50" 
            style={{ animationDelay: '0ms' }}
          ></div>
          <div 
            className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-bounce-slow shadow-lg shadow-purple-500/50" 
            style={{ animationDelay: '500ms' }}
          ></div>
          <div 
            className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-bounce-slow shadow-lg shadow-cyan-500/50" 
            style={{ animationDelay: '1000ms' }}
          ></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-400 text-sm font-medium tracking-wider uppercase animate-pulse-slow">
          Loading...
        </p>
      </div>
    </div>
  );
}
