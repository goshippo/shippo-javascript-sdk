# DangerousGoodsObject

Container for specifying the presence of dangerous materials. This is specific to USPS, and if any contents
are provided, only certain USPS service levels will be eligible. For more information, see our
<a href="https://docs.goshippo.com/docs/shipments/hazmat/">guide on hazardous or dangerous materials shipping</a>.

## Example Usage

```typescript
import { DangerousGoodsObject } from "shippo/models/components";

let value: DangerousGoodsObject = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `contains`                                                                                                 | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Indicates if the shipment contains dangerous goods.                                                        |
| `biologicalMaterial`                                                                                       | [components.DangerousGoodsBiologicalMaterial](../../models/components/dangerousgoodsbiologicalmaterial.md) | :heavy_minus_sign:                                                                                         | Container for specifying the presence of biological material.                                              |
| `lithiumBatteries`                                                                                         | [components.DangerousGoodsLithiumBatteries](../../models/components/dangerousgoodslithiumbatteries.md)     | :heavy_minus_sign:                                                                                         | Container for specifying the presence of lithium batteries.                                                |