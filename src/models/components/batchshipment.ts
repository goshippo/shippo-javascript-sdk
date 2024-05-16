/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BatchShipmentErrorMessage, BatchShipmentErrorMessage$ } from "./batchshipmenterrormessage";
import { ShipmentCreateRequest, ShipmentCreateRequest$ } from "./shipmentcreaterequest";
import * as z from "zod";

/**
 * `INVALID` batch shipments cannot be purchased and will have to be removed, fixed, and added to the batch again.<br>
 *
 * @remarks
 * `VALID` batch shipments can be purchased. <br>
 * Batch shipments with the status `TRANSACTION_FAILED` were not able to be purchased and the error will be displayed on the message field<br>
 * `INCOMPLETE` batch shipments have an issue with the Address and will need to be removed, fixed, and added to the batch again.
 */
export enum Status {
    Invalid = "INVALID",
    Valid = "VALID",
    Incomplete = "INCOMPLETE",
    TransactionFailed = "TRANSACTION_FAILED",
}

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
    shipment: ShipmentCreateRequest;
    /**
     * List of Shipment and Transaction error messages.
     */
    messages?: Array<BatchShipmentErrorMessage> | undefined;
    /**
     * Object ID of this batch shipment. Can be used in the remove_shipments endpoint.
     */
    objectId: string;
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
            shipment: ShipmentCreateRequest$.inboundSchema,
            messages: z.array(BatchShipmentErrorMessage$.inboundSchema).optional(),
            object_id: z.string(),
            status: Status$.inboundSchema,
            transaction: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.carrier_account === undefined ? null : { carrierAccount: v.carrier_account }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.servicelevel_token === undefined
                    ? null
                    : { servicelevelToken: v.servicelevel_token }),
                shipment: v.shipment,
                ...(v.messages === undefined ? null : { messages: v.messages }),
                objectId: v.object_id,
                status: v.status,
                ...(v.transaction === undefined ? null : { transaction: v.transaction }),
            };
        });

    export type Outbound = {
        carrier_account?: string | undefined;
        metadata?: string | undefined;
        servicelevel_token?: string | undefined;
        shipment: ShipmentCreateRequest$.Outbound;
        messages?: Array<BatchShipmentErrorMessage$.Outbound> | undefined;
        object_id: string;
        status: string;
        transaction?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BatchShipment> = z
        .object({
            carrierAccount: z.string().optional(),
            metadata: z.string().optional(),
            servicelevelToken: z.string().optional(),
            shipment: ShipmentCreateRequest$.outboundSchema,
            messages: z.array(BatchShipmentErrorMessage$.outboundSchema).optional(),
            objectId: z.string(),
            status: Status$.outboundSchema,
            transaction: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.carrierAccount === undefined ? null : { carrier_account: v.carrierAccount }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.servicelevelToken === undefined
                    ? null
                    : { servicelevel_token: v.servicelevelToken }),
                shipment: v.shipment,
                ...(v.messages === undefined ? null : { messages: v.messages }),
                object_id: v.objectId,
                status: v.status,
                ...(v.transaction === undefined ? null : { transaction: v.transaction }),
            };
        });
}
