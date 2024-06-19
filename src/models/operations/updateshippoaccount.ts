/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateShippoAccountGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type UpdateShippoAccountRequest = {
    /**
     * Object ID of the ShippoAccount
     */
    shippoAccountId: string;
    shippoAccountUpdateRequest?: components.ShippoAccountUpdateRequest | undefined;
};

/** @internal */
export namespace UpdateShippoAccountGlobals$ {
    export const inboundSchema: z.ZodType<UpdateShippoAccountGlobals, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateShippoAccountGlobals> = z
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
export namespace UpdateShippoAccountRequest$ {
    export const inboundSchema: z.ZodType<UpdateShippoAccountRequest, z.ZodTypeDef, unknown> = z
        .object({
            ShippoAccountId: z.string(),
            ShippoAccountUpdateRequest:
                components.ShippoAccountUpdateRequest$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ShippoAccountId: "shippoAccountId",
                ShippoAccountUpdateRequest: "shippoAccountUpdateRequest",
            });
        });

    export type Outbound = {
        ShippoAccountId: string;
        ShippoAccountUpdateRequest?: components.ShippoAccountUpdateRequest$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateShippoAccountRequest> = z
        .object({
            shippoAccountId: z.string(),
            shippoAccountUpdateRequest:
                components.ShippoAccountUpdateRequest$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                shippoAccountId: "ShippoAccountId",
                shippoAccountUpdateRequest: "ShippoAccountUpdateRequest",
            });
        });
}
