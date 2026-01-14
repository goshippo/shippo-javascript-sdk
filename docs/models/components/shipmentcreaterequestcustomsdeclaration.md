# ShipmentCreateRequestCustomsDeclaration


## Supported Types

### `components.CustomsDeclarationCreateRequest`

```typescript
const value: components.CustomsDeclarationCreateRequest = {
  b13aFilingOption: "FILED_ELECTRONICALLY",
  certify: true,
  certifySigner: "Shawn Ippotle",
  contentsExplanation: "T-Shirt purchase",
  dutiesPayor: {
    account: "2323434543",
    type: "THIRD_PARTY",
    address: {
      name: "Patrick Kavanagh",
      zip: "80331",
      country: "DE",
    },
  },
  exporterIdentification: {
    eoriNumber: "PL123456790ABCDE",
    taxId: {
      number: "123456789",
      type: "EIN",
    },
  },
  invoice: "#123123",
  metadata: "Order ID #123123",
  addressImporter: {
    name: "Shwan Ippotle",
    company: "Shippo",
    street1: "Blumenstraße",
    street3: "",
    streetNo: "22",
    city: "München",
    state: "CA",
    zip: "80331",
    country: "DE",
    phone: "80331",
    email: "shippotle@shippo.com",
    isResidential: true,
  },
  contentsType: "MERCHANDISE",
  eelPfc: "NOEEI_30_37_a",
  incoterm: "DDP",
  items: [
    {
      description: "T-Shirt",
      massUnit: "lb",
      metadata: "Order ID \"123454\"",
      netWeight: "5",
      originCountry: "<value>",
      quantity: 20,
      skuCode: "HM-123",
      hsCode: "0901.21",
      valueAmount: "200",
      valueCurrency: "USD",
    },
  ],
  nonDeliveryOption: "RETURN",
  test: true,
};
```

### `string`

```typescript
const value: string = "adcfdddf8ec64b84ad22772bce3ea37a";
```

