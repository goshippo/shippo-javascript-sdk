# PreferredDeliveryTimeframe

Required for DHL Germany Paket Sameday. Designates a desired timeframe for delivery. Format is `HHMMHHMM`

## Example Usage

```typescript
import { PreferredDeliveryTimeframe } from "shippo/models/components";

let value: PreferredDeliveryTimeframe = "16001800";
```

## Values

```typescript
"10001200" | "12001400" | "14001600" | "16001800" | "18002000" | "19002100"
```