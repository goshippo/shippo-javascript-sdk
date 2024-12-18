/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetRateGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type GetRateRequest = {
  /**
   * Object ID of the rate
   */
  rateId: string;
};

/** @internal */
export const GetRateGlobals$inboundSchema: z.ZodType<
  GetRateGlobals,
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
export type GetRateGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const GetRateGlobals$outboundSchema: z.ZodType<
  GetRateGlobals$Outbound,
  z.ZodTypeDef,
  GetRateGlobals
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
export namespace GetRateGlobals$ {
  /** @deprecated use `GetRateGlobals$inboundSchema` instead. */
  export const inboundSchema = GetRateGlobals$inboundSchema;
  /** @deprecated use `GetRateGlobals$outboundSchema` instead. */
  export const outboundSchema = GetRateGlobals$outboundSchema;
  /** @deprecated use `GetRateGlobals$Outbound` instead. */
  export type Outbound = GetRateGlobals$Outbound;
}

/** @internal */
export const GetRateRequest$inboundSchema: z.ZodType<
  GetRateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RateId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "RateId": "rateId",
  });
});

/** @internal */
export type GetRateRequest$Outbound = {
  RateId: string;
};

/** @internal */
export const GetRateRequest$outboundSchema: z.ZodType<
  GetRateRequest$Outbound,
  z.ZodTypeDef,
  GetRateRequest
> = z.object({
  rateId: z.string(),
}).transform((v) => {
  return remap$(v, {
    rateId: "RateId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRateRequest$ {
  /** @deprecated use `GetRateRequest$inboundSchema` instead. */
  export const inboundSchema = GetRateRequest$inboundSchema;
  /** @deprecated use `GetRateRequest$outboundSchema` instead. */
  export const outboundSchema = GetRateRequest$outboundSchema;
  /** @deprecated use `GetRateRequest$Outbound` instead. */
  export type Outbound = GetRateRequest$Outbound;
}
