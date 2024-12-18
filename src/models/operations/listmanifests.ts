/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListManifestsGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type ListManifestsRequest = {
  /**
   * The page number you want to select
   */
  page?: number | undefined;
  /**
   * The number of results to return per page (max 100, default 5)
   */
  results?: number | undefined;
};

/** @internal */
export const ListManifestsGlobals$inboundSchema: z.ZodType<
  ListManifestsGlobals,
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
export type ListManifestsGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const ListManifestsGlobals$outboundSchema: z.ZodType<
  ListManifestsGlobals$Outbound,
  z.ZodTypeDef,
  ListManifestsGlobals
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
export namespace ListManifestsGlobals$ {
  /** @deprecated use `ListManifestsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListManifestsGlobals$inboundSchema;
  /** @deprecated use `ListManifestsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListManifestsGlobals$outboundSchema;
  /** @deprecated use `ListManifestsGlobals$Outbound` instead. */
  export type Outbound = ListManifestsGlobals$Outbound;
}

/** @internal */
export const ListManifestsRequest$inboundSchema: z.ZodType<
  ListManifestsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().int().default(1),
  results: z.number().int().default(5),
});

/** @internal */
export type ListManifestsRequest$Outbound = {
  page: number;
  results: number;
};

/** @internal */
export const ListManifestsRequest$outboundSchema: z.ZodType<
  ListManifestsRequest$Outbound,
  z.ZodTypeDef,
  ListManifestsRequest
> = z.object({
  page: z.number().int().default(1),
  results: z.number().int().default(5),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListManifestsRequest$ {
  /** @deprecated use `ListManifestsRequest$inboundSchema` instead. */
  export const inboundSchema = ListManifestsRequest$inboundSchema;
  /** @deprecated use `ListManifestsRequest$outboundSchema` instead. */
  export const outboundSchema = ListManifestsRequest$outboundSchema;
  /** @deprecated use `ListManifestsRequest$Outbound` instead. */
  export type Outbound = ListManifestsRequest$Outbound;
}
