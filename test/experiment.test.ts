import {describe, it} from 'mocha';
import {Shippo} from "../sdk";

describe('Test Experiment', function() {

    // NOTE: this requires a valid API token.  I just add `SHIPPO_TOKEN=<personal test token>` to the Mocha
    // test template configuration in IntelliJ, so it gets picked up whenever a test is run.
    // alternatively, you can just replace `process.env.SHIPPO_TOKEN` with your actual API token, just don't check it in.
    const sdk = new Shippo({
        apiKeyHeader: process.env.SHIPPO_TOKEN
    });

    it('test experiment', async () => {
        // unfortunately, there is no debug client (yet) in the javascript SDK, so if you need to inspect the
        // actual response, either use the python SDK or set a breakpoint in ResponseMatcher.match
        const response = await sdk.addresses.list();
        console.log(response.results)
    });

})
