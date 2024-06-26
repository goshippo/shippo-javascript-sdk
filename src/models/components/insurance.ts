/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * To have insurance cover provided by a carrier directly instead of Shippo's provider (XCover), set `provider` to `FEDEX`, `UPS`, or `ONTRAC`.
 */
export const Provider = {
    Fedex: "FEDEX",
    Ups: "UPS",
    Ontrac: "ONTRAC",
} as const;
/**
 * To have insurance cover provided by a carrier directly instead of Shippo's provider (XCover), set `provider` to `FEDEX`, `UPS`, or `ONTRAC`.
 */
export type Provider = ClosedEnum<typeof Provider>;

/**
 * To add 3rd party insurance powered by <a href="https://docs.goshippo.com/docs/shipments/shippinginsurance/">XCover</a>,
 *
 * @remarks
 * specify <br> `amount`, `content`, and `currency`. <br> Alternatively, you can choose carrier provided insurance
 * by additionally specifying `provider` (UPS, FedEx and OnTrac only). <br><br> If you do not want to add insurance
 * to your shipment, do not set these parameters.
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
    export const inboundSchema: z.ZodNativeEnum<typeof Provider> = z.nativeEnum(Provider);
    export const outboundSchema: z.ZodNativeEnum<typeof Provider> = inboundSchema;
}

/** @internal */
export namespace Insurance$ {
    export const inboundSchema: z.ZodType<Insurance, z.ZodTypeDef, unknown> = z.object({
        amount: z.string().optional(),
        content: z.string().optional(),
        currency: z.string().optional(),
        provider: Provider$.inboundSchema.optional(),
    });

    export type Outbound = {
        amount?: string | undefined;
        content?: string | undefined;
        currency?: string | undefined;
        provider?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Insurance> = z.object({
        amount: z.string().optional(),
        content: z.string().optional(),
        currency: z.string().optional(),
        provider: Provider$.outboundSchema.optional(),
    });
}
