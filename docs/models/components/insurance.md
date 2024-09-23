# Insurance

To add 3rd party insurance powered by <a href="https://docs.goshippo.com/docs/shipments/shippinginsurance/">XCover</a>, 
specify <br> `amount`, `content`, and `currency`. <br> Alternatively, you can choose carrier provided insurance 
by additionally specifying `provider` (UPS, FedEx and OnTrac only). <br><br> If you do not want to add insurance 
to your shipment, do not set these parameters.

## Example Usage

```typescript
import { Insurance } from "shippo/models/components";

let value: Insurance = {
  amount: "5.5",
  currency: "USD",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                     | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Declared value of the goods you want to insure.                                                                                              | 5.5                                                                                                                                          |
| `content`                                                                                                                                    | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Description of package content.                                                                                                              |                                                                                                                                              |
| `currency`                                                                                                                                   | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Currency for the amount value.<br/>Currently only USD is supported for FedEx and UPS.                                                        | USD                                                                                                                                          |
| `provider`                                                                                                                                   | [components.Provider](../../models/components/provider.md)                                                                                   | :heavy_minus_sign:                                                                                                                           | To have insurance cover provided by a carrier directly instead of Shippo's provider (XCover), set `provider` to `FEDEX`, `UPS`, or `ONTRAC`. |                                                                                                                                              |