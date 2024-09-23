# OrderStatusEnum

Current state of the order. See the <a href="https://docs.goshippo.com/docs/orders/orders/">orders tutorial</a> 
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