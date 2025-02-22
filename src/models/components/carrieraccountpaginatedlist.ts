/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CarrierAccountWithExtraInfo,
  CarrierAccountWithExtraInfo$inboundSchema,
  CarrierAccountWithExtraInfo$Outbound,
  CarrierAccountWithExtraInfo$outboundSchema,
} from "./carrieraccountwithextrainfo.js";

export type CarrierAccountPaginatedList = {
  next?: string | undefined;
  previous?: string | undefined;
  results?: Array<CarrierAccountWithExtraInfo> | undefined;
};

/** @internal */
export const CarrierAccountPaginatedList$inboundSchema: z.ZodType<
  CarrierAccountPaginatedList,
  z.ZodTypeDef,
  unknown
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  results: z.array(CarrierAccountWithExtraInfo$inboundSchema).optional(),
});

/** @internal */
export type CarrierAccountPaginatedList$Outbound = {
  next?: string | undefined;
  previous?: string | undefined;
  results?: Array<CarrierAccountWithExtraInfo$Outbound> | undefined;
};

/** @internal */
export const CarrierAccountPaginatedList$outboundSchema: z.ZodType<
  CarrierAccountPaginatedList$Outbound,
  z.ZodTypeDef,
  CarrierAccountPaginatedList
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  results: z.array(CarrierAccountWithExtraInfo$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CarrierAccountPaginatedList$ {
  /** @deprecated use `CarrierAccountPaginatedList$inboundSchema` instead. */
  export const inboundSchema = CarrierAccountPaginatedList$inboundSchema;
  /** @deprecated use `CarrierAccountPaginatedList$outboundSchema` instead. */
  export const outboundSchema = CarrierAccountPaginatedList$outboundSchema;
  /** @deprecated use `CarrierAccountPaginatedList$Outbound` instead. */
  export type Outbound = CarrierAccountPaginatedList$Outbound;
}

export function carrierAccountPaginatedListToJSON(
  carrierAccountPaginatedList: CarrierAccountPaginatedList,
): string {
  return JSON.stringify(
    CarrierAccountPaginatedList$outboundSchema.parse(
      carrierAccountPaginatedList,
    ),
  );
}

export function carrierAccountPaginatedListFromJSON(
  jsonString: string,
): SafeParseResult<CarrierAccountPaginatedList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CarrierAccountPaginatedList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CarrierAccountPaginatedList' from JSON`,
  );
}
