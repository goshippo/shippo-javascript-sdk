# CarrierAccountRoyalMailCreateRequestParameters

## Example Usage

```typescript
import { CarrierAccountRoyalMailCreateRequestParameters } from "shippo/models/components";

let value: CarrierAccountRoyalMailCreateRequestParameters = {
  clientId: "<id>",
  clientSecret: "<value>",
  partnerToken: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `clientId`                                            | *string*                                              | :heavy_check_mark:                                    | The client ID assigned to the user                    |
| `clientSecret`                                        | *string*                                              | :heavy_check_mark:                                    | The secret that corresponds to the supplied client ID |
| `partnerToken`                                        | *string*                                              | :heavy_check_mark:                                    | A unique identifier for your OBA account              |