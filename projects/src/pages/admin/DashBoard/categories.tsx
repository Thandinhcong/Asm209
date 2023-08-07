import { useEffect } from 'react';
import { Table, Button, Skeleton } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { deleteCate, listCates } from '../../../actions/categories';
import { ColumnsType } from 'antd/es/table';

const ListCates = () => {
    // const [loadings, setLoadings] = useState<boolean[]>([]);
    const dispatch = useAppDispatch();
    const { categories, isLoading } = useAppSelector((state: RootState) => state.cate)
    const listCate = categories?.category
    const handleDelete = async (id: string) => {
        const confilm = window.confirm("bạn có muốn xóa không");
        if (confilm) {
            await dispatch(deleteCate(id));
            window.location.href = "/admin/categories"
            alert("xóa thành công")

        }
    }

    const data = listCate?.map((item: any) => ({
        key: item._id,
        name: item.name,
        products: item.products.length,
    }
    ))

    const columns: ColumnsType<any> = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'quantity',
            dataIndex: 'products',
        },
        {
            title: 'actions',
            key: 'action',
            render: ({ key: _id }) => {
                return (
                    <>
                        <Button onClick={() => handleDelete(_id)} type="primary">
                            Delete
                        </Button>
                    </>
                );
            },
        },
    ];
    useEffect(() => {

        dispatch(listCates())
    }, [])

    return (
        <>
            <h2>Quản lý danh mục</h2>
            {isLoading ? (
                <Skeleton active={isLoading} />
            ) : (
                <Table dataSource={data} columns={columns} />
            )}
        </>
    );
}

export default ListCates