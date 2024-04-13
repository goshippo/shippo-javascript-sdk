/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type CreateUserParcelTemplateRequest = {
    /**
     * String used to pick a non-default API version to use
     */
    shippoApiVersion?: string | undefined;
    userParcelTemplateCreateRequest?: components.UserParcelTemplateCreateRequest | undefined;
};

/** @internal */
export namespace CreateUserParcelTemplateRequest$ {
    export type Inbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
        UserParcelTemplateCreateRequest?:
            | components.UserParcelTemplateCreateRequest$.Inbound
            | undefined;
    };

    export const inboundSchema: z.ZodType<CreateUserParcelTemplateRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                "SHIPPO-API-VERSION": z.string().optional(),
                UserParcelTemplateCreateRequest:
                    components.UserParcelTemplateCreateRequest$.inboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    ...(v["SHIPPO-API-VERSION"] === undefined
                        ? null
                        : { shippoApiVersion: v["SHIPPO-API-VERSION"] }),
                    ...(v.UserParcelTemplateCreateRequest === undefined
                        ? null
                        : { userParcelTemplateCreateRequest: v.UserParcelTemplateCreateRequest }),
                };
            });

    export type Outbound = {
        "SHIPPO-API-VERSION"?: string | undefined;
        UserParcelTemplateCreateRequest?:
            | components.UserParcelTemplateCreateRequest$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateUserParcelTemplateRequest
    > = z
        .object({
            shippoApiVersion: z.string().optional(),
            userParcelTemplateCreateRequest:
                components.UserParcelTemplateCreateRequest$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.shippoApiVersion === undefined
                    ? null
                    : { "SHIPPO-API-VERSION": v.shippoApiVersion }),
                ...(v.userParcelTemplateCreateRequest === undefined
                    ? null
                    : { UserParcelTemplateCreateRequest: v.userParcelTemplateCreateRequest }),
            };
        });
}
