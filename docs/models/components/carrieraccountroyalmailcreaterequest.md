# CarrierAccountRoyalMailCreateRequest

## Example Usage

```typescript
import { CarrierAccountRoyalMailCreateRequest } from "shippo/models/components";

let value: CarrierAccountRoyalMailCreateRequest = {
  carrier: "royal_mail",
  parameters: {
    clientId: "<id>",
    clientSecret: "<value>",
    partnerToken: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `carrier`                                                                                                                              | *"royal_mail"*                                                                                                                         | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `parameters`                                                                                                                           | [components.CarrierAccountRoyalMailCreateRequestParameters](../../models/components/carrieraccountroyalmailcreaterequestparameters.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |