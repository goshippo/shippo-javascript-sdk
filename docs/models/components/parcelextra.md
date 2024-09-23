# ParcelExtra

An object holding optional extra services to be requested for each parcel in a multi-piece shipment. 
See the <a href="#section/Parcel-Extras">Parcel Extra table below</a> for all available services.

## Example Usage

```typescript
import { ParcelExtra } from "shippo/models/components";

let value: ParcelExtra = {
  cod: {
    amount: "5.5",
    currency: "USD",
    paymentMethod: "CASH",
  },
  insurance: {
    amount: "5.5",
    content: "Laptop",
    currency: "USD",
    provider: "UPS",
  },
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cod`                                                                                                                                                               | [components.Cod](../../models/components/cod.md)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                  | Specify collection on delivery details (UPS only).                                                                                                                  |
| `insurance`                                                                                                                                                         | [components.ParcelInsurance](../../models/components/parcelinsurance.md)                                                                                            | :heavy_minus_sign:                                                                                                                                                  | To add insurace to your parcel, specify `amount`, `content` and `currency`. <br><br>If you do not want to add insurance to you parcel, do not set these parameters. |
| `reference1`                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | Optional text to be printed on the shipping label if supported by carrier. Up to 50 characters.                                                                     |
| `reference2`                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | Optional text to be printed on the shipping label if supported by carrier. Up to 50 characters.                                                                     |