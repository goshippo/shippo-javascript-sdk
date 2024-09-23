# Shipments
(*shipments*)

## Overview

A shipment is the act of transporting goods. A shipment object contains **to** and **from** addresses, and the parcel details that you are shipping. You can use the shipment object to retrieve shipping rates and purchase a shipping label.
<SchemaDefinition schemaRef="#/components/schemas/Shipment"/>
 
# Shipment Extras
The following values are supported for the `extra` field of the shipment object.
<SchemaDefinition schemaRef="#/components/schemas/ShipmentExtra"/>

### Available Operations

* [list](#list) - List all shipments
* [create](#create) - Create a new shipment
* [get](#get) - Retrieve a shipment

## list

Returns a list of all shipment objects.<br><br>
In order to filter results, you must use the below path parameters. 
A maximum date range of 90 days is permitted. 
Provided dates should be ISO 8601 UTC dates (timezone offsets are currently not supported).<br><br>

Optional path parameters:<br>
  `object_created_gt`- object(s) created greater than a provided date time<br>
  `object_created_gte` - object(s) created greater than or equal to a provided date time<br>
  `object_created_lt` - object(s) created less than a provided date time<br>
  `object_created_lte` - object(s) created less than or equal to a provided date time<br>

  Date format examples:<br>
    `2017-01-01`<br>
    `2017-01-01T03:30:30` or `2017-01-01T03:30:30.5`<br>
    `2017-01-01T03:30:30Z`<br><br>

  Example URL:<br>
    `https://api.goshippo.com/shipments/?object_created_gte=2017-01-01T00:00:30&object_created_lt=2017-04-01T00:00:30`

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.shipments.list({});
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { shipmentsList } from "shippo/funcs/shipmentsList.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await shipmentsList(shippo, {});

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
| `request`                                                                                                                                                                      | [operations.ListShipmentsRequest](../../models/operations/listshipmentsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ShipmentPaginatedList](../../models/components/shipmentpaginatedlist.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## create

Creates a new shipment object.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.shipments.create({
    extra: {
      accountsReceivableCustomerAccount: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      appropriationNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      billOfLadingNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      cod: {
        amount: "5.5",
        currency: "USD",
        paymentMethod: "CASH",
      },
      codNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      customerReference: {
        refSort: 1,
      },
      dealerOrderNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      deptNumber: {
        refSort: 3,
      },
      fdaProductCode: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      insurance: {
        amount: "5.5",
        currency: "USD",
      },
      invoiceNumber: {
        refSort: 2,
      },
      manifestNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      modelNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      partNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      poNumber: {
        refSort: 2,
      },
      productionCode: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      purchaseRequestNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      rmaNumber: {
        refSort: 1,
      },
      salespersonNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      serialNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      storeNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      transactionReferenceNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
    },
    metadata: "Customer ID 123456",
    shipmentDate: "2021-03-22T12:00:00Z",
    addressFrom: {
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
    addressReturn: "d799c2679e644279b59fe661ac8fa488",
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
    customsDeclaration: {
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
      items: [
        {
          description: "T-Shirt",
          massUnit: "lb",
          metadata: "Order ID \"123454\"",
          netWeight: "5",
          originCountry: "<value>",
          quantity: 20,
          skuCode: "HM-123",
          hsCode: "0901.21",
          valueAmount: "200",
          valueCurrency: "USD",
        },
      ],
      nonDeliveryOption: "RETURN",
      test: true,
    },
    carrierAccounts: [
      "065a4a8c10d24a34ab932163a1b87f52",
      "73f706f4bdb94b54a337563840ce52b0",
    ],
    parcels: [
      "<value>",
      {
        extra: {
          cod: {
            amount: "5.5",
            currency: "USD",
            paymentMethod: "CASH",
          },
          insurance: {
            amount: "5.5",
            content: "Laptop",
            currency: "USD",
            provider: "UPS",
          },
        },
        metadata: "Customer ID 123456",
        massUnit: "lb",
        weight: "1",
        distanceUnit: "in",
        height: "1",
        length: "1",
        width: "1",
      },
      {
        extra: {
          cod: {
            amount: "5.5",
            currency: "USD",
            paymentMethod: "CASH",
          },
          insurance: {
            amount: "5.5",
            content: "Laptop",
            currency: "USD",
            provider: "UPS",
          },
        },
        metadata: "Customer ID 123456",
        massUnit: "lb",
        weight: "1",
        distanceUnit: "in",
        height: "1",
        length: "1",
        width: "1",
      },
    ],
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
import { shipmentsCreate } from "shippo/funcs/shipmentsCreate.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await shipmentsCreate(shippo, {
    extra: {
      accountsReceivableCustomerAccount: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      appropriationNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      billOfLadingNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      cod: {
        amount: "5.5",
        currency: "USD",
        paymentMethod: "CASH",
      },
      codNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      customerReference: {
        refSort: 1,
      },
      dealerOrderNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      deptNumber: {
        refSort: 3,
      },
      fdaProductCode: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      insurance: {
        amount: "5.5",
        currency: "USD",
      },
      invoiceNumber: {
        refSort: 2,
      },
      manifestNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      modelNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      partNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      poNumber: {
        refSort: 2,
      },
      productionCode: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      purchaseRequestNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      rmaNumber: {
        refSort: 1,
      },
      salespersonNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      serialNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      storeNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
      transactionReferenceNumber: {
        prefix: "ABC",
        value: "value",
        refSort: 1,
      },
    },
    metadata: "Customer ID 123456",
    shipmentDate: "2021-03-22T12:00:00Z",
    addressFrom: {
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
    addressReturn: "d799c2679e644279b59fe661ac8fa488",
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
    customsDeclaration: {
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
      items: [
        {
          description: "T-Shirt",
          massUnit: "lb",
          metadata: "Order ID \"123454\"",
          netWeight: "5",
          originCountry: "<value>",
          quantity: 20,
          skuCode: "HM-123",
          hsCode: "0901.21",
          valueAmount: "200",
          valueCurrency: "USD",
        },
      ],
      nonDeliveryOption: "RETURN",
      test: true,
    },
    carrierAccounts: [
      "065a4a8c10d24a34ab932163a1b87f52",
      "73f706f4bdb94b54a337563840ce52b0",
    ],
    parcels: [
      "<value>",
      {
        extra: {
          cod: {
            amount: "5.5",
            currency: "USD",
            paymentMethod: "CASH",
          },
          insurance: {
            amount: "5.5",
            content: "Laptop",
            currency: "USD",
            provider: "UPS",
          },
        },
        metadata: "Customer ID 123456",
        massUnit: "lb",
        weight: "1",
        distanceUnit: "in",
        height: "1",
        length: "1",
        width: "1",
      },
      {
        extra: {
          cod: {
            amount: "5.5",
            currency: "USD",
            paymentMethod: "CASH",
          },
          insurance: {
            amount: "5.5",
            content: "Laptop",
            currency: "USD",
            provider: "UPS",
          },
        },
        metadata: "Customer ID 123456",
        massUnit: "lb",
        weight: "1",
        distanceUnit: "in",
        height: "1",
        length: "1",
        width: "1",
      },
    ],
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
| `request`                                                                                                                                                                      | [components.ShipmentCreateRequest](../../models/components/shipmentcreaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Shipment](../../models/components/shipment.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## get

Returns an existing shipment using an object ID

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.shipments.get("<value>");
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { shipmentsGet } from "shippo/funcs/shipmentsGet.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await shipmentsGet(shippo, "<value>");

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
| `shipmentId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Object ID of the shipment to update                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Shipment](../../models/components/shipment.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
