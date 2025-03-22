function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setStatus('sending');
            const response = await fetch('https://formspree.io/f/your-form-id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
                            <p className="text-blue-100 text-lg">
                                Ready to transform your business? Let's discuss how we can help you achieve your goals.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-6">
                                <div className="bg-blue-600/20 p-4 rounded-lg">
                                    <i className="fas fa-map-marker-alt text-blue-400 text-2xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                                    <p className="text-blue-100">Piscataway, New Jersey 08854, US</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <div className="bg-blue-600/20 p-4 rounded-lg">
                                    <i className="fas fa-envelope text-blue-400 text-2xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                                    <p className="text-blue-100">info@llcsomnium44.com</p>
                                    <p className="text-blue-100">llcsomnium44@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <div className="bg-blue-600/20 p-4 rounded-lg">
                                    <i className="fas fa-clock text-blue-400 text-2xl"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Working Hours</h3>
                                    <p className="text-blue-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-blue-100">Saturday - Sunday: By Appointment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-white mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white mb-2" htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                    placeholder="How can we help?"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                    placeholder="Your message..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1"
                            >
                                {status === 'sending' ? (
                                    <span className="flex items-center justify-center">
                                        <i className="fas fa-spinner fa-spin mr-2"></i>
                                        Sending...
                                    </span>
                                ) : 'Send Message'}
                            </button>
                            {status === 'success' && (
                                <div className="text-green-400 text-center">Message sent successfully!</div>
                            )}
                            {status === 'error' && (
                                <div className="text-red-400 text-center">Failed to send message. Please try again.</div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
