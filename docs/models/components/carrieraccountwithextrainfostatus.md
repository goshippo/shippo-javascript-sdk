# CarrierAccountWithExtraInfoStatus

Current authentication status. Possible values: 'disconnected' (authorization lost, reconnect needed), 'connected' (authorized and active), 'authorization_pending' (awaiting initial authorization flow).

## Example Usage

```typescript
import { CarrierAccountWithExtraInfoStatus } from "shippo/models/components";

let value: CarrierAccountWithExtraInfoStatus = "authorization_pending";
```

## Values

```typescript
"disconnected" | "connected" | "authorization_pending"
```