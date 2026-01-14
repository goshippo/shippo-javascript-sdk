<!-- Start SDK Example Usage [usage] -->
```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
  shippoApiVersion: "2018-02-08",
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await shippo.addresses.list();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->