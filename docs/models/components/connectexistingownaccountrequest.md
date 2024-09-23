# ConnectExistingOwnAccountRequest

## Example Usage

```typescript
import { ConnectExistingOwnAccountRequest } from "shippo/models/components";

let value: ConnectExistingOwnAccountRequest = {
  accountId: "321123",
  carrier: "fedex",
  metadata: "FEDEX Account",
  parameters: {
    firstName: "Aurelia",
    lastName: "Ward",
    phoneNumber: "(717) 415-0806 x279",
    fromAddressSt: "<value>",
    fromAddressCity: "<value>",
    fromAddressState: "<value>",
    fromAddressZip: "<value>",
    fromAddressCountryIso2: "<value>",
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