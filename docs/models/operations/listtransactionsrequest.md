# ListTransactionsRequest

## Example Usage

```typescript
import { ListTransactionsRequest } from "shippo/models/operations";

let value: ListTransactionsRequest = {
  objectStatus: "SUCCESS",
  trackingStatus: "DELIVERED",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `rate`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | Filter by rate ID                                                                    |                                                                                      |
| `objectStatus`                                                                       | [components.TransactionStatusEnum](../../models/components/transactionstatusenum.md) | :heavy_minus_sign:                                                                   | Filter by object status                                                              | SUCCESS                                                                              |
| `trackingStatus`                                                                     | [components.TrackingStatusEnum](../../models/components/trackingstatusenum.md)       | :heavy_minus_sign:                                                                   | Filter by tracking status                                                            | DELIVERED                                                                            |
| `page`                                                                               | *number*                                                                             | :heavy_minus_sign:                                                                   | The page number you want to select                                                   |                                                                                      |
| `results`                                                                            | *number*                                                                             | :heavy_minus_sign:                                                                   | The number of results to return per page (max 100)                                   |                                                                                      |