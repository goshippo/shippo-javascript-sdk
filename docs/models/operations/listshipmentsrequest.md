# ListShipmentsRequest

## Example Usage

```typescript
import { ListShipmentsRequest } from "shippo/models/operations";

let value: ListShipmentsRequest = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `page`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | The page number you want to select                                   |
| `results`                                                            | *number*                                                             | :heavy_minus_sign:                                                   | The number of results to return per page (max 100)                   |
| `objectCreatedGt`                                                    | *string*                                                             | :heavy_minus_sign:                                                   | Object(s) created greater than a provided date and time.             |
| `objectCreatedGte`                                                   | *string*                                                             | :heavy_minus_sign:                                                   | Object(s) created greater than or equal to a provided date and time. |
| `objectCreatedLt`                                                    | *string*                                                             | :heavy_minus_sign:                                                   | Object(s) created lesser than a provided date and time.              |
| `objectCreatedLte`                                                   | *string*                                                             | :heavy_minus_sign:                                                   | Object(s) created lesser than or equal to a provided date and time.  |