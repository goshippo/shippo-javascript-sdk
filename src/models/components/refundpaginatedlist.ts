/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Refund, Refund$ } from "./refund";
import * as z from "zod";

export type RefundPaginatedList = {
    next?: string | undefined;
    previous?: string | undefined;
    results?: Array<Refund> | undefined;
};

/** @internal */
export namespace RefundPaginatedList$ {
    export const inboundSchema: z.ZodType<RefundPaginatedList, z.ZodTypeDef, unknown> = z
        .object({
            next: z.string().optional(),
            previous: z.string().optional(),
            results: z.array(Refund$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });

    export type Outbound = {
        next?: string | undefined;
        previous?: string | undefined;
        results?: Array<Refund$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefundPaginatedList> = z
        .object({
            next: z.string().optional(),
            previous: z.string().optional(),
            results: z.array(Refund$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });
}
