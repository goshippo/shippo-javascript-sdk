# WebhookPayload

## Example Usage

```typescript
import { WebhookPayload } from "shippo/models/components";

let value: WebhookPayload = {
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
        objectCreated: new Date("2022-06-30T12:06:54.333Z"),
        objectId: "<value>",
        objectUpdated: new Date("2023-11-13T03:22:04.343Z"),
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
      objectCreated: new Date("2023-09-25T15:25:14.861Z"),
      objectId: "<value>",
      objectUpdated: new Date("2022-09-18T17:31:57.984Z"),
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

## Supported Types

### `components.WebhookPayloadTrack`

```typescript
const value: components.WebhookPayloadTrack = /* values here */
```

### `components.WebhookPayloadBatch`

```typescript
const value: components.WebhookPayloadBatch = /* values here */
```

### `components.WebhookPayloadBatch`

```typescript
const value: components.WebhookPayloadBatch = /* values here */
```

### `components.WebhookPayloadTransaction`

```typescript
const value: components.WebhookPayloadTransaction = /* values here */
```

### `components.WebhookPayloadTransaction`

```typescript
const value: components.WebhookPayloadTransaction = /* values here */
```

