/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetRefundGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type GetRefundRequest = {
    /**
     * Object ID of the refund to update
     */
    refundId: string;
};

/** @internal */
export namespace GetRefundGlobals$ {
    export const inboundSchema: z.ZodType<GetRefundGlobals, z.ZodTypeDef, unknown> = z
        .object({
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
            };
        });

    export type Outbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRefundGlobals> = z
        .object({
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}

/** @internal */
export namespace GetRefundRequest$ {
    export const inboundSchema: z.ZodType<GetRefundRequest, z.ZodTypeDef, unknown> = z
        .object({
            RefundId: z.string(),
        })
        .transform((v) => {
            return {
                refundId: v.RefundId,
            };
        });

    export type Outbound = {
        RefundId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRefundRequest> = z
        .object({
            refundId: z.string(),
        })
        .transform((v) => {
            return {
                RefundId: v.refundId,
            };
        });
}
