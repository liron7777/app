import { useState } from "react";
import ProductsList from "../ProductsList/ProductsList";
import AddWindow from "../AddWindow/AddWindow";

function Home() {
  const [isAddWindowOpen, setIsAddWindowOpen] = useState(false);

  const renderAdd = () => {
    return <button onClick={() => setIsAddWindowOpen(true)}>Add</button>;
  };

  return (
    <div>
      <p>My Store</p>
      {renderAdd()}
      {isAddWindowOpen ? <AddWindow /> : null}
      <ProductsList />
    </div>
  );
}

export default Home;
