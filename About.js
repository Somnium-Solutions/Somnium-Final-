function About() {
    const stats = [
        { number: "100+", label: "Clients Served" },
        { number: "50+", label: "Expert Team" },
        { number: "95%", label: "Success Rate" },
        { number: "24/7", label: "Support" }
    ];

    return (
        <section data-name="about" id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">About Somnium</h2>
                        <p className="text-white-600 mb-6 text-lg">
                            At Somnium IT Solutions, we're passionate about helping businesses leverage 
                            the power of technology to achieve their goals. Our team of experts brings 
                            years of experience in cloud computing, data analytics, and digital transformation.
                        </p>
                        <p className="text-white-600 text-lg">
                            We believe in building long-term partnerships with our clients, understanding 
                            their unique challenges, and delivering tailored solutions that drive real business value.
                        </p>
                    </div>
                    <div className="stats-grid">
                        <div className="grid grid-cols-2 gap-4 p-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="stats-item p-6 text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
