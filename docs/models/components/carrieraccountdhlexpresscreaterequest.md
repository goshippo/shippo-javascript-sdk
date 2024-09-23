# CarrierAccountDHLExpressCreateRequest

## Example Usage

```typescript
import { CarrierAccountDHLExpressCreateRequest } from "shippo/models/components";

let value: CarrierAccountDHLExpressCreateRequest = {
  carrier: "dhl_express",
  parameters: {
    userAcceptedTermsAndConditions: false,
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `carrier`                                                                                                                                | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      | dhl_express                                                                                                                              |
| `parameters`                                                                                                                             | [components.CarrierAccountDHLExpressCreateRequestParameters](../../models/components/carrieraccountdhlexpresscreaterequestparameters.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |                                                                                                                                          |