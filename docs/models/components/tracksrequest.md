# TracksRequest

## Example Usage

```typescript
import { TracksRequest } from "shippo/models/components";

let value: TracksRequest = {
  carrier: "usps",
  metadata: "Order 000123",
  trackingNumber: "9205590164917312751089",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `carrier`                                                                                                             | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Name of the carrier of the shipment to track.                                                                         | usps                                                                                                                  |
| `metadata`                                                                                                            | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | A string of up to 100 characters that can be filled with any additional information you want to attach to the object. | Order 000123                                                                                                          |
| `trackingNumber`                                                                                                      | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Tracking number to track.                                                                                             | 9205590164917312751089                                                                                                |