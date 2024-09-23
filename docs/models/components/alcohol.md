# Alcohol

Indicates that a shipment contains Alcohol (Fedex and UPS only).

## Example Usage

```typescript
import { Alcohol } from "shippo/models/components";

let value: Alcohol = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `containsAlcohol`                                                               | *boolean*                                                                       | :heavy_minus_sign:                                                              | Mandatory for Fedex and UPS. Specifies that the package contains Alcohol.       |
| `recipientType`                                                                 | [components.RecipientType](../../models/components/recipienttype.md)            | :heavy_minus_sign:                                                              | Mandatory for Fedex only. License type of the recipient of the Alcohol Package. |