import User from "../models/users";
import { signupSchema } from "../schemas/user";
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