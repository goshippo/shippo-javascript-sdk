# Webhook

## Example Usage

```typescript
import { Webhook } from "shippo/models/components";

let value: Webhook = {
  event: "track_updated",
  url: "https://example.com/shippo-webhook",
  active: true,
  isTest: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `event`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Type of event that triggers the webhook.                                                      | track_updated                                                                                 |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | URL webhook events are sent to.                                                               | https://example.com/shippo-webhook                                                            |
| `active`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Determines whether the webhook is active or not.                                              | true                                                                                          |
| `isTest`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Determines whether the webhook is a test webhook or not.                                      | false                                                                                         |
| `objectCreated`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of the creation of the webhook.                                                     |                                                                                               |
| `objectId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier of the webhook. This can be used to retrieve or delete the webhook.         |                                                                                               |
| `objectUpdated`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of the last update of the webhook.                                                  |                                                                                               |
| `objectOwner`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Username of the user who created the webhook.                                                 |                                                                                               |