/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ListShipmentRatesRequest = {
    /**
     * Object ID of the shipment to update
     */
    shipmentId: string;
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
export namespace ListShipmentRatesRequest$ {
    export type Inbound = {
        ShipmentId: string;
        page?: number | undefined;
        results?: number | undefined;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ListShipmentRatesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ShipmentId: z.string(),
            page: z.number().int().default(1),
            results: z.number().int().default(25),
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return {
                shipmentId: v.ShipmentId,
                page: v.page,
                results: v.results,
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
            };
        });

    export type Outbound = {
        ShipmentId: string;
        page: number;
        results: number;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListShipmentRatesRequest> = z
        .object({
            shipmentId: z.string(),
            page: z.number().int().default(1),
            results: z.number().int().default(25),
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                ShipmentId: v.shipmentId,
                page: v.page,
                results: v.results,
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}
