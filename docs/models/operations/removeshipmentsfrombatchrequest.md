# RemoveShipmentsFromBatchRequest

## Example Usage

```typescript
import { RemoveShipmentsFromBatchRequest } from "shippo/models/operations";

let value: RemoveShipmentsFromBatchRequest = {
  batchId: "<value>",
  requestBody: [
    "<value>",
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `batchId`                                              | *string*                                               | :heavy_check_mark:                                     | Object ID of the batch                                 |
| `requestBody`                                          | *string*[]                                             | :heavy_check_mark:                                     | Array of shipments object ids to remove from the batch |