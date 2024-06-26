/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type CarrierAccountDHLExpressCreateRequestParameters = {
    /**
     * Whether or not the user agrees to the DHL Express Terms and Conditions. If passed in as false, request will fail with error 400
     */
    userAcceptedTermsAndConditions: boolean;
};

/** @internal */
export namespace CarrierAccountDHLExpressCreateRequestParameters$ {
    export const inboundSchema: z.ZodType<
        CarrierAccountDHLExpressCreateRequestParameters,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            user_accepted_terms_and_conditions: z.boolean(),
        })
        .transform((v) => {
            return remap$(v, {
                user_accepted_terms_and_conditions: "userAcceptedTermsAndConditions",
            });
        });

    export type Outbound = {
        user_accepted_terms_and_conditions: boolean;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CarrierAccountDHLExpressCreateRequestParameters
    > = z
        .object({
            userAcceptedTermsAndConditions: z.boolean(),
        })
        .transform((v) => {
            return remap$(v, {
                userAcceptedTermsAndConditions: "user_accepted_terms_and_conditions",
            });
        });
}
