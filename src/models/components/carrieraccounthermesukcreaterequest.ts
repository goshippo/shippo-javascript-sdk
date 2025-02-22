/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CarrierAccountHermesUKCreateRequestParameters = {};

export type CarrierAccountHermesUKCreateRequest = {
  carrier?: "hermes_uk" | undefined;
  parameters: CarrierAccountHermesUKCreateRequestParameters;
};

/** @internal */
export const CarrierAccountHermesUKCreateRequestParameters$inboundSchema:
  z.ZodType<
    CarrierAccountHermesUKCreateRequestParameters,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type CarrierAccountHermesUKCreateRequestParameters$Outbound = {};

/** @internal */
export const CarrierAccountHermesUKCreateRequestParameters$outboundSchema:
  z.ZodType<
    CarrierAccountHermesUKCreateRequestParameters$Outbound,
    z.ZodTypeDef,
    CarrierAccountHermesUKCreateRequestParameters
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountHermesUKCreateRequestParameters$ {
  /** @deprecated use `CarrierAccountHermesUKCreateRequestParameters$inboundSchema` instead. */
  export const inboundSchema =
    CarrierAccountHermesUKCreateRequestParameters$inboundSchema;
  /** @deprecated use `CarrierAccountHermesUKCreateRequestParameters$outboundSchema` instead. */
  export const outboundSchema =
    CarrierAccountHermesUKCreateRequestParameters$outboundSchema;
  /** @deprecated use `CarrierAccountHermesUKCreateRequestParameters$Outbound` instead. */
  export type Outbound = CarrierAccountHermesUKCreateRequestParameters$Outbound;
}

export function carrierAccountHermesUKCreateRequestParametersToJSON(
  carrierAccountHermesUKCreateRequestParameters:
    CarrierAccountHermesUKCreateRequestParameters,
): string {
  return JSON.stringify(
    CarrierAccountHermesUKCreateRequestParameters$outboundSchema.parse(
      carrierAccountHermesUKCreateRequestParameters,
    ),
  );
}

export function carrierAccountHermesUKCreateRequestParametersFromJSON(
  jsonString: string,
): SafeParseResult<
  CarrierAccountHermesUKCreateRequestParameters,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CarrierAccountHermesUKCreateRequestParameters$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CarrierAccountHermesUKCreateRequestParameters' from JSON`,
  );
}

/** @internal */
export const CarrierAccountHermesUKCreateRequest$inboundSchema: z.ZodType<
  CarrierAccountHermesUKCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  carrier: z.literal("hermes_uk").optional(),
  parameters: z.lazy(() =>
    CarrierAccountHermesUKCreateRequestParameters$inboundSchema
  ),
});

/** @internal */
export type CarrierAccountHermesUKCreateRequest$Outbound = {
  carrier: "hermes_uk";
  parameters: CarrierAccountHermesUKCreateRequestParameters$Outbound;
};

/** @internal */
export const CarrierAccountHermesUKCreateRequest$outboundSchema: z.ZodType<
  CarrierAccountHermesUKCreateRequest$Outbound,
  z.ZodTypeDef,
  CarrierAccountHermesUKCreateRequest
> = z.object({
  carrier: z.literal("hermes_uk").default("hermes_uk" as const),
  parameters: z.lazy(() =>
    CarrierAccountHermesUKCreateRequestParameters$outboundSchema
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountHermesUKCreateRequest$ {
  /** @deprecated use `CarrierAccountHermesUKCreateRequest$inboundSchema` instead. */
  export const inboundSchema =
    CarrierAccountHermesUKCreateRequest$inboundSchema;
  /** @deprecated use `CarrierAccountHermesUKCreateRequest$outboundSchema` instead. */
  export const outboundSchema =
    CarrierAccountHermesUKCreateRequest$outboundSchema;
  /** @deprecated use `CarrierAccountHermesUKCreateRequest$Outbound` instead. */
  export type Outbound = CarrierAccountHermesUKCreateRequest$Outbound;
}

export function carrierAccountHermesUKCreateRequestToJSON(
  carrierAccountHermesUKCreateRequest: CarrierAccountHermesUKCreateRequest,
): string {
  return JSON.stringify(
    CarrierAccountHermesUKCreateRequest$outboundSchema.parse(
      carrierAccountHermesUKCreateRequest,
    ),
  );
}

export function carrierAccountHermesUKCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CarrierAccountHermesUKCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CarrierAccountHermesUKCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CarrierAccountHermesUKCreateRequest' from JSON`,
  );
}
