# ParcelPaginatedList

## Example Usage

```typescript
import { ParcelPaginatedList } from "shippo/models/components";

let value: ParcelPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `next`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | baseurl?page=3&results=10                                |
| `previous`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | baseurl?page=1&results=10                                |
| `results`                                                | [components.Parcel](../../models/components/parcel.md)[] | :heavy_minus_sign:                                       | N/A                                                      |                                                          |