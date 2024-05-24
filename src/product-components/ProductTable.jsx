import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ data }) {
  return (
    <div>
      <h2>Name - Price</h2>
      {data.map((category) => {
        return (
          <div key={category.categoryTitle}>
            <ProductCategoryRow categoryTitle={category.categoryTitle} />
            {category.products.map((product) => {
              return (
                <ProductRow
                  key={product.id}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ProductTable;
