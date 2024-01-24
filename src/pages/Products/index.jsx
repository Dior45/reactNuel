import { Link } from "react-router-dom";
import { productsData } from "../../constants/data";

const ProductsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productsData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const Product = ({ product, onProductClick }) => {
  const { id, name, image, description } = product;

  return (
    <Link
      to={`/product/${id}`}
      className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
    >
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </Link>
  );
};

export default ProductsPage;
