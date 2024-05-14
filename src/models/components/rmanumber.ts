/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Specify the RMA number field on the label (FedEx and UPS only).
 */
export type RmaNumber = {
    /**
     * Custom prefix for RMA number field (ZPL labels only). Up to 11 characters, including trailing
     *
     * @remarks
     * spaces. Empty string indicates removal of default prefix. To use the default prefix, do not include
     * this property.
     */
    prefix?: string | undefined;
    /**
     * Optional text to be printed on the shipping label for RMA number. Up to 40 characters.
     */
    value?: string | undefined;
    /**
     * Order UPS reference fields are printed on ZPL labels. For UPS shipments, if you choose to set `ref_sort` for one reference, you must set `ref_sort` for all other supported UPS references using unique integers.
     */
    refSort?: number | undefined;
};

/** @internal */
export namespace RmaNumber$ {
    export const inboundSchema: z.ZodType<RmaNumber, z.ZodTypeDef, unknown> = z
        .object({
            prefix: z.string().optional(),
            value: z.string().optional(),
            ref_sort: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.prefix === undefined ? null : { prefix: v.prefix }),
                ...(v.value === undefined ? null : { value: v.value }),
                ...(v.ref_sort === undefined ? null : { refSort: v.ref_sort }),
            };
        });

    export type Outbound = {
        prefix?: string | undefined;
        value?: string | undefined;
        ref_sort?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RmaNumber> = z
        .object({
            prefix: z.string().optional(),
            value: z.string().optional(),
            refSort: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.prefix === undefined ? null : { prefix: v.prefix }),
                ...(v.value === undefined ? null : { value: v.value }),
                ...(v.refSort === undefined ? null : { ref_sort: v.refSort }),
            };
        });
}
