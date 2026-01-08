import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        const confirm = window.confirm("Are you sure you want to Log Out?");
        if (confirm) {
            navigate("/login");
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    padding: '0.5rem 1rem'
                }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#" style={{ fontSize: '1.5rem', color: '#fff' }}>
                        CMS UI
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-controls="navbarNav"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                        style={{ border: 'none', background: 'transparent' }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => navigate("/dashboard")}>
                                    <i className="fas fa-tachometer-alt me-1"></i>Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contract" >
                                    <i className="fas fa-file-contract me-1"></i>Contracts
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex me-3">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search..."
                                aria-label="Search"
                                style={{ borderRadius: '20px', border: 'none' }}
                            />
                            <button
                                className="btn btn-light"
                                type="submit"
                                style={{ borderRadius: '20px', fontWeight: 'bold' }}
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                        <button
                            className="btn btn-outline-light"
                            type="button"
                            onClick={handleLogout}
                            style={{ borderRadius: '20px', fontWeight: 'bold' }}
                        >
                            <i className="fas fa-sign-out-alt me-1"></i>Logout
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
