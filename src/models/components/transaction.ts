/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { CoreRate, CoreRate$ } from "./corerate";
import { LabelFileTypeEnum, LabelFileTypeEnum$ } from "./labelfiletypeenum";
import { ObjectStateEnum, ObjectStateEnum$ } from "./objectstateenum";
import { ResponseMessage, ResponseMessage$ } from "./responsemessage";
import { TrackingStatusEnum, TrackingStatusEnum$ } from "./trackingstatusenum";
import { TransactionStatusEnum, TransactionStatusEnum$ } from "./transactionstatusenum";
import * as z from "zod";

/**
 * ID of the Rate object for which a Label has to be obtained.
 *
 * @remarks
 * If you purchase a label by calling the transaction endpoint without a rate (instalabel),
 * this field will be a simplified Rate object in the Transaction model returned from the POST request.
 * </br>Note, only rates less than 7 days old can be purchased to ensure up-to-date pricing.
 */
export type TransactionRate = CoreRate | string;

export type Transaction = {
    /**
     * A URL pointing to the commercial invoice as a 8.5x11 inch PDF file.
     *
     * @remarks
     * A value will only be returned if the Transactions has been processed successfully and if the shipment is international.
     */
    commercialInvoiceUrl?: string | undefined;
    /**
     * The estimated time of arrival according to the carrier.
     */
    eta?: string | undefined;
    /**
     * Print format of the <a href="https://docs.goshippo.com/docs/shipments/shippinglabelsizes/">label</a>. If empty, will use the default format set from
     *
     * @remarks
     * <a href="https://apps.goshippo.com/settings/labels">the Shippo dashboard.</a>
     */
    labelFileType?: LabelFileTypeEnum | undefined;
    /**
     * A URL pointing directly to the label in the format you've set in your settings.
     *
     * @remarks
     * A value will only be returned if the Transactions has been processed successfully.
     */
    labelUrl?: string | undefined;
    messages?: Array<ResponseMessage> | undefined;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want to
     *
     * @remarks
     * attach to the object.
     */
    metadata?: string | undefined;
    /**
     * Date and time of Transaction creation.
     */
    objectCreated?: Date | undefined;
    /**
     * Unique identifier of the given Transaction object.
     */
    objectId?: string | undefined;
    /**
     * Username of the user who created the Transaction object.
     */
    objectOwner?: string | undefined;
    /**
     * Indicates the validity of the enclosing object
     */
    objectState?: ObjectStateEnum | undefined;
    /**
     * Date and time of last Transaction update.
     */
    objectUpdated?: Date | undefined;
    /**
     * A URL pointing directly to the QR code in PNG format.
     *
     * @remarks
     * A value will only be returned if requested using qr_code_requested flag and the carrier provides such an option.
     */
    qrCodeUrl?: string | undefined;
    /**
     * ID of the Rate object for which a Label has to be obtained.
     *
     * @remarks
     * If you purchase a label by calling the transaction endpoint without a rate (instalabel),
     * this field will be a simplified Rate object in the Transaction model returned from the POST request.
     * </br>Note, only rates less than 7 days old can be purchased to ensure up-to-date pricing.
     */
    rate?: CoreRate | string | undefined;
    /**
     * Indicates the status of the Transaction.
     */
    status?: TransactionStatusEnum | undefined;
    /**
     * Indicates whether the object has been created in test mode.
     */
    test?: boolean | undefined;
    /**
     * The carrier-specific tracking number that can be used to track the Shipment.
     *
     * @remarks
     * A value will only be returned if the Rate is for a trackable Shipment and if the Transactions has been processed successfully.
     */
    trackingNumber?: string | undefined;
    /**
     * Indicates the high level status of the shipment.
     */
    trackingStatus?: TrackingStatusEnum | undefined;
    /**
     * A link to track this item on the carrier-provided tracking website.
     *
     * @remarks
     * A value will only be returned if tracking is available and the carrier provides such a service.
     */
    trackingUrlProvider?: string | undefined;
};

