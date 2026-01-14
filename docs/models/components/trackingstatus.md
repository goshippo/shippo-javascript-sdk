# TrackingStatus

The latest tracking information of this shipment.

## Example Usage

```typescript
import { TrackingStatus } from "shippo/models/components";

let value: TrackingStatus = {
  location: {
    city: "Las Vegas",
    country: "US",
    state: "NV",
    zip: "89101",
  },
  objectCreated: new Date("2025-04-06T07:22:19.251Z"),
  objectId: "<id>",
  objectUpdated: new Date("2025-11-09T01:10:59.062Z"),
  status: "DELIVERED",
  substatus: {
    code: "information_received",
    text: "Information about the package received.",
    actionRequired: true,
  },
  statusDate: new Date("2016-07-23T00:00:00Z"),
  statusDetails: "Your shipment has been delivered at the destination mailbox.",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `location`                                                                                     | [components.TrackingStatusLocationBase](../../models/components/trackingstatuslocationbase.md) | :heavy_minus_sign:                                                                             | An object containing zip, city, state and country information of the tracking event.           |                                                                                                |
| `objectCreated`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `objectId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `objectUpdated`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `status`                                                                                       | [components.TrackingStatusEnum](../../models/components/trackingstatusenum.md)                 | :heavy_check_mark:                                                                             | Indicates the high level status of the shipment.                                               | DELIVERED                                                                                      |
| `substatus`                                                                                    | [components.TrackingStatusSubstatus](../../models/components/trackingstatussubstatus.md)       | :heavy_minus_sign:                                                                             | A finer-grained classification of the tracking event.                                          |                                                                                                |
| `statusDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | Date and time when the carrier scanned this tracking event. This is displayed in UTC.          | 2016-07-23T00:00:00Z                                                                           |
| `statusDetails`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | The human-readable description of the status.                                                  | Your shipment has been delivered at the destination mailbox.                                   |