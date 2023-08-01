import User from "../models/users";

export const getALL = async (req, res) => {
    try {

        const user = await User.find();
        if (!user) {
            return res.status(404).json({
                message: 'Không tìm thấy người dùng',
            });
        }
        return res.status(200).json({
            message: 'Danh sách người dùng ',
            user,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
};
export const getOneUser = async (req, res) => {
    try {
        const users = await User.findOne({ _id: req.params.id });
        if (!users) {
            return res.status(400).json({
                message: "không có tài khoản nào",
            })
        }
        return res.status(200).json({
            users,
        })
    } catch (error) {
        res.status(500).json({
            message: "Lỗi server",
        })
    }
}

export const getUserProfile = async (req, res) => {
    try {

        const user = await User.findById(req.params.id);

        return res.status(200).json({
            message: 'Lấy thông tin người dùng thành công',
            user,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
};

export const updateUserProfile = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });

        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ message: 'Cập nhật tài khoản không thành công', error: error.message });
    }
};