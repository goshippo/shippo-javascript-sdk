# InstantTransactionCreateRequest

## Example Usage

```typescript
import { InstantTransactionCreateRequest } from "shippo/models/components";

let value: InstantTransactionCreateRequest = {
  carrierAccount: "b741b99f95e841639b54272834bc478c",
  labelFileType: "PDF",
  metadata: "Order ID #12345",
  servicelevelToken: "usps_priority",
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
    addressTo: "d799c2679e644279b59fe661ac8fa489",
    customsDeclaration: "adcfdddf8ec64b84ad22772bce3ea37a",
    carrierAccounts: [
      "065a4a8c10d24a34ab932163a1b87f52",
      "73f706f4bdb94b54a337563840ce52b0",
    ],
    parcels: [
      "<value>",
    ],
  },
  order: "adcfdddf8ec64b84ad22772bce3ea37a",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `async`                                                                              | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  | false                                                                                |
| `carrierAccount`                                                                     | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | b741b99f95e841639b54272834bc478c                                                     |
| `labelFileType`                                                                      | [components.LabelFileType](../../models/components/labelfiletype.md)                 | :heavy_minus_sign:                                                                   | N/A                                                                                  | PDF                                                                                  |
| `metadata`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | Order ID #12345                                                                      |
| `servicelevelToken`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | usps_priority                                                                        |
| `shipment`                                                                           | [components.ShipmentCreateRequest](../../models/components/shipmentcreaterequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `order`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | adcfdddf8ec64b84ad22772bce3ea37a                                                     |