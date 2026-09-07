# ServiceGroupTypeEnum

The type of the service group.

- `LIVE_RATE`: Shippo will make a rating request and return real-time rates for the shipping group, only falling back to the specified flat rate amount if no rates match a service level in the service group.
- `FLAT_RATE`: returns a shipping option with the specified flat rate amount.
- `FREE_SHIPPING`: returns a shipping option with a price of $0 only if the total cost of items exceeds the amount defined by `free_shipping_threshold_min`

## Example Usage

```typescript
import { ServiceGroupTypeEnum } from "shippo/models/components";

let value: ServiceGroupTypeEnum = "FLAT_RATE";
```

## Values

```typescript
"LIVE_RATE" | "FLAT_RATE" | "FREE_SHIPPING"
```