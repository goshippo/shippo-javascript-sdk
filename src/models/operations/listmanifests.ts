/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ListManifestsGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type ListManifestsRequest = {
    /**
     * The page number you want to select
     */
    page?: number | undefined;
    /**
     * The number of results to return per page (max 100, default 5)
     */
    results?: number | undefined;
};

/** @internal */
export namespace ListManifestsGlobals$ {
    export const inboundSchema: z.ZodType<ListManifestsGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListManifestsGlobals> = z
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
export namespace ListManifestsRequest$ {
    export const inboundSchema: z.ZodType<ListManifestsRequest, z.ZodTypeDef, unknown> = z
        .object({
            page: z.number().int().default(1),
            results: z.number().int().default(5),
        })
        .transform((v) => {
            return {
                page: v.page,
                results: v.results,
            };
        });

    export type Outbound = {
        page: number;
        results: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListManifestsRequest> = z
        .object({
            page: z.number().int().default(1),
            results: z.number().int().default(5),
        })
        .transform((v) => {
            return {
                page: v.page,
                results: v.results,
            };
        });
}
