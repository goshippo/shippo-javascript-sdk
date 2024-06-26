/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CarrierAccountUSPSCreateRequestParameters = {};

export type CarrierAccountUSPSCreateRequest = {
    carrier: string;
    parameters: CarrierAccountUSPSCreateRequestParameters;
};

/** @internal */
export namespace CarrierAccountUSPSCreateRequestParameters$ {
    export const inboundSchema: z.ZodType<
        CarrierAccountUSPSCreateRequestParameters,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CarrierAccountUSPSCreateRequestParameters
    > = z.object({});
}

/** @internal */
export namespace CarrierAccountUSPSCreateRequest$ {
    export const inboundSchema: z.ZodType<CarrierAccountUSPSCreateRequest, z.ZodTypeDef, unknown> =
        z.object({
            carrier: z.string(),
            parameters: z.lazy(() => CarrierAccountUSPSCreateRequestParameters$.inboundSchema),
        });

    export type Outbound = {
        carrier: string;
        parameters: CarrierAccountUSPSCreateRequestParameters$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CarrierAccountUSPSCreateRequest
    > = z.object({
        carrier: z.string(),
        parameters: z.lazy(() => CarrierAccountUSPSCreateRequestParameters$.outboundSchema),
    });
}
