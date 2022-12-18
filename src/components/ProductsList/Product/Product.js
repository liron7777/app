function Product({ product }) {
  const renderProduct = () => {
    const { name, description } = product;

    const deleteProduct = () => {};

    return (
      <div className="product">
        <div className="details">
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <button onClick={deleteProduct} className="delete">
          Delete
        </button>
      </div>
    );
  };

  return <div>{renderProduct()}</div>;
}

export default Product;
