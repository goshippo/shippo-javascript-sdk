# RegisterCarrierAccountRequestBody

Examples.


## Supported Types

### `components.CarrierAccountCanadaPostCreateRequest`

```typescript
const value: components.CarrierAccountCanadaPostCreateRequest = {
  carrier: "canada_post",
  parameters: {
    canadaPostTerms: false,
    company: "Shippo",
    email: "hippo@shippo.com",
    fullName: "Shippo Meister",
    phone: "1112223333",
  },
};
```

### `components.CarrierAccountChronopostCreateRequest`

```typescript
const value: components.CarrierAccountChronopostCreateRequest = {
  carrier: "chronopost",
  parameters: {},
};
```

### `components.CarrierAccountColissimoCreateRequest`

```typescript
const value: components.CarrierAccountColissimoCreateRequest = {
  carrier: "colissimo",
  parameters: {},
};
```

### `components.CarrierAccountCorreosCreateRequest`

```typescript
const value: components.CarrierAccountCorreosCreateRequest = {
  carrier: "correos",
  parameters: {},
};
```

### `components.CarrierAccountDeutschePostCreateRequest`

```typescript
const value: components.CarrierAccountDeutschePostCreateRequest = {
  carrier: "deutsche_post",
  parameters: {},
};
```

### `components.CarrierAccountDHLExpressCreateRequest`

```typescript
const value: components.CarrierAccountDHLExpressCreateRequest = {
  carrier: "dhl_express",
  parameters: {
    userAcceptedTermsAndConditions: false,
  },
};
```

### `components.CarrierAccountDpdDeCreateRequest`

```typescript
const value: components.CarrierAccountDpdDeCreateRequest = {
  carrier: "dpd_de",
  parameters: {},
};
```

### `components.CarrierAccountDPDUKCreateRequest`

```typescript
const value: components.CarrierAccountDPDUKCreateRequest = {
  carrier: "dpd_uk",
  parameters: {},
};
```

### `components.CarrierAccountFedExCreateRequest`

```typescript
const value: components.CarrierAccountFedExCreateRequest = {
  carrier: "fedex",
  parameters: {},
};
```

### `components.CarrierAccountHermesUKCreateRequest`

```typescript
const value: components.CarrierAccountHermesUKCreateRequest = {
  carrier: "hermes_uk",
  parameters: {},
};
```

### `components.CarrierAccountMondialRelayCreateRequest`

```typescript
const value: components.CarrierAccountMondialRelayCreateRequest = {
  carrier: "mondialrelay",
  parameters: {},
};
```

### `components.CarrierAccountPosteItalianeCreateRequest`

```typescript
const value: components.CarrierAccountPosteItalianeCreateRequest = {
  carrier: "poste_italiane",
  parameters: {},
};
```

### `components.CarrierAccountUPSCreateRequest`

```typescript
const value: components.CarrierAccountUPSCreateRequest = {
  carrier: "ups",
  parameters: {
    billingAddressCity: "San Francisco",
    billingAddressCountryIso2: "US",
    billingAddressState: "CA",
    billingAddressStreet1: "731 Market St",
    billingAddressStreet2: "STE 200",
    billingAddressZip: "94103",
    company: "Shippo",
    email: "hippo@shippo.com",
    fullName: "Shippo Meister",
    phone: "1112223333",
    pickupAddressCity: "San Francisco",
    pickupAddressCountryIso2: "US",
    pickupAddressSameAsBillingAddress: false,
    pickupAddressState: "CA",
    pickupAddressStreet1: "731 Market St",
    pickupAddressStreet2: "STE 200",
    pickupAddressZip: "94103",
    upsAgreements: false,
  },
};
```

### `components.CarrierAccountUSPSCreateRequest`

```typescript
const value: components.CarrierAccountUSPSCreateRequest = {
  carrier: "usps",
  parameters: {},
};
```

### `components.CarrierAccountSendleCreateRequest`

```typescript
const value: components.CarrierAccountSendleCreateRequest = {
  carrier: "sendle",
  parameters: {},
};
```

