# TransactionRate

ID of the Rate object for which a Label has to be obtained.  
If you purchase a label by calling the transaction endpoint without a rate (instalabel), 
this field will be a simplified Rate object in the Transaction model returned from the POST request.
</br>Note, only rates less than 7 days old can be purchased to ensure up-to-date pricing.

## Example Usage

```typescript
import { TransactionRate } from "shippo/models/components";

let value: TransactionRate = "ec9f0d3adc9441449c85d315f0997fd5";
```

## Supported Types

### `components.CoreRate`

```typescript
const value: components.CoreRate = /* values here */
```

### `string`

```typescript
const value: string = /* values here */
```

