/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Shipment, Shipment$ } from "./shipment.js";
import * as z from "zod";

export type ShipmentPaginatedList = {
    next?: string | undefined;
    previous?: string | undefined;
    results?: Array<Shipment> | undefined;
};

/** @internal */
export namespace ShipmentPaginatedList$ {
    export const inboundSchema: z.ZodType<ShipmentPaginatedList, z.ZodTypeDef, unknown> = z.object({
        next: z.string().optional(),
        previous: z.string().optional(),
        results: z.array(Shipment$.inboundSchema).optional(),
    });

    export type Outbound = {
        next?: string | undefined;
        previous?: string | undefined;
        results?: Array<Shipment$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ShipmentPaginatedList> =
        z.object({
            next: z.string().optional(),
            previous: z.string().optional(),
            results: z.array(Shipment$.outboundSchema).optional(),
        });
}
