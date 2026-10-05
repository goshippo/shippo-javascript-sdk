# EmbeddedAuthorization

## Overview

Mint short-lived JSON Web Tokens (JWTs) for client-side applications, so you never ship a
long-lived API token to the browser. Authenticate the request with a Shippo API token or an
OAuth bearer token, then pass the returned token as `Authorization: JWT <JWT_TOKEN>`.
See our [Authentication using JWT guide](https://docs.goshippo.com/docs/guides_general/authentication_using_jwt/) for details.

### Available Operations

* [create](#create) - Create a JWT

## create

Creates a short-lived JSON Web Token (JWT) that client-side applications can use
to authenticate against the Shippo API without exposing a long-lived API token.

Authenticate this request with either a Shippo API token
(`Authorization: ShippoToken <API_TOKEN>`) or an OAuth bearer token
(`Authorization: Bearer <OAUTH_BEARER_TOKEN>`). Platform accounts can mint a token
on behalf of a Managed Shippo Account by setting the `SHIPPO-ACCOUNT-ID` header.

The returned token is valid for 12 hours. Send it on subsequent requests as
`Authorization: JWT <JWT_TOKEN>`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateEmbeddedAuthorization" method="post" path="/embedded/authz" -->
```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const result = await shippo.embeddedAuthorization.create({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  }, {
    scope: "embedded:carriers",
  }, "e0b382dc7d754c0ca6358c09d5d2bdf7");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ShippoCore } from "shippo/core.js";
import { embeddedAuthorizationCreate } from "shippo/funcs/embeddedAuthorizationCreate.js";

// Use `ShippoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const shippo = new ShippoCore({
  shippoApiVersion: "2018-02-08",
});

async function run() {
  const res = await embeddedAuthorizationCreate(shippo, {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  }, {
    scope: "embedded:carriers",
  }, "e0b382dc7d754c0ca6358c09d5d2bdf7");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("embeddedAuthorizationCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.CreateEmbeddedAuthorizationSecurity](../../models/operations/createembeddedauthorizationsecurity.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |                                                                                                                                                                                |
| `embeddedAuthorizationRequest`                                                                                                                                                 | [components.EmbeddedAuthorizationRequest](../../models/components/embeddedauthorizationrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The scope to request for the token.                                                                                                                                            |                                                                                                                                                                                |
| `shippoAccountId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Optional. The object ID of a Managed Shippo Account. Platform accounts set this to<br/>mint a JWT scoped to one of their managed accounts.                                     | e0b382dc7d754c0ca6358c09d5d2bdf7                                                                                                                                               |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.EmbeddedAuthorization](../../models/components/embeddedauthorization.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |