/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const AddressValidationResultsMessageSourceEnum = {
    ShippoAddressValidator: "Shippo Address Validator",
    Ups: "UPS",
} as const;
export type AddressValidationResultsMessageSourceEnum = ClosedEnum<
    typeof AddressValidationResultsMessageSourceEnum
>;

/** @internal */
export namespace AddressValidationResultsMessageSourceEnum$ {
    export const inboundSchema: z.ZodNativeEnum<typeof AddressValidationResultsMessageSourceEnum> =
        z.nativeEnum(AddressValidationResultsMessageSourceEnum);
    export const outboundSchema: z.ZodNativeEnum<typeof AddressValidationResultsMessageSourceEnum> =
        inboundSchema;
}
