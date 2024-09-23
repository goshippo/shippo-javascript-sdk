# CustomsDeclarationCreateRequestAddress

## Example Usage

```typescript
import { CustomsDeclarationCreateRequestAddress } from "shippo/models/components";

let value: CustomsDeclarationCreateRequestAddress = {
  name: "Patrick Kavanagh",
  zip: "80331",
  country: "DE",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `name`                                            | *string*                                          | :heavy_minus_sign:                                | Name of the party to be billed for duties.        | Patrick Kavanagh                                  |
| `zip`                                             | *string*                                          | :heavy_minus_sign:                                | Postal code of the party to be billed for duties. | 80331                                             |
| `country`                                         | *string*                                          | :heavy_minus_sign:                                | Country ISO code of account number to be billed.  | DE                                                |