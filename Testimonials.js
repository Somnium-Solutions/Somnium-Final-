function Testimonials() {
    const testimonials = [
        {
            content: "SOMNIUM IT solutions have significantly improved our project management. Their team handles all non-coding tasks, allowing us to focus on core development. Highly recommended!",
            author: "Founder @Consult Zone",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            content: "As a startup founder, managing IT and coding tasks was a challenge. SOMNIUM has been an invaluable resource in handling these tasks efficiently. Their team is proactive and reliable.",
            author: "Founder @Elan Real Estate",
            image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            content: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community. Somnium IT solutions provides a wide range of services that is reliable and trustworthy.",
            author: "Founder @Dessert Hoppers",
            image: "https://randomuser.me/api/portraits/men/2.jpg"
        }
    ];

    return (
        <section data-name="testimonials" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Testimonials</h2>
                    <p className="text-xl text-gray-300">
                        What our Customers Say
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover how SOMNIUM has empowered startups to focus on what matters most.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <i className="fas fa-quote-left text-white"></i>
                                </div>
                                <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                    <p className="text-gray-600 dark:text-gray-100 mb-6">
                                        {testimonial.content}
                                    </p>
                                    <div className="flex items-center">
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.author}
                                            className="w-12 h-12 rounded-full mr-4"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-800 dark:text-white">
                                                {testimonial.author}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
