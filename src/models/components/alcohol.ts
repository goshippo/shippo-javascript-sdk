/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Mandatory for Fedex only. License type of the recipient of the Alcohol Package.
 */
export enum RecipientType {
    Licensee = "licensee",
    Consumer = "consumer",
}

/**
 * Indicates that a shipment contains Alcohol (Fedex and UPS only).
 */
export type Alcohol = {
    /**
     * Mandatory for Fedex and UPS. Specifies that the package contains Alcohol.
     */
    containsAlcohol?: boolean | undefined;
    /**
     * Mandatory for Fedex only. License type of the recipient of the Alcohol Package.
     */
    recipientType?: RecipientType | undefined;
};

/** @internal */
export const RecipientType$: z.ZodNativeEnum<typeof RecipientType> = z.nativeEnum(RecipientType);

/** @internal */
export namespace Alcohol$ {
    export type Inbound = {
        contains_alcohol?: boolean | undefined;
        recipient_type?: RecipientType | undefined;
    };

    export const inboundSchema: z.ZodType<Alcohol, z.ZodTypeDef, Inbound> = z
        .object({
            contains_alcohol: z.boolean().optional(),
            recipient_type: RecipientType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.contains_alcohol === undefined
                    ? null
                    : { containsAlcohol: v.contains_alcohol }),
                ...(v.recipient_type === undefined ? null : { recipientType: v.recipient_type }),
            };
        });

    export type Outbound = {
        contains_alcohol?: boolean | undefined;
        recipient_type?: RecipientType | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Alcohol> = z
        .object({
            containsAlcohol: z.boolean().optional(),
            recipientType: RecipientType$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.containsAlcohol === undefined
                    ? null
                    : { contains_alcohol: v.containsAlcohol }),
                ...(v.recipientType === undefined ? null : { recipient_type: v.recipientType }),
            };
        });
}
