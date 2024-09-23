# CreateParcelRequestBody

Parcel details.

## Example Usage

```typescript
import { CreateParcelRequestBody } from "shippo/models/operations";

let value: CreateParcelRequestBody = {
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
};
```

## Supported Types

### `components.ParcelCreateRequest`

```typescript
const value: components.ParcelCreateRequest = /* values here */
```

### `components.ParcelCreateFromTemplateRequest`

```typescript
const value: components.ParcelCreateFromTemplateRequest = /* values here */
```

