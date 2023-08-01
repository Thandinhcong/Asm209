import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            default: "member",
        }
    },
    { timestamps: true, versionKey: false }
);
export default mongoose.model("User", userSchema);