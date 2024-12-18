# UpdateCarrierAccountRequest

## Example Usage

```typescript
import { UpdateCarrierAccountRequest } from "shippo/models/operations";

let value: UpdateCarrierAccountRequest = {
  carrierAccountId: "<id>",
  carrierAccountBase: {
    accountId: "****",
    carrier: "usps",
    parameters: {
      firstName: "Brielle",
      lastName: "Dickens",
      phoneNumber: "308-999-7304 x2107",
      fromAddressSt: "<value>",
      fromAddressCity: "<value>",
      fromAddressState: "<value>",
      fromAddressZip: "<value>",
      fromAddressCountryIso2: "<value>",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `carrierAccountId`                                                             | *string*                                                                       | :heavy_check_mark:                                                             | Object ID of the carrier account                                               |
| `carrierAccountBase`                                                           | [components.CarrierAccountBase](../../models/components/carrieraccountbase.md) | :heavy_minus_sign:                                                             | Examples.                                                                      |