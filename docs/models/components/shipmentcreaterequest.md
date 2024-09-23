# ShipmentCreateRequest

## Example Usage

```typescript
import { ShipmentCreateRequest } from "shippo/models/components";

let value: ShipmentCreateRequest = {
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
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extra`                                                                                                                                                                                                                                                               | [components.ShipmentExtra](../../models/components/shipmentextra.md)                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                    | An object holding optional extra services to be requested.                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                       |
| `metadata`                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                    | A string of up to 100 characters that can be filled with any additional information you want to attach to the object.                                                                                                                                                 | Customer ID 123456                                                                                                                                                                                                                                                    |
| `shipmentDate`                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                    | Date the shipment will be tendered to the carrier. Must be in the format `2014-01-18T00:35:03.463Z`. <br/>Defaults to current date and time if no value is provided. Please note that some carriers require this value to<br/>be in the future, on a working day, or similar. | 2021-03-22T12:00:00Z                                                                                                                                                                                                                                                  |
| `addressFrom`                                                                                                                                                                                                                                                         | *components.AddressFrom*                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                       |
| `addressReturn`                                                                                                                                                                                                                                                       | *components.AddressReturn*                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                       |
| `addressTo`                                                                                                                                                                                                                                                           | *components.AddressTo*                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                       |
| `customsDeclaration`                                                                                                                                                                                                                                                  | *components.ShipmentCreateRequestCustomsDeclaration*                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                       |
| `async`                                                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                       |
| `carrierAccounts`                                                                                                                                                                                                                                                     | *string*[]                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                    | List of <a href="#tag/Carrier-Accounts/">Carrier Accounts</a> `object_id`s used to filter <br/>the returned rates.  If set, only rates from these carriers will be returned.                                                                                          | [<br/>"065a4a8c10d24a34ab932163a1b87f52",<br/>"73f706f4bdb94b54a337563840ce52b0"<br/>]                                                                                                                                                                                |
| `parcels`                                                                                                                                                                                                                                                             | *components.Parcels*[]                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                       |