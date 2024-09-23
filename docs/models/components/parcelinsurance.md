# ParcelInsurance

To add insurace to your parcel, specify `amount`, `content` and `currency`. <br><br>If you do not want to add insurance to you parcel, do not set these parameters.

## Example Usage

```typescript
import { ParcelInsurance } from "shippo/models/components";

let value: ParcelInsurance = {
  amount: "5.5",
  content: "Laptop",
  currency: "USD",
  provider: "UPS",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                                                                   | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Declared value of the goods you want to insure.                                                                                            | 5.5                                                                                                                                        |
| `content`                                                                                                                                  | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Description of parcel content.                                                                                                             | Laptop                                                                                                                                     |
| `currency`                                                                                                                                 | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Currency for the amount value. Currently only USD is supported for FedEx and UPS.                                                          | USD                                                                                                                                        |
| `provider`                                                                                                                                 | [components.ParcelInsuranceProvider](../../models/components/parcelinsuranceprovider.md)                                                   | :heavy_minus_sign:                                                                                                                         | To have insurance cover provided by a carrier directly instead of Shippo's provider (XCover), set provider to `FEDEX`, `UPS`, or `ONTRAC`. | UPS                                                                                                                                        |