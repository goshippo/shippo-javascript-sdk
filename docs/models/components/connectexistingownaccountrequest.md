# ConnectExistingOwnAccountRequest

## Example Usage

```typescript
import { ConnectExistingOwnAccountRequest } from "shippo/models/components";

let value: ConnectExistingOwnAccountRequest = {
  accountId: "321123",
  carrier: "fedex",
  metadata: "FEDEX Account",
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
  test: false,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `accountId`                                             | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | 321123                                                  |
| `active`                                                | *boolean*                                               | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `carrier`                                               | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | fedex                                                   |
| `metadata`                                              | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | FEDEX Account                                           |
| `parameters`                                            | *components.ConnectExistingOwnAccountRequestParameters* | :heavy_check_mark:                                      | N/A                                                     |                                                         |
| `test`                                                  | *boolean*                                               | :heavy_minus_sign:                                      | N/A                                                     | false                                                   |