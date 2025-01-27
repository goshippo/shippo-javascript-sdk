/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCustomsItemGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type GetCustomsItemRequest = {
  /**
   * Object ID of the customs item
   */
  customsItemId: string;
  /**
   * The page number you want to select
   */
  page?: number | undefined;
};

/** @internal */
export const GetCustomsItemGlobals$inboundSchema: z.ZodType<
  GetCustomsItemGlobals,
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
export type GetCustomsItemGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const GetCustomsItemGlobals$outboundSchema: z.ZodType<
  GetCustomsItemGlobals$Outbound,
  z.ZodTypeDef,
  GetCustomsItemGlobals
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
export namespace GetCustomsItemGlobals$ {
  /** @deprecated use `GetCustomsItemGlobals$inboundSchema` instead. */
  export const inboundSchema = GetCustomsItemGlobals$inboundSchema;
  /** @deprecated use `GetCustomsItemGlobals$outboundSchema` instead. */
  export const outboundSchema = GetCustomsItemGlobals$outboundSchema;
  /** @deprecated use `GetCustomsItemGlobals$Outbound` instead. */
  export type Outbound = GetCustomsItemGlobals$Outbound;
}

export function getCustomsItemGlobalsToJSON(
  getCustomsItemGlobals: GetCustomsItemGlobals,
): string {
  return JSON.stringify(
    GetCustomsItemGlobals$outboundSchema.parse(getCustomsItemGlobals),
  );
}

export function getCustomsItemGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetCustomsItemGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCustomsItemGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCustomsItemGlobals' from JSON`,
  );
}

/** @internal */
export const GetCustomsItemRequest$inboundSchema: z.ZodType<
  GetCustomsItemRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CustomsItemId: z.string(),
  page: z.number().int().default(1),
}).transform((v) => {
  return remap$(v, {
    "CustomsItemId": "customsItemId",
  });
});

/** @internal */
export type GetCustomsItemRequest$Outbound = {
  CustomsItemId: string;
  page: number;
};

/** @internal */
export const GetCustomsItemRequest$outboundSchema: z.ZodType<
  GetCustomsItemRequest$Outbound,
  z.ZodTypeDef,
  GetCustomsItemRequest
> = z.object({
  customsItemId: z.string(),
  page: z.number().int().default(1),
}).transform((v) => {
  return remap$(v, {
    customsItemId: "CustomsItemId",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCustomsItemRequest$ {
  /** @deprecated use `GetCustomsItemRequest$inboundSchema` instead. */
  export const inboundSchema = GetCustomsItemRequest$inboundSchema;
  /** @deprecated use `GetCustomsItemRequest$outboundSchema` instead. */
  export const outboundSchema = GetCustomsItemRequest$outboundSchema;
  /** @deprecated use `GetCustomsItemRequest$Outbound` instead. */
  export type Outbound = GetCustomsItemRequest$Outbound;
}

export function getCustomsItemRequestToJSON(
  getCustomsItemRequest: GetCustomsItemRequest,
): string {
  return JSON.stringify(
    GetCustomsItemRequest$outboundSchema.parse(getCustomsItemRequest),
  );
}

export function getCustomsItemRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCustomsItemRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCustomsItemRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCustomsItemRequest' from JSON`,
  );
}
