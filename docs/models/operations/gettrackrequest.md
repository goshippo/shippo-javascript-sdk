# GetTrackRequest

## Example Usage

```typescript
import { GetTrackRequest } from "shippo/models/operations";

let value: GetTrackRequest = {
  trackingNumber: "<value>",
  carrier: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `trackingNumber`    | *string*            | :heavy_check_mark:  | Tracking number     |
| `carrier`           | *string*            | :heavy_check_mark:  | Name of the carrier |