# WebhookPayloadTrack

Content of the webhook posted to the external URL


## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `event`                                                                            | [components.WebhookEventTypeEnum](../../models/components/webhookeventtypeenum.md) | :heavy_minus_sign:                                                                 | Type of event that triggered the webhook.                                          |
| `test`                                                                             | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Determines whether the webhook is a test webhook or not.                           |
| `data`                                                                             | [components.Track](../../models/components/track.md)                               | :heavy_minus_sign:                                                                 | N/A                                                                                |