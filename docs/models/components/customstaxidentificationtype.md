# CustomsTaxIdentificationType

Type of tax identification.
* `EIN` - Employer Identification Number, also known as a Federal Tax Identification Number.
* `VAT` - Value Added Tax identification number.
* `IOSS` - Import One-Stop Shop
* `ARN` - Australian Taxation Office Reference Number

## Example Usage

```typescript
import { CustomsTaxIdentificationType } from "shippo/models/components";

let value: CustomsTaxIdentificationType = "EIN";
```

## Values

```typescript
"EIN" | "VAT" | "IOSS" | "ARN"
```