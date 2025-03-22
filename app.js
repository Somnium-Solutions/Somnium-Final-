function App() {
    return (
        <div data-name="app">
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Opportunities />
            <Testimonials />
            <Contact />
            <Footer />
            <ChatBot />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
