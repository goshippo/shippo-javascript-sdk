/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Rate,
  Rate$inboundSchema,
  Rate$Outbound,
  Rate$outboundSchema,
} from "./rate.js";

export type RatePaginatedList = {
  next?: string | undefined;
  previous?: string | undefined;
  results?: Array<Rate> | undefined;
};

/** @internal */
export const RatePaginatedList$inboundSchema: z.ZodType<
  RatePaginatedList,
  z.ZodTypeDef,
  unknown
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  results: z.array(Rate$inboundSchema).optional(),
});

/** @internal */
export type RatePaginatedList$Outbound = {
  next?: string | undefined;
  previous?: string | undefined;
  results?: Array<Rate$Outbound> | undefined;
};

/** @internal */
export const RatePaginatedList$outboundSchema: z.ZodType<
  RatePaginatedList$Outbound,
  z.ZodTypeDef,
  RatePaginatedList
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  results: z.array(Rate$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RatePaginatedList$ {
  /** @deprecated use `RatePaginatedList$inboundSchema` instead. */
  export const inboundSchema = RatePaginatedList$inboundSchema;
  /** @deprecated use `RatePaginatedList$outboundSchema` instead. */
  export const outboundSchema = RatePaginatedList$outboundSchema;
  /** @deprecated use `RatePaginatedList$Outbound` instead. */
  export type Outbound = RatePaginatedList$Outbound;
}

export function ratePaginatedListToJSON(
  ratePaginatedList: RatePaginatedList,
): string {
  return JSON.stringify(
    RatePaginatedList$outboundSchema.parse(ratePaginatedList),
  );
}

export function ratePaginatedListFromJSON(
  jsonString: string,
): SafeParseResult<RatePaginatedList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RatePaginatedList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RatePaginatedList' from JSON`,
  );
}
