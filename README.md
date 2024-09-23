# <img src="https://docs.goshippo.com/images/Logo.png" width="30" alt="Shippo logo"> Shippo JavaScript SDK

Shippo is a shipping API that connects you with [multiple shipping carriers](https://goshippo.com/carriers) (such as USPS, UPS, DHL, Canada Post, Australia Post, and many others) through one interface.

You must register for a [Shippo account](https://apps.goshippo.com/join) to use our API. It's free to sign up. Only pay to print a live label, test labels are free.

To use the API, you must generate an [API Token](https://docs.goshippo.com/docs/guides_general/authentication/). In the following examples, replace `<YOUR_API_KEY_HERE>` with your own token.

For example.
```
api_key_header="shippo_test_595d9cb0c0e14497bf07e75ecfec6c6d"
```


<!-- Start Summary [summary] -->
## Summary

Shippo external API.: Use this API to integrate with the Shippo service
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add shippo
```

### PNPM

```bash
pnpm add shippo
```

### Bun

```bash
bun add shippo
```

### Yarn

```bash
yarn add shippo zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

## SDK Example Usage

### Example

```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    // the API version can be globally set, though this is normally not required
    // shippoApiVersion: "<YYYY-MM-DD>",
});

async function run() {
    const result = await shippo.addresses.list();

    // Handle the result
    console.log(result);
}

run();

```
<!-- No SDK Example Usage [usage] -->
<!-- No Error Handling [errors] -->
<!-- No Server Selection [server] -->
<!-- No Authentication [security] -->
<!-- No Global Parameters [global-parameters] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [addressesCreate](docs/sdks/addresses/README.md#create)
- [addressesGet](docs/sdks/addresses/README.md#get)
- [addressesList](docs/sdks/addresses/README.md#list)
- [addressesValidate](docs/sdks/addresses/README.md#validate)
- [batchesAddShipments](docs/sdks/batches/README.md#addshipments)
- [batchesCreate](docs/sdks/batches/README.md#create)
- [batchesGet](docs/sdks/batches/README.md#get)
- [batchesPurchase](docs/sdks/batches/README.md#purchase)
- [batchesRemoveShipments](docs/sdks/batches/README.md#removeshipments)
- [carrierAccountsCreate](docs/sdks/carrieraccounts/README.md#create)
- [carrierAccountsGetRegistrationStatus](docs/sdks/carrieraccounts/README.md#getregistrationstatus)
- [carrierAccountsGet](docs/sdks/carrieraccounts/README.md#get)
- [carrierAccountsInitiateOauth2Signin](docs/sdks/carrieraccounts/README.md#initiateoauth2signin)
- [carrierAccountsList](docs/sdks/carrieraccounts/README.md#list)
- [carrierAccountsRegister](docs/sdks/carrieraccounts/README.md#register)
- [carrierAccountsUpdate](docs/sdks/carrieraccounts/README.md#update)
- [carrierParcelTemplatesGet](docs/sdks/carrierparceltemplates/README.md#get)
- [carrierParcelTemplatesList](docs/sdks/carrierparceltemplates/README.md#list)
- [customsDeclarationsCreate](docs/sdks/customsdeclarations/README.md#create)
- [customsDeclarationsGet](docs/sdks/customsdeclarations/README.md#get)
- [customsDeclarationsList](docs/sdks/customsdeclarations/README.md#list)
- [customsItemsCreate](docs/sdks/customsitems/README.md#create)
- [customsItemsGet](docs/sdks/customsitems/README.md#get)
- [customsItemsList](docs/sdks/customsitems/README.md#list)
- [manifestsCreate](docs/sdks/manifests/README.md#create)
- [manifestsGet](docs/sdks/manifests/README.md#get)
- [manifestsList](docs/sdks/manifests/README.md#list)
- [ordersCreate](docs/sdks/orders/README.md#create)
- [ordersGet](docs/sdks/orders/README.md#get)
- [ordersList](docs/sdks/orders/README.md#list)
- [parcelsCreate](docs/sdks/parcels/README.md#create)
- [parcelsGet](docs/sdks/parcels/README.md#get)
- [parcelsList](docs/sdks/parcels/README.md#list)
- [pickupsCreate](docs/sdks/pickups/README.md#create)
- [ratesAtCheckoutCreate](docs/sdks/ratesatcheckout/README.md#create)
- [ratesAtCheckoutDeleteDefaultParcelTemplate](docs/sdks/ratesatcheckout/README.md#deletedefaultparceltemplate)
- [ratesAtCheckoutGetDefaultParcelTemplate](docs/sdks/ratesatcheckout/README.md#getdefaultparceltemplate)
- [ratesAtCheckoutUpdateDefaultParcelTemplate](docs/sdks/ratesatcheckout/README.md#updatedefaultparceltemplate)
- [ratesGet](docs/sdks/rates/README.md#get)
- [ratesListShipmentRatesByCurrencyCode](docs/sdks/rates/README.md#listshipmentratesbycurrencycode)
- [ratesListShipmentRates](docs/sdks/rates/README.md#listshipmentrates)
- [refundsCreate](docs/sdks/refunds/README.md#create)
- [refundsGet](docs/sdks/refunds/README.md#get)
- [refundsList](docs/sdks/refunds/README.md#list)
- [serviceGroupsCreate](docs/sdks/servicegroups/README.md#create)
- [serviceGroupsDelete](docs/sdks/servicegroups/README.md#delete)
- [serviceGroupsList](docs/sdks/servicegroups/README.md#list)
- [serviceGroupsUpdate](docs/sdks/servicegroups/README.md#update)
- [shipmentsCreate](docs/sdks/shipments/README.md#create)
- [shipmentsGet](docs/sdks/shipments/README.md#get)
- [shipmentsList](docs/sdks/shipments/README.md#list)
- [shippoAccountsCreate](docs/sdks/shippoaccounts/README.md#create)
- [shippoAccountsGet](docs/sdks/shippoaccounts/README.md#get)
- [shippoAccountsList](docs/sdks/shippoaccounts/README.md#list)
- [shippoAccountsUpdate](docs/sdks/shippoaccounts/README.md#update)
- [trackingStatusCreate](docs/sdks/trackingstatus/README.md#create)
- [trackingStatusGet](docs/sdks/trackingstatus/README.md#get)
- [transactionsCreate](docs/sdks/transactions/README.md#create)
- [transactionsGet](docs/sdks/transactions/README.md#get)
- [transactionsList](docs/sdks/transactions/README.md#list)
- [userParcelTemplatesCreate](docs/sdks/userparceltemplates/README.md#create)
- [userParcelTemplatesDelete](docs/sdks/userparceltemplates/README.md#delete)
- [userParcelTemplatesGet](docs/sdks/userparceltemplates/README.md#get)
- [userParcelTemplatesList](docs/sdks/userparceltemplates/README.md#list)
- [userParcelTemplatesUpdate](docs/sdks/userparceltemplates/README.md#update)
- [webhooksCreateWebhook](docs/sdks/webhooks/README.md#createwebhook)
- [webhooksDeleteWebhook](docs/sdks/webhooks/README.md#deletewebhook)
- [webhooksGetWebhook](docs/sdks/webhooks/README.md#getwebhook)
- [webhooksListWebhooks](docs/sdks/webhooks/README.md#listwebhooks)
- [webhooksUpdateWebhook](docs/sdks/webhooks/README.md#updatewebhook)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.addresses.list({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.addresses.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Shippo } from "shippo";
import { HTTPClient } from "shippo/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Shippo({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Shippo } from "shippo";

const sdk = new Shippo({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

## Documentation
Review our full guides and references at [https://docs.goshippo.com/](https://docs.goshippo.com/).

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [addresses](docs/sdks/addresses/README.md)

* [list](docs/sdks/addresses/README.md#list) - List all addresses
* [create](docs/sdks/addresses/README.md#create) - Create a new address
* [get](docs/sdks/addresses/README.md#get) - Retrieve an address
* [validate](docs/sdks/addresses/README.md#validate) - Validate an address

### [batches](docs/sdks/batches/README.md)

* [create](docs/sdks/batches/README.md#create) - Create a batch
* [get](docs/sdks/batches/README.md#get) - Retrieve a batch
* [addShipments](docs/sdks/batches/README.md#addshipments) - Add shipments to a batch
* [purchase](docs/sdks/batches/README.md#purchase) - Purchase a batch
* [removeShipments](docs/sdks/batches/README.md#removeshipments) - Remove shipments from a batch

### [carrierAccounts](docs/sdks/carrieraccounts/README.md)

* [list](docs/sdks/carrieraccounts/README.md#list) - List all carrier accounts
* [create](docs/sdks/carrieraccounts/README.md#create) - Create a new carrier account
* [get](docs/sdks/carrieraccounts/README.md#get) - Retrieve a carrier account
* [update](docs/sdks/carrieraccounts/README.md#update) - Update a carrier account
* [initiateOauth2Signin](docs/sdks/carrieraccounts/README.md#initiateoauth2signin) - Connect an existing carrier account using OAuth 2.0
* [register](docs/sdks/carrieraccounts/README.md#register) - Add a Shippo carrier account
* [getRegistrationStatus](docs/sdks/carrieraccounts/README.md#getregistrationstatus) - Get Carrier Registration status

### [carrierParcelTemplates](docs/sdks/carrierparceltemplates/README.md)

* [list](docs/sdks/carrierparceltemplates/README.md#list) - List all carrier parcel templates
* [get](docs/sdks/carrierparceltemplates/README.md#get) - Retrieve a carrier parcel templates

### [customsDeclarations](docs/sdks/customsdeclarations/README.md)

* [list](docs/sdks/customsdeclarations/README.md#list) - List all customs declarations
* [create](docs/sdks/customsdeclarations/README.md#create) - Create a new customs declaration
* [get](docs/sdks/customsdeclarations/README.md#get) - Retrieve a customs declaration

### [customsItems](docs/sdks/customsitems/README.md)

* [list](docs/sdks/customsitems/README.md#list) - List all customs items
* [create](docs/sdks/customsitems/README.md#create) - Create a new customs item
* [get](docs/sdks/customsitems/README.md#get) - Retrieve a customs item

### [manifests](docs/sdks/manifests/README.md)

* [list](docs/sdks/manifests/README.md#list) - List all manifests
* [create](docs/sdks/manifests/README.md#create) - Create a new manifest
* [get](docs/sdks/manifests/README.md#get) - Retrieve a manifest

### [orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List all orders
* [create](docs/sdks/orders/README.md#create) - Create a new order
* [get](docs/sdks/orders/README.md#get) - Retrieve an order

### [parcels](docs/sdks/parcels/README.md)

* [list](docs/sdks/parcels/README.md#list) - List all parcels
* [create](docs/sdks/parcels/README.md#create) - Create a new parcel
* [get](docs/sdks/parcels/README.md#get) - Retrieve an existing parcel

### [pickups](docs/sdks/pickups/README.md)

* [create](docs/sdks/pickups/README.md#create) - Create a pickup

### [rates](docs/sdks/rates/README.md)

* [get](docs/sdks/rates/README.md#get) - Retrieve a rate
* [listShipmentRates](docs/sdks/rates/README.md#listshipmentrates) - Retrieve shipment rates
* [listShipmentRatesByCurrencyCode](docs/sdks/rates/README.md#listshipmentratesbycurrencycode) - Retrieve shipment rates in currency

### [ratesAtCheckout](docs/sdks/ratesatcheckout/README.md)

* [create](docs/sdks/ratesatcheckout/README.md#create) - Generate a live rates request
* [getDefaultParcelTemplate](docs/sdks/ratesatcheckout/README.md#getdefaultparceltemplate) - Show current default parcel template
* [updateDefaultParcelTemplate](docs/sdks/ratesatcheckout/README.md#updatedefaultparceltemplate) - Update default parcel template
* [deleteDefaultParcelTemplate](docs/sdks/ratesatcheckout/README.md#deletedefaultparceltemplate) - Clear current default parcel template

### [refunds](docs/sdks/refunds/README.md)

* [create](docs/sdks/refunds/README.md#create) - Create a refund
* [list](docs/sdks/refunds/README.md#list) - List all refunds
* [get](docs/sdks/refunds/README.md#get) - Retrieve a refund

### [serviceGroups](docs/sdks/servicegroups/README.md)

* [list](docs/sdks/servicegroups/README.md#list) - List all service groups
* [create](docs/sdks/servicegroups/README.md#create) - Create a new service group
* [update](docs/sdks/servicegroups/README.md#update) - Update an existing service group
* [delete](docs/sdks/servicegroups/README.md#delete) - Delete a service group

### [shipments](docs/sdks/shipments/README.md)

* [list](docs/sdks/shipments/README.md#list) - List all shipments
* [create](docs/sdks/shipments/README.md#create) - Create a new shipment
* [get](docs/sdks/shipments/README.md#get) - Retrieve a shipment


### [shippoAccounts](docs/sdks/shippoaccounts/README.md)

* [list](docs/sdks/shippoaccounts/README.md#list) - List all Shippo Accounts
* [create](docs/sdks/shippoaccounts/README.md#create) - Create a Shippo Account
* [get](docs/sdks/shippoaccounts/README.md#get) - Retrieve a Shippo Account
* [update](docs/sdks/shippoaccounts/README.md#update) - Update a Shippo Account

### [trackingStatus](docs/sdks/trackingstatus/README.md)

* [create](docs/sdks/trackingstatus/README.md#create) - Register a tracking webhook
* [get](docs/sdks/trackingstatus/README.md#get) - Get a tracking status

### [transactions](docs/sdks/transactions/README.md)

* [list](docs/sdks/transactions/README.md#list) - List all shipping labels
* [create](docs/sdks/transactions/README.md#create) - Create a shipping label
* [get](docs/sdks/transactions/README.md#get) - Retrieve a shipping label

### [userParcelTemplates](docs/sdks/userparceltemplates/README.md)

* [list](docs/sdks/userparceltemplates/README.md#list) - List all user parcel templates
* [create](docs/sdks/userparceltemplates/README.md#create) - Create a new user parcel template
* [delete](docs/sdks/userparceltemplates/README.md#delete) - Delete a user parcel template
* [get](docs/sdks/userparceltemplates/README.md#get) - Retrieves a user parcel template
* [update](docs/sdks/userparceltemplates/README.md#update) - Update an existing user parcel template

### [webhooks](docs/sdks/webhooks/README.md)

* [createWebhook](docs/sdks/webhooks/README.md#createwebhook) - Create a new webhook
* [listWebhooks](docs/sdks/webhooks/README.md#listwebhooks) - List all webhooks
* [getWebhook](docs/sdks/webhooks/README.md#getwebhook) - Retrieve a specific webhook
* [updateWebhook](docs/sdks/webhooks/README.md#updatewebhook) - Update an existing webhook
* [deleteWebhook](docs/sdks/webhooks/README.md#deletewebhook) - Delete a specific webhook

</details>
<!-- End Available Resources and Operations [operations] -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

## About Shippo
Connect with multiple different carriers, get discounted shipping labels, track parcels, and much more with just one integration. You can use your own carrier accounts or take advantage of our discounted rates with the Shippo carrier accounts. Using Shippo makes it easy to deal with multiple carrier integrations, rate shopping, tracking and other parts of the shipping workflow. We provide the API and web app for all your shipping needs.
