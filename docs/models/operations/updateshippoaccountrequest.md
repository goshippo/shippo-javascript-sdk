# UpdateShippoAccountRequest

## Example Usage

```typescript
import { UpdateShippoAccountRequest } from "shippo/models/operations";

let value: UpdateShippoAccountRequest = {
  shippoAccountId: "<id>",
  shippoAccountUpdateRequest: {
    email: "hippo@shippo.com",
    firstName: "Shippo",
    lastName: "Meister",
    companyName: "Acme",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `shippoAccountId`                                                                              | *string*                                                                                       | :heavy_check_mark:                                                                             | Object ID of the ShippoAccount                                                                 |
| `shippoAccountUpdateRequest`                                                                   | [components.ShippoAccountUpdateRequest](../../models/components/shippoaccountupdaterequest.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |