/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * `INVALID` batch shipments cannot be purchased and will have to be removed, fixed, and added to the batch again.<br>
 *
 * @remarks
 * `VALID` batch shipments can be purchased. <br>
 * Batch shipments with the status `TRANSACTION_FAILED` were not able to be purchased and the error will be displayed on the message field<br>
 * `INCOMPLETE` batch shipments have an issue with the Address and will need to be removed, fixed, and added to the batch again.
 */
export const Status = {
    Invalid: "INVALID",
    Valid: "VALID",
    Incomplete: "INCOMPLETE",
    TransactionFailed: "TRANSACTION_FAILED",
} as const;
/**
 * `INVALID` batch shipments cannot be purchased and will have to be removed, fixed, and added to the batch again.<br>
 *
 * @remarks
 * `VALID` batch shipments can be purchased. <br>
 * Batch shipments with the status `TRANSACTION_FAILED` were not able to be purchased and the error will be displayed on the message field<br>
 * `INCOMPLETE` batch shipments have an issue with the Address and will need to be removed, fixed, and added to the batch again.
 */
export type Status = ClosedEnum<typeof Status>;

export type BatchShipment = {
    /**
     * Object ID of the carrier account to be used for this shipment (will override batch default)
     */
    carrierAccount?: string | undefined;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want
     *
     * @remarks
     * to attach to the object.
     */
    metadata?: string | undefined;
    /**
     * A token that sets the shipping method for the batch, overriding the batch default.
     *
     * @remarks
     * Servicelevel tokens can be found <a href="#tag/Service-Levels">in this list</a>
     * or <a href="#operation/ListCarrierAccounts">at this endpoint</a>.
     */
    servicelevelToken?: string | undefined;
    /**
     * List of Shipment and Transaction error messages.
     */
    messages?: Array<any> | undefined;
    /**
     * Object ID of this batch shipment. Can be used in the remove_shipments endpoint.
     */
    objectId: string;
    /**
     * Object ID of the shipment object created for this batch shipment.
     */
    shipment: string;
    /**
     * `INVALID` batch shipments cannot be purchased and will have to be removed, fixed, and added to the batch again.<br>
     *
     * @remarks
     * `VALID` batch shipments can be purchased. <br>
     * Batch shipments with the status `TRANSACTION_FAILED` were not able to be purchased and the error will be displayed on the message field<br>
     * `INCOMPLETE` batch shipments have an issue with the Address and will need to be removed, fixed, and added to the batch again.
     */
    status: Status;
    /**
     * Object ID of the transaction object created for this batch shipment.
     */
    transaction?: string | undefined;
};

/** @internal */
export namespace Status$ {
    export const inboundSchema = z.nativeEnum(Status);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace BatchShipment$ {
    export const inboundSchema: z.ZodType<BatchShipment, z.ZodTypeDef, unknown> = z
        .object({
            carrier_account: z.string().optional(),
            metadata: z.string().optional(),
            servicelevel_token: z.string().optional(),
            messages: z.array(z.any()).optional(),
            object_id: z.string(),
            shipment: z.string(),
            status: Status$.inboundSchema,
            transaction: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                carrier_account: "carrierAccount",
                servicelevel_token: "servicelevelToken",
                object_id: "objectId",
            });
        });

    export type Outbound = {
        carrier_account?: string | undefined;
        metadata?: string | undefined;
        servicelevel_token?: string | undefined;
        messages?: Array<any> | undefined;
        object_id: string;
        shipment: string;
        status: string;
        transaction?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BatchShipment> = z
        .object({
            carrierAccount: z.string().optional(),
            metadata: z.string().optional(),
            servicelevelToken: z.string().optional(),
            messages: z.array(z.any()).optional(),
            objectId: z.string(),
            shipment: z.string(),
            status: Status$.outboundSchema,
            transaction: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                carrierAccount: "carrier_account",
                servicelevelToken: "servicelevel_token",
                objectId: "object_id",
            });
        });
}
