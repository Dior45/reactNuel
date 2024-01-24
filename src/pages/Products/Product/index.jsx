import React, { useEffect, useState } from "react";
import { productsData } from "../../../constants/data";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader";

export default function Product() {
  const [product, setProduct] = useState();
  const [laoding, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const productInfo = productsData.find(
        (product) => product.id === Number(params.id)
      );
      setProduct(productInfo);
      setLoading(false);
    }, 1000);
  }, [params.id]);

  if (laoding) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <div className="max-w-lg mx-auto">
        <img
          className="w-full h-64 object-cover mb-4"
          src={product.image}
          alt={product.name}
        />
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}
