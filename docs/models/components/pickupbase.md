# PickupBase

## Example Usage

```typescript
import { PickupBase } from "shippo/models/components";

let value: PickupBase = {
  carrierAccount: "adcfdddf8ec64b84ad22772bce3ea37a",
  location: {
    address: {
      name: "Shwan Ippotle",
      company: "Shippo",
      street1: "215 Clayton St.",
      street3: "",
      streetNo: "",
      city: "San Francisco",
      state: "CA",
      zip: "94117",
      country: "US",
      phone: "+1 555 341 9393",
      email: "shippotle@shippo.com",
      isResidential: true,
      metadata: "Customer ID 123456",
      validate: true,
    },
    buildingLocationType: "Front Door",
    buildingType: "apartment",
    instructions: "Behind screen door",
  },
  requestedEndTime: new Date("2024-11-14T22:46:54.999Z"),
  requestedStartTime: new Date("2024-01-25T08:01:21.481Z"),
  transactions: [
    "adcfdddf8ec64b84ad22772bce3ea37a",
  ],
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      | Example                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `carrierAccount`                                                                                                                                                                                 | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | The object ID of your USPS or DHL Express carrier account. <br/>You can retrieve this from your Rate requests or our <a href="/shippoapi/public-api/carrier-accounts">Carrier Accounts</a> endpoint. | adcfdddf8ec64b84ad22772bce3ea37a                                                                                                                                                                 |
| `location`                                                                                                                                                                                       | [components.Location](../../models/components/location.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                               | Location where the parcel(s) will be picked up.                                                                                                                                                  |                                                                                                                                                                                                  |
| `metadata`                                                                                                                                                                                       | *string*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | A string of up to 100 characters that can be filled with any additional information you <br/>want to attach to the object.                                                                       |                                                                                                                                                                                                  |
| `requestedEndTime`                                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                    | :heavy_check_mark:                                                                                                                                                                               | The latest that you requested your parcels to be available for pickup. <br/>Expressed in the timezone specified in the response.                                                                 |                                                                                                                                                                                                  |
| `requestedStartTime`                                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                    | :heavy_check_mark:                                                                                                                                                                               | The earliest that you requested your parcels to be ready for pickup. <br/>Expressed in the timezone specified in the response.                                                                   |                                                                                                                                                                                                  |
| `transactions`                                                                                                                                                                                   | *string*[]                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                               | The transaction(s) object ID(s) for the parcel(s) that need to be picked up.                                                                                                                     | [<br/>"adcfdddf8ec64b84ad22772bce3ea37a"<br/>]                                                                                                                                                   |