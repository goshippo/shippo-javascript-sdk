# ManifestPaginatedList

## Example Usage

```typescript
import { ManifestPaginatedList } from "shippo/models/components";

let value: ManifestPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
      carrierAccount: "adcfdddf8ec64b84ad22772bce3ea37a",
      shipmentDate: "2014-05-16T23:59:59Z",
      transactions: [
        "adcfdddf8ec64b84ad22772bce3ea37a",
      ],
      addressFrom: "d799c2679e644279b59fe661ac8fa488",
      documents: [
        "https://shippo-delivery.s3.amazonaws.com/0fadebf6f60c4aca95fa01bcc59c79ae.pdf?Signature=tlQU3RECwdHUQJQadwqg5bAzGFQ%3D&Expires=1402803835&AWSAccessKeyId=AKIAJTHP3LLFMYAWALIA",
      ],
      objectCreated: new Date("2022-05-29T11:30:35.227Z"),
      objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
      objectOwner: "shippotle@shippo.com",
      objectUpdated: new Date("2022-11-23T22:01:05.887Z"),
      status: "SUCCESS",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `next`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | baseurl?page=3&results=10                                    |
| `previous`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          | baseurl?page=1&results=10                                    |
| `results`                                                    | [components.Manifest](../../models/components/manifest.md)[] | :heavy_minus_sign:                                           | N/A                                                          |                                                              |