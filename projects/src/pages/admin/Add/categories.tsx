import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../../../app/hooks';
import { addCate } from '../../../actions/categories';
import { ICate } from '../../../interfaces/categories';
import { useNavigate } from 'react-router-dom';

const AddCategorys = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onFinish = (cate: ICate) => {
        dispatch(addCate(cate))
        alert("Thêm thành công");
        setTimeout(() => {
            navigate("/admin/categories")
        }, 2000)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    type FieldType = {
        name?: string;
    };
    return (
        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your namecategpries!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
export default AddCategorys;