/** @internal */
export namespace TransactionRate$ {
    export const inboundSchema: z.ZodType<TransactionRate, z.ZodTypeDef, unknown> = z.union([
        CoreRate$.inboundSchema,
        z.string(),
    ]);

    export type Outbound = CoreRate$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TransactionRate> = z.union([
        CoreRate$.outboundSchema,
        z.string(),
    ]);
}

/** @internal */
export namespace Transaction$ {
    export const inboundSchema: z.ZodType<Transaction, z.ZodTypeDef, unknown> = z
        .object({
            commercial_invoice_url: z.string().optional(),
            eta: z.string().optional(),
            label_file_type: LabelFileTypeEnum$.inboundSchema.optional(),
            label_url: z.string().optional(),
            messages: z.array(ResponseMessage$.inboundSchema).optional(),
            metadata: z.string().optional(),
            object_created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            object_id: z.string().optional(),
            object_owner: z.string().optional(),
            object_state: ObjectStateEnum$.inboundSchema.optional(),
            object_updated: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            qr_code_url: z.string().optional(),
            rate: z.union([CoreRate$.inboundSchema, z.string()]).optional(),
            status: TransactionStatusEnum$.inboundSchema.optional(),
            test: z.boolean().optional(),
            tracking_number: z.string().optional(),
            tracking_status: TrackingStatusEnum$.inboundSchema.optional(),
            tracking_url_provider: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                commercial_invoice_url: "commercialInvoiceUrl",
                label_file_type: "labelFileType",
                label_url: "labelUrl",
                object_created: "objectCreated",
                object_id: "objectId",
                object_owner: "objectOwner",
                object_state: "objectState",
                object_updated: "objectUpdated",
                qr_code_url: "qrCodeUrl",
                tracking_number: "trackingNumber",
                tracking_status: "trackingStatus",
                tracking_url_provider: "trackingUrlProvider",
            });
        });

    export type Outbound = {
        commercial_invoice_url?: string | undefined;
        eta?: string | undefined;
        label_file_type?: string | undefined;
        label_url?: string | undefined;
        messages?: Array<ResponseMessage$.Outbound> | undefined;
        metadata?: string | undefined;
        object_created?: string | undefined;
        object_id?: string | undefined;
        object_owner?: string | undefined;
        object_state?: string | undefined;
        object_updated?: string | undefined;
        qr_code_url?: string | undefined;
        rate?: CoreRate$.Outbound | string | undefined;
        status?: string | undefined;
        test?: boolean | undefined;
        tracking_number?: string | undefined;
        tracking_status?: string | undefined;
        tracking_url_provider?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Transaction> = z
        .object({
            commercialInvoiceUrl: z.string().optional(),
            eta: z.string().optional(),
            labelFileType: LabelFileTypeEnum$.outboundSchema.optional(),
            labelUrl: z.string().optional(),
            messages: z.array(ResponseMessage$.outboundSchema).optional(),
            metadata: z.string().optional(),
            objectCreated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            objectId: z.string().optional(),
            objectOwner: z.string().optional(),
            objectState: ObjectStateEnum$.outboundSchema.optional(),
            objectUpdated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            qrCodeUrl: z.string().optional(),
            rate: z.union([CoreRate$.outboundSchema, z.string()]).optional(),
            status: TransactionStatusEnum$.outboundSchema.optional(),
            test: z.boolean().optional(),
            trackingNumber: z.string().optional(),
            trackingStatus: TrackingStatusEnum$.outboundSchema.optional(),
            trackingUrlProvider: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                commercialInvoiceUrl: "commercial_invoice_url",
                labelFileType: "label_file_type",
                labelUrl: "label_url",
                objectCreated: "object_created",
                objectId: "object_id",
                objectOwner: "object_owner",
                objectState: "object_state",
                objectUpdated: "object_updated",
                qrCodeUrl: "qr_code_url",
                trackingNumber: "tracking_number",
                trackingStatus: "tracking_status",
                trackingUrlProvider: "tracking_url_provider",
            });
        });
}
