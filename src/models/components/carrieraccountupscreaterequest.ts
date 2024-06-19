/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    CarrierAccountUPSCreateRequestParameters,
    CarrierAccountUPSCreateRequestParameters$,
} from "./carrieraccountupscreaterequestparameters.js";
import * as z from "zod";

export type CarrierAccountUPSCreateRequest = {
    carrier: string;
    parameters?: CarrierAccountUPSCreateRequestParameters | undefined;
};

/** @internal */
export namespace CarrierAccountUPSCreateRequest$ {
    export const inboundSchema: z.ZodType<CarrierAccountUPSCreateRequest, z.ZodTypeDef, unknown> =
        z.object({
            carrier: z.string(),
            parameters: CarrierAccountUPSCreateRequestParameters$.inboundSchema.optional(),
        });

    export type Outbound = {
        carrier: string;
        parameters?: CarrierAccountUPSCreateRequestParameters$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CarrierAccountUPSCreateRequest> =
        z.object({
            carrier: z.string(),
            parameters: CarrierAccountUPSCreateRequestParameters$.outboundSchema.optional(),
        });
}
