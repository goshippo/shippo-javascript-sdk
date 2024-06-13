/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetWebhookRequest = {
    /**
     * Object ID of the webhook to retrieve
     */
    webhookId: string;
};

/** @internal */
export namespace GetWebhookRequest$ {
    export const inboundSchema: z.ZodType<GetWebhookRequest, z.ZodTypeDef, unknown> = z.object({
        webhookId: z.string(),
    });

    export type Outbound = {
        webhookId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWebhookRequest> = z.object({
        webhookId: z.string(),
    });
}
