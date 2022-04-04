import { useState, useTransition } from "react";
import { ProductList } from "shared/components/ProductList/ProductList";
import { SearchInput } from "shared/components/SearchInput/SearchInput";
import { filterProduct } from "shared/services/Filter";
import "shared/styles/index.css";

const App = () => {
  const [isPending, startTransition] = useTransition();
  const [filteTerm, setFilterTerm] = useState("");

  const filteredData = filterProduct(filteTerm);

  const updateFilterHandler = ({ target }) => {
    startTransition(() => {
      setFilterTerm(target.value);
    });
  };

  return (
    <div className="App">
      <SearchInput onChange={updateFilterHandler} value={filteTerm} />
      {isPending && <span className="loading">Updating list...</span>}
      <ProductList filteredData={filteredData} />
    </div>
  );
};

export default App;
