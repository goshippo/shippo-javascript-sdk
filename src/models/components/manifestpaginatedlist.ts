/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Manifest, Manifest$ } from "./manifest.js";
import * as z from "zod";

export type ManifestPaginatedList = {
    next?: string | undefined;
    previous?: string | undefined;
    results?: Array<Manifest> | undefined;
};

/** @internal */
export namespace ManifestPaginatedList$ {
    export const inboundSchema: z.ZodType<ManifestPaginatedList, z.ZodTypeDef, unknown> = z.object({
        next: z.string().optional(),
        previous: z.string().optional(),
        results: z.array(Manifest$.inboundSchema).optional(),
    });

    export type Outbound = {
        next?: string | undefined;
        previous?: string | undefined;
        results?: Array<Manifest$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ManifestPaginatedList> =
        z.object({
            next: z.string().optional(),
            previous: z.string().optional(),
            results: z.array(Manifest$.outboundSchema).optional(),
        });
}
