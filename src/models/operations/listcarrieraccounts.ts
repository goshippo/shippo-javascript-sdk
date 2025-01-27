/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListCarrierAccountsGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type ListCarrierAccountsRequest = {
  /**
   * Appends the property `service_levels` to each returned carrier account
   */
  serviceLevels?: boolean | undefined;
  /**
   * Filter the response by the specified carrier
   */
  carrier?: components.CarriersEnum | undefined;
  /**
   * Filter the response by the specified carrier account Id
   */
  accountId?: string | undefined;
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
export const ListCarrierAccountsGlobals$inboundSchema: z.ZodType<
  ListCarrierAccountsGlobals,
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
export type ListCarrierAccountsGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const ListCarrierAccountsGlobals$outboundSchema: z.ZodType<
  ListCarrierAccountsGlobals$Outbound,
  z.ZodTypeDef,
  ListCarrierAccountsGlobals
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
export namespace ListCarrierAccountsGlobals$ {
  /** @deprecated use `ListCarrierAccountsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListCarrierAccountsGlobals$inboundSchema;
  /** @deprecated use `ListCarrierAccountsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListCarrierAccountsGlobals$outboundSchema;
  /** @deprecated use `ListCarrierAccountsGlobals$Outbound` instead. */
  export type Outbound = ListCarrierAccountsGlobals$Outbound;
}

export function listCarrierAccountsGlobalsToJSON(
  listCarrierAccountsGlobals: ListCarrierAccountsGlobals,
): string {
  return JSON.stringify(
    ListCarrierAccountsGlobals$outboundSchema.parse(listCarrierAccountsGlobals),
  );
}

export function listCarrierAccountsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListCarrierAccountsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCarrierAccountsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCarrierAccountsGlobals' from JSON`,
  );
}

/** @internal */
export const ListCarrierAccountsRequest$inboundSchema: z.ZodType<
  ListCarrierAccountsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  service_levels: z.boolean().optional(),
  carrier: components.CarriersEnum$inboundSchema.optional(),
  account_id: z.string().optional(),
  page: z.number().int().default(1),
  results: z.number().int().default(5),
}).transform((v) => {
  return remap$(v, {
    "service_levels": "serviceLevels",
    "account_id": "accountId",
  });
});

/** @internal */
export type ListCarrierAccountsRequest$Outbound = {
  service_levels?: boolean | undefined;
  carrier?: string | undefined;
  account_id?: string | undefined;
  page: number;
  results: number;
};

/** @internal */
export const ListCarrierAccountsRequest$outboundSchema: z.ZodType<
  ListCarrierAccountsRequest$Outbound,
  z.ZodTypeDef,
  ListCarrierAccountsRequest
> = z.object({
  serviceLevels: z.boolean().optional(),
  carrier: components.CarriersEnum$outboundSchema.optional(),
  accountId: z.string().optional(),
  page: z.number().int().default(1),
  results: z.number().int().default(5),
}).transform((v) => {
  return remap$(v, {
    serviceLevels: "service_levels",
    accountId: "account_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCarrierAccountsRequest$ {
  /** @deprecated use `ListCarrierAccountsRequest$inboundSchema` instead. */
  export const inboundSchema = ListCarrierAccountsRequest$inboundSchema;
  /** @deprecated use `ListCarrierAccountsRequest$outboundSchema` instead. */
  export const outboundSchema = ListCarrierAccountsRequest$outboundSchema;
  /** @deprecated use `ListCarrierAccountsRequest$Outbound` instead. */
  export type Outbound = ListCarrierAccountsRequest$Outbound;
}

export function listCarrierAccountsRequestToJSON(
  listCarrierAccountsRequest: ListCarrierAccountsRequest,
): string {
  return JSON.stringify(
    ListCarrierAccountsRequest$outboundSchema.parse(listCarrierAccountsRequest),
  );
}

export function listCarrierAccountsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListCarrierAccountsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCarrierAccountsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCarrierAccountsRequest' from JSON`,
  );
}
