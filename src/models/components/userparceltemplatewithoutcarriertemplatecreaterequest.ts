/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { DistanceUnitEnum, DistanceUnitEnum$ } from "./distanceunitenum";
import { WeightUnitEnum, WeightUnitEnum$ } from "./weightunitenum";
import * as z from "zod";

export type UserParcelTemplateWithoutCarrierTemplateCreateRequest = {
    /**
     * The measure unit used for length, width and height.
     */
    distanceUnit: DistanceUnitEnum;
    /**
     * The height of the package, in units specified by the `distance_unit` attribute. Required, but if using a preset carrier template then this field must be empty.
     */
    height: string;
    /**
     * The length of the package, in units specified by the `distance_unit` attribute. Required, but if using a preset carrier template then this field must be empty.
     */
    length: string;
    /**
     * The name of the User Parcel Template
     */
    name: string;
    /**
     * The weight of the package, in units specified by the weight_unit attribute.
     */
    weight?: string | undefined;
    /**
     * The unit used for weight.
     */
    weightUnit?: WeightUnitEnum | undefined;
    /**
     * The width of the package, in units specified by the `distance_unit` attribute. Required, but if using a preset carrier template then this field must be empty.
     */
    width: string;
};

/** @internal */
export namespace UserParcelTemplateWithoutCarrierTemplateCreateRequest$ {
    export const inboundSchema: z.ZodType<
        UserParcelTemplateWithoutCarrierTemplateCreateRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            distance_unit: DistanceUnitEnum$.inboundSchema,
            height: z.string(),
            length: z.string(),
            name: z.string(),
            weight: z.string().optional(),
            weight_unit: WeightUnitEnum$.inboundSchema.optional(),
            width: z.string(),
        })
        .transform((v) => {
            return {
                distanceUnit: v.distance_unit,
                height: v.height,
                length: v.length,
                name: v.name,
                ...(v.weight === undefined ? null : { weight: v.weight }),
                ...(v.weight_unit === undefined ? null : { weightUnit: v.weight_unit }),
                width: v.width,
            };
        });

    export type Outbound = {
        distance_unit: string;
        height: string;
        length: string;
        name: string;
        weight?: string | undefined;
        weight_unit?: string | undefined;
        width: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UserParcelTemplateWithoutCarrierTemplateCreateRequest
    > = z
        .object({
            distanceUnit: DistanceUnitEnum$.outboundSchema,
            height: z.string(),
            length: z.string(),
            name: z.string(),
            weight: z.string().optional(),
            weightUnit: WeightUnitEnum$.outboundSchema.optional(),
            width: z.string(),
        })
        .transform((v) => {
            return {
                distance_unit: v.distanceUnit,
                height: v.height,
                length: v.length,
                name: v.name,
                ...(v.weight === undefined ? null : { weight: v.weight }),
                ...(v.weightUnit === undefined ? null : { weight_unit: v.weightUnit }),
                width: v.width,
            };
        });
}
