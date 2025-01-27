/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ParcelTemplateAramexAustraliaEnum,
  ParcelTemplateAramexAustraliaEnum$inboundSchema,
  ParcelTemplateAramexAustraliaEnum$outboundSchema,
} from "./parceltemplatearamexaustraliaenum.js";
import {
  ParcelTemplateDHLeCommerceEnum,
  ParcelTemplateDHLeCommerceEnum$inboundSchema,
  ParcelTemplateDHLeCommerceEnum$outboundSchema,
} from "./parceltemplatedhlecommerceenum.js";
import {
  ParcelTemplateDPDUKEnum,
  ParcelTemplateDPDUKEnum$inboundSchema,
  ParcelTemplateDPDUKEnum$outboundSchema,
} from "./parceltemplatedpdukenum.js";
import {
  ParcelTemplateFedExEnum,
  ParcelTemplateFedExEnum$inboundSchema,
  ParcelTemplateFedExEnum$outboundSchema,
} from "./parceltemplatefedexenum.js";
import {
  ParcelTemplateUPSEnum,
  ParcelTemplateUPSEnum$inboundSchema,
  ParcelTemplateUPSEnum$outboundSchema,
} from "./parceltemplateupsenum.js";
import {
  ParcelTemplateUSPSEnum,
  ParcelTemplateUSPSEnum$inboundSchema,
  ParcelTemplateUSPSEnum$outboundSchema,
} from "./parceltemplateuspsenum.js";

/**
 * If template is passed, `length`, `width`, `height`, and `distance_unit` are not required
 */
export type ParcelTemplateEnumSet =
  | ParcelTemplateFedExEnum
  | ParcelTemplateUPSEnum
  | ParcelTemplateUSPSEnum
  | ParcelTemplateDHLeCommerceEnum
  | ParcelTemplateDPDUKEnum
  | ParcelTemplateAramexAustraliaEnum;

/** @internal */
export const ParcelTemplateEnumSet$inboundSchema: z.ZodType<
  ParcelTemplateEnumSet,
  z.ZodTypeDef,
  unknown
> = z.union([
  ParcelTemplateFedExEnum$inboundSchema,
  ParcelTemplateUPSEnum$inboundSchema,
  ParcelTemplateUSPSEnum$inboundSchema,
  ParcelTemplateDHLeCommerceEnum$inboundSchema,
  ParcelTemplateDPDUKEnum$inboundSchema,
  ParcelTemplateAramexAustraliaEnum$inboundSchema,
]);

/** @internal */
export type ParcelTemplateEnumSet$Outbound =
  | string
  | string
  | string
  | string
  | string
  | string;

/** @internal */
export const ParcelTemplateEnumSet$outboundSchema: z.ZodType<
  ParcelTemplateEnumSet$Outbound,
  z.ZodTypeDef,
  ParcelTemplateEnumSet
> = z.union([
  ParcelTemplateFedExEnum$outboundSchema,
  ParcelTemplateUPSEnum$outboundSchema,
  ParcelTemplateUSPSEnum$outboundSchema,
  ParcelTemplateDHLeCommerceEnum$outboundSchema,
  ParcelTemplateDPDUKEnum$outboundSchema,
  ParcelTemplateAramexAustraliaEnum$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ParcelTemplateEnumSet$ {
  /** @deprecated use `ParcelTemplateEnumSet$inboundSchema` instead. */
  export const inboundSchema = ParcelTemplateEnumSet$inboundSchema;
  /** @deprecated use `ParcelTemplateEnumSet$outboundSchema` instead. */
  export const outboundSchema = ParcelTemplateEnumSet$outboundSchema;
  /** @deprecated use `ParcelTemplateEnumSet$Outbound` instead. */
  export type Outbound = ParcelTemplateEnumSet$Outbound;
}

export function parcelTemplateEnumSetToJSON(
  parcelTemplateEnumSet: ParcelTemplateEnumSet,
): string {
  return JSON.stringify(
    ParcelTemplateEnumSet$outboundSchema.parse(parcelTemplateEnumSet),
  );
}

export function parcelTemplateEnumSetFromJSON(
  jsonString: string,
): SafeParseResult<ParcelTemplateEnumSet, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ParcelTemplateEnumSet$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ParcelTemplateEnumSet' from JSON`,
  );
}
