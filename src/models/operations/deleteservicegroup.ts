/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type DeleteServiceGroupGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type DeleteServiceGroupRequest = {
    /**
     * Object ID of the service group
     */
    serviceGroupId: string;
};

/** @internal */
export namespace DeleteServiceGroupGlobals$ {
    export const inboundSchema: z.ZodType<DeleteServiceGroupGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteServiceGroupGlobals> = z
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
export namespace DeleteServiceGroupRequest$ {
    export const inboundSchema: z.ZodType<DeleteServiceGroupRequest, z.ZodTypeDef, unknown> = z
        .object({
            ServiceGroupId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                ServiceGroupId: "serviceGroupId",
            });
        });

    export type Outbound = {
        ServiceGroupId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteServiceGroupRequest> = z
        .object({
            serviceGroupId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                serviceGroupId: "ServiceGroupId",
            });
        });
}
