function ApplicationForm({ onClose }) {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        resume_link: '',
        why_hire: ''
    });
    const [submitStatus, setSubmitStatus] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const saveToDatabase = async (formData) => {
        try {
            const { data, error } = await window.supabaseClient
                .from('intern data')
                .insert({
                    name: formData.name,
                    email: formData.email,
                    resume_link: formData.resume_link,
                    why_hire: formData.why_hire
                })
                .select('*')
                .single();

            if (error) {
                console.error('Supabase error:', error);
                if (error.code === '23505') {
                    throw new Error('This email has already been used to submit an application.');
                }
                throw new Error(error.message);
            }

            return data;
        } catch (error) {
            console.error('Database operation failed:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('submitting');
        setErrorMessage('');

        try {
            await saveToDatabase(formData);
            setSubmitStatus('success');
            
            // Clear form
            setFormData({
                name: '',
                email: '',
                resume_link: '',
                why_hire: ''
            });

            // Close form after delay
            setTimeout(() => {
                onClose();
            }, 3000);

        } catch (error) {
            console.error('Form submission error:', error);
            setErrorMessage(error.message || 'An unexpected error occurred. Please try again.');
            setSubmitStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg p-4 w-full max-w-sm">
                {submitStatus === 'success' ? (
                    <div className="text-center py-6">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-3">
                            <i className="fas fa-check text-green-500 text-xl"></i>
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">Application Submitted!</h3>
                        <p className="text-gray-300 text-sm">
                            Thank you for your interest. We'll be in touch soon.
                        </p>
                    </div>
                ) : (
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-white">Application Form</h3>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label className="block text-gray-300 text-sm mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm mb-1">Resume Link</label>
                                <input
                                    type="url"
                                    name="resume_link"
                                    value={formData.resume_link}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                                    placeholder="Google Drive/Dropbox link"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm mb-1">Why should we hire you?</label>
                                <textarea
                                    name="why_hire"
                                    value={formData.why_hire}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-3 py-2 text-sm rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={submitStatus === 'submitting'}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium transition-colors disabled:opacity-50"
                            >
                                {submitStatus === 'submitting' ? (
                                    <span className="flex items-center justify-center">
                                        <i className="fas fa-spinner fa-spin mr-2"></i>
                                        Submitting...
                                    </span>
                                ) : 'Submit Application'}
                            </button>
                            
                            {submitStatus === 'error' && (
                                <div className="text-red-400 text-sm text-center bg-red-400/10 p-2 rounded">
                                    {errorMessage}
                                </div>
                            )}
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
