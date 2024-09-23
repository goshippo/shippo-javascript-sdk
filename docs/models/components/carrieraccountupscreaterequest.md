# CarrierAccountUPSCreateRequest

## Example Usage

```typescript
import { CarrierAccountUPSCreateRequest } from "shippo/models/components";

let value: CarrierAccountUPSCreateRequest = {
  carrier: "ups",
  parameters: {
    billingAddressCity: "San Francisco",
    billingAddressCountryIso2: "US",
    billingAddressState: "CA",
    billingAddressStreet1: "731 Market St",
    billingAddressStreet2: "STE 200",
    billingAddressZip: "94103",
    company: "Shippo",
    email: "hippo@shippo.com",
    fullName: "Shippo Meister",
    phone: "1112223333",
    pickupAddressCity: "San Francisco",
    pickupAddressCountryIso2: "US",
    pickupAddressSameAsBillingAddress: false,
    pickupAddressState: "CA",
    pickupAddressStreet1: "731 Market St",
    pickupAddressStreet2: "STE 200",
    pickupAddressZip: "94103",
    upsAgreements: false,
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `carrier`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        | ups                                                                                                                        |
| `parameters`                                                                                                               | [components.CarrierAccountUPSCreateRequestParameters](../../models/components/carrieraccountupscreaterequestparameters.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |