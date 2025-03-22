function Faq() {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "What services does Somnium IT Solutions provide?",
            answer: "We offer a comprehensive range of services including AI-powered task management, web development using MERN stack, prompt engineering, CRM systems, dashboard development, and cloud solutions."
        },
        {
            question: "How can Somnium help my business grow?",
            answer: "We help businesses transform digitally by implementing cutting-edge solutions, automating processes, and providing data-driven insights that enable better decision-making and improved efficiency."
        },
        {
            question: "What technologies do you specialize in?",
            answer: "We specialize in modern technologies including React, Node.js, MongoDB, AWS, and various AI/ML tools. We stay current with the latest technological advancements to provide the best solutions."
        },
        {
            question: "Do you provide ongoing support after project completion?",
            answer: "Yes, we offer 24/7 support and maintenance services. Our team ensures your systems run smoothly and efficiently, providing quick resolution to any issues that may arise."
        },
        {
            question: "How do you ensure project security and confidentiality?",
            answer: "We implement robust security measures and follow industry best practices. All client information is treated with strict confidentiality, and we use secure development practices throughout our projects."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section data-name="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Find answers to common questions about our services and solutions
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="font-semibold text-gray-800 dark:text-white">
                                    {faq.question}
                                </span>
                                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'} text-blue-600 transition-transform duration-300`}></i>
                            </button>
                            <div className={`px-6 pb-4 transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`}>
                                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
