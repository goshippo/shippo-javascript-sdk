# ShipmentPaginatedList

## Example Usage

```typescript
import { ShipmentPaginatedList } from "shippo/models/components";

let value: ShipmentPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
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
        "<value 1>",
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
      messages: [],
      objectCreated: new Date("2024-11-01T10:58:26.902Z"),
      objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
      objectOwner: "pp@gmail.com",
      objectUpdated: new Date("2026-06-07T20:29:21.546Z"),
      parcels: [],
      rates: [
        {
          amount: "5.5",
          amountLocal: "5.5",
          currency: "USD",
          currencyLocal: "USD",
          arrivesBy: "08:30:00",
          attributes: [
            "BESTVALUE",
          ],
          carrierAccount: "078870331023437cb917f5187429b093",
          durationTerms: "Delivery in 1 to 3 business days",
          estimatedDays: 2,
          includedInsurancePrice: "1.05",
          messages: [
            {
              source: "UPS",
              code: "carrier_timeout",
              text:
                "UPS API did not respond. Please try again in a few minutes.",
            },
          ],
          objectCreated: new Date("2024-11-16T13:07:29.700Z"),
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
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `next`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | baseurl?page=3&results=10                                    |
| `previous`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | baseurl?page=1&results=10                                    |
| `results`                                                    | [components.Shipment](../../models/components/shipment.md)[] | :heavy_minus_sign:                                           | N/A                                                          |                                                              |