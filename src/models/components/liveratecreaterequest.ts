/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AddressCompleteCreateRequest,
  AddressCompleteCreateRequest$inboundSchema,
  AddressCompleteCreateRequest$Outbound,
  AddressCompleteCreateRequest$outboundSchema,
} from "./addresscompletecreaterequest.js";
import {
  LineItem,
  LineItem$inboundSchema,
  LineItem$Outbound,
  LineItem$outboundSchema,
} from "./lineitem.js";
import {
  Parcel,
  Parcel$inboundSchema,
  Parcel$Outbound,
  Parcel$outboundSchema,
} from "./parcel.js";

/**
 * The sender address, which includes your name, company name, street address, city, state, zip code,
 *
 * @remarks
 * country, phone number, and email address (strings). Special characters should not be included in
 * any address element, especially name, company, and email.
 */
export type LiveRateCreateRequestAddressFrom =
  | AddressCompleteCreateRequest
  | string;

/**
 * The recipient address, which includes the recipient's name, company name, street address, city, state, zip code,
 *
 * @remarks
 * country, phone number, and email address (strings). Special characters should not be included in
 * any address element, especially name, company, and email.
 */
export type LiveRateCreateRequestAddressTo =
  | AddressCompleteCreateRequest
  | string;

/**
 * Object ID for an existing User Parcel Template OR a fully formed Parcel object.
 */
export type LiveRateCreateRequestParcel = Parcel | string;

export type LiveRateCreateRequest = {
  /**
   * The sender address, which includes your name, company name, street address, city, state, zip code,
   *
   * @remarks
   * country, phone number, and email address (strings). Special characters should not be included in
   * any address element, especially name, company, and email.
   */
  addressFrom?: AddressCompleteCreateRequest | string | undefined;
  /**
   * The recipient address, which includes the recipient's name, company name, street address, city, state, zip code,
   *
   * @remarks
   * country, phone number, and email address (strings). Special characters should not be included in
   * any address element, especially name, company, and email.
   */
  addressTo: AddressCompleteCreateRequest | string;
  /**
   * Array of Line Item objects
   */
  lineItems: Array<LineItem>;
  /**
   * Object ID for an existing User Parcel Template OR a fully formed Parcel object.
   */
  parcel?: Parcel | string | undefined;
};

/** @internal */
export const LiveRateCreateRequestAddressFrom$inboundSchema: z.ZodType<
  LiveRateCreateRequestAddressFrom,
  z.ZodTypeDef,
  unknown
> = z.union([AddressCompleteCreateRequest$inboundSchema, z.string()]);

/** @internal */
export type LiveRateCreateRequestAddressFrom$Outbound =
  | AddressCompleteCreateRequest$Outbound
  | string;

/** @internal */
export const LiveRateCreateRequestAddressFrom$outboundSchema: z.ZodType<
  LiveRateCreateRequestAddressFrom$Outbound,
  z.ZodTypeDef,
  LiveRateCreateRequestAddressFrom
> = z.union([AddressCompleteCreateRequest$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiveRateCreateRequestAddressFrom$ {
  /** @deprecated use `LiveRateCreateRequestAddressFrom$inboundSchema` instead. */
  export const inboundSchema = LiveRateCreateRequestAddressFrom$inboundSchema;
  /** @deprecated use `LiveRateCreateRequestAddressFrom$outboundSchema` instead. */
  export const outboundSchema = LiveRateCreateRequestAddressFrom$outboundSchema;
  /** @deprecated use `LiveRateCreateRequestAddressFrom$Outbound` instead. */
  export type Outbound = LiveRateCreateRequestAddressFrom$Outbound;
}

export function liveRateCreateRequestAddressFromToJSON(
  liveRateCreateRequestAddressFrom: LiveRateCreateRequestAddressFrom,
): string {
  return JSON.stringify(
    LiveRateCreateRequestAddressFrom$outboundSchema.parse(
      liveRateCreateRequestAddressFrom,
    ),
  );
}

export function liveRateCreateRequestAddressFromFromJSON(
  jsonString: string,
): SafeParseResult<LiveRateCreateRequestAddressFrom, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LiveRateCreateRequestAddressFrom$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LiveRateCreateRequestAddressFrom' from JSON`,
  );
}

/** @internal */
export const LiveRateCreateRequestAddressTo$inboundSchema: z.ZodType<
  LiveRateCreateRequestAddressTo,
  z.ZodTypeDef,
  unknown
> = z.union([AddressCompleteCreateRequest$inboundSchema, z.string()]);

/** @internal */
export type LiveRateCreateRequestAddressTo$Outbound =
  | AddressCompleteCreateRequest$Outbound
  | string;

/** @internal */
export const LiveRateCreateRequestAddressTo$outboundSchema: z.ZodType<
  LiveRateCreateRequestAddressTo$Outbound,
  z.ZodTypeDef,
  LiveRateCreateRequestAddressTo
