# UpdateCarrierAccountRequest

## Example Usage

```typescript
import { UpdateCarrierAccountRequest } from "shippo/models/operations";

let value: UpdateCarrierAccountRequest = {
  carrierAccountId: "<value>",
  carrierAccountBase: {
    accountId: "****",
    carrier: "usps",
    parameters: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `carrierAccountId`                                                             | *string*                                                                       | :heavy_check_mark:                                                             | Object ID of the carrier account                                               |
| `carrierAccountBase`                                                           | [components.CarrierAccountBase](../../models/components/carrieraccountbase.md) | :heavy_minus_sign:                                                             | Examples.                                                                      |