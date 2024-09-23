# CarrierAccountDHLExpressCreateRequestParameters

## Example Usage

```typescript
import { CarrierAccountDHLExpressCreateRequestParameters } from "shippo/models/components";

let value: CarrierAccountDHLExpressCreateRequestParameters = {
  userAcceptedTermsAndConditions: false,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `userAcceptedTermsAndConditions`                                                                                                | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | Whether or not the user agrees to the DHL Express Terms and Conditions. If passed in as false, request will fail with error 400 |