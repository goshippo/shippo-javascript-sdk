/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import {
    AddressCompleteCreateRequest,
    AddressCompleteCreateRequest$,
} from "./addresscompletecreaterequest";
import { LineItem, LineItem$ } from "./lineitem";
import { Parcel, Parcel$ } from "./parcel";
import * as z from "zod";

/**
 * The sender address, which includes your name, company name, street address, city, state, zip code,
 *
 * @remarks
 * country, phone number, and email address (strings). Special characters should not be included in
 * any address element, especially name, company, and email.
 */
export type LiveRateCreateRequestAddressFrom = AddressCompleteCreateRequest | string;

/**
 * The recipient address, which includes the recipient's name, company name, street address, city, state, zip code,
 *
 * @remarks
 * country, phone number, and email address (strings). Special characters should not be included in
 * any address element, especially name, company, and email.
 */
export type LiveRateCreateRequestAddressTo = AddressCompleteCreateRequest | string;

/**
 * Object ID for an existing User Parcel Template OR a fully formed Parcel object.
 */
export type LiveRateCreateRequestParcel = Parcel | string;

export type LiveRateCreateRequest = {
    /**
     * The sender address, which includes your name, company name, street address, city, state, zip code,
     *
     * @remarks
     * country, phone number, and email address (strings). Special characters should not be included in
     * any address element, especially name, company, and email.
     */
    addressFrom?: AddressCompleteCreateRequest | string | undefined;
    /**
     * The recipient address, which includes the recipient's name, company name, street address, city, state, zip code,
     *
     * @remarks
     * country, phone number, and email address (strings). Special characters should not be included in
     * any address element, especially name, company, and email.
     */
    addressTo: AddressCompleteCreateRequest | string;
    /**
     * Array of Line Item objects
     */
    lineItems: Array<LineItem>;
    /**
     * Object ID for an existing User Parcel Template OR a fully formed Parcel object.
     */
    parcel?: Parcel | string | undefined;
};

/** @internal */
export namespace LiveRateCreateRequestAddressFrom$ {
    export const inboundSchema: z.ZodType<LiveRateCreateRequestAddressFrom, z.ZodTypeDef, unknown> =
        z.union([AddressCompleteCreateRequest$.inboundSchema, z.string()]);

    export type Outbound = AddressCompleteCreateRequest$.Outbound | string;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        LiveRateCreateRequestAddressFrom
    > = z.union([AddressCompleteCreateRequest$.outboundSchema, z.string()]);
}

/** @internal */
export namespace LiveRateCreateRequestAddressTo$ {
    export const inboundSchema: z.ZodType<LiveRateCreateRequestAddressTo, z.ZodTypeDef, unknown> =
        z.union([AddressCompleteCreateRequest$.inboundSchema, z.string()]);

    export type Outbound = AddressCompleteCreateRequest$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LiveRateCreateRequestAddressTo> =
        z.union([AddressCompleteCreateRequest$.outboundSchema, z.string()]);
}

/** @internal */
export namespace LiveRateCreateRequestParcel$ {
    export const inboundSchema: z.ZodType<LiveRateCreateRequestParcel, z.ZodTypeDef, unknown> =
        z.union([Parcel$.inboundSchema, z.string()]);

    export type Outbound = Parcel$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LiveRateCreateRequestParcel> =
        z.union([Parcel$.outboundSchema, z.string()]);
}

/** @internal */
export namespace LiveRateCreateRequest$ {
    export const inboundSchema: z.ZodType<LiveRateCreateRequest, z.ZodTypeDef, unknown> = z
        .object({
            address_from: z
                .union([AddressCompleteCreateRequest$.inboundSchema, z.string()])
                .optional(),
            address_to: z.union([AddressCompleteCreateRequest$.inboundSchema, z.string()]),
            line_items: z.array(LineItem$.inboundSchema),
            parcel: z.union([Parcel$.inboundSchema, z.string()]).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                address_from: "addressFrom",
                address_to: "addressTo",
                line_items: "lineItems",
            });
        });

    export type Outbound = {
        address_from?: AddressCompleteCreateRequest$.Outbound | string | undefined;
        address_to: AddressCompleteCreateRequest$.Outbound | string;
        line_items: Array<LineItem$.Outbound>;
        parcel?: Parcel$.Outbound | string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LiveRateCreateRequest> = z
        .object({
            addressFrom: z
                .union([AddressCompleteCreateRequest$.outboundSchema, z.string()])
                .optional(),
            addressTo: z.union([AddressCompleteCreateRequest$.outboundSchema, z.string()]),
            lineItems: z.array(LineItem$.outboundSchema),
            parcel: z.union([Parcel$.outboundSchema, z.string()]).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                addressFrom: "address_from",
                addressTo: "address_to",
                lineItems: "line_items",
            });
        });
}
