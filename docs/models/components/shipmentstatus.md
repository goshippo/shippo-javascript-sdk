# ShipmentStatus

`Waiting` shipments have been successfully submitted but not yet been processed. 
`Queued` shipments are currently being processed. 
`Success` shipments have been processed successfully, meaning that rate generation has concluded. 
`Error` does not occur currently and is reserved for future use.

## Example Usage

```typescript
import { ShipmentStatus } from "shippo/models/components";

let value: ShipmentStatus = "QUEUED";
```

## Values

```typescript
"ERROR" | "QUEUED" | "SUCCESS" | "WAITING"
```