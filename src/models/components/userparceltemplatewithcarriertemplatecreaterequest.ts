/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { WeightUnitEnum, WeightUnitEnum$ } from "./weightunitenum";
import * as z from "zod";

export type UserParcelTemplateWithCarrierTemplateCreateRequest = {
    /**
     * The object representing the carrier parcel template
     */
    template?: string | undefined;
    /**
     * The weight of the package, in units specified by the weight_unit attribute.
     */
    weight?: string | undefined;
    /**
     * The unit used for weight.
     */
    weightUnit?: WeightUnitEnum | undefined;
};

/** @internal */
export namespace UserParcelTemplateWithCarrierTemplateCreateRequest$ {
    export const inboundSchema: z.ZodType<
        UserParcelTemplateWithCarrierTemplateCreateRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            template: z.string().optional(),
            weight: z.string().optional(),
            weight_unit: WeightUnitEnum$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.template === undefined ? null : { template: v.template }),
                ...(v.weight === undefined ? null : { weight: v.weight }),
                ...(v.weight_unit === undefined ? null : { weightUnit: v.weight_unit }),
            };
        });

    export type Outbound = {
        template?: string | undefined;
        weight?: string | undefined;
        weight_unit?: WeightUnitEnum | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UserParcelTemplateWithCarrierTemplateCreateRequest
    > = z
        .object({
            template: z.string().optional(),
            weight: z.string().optional(),
            weightUnit: WeightUnitEnum$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.template === undefined ? null : { template: v.template }),
                ...(v.weight === undefined ? null : { weight: v.weight }),
                ...(v.weightUnit === undefined ? null : { weight_unit: v.weightUnit }),
            };
        });
}
