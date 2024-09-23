# AddressPaginatedList

## Example Usage

```typescript
import { AddressPaginatedList } from "shippo/models/components";

let value: AddressPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
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
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `next`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | baseurl?page=3&results=10                                  |
| `previous`                                                 | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | baseurl?page=1&results=10                                  |
| `results`                                                  | [components.Address](../../models/components/address.md)[] | :heavy_minus_sign:                                         | N/A                                                        |                                                            |