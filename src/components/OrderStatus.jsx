function OrderStatus({ orderId, status }) {
  return (
    <div>
      <h2>Заказ #{orderId}</h2>
      <p>Статус: {status}</p>
    </div>
  );
}

export default OrderStatus;
