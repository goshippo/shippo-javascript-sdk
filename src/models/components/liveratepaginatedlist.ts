/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { LiveRate, LiveRate$ } from "./liverate";
import * as z from "zod";

export type LiveRatePaginatedList = {
    next?: string | undefined;
    previous?: string | undefined;
    count?: number | undefined;
    results?: Array<LiveRate> | undefined;
};

/** @internal */
export namespace LiveRatePaginatedList$ {
    export const inboundSchema: z.ZodType<LiveRatePaginatedList, z.ZodTypeDef, unknown> = z
        .object({
            next: z.string().optional(),
            previous: z.string().optional(),
            count: z.number().int().optional(),
            results: z.array(LiveRate$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });

    export type Outbound = {
        next?: string | undefined;
        previous?: string | undefined;
        count?: number | undefined;
        results?: Array<LiveRate$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LiveRatePaginatedList> = z
        .object({
            next: z.string().optional(),
            previous: z.string().optional(),
            count: z.number().int().optional(),
            results: z.array(LiveRate$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });
}
