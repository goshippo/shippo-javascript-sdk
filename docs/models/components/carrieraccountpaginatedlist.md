# CarrierAccountPaginatedList

## Example Usage

```typescript
import { CarrierAccountPaginatedList } from "shippo/models/components";

let value: CarrierAccountPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
      accountId: "****",
      carrier: "usps",
      parameters: {
        "key": "<value>",
      },
      carrierName: "USPS",
      isShippoAccount: false,
      objectId: "6aa34d5f6865448fbb1ee93636e98999",
      objectOwner: "bob+22@gmail.com",
      serviceLevels: [
        {
          name: "Priority Mail Express",
          token: "usps_priority_express",
          supportsReturnLabels: true,
        },
      ],
      test: false,
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `next`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | baseurl?page=3&results=10                                                                          |
| `previous`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | baseurl?page=1&results=10                                                                          |
| `results`                                                                                          | [components.CarrierAccountWithExtraInfo](../../models/components/carrieraccountwithextrainfo.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |