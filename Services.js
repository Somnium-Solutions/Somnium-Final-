function Services() {
    const services = [
        {
            icon: "fa-robot",
            title: "AI-Powered Task Management",
            description: "Our AI technology takes over your routine tasks, letting you focus on strategic decisions.",
            features: ["Automated Workflows", "Smart Scheduling", "Performance Analytics"]
        },
        {
            icon: "fa-code",
            title: "Web Development (MERN Stack)",
            description: "Build a user-friendly and high-performing website or application tailored to your specific needs.",
            features: ["React Frontend", "Node.js Backend", "MongoDB Database"]
        },
        {
            icon: "fa-brain",
            title: "Prompt Engineering",
            description: "Craft compelling and effective prompts to unlock the full potential of large language models for creative content.",
            features: ["Custom Prompts", "AI Integration", "Content Optimization"]
        },
        {
            icon: "fa-users-gear",
            title: "CRM Systems",
            description: "Implement a robust CRM system to manage customer relationships, improve lead generation, and boost sales.",
            features: ["Lead Management", "Sales Analytics", "Customer Support"]
        },
        {
            icon: "fa-chart-line",
            title: "Dashboard Development",
            description: "Create intuitive and powerful dashboards that transform complex data into actionable insights.",
            features: ["Real-time Analytics", "Custom Metrics", "Interactive Charts"]
        },
        {
            icon: "fa-cloud",
            title: "Cloud Solutions",
            description: "Modernize your infrastructure with scalable cloud solutions and seamless integration.",
            features: ["Cloud Migration", "AWS Services", "24/7 Support"]
        }
    ];

    return (
        <section data-name="services" id="services" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Our Services</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Comprehensive IT solutions tailored to elevate your business
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="service-card p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="text-blue-400 mb-6">
                                <i className={`fas ${service.icon} text-3xl`}></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                            <p className="text-gray-300 mb-6">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <i className="fas fa-check text-blue-400 mr-2 text-sm"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
