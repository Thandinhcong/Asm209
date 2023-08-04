import { useDeleteProductMutation, useGetProductsQuery } from "../productApi";
import { IProduct } from "../../../interfaces/products";

import { Image, notification, Popconfirm, Skeleton, Table } from "antd";

import { Button } from "antd/es/radio";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../categoryApi";
import { ICate } from "../../../interfaces/categories";
import type { NotificationPlacement } from "antd/es/notification/interface";
const DashBoard = () => {
  const { data, isLoading, isFetching, isError } = useGetProductsQuery();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
  const { data: categories } = useGetCategoriesQuery();
  const [api, contextHolder] = notification.useNotification();

  const categoryData = categories?.category;

  const products: IProduct[] = data?.products.docs;

  if (isLoading) return <Skeleton />;
  if (isFetching) return <Skeleton />;
  const dataSource = products?.map((product: IProduct) => {
    const {
      _id,
      name,
      price,
      image,
      original_price,
      description,
      longDescription,
      categoryId,
    } = product;
    const categoryName =
      categoryData?.find((category: ICate) => category._id === categoryId)
        ?.name || "Category Not Found";
    return {
      key: _id,
      name,
      price,
      image,
      original_price,
      description,
      longDescription,
      categoryName,
    };
  });
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      placement,
    });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text: string) => <Image width={80} src={text} />,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Original Price",
      dataIndex: "original_price",
      key: "original_price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Long Description",
      dataIndex: "longDescription",
      key: "longDescription",
    },
    {
      title: "Category",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (categoryId: string) => {
        const categoryName =
          categoryData?.find((category: ICate) => category._id === categoryId)
            ?.name || "Category Not Found";
        return <p>{categoryName}</p>;
      },
    },
    {
      title: "Action",
      key: "action",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: ({ key: _id }: any) => (
        <>
          <Popconfirm
            placement="topLeft"
            title={"Are you sure delete ?"}
            onConfirm={() => confirm(_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button onClick={() => openNotification("top")}>
              {isDeleting ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Delete"
              )}
            </Button>
          </Popconfirm>
          <Button type="primary" className="ml-2">
            <Link to={`/admin/edit/${_id}`}>Edit</Link>
          </Button>
        </>
      ),
    },
  ];
  const confirm = (_id: string) => {
    deleteProduct(_id);
  };
  return (
    <div>
      <div className="d-flex justify-content-between mb-2">
        <h1 className="fs-2">DashBoard</h1>
        <Button className="btn btn-danger fs-6 ">
          <Link to="/admin/add-product" className="text-white">
            Add Product
          </Link>
        </Button>
      </div>

      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default DashBoard;
