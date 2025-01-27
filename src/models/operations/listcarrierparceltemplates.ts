/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListCarrierParcelTemplatesGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

/**
 * filter by user or enabled
 */
export const Include = {
  All: "all",
  User: "user",
  Enabled: "enabled",
} as const;
/**
 * filter by user or enabled
 */
export type Include = ClosedEnum<typeof Include>;

export type ListCarrierParcelTemplatesRequest = {
  /**
   * filter by user or enabled
   */
  include?: Include | undefined;
  /**
   * filter by specific carrier
   */
  carrier?: string | undefined;
};

/** @internal */
export const ListCarrierParcelTemplatesGlobals$inboundSchema: z.ZodType<
  ListCarrierParcelTemplatesGlobals,
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
export type ListCarrierParcelTemplatesGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const ListCarrierParcelTemplatesGlobals$outboundSchema: z.ZodType<
  ListCarrierParcelTemplatesGlobals$Outbound,
  z.ZodTypeDef,
  ListCarrierParcelTemplatesGlobals
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
export namespace ListCarrierParcelTemplatesGlobals$ {
  /** @deprecated use `ListCarrierParcelTemplatesGlobals$inboundSchema` instead. */
  export const inboundSchema = ListCarrierParcelTemplatesGlobals$inboundSchema;
  /** @deprecated use `ListCarrierParcelTemplatesGlobals$outboundSchema` instead. */
  export const outboundSchema =
    ListCarrierParcelTemplatesGlobals$outboundSchema;
  /** @deprecated use `ListCarrierParcelTemplatesGlobals$Outbound` instead. */
  export type Outbound = ListCarrierParcelTemplatesGlobals$Outbound;
}

export function listCarrierParcelTemplatesGlobalsToJSON(
  listCarrierParcelTemplatesGlobals: ListCarrierParcelTemplatesGlobals,
): string {
  return JSON.stringify(
    ListCarrierParcelTemplatesGlobals$outboundSchema.parse(
      listCarrierParcelTemplatesGlobals,
    ),
  );
}

export function listCarrierParcelTemplatesGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListCarrierParcelTemplatesGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCarrierParcelTemplatesGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCarrierParcelTemplatesGlobals' from JSON`,
  );
}

/** @internal */
export const Include$inboundSchema: z.ZodNativeEnum<typeof Include> = z
  .nativeEnum(Include);

/** @internal */
export const Include$outboundSchema: z.ZodNativeEnum<typeof Include> =
  Include$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Include$ {
  /** @deprecated use `Include$inboundSchema` instead. */
  export const inboundSchema = Include$inboundSchema;
  /** @deprecated use `Include$outboundSchema` instead. */
  export const outboundSchema = Include$outboundSchema;
}

/** @internal */
export const ListCarrierParcelTemplatesRequest$inboundSchema: z.ZodType<
  ListCarrierParcelTemplatesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  include: Include$inboundSchema.optional(),
  carrier: z.string().optional(),
});

/** @internal */
export type ListCarrierParcelTemplatesRequest$Outbound = {
  include?: string | undefined;
  carrier?: string | undefined;
};

/** @internal */
export const ListCarrierParcelTemplatesRequest$outboundSchema: z.ZodType<
  ListCarrierParcelTemplatesRequest$Outbound,
  z.ZodTypeDef,
  ListCarrierParcelTemplatesRequest
> = z.object({
  include: Include$outboundSchema.optional(),
  carrier: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCarrierParcelTemplatesRequest$ {
  /** @deprecated use `ListCarrierParcelTemplatesRequest$inboundSchema` instead. */
  export const inboundSchema = ListCarrierParcelTemplatesRequest$inboundSchema;
  /** @deprecated use `ListCarrierParcelTemplatesRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListCarrierParcelTemplatesRequest$outboundSchema;
  /** @deprecated use `ListCarrierParcelTemplatesRequest$Outbound` instead. */
  export type Outbound = ListCarrierParcelTemplatesRequest$Outbound;
}

export function listCarrierParcelTemplatesRequestToJSON(
  listCarrierParcelTemplatesRequest: ListCarrierParcelTemplatesRequest,
): string {
  return JSON.stringify(
    ListCarrierParcelTemplatesRequest$outboundSchema.parse(
      listCarrierParcelTemplatesRequest,
    ),
  );
}

export function listCarrierParcelTemplatesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListCarrierParcelTemplatesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCarrierParcelTemplatesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCarrierParcelTemplatesRequest' from JSON`,
  );
}
