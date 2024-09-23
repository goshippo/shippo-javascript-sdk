# UserParcelTemplateWithCarrierTemplateCreateRequest

## Example Usage

```typescript
import { UserParcelTemplateWithCarrierTemplateCreateRequest } from "shippo/models/components";

let value: UserParcelTemplateWithCarrierTemplateCreateRequest = {
  weight: "12",
  weightUnit: "lb",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `template`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | The object representing the carrier parcel template                         |                                                                             |
| `weight`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | The weight of the package, in units specified by the weight_unit attribute. | 12                                                                          |
| `weightUnit`                                                                | [components.WeightUnitEnum](../../models/components/weightunitenum.md)      | :heavy_minus_sign:                                                          | The unit used for weight.                                                   | lb                                                                          |