# CustomsItemPaginatedList

## Example Usage

```typescript
import { CustomsItemPaginatedList } from "shippo/models/components";

let value: CustomsItemPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
      description: "T-Shirt",
      massUnit: "lb",
      metadata: "Order ID \"123454\"",
      netWeight: "5",
      originCountry: "<value>",
      quantity: 20,
      skuCode: "HM-123",
      hsCode: "0901.21",
      valueAmount: "200",
      valueCurrency: "USD",
      objectCreated: new Date("2014-07-17T00:49:20.631Z"),
      objectId: "d799c2679e644279b59fe661ac8fa488",
      objectOwner: "shippotle@shippo.com",
      objectUpdated: new Date("2014-07-17T00:49:20.631Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `next`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | baseurl?page=3&results=10                                          |
| `previous`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | baseurl?page=1&results=10                                          |
| `results`                                                          | [components.CustomsItem](../../models/components/customsitem.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |