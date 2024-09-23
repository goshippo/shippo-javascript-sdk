# LiveRateCreateRequest

## Example Usage

```typescript
import { LiveRateCreateRequest } from "shippo/models/components";

let value: LiveRateCreateRequest = {
  addressFrom: "<value>",
  addressTo: {
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
  lineItems: [
    {
      currency: "USD",
      manufactureCountry: "US",
      maxDeliveryTime: new Date("2016-07-23T00:00:00Z"),
      maxShipTime: new Date("2016-07-23T00:00:00Z"),
      quantity: 20,
      sku: "HM-123",
      title: "Hippo Magazines",
      totalPrice: "12.1",
      variantTitle: "June Edition",
      weight: "0.4",
      weightUnit: "lb",
      objectId: "abf7d5675d744b6ea9fdb6f796b28f28",
    },
  ],
  parcel: "5df144dca289442cv7a06",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addressFrom`                                                                                                                                                                                                                                                                 | *components.LiveRateCreateRequestAddressFrom*                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                            | The sender address, which includes your name, company name, street address, city, state, zip code, <br/>country, phone number, and email address (strings). Special characters should not be included in <br/>any address element, especially name, company, and email.       |                                                                                                                                                                                                                                                                               |
| `addressTo`                                                                                                                                                                                                                                                                   | *components.LiveRateCreateRequestAddressTo*                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                            | The recipient address, which includes the recipient's name, company name, street address, city, state, zip code, <br/>country, phone number, and email address (strings). Special characters should not be included in <br/>any address element, especially name, company, and email. |                                                                                                                                                                                                                                                                               |
| `lineItems`                                                                                                                                                                                                                                                                   | [components.LineItem](../../models/components/lineitem.md)[]                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                            | Array of Line Item objects                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                               |
| `parcel`                                                                                                                                                                                                                                                                      | *components.LiveRateCreateRequestParcel*                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                            | Object ID for an existing User Parcel Template OR a fully formed Parcel object.                                                                                                                                                                                               | 5df144dca289442cv7a06                                                                                                                                                                                                                                                         |