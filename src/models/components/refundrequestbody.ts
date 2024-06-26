/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RefundRequestBody = {
    async?: boolean | undefined;
    transaction: string;
};

/** @internal */
export namespace RefundRequestBody$ {
    export const inboundSchema: z.ZodType<RefundRequestBody, z.ZodTypeDef, unknown> = z.object({
        async: z.boolean().optional(),
        transaction: z.string(),
    });

    export type Outbound = {
        async?: boolean | undefined;
        transaction: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefundRequestBody> = z.object({
        async: z.boolean().optional(),
        transaction: z.string(),
    });
}
