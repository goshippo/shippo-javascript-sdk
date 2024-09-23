# AddressValidationResultsMessage

## Example Usage

```typescript
import { AddressValidationResultsMessage } from "shippo/models/components";

let value: AddressValidationResultsMessage = {
  code: "Unknown Street",
  source: "Shippo Address Validator",
  text:
    "City, State and ZIP Code are valid, but street address is not a match.",
  type: "address_warning",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `code`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | See <a href="#tag/Address-Validation-Codes">Address Validation Codes</a>   | Unknown Street                                                             |
| `source`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | See <a href="#tag/Address-Validation-Source">Address Validation Source</a> | Shippo Address Validator                                                   |
| `text`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | City, State and ZIP Code are valid, but street address is not a match.     |
| `type`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | address_warning                                                            |