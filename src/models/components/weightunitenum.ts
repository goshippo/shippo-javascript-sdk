/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The unit used for weight.
 */
export const WeightUnitEnum = {
    G: "g",
    Kg: "kg",
    Lb: "lb",
    Oz: "oz",
} as const;
/**
 * The unit used for weight.
 */
export type WeightUnitEnum = ClosedEnum<typeof WeightUnitEnum>;

/** @internal */
export namespace WeightUnitEnum$ {
    export const inboundSchema: z.ZodNativeEnum<typeof WeightUnitEnum> =
        z.nativeEnum(WeightUnitEnum);
    export const outboundSchema: z.ZodNativeEnum<typeof WeightUnitEnum> = inboundSchema;
}
