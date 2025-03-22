// EmailService.js - Helper functions for sending emails

/**
 * Send application notification emails
 * @param {Object} application - The application data
 * @returns {Promise} - Promise resolving when emails are sent
 */
async function sendApplicationEmails(application) {
    try {
        // Common template parameters
        const commonParams = {
            from_name: application.fullName,
            from_email: application.email,
            resume_link: application.resumeLink,
            message: application.whyConsider,
            reply_to: application.email,
            application_id: application.id
        };

        // Send to first recipient (Somnium IT)
        const firstEmailPromise = emailjs.send(
            'service_gad8qxg',
            'template_7nwp4wp',
            {
                ...commonParams,
                to_name: 'Somnium IT Services',
                to_email: 'somnium.itservices@gmail.com'
            },
            'BtH2bKqzGIFJ7UZxI'
        );

        // Send to second recipient (Personal)
        const secondEmailPromise = emailjs.send(
            'service_gad8qxg',
            'template_7nwp4wp',
            {
                ...commonParams,
                to_name: 'Syed Kamaal',
                to_email: 'asyedkamaal6@gmail.com'
            },
            'BtH2bKqzGIFJ7UZxI'
        );

        // Wait for both emails to be sent
        const [firstResponse, secondResponse] = await Promise.all([
            firstEmailPromise,
            secondEmailPromise
        ]);

        console.log('First email sent:', firstResponse);
        console.log('Second email sent:', secondResponse);
        
        return {
            success: true,
            firstResponse,
            secondResponse
        };
    } catch (error) {
        console.error('Error sending application emails:', error);
        throw error;
    }
}

/**
 * Send a confirmation email to the applicant
 * @param {Object} application - The application data
 * @returns {Promise} - Promise resolving when the email is sent
 */
async function sendApplicantConfirmation(application) {
    try {
        const response = await emailjs.send(
            'service_gad8qxg',
            'template_7nwp4wp', // You might want a different template for confirmation
            {
                to_name: application.fullName,
                to_email: application.email,
                from_name: 'Somnium IT Services',
                from_email: 'somnium.itservices@gmail.com',
                message: `Thank you for your application! We've received your submission and will review it shortly.`,
                reply_to: 'somnium.itservices@gmail.com',
                application_id: application.id
            },
            'BtH2bKqzGIFJ7UZxI'
        );
        
        console.log('Confirmation email sent:', response);
        return response;
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        // Don't throw here to prevent blocking the main flow
        return {
            success: false,
            error: error.message
        };
    }
}
