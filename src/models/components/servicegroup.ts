/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ServiceGroupTypeEnum, ServiceGroupTypeEnum$ } from "./servicegrouptypeenum";
import { ServiceLevel, ServiceLevel$ } from "./servicelevel";
import * as z from "zod";

export type ServiceGroup = {
    /**
     * Description for the service group
     */
    description: string;
    /**
     * String representation of an amount to be returned as the flat rate
     *
     * @remarks
     * if 1. The service group is of type `LIVE_RATE` and no matching rates
     * were found; or 2. The service group is of type `FLAT_RATE`. Either
     * integers or decimals are accepted. Required unless type is
     * `FREE_SHIPPING`
     */
    flatRate?: string | undefined;
    /**
     * required unless type is `FREE_SHIPPING`. (ISO 4217 currency)
     */
    flatRateCurrency?: string | undefined;
    /**
     * optional unless type is `FREE_SHIPPING`. (ISO 4217 currency)
     */
    freeShippingThresholdCurrency?: string | undefined;
    /**
     * For service groups of type `FREE_SHIPPING`, this field must be required to configure the minimum cart total (total cost of items in the cart) for this service group to be returned for rates at checkout. Optional unless type is `FREE_SHIPPING`
     */
    freeShippingThresholdMin?: string | undefined;
    /**
     * Name for the service group that will be shown to customers in the response
     */
    name: string;
    /**
     * The amount in percent (%) that the service group's returned rate should be adjusted. For example, if this field is set to 5 and the matched rate price is $5.00, the returned value of the service group will be $5.25. Negative integers are also accepted and will discount the rate price by the defined percentage amount.
     */
    rateAdjustment?: number | undefined;
    /**
     * The type of the service group.<br> `LIVE_RATE` - Shippo will make a rating request and return real-time rates for the shipping group, only falling back to the specified flat rate amount if no rates match a service level in the service group.<br> `FLAT_RATE` - Returns a shipping option with the specified flat rate amount.<br> `FREE_SHIPPING` - Returns a shipping option with a price of $0 only if the total cost of items exceeds the amount defined by `free_shipping_threshold_min`
     */
    type: ServiceGroupTypeEnum;
    /**
     * The unique identifier of the given Service Group object.
     */
    objectId: string;
    /**
     * True if the service group is enabled, false otherwise.
     */
    isActive?: boolean | undefined;
    serviceLevels: Array<ServiceLevel>;
};

/** @internal */
export namespace ServiceGroup$ {
    export type Inbound = {
        description: string;
        flat_rate?: string | undefined;
        flat_rate_currency?: string | undefined;
        free_shipping_threshold_currency?: string | undefined;
        free_shipping_threshold_min?: string | undefined;
        name: string;
        rate_adjustment?: number | undefined;
        type: ServiceGroupTypeEnum;
        object_id: string;
        is_active?: boolean | undefined;
        service_levels: Array<ServiceLevel$.Inbound>;
    };

    export const inboundSchema: z.ZodType<ServiceGroup, z.ZodTypeDef, Inbound> = z
        .object({
            description: z.string(),
            flat_rate: z.string().optional(),
            flat_rate_currency: z.string().optional(),
            free_shipping_threshold_currency: z.string().optional(),
            free_shipping_threshold_min: z.string().optional(),
            name: z.string(),
            rate_adjustment: z.number().int().optional(),
            type: ServiceGroupTypeEnum$,
            object_id: z.string(),
            is_active: z.boolean().optional(),
            service_levels: z.array(ServiceLevel$.inboundSchema),
        })
        .transform((v) => {
            return {
                description: v.description,
                ...(v.flat_rate === undefined ? null : { flatRate: v.flat_rate }),
                ...(v.flat_rate_currency === undefined
                    ? null
                    : { flatRateCurrency: v.flat_rate_currency }),
                ...(v.free_shipping_threshold_currency === undefined
                    ? null
                    : { freeShippingThresholdCurrency: v.free_shipping_threshold_currency }),
                ...(v.free_shipping_threshold_min === undefined
                    ? null
                    : { freeShippingThresholdMin: v.free_shipping_threshold_min }),
                name: v.name,
                ...(v.rate_adjustment === undefined ? null : { rateAdjustment: v.rate_adjustment }),
                type: v.type,
                objectId: v.object_id,
                ...(v.is_active === undefined ? null : { isActive: v.is_active }),
                serviceLevels: v.service_levels,
            };
        });

    export type Outbound = {
        description: string;
        flat_rate?: string | undefined;
        flat_rate_currency?: string | undefined;
        free_shipping_threshold_currency?: string | undefined;
        free_shipping_threshold_min?: string | undefined;
        name: string;
        rate_adjustment?: number | undefined;
        type: ServiceGroupTypeEnum;
        object_id: string;
        is_active?: boolean | undefined;
        service_levels: Array<ServiceLevel$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ServiceGroup> = z
        .object({
            description: z.string(),
            flatRate: z.string().optional(),
            flatRateCurrency: z.string().optional(),
            freeShippingThresholdCurrency: z.string().optional(),
            freeShippingThresholdMin: z.string().optional(),
            name: z.string(),
            rateAdjustment: z.number().int().optional(),
            type: ServiceGroupTypeEnum$,
            objectId: z.string(),
            isActive: z.boolean().optional(),
            serviceLevels: z.array(ServiceLevel$.outboundSchema),
        })
        .transform((v) => {
            return {
                description: v.description,
                ...(v.flatRate === undefined ? null : { flat_rate: v.flatRate }),
                ...(v.flatRateCurrency === undefined
                    ? null
                    : { flat_rate_currency: v.flatRateCurrency }),
                ...(v.freeShippingThresholdCurrency === undefined
                    ? null
                    : { free_shipping_threshold_currency: v.freeShippingThresholdCurrency }),
                ...(v.freeShippingThresholdMin === undefined
                    ? null
                    : { free_shipping_threshold_min: v.freeShippingThresholdMin }),
                name: v.name,
                ...(v.rateAdjustment === undefined ? null : { rate_adjustment: v.rateAdjustment }),
                type: v.type,
                object_id: v.objectId,
                ...(v.isActive === undefined ? null : { is_active: v.isActive }),
                service_levels: v.serviceLevels,
            };
        });
}
