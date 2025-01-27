# UpdateUserParcelTemplateRequest

## Example Usage

```typescript
import { UpdateUserParcelTemplateRequest } from "shippo/models/operations";

let value: UpdateUserParcelTemplateRequest = {
  userParcelTemplateObjectId: "<id>",
  userParcelTemplateUpdateRequest: {
    distanceUnit: "in",
    height: "6",
    length: "10",
    name: "My Custom Template",
    weight: "12",
    weightUnit: "lb",
    width: "8",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `userParcelTemplateObjectId`                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Object ID of the user parcel template                                                                    |
| `userParcelTemplateUpdateRequest`                                                                        | [components.UserParcelTemplateUpdateRequest](../../models/components/userparceltemplateupdaterequest.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |