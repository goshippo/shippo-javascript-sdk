# LiveRateCreateRequestParcel

Object ID for an existing User Parcel Template OR a fully formed Parcel object.

## Example Usage

```typescript
import { LiveRateCreateRequestParcel } from "shippo/models/components";

let value: LiveRateCreateRequestParcel = {
  extra: {
    cod: {
      amount: "5.5",
      currency: "USD",
      paymentMethod: "CASH",
    },
    insurance: {
      amount: "5.5",
      content: "Laptop",
      currency: "USD",
      provider: "UPS",
    },
  },
  metadata: "Customer ID 123456",
  massUnit: "lb",
  weight: "1",
  distanceUnit: "in",
  height: "1",
  length: "1",
  width: "1",
  objectCreated: new Date("2014-07-09T02:19:13.174Z"),
  objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
  objectOwner: "shippotle@shippo.com",
  objectState: "VALID",
  objectUpdated: new Date("2014-07-09T02:19:13.174Z"),
};
```

## Supported Types

### `string`

```typescript
const value: string = /* values here */
```

### `components.Parcel`

```typescript
const value: components.Parcel = /* values here */
```

