/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type UpdateCarrierAccountRequest = {
    /**
     * Object ID of the carrier account
     */
    carrierAccountId: string;
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
    /**
     * Examples.
     */
    carrierAccountBase?: components.CarrierAccountBase | undefined;
};

/** @internal */
export namespace UpdateCarrierAccountRequest$ {
    export type Inbound = {
        CarrierAccountId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
        CarrierAccountBase?: components.CarrierAccountBase$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateCarrierAccountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            CarrierAccountId: z.string(),
            "SHIPPO-API-VERSION": z.string().optional(),
            CarrierAccountBase: components.CarrierAccountBase$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                carrierAccountId: v.CarrierAccountId,
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
                ...(v.CarrierAccountBase === undefined
                    ? null
                    : { carrierAccountBase: v.CarrierAccountBase }),
            };
        });

    export type Outbound = {
        CarrierAccountId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
        CarrierAccountBase?: components.CarrierAccountBase$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCarrierAccountRequest> = z
        .object({
            carrierAccountId: z.string(),
            shippoApiVersion: z.string().optional(),
            carrierAccountBase: components.CarrierAccountBase$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                CarrierAccountId: v.carrierAccountId,
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
                ...(v.carrierAccountBase === undefined
                    ? null
                    : { CarrierAccountBase: v.carrierAccountBase }),
            };
        });
}
