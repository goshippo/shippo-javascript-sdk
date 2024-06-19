/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Rate, Rate$ } from "./rate.js";
import * as z from "zod";

export type RatePaginatedList = {
    next?: string | undefined;
    previous?: string | undefined;
    results?: Array<Rate> | undefined;
};

/** @internal */
export namespace RatePaginatedList$ {
    export const inboundSchema: z.ZodType<RatePaginatedList, z.ZodTypeDef, unknown> = z.object({
        next: z.string().optional(),
        previous: z.string().optional(),
        results: z.array(Rate$.inboundSchema).optional(),
    });

    export type Outbound = {
        next?: string | undefined;
        previous?: string | undefined;
        results?: Array<Rate$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RatePaginatedList> = z.object({
        next: z.string().optional(),
        previous: z.string().optional(),
        results: z.array(Rate$.outboundSchema).optional(),
    });
}
