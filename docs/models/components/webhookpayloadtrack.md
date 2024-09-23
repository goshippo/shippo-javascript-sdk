# WebhookPayloadTrack

Content of the webhook posted to the external URL

## Example Usage

```typescript
import { WebhookPayloadTrack } from "shippo/models/components";

let value: WebhookPayloadTrack = {
  data: {
    addressFrom: {
      city: "Las Vegas",
      country: "US",
      state: "NV",
      zip: "89101",
    },
    addressTo: {
      city: "Las Vegas",
      country: "US",
      state: "NV",
      zip: "89101",
    },
    carrier: "usps",
    messages: [
      "<value>",
    ],
    metadata: "Order 000123",
    originalEta: new Date("2021-07-23T00:00:00Z"),
    servicelevel: {
      name: "Priority Mail Express",
      token: "usps_priority_express",
      parentServicelevel: {
        name: "Priority Mail Express",
        token: "usps_priority_express",
      },
    },
    trackingHistory: [
      {
        location: {
          city: "Las Vegas",
          country: "US",
          state: "NV",
          zip: "89101",
        },
        objectCreated: new Date("2022-08-08T04:42:30.927Z"),
        objectId: "<value>",
        objectUpdated: new Date("2022-01-21T07:11:50.213Z"),
        status: "DELIVERED",
        substatus: {
          code: "information_received",
          text: "Information about the package received.",
          actionRequired: false,
        },
        statusDate: new Date("2016-07-23T00:00:00Z"),
        statusDetails:
          "Your shipment has been delivered at the destination mailbox.",
      },
    ],
    trackingNumber: "9205590164917312751089",
    trackingStatus: {
      location: {
        city: "Las Vegas",
        country: "US",
        state: "NV",
        zip: "89101",
      },
      objectCreated: new Date("2024-05-19T21:25:27.801Z"),
      objectId: "<value>",
      objectUpdated: new Date("2022-09-03T10:06:53.981Z"),
      status: "DELIVERED",
      substatus: {
        code: "information_received",
        text: "Information about the package received.",
        actionRequired: false,
      },
      statusDate: new Date("2016-07-23T00:00:00Z"),
      statusDetails:
        "Your shipment has been delivered at the destination mailbox.",
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `event`                                                                            | [components.WebhookEventTypeEnum](../../models/components/webhookeventtypeenum.md) | :heavy_minus_sign:                                                                 | Type of event that triggered the webhook.                                          |
| `test`                                                                             | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Determines whether the webhook is a test webhook or not.                           |
| `data`                                                                             | [components.Track](../../models/components/track.md)                               | :heavy_minus_sign:                                                                 | N/A                                                                                |