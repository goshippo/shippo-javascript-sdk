/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ListOrdersRequest = {
    /**
     * The page number you want to select
     */
    page?: number | undefined;
    /**
     * The number of results to return per page (max 100)
     */
    results?: number | undefined;
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

/** @internal */
export namespace ListOrdersRequest$ {
    export type Inbound = {
        page?: number | undefined;
        results?: number | undefined;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListOrdersRequest, z.ZodTypeDef, Inbound> = z
        .object({
            page: z.number().int().default(1),
            results: z.number().int().default(25),
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return {
                page: v.page,
                results: v.results,
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
            };
        });

    export type Outbound = {
        page: number;
        results: number;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListOrdersRequest> = z
        .object({
            page: z.number().int().default(1),
            results: z.number().int().default(25),
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                page: v.page,
                results: v.results,
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}
