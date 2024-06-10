/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

/**
 * Indicates the status of the manifest.
 */
export enum ManifestStatus {
    Queued = "QUEUED",
    Success = "SUCCESS",
    Error = "ERROR",
}

export type Manifest = {
    /**
     * ID of carrier account
     */
    carrierAccount: string;
    /**
     * All shipments to be submitted on this day will be closed out.
     *
     * @remarks
     * Must be in the format `2014-01-18T00:35:03.463Z` (ISO 8601 date).
     */
    shipmentDate: string;
    /**
     * IDs transactions to use. If you set this to null or not send this parameter,
     *
     * @remarks
     * Shippo will automatically assign all applicable transactions.
     */
    transactions?: Array<string> | undefined;
    /**
     * ID of the Address object that should be used as pickup address for the scan form.
     *
     * @remarks
     * The USPS will validate this address before creating the scan form.
     */
    addressFrom: string;
    /**
     * An array containing the URLs to all returned manifest documents.
     */
    documents: Array<string>;
    /**
     * An array of codes and messages describing the error that occurred if any.
     */
    errors?: Array<string> | undefined;
    /**
     * Date and time of object creation.
     */
    objectCreated: Date;
    /**
     * Unique identifier of the given object.
     */
    objectId: string;
    /**
     * Username of the user who created the object.
     */
    objectOwner: string;
    /**
     * Date and time of last object update.
     */
    objectUpdated: Date;
    /**
     * Indicates the status of the manifest.
     */
    status: ManifestStatus;
};

/** @internal */
export namespace ManifestStatus$ {
    export const inboundSchema = z.nativeEnum(ManifestStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Manifest$ {
    export const inboundSchema: z.ZodType<Manifest, z.ZodTypeDef, unknown> = z
        .object({
            carrier_account: z.string(),
            shipment_date: z.string(),
            transactions: z.array(z.string()).optional(),
            address_from: z.string(),
            documents: z.array(z.string()),
            errors: z.array(z.string()).optional(),
            object_created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            object_id: z.string(),
            object_owner: z.string(),
            object_updated: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            status: ManifestStatus$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                carrier_account: "carrierAccount",
                shipment_date: "shipmentDate",
                address_from: "addressFrom",
                object_created: "objectCreated",
                object_id: "objectId",
                object_owner: "objectOwner",
                object_updated: "objectUpdated",
            });
        });

    export type Outbound = {
        carrier_account: string;
        shipment_date: string;
        transactions?: Array<string> | undefined;
        address_from: string;
        documents: Array<string>;
        errors?: Array<string> | undefined;
        object_created: string;
        object_id: string;
        object_owner: string;
        object_updated: string;
        status: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Manifest> = z
        .object({
            carrierAccount: z.string(),
            shipmentDate: z.string(),
            transactions: z.array(z.string()).optional(),
            addressFrom: z.string(),
            documents: z.array(z.string()),
            errors: z.array(z.string()).optional(),
            objectCreated: z.date().transform((v) => v.toISOString()),
            objectId: z.string(),
            objectOwner: z.string(),
            objectUpdated: z.date().transform((v) => v.toISOString()),
            status: ManifestStatus$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                carrierAccount: "carrier_account",
                shipmentDate: "shipment_date",
                addressFrom: "address_from",
                objectCreated: "object_created",
                objectId: "object_id",
                objectOwner: "object_owner",
                objectUpdated: "object_updated",
            });
        });
}
