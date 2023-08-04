import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { deltailProduct } from '../../../actions/product'

const DeTailProduct = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const fetchById = async () => {
        try {
            if (id) {
                // const { data } = await
                //     console.log(data);

            }
        } catch (error) {
            console.log(error);

        }
    }
    console.log();

    useEffect(() => {
        fetchById()
    }, [])
    return (
        <div>
            <div>
                <Header />
                <div className='deltail container p-3'>
                    <img src='http://gongcha.com.vn/wp-content/uploads/2023/02/Tra-Xanh-Sua-Dau.png' />
                    <div>
                        <div className='d-flex'>
                            <a href="/" className='text-decoration-none' >
                                <p className='text-secondary '>TRANG CHỦ/</p>
                            </a>
                            <a href="/" className='text-decoration-none' >
                                <p className='text-secondary '>QUẦN ÁO</p>
                            </a>
                        </div>
                        <h3></h3>
                        <div className='d-flex'>
                            <p className='fs-4 text-primary'></p>
                            <p className='mt-2 ms-4'></p>
                        </div>
                        <p>(Tiết kiệm : <span
                            className='text-primary'
                        >
                            {/* {VND.format((product.original_price) - (product.price))} */}

                        </span>)
                        </p>
                        <span></span>
                        <div className='d-flex mt-5 mb-5'>
                            <div className='count'>
                                <button  >-</button>
                                <label htmlFor=""></label>
                                <button >+</button>
                            </div>
                            <button className='ms-5 btn btn-dark'>THÊM VÀO GIỎ</button>
                        </div>
                        <hr />
                    </div>

                </div>
                <section className='container salenfil '>

                    <div className='border p-3 mb-5'>
                        <h2>Lorem Ipsum là gì?</h2>
                        <p>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.</p>
                        <h2>Tại sao lại sử dụng nó?</h2>
                        <p>Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu “Nội dung, nội dung, nội dung” là nó khiến văn bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn “Lorem ipsum” trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông tục).</p>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default DeTailProduct