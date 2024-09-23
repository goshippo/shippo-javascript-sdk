# ListCarrierParcelTemplatesRequest

## Example Usage

```typescript
import { ListCarrierParcelTemplatesRequest } from "shippo/models/operations";

let value: ListCarrierParcelTemplatesRequest = {
  carrier: "fedex",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `include`                                                | [operations.Include](../../models/operations/include.md) | :heavy_minus_sign:                                       | filter by user or enabled                                |                                                          |
| `carrier`                                                | *string*                                                 | :heavy_minus_sign:                                       | filter by specific carrier                               | fedex                                                    |