# RatesAtCheckout
(*ratesAtCheckout*)

## Overview

Rates at checkout is a tool for merchants to display up-to-date shipping estimates based on what's in their customers cart and where they’re shipping to.
Merchants set up curated shipping options for customers in the checkout flow based on data in the shopping cart. The request must include the **to** address and item information. Optional fields are the **from** address and package information. If the optional fields are not included, the service will use the default address and/or package configured for rates at checkout. The response is a list of shipping options based on the Service Group configuration.
(see <a href="#tag/Service-Groups">Service Group configuration</a> for details).
<SchemaDefinition schemaRef="#/components/schemas/LiveRate"/>


# Default Parcel Template
Assign one of your user parcel templates to be the default used when generating Live Rates. This template will be used by default when generating Live Rates, unless you explicitly provide a parcel in the Live Rates request.
<SchemaDefinition schemaRef="#/components/schemas/UserParcelTemplate"/>

### Available Operations

* [create](#create) - Generate a live rates request
* [getDefaultParcelTemplate](#getdefaultparceltemplate) - Show current default parcel template
* [updateDefaultParcelTemplate](#updatedefaultparceltemplate) - Update default parcel template
* [deleteDefaultParcelTemplate](#deletedefaultparceltemplate) - Clear current default parcel template

## create

Initiates a live rates request. Include either the object ID for
an existing address record or a fully formed address object when entering
an address value. You can also enter the object ID of an existing user parcel
template or a fully formed user parcel template object as the parcel value.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.ratesAtCheckout.create({
    addressFrom: "<value>",
    addressTo: {
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
    lineItems: [
      {
        currency: "USD",
        manufactureCountry: "US",
        maxDeliveryTime: new Date("2016-07-23T00:00:00Z"),
        maxShipTime: new Date("2016-07-23T00:00:00Z"),
        quantity: 20,
        sku: "HM-123",
        title: "Hippo Magazines",
        totalPrice: "12.1",
        variantTitle: "June Edition",
        weight: "0.4",
        weightUnit: "lb",
        objectId: "abf7d5675d744b6ea9fdb6f796b28f28",
      },
    ],
    parcel: "5df144dca289442cv7a06",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { ratesAtCheckoutCreate } from "shippo/funcs/ratesAtCheckoutCreate.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await ratesAtCheckoutCreate(shippo, {
    addressFrom: "<value>",
    addressTo: {
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
    lineItems: [
      {
        currency: "USD",
        manufactureCountry: "US",
        maxDeliveryTime: new Date("2016-07-23T00:00:00Z"),
        maxShipTime: new Date("2016-07-23T00:00:00Z"),
        quantity: 20,
        sku: "HM-123",
        title: "Hippo Magazines",
        totalPrice: "12.1",
        variantTitle: "June Edition",
        weight: "0.4",
        weightUnit: "lb",
        objectId: "abf7d5675d744b6ea9fdb6f796b28f28",
      },
    ],
    parcel: "5df144dca289442cv7a06",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.LiveRateCreateRequest](../../models/components/liveratecreaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.LiveRatePaginatedList](../../models/components/liveratepaginatedlist.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## getDefaultParcelTemplate

Retrieve and display the currently configured default parcel template for live rates.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.ratesAtCheckout.getDefaultParcelTemplate();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { ratesAtCheckoutGetDefaultParcelTemplate } from "shippo/funcs/ratesAtCheckoutGetDefaultParcelTemplate.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await ratesAtCheckoutGetDefaultParcelTemplate(shippo);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DefaultParcelTemplate](../../models/components/defaultparceltemplate.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## updateDefaultParcelTemplate

Update the currently configured default parcel template for live rates. The object_id in the request payload should identify the user parcel template to be the new default.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.ratesAtCheckout.updateDefaultParcelTemplate("b958d3690bb04bb8b2986724872750f5");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { ratesAtCheckoutUpdateDefaultParcelTemplate } from "shippo/funcs/ratesAtCheckoutUpdateDefaultParcelTemplate.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await ratesAtCheckoutUpdateDefaultParcelTemplate(shippo, "b958d3690bb04bb8b2986724872750f5");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `objectId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.DefaultParcelTemplate](../../models/components/defaultparceltemplate.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## deleteDefaultParcelTemplate

Clears the currently configured default parcel template for live rates.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  await shippo.ratesAtCheckout.deleteDefaultParcelTemplate();
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { ratesAtCheckoutDeleteDefaultParcelTemplate } from "shippo/funcs/ratesAtCheckoutDeleteDefaultParcelTemplate.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await ratesAtCheckoutDeleteDefaultParcelTemplate(shippo);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
