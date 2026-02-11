import React, { useRef } from 'react';
import {
    Youtube,
    Trophy,
    Users,
    Target,
    Heart,
    Award,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    Sparkles,
    Flag,
    Zap,
    Shield,
    Star,
    Play,
    Instagram,
    Twitter,
    Linkedin
} from 'lucide-react';
import './App.css';
import heroBackground from '/public/kartlejos.png';

function App() {
    const formRef = useRef(null);

    const mainTeam = [
        {
            name: "José Ferreira",
            role: "Piloto Principal",
            category: "AFG Racing",
            bio: "La juventud y el talento se combinan en Jose, ya es referente en las pistas, destacando por su consistencia y habilidad en condiciones adversas.",
            achievements: ["3 victorias en temporada", "Pole Position récord"],
            image: "/jose.jpeg"
        },
        {
            name: "Fernando Ferreira",
            role: "Piloto Principal",
            category: "AFG Racing",
            bio: "Fernando ha demostrado ser uno de los talentos más prometedores. Su dedicación y técnica lo han llevado a obtener múltiples podios en categorías nacionales.",
            achievements: ["2 podios consecutivos", "Vuelta rápida", "Titulo Campeon nacional de karting"],
            image: "/fer.jpeg"
        }
    ];

    const juniorTeam = [
        {
            name: "Manuel Godoy",
            role: "Piloto Junior",
            category: "AFG Racing Jr.",
            bio: "Manuel representa el futuro del equipo. Su progresión en karting ha sido excepcional, mostrando madurez y competitividad desde sus inicios.",
            achievements: ["Campeón Promesas 2024", "Mejor Novato"],
            image: "/manu.jpeg"
        },
        {
            name: "William Arce",
            role: "Piloto Junior",
            category: "AFG Racing Jr.",
            bio: "William combina velocidad e inteligencia en pista. Su capacidad de aprendizaje y adaptación lo posicionan como una gran promesa del equipo.",
            achievements: ["Subcampeón Junior", "Piloto Revelación"],
            image: "/will.jpeg"
        }
    ];

    const staff = [
        {
            name: "Fernando Javier Ferreira",
            role: "Manager Deportivo",
            bio: "Con más de 20 años de experiencia en el automovilismo, lidera la visión estratégica del equipo, gestionando el desarrollo deportivo y las alianzas comerciales.",
            image: "/javier.jpeg"
        },
        {
            name: "Fernando Ferreira",
            role: "Entrenador Principal",
            bio: "Ex piloto profesional convertido en entrenador. Su metodología de trabajo ha sido clave en el desarrollo de los pilotos del equipo.",
            image: "/fer2.jpeg"
        }
    ];

    const values = [
        {
            icon: <Zap className="value-icon" />,
            title: "Excelencia",
            description: "Buscamos la perfección en cada detalle, dentro y fuera de la pista."
        },
        {
            icon: <Heart className="value-icon" />,
            title: "Pasión",
            description: "El motor que mueve nuestro equipo es el amor por el deporte motor."
        },
        {
            icon: <Users className="value-icon" />,
            title: "Trabajo en Equipo",
            description: "Cada victoria es el resultado del esfuerzo colectivo."
        },
        {
            icon: <Shield className="value-icon" />,
            title: "Integridad",
            description: "Competimos con respeto, honestidad y espíritu deportivo."
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const nombre = formData.get('nombre');
        const email = formData.get('email');
        const asunto = formData.get('asunto');
        const mensaje = formData.get('mensaje');

        const destinatario = 'afg.racing@outlook.com';
        const subject = encodeURIComponent(`[Contacto AFG Racing] ${asunto} - ${nombre}`);
        const body = encodeURIComponent(
            `NOMBRE: ${nombre}\n` +
            `EMAIL: ${email}\n` +
            `ASUNTO: ${asunto}\n\n` +
            `MENSAJE:\n${mensaje}\n\n` +
            `------------------------\n` +
            `Enviado desde afgrace.com`
        );

        window.location.href = `mailto:${destinatario}?subject=${subject}&body=${body}`;

        e.target.reset();
    };

    return (
        <div className="app">
            {/* Header/Navigation */}
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo-container">
                        <img src="/afgprincipal.png" alt="AFG Racing" className="logo" />
                    </div>
                    <ul className="nav-menu">
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Quiénes Somos</a></li>
                        <li><a href="#team">Equipo</a></li>
                        <li><a href="#values">Valores</a></li>
                        <li><a href="#sponsors">Patrocinadores</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                    <a href="https://www.youtube.com/@AFGTEAM-PY" className="youtube-btn" target="_blank" rel="noopener noreferrer">
                        <Youtube size={20} />
                        <span>Nuestro Canal</span>
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="hero"
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-badge">
                        <Sparkles size={16} />
                        <span>Equipo de Deporte Motor</span>
                    </div>
                    <h1 className="hero-title">
                        AFG <span className="hero-title-highlight">Racing</span>
                    </h1>
                    <p className="hero-subtitle">
                        Excelencia, Pasión y Velocidad. Más que un equipo, una familia.
                    </p>
                    <div className="hero-buttons">
                        <a href="#about" className="btn-primary">
                            Conocenos
                            <ChevronRight size={20} />
                        </a>
                        <a href="https://www.youtube.com/@AFGTEAM-PY" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                            <Play size={20} />
                            Ver en YouTube
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Quiénes Somos</span>
                        <h2 className="section-title">Nuestra <span className="highlight">Historia</span></h2>
                    </div>

                    <div className="about-grid">
                        <div className="about-card mission">
                            <div className="card-icon">
                                <Target size={32} />
                            </div>
                            <h3>Nuestra Meta</h3>
                            <p>
                                Ser el equipo de deporte motor referente en Latinoamérica, desarrollando talentos
                                y construyendo un legado de excelencia que trascienda generaciones. Buscamos
                                expandirnos a nuevas categorías, manteniendo nuestra esencia competitiva y familiar.
                            </p>
                        </div>

                        <div className="about-card difference">
                            <div className="card-icon">
                                <Flag size={32} />
                            </div>
                            <h3>¿Qué Nos Diferencia?</h3>
                            <p>
                                Nuestra filosofía va más allá de la competencia. Somos una familia que comparte
                                la pasión por el automovilismo. A través de nuestro canal de YouTube, abrimos
                                nuestras puertas para mostrar no solo las prácticas y competencias, sino también
                                nuestras vidas, creando una conexión genuina con nuestra comunidad.
                            </p>
                        </div>
                    </div>

                    <div className="youtube-highlight">
                        <div className="youtube-content">
                            <Youtube size={48} className="youtube-icon" />
                            <h3>Conectamos con Nuestra Gente</h3>
                            <p>
                                Síguenos en YouTube para vivir la experiencia AFG Racing desde adentro:
                                prácticas, competencias, preparación y momentos únicos de nuestro día a día.
                            </p>
                            <a href="https://www.youtube.com/@AFGTEAM-PY" className="youtube-cta" target="_blank" rel="noopener noreferrer">
                                Suscríbete a Nuestro Canal
                                <ChevronRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Team Section */}
            <section id="team" className="team-main">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Nuestros Pilotos</span>
                        <h2 className="section-title">Equipo <span className="highlight">AFG Racing</span></h2>
                    </div>

                    <div className="team-grid">
                        {mainTeam.map((pilot, index) => (
                            <div key={index} className="team-card main-team">
                                <div className="card-image">
                                    <img src={pilot.image} alt={pilot.name} />
                                    <div className="card-overlay">
                                        <span className="pilot-category">{pilot.category}</span>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3>{pilot.name}</h3>
                                    <span className="pilot-role">{pilot.role}</span>
                                    <p className="pilot-bio">{pilot.bio}</p>
                                    <div className="pilot-achievements">
                                        {pilot.achievements.map((achievement, i) => (
                                            <span key={i} className="achievement-tag">
                                                <Trophy size={12} />
                                                {achievement}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Junior Team Section */}
            <section className="team-junior">
                <div className="container">
                    <div className="section-header junior-header">
                        <span className="section-subtitle">Futuras Promesas</span>
                        <h2 className="section-title">AFG Racing <span className="highlight-jr">Junior</span></h2>
                    </div>

                    <div className="team-grid">
                        {juniorTeam.map((pilot, index) => (
                            <div key={index} className="team-card junior-card">
                                <div className="card-image">
                                    <img src={pilot.image} alt={pilot.name} />
                                    <div className="card-overlay junior">
                                        <span className="pilot-category">{pilot.category}</span>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3>{pilot.name}</h3>
                                    <span className="pilot-role junior">{pilot.role}</span>
                                    <p className="pilot-bio">{pilot.bio}</p>
                                    <div className="pilot-achievements">
                                        {pilot.achievements.map((achievement, i) => (
                                            <span key={i} className="achievement-tag junior">
                                                <Star size={12} />
                                                {achievement}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Staff Section - REDISEÑO CIRCULAR */}
            <section className="staff">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Dirección</span>
                        <h2 className="section-title">Nuestro <span className="highlight">Staff</span></h2>
                    </div>

                    <div className="staff-grid">
                        {staff.map((member, index) => (
                            <div key={index} className="staff-card">
                                <div className="staff-image-wrapper">
                                    <div className="staff-image">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                </div>
                                <div className="staff-content">
                                    <h3>{member.name}</h3>
                                    <span className="staff-role">{member.role}</span>
                                    <p>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section id="values" className="values">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Nuestra Esencia</span>
                        <h2 className="section-title">Valores que nos <span className="highlight">Definen</span></h2>
                    </div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon-wrapper">
                                    {value.icon}
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsors Section */}
            <section id="sponsors" className="sponsors">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Patrocinadores</span>
                        <h2 className="section-title">Sé parte de <span className="highlight">nuestro equipo</span></h2>
                    </div>

                    <div className="sponsors-content">
                        <div className="sponsors-message">
                            <Award size={64} className="sponsors-icon" />
                            <h3>¿Tu marca en nuestras pistas?</h3>
                            <p>
                                En AFG Racing creemos en el poder de las alianzas. Si buscas visibilidad,
                                innovación y conectar con una audiencia apasionada por el deporte motor,
                                este es tu lugar.
                            </p>
                            <div className="sponsors-benefits">
                                <div className="benefit">
                                    <span className="benefit-icon">✓</span>
                                    <span>Exposición en competencias nacionales</span>
                                </div>
                                <div className="benefit">
                                    <span className="benefit-icon">✓</span>
                                    <span>Presencia en nuestro contenido digital</span>
                                </div>
                                <div className="benefit">
                                    <span className="benefit-icon">✓</span>
                                    <span>Activaciones y experiencias únicas</span>
                                </div>
                            </div>
                            <a href="#contact" className="btn-sponsor">
                                Conviértete en Patrocinador
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section - CON MAILTO FUNCIONAL */}
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Contacto</span>
                        <h2 className="section-title">Conversemos</h2>
                    </div>

                    <div className="contact-grid">
                        <div className="contact-info">
                            <h3>Información de Contacto</h3>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <Mail size={20} />
                                    <span>afg.racing@outlook.com</span>
                                </div>
                                <div className="contact-item">
                                    <Phone size={20} />
                                    <span>+595 982 375 298</span>
                                </div>
                                <div className="contact-item">
                                    <MapPin size={20} />
                                    <span>Asunción, Paraguay</span>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href="https://www.instagram.com/afg.racingteam/" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="social-link">
                                    <Twitter size={24} />
                                </a>
                                <a href="https://www.youtube.com/@AFGTEAM-PY" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <Youtube size={24} />
                                </a>
                            </div>
                        </div>

                        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Nombre completo"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="asunto"
                                    placeholder="Asunto"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="mensaje"
                                    placeholder="Mensaje"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-submit">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <img src="/afgprincipal.png" alt="AFG Racing" />
                            <p>Más que velocidad, una familia</p>
                        </div>
                        <div className="footer-links">
                            <div className="footer-column">
                                <h4>Equipo</h4>
                                <a href="#team">Pilotos</a>
                                <a href="#team-junior">AFG Junior</a>
                                <a href="#staff">Staff</a>
                            </div>
                            <div className="footer-column">
                                <h4>Comunidad</h4>
                                <a href="https://www.youtube.com/@AFGTEAM-PY" target="_blank" rel="noopener noreferrer">YouTube</a>
                                <a href="https://www.instagram.com/afg.racingteam/" target="_blank" rel="noopener noreferrer">Instagram</a>
                                <a href="#">Twitter</a>
                            </div>
                            <div className="footer-column">
                                <h4>Legal</h4>
                                <a href="#">Privacidad</a>
                                <a href="#">Términos</a>
                                <a href="#">Cookies</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2026 AFG Racing. Todos los derechos reservados.</p>
                        <p>&copy; desarrollado por <a href="https://codebywill.vercel.app/" target="_blank" rel="noopener noreferrer">CodeByWill</a>. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;