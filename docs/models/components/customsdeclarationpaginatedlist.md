# CustomsDeclarationPaginatedList

## Example Usage

```typescript
import { CustomsDeclarationPaginatedList } from "shippo/models/components";

let value: CustomsDeclarationPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
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
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `next`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | baseurl?page=3&results=10                                                        |
| `previous`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | baseurl?page=1&results=10                                                        |
| `results`                                                                        | [components.CustomsDeclaration](../../models/components/customsdeclaration.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |