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
        "first_name": "Watson",
        "last_name": "Fritsch",
        "phone_number": "1-697-502-0706",
        "from_address_st": "<value>",
        "from_address_city": "<value>",
        "from_address_state": "<value>",
        "from_address_zip": "<value>",
        "from_address_country_iso2": "<value>",
        "use_multi_factor_registration": true,
        "verification_option": "INVOICE",
        "verification_invoice_amount": "340",
        "verification_invoice_date": "2024-03-09",
        "verification_invoice_currency": "USD",
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