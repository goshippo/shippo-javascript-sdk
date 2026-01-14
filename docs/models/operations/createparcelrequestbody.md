# CreateParcelRequestBody

Parcel details.


## Supported Types

### `components.ParcelCreateRequest`

```typescript
const value: components.ParcelCreateRequest = {
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

### `components.ParcelCreateFromTemplateRequest`

```typescript
const value: components.ParcelCreateFromTemplateRequest = {
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
  template: "DHLeC_SM_Flats",
};
```

