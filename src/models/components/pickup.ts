/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Location, Location$ } from "./location";
import * as z from "zod";

/**
 * Indicates the status of the pickup.
 */
export enum PickupStatus {
    Pending = "PENDING",
    Confirmed = "CONFIRMED",
    Error = "ERROR",
    Cancelled = "CANCELLED",
}

export type Pickup = {
    /**
     * The object ID of your USPS or DHL Express carrier account.
     *
     * @remarks
     * You can retrieve this from your Rate requests or our <a href="#tag/Carrier-Accounts/">Carrier Accounts</a> endpoint.
     */
    carrierAccount: string;
    /**
     * Location where the parcel(s) will be picked up.
     */
    location: Location;
    /**
     * A string of up to 100 characters that can be filled with any additional information you
     *
     * @remarks
     * want to attach to the object.
     */
    metadata?: string | undefined;
    /**
     * The latest that you requested your parcels to be available for pickup.
     *
     * @remarks
     * Expressed in the timezone specified in the response.
     */
    requestedEndTime: Date;
    /**
     * The earliest that you requested your parcels to be ready for pickup.
     *
     * @remarks
     * Expressed in the timezone specified in the response.
     */
    requestedStartTime: Date;
    /**
     * The transaction(s) object ID(s) for the parcel(s) that need to be picked up.
     */
    transactions: Array<string>;
    /**
     * Date and time of Pickup creation.
     */
    objectCreated?: Date | undefined;
    /**
     * Unique identifier of the given Pickup object.
     */
    objectId?: string | undefined;
    /**
     * Date and time of last Pickup update.
     */
    objectUpdated?: Date | undefined;
    /**
     * The earliest that your parcels will be ready for pickup, confirmed by the carrier.
     *
     * @remarks
     * Expressed in the timezone specified in the response.
     */
    confirmedStartTime?: string | undefined;
    /**
     * The latest that your parcels will be available for pickup, confirmed by the carrier.
     *
     * @remarks
     * Expressed in the timezone specified in the response.
     */
    confirmedEndTime?: string | undefined;
    /**
     * The latest time to cancel a pickup. Expressed in the timezone specified in the response.
     *
     * @remarks
     * To cancel a pickup, you will need to contact the carrier directly.
     * The ability to cancel a pickup through Shippo may be released in future iterations.
     */
    cancelByTime?: string | undefined;
    /**
     * Indicates the status of the pickup.
     */
    status?: PickupStatus | undefined;
    /**
     * Pickup's confirmation code returned by the carrier.
     *
     * @remarks
     * To edit or cancel a pickup, you will need to contact USPS or DHL Express directly and provide your `confirmation_code`.
     */
    confirmationCode?: string | undefined;
    /**
     * The pickup time windows will be in the time zone specified here, not UTC.
     */
    timezone?: string | undefined;
    /**
     * An array containing strings of any messages generated during validation.
     */
    messages?: Array<string> | undefined;
    /**
     * Indicates whether the object has been created in test mode.
     */
    isTest?: boolean | undefined;
};

/** @internal */
export const PickupStatus$: z.ZodNativeEnum<typeof PickupStatus> = z.nativeEnum(PickupStatus);

/** @internal */
export namespace Pickup$ {
    export const inboundSchema: z.ZodType<Pickup, z.ZodTypeDef, unknown> = z
        .object({
            carrier_account: z.string(),
            location: Location$.inboundSchema,
            metadata: z.string().optional(),
            requested_end_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            requested_start_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            transactions: z.array(z.string()),
            object_created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            object_id: z.string().optional(),
            object_updated: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            confirmed_start_time: z.string().optional(),
            confirmed_end_time: z.string().optional(),
            cancel_by_time: z.string().optional(),
            status: PickupStatus$.optional(),
            confirmation_code: z.string().optional(),
            timezone: z.string().optional(),
            messages: z.array(z.string()).optional(),
            is_test: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                carrierAccount: v.carrier_account,
                location: v.location,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                requestedEndTime: v.requested_end_time,
                requestedStartTime: v.requested_start_time,
                transactions: v.transactions,
                ...(v.object_created === undefined ? null : { objectCreated: v.object_created }),
                ...(v.object_id === undefined ? null : { objectId: v.object_id }),
                ...(v.object_updated === undefined ? null : { objectUpdated: v.object_updated }),
                ...(v.confirmed_start_time === undefined
                    ? null
                    : { confirmedStartTime: v.confirmed_start_time }),
                ...(v.confirmed_end_time === undefined
                    ? null
                    : { confirmedEndTime: v.confirmed_end_time }),
                ...(v.cancel_by_time === undefined ? null : { cancelByTime: v.cancel_by_time }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.confirmation_code === undefined
                    ? null
                    : { confirmationCode: v.confirmation_code }),
                ...(v.timezone === undefined ? null : { timezone: v.timezone }),
                ...(v.messages === undefined ? null : { messages: v.messages }),
                ...(v.is_test === undefined ? null : { isTest: v.is_test }),
            };
        });

    export type Outbound = {
        carrier_account: string;
        location: Location$.Outbound;
        metadata?: string | undefined;
        requested_end_time: string;
        requested_start_time: string;
        transactions: Array<string>;
        object_created?: string | undefined;
        object_id?: string | undefined;
        object_updated?: string | undefined;
        confirmed_start_time?: string | undefined;
        confirmed_end_time?: string | undefined;
        cancel_by_time?: string | undefined;
        status?: PickupStatus | undefined;
        confirmation_code?: string | undefined;
        timezone?: string | undefined;
        messages?: Array<string> | undefined;
        is_test?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Pickup> = z
        .object({
            carrierAccount: z.string(),
            location: Location$.outboundSchema,
            metadata: z.string().optional(),
            requestedEndTime: z.date().transform((v) => v.toISOString()),
            requestedStartTime: z.date().transform((v) => v.toISOString()),
            transactions: z.array(z.string()),
            objectCreated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            objectId: z.string().optional(),
            objectUpdated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            confirmedStartTime: z.string().optional(),
            confirmedEndTime: z.string().optional(),
            cancelByTime: z.string().optional(),
            status: PickupStatus$.optional(),
            confirmationCode: z.string().optional(),
            timezone: z.string().optional(),
            messages: z.array(z.string()).optional(),
            isTest: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                carrier_account: v.carrierAccount,
                location: v.location,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                requested_end_time: v.requestedEndTime,
                requested_start_time: v.requestedStartTime,
                transactions: v.transactions,
                ...(v.objectCreated === undefined ? null : { object_created: v.objectCreated }),
                ...(v.objectId === undefined ? null : { object_id: v.objectId }),
                ...(v.objectUpdated === undefined ? null : { object_updated: v.objectUpdated }),
                ...(v.confirmedStartTime === undefined
                    ? null
                    : { confirmed_start_time: v.confirmedStartTime }),
                ...(v.confirmedEndTime === undefined
                    ? null
                    : { confirmed_end_time: v.confirmedEndTime }),
                ...(v.cancelByTime === undefined ? null : { cancel_by_time: v.cancelByTime }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.confirmationCode === undefined
                    ? null
                    : { confirmation_code: v.confirmationCode }),
                ...(v.timezone === undefined ? null : { timezone: v.timezone }),
                ...(v.messages === undefined ? null : { messages: v.messages }),
                ...(v.isTest === undefined ? null : { is_test: v.isTest }),
            };
        });
}
