# ConnectExistingOwnAccountRequest

## Example Usage

```typescript
import { ConnectExistingOwnAccountRequest } from "shippo/models/components";

let value: ConnectExistingOwnAccountRequest = {
  accountId: "321123",
  carrier: "fedex",
  metadata: "FEDEX Account",
  parameters: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  test: false,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `accountId`                                             | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | 321123                                                  |
| `active`                                                | *boolean*                                               | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `carrier`                                               | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | fedex                                                   |
| `metadata`                                              | *string*                                                | :heavy_minus_sign:                                      | N/A                                                     | FEDEX Account                                           |
| `parameters`                                            | *components.ConnectExistingOwnAccountRequestParameters* | :heavy_check_mark:                                      | N/A                                                     |                                                         |
| `test`                                                  | *boolean*                                               | :heavy_minus_sign:                                      | N/A                                                     | false                                                   |