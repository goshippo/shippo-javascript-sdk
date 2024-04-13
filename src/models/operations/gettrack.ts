/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetTrackRequest = {
    /**
     * Tracking number
     */
    trackingNumber: string;
    /**
     * Name of the carrier
     */
    carrier: string;
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

/** @internal */
export namespace GetTrackRequest$ {
    export type Inbound = {
        TrackingNumber: string;
        Carrier: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetTrackRequest, z.ZodTypeDef, Inbound> = z
        .object({
            TrackingNumber: z.string(),
            Carrier: z.string(),
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return {
                trackingNumber: v.TrackingNumber,
                carrier: v.Carrier,
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
            };
        });

    export type Outbound = {
        TrackingNumber: string;
        Carrier: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTrackRequest> = z
        .object({
            trackingNumber: z.string(),
            carrier: z.string(),
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                TrackingNumber: v.trackingNumber,
                Carrier: v.carrier,
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}
