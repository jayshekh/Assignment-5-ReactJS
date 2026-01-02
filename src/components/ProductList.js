import React from "react";
import useFetch from "./useFetch";
import "./productList.css";

const ProductList = () =>
{
    const { data, loading, error } = useFetch(
        "https://api.escuelajs.co/api/v1/products"
    );

    if (loading) return <h2 className="loading">Loading...</h2>;
    if (error) return <h2 className="error">Error: {error}</h2>;

    return (
        <div className="page">
            <h1 className="title">Photos</h1>

            <div className="grid">
                {data?.map((product) => (
                    <div className="card" key={product.id}>
                        <div className="image-wrapper">
                            <img
                                src={
                                    product.images?.[0]?.includes("placehold.co") ||
                                        product.images?.[0]?.includes("placeimg.com")
                                        ? product.category?.image
                                        : product.images?.[0]
                                }
                                alt={product.title}
                                onError={(e) =>
                                (e.target.src =
                                    "https://via.placeholder.com/600x600/555/aaa?text=600+x+600")
                                }
                            />
                        </div>
                        <p className="caption">{product.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
