import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../clients/Header'
import Footer from '../../clients/Footer'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { signup } from '../../../actions/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignupForm, signupSchema } from '../../../schema/auths'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../../app/store'

const Signup = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { error, isLoading } = useAppSelector((state: RootState) => state.users)
    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
        resolver: yupResolver(signupSchema)
    })

    const onHandleSubmit = async (user: SignupForm) => {
        try {
            const response = await dispatch(signup(user));
            if (response.type === "users/signup/rejected") {
                toast.error("Email đã tồn tại !", {
                    position: toast.POSITION.TOP_RIGHT
                })
                return false;
            } else {
                toast.success("Đăng kí thành công!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                setTimeout(() => {
                    navigate("/login")
                }, 2000)
                return
            }
        } catch (error) {
            toast.error("Có lỗi xảy ra vui lòng thử lại !", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>
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
                            <form onSubmit={handleSubmit(onHandleSubmit)}>
                                <div className="formsignin form-control w3layouts">
                                    <input
                                        type="text"
                                        id="firstname"
                                        placeholder="First Name"
                                        title="Please enter your First Name"
                                        {...register("name")}
                                    />
                                </div>
                                <div className='text-danger'>{errors.name && errors.name?.message}</div>
                                <div className="formsignin form-control w3layouts">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="mail@example.com"
                                        title="Please enter a valid email"
                                        {...register("email")}
                                    />
                                </div>
                                <div className='text-danger'>{errors.email && errors.email?.message}</div>

                                <div className="formsignin form-control agileinfo">
                                    <input
                                        type="password"
                                        className="lock"
                                        placeholder="Password"
                                        id="password1"
                                        {...register("password")}

                                    />
                                </div>
                                <div className='text-danger'>{errors.password && errors.password?.message}</div>

                                <div className="formsignin form-control   agileinfo">
                                    <input
                                        type="password"
                                        className="lock"
                                        placeholder="Confirm Password"
                                        id="password2"
                                        {...register("confirmPassword")}
                                    />
                                </div>
                                <div className='text-danger'>{errors.confirmPassword && errors.confirmPassword?.message}</div>

                                <button className="register">
                                    <ToastContainer />
                                    Đăng kí
                                </button>
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

                </div >

            </div>}
            <Header />
            <Footer />
        </>

    )
}

export default Signup