/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { ClosedEnum } from "../../types";
import { DistanceUnitEnum, DistanceUnitEnum$ } from "./distanceunitenum";
import { ParcelExtra, ParcelExtra$ } from "./parcelextra";
import { ParcelTemplateEnumSet, ParcelTemplateEnumSet$ } from "./parceltemplateenumset";
import { WeightUnitEnum, WeightUnitEnum$ } from "./weightunitenum";
import * as z from "zod";

/**
 * A Parcel will only be valid when all required values have been sent and validated successfully.
 */
export const ObjectState = {
    Valid: "VALID",
} as const;
/**
 * A Parcel will only be valid when all required values have been sent and validated successfully.
 */
export type ObjectState = ClosedEnum<typeof ObjectState>;

export type Parcel = {
    /**
     * The measure unit used for length, width and height.
     */
    distanceUnit: DistanceUnitEnum;
    /**
     * An object holding optional extra services to be requested for each parcel in a multi-piece shipment.
     *
     * @remarks
     * See the <a href="#section/Parcel-Extras">Parcel Extra table below</a> for all available services.
     */
    extra?: ParcelExtra | undefined;
    /**
     * **Required if template is not specified**<br>
     *
     * @remarks
     * Height of the parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    height: string;
    /**
     * **Required if template is not specified**<br>
     *
     * @remarks
     * Length of the Parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    length: string;
    /**
     * The unit used for weight.
     */
    massUnit: WeightUnitEnum;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want to attach to the object.
     */
    metadata?: string | undefined;
    /**
     * Date and time of Parcel creation.
     */
    objectCreated?: Date | undefined;
    /**
     * Unique identifier of the given Parcel object. This ID is required to create a Shipment object.
     */
    objectId?: string | undefined;
    /**
     * Username of the user who created the Parcel object.
     */
    objectOwner?: string | undefined;
    /**
     * A Parcel will only be valid when all required values have been sent and validated successfully.
     */
    objectState?: ObjectState | undefined;
    /**
     * Date and time of last Parcel update. Since you cannot update Parcels after they were created, this time stamp reflects the time when the Parcel was changed by Shippo's systems for the last time, e.g., during sorting the dimensions given.
     */
    objectUpdated?: Date | undefined;
    /**
     * If template is passed, `length`, `width`, `height`, and `distance_unit` are not required
     */
    template?: ParcelTemplateEnumSet | undefined;
    /**
     * Indicates whether the object has been created in test mode.
     */
    test?: boolean | undefined;
    /**
     * Weight of the parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    weight: string;
    /**
     * **Required if template is not specified**<br>
     *
     * @remarks
     * Width of the Parcel. Up to six digits in front and four digits after the decimal separator are accepted.
     */
    width: string;
};

/** @internal */
export namespace ObjectState$ {
    export const inboundSchema = z.nativeEnum(ObjectState);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Parcel$ {
    export const inboundSchema: z.ZodType<Parcel, z.ZodTypeDef, unknown> = z
        .object({
            distance_unit: DistanceUnitEnum$.inboundSchema,
            extra: ParcelExtra$.inboundSchema.optional(),
            height: z.string(),
            length: z.string(),
            mass_unit: WeightUnitEnum$.inboundSchema,
            metadata: z.string().optional(),
            object_created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            object_id: z.string().optional(),
            object_owner: z.string().optional(),
            object_state: ObjectState$.inboundSchema.optional(),
            object_updated: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            template: ParcelTemplateEnumSet$.inboundSchema.optional(),
            test: z.boolean().optional(),
            weight: z.string(),
            width: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                distance_unit: "distanceUnit",
                mass_unit: "massUnit",
                object_created: "objectCreated",
                object_id: "objectId",
                object_owner: "objectOwner",
                object_state: "objectState",
                object_updated: "objectUpdated",
            });
        });

    export type Outbound = {
        distance_unit: string;
        extra?: ParcelExtra$.Outbound | undefined;
        height: string;
        length: string;
        mass_unit: string;
        metadata?: string | undefined;
        object_created?: string | undefined;
        object_id?: string | undefined;
        object_owner?: string | undefined;
        object_state?: string | undefined;
        object_updated?: string | undefined;
        template?: ParcelTemplateEnumSet$.Outbound | undefined;
        test?: boolean | undefined;
        weight: string;
        width: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Parcel> = z
        .object({
            distanceUnit: DistanceUnitEnum$.outboundSchema,
            extra: ParcelExtra$.outboundSchema.optional(),
            height: z.string(),
            length: z.string(),
            massUnit: WeightUnitEnum$.outboundSchema,
            metadata: z.string().optional(),
            objectCreated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            objectId: z.string().optional(),
            objectOwner: z.string().optional(),
            objectState: ObjectState$.outboundSchema.optional(),
            objectUpdated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            template: ParcelTemplateEnumSet$.outboundSchema.optional(),
            test: z.boolean().optional(),
            weight: z.string(),
            width: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                distanceUnit: "distance_unit",
                massUnit: "mass_unit",
                objectCreated: "object_created",
                objectId: "object_id",
                objectOwner: "object_owner",
                objectState: "object_state",
                objectUpdated: "object_updated",
            });
        });
}
