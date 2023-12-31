import ImgCrop from "antd-img-crop";
import { useState, useEffect } from "react";
import { Upload, Form, Button, InputNumber, Skeleton } from "antd";
import { CloudinaryContext, Image } from "cloudinary-react"; //
import { useGetProductQuery, useUpdateProductMutation } from "../productApi";
import { IProduct } from "../../../interfaces/products";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UploadFile, RcFile } from "antd/es/upload/interface";

const App: React.FC = () => {
  const { _id } = useParams<{ _id: string }>();
  const { data, isLoading, isFetching } = useGetProductQuery(_id || "");
  const product = data?.product;
  console.log(product);

  const [updateProduct] = useUpdateProductMutation();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [imageURL, setImageURL] = useState<string>("");
  const [currentImageURL, setCurrentImageURL] = useState<string>("");
  const [form] = Form.useForm();
  const onChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setCurrentImageURL(product.image); // Lưu URL của ảnh cũ vào state currentImageURL
      form.setFieldsValue({ image: product.image }); // Đổ ảnh cũ vào trường image trong form
    }
  }, [product, form]);
  useEffect(() => {
    form.setFieldsValue({
      name: product?.name,
      price: product?.price,
      image: product?.image,
      original_price: product?.original_price,
      description: product?.description,
      longDescription: product?.longDescription,
    });
  }, [product]);
  if (isLoading) return <Skeleton />;
  if (isFetching) return <Skeleton />;
  const onPreview = async (file: UploadFile) => {
    const image = new Image();
    image.src =
      file.url ||
      (await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      }));
    const imgWindow = window.open(file.url || "");
    imgWindow?.document.write(image.outerHTML);
  };

  const beforeUpload = async (file: File): Promise<boolean> => {
    try {
      // Gửi ảnh lên Cloudinary bằng cloudinary-react
      const result = await uploadImageToCloudinary(file);

      // Lưu đường dẫn ảnh vào state imageURL
      setImageURL(result);

      // Trả về false để ngăn việc upload ngay lúc này
      return false;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      return false;
    }
  };

  const uploadImageToCloudinary = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const url = `https://api.cloudinary.com/v1_1/dwb9qumu6/image/upload`;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "uploadCellphones");

      // Gửi request POST lên Cloudinary để upload ảnh
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data.secure_url); // Trả về đường dẫn ảnh từ phản hồi của Cloudinary
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const onFinish = (values: IProduct) => {
    // Xử lý khi người dùng bấm submit form
    const formData = { ...values, image: imageURL };
    // console.log("Form values:", values);
    // console.log("Form values:", formData);
    // console.log("Image URL:", imageURL); // Kiểm tra giá trị của imageURL trong console log
    updateProduct({ ...formData, _id })
      .unwrap()
      .then(() => {
        navigate("/admin");
      });
  };

  return (
    <CloudinaryContext cloudName="dwb9qumu6">
      {" "}
      <Form
        form={form}
        onFinish={onFinish}
        className="container"
        style={{ maxWidth: 1000 }}
      >
        <Form.Item<IProduct> label="Image" name="image">
          <ImgCrop rotationSlider>
            <Upload
              action=""
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              beforeUpload={beforeUpload}
            >
              {fileList.length < 1 && "+ Upload"}
            </Upload>
          </ImgCrop>
        </Form.Item>
        <Form.Item<IProduct> label="Current Image" name="image">
          <img src={currentImageURL} alt="" width={100} />
        </Form.Item>
        <Form.Item<IProduct>
          className=""
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please input name!" },
            { min: 6, message: "Min charactor 6!" },
            { max: 256, message: "Max charactor 256!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IProduct>
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input price!" }]}
        >
          <InputNumber prefix="$" />
        </Form.Item>
        <Form.Item<IProduct>
          label="Original Price"
          name="original_price"
          rules={[{ required: true, message: "Please input price!" }]}
        >
          <InputNumber prefix="$" />
        </Form.Item>
        <Form.Item<IProduct>
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input name!" },
            { min: 6, message: "Min charactor 6!" },
            { max: 256, message: "Max charactor 256!" },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item<IProduct>
          label="Long Description"
          name="longDescription"
          rules={[
            { required: true, message: "Please input name!" },
            { min: 6, message: "Min charactor 6!" },
            { max: 256, message: "Max charactor 256!" },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" className="mx-4">
            <Link to="/admin">Back</Link>
          </Button>
        </Form.Item>
      </Form>
    </CloudinaryContext>
  );
};

export default App;
