# OrderCreateRequest

## Example Usage

```typescript
import { OrderCreateRequest } from "shippo/models/components";

let value: OrderCreateRequest = {
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
    validate: true,
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `currency`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | **Required if total_price is provided**<br><br/>Currency of the <code>total_price</code> and <code>total_tax</code> amounts.                                                   | USD                                                                                                                                                                            |
| `notes`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Custom buyer- or seller-provided notes about the order.                                                                                                                        | This customer is a VIP                                                                                                                                                         |
| `orderNumber`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An alphanumeric identifier for the order used by the seller/buyer. This identifier doesn't need to be unique.                                                                  | #1068                                                                                                                                                                          |
| `orderStatus`                                                                                                                                                                  | [components.OrderStatusEnum](../../models/components/orderstatusenum.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Current state of the order. See the <a href="https://docs.goshippo.com/docs/orders/orders/">orders tutorial</a> <br/>for the logic of how the status is handled.               | PAID                                                                                                                                                                           |
| `placedAt`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Date and time when the order was placed. This datetime can be different from the datetime of the order object creation on Shippo.                                              | 2016-09-23T01:28:12Z                                                                                                                                                           |
| `shippingCost`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Amount paid by the buyer for shipping. This amount can be different from the price the seller will actually pay for shipping.                                                  | 12.83                                                                                                                                                                          |
| `shippingCostCurrency`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | **Required if shipping_cost is provided**<br><br/>Currency of the <code>shipping_cost</code> amount.                                                                           | USD                                                                                                                                                                            |
| `shippingMethod`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Shipping method (carrier + service or other free text description) chosen by the buyer. <br/>This value can be different from the shipping method the seller will actually choose. | USPS First Class Package                                                                                                                                                       |
| `subtotalPrice`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | 12.1                                                                                                                                                                           |
| `totalPrice`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Total amount paid by the buyer for this order.                                                                                                                                 | 24.93                                                                                                                                                                          |
| `totalTax`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Total tax amount paid by the buyer for this order.                                                                                                                             | 0.0                                                                                                                                                                            |
| `weight`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Total weight of the order.                                                                                                                                                     | 0.4                                                                                                                                                                            |
| `weightUnit`                                                                                                                                                                   | [components.WeightUnitEnum](../../models/components/weightunitenum.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                             | The unit used for weight.                                                                                                                                                      | lb                                                                                                                                                                             |
| `fromAddress`                                                                                                                                                                  | [components.AddressCreateRequest](../../models/components/addresscreaterequest.md)                                                                                             | :heavy_minus_sign:                                                                                                                                                             | <a href="#tag/Addresses">Address</a> object of the sender / seller. Will be returned expanded by default..                                                                     |                                                                                                                                                                                |
| `toAddress`                                                                                                                                                                    | [components.AddressCreateRequest](../../models/components/addresscreaterequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | <a href="#tag/Addresses">Address</a> object of the recipient / buyer. Will be returned expanded by default.                                                                    |                                                                                                                                                                                |
| `lineItems`                                                                                                                                                                    | [components.LineItemBase](../../models/components/lineitembase.md)[]                                                                                                           | :heavy_minus_sign:                                                                                                                                                             | Array of <a href="#section/Line-Item">line item</a> objects representing the items in this order. <br/>All objects will be returned expanded by default.                       |                                                                                                                                                                                |