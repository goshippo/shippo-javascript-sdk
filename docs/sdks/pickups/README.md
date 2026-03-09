# Pickups

## Overview

A pickup is when you schedule a carrier to collect a package for delivery.
Use Shippo’s pickups endpoint to schedule pickups with USPS and DHL Express for eligible shipments that you have already created.

### Available Operations

* [create](#create) - Create a pickup

## create

Creates a pickup object. This request is for a carrier to come to a specified location to take a package for shipping.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreatePickup" method="post" path="/pickups" -->
```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  shippoApiVersion: "2018-02-08",
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await shippo.pickups.create({
    carrierAccount: "adcfdddf8ec64b84ad22772bce3ea37a",
    location: {
      address: {
        name: "Shwan Ippotle",
        company: "Shippo",
        street1: "215 Clayton St.",
        street3: "",
        streetNo: "",
        city: "San Francisco",
        state: "CA",
        zip: "94117",
        country: "US",
        phone: "+1 555 341 9393",
        email: "shippotle@shippo.com",
        isResidential: true,
        metadata: "Customer ID 123456",
        validate: true,
      },
      buildingLocationType: "Front Door",
      buildingType: "apartment",
      instructions: "Behind screen door",
    },
    requestedEndTime: new Date("2025-03-28T03:12:16.314Z"),
    requestedStartTime: new Date("2024-05-20T03:35:43.192Z"),
    transactions: [
      "adcfdddf8ec64b84ad22772bce3ea37a",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { pickupsCreate } from "shippo/funcs/pickupsCreate.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  shippoApiVersion: "2018-02-08",
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await pickupsCreate(shippo, {
    carrierAccount: "adcfdddf8ec64b84ad22772bce3ea37a",
    location: {
      address: {
        name: "Shwan Ippotle",
        company: "Shippo",
        street1: "215 Clayton St.",
        street3: "",
        streetNo: "",
        city: "San Francisco",
        state: "CA",
        zip: "94117",
        country: "US",
        phone: "+1 555 341 9393",
        email: "shippotle@shippo.com",
        isResidential: true,
        metadata: "Customer ID 123456",
        validate: true,
      },
      buildingLocationType: "Front Door",
      buildingType: "apartment",
      instructions: "Behind screen door",
    },
    requestedEndTime: new Date("2025-03-28T03:12:16.314Z"),
    requestedStartTime: new Date("2024-05-20T03:35:43.192Z"),
    transactions: [
      "adcfdddf8ec64b84ad22772bce3ea37a",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("pickupsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PickupBase](../../models/components/pickupbase.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Pickup](../../models/components/pickup.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |