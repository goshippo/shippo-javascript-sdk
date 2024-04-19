/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RefundRequestBody = {
    transaction: string;
    async?: boolean | undefined;
};

/** @internal */
export namespace RefundRequestBody$ {
    export type Inbound = {
        transaction: string;
        async?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<RefundRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            transaction: z.string(),
            async: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                transaction: v.transaction,
                ...(v.async === undefined ? null : { async: v.async }),
            };
        });

    export type Outbound = {
        transaction: string;
        async?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefundRequestBody> = z
        .object({
            transaction: z.string(),
            async: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                transaction: v.transaction,
                ...(v.async === undefined ? null : { async: v.async }),
            };
        });
}
