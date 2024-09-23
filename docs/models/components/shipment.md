# Shipment

Shipment represents the parcel as retrieved from the database

## Example Usage

```typescript
import { Shipment } from "shippo/models/components";

let value: Shipment = {
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
    isComplete: true,
    objectCreated: new Date("2014-07-09T02:19:13.174Z"),
    objectId: "d799c2679e644279b59fe661ac8fa488",
    objectOwner: "shippotle@shippo.com",
    objectUpdated: new Date("2014-07-09T02:19:13.174Z"),
    validationResults: {
      isValid: false,
      messages: [
        {
          code: "Unknown Street",
          source: "Shippo Address Validator",
          text:
            "City, State and ZIP Code are valid, but street address is not a match.",
          type: "address_warning",
        },
      ],
    },
    test: false,
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
    isComplete: true,
    objectCreated: new Date("2014-07-09T02:19:13.174Z"),
    objectId: "d799c2679e644279b59fe661ac8fa488",
    objectOwner: "shippotle@shippo.com",
    objectUpdated: new Date("2014-07-09T02:19:13.174Z"),
    validationResults: {
      isValid: false,
      messages: [
        {
          code: "Unknown Street",
          source: "Shippo Address Validator",
          text:
            "City, State and ZIP Code are valid, but street address is not a match.",
          type: "address_warning",
        },
      ],
    },
    test: false,
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
    isComplete: true,
    objectCreated: new Date("2014-07-09T02:19:13.174Z"),
    objectId: "d799c2679e644279b59fe661ac8fa488",
    objectOwner: "shippotle@shippo.com",
    objectUpdated: new Date("2014-07-09T02:19:13.174Z"),
    validationResults: {
      isValid: false,
      messages: [
        {
          code: "Unknown Street",
          source: "Shippo Address Validator",
          text:
            "City, State and ZIP Code are valid, but street address is not a match.",
          type: "address_warning",
        },
      ],
    },
    test: false,
  },
  carrierAccounts: [
    "<value>",
  ],
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
    addressImporter: "257ba08436604d2aaf069caafe7acb2a",
    contentsType: "MERCHANDISE",
    eelPfc: "NOEEI_30_37_a",
    incoterm: "DDP",
    items: [
      "5087f181d1dc4b14b73fdbf636498886",
    ],
    nonDeliveryOption: "RETURN",
    objectCreated: new Date("2014-07-17T01:01:08.306Z"),
    objectId: "e2197a54da9d470480f4f8796cc419cb",
    objectOwner: "shippotle@shippo.com",
    objectUpdated: new Date("2014-07-17T01:01:08.306Z"),
    test: true,
  },
  messages: [
    {
      source: "UPS",
      code: "carrier_timeout",
      text: "UPS API did not respond. Please try again in a few minutes.",
    },
  ],
  objectCreated: new Date("2024-08-09T11:11:16.127Z"),
  objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
  objectOwner: "pp@gmail.com",
  objectUpdated: new Date("2022-06-28T02:12:50.953Z"),
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
      objectCreated: new Date("2014-07-09T02:19:13.174Z"),
      objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
      objectOwner: "shippotle@shippo.com",
      objectState: "VALID",
      objectUpdated: new Date("2014-07-09T02:19:13.174Z"),
    },
  ],
  rates: [
    {
      amount: "5.5",
      amountLocal: "5.5",
      currency: "USD",
      currencyLocal: "USD",
      arrivesBy: "08:30:00",
      attributes: [
        "CHEAPEST",
      ],
      carrierAccount: "078870331023437cb917f5187429b093",
      durationTerms: "Delivery in 1 to 3 business days",
      estimatedDays: 2,
      includedInsurancePrice: "1.05",
      messages: [
        {
          source: "UPS",
          code: "carrier_timeout",
          text: "UPS API did not respond. Please try again in a few minutes.",
        },
      ],
      objectCreated: new Date("2022-05-16T16:57:38.984Z"),
      objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
      objectOwner: "pp@gmail.com",
      provider: "USPS",
      providerImage75: "https://cdn2.goshippo.com/providers/75/USPS.png",
      providerImage200: "https://cdn2.goshippo.com/providers/200/USPS.png",
      servicelevel: {
        name: "Priority Mail Express",
        token: "usps_priority_express",
        parentServicelevel: {
          name: "Priority Mail Express",
          token: "usps_priority_express",
        },
      },
      shipment: "adcfdddf8ec64b84ad22772bce3ea37a",
      zone: "1",
    },
  ],
  status: "QUEUED",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `extra`                                                                                                                                                                                                                                                                                                  | [components.ShipmentExtra](../../models/components/shipmentextra.md)                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                       | An object holding optional extra services to be requested.                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                          |
| `metadata`                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | A string of up to 100 characters that can be filled with any additional information you want to attach to the object.                                                                                                                                                                                    | Customer ID 123456                                                                                                                                                                                                                                                                                       |
| `shipmentDate`                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                       | Date the shipment will be tendered to the carrier. Must be in the format `2014-01-18T00:35:03.463Z`. <br/>Defaults to current date and time if no value is provided. Please note that some carriers require this value to<br/>be in the future, on a working day, or similar.                            | 2021-03-22T12:00:00Z                                                                                                                                                                                                                                                                                     |
| `addressFrom`                                                                                                                                                                                                                                                                                            | [components.Address](../../models/components/address.md)                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | <a href="#tag/Addresses">Address</a> object of the sender / seller. Will be returned expanded by default.                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                          |
| `addressReturn`                                                                                                                                                                                                                                                                                          | [components.Address](../../models/components/address.md)                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                       | ID of the Address object where the shipment will be sent back to if it is not delivered <br/>(Only available for UPS, USPS, and Fedex shipments). <br/> <br/>If this field is not set, your shipments will be returned to the address_from.                                                              |                                                                                                                                                                                                                                                                                                          |
| `addressTo`                                                                                                                                                                                                                                                                                              | [components.Address](../../models/components/address.md)                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | <a href="#tag/Addresses">Address</a> object of the recipient / buyer. Will be returned expanded by default.                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                          |
| `carrierAccounts`                                                                                                                                                                                                                                                                                        | *string*[]                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | An array of object_ids of the carrier account objects to be used for getting shipping rates for this shipment. <br/>If no carrier account object_ids are set in this field, Shippo will attempt to generate rates using all the <br/>carrier accounts that have the `active` field set.                  |                                                                                                                                                                                                                                                                                                          |
| `customsDeclaration`                                                                                                                                                                                                                                                                                     | [components.CustomsDeclaration](../../models/components/customsdeclaration.md)                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                          |
| `messages`                                                                                                                                                                                                                                                                                               | [components.ResponseMessage](../../models/components/responsemessage.md)[]                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                          |
| `objectCreated`                                                                                                                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | Date and time of Shipment creation.                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                          |
| `objectId`                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | Unique identifier of the given Shipment object.                                                                                                                                                                                                                                                          | adcfdddf8ec64b84ad22772bce3ea37a                                                                                                                                                                                                                                                                         |
| `objectOwner`                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | Username of the user who created the Shipment object.                                                                                                                                                                                                                                                    | pp@gmail.com                                                                                                                                                                                                                                                                                             |
| `objectUpdated`                                                                                                                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | Date and time of last Shipment update.                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                          |
| `parcels`                                                                                                                                                                                                                                                                                                | [components.Parcel](../../models/components/parcel.md)[]                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | List of Parcel objects to be shipped.                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                          |
| `rates`                                                                                                                                                                                                                                                                                                  | [components.Rate](../../models/components/rate.md)[]                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | An array with all available rates. If <code>async</code> has been set to <code>false</code> in the request,<br/>this will be populated with all available rates in the response. Otherwise rates will be created<br/>asynchronously and this array will initially be empty.                              |                                                                                                                                                                                                                                                                                                          |
| `status`                                                                                                                                                                                                                                                                                                 | [components.ShipmentStatus](../../models/components/shipmentstatus.md)                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                       | `Waiting` shipments have been successfully submitted but not yet been processed. <br/>`Queued` shipments are currently being processed. <br/>`Success` shipments have been processed successfully, meaning that rate generation has concluded. <br/>`Error` does not occur currently and is reserved for future use. | QUEUED                                                                                                                                                                                                                                                                                                   |
| `test`                                                                                                                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                       | Indicates whether the object has been created in test mode.                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                          |