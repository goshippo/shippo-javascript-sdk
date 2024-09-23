# CustomsDeclarationEelPfcEnum

EEL / PFC type of the shipment. For most shipments from the US to CA, `NOEEI_30_36` is applicable; for most 
other shipments from the US, `NOEEI_30_37_a` is applicable.
Allowed values available <a href="#tag/Customs-Declaration-EELPFC">here</a>

## Example Usage

```typescript
import { CustomsDeclarationEelPfcEnum } from "shippo/models/components";

let value: CustomsDeclarationEelPfcEnum = "NOEEI_30_37_a";
```

## Values

```typescript
"NOEEI_30_37_a" | "NOEEI_30_37_h" | "NOEEI_30_37_f" | "NOEEI_30_36" | "AES_ITN"
```