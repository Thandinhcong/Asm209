import * as yup from "yup";

export const schemaCate = yup.object({
    name: yup.string().required("Trường dữ liệu bắt buộc"),
})

export type CateForm = yup.InferType<typeof schemaCate>