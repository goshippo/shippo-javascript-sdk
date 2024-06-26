/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateCarrierAccountGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type UpdateCarrierAccountRequest = {
    /**
     * Object ID of the carrier account
     */
    carrierAccountId: string;
    /**
     * Examples.
     */
    carrierAccountBase?: components.CarrierAccountBase | undefined;
};

/** @internal */
export namespace UpdateCarrierAccountGlobals$ {
    export const inboundSchema: z.ZodType<UpdateCarrierAccountGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCarrierAccountGlobals> = z
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
export namespace UpdateCarrierAccountRequest$ {
    export const inboundSchema: z.ZodType<UpdateCarrierAccountRequest, z.ZodTypeDef, unknown> = z
        .object({
            CarrierAccountId: z.string(),
            CarrierAccountBase: components.CarrierAccountBase$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                CarrierAccountId: "carrierAccountId",
                CarrierAccountBase: "carrierAccountBase",
            });
        });

    export type Outbound = {
        CarrierAccountId: string;
        CarrierAccountBase?: components.CarrierAccountBase$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCarrierAccountRequest> = z
        .object({
            carrierAccountId: z.string(),
            carrierAccountBase: components.CarrierAccountBase$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                carrierAccountId: "CarrierAccountId",
                carrierAccountBase: "CarrierAccountBase",
            });
        });
}
