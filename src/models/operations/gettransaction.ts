/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetTransactionGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type GetTransactionRequest = {
    /**
     * Object ID of the transaction to update
     */
    transactionId: string;
};

/** @internal */
export namespace GetTransactionGlobals$ {
    export const inboundSchema: z.ZodType<GetTransactionGlobals, z.ZodTypeDef, unknown> = z
        .object({
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "SHIPPO-API-VERSION": "shippoApiVersion",
            });
        });

    export type Outbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionGlobals> = z
        .object({
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                shippoApiVersion: "SHIPPO-API-VERSION",
            });
        });
}

/** @internal */
export namespace GetTransactionRequest$ {
    export const inboundSchema: z.ZodType<GetTransactionRequest, z.ZodTypeDef, unknown> = z
        .object({
            TransactionId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                TransactionId: "transactionId",
            });
        });

    export type Outbound = {
        TransactionId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTransactionRequest> = z
        .object({
            transactionId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                transactionId: "TransactionId",
            });
        });
}
