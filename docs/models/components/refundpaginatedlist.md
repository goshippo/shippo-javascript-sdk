# RefundPaginatedList

## Example Usage

```typescript
import { RefundPaginatedList } from "shippo/models/components";

let value: RefundPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
      objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
      objectOwner: "shippotle@shippo.com",
      status: "SUCCESS",
      transaction: "915d94940ea54c3a80cbfa328722f5a1",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `next`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | baseurl?page=3&results=10                                |
| `previous`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | baseurl?page=1&results=10                                |
| `results`                                                | [components.Refund](../../models/components/refund.md)[] | :heavy_minus_sign:                                       | N/A                                                      |                                                          |