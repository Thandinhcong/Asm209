import * as yup from "yup";

export const signupSchema = yup.object({
    name: yup.string().required("Trường dữ liệu bắt buộc"),
    email: yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: yup.string().min(6).typeError("Tối thiểu 6 kí tự").required("Trường dữ liệu bắt buộc").required("Trường dữ liệu bắt buộc"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Mật khẩu không khớp").required("Trường dữ liệu bắt buộc"),
})

export type SignupForm = yup.InferType<typeof signupSchema>
export const signinSchema = yup.object({
    email: yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: yup.string().min(6).typeError("Tối thiểu 6 kí tự").required("Trường dữ liệu bắt buộc").required("Trường dữ liệu bắt buộc"),
})

export type SigninForm = yup.InferType<typeof signinSchema>