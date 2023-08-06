import { useState } from "react";
import "./header.css"
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const userJson = localStorage.getItem("persist:root");
    const parsedData = userJson ? JSON.parse(userJson) : null;
    const authData = parsedData?.auth ? JSON.parse(parsedData.auth) : null;
    const user = authData?.users || null;

    const [isLogin, setIsLogin] = useState(user);

    const handleLogout = () => {
        const confirmResult = window.confirm("Bạn có muốn đăng xuất không ?");
        if (confirmResult) {
            alert("Đăng xuất thành công");
            navigate("/");
            localStorage.removeItem('persist:root');
            setIsLogin(null);
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg" id='header'>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-rule="currentColor" className="bi bi-subtract fs-3" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
                        </svg>
                        <span>Topic</span>
                    </Link>
                    <div className="d-lg-none ms-auto me-4">
                        <a href="#top" className="navbar-icon bi-person smoothscroll" />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-lg-5 me-lg-auto">
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_2">
                                    Browse Topics
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_3">
                                    How it works
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_4">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" to="/contacts">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link "
                                    href="#"
                                    id="navbarLightDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >

                                    Pages<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-rule="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </a>

                                <ul
                                    className="dropdown-menu dropdown-menu-light"
                                    aria-labelledby="navbarLightDropdownMenuLink"
                                >
                                    <li>
                                        <a className="dropdown-item" href="topics-listing.html">
                                            Topics Listing
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="contact.html">
                                            Contact Form
                                        </a>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                        {isLogin ? (
                            <button className="btn-logout me-5 d-none  d-lg-block" onClick={handleLogout}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right " viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>
                            </button>
                        ) : (
                            <Link to="/login" className="d-none d-lg-block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-rule="currentColor" className="navbar-icon p-2 bi bi-person smoothscroll" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                </svg>
                            </Link>
                        )
                        }
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Header