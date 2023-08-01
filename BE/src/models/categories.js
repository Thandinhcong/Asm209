import mongoose from "mongoose";
const schemaCategories = mongoose.Schema({
    name: {
        type: String,
        require: true,
    }
    ,
    image: {
        type: String,
        require: true
    },
    products: [{
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }]
}, { timestamps: true, versionKey: false })
export default mongoose.model("Categories", schemaCategories);