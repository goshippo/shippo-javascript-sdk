/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { AddressCreateRequest, AddressCreateRequest$ } from "./addresscreaterequest.js";
import {
    CustomsDeclarationCreateRequest,
    CustomsDeclarationCreateRequest$,
} from "./customsdeclarationcreaterequest.js";
import {
    ParcelCreateFromTemplateRequest,
    ParcelCreateFromTemplateRequest$,
} from "./parcelcreatefromtemplaterequest.js";
import { ParcelCreateRequest, ParcelCreateRequest$ } from "./parcelcreaterequest.js";
import { ShipmentExtra, ShipmentExtra$ } from "./shipmentextra.js";
import * as z from "zod";

export type AddressFrom = AddressCreateRequest | string;

export type AddressReturn = AddressCreateRequest | string;

export type AddressTo = AddressCreateRequest | string;

export type ShipmentCreateRequestCustomsDeclaration = CustomsDeclarationCreateRequest | string;

export type Parcels = ParcelCreateFromTemplateRequest | ParcelCreateRequest | string;

export type ShipmentCreateRequest = {
    /**
     * An object holding optional extra services to be requested.
     */
    extra?: ShipmentExtra | undefined;
    /**
     * A string of up to 100 characters that can be filled with any additional information you want to attach to the object.
     */
    metadata?: string | undefined;
    /**
     * Date the shipment will be tendered to the carrier. Must be in the format `2014-01-18T00:35:03.463Z`.
     *
     * @remarks
     * Defaults to current date and time if no value is provided. Please note that some carriers require this value to
     * be in the future, on a working day, or similar.
     */
    shipmentDate?: string | undefined;
    addressFrom: AddressCreateRequest | string;
    addressReturn?: AddressCreateRequest | string | undefined;
    addressTo: AddressCreateRequest | string;
    customsDeclaration?: CustomsDeclarationCreateRequest | string | undefined;
    async?: boolean | undefined;
    /**
     * List of <a href="#tag/Carrier-Accounts/">Carrier Accounts</a> `object_id`s used to filter
     *
     * @remarks
     * the returned rates.  If set, only rates from these carriers will be returned.
     */
    carrierAccounts?: Array<string> | undefined;
    parcels: Array<ParcelCreateFromTemplateRequest | ParcelCreateRequest | string>;
};

/** @internal */
export namespace AddressFrom$ {
    export const inboundSchema: z.ZodType<AddressFrom, z.ZodTypeDef, unknown> = z.union([
        AddressCreateRequest$.inboundSchema,
        z.string(),
    ]);

    export type Outbound = AddressCreateRequest$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddressFrom> = z.union([
        AddressCreateRequest$.outboundSchema,
        z.string(),
    ]);
}

/** @internal */
export namespace AddressReturn$ {
    export const inboundSchema: z.ZodType<AddressReturn, z.ZodTypeDef, unknown> = z.union([
        AddressCreateRequest$.inboundSchema,
        z.string(),
    ]);

    export type Outbound = AddressCreateRequest$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddressReturn> = z.union([
        AddressCreateRequest$.outboundSchema,
        z.string(),
    ]);
}

/** @internal */
export namespace AddressTo$ {
    export const inboundSchema: z.ZodType<AddressTo, z.ZodTypeDef, unknown> = z.union([
        AddressCreateRequest$.inboundSchema,
        z.string(),
    ]);

    export type Outbound = AddressCreateRequest$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddressTo> = z.union([
        AddressCreateRequest$.outboundSchema,
        z.string(),
    ]);
}

/** @internal */
export namespace ShipmentCreateRequestCustomsDeclaration$ {
    export const inboundSchema: z.ZodType<
        ShipmentCreateRequestCustomsDeclaration,
        z.ZodTypeDef,
        unknown
    > = z.union([CustomsDeclarationCreateRequest$.inboundSchema, z.string()]);

