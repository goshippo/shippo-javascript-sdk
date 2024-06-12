import {expect} from 'chai';
import {describe, it} from 'mocha';
import {ConvertNullToUndefinedAfterSuccessHook, PrefixApiKeyBeforeRequestHook} from "../src/hooks/registration";

describe('TestPrefixApiKeyBeforeRequestHook', function () {

    const hook = new PrefixApiKeyBeforeRequestHook();
    const hookCtx = {operationID: "test"};

    const tests: { authHeader: string; shouldPrefix: boolean }[] = [
        {authHeader: "shippo_test_12345", shouldPrefix: true},
        {authHeader: "shippo_live_12345", shouldPrefix: true},
        {authHeader: "ShippoToken shippo_test_12345", shouldPrefix: false},
        {authHeader: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", shouldPrefix: false},
    ];

    tests.forEach(({authHeader, shouldPrefix}) => {
        it(`should${shouldPrefix ? " " : " not "}prefix ${authHeader}`, async () => {
            const headers = new Headers();
            headers.set("Authorization", authHeader);
            const inputRequest = new Request(new URL("http://localhost"), {headers});

            const outputRequest = await hook.beforeRequest(hookCtx, inputRequest);
            const updatedAuthHeader = outputRequest.headers.get("Authorization");
            if (shouldPrefix) {
                expect(updatedAuthHeader).to.be.equal(`ShippoToken ${authHeader}`);
            } else {
                expect(updatedAuthHeader).to.be.equal(authHeader);
            }
        });
    });

});

describe('TestConvertNullToUndefinedAfterSuccessHook', function () {

    const hook = new ConvertNullToUndefinedAfterSuccessHook();
    const hookCtx = {operationID: "test"};

    async function applyHookAndCompareExpected(inputJson: unknown, expected: unknown) {
        const inputResponse = new Response(JSON.stringify(inputJson), {headers: {"Content-Type": "application/json"}});
        const outputResponse = await hook.afterSuccess(hookCtx, inputResponse);
        const actual = await outputResponse.json();
        expect(expected).to.deep.equal(actual);
    }

    it('should do nothing if no null value', async () => {
        await applyHookAndCompareExpected(
            {field: "value"},
            {field: "value"}
        );
        await applyHookAndCompareExpected(
            {field: {subField: "value"}},
            {field: {subField: "value"}}
        );
        await applyHookAndCompareExpected(
            {field: [{arrayField: "value"}]},
            {field: [{arrayField: "value"}]}
        );
    });

    it('should strip null in simple model', async () => {
        await applyHookAndCompareExpected(
            {field: null},
            {}
        );
    });

    it('should strip null in sub model', async () => {
        await applyHookAndCompareExpected(
            {field: {subField: "value", subFieldEmpty: null}},
            {field: {subField: "value"}}
        );
    });

    it('should strip null in array', async () => {
        await applyHookAndCompareExpected(
            {field: [{subField: "value", subFieldEmpty: null}]},
            {field: [{subField: "value"}]}
        );
    });

    it('should handle no content response', async () => {
        const inputResponse = new Response(null, {status: 204});
        const outputResponse = await hook.afterSuccess(hookCtx, inputResponse);
        expect(inputResponse.status).to.equal(outputResponse.status);
        const responseText = await outputResponse.text();
        expect(responseText).to.be.empty;
    })

    it('should handle text response', async () => {
        const content = "some content";
        const inputResponse = new Response(content, {status: 200, headers: {"Content-Type": "text"}});
        const outputResponse = await hook.afterSuccess(hookCtx, inputResponse);
        const responseText = await outputResponse.text();
        expect(responseText).to.be.equal(content);
    })

});
