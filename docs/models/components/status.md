# Status

- `INVALID`: the batch shipment cannot be purchased and will have to be removed, fixed, and added to the batch again
- `VALID`: the batch shipment can be purchased
- `TRANSACTION_FAILED`: the batch shipment was not able to be purchased and the error will be displayed on the message field
- `INCOMPLETE`: the batch shipment has an issue with the Address and will need to be removed, fixed, and added to the batch again

## Example Usage

```typescript
import { Status } from "shippo/models/components";

let value: Status = "INVALID";
```

## Values

```typescript
"INVALID" | "VALID" | "INCOMPLETE" | "TRANSACTION_FAILED"
```