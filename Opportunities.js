function Opportunities() {
    const [activeTab, setActiveTab] = React.useState('courses');
    const [selectedCategory, setSelectedCategory] = React.useState('all');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [showApplicationForm, setShowApplicationForm] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 3;

    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            category: "Web Development",
            level: "Intermediate",
            duration: "12 weeks",
            provider: "Google",
            description: "Master MERN stack and modern web development practices",
            image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 2,
            title: "AI & Machine Learning",
            category: "Artificial Intelligence",
            level: "Advanced",
            duration: "16 weeks",
            provider: "Microsoft",
            description: "Deep dive into neural networks and machine learning algorithms",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 3,
            title: "Data Science Fundamentals",
            category: "Data Science",
            level: "Basic",
            duration: "8 weeks",
            provider: "IBM",
            description: "Learn data analysis, visualization, and statistical methods",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 4,
            title: "Digital Marketing Fundamentals",
            category: "Digital Marketing",
            level: "Basic",
            duration: "8 weeks",
            provider: "Google Digital Garage",
            description: "Master the essentials of digital marketing, including SEO, social media, and content strategy",
            image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
    ];

    const internships = [
        {
            id: 1,
            title: "Frontend Developer Intern",
            category: "Web Development",
            duration: "6 weeks",
            certificate: "Certificate of Completion",
            location: "Remote",
            description: "Work on real-world projects using React and modern frontend technologies",
            requirements: ["React.js", "JavaScript", "CSS3"]
        },
        {
            id: 2,
            title: "ML Engineer Intern",
            category: "Artificial Intelligence",
            duration: "6 weeks",
            certificate: "Certificate of Excellence",
            location: "Remote",
            description: "Develop and implement machine learning models for production",
            requirements: ["Python", "TensorFlow", "PyTorch"]
        },
        {
            id: 3,
            title: "Data Analyst Intern",
            category: "Data Science",
            duration: "6 weeks",
            certificate: "Certificate of Achievement",
            location: "Remote",
            description: "Analyze complex datasets and create meaningful visualizations",
            requirements: ["SQL", "Python", "Tableau"]
        },
        {
            id: 4,
            title: "Digital Marketing Intern",
            category: "Digital Marketing",
            duration: "6 weeks",
            certificate: "Certificate of Digital Marketing Excellence",
            location: "Remote",
            description: "Gain hands-on experience in digital marketing campaigns, SEO, and social media management",
            requirements: ["SEO", "Social Media", "Content Marketing", "Analytics"]
        }
    ];

    const categories = ["all", "Web Development", "Artificial Intelligence", "Data Science", "Digital Marketing"];

    const filteredItems = React.useMemo(() => {
        const items = activeTab === 'courses' ? courses : internships;
        return items.filter(item => {
            const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
            const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                item.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeTab, selectedCategory, searchTerm]);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    const handleOpenApplicationForm = () => {
        setShowApplicationForm(true);
    };

    const handleCloseApplicationForm = () => {
        setShowApplicationForm(false);
    };

    return (
        <section id="opportunities" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-white">Looking to Contribute?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join our community of learners and innovators. Explore courses and internships tailored for future tech leaders.
                    </p>
                    
                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => {
                                setActiveTab('courses');
                                setCurrentPage(1);
                            }}
                            className={`px-6 py-2 rounded-full ${
                                activeTab === 'courses'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            Courses
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('internships');
                                setCurrentPage(1);
                            }}
                            className={`px-6 py-2 rounded-full ${
                                activeTab === 'internships'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            Internships
                        </button>
                    </div>

                    {/* Search and Filter Controls */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                        />
                        <select
                            value={selectedCategory}
                            onChange={(e) => {
                                setSelectedCategory(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedItems.map(item => (
                        <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            {activeTab === 'courses' && (
                                <div>
                                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                            <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                                                {item.level}
                                            </span>
                                        </div>
                                        <p className="text-gray-300 mb-4">{item.description}</p>
                                        <div className="flex justify-between items-center text-sm text-gray-400">
                                            <span><i className="fas fa-clock mr-2"></i>{item.duration}</span>
                                            <span><i className="fas fa-building mr-2"></i>{item.provider}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {activeTab === 'internships' && (
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                        <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                                            {item.location}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 mb-4">{item.description}</p>
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {item.requirements.map((req, index) => (
                                                <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                                                    {req}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm text-gray-400">
                                        <span><i className="fas fa-clock mr-2"></i>{item.duration}</span>
                                        <span><i className="fas fa-certificate mr-2"></i>{item.certificate}</span>
                                    </div>
                                </div>
                            )}
                            
                            <div className="px-6 pb-6">
                                <button
                                    onClick={handleOpenApplicationForm}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-8 gap-4">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="p-2 rounded-full bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                        >
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <span className="text-gray-300">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-full bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                        >
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                )}

                {/* Application Form Modal */}
                {showApplicationForm && (
                    <ApplicationForm onClose={handleCloseApplicationForm} />
                )}
            </div>
        </section>
    );
}
