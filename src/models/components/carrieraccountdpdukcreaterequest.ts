/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CarrierAccountDPDUKCreateRequestParameters = {};

export type CarrierAccountDPDUKCreateRequest = {
    carrier: string;
    parameters: CarrierAccountDPDUKCreateRequestParameters;
};

/** @internal */
export namespace CarrierAccountDPDUKCreateRequestParameters$ {
    export const inboundSchema: z.ZodType<
        CarrierAccountDPDUKCreateRequestParameters,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CarrierAccountDPDUKCreateRequestParameters
    > = z.object({});
}

/** @internal */
export namespace CarrierAccountDPDUKCreateRequest$ {
    export const inboundSchema: z.ZodType<CarrierAccountDPDUKCreateRequest, z.ZodTypeDef, unknown> =
        z.object({
            carrier: z.string(),
            parameters: z.lazy(() => CarrierAccountDPDUKCreateRequestParameters$.inboundSchema),
        });

    export type Outbound = {
        carrier: string;
        parameters: CarrierAccountDPDUKCreateRequestParameters$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CarrierAccountDPDUKCreateRequest
    > = z.object({
        carrier: z.string(),
        parameters: z.lazy(() => CarrierAccountDPDUKCreateRequestParameters$.outboundSchema),
    });
}
