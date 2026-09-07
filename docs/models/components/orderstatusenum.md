# OrderStatusEnum

Current state of the order. See the [orders tutorial](https://docs.goshippo.com/docs/orders/orders/) 
for the logic of how the status is handled.

## Example Usage

```typescript
import { OrderStatusEnum } from "shippo/models/components";

let value: OrderStatusEnum = "PAID";
```

## Values

```typescript
"UNKNOWN" | "AWAITPAY" | "PAID" | "REFUNDED" | "CANCELLED" | "PARTIALLY_FULFILLED" | "SHIPPED"
```