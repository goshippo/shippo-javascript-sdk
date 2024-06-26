/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type ListCarrierParcelTemplatesGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

/**
 * filter by user or enabled
 */
export const Include = {
    All: "all",
    User: "user",
    Enabled: "enabled",
} as const;
/**
 * filter by user or enabled
 */
export type Include = ClosedEnum<typeof Include>;

export type ListCarrierParcelTemplatesRequest = {
    /**
     * filter by user or enabled
     */
    include?: Include | undefined;
    /**
     * filter by specific carrier
     */
    carrier?: string | undefined;
};

/** @internal */
export namespace ListCarrierParcelTemplatesGlobals$ {
    export const inboundSchema: z.ZodType<
        ListCarrierParcelTemplatesGlobals,
        z.ZodTypeDef,
        unknown
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListCarrierParcelTemplatesGlobals
    > = z
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
export namespace Include$ {
    export const inboundSchema: z.ZodNativeEnum<typeof Include> = z.nativeEnum(Include);
    export const outboundSchema: z.ZodNativeEnum<typeof Include> = inboundSchema;
}

/** @internal */
export namespace ListCarrierParcelTemplatesRequest$ {
    export const inboundSchema: z.ZodType<
        ListCarrierParcelTemplatesRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        include: Include$.inboundSchema.optional(),
        carrier: z.string().optional(),
    });

    export type Outbound = {
        include?: string | undefined;
        carrier?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ListCarrierParcelTemplatesRequest
    > = z.object({
        include: Include$.outboundSchema.optional(),
        carrier: z.string().optional(),
    });
}
