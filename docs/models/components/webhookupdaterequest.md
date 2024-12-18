# WebhookUpdateRequest

## Example Usage

```typescript
import { WebhookUpdateRequest } from "shippo/models/components";

let value: WebhookUpdateRequest = {
  event: "transaction_updated",
  url: "https://example.com/shippo-webhook",
  active: true,
  isTest: false,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `event`                                                                            | [components.WebhookEventTypeEnum](../../models/components/webhookeventtypeenum.md) | :heavy_check_mark:                                                                 | Type of event that triggered the webhook.                                          |                                                                                    |
| `url`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | URL webhook events are sent to.                                                    | https://example.com/shippo-webhook                                                 |
| `active`                                                                           | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Determines whether the webhook is active or not.                                   | true                                                                               |
| `isTest`                                                                           | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Determines whether the webhook is a test webhook or not.                           | false                                                                              |