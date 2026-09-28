# LabelFileTypeEnum

Print format of the [label](https://docs.goshippo.com/docs/shipments/shippinglabelsizes/). If empty, will use the default format set from 
[the Shippo dashboard.](https://apps.goshippo.com/settings/labels)

## Example Usage

```typescript
import { LabelFileTypeEnum } from "shippo/models/components";

let value: LabelFileTypeEnum = "PDF_4x6";
```

## Values

```typescript
"PNG" | "PNG_2.3x7.5" | "PDF" | "PDF_2.3x7.5" | "PDF_4x6" | "PDF_4x8" | "PDF_A4" | "PDF_A5" | "PDF_A6" | "ZPLII"
```