# Batches
(*batches*)

## Overview

A batch is a technique for creating multiple labels at once. Use the  batch object to create and purchase many shipments in two API calls. After creating the batch, retrieve the batch to verify that all shipments are valid. You can add and remove shipments after you have created the batch. When all shipments are valid you can purchase the batch and retrieve all the shipping labels.
<SchemaDefinition schemaRef="#/components/schemas/Batch"/>

# Batch Shipment
The batch shipment object is a wrapper around a shipment object, which include shipment-specific information 
for batch processing.

Note: batch shipments can only be created on the batch endpoint, either when creating a batch object or by through 
the `/batches/{BATCH_OBJECT_ID}/add_shipments` endpoint
<SchemaDefinition schemaRef="#/components/schemas/BatchShipment"/>

### Available Operations

* [create](#create) - Create a batch
* [get](#get) - Retrieve a batch
* [addShipments](#addshipments) - Add shipments to a batch
* [purchase](#purchase) - Purchase a batch
* [removeShipments](#removeshipments) - Remove shipments from a batch

## create

Creates a new batch object for purchasing shipping labels for many shipments at once. Batches are created asynchronously. This means that the API response won't include your batch shipments yet. You need to retrieve the batch later to verify that all batch shipments are valid.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.batches.create({
    defaultCarrierAccount: "078870331023437cb917f5187429b093",
    defaultServicelevelToken: "usps_priority",
    labelFiletype: "PDF_4x6",
    metadata: "BATCH #1",
    batchShipments: [
      {
        carrierAccount: "a4391cd4ab974f478f55dc08b5c8e3b3",
        metadata: "SHIPMENT #1",
        servicelevelToken: "fedex_ground",
        shipment: {
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
        addressFrom:     {
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
        addressReturn:     {
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
        addressTo: "d799c2679e644279b59fe661ac8fa489",
        customsDeclaration: "adcfdddf8ec64b84ad22772bce3ea37a",
          carrierAccounts: [
            "065a4a8c10d24a34ab932163a1b87f52",
            "73f706f4bdb94b54a337563840ce52b0",
          ],
          parcels: [
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
              template: "USPS_FlatRateGiftCardEnvelope",
              },
          ],
        },
      },
    ],
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BatchCreateRequest](../../models/components/batchcreaterequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[components.Batch](../../models/components/batch.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Returns a batch using an object ID. <br> Batch shipments are displayed 100 at a time.  You can iterate 
through each `page` using the `?page= query` parameter.  You can also filter based on batch shipment 
status, for example, by passing a query param like `?object_results=creation_failed`. <br> 
For more details on filtering results, see our guide on <a href="https://docs.goshippo.com/docs/api_concepts/filtering/" target="blank"> filtering</a>.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.batches.get("<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `batchId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Object ID of the batch                                                                                                                                                         |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[components.Batch](../../models/components/batch.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## addShipments

Adds batch shipments to an existing batch.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.batches.addShipments("<value>", [
    {
      carrierAccount: "a4391cd4ab974f478f55dc08b5c8e3b3",
      metadata: "SHIPMENT #1",
      servicelevelToken: "fedex_ground",
      shipment: {
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
      addressFrom: "d799c2679e644279b59fe661ac8fa488",
      addressReturn: "d799c2679e644279b59fe661ac8fa488",
      addressTo:     {
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
      customsDeclaration: "adcfdddf8ec64b84ad22772bce3ea37a",
        carrierAccounts: [
          "065a4a8c10d24a34ab932163a1b87f52",
          "73f706f4bdb94b54a337563840ce52b0",
        ],
        parcels: [
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
      },
    },
  ]);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `batchId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Object ID of the batch                                                                                                                                                         |
| `requestBody`                                                                                                                                                                  | [components.BatchShipmentCreateRequest](../../models/components/batchshipmentcreaterequest.md)[]                                                                               | :heavy_check_mark:                                                                                                                                                             | Array of shipments to add to the batch                                                                                                                                         |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[components.Batch](../../models/components/batch.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## purchase

Purchases an existing batch with a status of `VALID`. 
Once you send a POST request to the purchase endpoint the batch status will change to `PURCHASING`. 
When all the shipments are purchased, the status will change to `PURCHASED` and you will receive a 
`batch_purchased` webhook indicating that the batch has been purchased

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.batches.purchase("<value>");

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `batchId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Object ID of the batch                                                                                                                                                         |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[components.Batch](../../models/components/batch.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeShipments

Removes shipments from an existing batch shipment.

### Example Usage

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.batches.removeShipments("<value>", [
    "<value>",
  ]);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `batchId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Object ID of the batch                                                                                                                                                         |
| `requestBody`                                                                                                                                                                  | *string*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | Array of shipments object ids to remove from the batch                                                                                                                         |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[components.Batch](../../models/components/batch.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
