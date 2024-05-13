/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CarrierAccountHermesUKCreateRequestParameters = {};

export type CarrierAccountHermesUKCreateRequest = {
    carrier: string;
    parameters: CarrierAccountHermesUKCreateRequestParameters;
};

/** @internal */
export namespace CarrierAccountHermesUKCreateRequestParameters$ {
    export const inboundSchema: z.ZodType<
        CarrierAccountHermesUKCreateRequestParameters,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CarrierAccountHermesUKCreateRequestParameters
    > = z.object({});
}

/** @internal */
export namespace CarrierAccountHermesUKCreateRequest$ {
    export const inboundSchema: z.ZodType<
        CarrierAccountHermesUKCreateRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            carrier: z.string(),
            parameters: z.lazy(() => CarrierAccountHermesUKCreateRequestParameters$.inboundSchema),
        })
        .transform((v) => {
            return {
                carrier: v.carrier,
                parameters: v.parameters,
            };
        });

    export type Outbound = {
        carrier: string;
        parameters: CarrierAccountHermesUKCreateRequestParameters$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CarrierAccountHermesUKCreateRequest
    > = z
        .object({
            carrier: z.string(),
            parameters: z.lazy(() => CarrierAccountHermesUKCreateRequestParameters$.outboundSchema),
        })
        .transform((v) => {
            return {
                carrier: v.carrier,
                parameters: v.parameters,
            };
        });
}
