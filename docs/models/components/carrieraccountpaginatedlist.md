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
        accountNumber: "94567e",
        aiaCountryIso2: "US",
        billingAddressCity: "San Francisco",
        billingAddressCountryIso2: "US",
        billingAddressState: "CA",
        billingAddressStreet1: "731 Market St",
        billingAddressStreet2: "STE 200",
        billingAddressZip: "94103",
        collecCountryIso2: "US",
        collecZip: "94103",
        company: "Shippo",
        currencyCode: "USD",
        email: "hippo@shippo.com",
        fullName: "Shippo Meister",
        hasInvoice: false,
        invoiceControlid: "1234",
        invoiceDate: "20210529",
        invoiceNumber: "1112234",
        invoiceValue: "11.23",
        phone: "1112223333",
        title: "Manager",
        upsAgreements: false,
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