    export type Outbound = CustomsDeclarationCreateRequest$.Outbound | string;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ShipmentCreateRequestCustomsDeclaration
    > = z.union([CustomsDeclarationCreateRequest$.outboundSchema, z.string()]);
}

/** @internal */
export namespace Parcels$ {
    export const inboundSchema: z.ZodType<Parcels, z.ZodTypeDef, unknown> = z.union([
        ParcelCreateFromTemplateRequest$.inboundSchema,
        ParcelCreateRequest$.inboundSchema,
        z.string(),
    ]);

    export type Outbound =
        | ParcelCreateFromTemplateRequest$.Outbound
        | ParcelCreateRequest$.Outbound
        | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Parcels> = z.union([
        ParcelCreateFromTemplateRequest$.outboundSchema,
        ParcelCreateRequest$.outboundSchema,
        z.string(),
    ]);
}

/** @internal */
export namespace ShipmentCreateRequest$ {
    export const inboundSchema: z.ZodType<ShipmentCreateRequest, z.ZodTypeDef, unknown> = z
        .object({
            extra: ShipmentExtra$.inboundSchema.optional(),
            metadata: z.string().optional(),
            shipment_date: z.string().optional(),
            address_from: z.union([AddressCreateRequest$.inboundSchema, z.string()]),
            address_return: z.union([AddressCreateRequest$.inboundSchema, z.string()]).optional(),
            address_to: z.union([AddressCreateRequest$.inboundSchema, z.string()]),
            customs_declaration: z
                .union([CustomsDeclarationCreateRequest$.inboundSchema, z.string()])
                .optional(),
            async: z.boolean().optional(),
            carrier_accounts: z.array(z.string()).optional(),
            parcels: z.array(
                z.union([
                    ParcelCreateFromTemplateRequest$.inboundSchema,
                    ParcelCreateRequest$.inboundSchema,
                    z.string(),
                ])
            ),
        })
        .transform((v) => {
            return remap$(v, {
                shipment_date: "shipmentDate",
                address_from: "addressFrom",
                address_return: "addressReturn",
                address_to: "addressTo",
                customs_declaration: "customsDeclaration",
                carrier_accounts: "carrierAccounts",
            });
        });

    export type Outbound = {
        extra?: ShipmentExtra$.Outbound | undefined;
        metadata?: string | undefined;
        shipment_date?: string | undefined;
        address_from: AddressCreateRequest$.Outbound | string;
        address_return?: AddressCreateRequest$.Outbound | string | undefined;
        address_to: AddressCreateRequest$.Outbound | string;
        customs_declaration?: CustomsDeclarationCreateRequest$.Outbound | string | undefined;
        async?: boolean | undefined;
        carrier_accounts?: Array<string> | undefined;
        parcels: Array<
            ParcelCreateFromTemplateRequest$.Outbound | ParcelCreateRequest$.Outbound | string
        >;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ShipmentCreateRequest> = z
        .object({
            extra: ShipmentExtra$.outboundSchema.optional(),
            metadata: z.string().optional(),
            shipmentDate: z.string().optional(),
            addressFrom: z.union([AddressCreateRequest$.outboundSchema, z.string()]),
            addressReturn: z.union([AddressCreateRequest$.outboundSchema, z.string()]).optional(),
            addressTo: z.union([AddressCreateRequest$.outboundSchema, z.string()]),
            customsDeclaration: z
                .union([CustomsDeclarationCreateRequest$.outboundSchema, z.string()])
                .optional(),
            async: z.boolean().optional(),
            carrierAccounts: z.array(z.string()).optional(),
            parcels: z.array(
                z.union([
                    ParcelCreateFromTemplateRequest$.outboundSchema,
                    ParcelCreateRequest$.outboundSchema,
                    z.string(),
                ])
            ),
        })
        .transform((v) => {
            return remap$(v, {
                shipmentDate: "shipment_date",
                addressFrom: "address_from",
                addressReturn: "address_return",
                addressTo: "address_to",
                customsDeclaration: "customs_declaration",
                carrierAccounts: "carrier_accounts",
            });
        });
}
