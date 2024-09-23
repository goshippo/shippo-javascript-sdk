# Refund

## Example Usage

```typescript
import { Refund } from "shippo/models/components";

let value: Refund = {
  objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
  objectOwner: "shippotle@shippo.com",
  status: "SUCCESS",
  transaction: "915d94940ea54c3a80cbfa328722f5a1",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `objectCreated`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date and time of object creation.                                                             |                                                                                               |
| `objectId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier of the given object.                                                        | adcfdddf8ec64b84ad22772bce3ea37a                                                              |
| `objectOwner`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Username of the user who created the object.                                                  | shippotle@shippo.com                                                                          |
| `objectUpdated`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date and time of last object update.                                                          |                                                                                               |
| `status`                                                                                      | [components.RefundStatus](../../models/components/refundstatus.md)                            | :heavy_minus_sign:                                                                            | Indicates the status of the Refund.                                                           | SUCCESS                                                                                       |
| `test`                                                                                        | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether the object has been created in test mode.                                   |                                                                                               |
| `transaction`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Object ID of the Transaction to be refunded.                                                  | 915d94940ea54c3a80cbfa328722f5a1                                                              |