/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CarrierAccountFedExCreateRequestParameters = {};

export type CarrierAccountFedExCreateRequest = {
  carrier?: "fedex" | undefined;
  parameters: CarrierAccountFedExCreateRequestParameters;
};

/** @internal */
export const CarrierAccountFedExCreateRequestParameters$inboundSchema:
  z.ZodType<CarrierAccountFedExCreateRequestParameters, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type CarrierAccountFedExCreateRequestParameters$Outbound = {};

/** @internal */
export const CarrierAccountFedExCreateRequestParameters$outboundSchema:
  z.ZodType<
    CarrierAccountFedExCreateRequestParameters$Outbound,
    z.ZodTypeDef,
    CarrierAccountFedExCreateRequestParameters
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountFedExCreateRequestParameters$ {
  /** @deprecated use `CarrierAccountFedExCreateRequestParameters$inboundSchema` instead. */
  export const inboundSchema =
    CarrierAccountFedExCreateRequestParameters$inboundSchema;
  /** @deprecated use `CarrierAccountFedExCreateRequestParameters$outboundSchema` instead. */
  export const outboundSchema =
    CarrierAccountFedExCreateRequestParameters$outboundSchema;
  /** @deprecated use `CarrierAccountFedExCreateRequestParameters$Outbound` instead. */
  export type Outbound = CarrierAccountFedExCreateRequestParameters$Outbound;
}

export function carrierAccountFedExCreateRequestParametersToJSON(
  carrierAccountFedExCreateRequestParameters:
    CarrierAccountFedExCreateRequestParameters,
): string {
  return JSON.stringify(
    CarrierAccountFedExCreateRequestParameters$outboundSchema.parse(
      carrierAccountFedExCreateRequestParameters,
    ),
  );
}

export function carrierAccountFedExCreateRequestParametersFromJSON(
  jsonString: string,
): SafeParseResult<
  CarrierAccountFedExCreateRequestParameters,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CarrierAccountFedExCreateRequestParameters$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CarrierAccountFedExCreateRequestParameters' from JSON`,
  );
}

/** @internal */
export const CarrierAccountFedExCreateRequest$inboundSchema: z.ZodType<
  CarrierAccountFedExCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  carrier: z.literal("fedex").optional(),
  parameters: z.lazy(() =>
    CarrierAccountFedExCreateRequestParameters$inboundSchema
  ),
});

/** @internal */
export type CarrierAccountFedExCreateRequest$Outbound = {
  carrier: "fedex";
  parameters: CarrierAccountFedExCreateRequestParameters$Outbound;
};

/** @internal */
export const CarrierAccountFedExCreateRequest$outboundSchema: z.ZodType<
  CarrierAccountFedExCreateRequest$Outbound,
  z.ZodTypeDef,
  CarrierAccountFedExCreateRequest
> = z.object({
  carrier: z.literal("fedex").default("fedex" as const),
  parameters: z.lazy(() =>
    CarrierAccountFedExCreateRequestParameters$outboundSchema
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountFedExCreateRequest$ {
  /** @deprecated use `CarrierAccountFedExCreateRequest$inboundSchema` instead. */
  export const inboundSchema = CarrierAccountFedExCreateRequest$inboundSchema;
  /** @deprecated use `CarrierAccountFedExCreateRequest$outboundSchema` instead. */
  export const outboundSchema = CarrierAccountFedExCreateRequest$outboundSchema;
  /** @deprecated use `CarrierAccountFedExCreateRequest$Outbound` instead. */
  export type Outbound = CarrierAccountFedExCreateRequest$Outbound;
}

export function carrierAccountFedExCreateRequestToJSON(
  carrierAccountFedExCreateRequest: CarrierAccountFedExCreateRequest,
): string {
  return JSON.stringify(
    CarrierAccountFedExCreateRequest$outboundSchema.parse(
      carrierAccountFedExCreateRequest,
    ),
  );
}

export function carrierAccountFedExCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CarrierAccountFedExCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CarrierAccountFedExCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CarrierAccountFedExCreateRequest' from JSON`,
  );
}
