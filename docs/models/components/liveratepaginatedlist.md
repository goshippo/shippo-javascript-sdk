# LiveRatePaginatedList

## Example Usage

```typescript
import { LiveRatePaginatedList } from "shippo/models/components";

let value: LiveRatePaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  count: 123,
  results: [
    {
      amount: "5.5",
      amountLocal: "5.5",
      currency: "USD",
      currencyLocal: "USD",
      estimatedDays: 2,
      title: "Shipping Option 1",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `next`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | baseurl?page=3&results=10                                    |
| `previous`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | baseurl?page=1&results=10                                    |
| `count`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          | 123                                                          |
| `results`                                                    | [components.LiveRate](../../models/components/liverate.md)[] | :heavy_minus_sign:                                           | N/A                                                          |                                                              |