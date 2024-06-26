/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetCustomsItemGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type GetCustomsItemRequest = {
    /**
     * Object ID of the customs item
     */
    customsItemId: string;
    /**
     * The page number you want to select
     */
    page?: number | undefined;
};

/** @internal */
export namespace GetCustomsItemGlobals$ {
    export const inboundSchema: z.ZodType<GetCustomsItemGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCustomsItemGlobals> = z
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
export namespace GetCustomsItemRequest$ {
    export const inboundSchema: z.ZodType<GetCustomsItemRequest, z.ZodTypeDef, unknown> = z
        .object({
            CustomsItemId: z.string(),
            page: z.number().int().default(1),
        })
        .transform((v) => {
            return remap$(v, {
                CustomsItemId: "customsItemId",
            });
        });

    export type Outbound = {
        CustomsItemId: string;
        page: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCustomsItemRequest> = z
        .object({
            customsItemId: z.string(),
            page: z.number().int().default(1),
        })
        .transform((v) => {
            return remap$(v, {
                customsItemId: "CustomsItemId",
            });
        });
}
