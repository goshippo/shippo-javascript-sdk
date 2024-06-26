/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { DistanceUnitEnum, DistanceUnitEnum$ } from "./distanceunitenum.js";
import { ParcelExtra, ParcelExtra$ } from "./parcelextra.js";
import { WeightUnitEnum, WeightUnitEnum$ } from "./weightunitenum.js";
import * as z from "zod";

export type ParcelCreateRequest = {
    /**
     * An object holding optional extra services to be requested for each parcel in a multi-piece shipment.
     *
     * @remarks
     * See the <a href="#section/Parcel-Extras">Parcel Extra table below</a> for all available services.
     */
    extra?: ParcelExtra | undefined;
    metadata?: string | undefined;
    /**
     * The unit used for weight.
     */
    massUnit: WeightUnitEnum;
    /**
     * Weight of the parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    weight: string;
    /**
     * The measure unit used for length, width and height.
     */
    distanceUnit: DistanceUnitEnum;
    /**
     * Height of the parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    height: string;
    /**
     * Length of the Parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    length: string;
    /**
     * Width of the Parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    width: string;
};

/** @internal */
export namespace ParcelCreateRequest$ {
    export const inboundSchema: z.ZodType<ParcelCreateRequest, z.ZodTypeDef, unknown> = z
        .object({
            extra: ParcelExtra$.inboundSchema.optional(),
            metadata: z.string().optional(),
            mass_unit: WeightUnitEnum$.inboundSchema,
            weight: z.string(),
            distance_unit: DistanceUnitEnum$.inboundSchema,
            height: z.string(),
            length: z.string(),
            width: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                mass_unit: "massUnit",
                distance_unit: "distanceUnit",
            });
        });

    export type Outbound = {
        extra?: ParcelExtra$.Outbound | undefined;
        metadata?: string | undefined;
        mass_unit: string;
        weight: string;
        distance_unit: string;
        height: string;
        length: string;
        width: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ParcelCreateRequest> = z
        .object({
            extra: ParcelExtra$.outboundSchema.optional(),
            metadata: z.string().optional(),
            massUnit: WeightUnitEnum$.outboundSchema,
            weight: z.string(),
            distanceUnit: DistanceUnitEnum$.outboundSchema,
            height: z.string(),
            length: z.string(),
            width: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                massUnit: "mass_unit",
                distanceUnit: "distance_unit",
            });
        });
}
