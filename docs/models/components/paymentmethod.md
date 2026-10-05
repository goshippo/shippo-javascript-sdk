# PaymentMethod

Secured funds include money orders, certified cheques and others (see 
[UPS](https://www.ups.com/content/us/en/shipping/time/service/value_added/cod.html) for details). 
If no payment_method inputted the value defaults to "ANY".)

## Example Usage

```typescript
import { PaymentMethod } from "shippo/models/components";

let value: PaymentMethod = "CASH";
```

## Values

```typescript
"SECURED_FUNDS" | "CASH" | "ANY"
```