# BatchCreateRequest

## Example Usage

```typescript
import { BatchCreateRequest } from "shippo/models/components";

let value: BatchCreateRequest = {
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
        addressFrom: "d799c2679e644279b59fe661ac8fa488",
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
            template: "Fastway_Australia_Satchel_A5",
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultCarrierAccount`                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | ID of the Carrier Account object to use as the default for all shipments in this Batch. <br/>The carrier account can be changed on a per-shipment basis by changing the carrier_account in the <br/>corresponding BatchShipment object.                                                            | 078870331023437cb917f5187429b093                                                                                                                                                                                                                                                                   |
| `defaultServicelevelToken`                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | Token of the service level to use as the default for all shipments in this Batch. <br/>The servicelevel can be changed on a per-shipment basis by changing the servicelevel_token in the <br/>corresponding BatchShipment object. <a href="#tag/Service-Levels">Servicelevel tokens can be found here.</a> | usps_priority                                                                                                                                                                                                                                                                                      |
| `labelFiletype`                                                                                                                                                                                                                                                                                    | [components.LabelFileTypeEnum](../../models/components/labelfiletypeenum.md)                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                 | Print format of the <a href="https://docs.goshippo.com/docs/shipments/shippinglabelsizes/">label</a>. If empty, will use the default format set from <br/><a href="https://apps.goshippo.com/settings/labels">the Shippo dashboard.</a>                                                            | PDF_4x6                                                                                                                                                                                                                                                                                            |
| `metadata`                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                 | A string of up to 100 characters that can be filled with any additional information you want to attach to the object.                                                                                                                                                                              | BATCH #1                                                                                                                                                                                                                                                                                           |
| `batchShipments`                                                                                                                                                                                                                                                                                   | [components.BatchShipmentCreateRequest](../../models/components/batchshipmentcreaterequest.md)[]                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                 | Array of BatchShipment objects. The response keeps the same order as in the request array.                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                    |