<!-- Start SDK Example Usage [usage] -->
```typescript
import { Shippo } from "shippo";

async function run() {
    const sdk = new Shippo({
        apiKeyHeader: "<YOUR_API_KEY_HERE>",
        shippoApiVersion: "2018-02-08",
    });

    const page = 1;
    const results = 25;
    const shippoApiVersion = "2018-02-08";

    const result = await sdk.addresses.list(page, results, shippoApiVersion);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->