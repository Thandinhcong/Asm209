import Categories from "../models/categories"
import Product from "../models/products";

export const getAll = async (req, res) => {
    try {
        const category = await Categories.find();
        if (!category) {
            return res.status(404).json({
                message: "Không tìm thấy danh mục"
            })
        }
        return res.status(200).json({
            message: "Danh sách danh mục",
            category,
        })
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}
export const get = async (req, res) => {
    try {
        const category = await Categories.findOne({ _id: req.params.id }).populate("products");
        if (!category) {
            return res.status(404).json({
                message: "Không tìm thấy danh mục"
            })
        }
        return res.status(200).json({
            message: "Danh mục",
            category,
        })
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}
export const Add = async (req, res) => {
    try {
        const category = await Categories.create(req.body);

        return res.status(201).json({
            message: "Thêm thành công Danh mục",
            category,
        })
    } catch (error) {
        return res.status(400).json({
            message: "Không thể thêm  danh mục"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const id = req.params.id;

        const category = await Categories.findByIdAndDelete(id)
        if (!category) {
            return res.status(404).json({
                message: "Không tìm thấy danh mục",
            });
        }
        // Cập nhật các sản phẩm thuộc danh mục đã xóa
        await Product.updateMany(
            { categoryId: id },
            { $set: { categoryId: null } }
        );
        return res.status(200).json({
            message: "Xóa thành công Danh mục",
            category,
        })
    } catch (error) {
        return res.status(400).json({
            message: "Không thể xóa  danh mục"
            , error: error.message
        })
    }
}