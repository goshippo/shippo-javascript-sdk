# AddressValidationResults

Object that contains information regarding if an address had been validated or not. Also contains any messages 
generated during validation. Children keys are <code>is_valid</code>(boolean) and <code>messages</code>(array).

## Example Usage

```typescript
import { AddressValidationResults } from "shippo/models/components";

let value: AddressValidationResults = {
  isValid: false,
  messages: [
    {
      code: "Unknown Street",
      source: "Shippo Address Validator",
      text:
        "City, State and ZIP Code are valid, but street address is not a match.",
      type: "address_warning",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `isValid`                                                                                                  | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | false                                                                                                      |
| `messages`                                                                                                 | [components.AddressValidationResultsMessage](../../models/components/addressvalidationresultsmessage.md)[] | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |