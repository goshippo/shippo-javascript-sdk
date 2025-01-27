# TransactionRate

ID of the Rate object for which a Label has to be obtained.  
If you purchase a label by calling the transaction endpoint without a rate (instalabel), 
this field will be a simplified Rate object in the Transaction model returned from the POST request.
</br>Note, only rates less than 7 days old can be purchased to ensure up-to-date pricing.


## Supported Types

### `components.CoreRate`

```typescript
const value: components.CoreRate = {
  amount: "5.5",
  amountLocal: "5.5",
  currency: "USD",
  currencyLocal: "USD",
  objectId: "adcfdddf8ec64b84ad22772bce3ea37a",
  provider: "USPS",
  carrierAccount: "078870331023437cb917f5187429b093",
  servicelevelName: "Priority Mail",
  servicelevelToken: "fedex_ground",
};
```

### `string`

```typescript
const value: string = "ec9f0d3adc9441449c85d315f0997fd5";
```

