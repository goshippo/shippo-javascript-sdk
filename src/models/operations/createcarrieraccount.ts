/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type CreateCarrierAccountRequest = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
    /**
     * Examples.
     */
    connectExistingOwnUPSAccountRequest?:
        | components.ConnectExistingOwnUPSAccountRequest
        | undefined;
};

/** @internal */
export namespace CreateCarrierAccountRequest$ {
    export type Inbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
        ConnectExistingOwnUPSAccountRequest?:
            | components.ConnectExistingOwnUPSAccountRequest$.Inbound
            | undefined;
    };

    export const inboundSchema: z.ZodType<CreateCarrierAccountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            "SHIPPO-API-VERSION": z.string().optional(),
            ConnectExistingOwnUPSAccountRequest:
                components.ConnectExistingOwnUPSAccountRequest$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
                ...(v.ConnectExistingOwnUPSAccountRequest === undefined
                    ? null
                    : {
                          connectExistingOwnUPSAccountRequest:
                              v.ConnectExistingOwnUPSAccountRequest,
                      }),
            };
        });

    export type Outbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
        ConnectExistingOwnUPSAccountRequest?:
            | components.ConnectExistingOwnUPSAccountRequest$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateCarrierAccountRequest> = z
        .object({
            shippoApiVersion: z.string().optional(),
            connectExistingOwnUPSAccountRequest:
                components.ConnectExistingOwnUPSAccountRequest$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
                ...(v.connectExistingOwnUPSAccountRequest === undefined
                    ? null
                    : {
                          ConnectExistingOwnUPSAccountRequest:
                              v.connectExistingOwnUPSAccountRequest,
                      }),
            };
        });
}
