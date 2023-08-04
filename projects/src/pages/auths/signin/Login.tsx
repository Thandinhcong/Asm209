import { useEffect } from 'react'
import "./signin.css"
import "../../../css/font-awesome.min.css"
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../clients/Header'
import Footer from '../../clients/Footer'
import { useForm } from 'react-hook-form'
import { SigninForm, signinSchema } from '../../../schema/auths'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { RootState } from '../../../app/store'
import { signin } from '../../../actions/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton'
const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { error, isLoading } = useAppSelector((state: RootState) => state.users)
    const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>({
        resolver: yupResolver(signinSchema)
    })
    const onHandleSubmit = async (user: SigninForm) => {
        try {
            const response = await dispatch(signin(user));
            if (response.type === "users/signin/rejected") {
                toast.error("Thông tin tài khoản hoặc mật khẩu không chính xác!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                return false;
            } else {
                toast.success("Đăng nhập thành công!", {
                    position: toast.POSITION.TOP_RIGHT
                })
                setTimeout(() => {
                    navigate("/")
                }, 2000)
                return
            }
        } catch (error) {
            toast.error("Có lỗi xảy ra vui lòng thử lại!", {
                position: toast.POSITION.TOP_RIGHT
            })
            console.log(error);

        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            {error && <div>{error}</div>}
            <Header />
            {isLoading && <div><Skeleton count={2} ></Skeleton>

            </div>}
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
                        <form onSubmit={handleSubmit(onHandleSubmit)} >

                            <div className="formsignin form-control w3layouts">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="mail@example.com"
                                    title="Please enter a valid email"
                                    {...register("email")}
                                />
                            </div>
                            <div className="text-danger">
                                {errors.email && errors.email.message}
                            </div>
                            <div className="formsignin form-control agileinfo">
                                <input
                                    type="password"
                                    className="lock"
                                    placeholder="Password"
                                    id="password1"
                                    {...register("password")}
                                />
                            </div>
                            <div className="text-danger">
                                {errors.password && errors.password.message}
                            </div>
                            <button className="register">
                                <ToastContainer />
                                Đăng nhập
                            </button>
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