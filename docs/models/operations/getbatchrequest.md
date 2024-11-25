# GetBatchRequest

## Example Usage

```typescript
import { GetBatchRequest } from "shippo/models/operations";

let value: GetBatchRequest = {
  batchId: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `batchId`                                                     | *string*                                                      | :heavy_check_mark:                                            | Object ID of the batch                                        |
| `page`                                                        | *number*                                                      | :heavy_minus_sign:                                            | The page number you want to select                            |
| `results`                                                     | *number*                                                      | :heavy_minus_sign:                                            | The number of results to return per page (max 100, default 5) |