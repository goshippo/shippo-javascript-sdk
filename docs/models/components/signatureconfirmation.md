# SignatureConfirmation

Request standard or adult signature confirmation. You can alternatively request Certified Mail (USPS only) 
or Indirect signature (FedEx only) or Carrier Confirmation (Deutsche Post only).

## Example Usage

```typescript
import { SignatureConfirmation } from "shippo/models/components";

let value: SignatureConfirmation = "INDIRECT";
```

## Values

```typescript
"STANDARD" | "ADULT" | "CERTIFIED" | "INDIRECT" | "CARRIER_CONFIRMATION"
```