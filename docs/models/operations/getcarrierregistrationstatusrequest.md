# GetCarrierRegistrationStatusRequest

## Example Usage

```typescript
import { GetCarrierRegistrationStatusRequest } from "shippo/models/operations";

let value: GetCarrierRegistrationStatusRequest = {
  carrier: "canada_post",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `carrier`                                                | [operations.Carrier](../../models/operations/carrier.md) | :heavy_check_mark:                                       | filter by specific carrier                               |