/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListTransactionsGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type ListTransactionsRequest = {
  /**
   * Filter by rate ID
   */
  rate?: string | undefined;
  /**
   * Filter by object status
   */
  objectStatus?: components.TransactionStatusEnum | undefined;
  /**
   * Filter by tracking status
   */
  trackingStatus?: components.TrackingStatusEnum | undefined;
  /**
   * The page number you want to select
   */
  page?: number | undefined;
  /**
   * The number of results to return per page (max 100)
   */
  results?: number | undefined;
};

/** @internal */
export const ListTransactionsGlobals$inboundSchema: z.ZodType<
  ListTransactionsGlobals,
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
export type ListTransactionsGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const ListTransactionsGlobals$outboundSchema: z.ZodType<
  ListTransactionsGlobals$Outbound,
  z.ZodTypeDef,
  ListTransactionsGlobals
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
export namespace ListTransactionsGlobals$ {
  /** @deprecated use `ListTransactionsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListTransactionsGlobals$inboundSchema;
  /** @deprecated use `ListTransactionsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListTransactionsGlobals$outboundSchema;
  /** @deprecated use `ListTransactionsGlobals$Outbound` instead. */
  export type Outbound = ListTransactionsGlobals$Outbound;
}

export function listTransactionsGlobalsToJSON(
  listTransactionsGlobals: ListTransactionsGlobals,
): string {
  return JSON.stringify(
    ListTransactionsGlobals$outboundSchema.parse(listTransactionsGlobals),
  );
}

export function listTransactionsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListTransactionsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransactionsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransactionsGlobals' from JSON`,
  );
}

/** @internal */
export const ListTransactionsRequest$inboundSchema: z.ZodType<
  ListTransactionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  rate: z.string().optional(),
  object_status: components.TransactionStatusEnum$inboundSchema.optional(),
  tracking_status: components.TrackingStatusEnum$inboundSchema.optional(),
  page: z.number().int().default(1),
  results: z.number().int().default(25),
}).transform((v) => {
  return remap$(v, {
    "object_status": "objectStatus",
    "tracking_status": "trackingStatus",
  });
});

/** @internal */
export type ListTransactionsRequest$Outbound = {
  rate?: string | undefined;
  object_status?: string | undefined;
  tracking_status?: string | undefined;
  page: number;
  results: number;
};

/** @internal */
export const ListTransactionsRequest$outboundSchema: z.ZodType<
  ListTransactionsRequest$Outbound,
  z.ZodTypeDef,
  ListTransactionsRequest
> = z.object({
  rate: z.string().optional(),
  objectStatus: components.TransactionStatusEnum$outboundSchema.optional(),
  trackingStatus: components.TrackingStatusEnum$outboundSchema.optional(),
  page: z.number().int().default(1),
  results: z.number().int().default(25),
}).transform((v) => {
  return remap$(v, {
    objectStatus: "object_status",
    trackingStatus: "tracking_status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransactionsRequest$ {
  /** @deprecated use `ListTransactionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListTransactionsRequest$inboundSchema;
  /** @deprecated use `ListTransactionsRequest$outboundSchema` instead. */
  export const outboundSchema = ListTransactionsRequest$outboundSchema;
  /** @deprecated use `ListTransactionsRequest$Outbound` instead. */
  export type Outbound = ListTransactionsRequest$Outbound;
}

export function listTransactionsRequestToJSON(
  listTransactionsRequest: ListTransactionsRequest,
): string {
  return JSON.stringify(
    ListTransactionsRequest$outboundSchema.parse(listTransactionsRequest),
  );
}

export function listTransactionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTransactionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTransactionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTransactionsRequest' from JSON`,
  );
}
