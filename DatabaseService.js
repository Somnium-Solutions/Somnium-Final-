// DatabaseService.js - Helper functions for database operations

/**
 * Save an application to the database
 * @param {Object} applicationData - The application data to save
 * @returns {Promise} - Promise resolving to the saved application
 */
async function saveApplication(applicationData) {
    try {
        // Generate a unique ID for the application
        const applicationId = `app_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        
        // Add metadata
        const enhancedData = {
            ...applicationData,
            id: applicationId,
            createdAt: new Date().toISOString(),
            status: 'new'
        };
        
        // Save to database
        const result = await trickleCreateObject('applications', enhancedData);
        console.log('Application saved successfully:', result);
        return result;
    } catch (error) {
        console.error('Error saving application:', error);
        throw error;
    }
}

/**
 * Get all applications from the database
 * @returns {Promise} - Promise resolving to an array of applications
 */
async function getApplications() {
    try {
        const result = await trickleListObjects('applications', 100, true);
        return result.items;
    } catch (error) {
        console.error('Error fetching applications:', error);
        throw error;
    }
}

/**
 * Get a specific application by ID
 * @param {string} applicationId - The ID of the application to retrieve
 * @returns {Promise} - Promise resolving to the application data
 */
async function getApplicationById(applicationId) {
    try {
        const result = await trickleGetObject('applications', applicationId);
        return result;
    } catch (error) {
        console.error(`Error fetching application ${applicationId}:`, error);
        throw error;
    }
}

/**
 * Update an application's status
 * @param {string} applicationId - The ID of the application to update
 * @param {string} status - The new status
 * @returns {Promise} - Promise resolving to the updated application
 */
async function updateApplicationStatus(applicationId, status) {
    try {
        const application = await trickleGetObject('applications', applicationId);
        const updatedData = {
            ...application.objectData,
            status: status,
            updatedAt: new Date().toISOString()
        };
        
        const result = await trickleUpdateObject('applications', applicationId, updatedData);
        return result;
    } catch (error) {
        console.error(`Error updating application ${applicationId}:`, error);
        throw error;
    }
}

/**
 * Log an application event
 * @param {string} applicationId - The ID of the application
 * @param {string} event - The event type
 * @param {Object} details - Additional event details
 * @returns {Promise} - Promise resolving to the created log entry
 */
async function logApplicationEvent(applicationId, event, details = {}) {
    try {
        const logData = {
            applicationId,
            event,
            timestamp: new Date().toISOString(),
            details
        };
        
        const result = await trickleCreateObject('application-logs', logData);
        return result;
    } catch (error) {
        console.error('Error logging application event:', error);
        // Don't throw here, just log the error
        console.error(error);
    }
}
