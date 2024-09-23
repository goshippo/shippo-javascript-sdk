# ListShipmentRatesRequest

## Example Usage

```typescript
import { ListShipmentRatesRequest } from "shippo/models/operations";

let value: ListShipmentRatesRequest = {
  shipmentId: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `shipmentId`                                       | *string*                                           | :heavy_check_mark:                                 | Object ID of the shipment to update                |
| `page`                                             | *number*                                           | :heavy_minus_sign:                                 | The page number you want to select                 |
| `results`                                          | *number*                                           | :heavy_minus_sign:                                 | The number of results to return per page (max 100) |