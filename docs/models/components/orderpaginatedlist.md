# OrderPaginatedList

## Example Usage

```typescript
import { OrderPaginatedList } from "shippo/models/components";

let value: OrderPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
      currency: "USD",
      notes: "This customer is a VIP",
      orderNumber: "#1068",
      orderStatus: "PAID",
      placedAt: "2016-09-23T01:28:12Z",
      shippingCost: "12.83",
      shippingCostCurrency: "USD",
      shippingMethod: "USPS First Class Package",
      subtotalPrice: "12.1",
      totalPrice: "24.93",
      totalTax: "0.0",
      weight: "0.4",
      weightUnit: "lb",
      fromAddress: {
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
        isComplete: true,
        objectCreated: new Date("2014-07-09T02:19:13.174Z"),
        objectId: "d799c2679e644279b59fe661ac8fa488",
        objectOwner: "shippotle@shippo.com",
        objectUpdated: new Date("2014-07-09T02:19:13.174Z"),
        validationResults: {
          isValid: false,
          messages: [
            {
              code: "Unknown Street",
              source: "Shippo Address Validator",
              text:
                "City, State and ZIP Code are valid, but street address is not a match.",
              type: "address_warning",
            },
          ],
        },
        test: false,
      },
      toAddress: {
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
        isComplete: true,
        objectCreated: new Date("2014-07-09T02:19:13.174Z"),
        objectId: "d799c2679e644279b59fe661ac8fa488",
        objectOwner: "shippotle@shippo.com",
        objectUpdated: new Date("2014-07-09T02:19:13.174Z"),
        validationResults: {
          isValid: false,
          messages: [
            {
              code: "Unknown Street",
              source: "Shippo Address Validator",
              text:
                "City, State and ZIP Code are valid, but street address is not a match.",
              type: "address_warning",
            },
          ],
        },
        test: false,
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
      objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
      objectOwner: "shippotle@shippo.com",
      shopApp: "Shippo",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `next`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | baseurl?page=3&results=10                              |
| `previous`                                             | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    | baseurl?page=1&results=10                              |
| `results`                                              | [components.Order](../../models/components/order.md)[] | :heavy_minus_sign:                                     | N/A                                                    |                                                        |