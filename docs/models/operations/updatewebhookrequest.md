# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "shippo/models/operations";

let value: UpdateWebhookRequest = {
  webhookId: "<value>",
  webhookUpdateRequest: {
    event: "all",
    url: "https://example.com/shippo-webhook",
    active: true,
    isTest: false,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `webhookId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | Object ID of the webhook to retrieve                                               |
| `webhookUpdateRequest`                                                             | [components.WebhookUpdateRequest](../../models/components/webhookupdaterequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |