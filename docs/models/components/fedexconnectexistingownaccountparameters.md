# FedExConnectExistingOwnAccountParameters

In the case of masked fields, they should be handled carefully.

Fields also must consider: 
- Not providing a *fields* in parameters will not result in a change to any configured value 
- Providing a value in a *masked field* with ****** (exactly 6 asterisks) will not change the configured value 
- Providing *field* with null will clear the configured value 
- Providing *field* with any other value will change the configured value and may affect the behavior of the account.


## Example Usage

```typescript
import { FedExConnectExistingOwnAccountParameters } from "shippo/models/components";

let value: FedExConnectExistingOwnAccountParameters = {
  firstName: "Alexander",
  lastName: "Bosco",
  phoneNumber: "726.412.3737 x3334",
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