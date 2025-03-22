function Hero() {
    return (
        <section data-name="hero" id="home" className="hero-section pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
            <div className="absolute inset-0 hero-gradient"></div>
            <div className="absolute inset-0 hero-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Transforming Ideas</span> into Digital Reality, and More
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl font-light leading-relaxed mb-12">
                            At Somnium, we specialize in delivering tailored IT solutions that align with your business goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 mb-12">
                            <a href="#contact" className="bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl text-center text-lg transform hover:-translate-y-1">
                                Get Started
                            </a>
                            <a href="#services" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-center text-lg transform hover:-translate-y-1">
                                Our Services
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="tech-icon-wrapper" style={{ transform: 'scale(0.85)' }}>
                                <i className="fab fa-react tech-icon"></i>
                                <span className="tech-label">React</span>
                            </div>
                            <div className="tech-icon-wrapper" style={{ transform: 'scale(0.85)' }}>
                                <i className="fab fa-node-js tech-icon"></i>
                                <span className="tech-label">Node.js</span>
                            </div>
                            <div className="tech-icon-wrapper" style={{ transform: 'scale(0.85)' }}>
                                <i className="fab fa-html5 tech-icon"></i>
                                <span className="tech-label">HTML5</span>
                            </div>
                            <div className="tech-icon-wrapper" style={{ transform: 'scale(0.85)' }}>
                                <svg className="tech-icon" viewBox="0 0 50 31" width="40" height="40">
                                    <path 
                                        fillRule="evenodd" 
                                        clipRule="evenodd" 
                                        d="M25 0c-6.667 0-10.833 3.333-12.5 10 2.5-3.333 5.417-4.583 8.75-3.75 1.904.477 3.266 1.864 4.77 3.401C28.288 11.966 31.06 15 37.5 15c6.667 0 10.833-3.333 12.5-10-2.5 3.333-5.417 4.583-8.75 3.75-1.904-.477-3.266-1.864-4.77-3.401C34.212 3.034 31.44 0 25 0zM12.5 15C5.833 15 1.667 18.333 0 25c2.5-3.333 5.417-4.583 8.75-3.75 1.904.477 3.266 1.864 4.77 3.401C15.788 26.966 18.56 30 25 30c6.667 0 10.833-3.333 12.5-10-2.5 3.333-5.417 4.583-8.75 3.75-1.904-.477-3.266-1.864-4.77-3.401C21.712 18.034 18.94 15 12.5 15z" 
                                        fill="currentColor"
                                    />
                                </svg>
                                <span className="tech-label">Tailwind</span>
                            </div>
                            <div className="tech-icon-wrapper" style={{ transform: 'scale(0.85)' }}>
                                <i className="fas fa-robot tech-icon"></i>
                                <span className="tech-label">AI</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative dashboard-container">
                        <div className="dashboard-preview">
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_0ce047c440000001/8433955c-3c3a-4ce8-b7cf-1ed59c8e27c7.jpeg" 
                                alt="Dashboard Preview" 
                                className="rounded-2xl shadow-2xl w-full"
                            />
                            <div className="dashboard-glow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
