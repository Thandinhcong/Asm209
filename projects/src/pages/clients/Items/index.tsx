import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { RootState } from "../../../app/store";
import { listProducts } from "../../../actions/product";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Item = () => {
    const dispatch = useAppDispatch();
    const { products, isLoading } = useAppSelector((state: RootState) => state.products)
    console.log("products", products);

    useEffect(() => {
        dispatch(listProducts())
    }, [])
    return (
        <>
            {isLoading ? (<div>
                loading...
                <Skeleton count={5} />
            </div>) : (
                <section className="explore-section section-padding" id="section_2">
                    <div className="container">

                        <div className="col-12 text-center">
                            <h2 className="mb-4 fs-1 text-bold">SẢN PHẨM CỦA CHÚNG TÔI</h2>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="design-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#design-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="design-tab-pane"
                                        aria-selected="true"
                                    >
                                        Design
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="marketing-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#marketing-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="marketing-tab-pane"
                                        aria-selected="false"
                                    >
                                        Marketing
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="finance-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#finance-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="finance-tab-pane"
                                        aria-selected="false"
                                    >
                                        Finance
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="music-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#music-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="music-tab-pane"
                                        aria-selected="false"
                                    >
                                        Music
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="education-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#education-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="education-tab-pane"
                                        aria-selected="false"
                                    >
                                        Education
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-content" id="myTabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="design-tab-pane"
                                        role="tabpanel"
                                        aria-labelledby="design-tab"
                                        tabIndex={0}
                                    >
                                        <div className="row">
                                            {products ?
                                                (products?.map((item: any) => (
                                                    <div key={item._id} className="col-lg-4 col-md-6 col-12 mb-4 mb-ldivg-0">
                                                        <div className="custom-block bg-white shadow-lg">
                                                            <Link to={`detail/${item._id}`}>
                                                                <div className="d-flex">
                                                                    <div>
                                                                        <h5 className="mb-2 fs-5">{item?.name}</h5>

                                                                    </div>
                                                                    <span className="badge bg-design rounded-pill ms-auto">
                                                                        14
                                                                    </span>
                                                                </div>
                                                                <img
                                                                    src={item?.image}
                                                                    className="custom-block-image img-fluid"
                                                                    alt=""
                                                                />
                                                                <div className="d-flex justify-content-between mt-4">

                                                                    <span className="fs-4 text-danger">{item?.price}đ</span>
                                                                    <span className="fs-5 mt-1 me-2">{item?.original_price}đ</span>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                ))) : ""}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}


        </>

    )
}

export default Item