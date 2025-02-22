/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Specify that the package contains Dry Ice (FedEx, Veho, and UPS only).
 */
export type DryIce = {
  /**
   * Mandatory. Specifies that the package contains Dry Ice.
   */
  containsDryIce?: boolean | undefined;
  /**
   * Mandatory. Units must be in Kilograms. Cannot be greater than package weight.
   */
  weight?: string | undefined;
};

/** @internal */
export const DryIce$inboundSchema: z.ZodType<DryIce, z.ZodTypeDef, unknown> = z
  .object({
    contains_dry_ice: z.boolean().optional(),
    weight: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "contains_dry_ice": "containsDryIce",
    });
  });

/** @internal */
export type DryIce$Outbound = {
  contains_dry_ice?: boolean | undefined;
  weight?: string | undefined;
};

/** @internal */
export const DryIce$outboundSchema: z.ZodType<
  DryIce$Outbound,
  z.ZodTypeDef,
  DryIce
> = z.object({
  containsDryIce: z.boolean().optional(),
  weight: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    containsDryIce: "contains_dry_ice",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DryIce$ {
  /** @deprecated use `DryIce$inboundSchema` instead. */
  export const inboundSchema = DryIce$inboundSchema;
  /** @deprecated use `DryIce$outboundSchema` instead. */
  export const outboundSchema = DryIce$outboundSchema;
  /** @deprecated use `DryIce$Outbound` instead. */
  export type Outbound = DryIce$Outbound;
}

export function dryIceToJSON(dryIce: DryIce): string {
  return JSON.stringify(DryIce$outboundSchema.parse(dryIce));
}

export function dryIceFromJSON(
  jsonString: string,
): SafeParseResult<DryIce, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DryIce$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DryIce' from JSON`,
  );
}
