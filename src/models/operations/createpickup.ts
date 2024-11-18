/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreatePickupGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

/** @internal */
export const CreatePickupGlobals$inboundSchema: z.ZodType<
  CreatePickupGlobals,
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
export type CreatePickupGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const CreatePickupGlobals$outboundSchema: z.ZodType<
  CreatePickupGlobals$Outbound,
  z.ZodTypeDef,
  CreatePickupGlobals
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
export namespace CreatePickupGlobals$ {
  /** @deprecated use `CreatePickupGlobals$inboundSchema` instead. */
  export const inboundSchema = CreatePickupGlobals$inboundSchema;
  /** @deprecated use `CreatePickupGlobals$outboundSchema` instead. */
  export const outboundSchema = CreatePickupGlobals$outboundSchema;
  /** @deprecated use `CreatePickupGlobals$Outbound` instead. */
  export type Outbound = CreatePickupGlobals$Outbound;
}
