# ListCarrierAccountsRequest

## Example Usage

```typescript
import { ListCarrierAccountsRequest } from "shippo/models/operations";

let value: ListCarrierAccountsRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `serviceLevels`                                                        | *boolean*                                                              | :heavy_minus_sign:                                                     | Appends the property `service_levels` to each returned carrier account |
| `carrier`                                                              | [components.CarriersEnum](../../models/components/carriersenum.md)     | :heavy_minus_sign:                                                     | Filter the response by the specified carrier                           |
| `accountId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | Filter the response by the specified carrier account Id                |
| `page`                                                                 | *number*                                                               | :heavy_minus_sign:                                                     | The page number you want to select                                     |
| `results`                                                              | *number*                                                               | :heavy_minus_sign:                                                     | The number of results to return per page (max 100, default 5)          |