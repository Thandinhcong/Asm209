import Product from "../models/products";
import Categories from "../models/categories";
export const getAllProducts = async (req, res) => {
  const {
    _page = 1,
    _limit = 9999,
    _sort = "createAt",
    _order = "asc",
  } = req.query;
  const options = {
    limit: _limit,
    page: _page,
    limit: _limit,
    sort: {
      [_sort]: _order === "desc" ? -1 : 1,
    },
  };
  try {
    const products = await Product.paginate({}, options);
    if (!products) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm nào !",
      });
    }
    return res.status(200).json({
      message: "Danh sách sản phẩm",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server !",
    });
  }
};
export const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm nào !",
      });
    }
    return res.status(200).json({
      message: "Sản phẩm",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Khong tim thay san pham nao !",
      error,
    });
  }
};
export const addProduct = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    if (!products) {
      return res.status(400).json({
        message: "Không thể thêm sản phẩm !",
      });
    }
    await Categories.findOneAndUpdate(products.categoryId, {
      $addToSet: {
        products: products._id,
      },
    });
    return res.status(201).json({
      message: "Thêm thành công sản phẩm",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server !",
      error,
    });
  }
};
export const update = async (req, res) => {
  try {
    // tìm kiếm sản phẩm theo id  và cập nhật dữ liệu mới
    const productId = req.params.id;
    const updateProduct = await Product.findOneAndUpdate(
      { _id: productId },
      req.body,
      { new: true }
    );
    if (!updateProduct) {
      return res.sendStatus(404);
    }

    // xóa sản phẩm cũ khỏi danh sách sản phẩm ở danh mục
    const OldCategoryId = updateProduct.categoryId;
    await Categories.findByIdAndUpdate(OldCategoryId, {
      $pull: { products: productId },
    });

    // Thêm sản phẩm mới vào danh sách products của category mới

    const newCategoryId = req.body.categoryId;
    if (newCategoryId) {
      await Categories.findByIdAndUpdate(newCategoryId, {
        $addToSet: { products: productId },
      });
    }
    return res.status(200).json({
      message: "cập nhậ thành công",
      updateProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Cập nhật sản phẩm không thành công",
      error: error.message,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const { isHardDelete } = req.body;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "không tìm thấy sản phẩm",
      });
    }
    // Nếu client gửi lên isHardDelete = true thì xóa sản phẩm vĩnh viễn
    // Ngoài ra xóa luôn id sản phẩm khỏi danh sách products ở category

    if (isHardDelete) {
      await product.forceDelete();
      // xóa sản phẩm khỏi danh mục cũ
      await Categories.findByIdAndUpdate(product.categoryId, {
        $pull: { products: product._id },
      });
    } else {
      await product.deleteOne();
    }
    return res.status(200).json({
      message: "Xóa sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: "Xóa sản phẩm thất bại",
      error: error.message,
    });
  }
};
