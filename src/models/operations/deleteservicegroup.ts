/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteServiceGroupRequest = {
    /**
     * Object ID of the service group
     */
    serviceGroupId: string;
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type DeleteServiceGroupResponse = {};

/** @internal */
export namespace DeleteServiceGroupRequest$ {
    export type Inbound = {
        ServiceGroupId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteServiceGroupRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ServiceGroupId: z.string(),
            "SHIPPO-API-VERSION": z.string().optional(),
        })
        .transform((v) => {
            return {
                serviceGroupId: v.ServiceGroupId,
                ...(v["SHIPPO-API-VERSION"] === undefined
                    ? null
                    : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
            };
        });

    export type Outbound = {
        ServiceGroupId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteServiceGroupRequest> = z
        .object({
            serviceGroupId: z.string(),
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                ServiceGroupId: v.serviceGroupId,
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}

/** @internal */
export namespace DeleteServiceGroupResponse$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeleteServiceGroupResponse, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteServiceGroupResponse> =
        z.object({});
}
