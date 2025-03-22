function ApplicationManager() {
    const [applications, setApplications] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    // Fetch applications on component mount
    React.useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            setLoading(true);
            const result = await trickleListObjects('applications', 100, true);
            setApplications(result.items);
            setError(null);
        } catch (err) {
            console.error('Error fetching applications:', err);
            setError('Failed to load applications');
        } finally {
            setLoading(false);
        }
    };

    const updateApplicationStatus = async (applicationId, newStatus) => {
        try {
            const application = await trickleGetObject('applications', applicationId);
            const updatedData = {
                ...application.objectData,
                status: newStatus,
                updatedAt: new Date().toISOString()
            };
            
            await trickleUpdateObject('applications', applicationId, updatedData);
            // Refresh the applications list
            fetchApplications();
        } catch (err) {
            console.error(`Error updating application ${applicationId}:`, err);
            setError('Failed to update application status');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p>{error}</p>
                <button 
                    onClick={fetchApplications}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Application Manager</h2>
            
            {applications.length === 0 ? (
                <p className="text-gray-300">No applications found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-600">
                            {applications.map((app) => (
                                <tr key={app.objectId}>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-200">
                                        {app.objectData.fullName}
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-200">
                                        {app.objectData.email}
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-200">
                                        {new Date(app.objectData.appliedAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                            app.objectData.status === 'new' ? 'bg-blue-500 text-white' :
                                            app.objectData.status === 'reviewed' ? 'bg-yellow-500 text-gray-900' :
                                            app.objectData.status === 'accepted' ? 'bg-green-500 text-white' :
                                            app.objectData.status === 'rejected' ? 'bg-red-500 text-white' :
                                            'bg-gray-500 text-white'
                                        }`}>
                                            {app.objectData.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-200">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => updateApplicationStatus(app.objectId, 'reviewed')}
                                                className="bg-yellow-500 text-xs px-2 py-1 rounded"
                                            >
                                                Mark Reviewed
                                            </button>
                                            <button
                                                onClick={() => updateApplicationStatus(app.objectId, 'accepted')}
                                                className="bg-green-500 text-white text-xs px-2 py-1 rounded"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                onClick={() => updateApplicationStatus(app.objectId, 'rejected')}
                                                className="bg-red-500 text-white text-xs px-2 py-1 rounded"
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
