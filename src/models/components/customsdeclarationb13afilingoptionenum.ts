/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * B13A Option details are obtained by filing a B13A Canada Export Declaration via the Canadian Export Reporting System (CERS).
 *
 * @remarks
 * <a href="https://www.cbsa-asfc.gc.ca/services/export/guide-eng.html" target="_blank" rel="noopener noreferrer"> More information on reporting commercial exports from Canada. </a>
 * Allowed values available <a href="#tag/Customs-Declaration-B13A-Filing-Option">here</a>
 */
export const CustomsDeclarationB13AFilingOptionEnum = {
    FiledElectronically: "FILED_ELECTRONICALLY",
    SummaryReporting: "SUMMARY_REPORTING",
    NotRequired: "NOT_REQUIRED",
} as const;
/**
 * B13A Option details are obtained by filing a B13A Canada Export Declaration via the Canadian Export Reporting System (CERS).
 *
 * @remarks
 * <a href="https://www.cbsa-asfc.gc.ca/services/export/guide-eng.html" target="_blank" rel="noopener noreferrer"> More information on reporting commercial exports from Canada. </a>
 * Allowed values available <a href="#tag/Customs-Declaration-B13A-Filing-Option">here</a>
 */
export type CustomsDeclarationB13AFilingOptionEnum = ClosedEnum<
    typeof CustomsDeclarationB13AFilingOptionEnum
>;

/** @internal */
export namespace CustomsDeclarationB13AFilingOptionEnum$ {
    export const inboundSchema = z.nativeEnum(CustomsDeclarationB13AFilingOptionEnum);
    export const outboundSchema = inboundSchema;
}
