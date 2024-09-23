# DutiesPayor

Specifies who will pay the duties for the shipment. Only accepted for FedEx shipments.

## Example Usage

```typescript
import { DutiesPayor } from "shippo/models/components";

let value: DutiesPayor = {
  account: "2323434543",
  type: "THIRD_PARTY",
  address: {
    name: "Patrick Kavanagh",
    zip: "80331",
    country: "DE",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `account`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Account number to be billed for duties.                                                                                | 2323434543                                                                                                             |
| `type`                                                                                                                 | [components.CustomsDeclarationCreateRequestType](../../models/components/customsdeclarationcreaterequesttype.md)       | :heavy_minus_sign:                                                                                                     | Party to be billed for duties.                                                                                         | THIRD_PARTY                                                                                                            |
| `address`                                                                                                              | [components.CustomsDeclarationCreateRequestAddress](../../models/components/customsdeclarationcreaterequestaddress.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |