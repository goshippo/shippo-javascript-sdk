# CustomsInvoicedCharges

Additional invoiced charges to be shown on the Customs Declaration Commercial Invoice.

## Example Usage

```typescript
import { CustomsInvoicedCharges } from "shippo/models/components";

let value: CustomsInvoicedCharges = {
  currency: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `currency`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Currency for the invoiced charges amounts incurred on the end consumer. |
| `totalShipping`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | Total shipping paid by the buyer.                                       |
| `totalTaxes`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | Total taxes paid by the buyer.                                          |
| `totalDuties`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Total duties paid by the buyer.                                         |
| `otherFees`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | Other fees paid by the buyer.                                           |