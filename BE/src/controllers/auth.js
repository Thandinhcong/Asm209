import User from "../models/users";
import { signinSchema, signupSchema } from "../schemas/user";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        const { error } = signupSchema.validate({
            name,
            email,
            password,
            confirmPassword
        },
            { abortEarly: false }
        )
        if (error) {
            const errors = error.details.map((error) => error.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const userExits = await User.findOne({ email });
        if (userExits) {
            return res.status(400).json({
                message: "Email đã tồn tại"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashPassword
        });
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: 10 });
        return res.status(201).json({
            message: "Đăng kí thành công",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
export const signin = async (req, res) => {
    try {
        const { error } = signinSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                messages: errors,
            });
        }
        // kiểm tra email có tồn tại hay không
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                messages: "Email không tồn tại",
            });
        }
        // kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                messages: "Sai mật khẩu",
            });
        }

        // tạo tuken

        const token = jwt.sign({ id: user._id }, "danhsapwebtruong", { expiresIn: "1d" });
        user.password = undefined;
        return res.status(200).json({
            message: "Đăng nhập thành công",
            accessToken: token,
            user,
        });
    } catch (error) { }
};