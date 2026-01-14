# CarrierAccountCanadaPostCreateRequest

## Example Usage

```typescript
import { CarrierAccountCanadaPostCreateRequest } from "shippo/models/components";

let value: CarrierAccountCanadaPostCreateRequest = {
  carrier: "canada_post",
  parameters: {
    canadaPostTerms: true,
    company: "Shippo",
    email: "hippo@shippo.com",
    fullName: "Shippo Meister",
    phone: "1112223333",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `carrier`                                                                                                                  | *"canada_post"*                                                                                                            | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `parameters`                                                                                                               | [components.CarrierAccountCanadaPostCreateParameters](../../models/components/carrieraccountcanadapostcreateparameters.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |