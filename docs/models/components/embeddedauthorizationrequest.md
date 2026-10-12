# EmbeddedAuthorizationRequest

## Example Usage

```typescript
import { EmbeddedAuthorizationRequest } from "shippo/models/components";

let value: EmbeddedAuthorizationRequest = {
  scope: "embedded:carriers",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        | Example                            |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `scope`                            | *string*                           | :heavy_check_mark:                 | The scope requested for the token. | embedded:carriers                  |