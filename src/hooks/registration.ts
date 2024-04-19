import {Awaitable, BeforeRequestContext, BeforeRequestHook, Hooks} from "./types";

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

export function initHooks(hooks: Hooks) {
    // Add hooks by calling hooks.register{ClientInit/BeforeRequest/AfterSuccess/AfterError}Hook
    // with an instance of a hook that implements that specific Hook interface
    // Hooks are registered per SDK instance, and are valid for the lifetime of the SDK instance
    hooks.registerBeforeRequestHook(new PrefixApiKeyBeforeRequestHook());
}
