# CarrierAccountCanadaPostCreateParameters

## Example Usage

```typescript
import { CarrierAccountCanadaPostCreateParameters } from "shippo/models/components";

let value: CarrierAccountCanadaPostCreateParameters = {
  canadaPostTerms: false,
  company: "Shippo",
  email: "hippo@shippo.com",
  fullName: "Shippo Meister",
  phone: "1112223333",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `canadaPostTerms`                                                                                              | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether or not the user agrees to Canada Post's terms. If passed in as false, request will fail with error 400 |                                                                                                                |
| `company`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | Shippo                                                                                                         |
| `email`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | hippo@shippo.com                                                                                               |
| `fullName`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | Shippo Meister                                                                                                 |
| `phone`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Needs to be a valid phone number and cannot be null                                                            | 1112223333                                                                                                     |