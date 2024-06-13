/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * Type of goods of the shipment.
 *
 * @remarks
 * Allowed values available <a href="#tag/Customs-Declaration-Contents-Type">here</a>
 */
export const CustomsDeclarationContentsTypeEnum = {
    Documents: "DOCUMENTS",
    Gift: "GIFT",
    Sample: "SAMPLE",
    Merchandise: "MERCHANDISE",
    HumanitarianDonation: "HUMANITARIAN_DONATION",
    ReturnMerchandise: "RETURN_MERCHANDISE",
    Other: "OTHER",
} as const;
/**
 * Type of goods of the shipment.
 *
 * @remarks
 * Allowed values available <a href="#tag/Customs-Declaration-Contents-Type">here</a>
 */
export type CustomsDeclarationContentsTypeEnum = ClosedEnum<
    typeof CustomsDeclarationContentsTypeEnum
>;

/** @internal */
export namespace CustomsDeclarationContentsTypeEnum$ {
    export const inboundSchema = z.nativeEnum(CustomsDeclarationContentsTypeEnum);
    export const outboundSchema = inboundSchema;
}
