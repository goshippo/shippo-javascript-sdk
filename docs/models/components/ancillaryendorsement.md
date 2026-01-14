# AncillaryEndorsement

Specify an ancillary service endorsement to provide the USPS with instructions on how to handle undeliverable-as-addressed pieces (DHL eCommerce only).

## Example Usage

```typescript
import { AncillaryEndorsement } from "shippo/models/components";

let value: AncillaryEndorsement = "RETURN_SERVICE_REQUESTED";
```

## Values

```typescript
"FORWARDING_SERVICE_REQUESTED" | "RETURN_SERVICE_REQUESTED"
```