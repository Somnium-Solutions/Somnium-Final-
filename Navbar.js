function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav data-name="navbar" className="bg-gray-900/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Logo />
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-200 hover:text-blue-400 font-medium">Home</a>
                        <a href="#services" className="text-gray-200 hover:text-blue-400 font-medium">Services</a>
                        <a href="#about" className="text-gray-200 hover:text-blue-400 font-medium">About</a>
                        <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Contact</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-200">
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="block text-gray-200 hover:text-blue-400 py-2">Home</a>
                        <a href="#services" className="block text-gray-200 hover:text-blue-400 py-2">Services</a>
                        <a href="#about" className="block text-gray-200 hover:text-blue-400 py-2">About</a>
                        <a href="#contact" className="block text-gray-200 hover:text-blue-400 py-2">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
