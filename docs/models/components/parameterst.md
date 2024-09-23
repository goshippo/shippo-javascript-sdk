# ParametersT

## Example Usage

```typescript
import { ParametersT } from "shippo/models/components";

let value: ParametersT = {
  accountNumber: "94567e",
  aiaCountryIso2: "US",
  billingAddressCity: "San Francisco",
  billingAddressCountryIso2: "US",
  billingAddressState: "CA",
  billingAddressStreet1: "731 Market St",
  billingAddressStreet2: "STE 200",
  billingAddressZip: "94103",
  collecCountryIso2: "US",
  collecZip: "94103",
  company: "Shippo",
  currencyCode: "USD",
  email: "hippo@shippo.com",
  fullName: "Shippo Meister",
  hasInvoice: false,
  invoiceControlid: "1234",
  invoiceDate: "20210529",
  invoiceNumber: "1112234",
  invoiceValue: "11.23",
  phone: "1112223333",
  title: "Manager",
  upsAgreements: false,
};
```

## Supported Types

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = /* values here */
```

### `components.FedExConnectExistingOwnAccountParameters`

```typescript
const value: components.FedExConnectExistingOwnAccountParameters = /* values here */
```

### `components.UPSConnectExistingOwnAccountParameters`

```typescript
const value: components.UPSConnectExistingOwnAccountParameters = /* values here */
```

