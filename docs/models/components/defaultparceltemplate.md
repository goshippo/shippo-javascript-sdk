# DefaultParcelTemplate

## Example Usage

```typescript
import { DefaultParcelTemplate } from "shippo/models/components";

let value: DefaultParcelTemplate = {
  result: {
    distanceUnit: "in",
    height: "6",
    length: "10",
    name: "My Custom Template",
    weight: "12",
    weightUnit: "lb",
    width: "8",
    objectCreated: new Date("2013-12-11T19:38:09.729Z"),
    objectId: "b958d3690bb04bb8b2986724872750f5",
    objectOwner: "shippotle@shippo.com",
    objectUpdated: new Date("2013-12-12T19:38:09.729Z"),
    template: {
      carrier: "FedEx",
      distanceUnit: "in",
      height: "1.5",
      isVariableDimensions: false,
      length: "12.375",
      name: "FedEx® Small Box (S1)",
      token: "FedEx_Box_Small_1",
      width: "10.875",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.UserParcelTemplate](../../models/components/userparceltemplate.md) | :heavy_minus_sign:                                                             | N/A                                                                            |