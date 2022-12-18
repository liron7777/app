import { useSelector } from "react-redux";
import Product from "./Product/Product";

function ProductsList() {
  const productsList = useSelector(
    (state) => state.operationsReducer.productsList
  );

  const renderProductsList = () => {
    return productsList.map((product) => <Product product={product} />);
  };

  return <div>{renderProductsList()}</div>;
}

export default ProductsList;
