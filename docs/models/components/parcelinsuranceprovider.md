# ParcelInsuranceProvider

To have insurance cover provided by a carrier directly instead of Shippo's provider (XCover), set provider to `FEDEX`, `UPS`, or `ONTRAC`.

## Example Usage

```typescript
import { ParcelInsuranceProvider } from "shippo/models/components";

let value: ParcelInsuranceProvider = "UPS";
```

## Values

```typescript
"FEDEX" | "UPS" | "ONTRAC"
```