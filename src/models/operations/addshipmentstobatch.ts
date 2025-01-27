/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AddShipmentsToBatchGlobals = {
  /**
   * Optional string used to pick a non-default API version to use. See our <a href="https://docs.goshippo.com/docs/api_concepts/apiversioning/">API version</a> guide.
   */
  shippoApiVersion?: string | undefined;
};

export type AddShipmentsToBatchRequest = {
  /**
   * Object ID of the batch
   */
  batchId: string;
  /**
   * Array of shipments to add to the batch
   */
  requestBody: Array<components.BatchShipmentCreateRequest>;
};

/** @internal */
export const AddShipmentsToBatchGlobals$inboundSchema: z.ZodType<
  AddShipmentsToBatchGlobals,
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
export type AddShipmentsToBatchGlobals$Outbound = {
  "SHIPPO-API-VERSION"?: string | undefined;
};

/** @internal */
export const AddShipmentsToBatchGlobals$outboundSchema: z.ZodType<
  AddShipmentsToBatchGlobals$Outbound,
  z.ZodTypeDef,
  AddShipmentsToBatchGlobals
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
export namespace AddShipmentsToBatchGlobals$ {
  /** @deprecated use `AddShipmentsToBatchGlobals$inboundSchema` instead. */
  export const inboundSchema = AddShipmentsToBatchGlobals$inboundSchema;
  /** @deprecated use `AddShipmentsToBatchGlobals$outboundSchema` instead. */
  export const outboundSchema = AddShipmentsToBatchGlobals$outboundSchema;
  /** @deprecated use `AddShipmentsToBatchGlobals$Outbound` instead. */
  export type Outbound = AddShipmentsToBatchGlobals$Outbound;
}

export function addShipmentsToBatchGlobalsToJSON(
  addShipmentsToBatchGlobals: AddShipmentsToBatchGlobals,
): string {
  return JSON.stringify(
    AddShipmentsToBatchGlobals$outboundSchema.parse(addShipmentsToBatchGlobals),
  );
}

export function addShipmentsToBatchGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AddShipmentsToBatchGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddShipmentsToBatchGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddShipmentsToBatchGlobals' from JSON`,
  );
}

/** @internal */
export const AddShipmentsToBatchRequest$inboundSchema: z.ZodType<
  AddShipmentsToBatchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  BatchId: z.string(),
  RequestBody: z.array(components.BatchShipmentCreateRequest$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "BatchId": "batchId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type AddShipmentsToBatchRequest$Outbound = {
  BatchId: string;
  RequestBody: Array<components.BatchShipmentCreateRequest$Outbound>;
};

/** @internal */
export const AddShipmentsToBatchRequest$outboundSchema: z.ZodType<
  AddShipmentsToBatchRequest$Outbound,
  z.ZodTypeDef,
  AddShipmentsToBatchRequest
> = z.object({
  batchId: z.string(),
  requestBody: z.array(components.BatchShipmentCreateRequest$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    batchId: "BatchId",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddShipmentsToBatchRequest$ {
  /** @deprecated use `AddShipmentsToBatchRequest$inboundSchema` instead. */
  export const inboundSchema = AddShipmentsToBatchRequest$inboundSchema;
  /** @deprecated use `AddShipmentsToBatchRequest$outboundSchema` instead. */
  export const outboundSchema = AddShipmentsToBatchRequest$outboundSchema;
  /** @deprecated use `AddShipmentsToBatchRequest$Outbound` instead. */
  export type Outbound = AddShipmentsToBatchRequest$Outbound;
}

export function addShipmentsToBatchRequestToJSON(
  addShipmentsToBatchRequest: AddShipmentsToBatchRequest,
): string {
  return JSON.stringify(
    AddShipmentsToBatchRequest$outboundSchema.parse(addShipmentsToBatchRequest),
  );
}

export function addShipmentsToBatchRequestFromJSON(
  jsonString: string,
): SafeParseResult<AddShipmentsToBatchRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddShipmentsToBatchRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddShipmentsToBatchRequest' from JSON`,
  );
}
