# CustomsDeclarations

## Overview

Customs declarations are relevant information, including one or multiple customs items, you need to provide for 
customs clearance for your international shipments.
<SchemaDefinition schemaRef="#/components/schemas/CustomsDeclaration"/>

### Available Operations

* [list](#list) - List all customs declarations
* [create](#create) - Create a new customs declaration
* [get](#get) - Retrieve a customs declaration

## list

Returns a list of all customs declaration objects

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListCustomsDeclarations" method="get" path="/customs/declarations" -->
```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  shippoApiVersion: "2018-02-08",
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await shippo.customsDeclarations.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { customsDeclarationsList } from "shippo/funcs/customsDeclarationsList.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  shippoApiVersion: "2018-02-08",
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await customsDeclarationsList(shippo);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customsDeclarationsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `page`                                                                                                                                                                         | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The page number you want to select                                                                                                                                             |
| `results`                                                                                                                                                                      | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The number of results to return per page (max 100, default 5)                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomsDeclarationPaginatedList](../../models/components/customsdeclarationpaginatedlist.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## create

Creates a new customs declaration object

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateCustomsDeclaration" method="post" path="/customs/declarations" -->
```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  shippoApiVersion: "2018-02-08",
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await shippo.customsDeclarations.create({
    b13aFilingOption: "FILED_ELECTRONICALLY",
    certify: true,
    certifySigner: "Shawn Ippotle",
    contentsExplanation: "T-Shirt purchase",
    dutiesPayor: {
      account: "2323434543",
      type: "THIRD_PARTY",
      address: {
        name: "Patrick Kavanagh",
        zip: "80331",
        country: "DE",
      },
    },
    exporterIdentification: {
      eoriNumber: "PL123456790ABCDE",
      taxId: {
        number: "123456789",
        type: "EIN",
      },
    },
    invoice: "#123123",
    metadata: "Order ID #123123",
    addressImporter: {
      name: "Shwan Ippotle",
      company: "Shippo",
      street1: "Blumenstraße",
      street3: "",
      streetNo: "22",
      city: "München",
      state: "CA",
      zip: "80331",
      country: "DE",
      phone: "80331",
      email: "shippotle@shippo.com",
      isResidential: true,
    },
    contentsType: "MERCHANDISE",
    eelPfc: "NOEEI_30_37_a",
    incoterm: "DDP",
    items: [],
    nonDeliveryOption: "RETURN",
    test: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { customsDeclarationsCreate } from "shippo/funcs/customsDeclarationsCreate.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  shippoApiVersion: "2018-02-08",
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await customsDeclarationsCreate(shippo, {
    b13aFilingOption: "FILED_ELECTRONICALLY",
    certify: true,
    certifySigner: "Shawn Ippotle",
    contentsExplanation: "T-Shirt purchase",
    dutiesPayor: {
      account: "2323434543",
      type: "THIRD_PARTY",
      address: {
        name: "Patrick Kavanagh",
        zip: "80331",
        country: "DE",
      },
    },
    exporterIdentification: {
      eoriNumber: "PL123456790ABCDE",
      taxId: {
        number: "123456789",
        type: "EIN",
      },
    },
    invoice: "#123123",
    metadata: "Order ID #123123",
    addressImporter: {
      name: "Shwan Ippotle",
      company: "Shippo",
      street1: "Blumenstraße",
      street3: "",
      streetNo: "22",
      city: "München",
      state: "CA",
      zip: "80331",
      country: "DE",
      phone: "80331",
      email: "shippotle@shippo.com",
      isResidential: true,
    },
    contentsType: "MERCHANDISE",
    eelPfc: "NOEEI_30_37_a",
    incoterm: "DDP",
    items: [],
    nonDeliveryOption: "RETURN",
    test: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customsDeclarationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CustomsDeclarationCreateRequest](../../models/components/customsdeclarationcreaterequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomsDeclaration](../../models/components/customsdeclaration.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## get

Returns an existing customs declaration using an object ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetCustomsDeclaration" method="get" path="/customs/declarations/{CustomsDeclarationId}" -->
```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  shippoApiVersion: "2018-02-08",
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await shippo.customsDeclarations.get("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { customsDeclarationsGet } from "shippo/funcs/customsDeclarationsGet.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  shippoApiVersion: "2018-02-08",
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await customsDeclarationsGet(shippo, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customsDeclarationsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `customsDeclarationId`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Object ID of the customs declaration                                                                                                                                           |
| `page`                                                                                                                                                                         | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The page number you want to select                                                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomsDeclaration](../../models/components/customsdeclaration.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |