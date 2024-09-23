# DryIce

Specify that the package contains Dry Ice (FedEx, Veho, and UPS only).

## Example Usage

```typescript
import { DryIce } from "shippo/models/components";

let value: DryIce = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `containsDryIce`                                                              | *boolean*                                                                     | :heavy_minus_sign:                                                            | Mandatory. Specifies that the package contains Dry Ice.                       |
| `weight`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | Mandatory. Units must be in Kilograms. Cannot be greater than package weight. |