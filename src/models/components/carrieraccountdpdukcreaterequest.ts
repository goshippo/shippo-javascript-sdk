/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CarrierAccountDPDUKCreateRequestParameters = {};

export type CarrierAccountDPDUKCreateRequest = {
  carrier: string;
  parameters: CarrierAccountDPDUKCreateRequestParameters;
};

/** @internal */
export const CarrierAccountDPDUKCreateRequestParameters$inboundSchema:
  z.ZodType<CarrierAccountDPDUKCreateRequestParameters, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type CarrierAccountDPDUKCreateRequestParameters$Outbound = {};

/** @internal */
export const CarrierAccountDPDUKCreateRequestParameters$outboundSchema:
  z.ZodType<
    CarrierAccountDPDUKCreateRequestParameters$Outbound,
    z.ZodTypeDef,
    CarrierAccountDPDUKCreateRequestParameters
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountDPDUKCreateRequestParameters$ {
  /** @deprecated use `CarrierAccountDPDUKCreateRequestParameters$inboundSchema` instead. */
  export const inboundSchema =
    CarrierAccountDPDUKCreateRequestParameters$inboundSchema;
  /** @deprecated use `CarrierAccountDPDUKCreateRequestParameters$outboundSchema` instead. */
  export const outboundSchema =
    CarrierAccountDPDUKCreateRequestParameters$outboundSchema;
  /** @deprecated use `CarrierAccountDPDUKCreateRequestParameters$Outbound` instead. */
  export type Outbound = CarrierAccountDPDUKCreateRequestParameters$Outbound;
}

/** @internal */
export const CarrierAccountDPDUKCreateRequest$inboundSchema: z.ZodType<
  CarrierAccountDPDUKCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  carrier: z.string(),
  parameters: z.lazy(() =>
    CarrierAccountDPDUKCreateRequestParameters$inboundSchema
  ),
});

/** @internal */
export type CarrierAccountDPDUKCreateRequest$Outbound = {
  carrier: string;
  parameters: CarrierAccountDPDUKCreateRequestParameters$Outbound;
};

/** @internal */
export const CarrierAccountDPDUKCreateRequest$outboundSchema: z.ZodType<
  CarrierAccountDPDUKCreateRequest$Outbound,
  z.ZodTypeDef,
  CarrierAccountDPDUKCreateRequest
> = z.object({
  carrier: z.string(),
  parameters: z.lazy(() =>
    CarrierAccountDPDUKCreateRequestParameters$outboundSchema
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountDPDUKCreateRequest$ {
  /** @deprecated use `CarrierAccountDPDUKCreateRequest$inboundSchema` instead. */
  export const inboundSchema = CarrierAccountDPDUKCreateRequest$inboundSchema;
  /** @deprecated use `CarrierAccountDPDUKCreateRequest$outboundSchema` instead. */
  export const outboundSchema = CarrierAccountDPDUKCreateRequest$outboundSchema;
  /** @deprecated use `CarrierAccountDPDUKCreateRequest$Outbound` instead. */
  export type Outbound = CarrierAccountDPDUKCreateRequest$Outbound;
}
