/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { Cod, Cod$ } from "./cod";
import { ParcelInsurance, ParcelInsurance$ } from "./parcelinsurance";
import * as z from "zod";

/**
 * An object holding optional extra services to be requested for each parcel in a multi-piece shipment.
 *
 * @remarks
 * See the <a href="#section/Parcel-Extras">Parcel Extra table below</a> for all available services.
 */
export type ParcelExtra = {
    /**
     * Specify collection on delivery details (UPS only).
     */
    cod?: Cod | undefined;
    /**
     * To add insurace to your parcel, specify `amount`, `content` and `currency`. <br><br>If you do not want to add insurance to you parcel, do not set these parameters.
     */
    insurance?: ParcelInsurance | undefined;
    /**
     * Optional text to be printed on the shipping label if supported by carrier. Up to 50 characters.
     */
    reference1?: string | undefined;
    /**
     * Optional text to be printed on the shipping label if supported by carrier. Up to 50 characters.
     */
    reference2?: string | undefined;
};

/** @internal */
export namespace ParcelExtra$ {
    export const inboundSchema: z.ZodType<ParcelExtra, z.ZodTypeDef, unknown> = z
        .object({
            COD: Cod$.inboundSchema.optional(),
            insurance: ParcelInsurance$.inboundSchema.optional(),
            reference_1: z.string().optional(),
            reference_2: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                COD: "cod",
                reference_1: "reference1",
                reference_2: "reference2",
            });
        });

    export type Outbound = {
        COD?: Cod$.Outbound | undefined;
        insurance?: ParcelInsurance$.Outbound | undefined;
        reference_1?: string | undefined;
        reference_2?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ParcelExtra> = z
        .object({
            cod: Cod$.outboundSchema.optional(),
            insurance: ParcelInsurance$.outboundSchema.optional(),
            reference1: z.string().optional(),
            reference2: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                cod: "COD",
                reference1: "reference_1",
                reference2: "reference_2",
            });
        });
}
