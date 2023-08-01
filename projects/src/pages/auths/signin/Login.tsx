import React, { useEffect } from 'react'
import "./signin.css"
import "../../../css/font-awesome.min.css"
import { Link } from 'react-router-dom'
import Header from '../../clients/Header'
import Footer from '../../clients/Footer'
type Props = {}

const Login = (props: Props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Header />
            <div className='login'>
                <h1 className="w3ls">Official signin Form</h1>
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

                            <button type="submit" className="register" defaultValue="Register" >Đăng nhập</button>
                            <p className='text-light ms-5 ps-5 mb-3'>Bạn chưa có tài khoản? <Link className='text-primary' to="/signup">Đăng kí</Link></p>
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

export default Login