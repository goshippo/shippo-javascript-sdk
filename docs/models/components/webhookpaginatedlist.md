# WebhookPaginatedList

## Example Usage

```typescript
import { WebhookPaginatedList } from "shippo/models/components";

let value: WebhookPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
      event: "track_updated",
      url: "https://example.com/shippo-webhook",
      active: true,
      isTest: false,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `next`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | baseurl?page=3&results=10                                  |
| `previous`                                                 | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | baseurl?page=1&results=10                                  |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `results`                                                  | [components.Webhook](../../models/components/webhook.md)[] | :heavy_minus_sign:                                         | N/A                                                        |                                                            |