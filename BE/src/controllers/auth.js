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
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
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
        const { email, password } = req.body;
        const { error } = signinSchema.validate({ email, password }, { abortEarly: false });
        if (error) {
            const errors = error.details.map((error) => error.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Tài khoản không tồn tại" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Mật khẩu không khớp" });
        }

        const token = jwt.sign({ _id: user._id }, "123456");

        const { password: excludedPassword, ...userData } = user;

        res.status(200).json({
            data: userData,
            accessToken: token,
        });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};