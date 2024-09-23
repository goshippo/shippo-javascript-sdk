# ObjectResults

An object containing the following counts:<br>`creation_succeeded`<br>`creation_failed`<br>`purchase_succeeded`<br>`purchase_failed`

## Example Usage

```typescript
import { ObjectResults } from "shippo/models/components";

let value: ObjectResults = {
  creationFailed: 3,
  creationSucceeded: 5,
  purchaseFailed: 0,
  purchaseSucceeded: 0,
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `creationFailed`    | *number*            | :heavy_check_mark:  | N/A                 | 3                   |
| `creationSucceeded` | *number*            | :heavy_check_mark:  | N/A                 | 5                   |
| `purchaseFailed`    | *number*            | :heavy_check_mark:  | N/A                 | 0                   |
| `purchaseSucceeded` | *number*            | :heavy_check_mark:  | N/A                 | 0                   |