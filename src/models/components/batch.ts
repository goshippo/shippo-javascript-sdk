/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    BatchShipmentPaginatedList,
    BatchShipmentPaginatedList$,
} from "./batchshipmentpaginatedlist";
import { LabelFileTypeEnum, LabelFileTypeEnum$ } from "./labelfiletypeenum";
import * as z from "zod";

/**
 * An object containing the following counts:<br>`creation_succeeded`<br>`creation_failed`<br>`purchase_succeeded`<br>`purchase_failed`
 */
export type ObjectResults = {
    creationFailed: number;
    creationSucceeded: number;
    purchaseFailed: number;
    purchaseSucceeded: number;
};

/**
 * Batches that are `VALIDATING` are being created and validated<br>
 *
 * @remarks
 * `VALID` batches can be purchased<br>
 * `INVALID` batches cannot be purchased, `INVALID` BatchShipments must be removed<br>
 * Batches that are in the `PURCHASING` state are being purchased<br>
 * `PURCHASED` batches are finished purchasing.
 */
export enum BatchStatus {
    Validating = "VALIDATING",
    Valid = "VALID",
    Invalid = "INVALID",
    Purchasing = "PURCHASING",
    Purchased = "PURCHASED",
}

export type Batch = {
    /**
     * ID of the Carrier Account object to use as the default for all shipments in this Batch.
     *
     * @remarks
     * The carrier account can be changed on a per-shipment basis by changing the carrier_account in the
     * corresponding BatchShipment object.
     */
    defaultCarrierAccount: string;
    /**
     * Token of the service level to use as the default for all shipments in this Batch.
     *
     * @remarks
     * The servicelevel can be changed on a per-shipment basis by changing the servicelevel_token in the
     * corresponding BatchShipment object. <a href="#tag/Service-Levels">Servicelevel tokens can be found here.</a>
     */
    defaultServicelevelToken: string;
    /**
     * Print format of the <a href="https://docs.goshippo.com/docs/shipments/shippinglabelsizes/">label</a>. If empty, will use the default format set from
     *
     * @remarks
     * <a href="https://apps.goshippo.com/settings/labels">the Shippo dashboard.</a>
     */
    labelFiletype?: LabelFileTypeEnum | undefined;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want to attach to the object.
     */
    metadata?: string | undefined;
    batchShipments: BatchShipmentPaginatedList;
    /**
     * An array of URLs each pointing to a merged file of 100 labels each
     */
    labelUrl: Array<string>;
    /**
     * Date and time of Batch creation
     */
    objectCreated: string;
    /**
     * Unique identifier of the given Batch object
     */
    objectId: string;
    /**
     * Username of the user who created the Address object.
     */
    objectOwner: string;
    /**
     * An object containing the following counts:<br>`creation_succeeded`<br>`creation_failed`<br>`purchase_succeeded`<br>`purchase_failed`
     */
    objectResults: ObjectResults;
    /**
     * Date and time of last update to the Batch
     */
    objectUpdated: string;
    /**
     * Batches that are `VALIDATING` are being created and validated<br>
     *
     * @remarks
     * `VALID` batches can be purchased<br>
     * `INVALID` batches cannot be purchased, `INVALID` BatchShipments must be removed<br>
     * Batches that are in the `PURCHASING` state are being purchased<br>
     * `PURCHASED` batches are finished purchasing.
     */
    status: BatchStatus;
    test?: boolean | undefined;
};

/** @internal */
export namespace ObjectResults$ {
    export const inboundSchema: z.ZodType<ObjectResults, z.ZodTypeDef, unknown> = z
        .object({
            creation_failed: z.number().int(),
            creation_succeeded: z.number().int(),
            purchase_failed: z.number().int(),
            purchase_succeeded: z.number().int(),
        })
        .transform((v) => {
            return {
                creationFailed: v.creation_failed,
                creationSucceeded: v.creation_succeeded,
                purchaseFailed: v.purchase_failed,
                purchaseSucceeded: v.purchase_succeeded,
            };
        });

    export type Outbound = {
        creation_failed: number;
        creation_succeeded: number;
        purchase_failed: number;
        purchase_succeeded: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ObjectResults> = z
        .object({
            creationFailed: z.number().int(),
            creationSucceeded: z.number().int(),
            purchaseFailed: z.number().int(),
            purchaseSucceeded: z.number().int(),
        })
        .transform((v) => {
            return {
                creation_failed: v.creationFailed,
                creation_succeeded: v.creationSucceeded,
                purchase_failed: v.purchaseFailed,
                purchase_succeeded: v.purchaseSucceeded,
            };
        });
}

/** @internal */
export namespace BatchStatus$ {
    export const inboundSchema = z.nativeEnum(BatchStatus);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Batch$ {
    export const inboundSchema: z.ZodType<Batch, z.ZodTypeDef, unknown> = z
        .object({
            default_carrier_account: z.string(),
            default_servicelevel_token: z.string(),
            label_filetype: LabelFileTypeEnum$.inboundSchema.optional(),
            metadata: z.string().optional(),
            batch_shipments: BatchShipmentPaginatedList$.inboundSchema,
            label_url: z.array(z.string()),
            object_created: z.string(),
            object_id: z.string(),
            object_owner: z.string(),
            object_results: z.lazy(() => ObjectResults$.inboundSchema),
            object_updated: z.string(),
            status: BatchStatus$.inboundSchema,
            test: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                defaultCarrierAccount: v.default_carrier_account,
                defaultServicelevelToken: v.default_servicelevel_token,
                ...(v.label_filetype === undefined ? null : { labelFiletype: v.label_filetype }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                batchShipments: v.batch_shipments,
                labelUrl: v.label_url,
                objectCreated: v.object_created,
                objectId: v.object_id,
                objectOwner: v.object_owner,
                objectResults: v.object_results,
                objectUpdated: v.object_updated,
                status: v.status,
                ...(v.test === undefined ? null : { test: v.test }),
            };
        });

    export type Outbound = {
        default_carrier_account: string;
        default_servicelevel_token: string;
        label_filetype?: string | undefined;
        metadata?: string | undefined;
        batch_shipments: BatchShipmentPaginatedList$.Outbound;
        label_url: Array<string>;
        object_created: string;
        object_id: string;
        object_owner: string;
        object_results: ObjectResults$.Outbound;
        object_updated: string;
        status: string;
        test?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Batch> = z
        .object({
            defaultCarrierAccount: z.string(),
            defaultServicelevelToken: z.string(),
            labelFiletype: LabelFileTypeEnum$.outboundSchema.optional(),
            metadata: z.string().optional(),
            batchShipments: BatchShipmentPaginatedList$.outboundSchema,
            labelUrl: z.array(z.string()),
            objectCreated: z.string(),
            objectId: z.string(),
            objectOwner: z.string(),
            objectResults: z.lazy(() => ObjectResults$.outboundSchema),
            objectUpdated: z.string(),
            status: BatchStatus$.outboundSchema,
            test: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                default_carrier_account: v.defaultCarrierAccount,
                default_servicelevel_token: v.defaultServicelevelToken,
                ...(v.labelFiletype === undefined ? null : { label_filetype: v.labelFiletype }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                batch_shipments: v.batchShipments,
                label_url: v.labelUrl,
                object_created: v.objectCreated,
                object_id: v.objectId,
                object_owner: v.objectOwner,
                object_results: v.objectResults,
                object_updated: v.objectUpdated,
                status: v.status,
                ...(v.test === undefined ? null : { test: v.test }),
            };
        });
}
