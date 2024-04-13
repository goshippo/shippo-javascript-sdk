/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ValidateAddressRequest = {
    /**
     * Object ID of the address
     */
    addressId: string;
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

/** @internal */
export namespace ValidateAddressRequest$ {
    export type Inbound = {
        AddressId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ValidateAddressRequest, z.ZodTypeDef, Inbound> = z
        .object({
            AddressId: z.string(),
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return {
                addressId: v.AddressId,
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
            };
        });

    export type Outbound = {
        AddressId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ValidateAddressRequest> = z
        .object({
            addressId: z.string(),
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                AddressId: v.addressId,
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}
