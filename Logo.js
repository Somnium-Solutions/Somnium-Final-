function Logo() {
    return (
        <div data-name="logo" className="flex items-center space-x-2">
            <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z" fill="#3B82F6"/>
                    <path d="M20 8L30.6603 14V26L20 32L9.33975 26V14L20 8Z" fill="#ffffff"/>
                    <path d="M20 16L24.4641 18.5V23.5L20 26L15.5359 23.5V18.5L20 16Z" fill="#3B82F6"/>
                </svg>
            </div>
            <div className="font-extrabold text-2xl">
                <span className="text-blue-500">Som</span>
                <span className="text-blue-300">nium</span>
            </div>
        </div>
    );
}
