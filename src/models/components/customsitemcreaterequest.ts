/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { WeightUnitEnum, WeightUnitEnum$ } from "./weightunitenum";
import * as z from "zod";

export type CustomsItemCreateRequest = {
    /**
     * Text description of your item.
     */
    description: string;
    /**
     * Export Control Classification Number, required on some exports from the United States.
     */
    eccnEar99?: string | undefined;
    /**
     * The unit used for weight.
     */
    massUnit: WeightUnitEnum;
    /**
     * A string of up to 100 characters that can be filled with any additional information you
     *
     * @remarks
     * want to attach to the object.
     */
    metadata?: string | undefined;
    /**
     * Total weight of this item, i.e. quantity * weight per item.
     */
    netWeight: string;
    /**
     * Country of origin of the item. Example: `US` or `DE`.
     *
     * @remarks
     * All accepted values can be found on the <a href="http://www.iso.org/" target="_blank">Official ISO Website</a>.
     */
    originCountry: string;
    /**
     * Quantity of this item in the shipment you send.  Must be greater than 0.
     */
    quantity: number;
    /**
     * SKU code of the item, which is required by some carriers.
     */
    skuCode?: string | undefined;
    /**
     * HS code of the item, which is required by some carriers.
     */
    hsCode?: string | undefined;
    /**
     * The tariff number of the item.
     */
    tariffNumber?: string | undefined;
    /**
     * Total value of this item, i.e. quantity * value per item.
     */
    valueAmount: string;
    /**
     * Currency used for value_amount. The <a href="http://www.xe.com/iso4217.php">official ISO 4217</a>
     *
     * @remarks
     * currency codes are used, e.g.  `USD` or `EUR`.
     */
    valueCurrency: string;
};

/** @internal */
export namespace CustomsItemCreateRequest$ {
    export const inboundSchema: z.ZodType<CustomsItemCreateRequest, z.ZodTypeDef, unknown> = z
        .object({
            description: z.string(),
            eccn_ear99: z.string().optional(),
            mass_unit: WeightUnitEnum$.inboundSchema,
            metadata: z.string().optional(),
            net_weight: z.string(),
            origin_country: z.string(),
            quantity: z.number().int(),
            sku_code: z.string().optional(),
            hs_code: z.string().optional(),
            tariff_number: z.string().optional(),
            value_amount: z.string(),
            value_currency: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                eccn_ear99: "eccnEar99",
                mass_unit: "massUnit",
                net_weight: "netWeight",
                origin_country: "originCountry",
                sku_code: "skuCode",
                hs_code: "hsCode",
                tariff_number: "tariffNumber",
                value_amount: "valueAmount",
                value_currency: "valueCurrency",
            });
        });

    export type Outbound = {
        description: string;
        eccn_ear99?: string | undefined;
        mass_unit: string;
        metadata?: string | undefined;
        net_weight: string;
        origin_country: string;
        quantity: number;
        sku_code?: string | undefined;
        hs_code?: string | undefined;
        tariff_number?: string | undefined;
        value_amount: string;
        value_currency: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CustomsItemCreateRequest> = z
        .object({
            description: z.string(),
            eccnEar99: z.string().optional(),
            massUnit: WeightUnitEnum$.outboundSchema,
            metadata: z.string().optional(),
            netWeight: z.string(),
            originCountry: z.string(),
            quantity: z.number().int(),
            skuCode: z.string().optional(),
            hsCode: z.string().optional(),
            tariffNumber: z.string().optional(),
            valueAmount: z.string(),
            valueCurrency: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                eccnEar99: "eccn_ear99",
                massUnit: "mass_unit",
                netWeight: "net_weight",
                originCountry: "origin_country",
                skuCode: "sku_code",
                hsCode: "hs_code",
                tariffNumber: "tariff_number",
                valueAmount: "value_amount",
                valueCurrency: "value_currency",
            });
        });
}
