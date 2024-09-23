# CarrierParcelTemplateList

## Example Usage

```typescript
import { CarrierParcelTemplateList } from "shippo/models/components";

let value: CarrierParcelTemplateList = {
  results: [
    {
      carrier: "FedEx",
      distanceUnit: "in",
      height: "1.5",
      isVariableDimensions: false,
      length: "12.375",
      name: "FedEx® Small Box (S1)",
      token: "FedEx_Box_Small_1",
      width: "10.875",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `results`                                                                              | [components.CarrierParcelTemplate](../../models/components/carrierparceltemplate.md)[] | :heavy_minus_sign:                                                                     | N/A                                                                                    |