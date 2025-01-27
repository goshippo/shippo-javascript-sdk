# FedExConnectExistingOwnAccountParameters

## Example Usage

```typescript
import { FedExConnectExistingOwnAccountParameters } from "shippo/models/components";

let value: FedExConnectExistingOwnAccountParameters = {
  firstName: "Elena",
  lastName: "Hamill",
  phoneNumber: "1-265-450-5936 x172",
  fromAddressSt: "<value>",
  fromAddressCity: "<value>",
  fromAddressState: "<value>",
  fromAddressZip: "<value>",
  fromAddressCountryIso2: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `firstName`                          | *string*                             | :heavy_check_mark:                   | First name of the account holder     |
| `lastName`                           | *string*                             | :heavy_check_mark:                   | Last name of the account holder      |
| `phoneNumber`                        | *string*                             | :heavy_check_mark:                   | Phone number of the account holder   |
| `fromAddressSt`                      | *string*                             | :heavy_check_mark:                   | Street address of the account holder |
| `fromAddressCity`                    | *string*                             | :heavy_check_mark:                   | City of the account holder           |
| `fromAddressState`                   | *string*                             | :heavy_check_mark:                   | State of the account holder          |
| `fromAddressZip`                     | *string*                             | :heavy_check_mark:                   | Zip code of the account holder       |
| `fromAddressCountryIso2`             | *string*                             | :heavy_check_mark:                   | Country of the account holder        |