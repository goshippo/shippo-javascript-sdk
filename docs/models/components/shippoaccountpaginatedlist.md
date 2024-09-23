# ShippoAccountPaginatedList

## Example Usage

```typescript
import { ShippoAccountPaginatedList } from "shippo/models/components";

let value: ShippoAccountPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
      email: "hippo@shippo.com",
      firstName: "Shippo",
      lastName: "Meister",
      companyName: "Acme",
      objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `next`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | baseurl?page=3&results=10                                              |
| `previous`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | baseurl?page=1&results=10                                              |
| `results`                                                              | [components.ShippoAccount](../../models/components/shippoaccount.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |