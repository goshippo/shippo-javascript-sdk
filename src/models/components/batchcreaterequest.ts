/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import {
    BatchShipmentCreateRequest,
    BatchShipmentCreateRequest$,
} from "./batchshipmentcreaterequest";
import { LabelFileTypeEnum, LabelFileTypeEnum$ } from "./labelfiletypeenum";
import * as z from "zod";

export type BatchCreateRequest = {
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
    /**
     * Array of BatchShipment objects. The response keeps the same order as in the request array.
     */
    batchShipments: Array<BatchShipmentCreateRequest>;
};

/** @internal */
export namespace BatchCreateRequest$ {
    export const inboundSchema: z.ZodType<BatchCreateRequest, z.ZodTypeDef, unknown> = z
        .object({
            default_carrier_account: z.string(),
            default_servicelevel_token: z.string(),
            label_filetype: LabelFileTypeEnum$.inboundSchema.optional(),
            metadata: z.string().optional(),
            batch_shipments: z.array(BatchShipmentCreateRequest$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                default_carrier_account: "defaultCarrierAccount",
                default_servicelevel_token: "defaultServicelevelToken",
                label_filetype: "labelFiletype",
                batch_shipments: "batchShipments",
            });
        });

    export type Outbound = {
        default_carrier_account: string;
        default_servicelevel_token: string;
        label_filetype?: string | undefined;
        metadata?: string | undefined;
        batch_shipments: Array<BatchShipmentCreateRequest$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BatchCreateRequest> = z
        .object({
            defaultCarrierAccount: z.string(),
            defaultServicelevelToken: z.string(),
            labelFiletype: LabelFileTypeEnum$.outboundSchema.optional(),
            metadata: z.string().optional(),
            batchShipments: z.array(BatchShipmentCreateRequest$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                defaultCarrierAccount: "default_carrier_account",
                defaultServicelevelToken: "default_servicelevel_token",
                labelFiletype: "label_filetype",
                batchShipments: "batch_shipments",
            });
        });
}
