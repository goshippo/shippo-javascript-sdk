/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * Indicates how the carrier should proceed in case the shipment can't be delivered.
 *
 * @remarks
 * Allowed values available <a href="#tag/Customs-Declaration-Non-Delivery-Option">here</a>
 */
export const CustomsDeclarationNonDeliveryOptionEnum = {
    Abandon: "ABANDON",
    Return: "RETURN",
} as const;
/**
 * Indicates how the carrier should proceed in case the shipment can't be delivered.
 *
 * @remarks
 * Allowed values available <a href="#tag/Customs-Declaration-Non-Delivery-Option">here</a>
 */
export type CustomsDeclarationNonDeliveryOptionEnum = ClosedEnum<
    typeof CustomsDeclarationNonDeliveryOptionEnum
>;

/** @internal */
export namespace CustomsDeclarationNonDeliveryOptionEnum$ {
    export const inboundSchema: z.ZodNativeEnum<typeof CustomsDeclarationNonDeliveryOptionEnum> =
        z.nativeEnum(CustomsDeclarationNonDeliveryOptionEnum);
    export const outboundSchema: z.ZodNativeEnum<typeof CustomsDeclarationNonDeliveryOptionEnum> =
        inboundSchema;
}
