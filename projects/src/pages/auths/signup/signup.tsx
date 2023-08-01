import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../clients/Header'
import Footer from '../../clients/Footer'



const Signup = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Header />
            <div className='login'>
                <h1 className="w3ls">Official Signup Form</h1>
                <div className="content-w3ls">
                    <div className="content-agile1">
                        <h2 className="agileits1">Official</h2>
                        <p className="agileits2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="content-agile2">
                        <form >
                            <div className="formsignin form-control w3layouts">
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="First Name"
                                    title="Please enter your First Name"

                                />
                            </div>
                            <div className="formsignin form-control w3layouts">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="mail@example.com"
                                    title="Please enter a valid email"

                                />
                            </div>
                            <div className="formsignin form-control agileinfo">
                                <input
                                    type="password"
                                    className="lock"
                                    name="password"
                                    placeholder="Password"
                                    id="password1"

                                />
                            </div>
                            <div className="formsignin form-control   agileinfo">
                                <input
                                    type="password"
                                    className="lock"
                                    name="confirm-password"
                                    placeholder="Confirm Password"
                                    id="password2"

                                />
                            </div>
                            <button type="submit" className="register" defaultValue="Register" >Đăng kí</button>
                            <p className='text-light ms-5 ps-5 mb-3'>Bạn đã có tài khoản? <Link className='text-primary' to="/login">Đăng nhập</Link></p>
                        </form>
                        <p className="wthree w3l">
                            Fast Signup With Your Favourite Social Profile
                        </p>
                        <ul className="social-agileinfo wthree2">
                            <li>
                                <Link to="#">
                                    <i className="fa fa-facebook" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="fa fa-youtube" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="fa fa-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="fa fa-google-plus" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="clear" />
                </div>

            </div>
            <Footer />
        </>

    )
}

export default Signup