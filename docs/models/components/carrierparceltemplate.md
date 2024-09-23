# CarrierParcelTemplate

## Example Usage

```typescript
import { CarrierParcelTemplate } from "shippo/models/components";

let value: CarrierParcelTemplate = {
  carrier: "FedEx",
  distanceUnit: "in",
  height: "1.5",
  isVariableDimensions: false,
  length: "12.375",
  name: "FedEx® Small Box (S1)",
  token: "FedEx_Box_Small_1",
  width: "10.875",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `carrier`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | The name of the carrier that provides this parcel template                           | FedEx                                                                                |
| `distanceUnit`                                                                       | [components.DistanceUnitEnum](../../models/components/distanceunitenum.md)           | :heavy_minus_sign:                                                                   | The measure unit used for length, width and height.                                  | in                                                                                   |
| `height`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The height of the package, in units specified by the distance_unit attribute         | 1.5                                                                                  |
| `isVariableDimensions`                                                               | *boolean*                                                                            | :heavy_minus_sign:                                                                   | True if the carrier parcel template allows custom dimensions, such as USPS Softpack. | false                                                                                |
| `length`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The length of the package, in units specified by the distance_unit attribute         | 12.375                                                                               |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The name of the carrier parcel template                                              | FedEx® Small Box (S1)                                                                |
| `token`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | The unique string representation of the carrier parcel template                      | FedEx_Box_Small_1                                                                    |
| `width`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | The width of the package, in units specified by the distance_unit attribute          | 10.875                                                                               |