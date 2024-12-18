/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetParcelGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type GetParcelRequest = {
  /**
   * Object ID of the parcel
   */
  parcelId: string;
};

/** @internal */
export const GetParcelGlobals$inboundSchema: z.ZodType<
  GetParcelGlobals,
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
export type GetParcelGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const GetParcelGlobals$outboundSchema: z.ZodType<
  GetParcelGlobals$Outbound,
  z.ZodTypeDef,
  GetParcelGlobals
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
export namespace GetParcelGlobals$ {
  /** @deprecated use `GetParcelGlobals$inboundSchema` instead. */
  export const inboundSchema = GetParcelGlobals$inboundSchema;
  /** @deprecated use `GetParcelGlobals$outboundSchema` instead. */
  export const outboundSchema = GetParcelGlobals$outboundSchema;
  /** @deprecated use `GetParcelGlobals$Outbound` instead. */
  export type Outbound = GetParcelGlobals$Outbound;
}

/** @internal */
export const GetParcelRequest$inboundSchema: z.ZodType<
  GetParcelRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ParcelId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "ParcelId": "parcelId",
  });
});

/** @internal */
export type GetParcelRequest$Outbound = {
  ParcelId: string;
};

/** @internal */
export const GetParcelRequest$outboundSchema: z.ZodType<
  GetParcelRequest$Outbound,
  z.ZodTypeDef,
  GetParcelRequest
> = z.object({
  parcelId: z.string(),
}).transform((v) => {
  return remap$(v, {
    parcelId: "ParcelId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetParcelRequest$ {
  /** @deprecated use `GetParcelRequest$inboundSchema` instead. */
  export const inboundSchema = GetParcelRequest$inboundSchema;
  /** @deprecated use `GetParcelRequest$outboundSchema` instead. */
  export const outboundSchema = GetParcelRequest$outboundSchema;
  /** @deprecated use `GetParcelRequest$Outbound` instead. */
  export type Outbound = GetParcelRequest$Outbound;
}
