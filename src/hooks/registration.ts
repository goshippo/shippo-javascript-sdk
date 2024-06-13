import {
    AfterSuccessContext,
    AfterSuccessHook,
    Awaitable,
    BeforeRequestContext,
    BeforeRequestHook,
    Hooks
} from "./types";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

export class PrefixApiKeyBeforeRequestHook implements BeforeRequestHook {

    // @ts-expect-error unused argument hookCtx
    async beforeRequest(hookCtx: BeforeRequestContext, request: Request): Awaitable<Request> {
        const authHeader = request.headers.get("authorization");
        if (authHeader != null && authHeader.startsWith("shippo_")) {
            request.headers.set("authorization", "ShippoToken " + authHeader);
        }
        return request;
    }

}

/**
 * Some of our APIs return null for values when they really should return nothing.  Since JS distinguishes between
 * null and undefined AND Zod is very stringent, null values cause the serialization to explode when a null is received.
 * While we could mark fields as 'nullable', there are a couple of reasons this is not ideal
 *   1. there's no way to predict which fields will potentially return null, so every non-required field would need to
 *   be marked nullable
 *   2. other SDKs without a strict difference between null and undefined need to account for this difference when a
 *   schema field is nullable; that is, it would make most of the other SDKs harder to use
 *   3. we don't have any instance where null is different from undefined.  for example, a null field in an API could
 *   be used to clear out a value during a PATCH request - but we don't have a single example of this in our 2018 API
 * So, instead of jumping through hoops, we use this hook to drop any fields with null values.
 */
export class ConvertNullToUndefinedAfterSuccessHook implements AfterSuccessHook {

    private deleteKeysWithNullValues(obj: any): any {
        Object.keys(obj).forEach((key) => {
            (obj[key] && typeof obj[key] === 'object') && this.deleteKeysWithNullValues(obj[key]) ||
            (obj[key] === null) && delete obj[key];
        });
        return obj;
    }

    private isResponseJson(response: Response): boolean {
        const contentType = response.headers.get("content-type");
        return contentType?.includes("application/json") ?? false;
    }

    // @ts-expect-error unused argument hookCtx
    async afterSuccess(hookCtx: AfterSuccessContext, response: Response): Promise<Response> {
        let body = null;
        if (response.status != 204) {
            if (this.isResponseJson(response)) {
                let jsonContent = await response.json();
                jsonContent = this.deleteKeysWithNullValues(jsonContent);
                body = JSON.stringify(jsonContent);
            } else {
                body = await response.text();
            }
        }
        return new Response(body, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        });
    }

}

export function initHooks(hooks: Hooks) {
    // Add hooks by calling hooks.register{ClientInit/BeforeRequest/AfterSuccess/AfterError}Hook
    // with an instance of a hook that implements that specific Hook interface
    // Hooks are registered per SDK instance, and are valid for the lifetime of the SDK instance
    hooks.registerBeforeRequestHook(new PrefixApiKeyBeforeRequestHook());
    hooks.registerAfterSuccessHook(new ConvertNullToUndefinedAfterSuccessHook());
}
