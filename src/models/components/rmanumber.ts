/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Specify the RMA number field on the label (FedEx and UPS only).
 */
export type RmaNumber = {
  /**
   * Custom prefix for RMA number field (ZPL labels only). Up to 11 characters, including trailing
   *
   * @remarks
   * spaces. Empty string indicates removal of default prefix. To use the default prefix, do not include
   * this property.
   */
  prefix?: string | undefined;
  /**
   * Optional text to be printed on the shipping label for RMA number. Up to 40 characters.
   */
  value?: string | undefined;
  /**
   * Order UPS reference fields are printed on ZPL labels. For UPS shipments, if you choose to set `ref_sort` for one reference, you must set `ref_sort` for all other supported UPS references using unique integers.
   */
  refSort?: number | undefined;
};

/** @internal */
export const RmaNumber$inboundSchema: z.ZodType<
  RmaNumber,
  z.ZodTypeDef,
  unknown
> = z.object({
  prefix: z.string().optional(),
  value: z.string().optional(),
  ref_sort: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "ref_sort": "refSort",
  });
});

/** @internal */
export type RmaNumber$Outbound = {
  prefix?: string | undefined;
  value?: string | undefined;
  ref_sort?: number | undefined;
};

/** @internal */
export const RmaNumber$outboundSchema: z.ZodType<
  RmaNumber$Outbound,
  z.ZodTypeDef,
  RmaNumber
> = z.object({
  prefix: z.string().optional(),
  value: z.string().optional(),
  refSort: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    refSort: "ref_sort",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RmaNumber$ {
  /** @deprecated use `RmaNumber$inboundSchema` instead. */
  export const inboundSchema = RmaNumber$inboundSchema;
  /** @deprecated use `RmaNumber$outboundSchema` instead. */
  export const outboundSchema = RmaNumber$outboundSchema;
  /** @deprecated use `RmaNumber$Outbound` instead. */
  export type Outbound = RmaNumber$Outbound;
}

export function rmaNumberToJSON(rmaNumber: RmaNumber): string {
  return JSON.stringify(RmaNumber$outboundSchema.parse(rmaNumber));
}

export function rmaNumberFromJSON(
  jsonString: string,
): SafeParseResult<RmaNumber, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RmaNumber$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RmaNumber' from JSON`,
  );
}
