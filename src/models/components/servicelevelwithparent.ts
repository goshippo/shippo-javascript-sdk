/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * Used for some Service Levels to link to the more "generic" version of this Service Level - for example,
 *
 * @remarks
 * if this Service Level is a variation specific to shipments to Europe("ups_saver_eu"), the "parent" is
 * the fully generic version ("ups_saver"). Helpful when displaying Service Levels to users. Has the same
 * structure of the servicelevel - "name", "token", "terms", and "extended_token", or it is otherwise null.
 */
export type ParentServicelevel = {
    /**
     * Name of the Rate's servicelevel, e.g. `International Priority` or `Standard Post`.
     *
     * @remarks
     * A servicelevel commonly defines the transit time of a Shipment (e.g., Express vs. Standard), along with other properties.
     * These names vary depending on the provider.
     */
    name?: string | undefined;
    /**
     * Further clarification of the service.
     */
    terms?: string | undefined;
    /**
     * Token of the Rate's servicelevel, e.g. `usps_priority` or `fedex_ground`.
     *
     * @remarks
     * See <a href="#tag/Service-Levels">servicelevels</a>.
     */
    token?: string | undefined;
    /**
     * Unique, extended version of the Service Level "token".
     *
     * @remarks
     * Guaranteed to be unique across all Service Levels, and may help offer insight into the specific Service Level it describes.
     */
    extendedToken?: string | undefined;
};

/**
 * Contains details regarding the service level for the given rate.
 */
export type ServiceLevelWithParent = {
    /**
     * Name of the Rate's servicelevel, e.g. `International Priority` or `Standard Post`.
     *
     * @remarks
     * A servicelevel commonly defines the transit time of a Shipment (e.g., Express vs. Standard), along with other properties.
     * These names vary depending on the provider.
     */
    name?: string | undefined;
    /**
     * Further clarification of the service.
     */
    terms?: string | undefined;
    /**
     * Token of the Rate's servicelevel, e.g. `usps_priority` or `fedex_ground`.
     *
     * @remarks
     * See <a href="#tag/Service-Levels">servicelevels</a>.
     */
    token?: string | undefined;
    /**
     * Unique, extended version of the Service Level "token".
     *
     * @remarks
     * Guaranteed to be unique across all Service Levels, and may help offer insight into the specific Service Level it describes.
     */
    extendedToken?: string | undefined;
    parentServicelevel?: ParentServicelevel | undefined;
};

/** @internal */
export namespace ParentServicelevel$ {
    export const inboundSchema: z.ZodType<ParentServicelevel, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string().optional(),
            terms: z.string().optional(),
            token: z.string().optional(),
            extended_token: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                extended_token: "extendedToken",
            });
        });

    export type Outbound = {
        name?: string | undefined;
        terms?: string | undefined;
        token?: string | undefined;
        extended_token?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ParentServicelevel> = z
        .object({
            name: z.string().optional(),
            terms: z.string().optional(),
            token: z.string().optional(),
            extendedToken: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                extendedToken: "extended_token",
            });
        });
}

/** @internal */
export namespace ServiceLevelWithParent$ {
    export const inboundSchema: z.ZodType<ServiceLevelWithParent, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string().optional(),
            terms: z.string().optional(),
            token: z.string().optional(),
            extended_token: z.string().optional(),
            parent_servicelevel: z.lazy(() => ParentServicelevel$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                extended_token: "extendedToken",
                parent_servicelevel: "parentServicelevel",
            });
        });

    export type Outbound = {
        name?: string | undefined;
        terms?: string | undefined;
        token?: string | undefined;
        extended_token?: string | undefined;
        parent_servicelevel?: ParentServicelevel$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ServiceLevelWithParent> = z
        .object({
            name: z.string().optional(),
            terms: z.string().optional(),
            token: z.string().optional(),
            extendedToken: z.string().optional(),
            parentServicelevel: z.lazy(() => ParentServicelevel$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                extendedToken: "extended_token",
                parentServicelevel: "parent_servicelevel",
            });
        });
}
