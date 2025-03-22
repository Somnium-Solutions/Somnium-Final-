function Footer() {
    return (
        <footer data-name="footer" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                        <p className="text-xl font-light mb-2">Let's talk about</p>
                        <p className="text-blue-400 text-lg mb-6">Love to hear from you!</p>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <i className="fas fa-map-marker-alt mt-1 text-blue-400"></i>
                                <div>
                                    <h4 className="font-semibold mb-1">Our Location</h4>
                                    <p className="text-gray-300">Piscataway, New Jersey 08854, USA</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <i className="fas fa-envelope mt-1 text-blue-400"></i>
                                <div>
                                    <h4 className="font-semibold mb-1">Email Us</h4>
                                    <p className="text-gray-300">somnium.itservices@gmail.com</p>
                                    <p className="text-gray-300">somnium.services@outlook.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a 
                                href="https://www.linkedin.com/company/somnium-it/about/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-white text-xl transition-colors"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://x.com/Somnium_service" 
                             target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-xl transition-colors">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/somnium_services/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-xl transition-colors">
    <i className="fab fa-instagram"></i>
</a>

                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Somnium IT Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
