/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreateRefundGlobals = {
  /**
   * String used to pick a non-default API version to use
   */
  shippoApiVersion?: string | undefined;
};

/** @internal */
export const CreateRefundGlobals$inboundSchema: z.ZodType<
  CreateRefundGlobals,
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
export type CreateRefundGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const CreateRefundGlobals$outboundSchema: z.ZodType<
  CreateRefundGlobals$Outbound,
  z.ZodTypeDef,
  CreateRefundGlobals
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
export namespace CreateRefundGlobals$ {
  /** @deprecated use `CreateRefundGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateRefundGlobals$inboundSchema;
  /** @deprecated use `CreateRefundGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateRefundGlobals$outboundSchema;
  /** @deprecated use `CreateRefundGlobals$Outbound` instead. */
  export type Outbound = CreateRefundGlobals$Outbound;
}
