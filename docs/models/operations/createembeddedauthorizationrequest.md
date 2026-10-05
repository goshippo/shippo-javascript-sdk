# CreateEmbeddedAuthorizationRequest

## Example Usage

```typescript
import { CreateEmbeddedAuthorizationRequest } from "shippo/models/operations";

let value: CreateEmbeddedAuthorizationRequest = {
  shippoAccountId: "e0b382dc7d754c0ca6358c09d5d2bdf7",
  embeddedAuthorizationRequest: {
    scope: "embedded:carriers",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `shippoAccountId`                                                                                                                      | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Optional. The object ID of a Managed Shippo Account. Platform accounts set this to<br/>mint a JWT scoped to one of their managed accounts. | e0b382dc7d754c0ca6358c09d5d2bdf7                                                                                                       |
| `embeddedAuthorizationRequest`                                                                                                         | [components.EmbeddedAuthorizationRequest](../../models/components/embeddedauthorizationrequest.md)                                     | :heavy_check_mark:                                                                                                                     | The scope to request for the token.                                                                                                    |                                                                                                                                        |