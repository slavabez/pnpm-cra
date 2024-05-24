import ProductTable from "./ProductTable";

function App2(){
    const data = [
        {
          categoryTitle: "Fruits",
          products: [
            {
              id: 1,
              title: "Apple",
              price: 1,
            },
            {
              id: 2,
              title: "Passionfruit",
              price: 4,
            },
          ],
        },
        {
          categoryTitle: "Vegetables",
          products: [
            {
              id: 1,
              title: "Carrot",
              price: 1,
            },
            {
              id: 2,
              title: "Potato",
              price: 1,
            },
          ],
        },
        {
            categoryTitle: "Sweets",
            products: [
              {
                id: 1,
                title: "Lollipop",
                price: 1,
              },
              {
                id: 2,
                title: "Chocolate",
                price: 10,
              },
            ],
          },
      ];

      return <div>
        <ProductTable data={data} />
      </div>
}

export default App2;