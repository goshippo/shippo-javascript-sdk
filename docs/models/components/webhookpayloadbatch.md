# WebhookPayloadBatch

Content of the webhook posted to the external URL

## Example Usage

```typescript
import { WebhookPayloadBatch } from "shippo/models/components";

let value: WebhookPayloadBatch = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `event`                                                                                               | [components.WebhookEventTypeEnum](../../models/components/webhookeventtypeenum.md)                    | :heavy_minus_sign:                                                                                    | Type of event that triggered the webhook.                                                             |
| `test`                                                                                                | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Determines whether the webhook is a test webhook or not.                                              |
| `data`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | A string containing the batch object ID, of the form 'batch {batchId} (created\|processing complete)'. |