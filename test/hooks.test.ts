import {expect} from 'chai';
import {describe, it} from 'mocha';
import {PrefixApiKeyBeforeRequestHook} from "../src/hooks/registration";

describe('TestPrefixApiKeyBeforeRequestHook', function () {

    const hook = new PrefixApiKeyBeforeRequestHook()
    const hookCtx = {operationID: "test"}

    const tests = [
        {authHeader: "shippo_test_12345", shouldPrefix: true},
        {authHeader: "shippo_live_12345", shouldPrefix: true},
        {authHeader: "ShippoToken shippo_test_12345", shouldPrefix: false},
        {authHeader: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", shouldPrefix: false},
    ];

    tests.forEach(({authHeader, shouldPrefix}) => {
        it(`should${shouldPrefix ? " ": " not "}prefix ${authHeader}`, async() => {
            const headers = new Headers()
            headers.set("Authorization", authHeader)
            const inputRequest = new Request(new URL("http://localhost"), {headers})

            const outputRequest = await hook.beforeRequest(hookCtx, inputRequest)
            const updatedAuthHeader = outputRequest.headers.get("Authorization")
            if (shouldPrefix) {
                expect(updatedAuthHeader).to.be.equal(`ShippoToken ${authHeader}`)
            } else {
                expect(updatedAuthHeader).to.be.equal(authHeader)
            }
        })
    })

})
