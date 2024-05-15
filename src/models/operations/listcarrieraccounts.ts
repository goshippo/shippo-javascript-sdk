/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type ListCarrierAccountsRequest = {
    /**
     * Appends the property `service_levels` to each returned carrier account
     */
    serviceLevels?: boolean | undefined;
    /**
     * Filter the response by the specified carrier
     */
    carrier?: components.CarriersEnum | undefined;
    /**
     * Filter the response by the specified carrier account Id
     */
    accountId?: string | undefined;
    /**
     * The page number you want to select
     */
    page?: number | undefined;
    /**
     * The number of results to return per page (max 100, default 5)
     */
    results?: number | undefined;
};

/** @internal */
export namespace ListCarrierAccountsRequest$ {
    export const inboundSchema: z.ZodType<ListCarrierAccountsRequest, z.ZodTypeDef, unknown> = z
        .object({
            service_levels: z.boolean().optional(),
            carrier: components.CarriersEnum$.inboundSchema.optional(),
            account_id: z.string().optional(),
            page: z.number().int().default(1),
            results: z.number().int().default(5),
        })
        .transform((v) => {
            return {
                ...(v.service_levels === undefined ? null : { serviceLevels: v.service_levels }),
                ...(v.carrier === undefined ? null : { carrier: v.carrier }),
                ...(v.account_id === undefined ? null : { accountId: v.account_id }),
                page: v.page,
                results: v.results,
            };
        });

    export type Outbound = {
        service_levels?: boolean | undefined;
        carrier?: string | undefined;
        account_id?: string | undefined;
        page: number;
        results: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListCarrierAccountsRequest> = z
        .object({
            serviceLevels: z.boolean().optional(),
            carrier: components.CarriersEnum$.outboundSchema.optional(),
            accountId: z.string().optional(),
            page: z.number().int().default(1),
            results: z.number().int().default(5),
        })
        .transform((v) => {
            return {
                ...(v.serviceLevels === undefined ? null : { service_levels: v.serviceLevels }),
                ...(v.carrier === undefined ? null : { carrier: v.carrier }),
                ...(v.accountId === undefined ? null : { account_id: v.accountId }),
                page: v.page,
                results: v.results,
            };
        });
}
