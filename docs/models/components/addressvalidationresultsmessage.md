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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | See [Address Validation Codes](/shippoapi/public-api/address-validation-codes)   | Unknown Street                                                                   |
| `source`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | See [Address Validation Source](/shippoapi/public-api/address-validation-source) | Shippo Address Validator                                                         |
| `text`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | City, State and ZIP Code are valid, but street address is not a match.           |
| `type`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | address_warning                                                                  |