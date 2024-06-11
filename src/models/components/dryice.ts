/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

/**
 * Specify that the package contains Dry Ice (FedEx, Veho, and UPS only).
 */
export type DryIce = {
    /**
     * Mandatory. Specifies that the package contains Dry Ice.
     */
    containsDryIce?: boolean | undefined;
    /**
     * Mandatory. Units must be in Kilograms. Cannot be greater than package weight.
     */
    weight?: string | undefined;
};

/** @internal */
export namespace DryIce$ {
    export const inboundSchema: z.ZodType<DryIce, z.ZodTypeDef, unknown> = z
        .object({
            contains_dry_ice: z.boolean().optional(),
            weight: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contains_dry_ice: "containsDryIce",
            });
        });

    export type Outbound = {
        contains_dry_ice?: boolean | undefined;
        weight?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DryIce> = z
        .object({
            containsDryIce: z.boolean().optional(),
            weight: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                containsDryIce: "contains_dry_ice",
            });
        });
}
