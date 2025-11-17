import React from 'react';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden bg-brand-dark">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-900/50 rounded-full mix-blend-screen filter blur-3xl animate-blob-animation opacity-70"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-800/50 rounded-full mix-blend-screen filter blur-3xl animate-blob-animation delay-2000 opacity-70"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-900/50 rounded-full mix-blend-screen filter blur-3xl animate-blob-animation delay-4000 opacity-70"></div>
        </div>
    );
};

export default AnimatedBackground;