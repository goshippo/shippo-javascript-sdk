# CustomsDeclarationIncotermEnum

The incoterm reference of the shipment. FCA is available for DHL Express and FedEx only. 
eDAP is available for DPD UK only. DAP is available for DHL Express and DPD UK.
If expecting DAP for other carriers, please use DDU.
Allowed values available <a href="#tag/Customs-Declaration-Incoterm">here</a>

## Example Usage

```typescript
import { CustomsDeclarationIncotermEnum } from "shippo/models/components";

let value: CustomsDeclarationIncotermEnum = "DDP";
```

## Values

```typescript
"DDP" | "DDU" | "FCA" | "DAP" | "eDAP"
```