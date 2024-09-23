/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type UpdateServiceGroupGlobals = {
  /**
   * String used to pick a non-default API version to use
   */
  shippoApiVersion?: string | undefined;
};

/** @internal */
export const UpdateServiceGroupGlobals$inboundSchema: z.ZodType<
  UpdateServiceGroupGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  "SHIPPO-API-VERSION": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "SHIPPO-API-VERSION": "shippoApiVersion",
  });
});

/** @internal */
export type UpdateServiceGroupGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const UpdateServiceGroupGlobals$outboundSchema: z.ZodType<
  UpdateServiceGroupGlobals$Outbound,
  z.ZodTypeDef,
  UpdateServiceGroupGlobals
> = z.object({
  shippoApiVersion: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    shippoApiVersion: "SHIPPO-API-VERSION",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateServiceGroupGlobals$ {
  /** @deprecated use `UpdateServiceGroupGlobals$inboundSchema` instead. */
  export const inboundSchema = UpdateServiceGroupGlobals$inboundSchema;
  /** @deprecated use `UpdateServiceGroupGlobals$outboundSchema` instead. */
  export const outboundSchema = UpdateServiceGroupGlobals$outboundSchema;
  /** @deprecated use `UpdateServiceGroupGlobals$Outbound` instead. */
  export type Outbound = UpdateServiceGroupGlobals$Outbound;
}
