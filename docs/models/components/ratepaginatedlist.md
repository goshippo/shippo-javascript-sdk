# RatePaginatedList

## Example Usage

```typescript
import { RatePaginatedList } from "shippo/models/components";

let value: RatePaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
      amount: "5.5",
      amountLocal: "5.5",
      currency: "USD",
      currencyLocal: "USD",
      arrivesBy: "08:30:00",
      attributes: [
        "CHEAPEST",
      ],
      carrierAccount: "078870331023437cb917f5187429b093",
      durationTerms: "Delivery in 1 to 3 business days",
      estimatedDays: 2,
      includedInsurancePrice: "1.05",
      messages: [
        {
          source: "UPS",
          code: "carrier_timeout",
          text: "UPS API did not respond. Please try again in a few minutes.",
        },
      ],
      objectCreated: new Date("2025-06-04T12:03:27.411Z"),
      objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
      objectOwner: "pp@gmail.com",
      provider: "USPS",
      providerImage75: "https://cdn2.goshippo.com/providers/75/USPS.png",
      providerImage200: "https://cdn2.goshippo.com/providers/200/USPS.png",
      servicelevel: {
        name: "Priority Mail Express",
        token: "usps_priority_express",
        parentServicelevel: {
          name: "Priority Mail Express",
          token: "usps_priority_express",
        },
      },
      shipment: "adcfdddf8ec64b84ad22772bce3ea37a",
      zone: "1",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `next`                                               | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  | baseurl?page=3&results=10                            |
| `previous`                                           | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  | baseurl?page=1&results=10                            |
| `results`                                            | [components.Rate](../../models/components/rate.md)[] | :heavy_minus_sign:                                   | N/A                                                  |                                                      |