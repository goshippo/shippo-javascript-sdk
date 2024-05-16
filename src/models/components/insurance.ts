/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * To have insurance cover provided by a carrier directly instead of Shippo's provider (XCover), set `provider` to `FEDEX`, `UPS`, or `ONTRAC`.
 */
export enum Provider {
    Fedex = "FEDEX",
    Ups = "UPS",
    Ontrac = "ONTRAC",
}

/**
 * To add 3rd party insurance powered by <a href="https://docs.goshippo.com/docs/shipments/shippinginsurance/">XCover</a>, specify <br> `amount`, `content`, and `currency`. <br> Alternatively, you can choose carrier provided insurance by additionally specifying `provider` (UPS, FedEx and OnTrac only). <br><br> If you do not want to add insurance to you shipment, do not set these parameters.
 */
export type Insurance = {
    /**
     * Declared value of the goods you want to insure.
     */
    amount?: string | undefined;
    /**
     * Description of package content.
     */
    content?: string | undefined;
    /**
     * Currency for the amount value.
     *
     * @remarks
     * Currently only USD is supported for FedEx and UPS.
     */
    currency?: string | undefined;
    /**
     * To have insurance cover provided by a carrier directly instead of Shippo's provider (XCover), set `provider` to `FEDEX`, `UPS`, or `ONTRAC`.
     */
    provider?: Provider | undefined;
};

/** @internal */
export namespace Provider$ {
    export const inboundSchema = z.nativeEnum(Provider);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Insurance$ {
    export const inboundSchema: z.ZodType<Insurance, z.ZodTypeDef, unknown> = z
        .object({
            amount: z.string().optional(),
            content: z.string().optional(),
            currency: z.string().optional(),
            provider: Provider$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.provider === undefined ? null : { provider: v.provider }),
            };
        });

    export type Outbound = {
        amount?: string | undefined;
        content?: string | undefined;
        currency?: string | undefined;
        provider?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Insurance> = z
        .object({
            amount: z.string().optional(),
            content: z.string().optional(),
            currency: z.string().optional(),
            provider: Provider$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.provider === undefined ? null : { provider: v.provider }),
            };
        });
}
