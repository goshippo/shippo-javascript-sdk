# BatchStatus

- `VALIDATING`: the batch is being created and validated
- `VALID`: the batch can be purchased
- `INVALID`: the batch cannot be purchased; `INVALID` BatchShipments must be removed
- `PURCHASING`: the batch is being purchased
- `PURCHASED`: the batch is finished purchasing

## Example Usage

```typescript
import { BatchStatus } from "shippo/models/components";

let value: BatchStatus = "VALID";
```

## Values

```typescript
"VALIDATING" | "VALID" | "INVALID" | "PURCHASING" | "PURCHASED"
```