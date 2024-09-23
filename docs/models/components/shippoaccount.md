# ShippoAccount

## Example Usage

```typescript
import { ShippoAccount } from "shippo/models/components";

let value: ShippoAccount = {
  email: "hippo@shippo.com",
  firstName: "Shippo",
  lastName: "Meister",
  companyName: "Acme",
  objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | hippo@shippo.com                                                                              |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Shippo                                                                                        |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Meister                                                                                       |
| `companyName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Acme                                                                                          |
| `objectCreated`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `objectId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | adcfdddf8ec64b84ad22772bce3ea37a                                                              |
| `objectUpdated`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |