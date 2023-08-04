
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <div>
            <footer className="site-footer section-padding" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12 mb-4 pb-2">
                            <Link className="navbar-brand mb-2" to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-subtract" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
                                </svg>
                                <span>Topic</span>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <h6 className="site-footer-title mb-3">Resources</h6>
                            <ul className="site-footer-links">
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">
                                        Home
                                    </a>
                                </li>
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">
                                        How it works
                                    </a>
                                </li>
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">
                                        FAQs
                                    </a>
                                </li>
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                            <h6 className="site-footer-title mb-3">Information</h6>
                            <p className="text-white d-flex mb-1">
                                <a href="tel: 305-240-9671" className="site-footer-link">
                                    305-240-9671
                                </a>
                            </p>
                            <p className="text-white d-flex">
                                <a href="mailto:info@company.com" className="site-footer-link">
                                    info@company.com
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    English
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Thai
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Myanmar
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Arabic
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <p className="copyright-text mt-lg-5 mt-4">
                                Copyright © 2023 Bởi anh Đinh Công Thản đẹp zai nhất vũ trụ.
                                <br />
                                <br />
                                Design:{" "}
                                <a rel="nofollow" href="https://templatemo.com" target="_blank">
                                    Đi hỏi anh Thản đấy
                                </a>{" "}
                                Distribution <a href="https://themewagon.com">ThemeWagon</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

