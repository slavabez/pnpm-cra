function ShoppingList({ items }) {
  // Функция преобразования объекта в <li>
  // function objToLi(item) {
  //   return <li key={item.id}>{item.name}</li>;
  // }

  // // Разные способы написания функции .map
  // const elements = items.map(objToLi);

  // const elements2 = items.map((item) => {
  //   return <li key={item.id}>{item.name}</li>;
  // });

  // const elements3 = items.map((item) => (
  //   <li key={item.id} className="asdasd" id="id">
  //     {item.name}
  //   </li>
  // ));

  // const elements4 = items.map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <div>
      <h2>Shopping list:</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
