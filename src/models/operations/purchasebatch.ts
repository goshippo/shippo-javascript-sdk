/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type PurchaseBatchGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type PurchaseBatchRequest = {
  /**
   * Object ID of the batch
   */
  batchId: string;
};

/** @internal */
export const PurchaseBatchGlobals$inboundSchema: z.ZodType<
  PurchaseBatchGlobals,
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
export type PurchaseBatchGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const PurchaseBatchGlobals$outboundSchema: z.ZodType<
  PurchaseBatchGlobals$Outbound,
  z.ZodTypeDef,
  PurchaseBatchGlobals
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
export namespace PurchaseBatchGlobals$ {
  /** @deprecated use `PurchaseBatchGlobals$inboundSchema` instead. */
  export const inboundSchema = PurchaseBatchGlobals$inboundSchema;
  /** @deprecated use `PurchaseBatchGlobals$outboundSchema` instead. */
  export const outboundSchema = PurchaseBatchGlobals$outboundSchema;
  /** @deprecated use `PurchaseBatchGlobals$Outbound` instead. */
  export type Outbound = PurchaseBatchGlobals$Outbound;
}

/** @internal */
export const PurchaseBatchRequest$inboundSchema: z.ZodType<
  PurchaseBatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  BatchId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "BatchId": "batchId",
  });
});

/** @internal */
export type PurchaseBatchRequest$Outbound = {
  BatchId: string;
};

/** @internal */
export const PurchaseBatchRequest$outboundSchema: z.ZodType<
  PurchaseBatchRequest$Outbound,
  z.ZodTypeDef,
  PurchaseBatchRequest
> = z.object({
  batchId: z.string(),
}).transform((v) => {
  return remap$(v, {
    batchId: "BatchId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PurchaseBatchRequest$ {
  /** @deprecated use `PurchaseBatchRequest$inboundSchema` instead. */
  export const inboundSchema = PurchaseBatchRequest$inboundSchema;
  /** @deprecated use `PurchaseBatchRequest$outboundSchema` instead. */
  export const outboundSchema = PurchaseBatchRequest$outboundSchema;
  /** @deprecated use `PurchaseBatchRequest$Outbound` instead. */
  export type Outbound = PurchaseBatchRequest$Outbound;
}
