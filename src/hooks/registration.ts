import {Hooks, AfterSuccessHook, AfterSuccessContext} from "./types";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */


export function removeNulls(obj: any) {
    Object.keys(obj).forEach(function(key) {
        (obj[key] && typeof obj[key] === 'object') && removeNulls(obj[key]) ||
        (obj[key] === null) && delete obj[key]
    });
    return obj;
}


class MyAfterSuccessHook implements AfterSuccessHook {

    // @ts-expect-error
    async afterSuccess(hookCtx: AfterSuccessContext, response: Response): Promise<Response> {
        const content = await response.json()
        const transformedContent = removeNulls(content)
        return new Response(JSON.stringify(transformedContent), {
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
    hooks.registerAfterSuccessHook(new MyAfterSuccessHook())
}
