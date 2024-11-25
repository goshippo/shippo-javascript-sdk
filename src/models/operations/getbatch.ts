/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetBatchGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type GetBatchRequest = {
  /**
   * Object ID of the batch
   */
  batchId: string;
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
export const GetBatchGlobals$inboundSchema: z.ZodType<
  GetBatchGlobals,
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
export type GetBatchGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const GetBatchGlobals$outboundSchema: z.ZodType<
  GetBatchGlobals$Outbound,
  z.ZodTypeDef,
  GetBatchGlobals
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
export namespace GetBatchGlobals$ {
  /** @deprecated use `GetBatchGlobals$inboundSchema` instead. */
  export const inboundSchema = GetBatchGlobals$inboundSchema;
  /** @deprecated use `GetBatchGlobals$outboundSchema` instead. */
  export const outboundSchema = GetBatchGlobals$outboundSchema;
  /** @deprecated use `GetBatchGlobals$Outbound` instead. */
  export type Outbound = GetBatchGlobals$Outbound;
}

/** @internal */
export const GetBatchRequest$inboundSchema: z.ZodType<
  GetBatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  BatchId: z.string(),
  page: z.number().int().default(1),
  results: z.number().int().default(5),
}).transform((v) => {
  return remap$(v, {
    "BatchId": "batchId",
  });
});

/** @internal */
export type GetBatchRequest$Outbound = {
  BatchId: string;
  page: number;
  results: number;
};

/** @internal */
export const GetBatchRequest$outboundSchema: z.ZodType<
  GetBatchRequest$Outbound,
  z.ZodTypeDef,
  GetBatchRequest
> = z.object({
  batchId: z.string(),
  page: z.number().int().default(1),
  results: z.number().int().default(5),
}).transform((v) => {
  return remap$(v, {
    batchId: "BatchId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetBatchRequest$ {
  /** @deprecated use `GetBatchRequest$inboundSchema` instead. */
  export const inboundSchema = GetBatchRequest$inboundSchema;
  /** @deprecated use `GetBatchRequest$outboundSchema` instead. */
  export const outboundSchema = GetBatchRequest$outboundSchema;
  /** @deprecated use `GetBatchRequest$Outbound` instead. */
  export type Outbound = GetBatchRequest$Outbound;
}
