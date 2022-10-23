type Num = [number | string, number];

let num: Num = [1, 3];

// enums
enum OrderStatus {
	PENDING,
	SHIPPED,
	DELIVERED,
	RETURNED,
}

const orderStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
	return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);
