# BatchShipmentPaginatedList

Array of <a href="#section/Batch-Shipment">BatchShipment</a> objects. 
The response keeps the same order as in the request array.

## Example Usage

```typescript
import { BatchShipmentPaginatedList } from "shippo/models/components";

let value: BatchShipmentPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
      carrierAccount: "a4391cd4ab974f478f55dc08b5c8e3b3",
      metadata: "SHIPMENT #1",
      servicelevelToken: "fedex_ground",
      objectId: "e11c95a6788d4ddcaa22f03175838740",
      shipment: "adcfdddf8ec64b84ad22772bce3ea37a",
      status: "INVALID",
      transaction: "4c33736a67e2450da88b38c42deef6b7",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `next`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | baseurl?page=3&results=10                                              |
| `previous`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    | baseurl?page=1&results=10                                              |
| `results`                                                              | [components.BatchShipment](../../models/components/batchshipment.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |