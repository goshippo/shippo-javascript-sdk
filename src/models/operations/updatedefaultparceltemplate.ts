/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateDefaultParcelTemplateGlobals = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

/** @internal */
export namespace UpdateDefaultParcelTemplateGlobals$ {
    export const inboundSchema: z.ZodType<
        UpdateDefaultParcelTemplateGlobals,
        z.ZodTypeDef,
        unknown
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateDefaultParcelTemplateGlobals
    > = z
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
