/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteUserParcelTemplateRequest = {
    /**
     * Object ID of the user parcel template
     */
    userParcelTemplateObjectId: string;
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
};

export type DeleteUserParcelTemplateResponse = {};

/** @internal */
export namespace DeleteUserParcelTemplateRequest$ {
    export type Inbound = {
        UserParcelTemplateObjectId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteUserParcelTemplateRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                UserParcelTemplateObjectId: z.string(),
                "SHIPPO-API-VERSION": z.string().optional(),
            })
            .transform((v) => {
                return {
                    userParcelTemplateObjectId: v.UserParcelTemplateObjectId,
                    ...(v["SHIPPO-API-VERSION"] === undefined
                        ? null
                        : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
                };
            });

    export type Outbound = {
        UserParcelTemplateObjectId: string;
        "SHIPPO-API-VERSION"?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteUserParcelTemplateRequest
    > = z
        .object({
            userParcelTemplateObjectId: z.string(),
            shippoApiVersion: z.string().optional(),
        })
        .transform((v) => {
            return {
                UserParcelTemplateObjectId: v.userParcelTemplateObjectId,
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
            };
        });
}

/** @internal */
export namespace DeleteUserParcelTemplateResponse$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeleteUserParcelTemplateResponse, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteUserParcelTemplateResponse
    > = z.object({});
}
