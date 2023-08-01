import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const schemaProduct = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true
    },
    original_price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    longDescription: {
        type: String,
        require: false,
    },
    image: {
        type: String,
        require: true
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Categories"
    }
}, { timestamps: true, versionKey: false })
schemaProduct.plugin(mongoosePaginate);
export default mongoose.model("Product", schemaProduct);