> = z.union([AddressCompleteCreateRequest$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiveRateCreateRequestAddressTo$ {
  /** @deprecated use `LiveRateCreateRequestAddressTo$inboundSchema` instead. */
  export const inboundSchema = LiveRateCreateRequestAddressTo$inboundSchema;
  /** @deprecated use `LiveRateCreateRequestAddressTo$outboundSchema` instead. */
  export const outboundSchema = LiveRateCreateRequestAddressTo$outboundSchema;
  /** @deprecated use `LiveRateCreateRequestAddressTo$Outbound` instead. */
  export type Outbound = LiveRateCreateRequestAddressTo$Outbound;
}

export function liveRateCreateRequestAddressToToJSON(
  liveRateCreateRequestAddressTo: LiveRateCreateRequestAddressTo,
): string {
  return JSON.stringify(
    LiveRateCreateRequestAddressTo$outboundSchema.parse(
      liveRateCreateRequestAddressTo,
    ),
  );
}

export function liveRateCreateRequestAddressToFromJSON(
  jsonString: string,
): SafeParseResult<LiveRateCreateRequestAddressTo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LiveRateCreateRequestAddressTo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LiveRateCreateRequestAddressTo' from JSON`,
  );
}

/** @internal */
export const LiveRateCreateRequestParcel$inboundSchema: z.ZodType<
  LiveRateCreateRequestParcel,
  z.ZodTypeDef,
  unknown
> = z.union([Parcel$inboundSchema, z.string()]);

/** @internal */
export type LiveRateCreateRequestParcel$Outbound = Parcel$Outbound | string;

/** @internal */
export const LiveRateCreateRequestParcel$outboundSchema: z.ZodType<
  LiveRateCreateRequestParcel$Outbound,
  z.ZodTypeDef,
  LiveRateCreateRequestParcel
> = z.union([Parcel$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiveRateCreateRequestParcel$ {
  /** @deprecated use `LiveRateCreateRequestParcel$inboundSchema` instead. */
  export const inboundSchema = LiveRateCreateRequestParcel$inboundSchema;
  /** @deprecated use `LiveRateCreateRequestParcel$outboundSchema` instead. */
  export const outboundSchema = LiveRateCreateRequestParcel$outboundSchema;
  /** @deprecated use `LiveRateCreateRequestParcel$Outbound` instead. */
  export type Outbound = LiveRateCreateRequestParcel$Outbound;
}

export function liveRateCreateRequestParcelToJSON(
  liveRateCreateRequestParcel: LiveRateCreateRequestParcel,
): string {
  return JSON.stringify(
    LiveRateCreateRequestParcel$outboundSchema.parse(
      liveRateCreateRequestParcel,
    ),
  );
}

export function liveRateCreateRequestParcelFromJSON(
  jsonString: string,
): SafeParseResult<LiveRateCreateRequestParcel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LiveRateCreateRequestParcel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LiveRateCreateRequestParcel' from JSON`,
  );
}

/** @internal */
export const LiveRateCreateRequest$inboundSchema: z.ZodType<
  LiveRateCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  address_from: z.union([
    AddressCompleteCreateRequest$inboundSchema,
    z.string(),
  ]).optional(),
  address_to: z.union([AddressCompleteCreateRequest$inboundSchema, z.string()]),
  line_items: z.array(LineItem$inboundSchema),
  parcel: z.union([Parcel$inboundSchema, z.string()]).optional(),
}).transform((v) => {
  return remap$(v, {
    "address_from": "addressFrom",
    "address_to": "addressTo",
    "line_items": "lineItems",
  });
});

/** @internal */
export type LiveRateCreateRequest$Outbound = {
  address_from?: AddressCompleteCreateRequest$Outbound | string | undefined;
  address_to: AddressCompleteCreateRequest$Outbound | string;
  line_items: Array<LineItem$Outbound>;
  parcel?: Parcel$Outbound | string | undefined;
};

/** @internal */
export const LiveRateCreateRequest$outboundSchema: z.ZodType<
  LiveRateCreateRequest$Outbound,
  z.ZodTypeDef,
  LiveRateCreateRequest
> = z.object({
  addressFrom: z.union([
    AddressCompleteCreateRequest$outboundSchema,
    z.string(),
  ]).optional(),
  addressTo: z.union([AddressCompleteCreateRequest$outboundSchema, z.string()]),
  lineItems: z.array(LineItem$outboundSchema),
  parcel: z.union([Parcel$outboundSchema, z.string()]).optional(),
}).transform((v) => {
  return remap$(v, {
    addressFrom: "address_from",
    addressTo: "address_to",
    lineItems: "line_items",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiveRateCreateRequest$ {
  /** @deprecated use `LiveRateCreateRequest$inboundSchema` instead. */
  export const inboundSchema = LiveRateCreateRequest$inboundSchema;
  /** @deprecated use `LiveRateCreateRequest$outboundSchema` instead. */
  export const outboundSchema = LiveRateCreateRequest$outboundSchema;
  /** @deprecated use `LiveRateCreateRequest$Outbound` instead. */
  export type Outbound = LiveRateCreateRequest$Outbound;
}

export function liveRateCreateRequestToJSON(
  liveRateCreateRequest: LiveRateCreateRequest,
): string {
  return JSON.stringify(
    LiveRateCreateRequest$outboundSchema.parse(liveRateCreateRequest),
  );
}

export function liveRateCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<LiveRateCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LiveRateCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LiveRateCreateRequest' from JSON`,
  );
}
