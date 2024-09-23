# CreateTransactionRequestBody

Examples.

## Example Usage

```typescript
import { CreateTransactionRequestBody } from "shippo/models/operations";

let value: CreateTransactionRequestBody = {
  async: false,
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
    addressReturn: {
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
        template: "UPS_MI_BPM_Parcel",
      },
    ],
  },
};
```

## Supported Types

### `components.TransactionCreateRequest`

```typescript
const value: components.TransactionCreateRequest = /* values here */
```

### `components.InstantTransactionCreateRequest`

```typescript
const value: components.InstantTransactionCreateRequest = /* values here */
```

