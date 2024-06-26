/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListTransactionsGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type ListTransactionsRequest = {
    /**
     * Filter by rate ID
     */
    rate?: string | undefined;
    /**
     * Filter by object status
     */
    objectStatus?: components.TransactionStatusEnum | undefined;
    /**
     * Filter by tracking status
     */
    trackingStatus?: components.TrackingStatusEnum | undefined;
    /**
     * The page number you want to select
     */
    page?: number | undefined;
    /**
     * The number of results to return per page (max 100)
     */
    results?: number | undefined;
};

/** @internal */
export namespace ListTransactionsGlobals$ {
    export const inboundSchema: z.ZodType<ListTransactionsGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTransactionsGlobals> = z
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
export namespace ListTransactionsRequest$ {
    export const inboundSchema: z.ZodType<ListTransactionsRequest, z.ZodTypeDef, unknown> = z
        .object({
            rate: z.string().optional(),
            object_status: components.TransactionStatusEnum$.inboundSchema.optional(),
            tracking_status: components.TrackingStatusEnum$.inboundSchema.optional(),
            page: z.number().int().default(1),
            results: z.number().int().default(25),
        })
        .transform((v) => {
            return remap$(v, {
                object_status: "objectStatus",
                tracking_status: "trackingStatus",
            });
        });

    export type Outbound = {
        rate?: string | undefined;
        object_status?: string | undefined;
        tracking_status?: string | undefined;
        page: number;
        results: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTransactionsRequest> = z
        .object({
            rate: z.string().optional(),
            objectStatus: components.TransactionStatusEnum$.outboundSchema.optional(),
            trackingStatus: components.TrackingStatusEnum$.outboundSchema.optional(),
            page: z.number().int().default(1),
            results: z.number().int().default(25),
        })
        .transform((v) => {
            return remap$(v, {
                objectStatus: "object_status",
                trackingStatus: "tracking_status",
            });
        });
}
