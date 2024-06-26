/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ParcelExtra, ParcelExtra$ } from "./parcelextra.js";
import { ParcelTemplateEnumSet, ParcelTemplateEnumSet$ } from "./parceltemplateenumset.js";
import { WeightUnitEnum, WeightUnitEnum$ } from "./weightunitenum.js";
import * as z from "zod";

export type ParcelCreateFromTemplateRequest = {
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
     * If template is passed, `length`, `width`, `height`, and `distance_unit` are not required
     */
    template: ParcelTemplateEnumSet;
};

/** @internal */
export namespace ParcelCreateFromTemplateRequest$ {
    export const inboundSchema: z.ZodType<ParcelCreateFromTemplateRequest, z.ZodTypeDef, unknown> =
        z
            .object({
                extra: ParcelExtra$.inboundSchema.optional(),
                metadata: z.string().optional(),
                mass_unit: WeightUnitEnum$.inboundSchema,
                weight: z.string(),
                template: ParcelTemplateEnumSet$.inboundSchema,
            })
            .transform((v) => {
                return remap$(v, {
                    mass_unit: "massUnit",
                });
            });

    export type Outbound = {
        extra?: ParcelExtra$.Outbound | undefined;
        metadata?: string | undefined;
        mass_unit: string;
        weight: string;
        template: ParcelTemplateEnumSet$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ParcelCreateFromTemplateRequest
    > = z
        .object({
            extra: ParcelExtra$.outboundSchema.optional(),
            metadata: z.string().optional(),
            massUnit: WeightUnitEnum$.outboundSchema,
            weight: z.string(),
            template: ParcelTemplateEnumSet$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                massUnit: "mass_unit",
            });
        });
}
