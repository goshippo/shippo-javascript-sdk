# WebhookPayload


## Supported Types

### `components.WebhookPayloadTrack`

```typescript
const value: components.WebhookPayloadTrack = {
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
        objectCreated: new Date("2023-10-06T18:35:34.427Z"),
        objectId: "<id>",
        objectUpdated: new Date("2023-03-05T14:23:56.519Z"),
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
      objectCreated: new Date("2024-04-21T02:53:41.707Z"),
      objectId: "<id>",
      objectUpdated: new Date("2023-12-08T17:28:43.968Z"),
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

### `components.WebhookPayloadBatch`

```typescript
const value: components.WebhookPayloadBatch = {};
```

### `components.WebhookPayloadBatch`

```typescript
const value: components.WebhookPayloadBatch = {};
```

### `components.WebhookPayloadTransaction`

```typescript
const value: components.WebhookPayloadTransaction = {
  data: {
    createdBy: {
      firstName: "Shwan",
      lastName: "Ippotle",
      username: "shippotle@shippo.com",
    },
    labelFileType: "PDF_4x6",
    labelUrl:
      "https://shippo-delivery.s3.amazonaws.com/70ae8117ee1749e393f249d5b77c45e0.pdf?Signature=vDw1ltcyGveVR1OQoUDdzC43BY8%3D&Expires=1437093830&AWSAccessKeyId=AKIAJTHP3LLFMYAWALIA",
    messages: [
      {
        source: "UPS",
        code: "carrier_timeout",
        text: "UPS API did not respond. Please try again in a few minutes.",
      },
    ],
    objectId: "915d94940ea54c3a80cbfa328722f5a1",
    objectOwner: "shippotle@shippo.com",
    parcel: "e94c7fdfdc7b495dbb390a28d929d90a",
    qrCodeUrl:
      "https://shippo-delivery.s3.amazonaws.com/96_qr_code.pdf?Signature=PEdWrp0mFWAGwJp7FW3b%2FeA2eyY%3D&Expires=1385930652&AWSAccessKeyId=AKIAJTHP3LLFMYAWALIA",
    rate: "ec9f0d3adc9441449c85d315f0997fd5",
    status: "SUCCESS",
    trackingNumber: "9499907123456123456781",
    trackingStatus: "DELIVERED",
    trackingUrlProvider:
      "https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=9499907123456123456781",
  },
};
```

### `components.WebhookPayloadTransaction`

```typescript
const value: components.WebhookPayloadTransaction = {
  data: {
    createdBy: {
      firstName: "Shwan",
      lastName: "Ippotle",
      username: "shippotle@shippo.com",
    },
    labelFileType: "PDF_4x6",
    labelUrl:
      "https://shippo-delivery.s3.amazonaws.com/70ae8117ee1749e393f249d5b77c45e0.pdf?Signature=vDw1ltcyGveVR1OQoUDdzC43BY8%3D&Expires=1437093830&AWSAccessKeyId=AKIAJTHP3LLFMYAWALIA",
    messages: [
      {
        source: "UPS",
        code: "carrier_timeout",
        text: "UPS API did not respond. Please try again in a few minutes.",
      },
    ],
    objectId: "915d94940ea54c3a80cbfa328722f5a1",
    objectOwner: "shippotle@shippo.com",
    parcel: "e94c7fdfdc7b495dbb390a28d929d90a",
    qrCodeUrl:
      "https://shippo-delivery.s3.amazonaws.com/96_qr_code.pdf?Signature=PEdWrp0mFWAGwJp7FW3b%2FeA2eyY%3D&Expires=1385930652&AWSAccessKeyId=AKIAJTHP3LLFMYAWALIA",
    rate: {
      amount: "5.5",
      amountLocal: "5.5",
      currency: "USD",
      currencyLocal: "USD",
      objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
      provider: "USPS",
      carrierAccount: "078870331023437cb917f5187429b093",
      servicelevelName: "Priority Mail",
      servicelevelToken: "fedex_ground",
    },
    status: "SUCCESS",
    trackingNumber: "9499907123456123456781",
    trackingStatus: "DELIVERED",
    trackingUrlProvider:
      "https://tools.usps.com/go/TrackConfirmAction_input?origTrackNum=9499907123456123456781",
  },
};
```

