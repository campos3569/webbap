import React, { useState, useEffect, useRef } from 'react';

// --- ÍCONOS SVG COMO COMPONENTES ---
const ShoppingCartIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
);
const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
);
const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);


// --- ESTILOS GLOBALES ---
const GlobalStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;600&display=swap');
        
        body {
            background-color: #121212;
            font-family: 'Poppins', sans-serif;
            color: #f5f5f5;
        }
        
        .font-bebas {
            font-family: 'Bebas Neue', cursive;
        }
        
        .hero-bg {
            background-image: linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 1)), url('https://placehold.co/1920x1080/121212/121212?text=');
            background-size: cover;
            background-position: center;
        }

        .btn-primary {
            background-color: #1DB954;
            transition: background-color 0.3s, transform 0.3s;
        }
        .btn-primary:hover {
            background-color: #1ed760;
            transform: translateY(-3px);
        }

        .card-product {
            background-color: #1e1e1e;
            border: 1px solid #2d2d2d;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-product:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
        }
        
        .fade-in-section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `}</style>
);

// --- COMPONENTES DE LA APLICACIÓN ---

// Header
const Header = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-3xl font-bebas text-white tracking-wider">FÚTBOL<span className="text-[#1DB954]">TOTAL</span></a>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#featured" onClick={(e) => { e.preventDefault(); onNavigate('featured'); }} className="text-gray-300 hover:text-[#1DB954] transition">Destacados</a>
                    <a href="#categories" onClick={(e) => { e.preventDefault(); onNavigate('categories'); }} className="text-gray-300 hover:text-[#1DB954] transition">Categorías</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="text-gray-300 hover:text-[#1DB954] transition">Contacto</a>
                    <button className="text-white hover:text-[#1DB954] transition"><ShoppingCartIcon /></button>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>
            {/* Menú Móvil */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#1e1e1e] flex flex-col items-center space-y-4 py-4">
                    <a href="#featured" onClick={() => { onNavigate('featured'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-[#1DB954] transition">Destacados</a>
                    <a href="#categories" onClick={() => { onNavigate('categories'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-[#1DB954] transition">Categorías</a>
                    <a href="#contact" onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className="text-gray-300 hover:text-[#1DB954] transition">Contacto</a>
                </div>
            )}
        </header>
    );
};

// Hero Section
const Hero = ({ onNavigate }) => (
    <section className="min-h-screen flex items-center justify-center hero-bg pt-20">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-8xl font-bebas text-white mb-4 tracking-wider">EQUIPA TU PASIÓN</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Encuentra los mejores tacos, balones y jerseys para llevar tu juego al siguiente nivel.
            </p>
            <button onClick={() => onNavigate('featured')} className="font-bebas text-xl text-white py-3 px-12 rounded-lg btn-primary tracking-widest">
                VER PRODUCTOS
            </button>
        </div>
    </section>
);

// Featured Products
const FeaturedProducts = React.forwardRef((props, ref) => {
    const products = [
        { name: "Tacos 'Vortex' Pro", price: "$199.99", img: "https://placehold.co/600x600/1e1e1e/1DB954?text=Tacos+Pro" },
        { name: "Balón Oficial 'Quantum'", price: "$149.99", img: "https://placehold.co/600x600/1e1e1e/1DB954?text=Bal%C3%B3n+Oficial" },
        { name: "Jersey Local 24/25", price: "$99.99", img: "https://placehold.co/600x600/1e1e1e/1DB954?text=Jersey+24/25" },
    ];

    return (
        <section id="featured" ref={ref} className="py-20 bg-[#181818]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 fade-in-section">
                    <h2 className="text-4xl md:text-5xl font-bebas text-white tracking-wide">Productos Destacados</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="card-product rounded-lg overflow-hidden fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                            <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                                <p className="text-xl text-[#1DB954] mt-2">{product.price}</p>
                                <button className="w-full mt-4 py-2 font-semibold text-white rounded-lg btn-primary">Añadir al Carrito</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

// Categories Section
const Categories = React.forwardRef((props, ref) => (
    <section id="categories" ref={ref} className="py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12 fade-in-section">
                <h2 className="text-4xl md:text-5xl font-bebas text-white tracking-wide">Explora por Categoría</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative h-80 rounded-lg overflow-hidden group fade-in-section">
                    <img src="https://placehold.co/600x800/121212/f5f5f5?text=Tacos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h3 className="text-4xl font-bebas text-white tracking-wider">Tacos</h3>
                    </div>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden group fade-in-section" style={{ transitionDelay: '150ms' }}>
                    <img src="https://placehold.co/600x800/121212/f5f5f5?text=Jerseys" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h3 className="text-4xl font-bebas text-white tracking-wider">Jerseys</h3>
                    </div>
                </div>
                 <div className="relative h-80 rounded-lg overflow-hidden group fade-in-section" style={{ transitionDelay: '300ms' }}>
                    <img src="https://placehold.co/600x800/121212/f5f5f5?text=Balones" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h3 className="text-4xl font-bebas text-white tracking-wider">Balones</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
));


// Contact Section
const Contact = React.forwardRef((props, ref) => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" ref={ref} className="py-20 bg-[#181818]">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12 fade-in-section">
                    <h2 className="text-4xl md:text-5xl font-bebas text-white tracking-wide">Contáctanos</h2>
                    <p className="text-gray-400 mt-2">¿Tienes alguna pregunta? Escríbenos.</p>
                </div>
                <div className="max-w-xl mx-auto">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6 fade-in-section">
                            <input type="text" placeholder="Tu Nombre" required className="w-full bg-[#2d2d2d] border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition" />
                            <input type="email" placeholder="Tu Email" required className="w-full bg-[#2d2d2d] border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition" />
                            <textarea placeholder="Tu Mensaje" rows="5" required className="w-full bg-[#2d2d2d] border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition"></textarea>
                            <button type="submit" className="w-full font-bebas text-xl text-white py-3 rounded-lg btn-primary tracking-widest">Enviar</button>
                        </form>
                    ) : (
                        <div className="text-center bg-[#1e1e1e] p-8 rounded-lg">
                            <h3 className="text-3xl font-bold text-[#1DB954]">¡Mensaje Enviado!</h3>
                            <p className="text-gray-300 mt-2">Gracias por contactarnos. Te responderemos pronto.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
});

// Footer
const Footer = () => (
    <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
            <p>&copy; 2025 Fútbol Total. La cancha es tuya.</p>
        </div>
    </footer>
);

// --- COMPONENTE PRINCIPAL ---
export default function App() {
    const sectionRefs = {
        featured: useRef(null),
        categories: useRef(null),
        contact: useRef(null),
    };

    const handleNavigate = (section) => {
        sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    return (
        <>
            <GlobalStyles />
            <Header onNavigate={handleNavigate} />
            <main>
                <Hero onNavigate={handleNavigate} />
                <FeaturedProducts ref={sectionRefs.featured} />
                <Categories ref={sectionRefs.categories} />
                <Contact ref={sectionRefs.contact} />
            </main>
            <Footer />
        </>
    );
}

