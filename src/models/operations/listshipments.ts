/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListShipmentsGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type ListShipmentsRequest = {
  /**
   * The page number you want to select
   */
  page?: number | undefined;
  /**
   * The number of results to return per page (max 100)
   */
  results?: number | undefined;
  /**
   * Object(s) created greater than a provided date and time.
   */
  objectCreatedGt?: string | undefined;
  /**
   * Object(s) created greater than or equal to a provided date and time.
   */
  objectCreatedGte?: string | undefined;
  /**
   * Object(s) created lesser than a provided date and time.
   */
  objectCreatedLt?: string | undefined;
  /**
   * Object(s) created lesser than or equal to a provided date and time.
   */
  objectCreatedLte?: string | undefined;
};

/** @internal */
export const ListShipmentsGlobals$inboundSchema: z.ZodType<
  ListShipmentsGlobals,
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
export type ListShipmentsGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const ListShipmentsGlobals$outboundSchema: z.ZodType<
  ListShipmentsGlobals$Outbound,
  z.ZodTypeDef,
  ListShipmentsGlobals
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
export namespace ListShipmentsGlobals$ {
  /** @deprecated use `ListShipmentsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListShipmentsGlobals$inboundSchema;
  /** @deprecated use `ListShipmentsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListShipmentsGlobals$outboundSchema;
  /** @deprecated use `ListShipmentsGlobals$Outbound` instead. */
  export type Outbound = ListShipmentsGlobals$Outbound;
}

/** @internal */
export const ListShipmentsRequest$inboundSchema: z.ZodType<
  ListShipmentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().int().default(1),
  results: z.number().int().default(25),
  object_created_gt: z.string().optional(),
  object_created_gte: z.string().optional(),
  object_created_lt: z.string().optional(),
  object_created_lte: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "object_created_gt": "objectCreatedGt",
    "object_created_gte": "objectCreatedGte",
    "object_created_lt": "objectCreatedLt",
    "object_created_lte": "objectCreatedLte",
  });
});

/** @internal */
export type ListShipmentsRequest$Outbound = {
  page: number;
  results: number;
  object_created_gt?: string | undefined;
  object_created_gte?: string | undefined;
  object_created_lt?: string | undefined;
  object_created_lte?: string | undefined;
};

/** @internal */
export const ListShipmentsRequest$outboundSchema: z.ZodType<
  ListShipmentsRequest$Outbound,
  z.ZodTypeDef,
  ListShipmentsRequest
> = z.object({
  page: z.number().int().default(1),
  results: z.number().int().default(25),
  objectCreatedGt: z.string().optional(),
  objectCreatedGte: z.string().optional(),
  objectCreatedLt: z.string().optional(),
  objectCreatedLte: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    objectCreatedGt: "object_created_gt",
    objectCreatedGte: "object_created_gte",
    objectCreatedLt: "object_created_lt",
    objectCreatedLte: "object_created_lte",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListShipmentsRequest$ {
  /** @deprecated use `ListShipmentsRequest$inboundSchema` instead. */
  export const inboundSchema = ListShipmentsRequest$inboundSchema;
  /** @deprecated use `ListShipmentsRequest$outboundSchema` instead. */
  export const outboundSchema = ListShipmentsRequest$outboundSchema;
  /** @deprecated use `ListShipmentsRequest$Outbound` instead. */
  export type Outbound = ListShipmentsRequest$Outbound;
}
