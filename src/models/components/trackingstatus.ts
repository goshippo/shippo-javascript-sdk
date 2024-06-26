/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { TrackingStatusEnum, TrackingStatusEnum$ } from "./trackingstatusenum.js";
import {
    TrackingStatusLocationBase,
    TrackingStatusLocationBase$,
} from "./trackingstatuslocationbase.js";
import { TrackingStatusSubstatus, TrackingStatusSubstatus$ } from "./trackingstatussubstatus.js";
import * as z from "zod";

/**
 * The latest tracking information of this shipment.
 */
export type TrackingStatus = {
    /**
     * An object containing zip, city, state and country information of the tracking event.
     */
    location?: TrackingStatusLocationBase | undefined;
    objectCreated: Date;
    objectId: string;
    objectUpdated: Date;
    /**
     * Indicates the high level status of the shipment.
     */
    status: TrackingStatusEnum;
    /**
     * A finer-grained classification of the tracking event.
     */
    substatus?: TrackingStatusSubstatus | undefined;
    /**
     * Date and time when the carrier scanned this tracking event. This is displayed in UTC.
     */
    statusDate?: Date | undefined;
    /**
     * The human-readable description of the status.
     */
    statusDetails: string;
};

/** @internal */
export namespace TrackingStatus$ {
    export const inboundSchema: z.ZodType<TrackingStatus, z.ZodTypeDef, unknown> = z
        .object({
            location: TrackingStatusLocationBase$.inboundSchema.optional(),
            object_created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            object_id: z.string(),
            object_updated: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            status: TrackingStatusEnum$.inboundSchema,
            substatus: TrackingStatusSubstatus$.inboundSchema.optional(),
            status_date: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            status_details: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                object_created: "objectCreated",
                object_id: "objectId",
                object_updated: "objectUpdated",
                status_date: "statusDate",
                status_details: "statusDetails",
            });
        });

    export type Outbound = {
        location?: TrackingStatusLocationBase$.Outbound | undefined;
        object_created: string;
        object_id: string;
        object_updated: string;
        status: string;
        substatus?: TrackingStatusSubstatus$.Outbound | undefined;
        status_date?: string | undefined;
        status_details: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackingStatus> = z
        .object({
            location: TrackingStatusLocationBase$.outboundSchema.optional(),
            objectCreated: z.date().transform((v) => v.toISOString()),
            objectId: z.string(),
            objectUpdated: z.date().transform((v) => v.toISOString()),
            status: TrackingStatusEnum$.outboundSchema,
            substatus: TrackingStatusSubstatus$.outboundSchema.optional(),
            statusDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            statusDetails: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                objectCreated: "object_created",
                objectId: "object_id",
                objectUpdated: "object_updated",
                statusDate: "status_date",
                statusDetails: "status_details",
            });
        });
}
