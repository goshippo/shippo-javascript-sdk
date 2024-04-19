<!-- Start SDK Example Usage [usage] -->
```typescript
import { Shippo } from "shippo";

const shippo = new Shippo({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    shippoApiVersion: "2018-02-08",
});

async function run() {
    const page = 1;
    const results = 5;

    const result = await shippo.addresses.list(page, results);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->