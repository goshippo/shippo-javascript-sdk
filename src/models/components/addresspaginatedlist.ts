/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";

export type AddressPaginatedList = {
  next?: string | undefined;
  previous?: string | undefined;
  results?: Array<Address> | undefined;
};

/** @internal */
export const AddressPaginatedList$inboundSchema: z.ZodType<
  AddressPaginatedList,
  z.ZodTypeDef,
  unknown
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  results: z.array(Address$inboundSchema).optional(),
});

/** @internal */
export type AddressPaginatedList$Outbound = {
  next?: string | undefined;
  previous?: string | undefined;
  results?: Array<Address$Outbound> | undefined;
};

/** @internal */
export const AddressPaginatedList$outboundSchema: z.ZodType<
  AddressPaginatedList$Outbound,
  z.ZodTypeDef,
  AddressPaginatedList
> = z.object({
  next: z.string().optional(),
  previous: z.string().optional(),
  results: z.array(Address$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressPaginatedList$ {
  /** @deprecated use `AddressPaginatedList$inboundSchema` instead. */
  export const inboundSchema = AddressPaginatedList$inboundSchema;
  /** @deprecated use `AddressPaginatedList$outboundSchema` instead. */
  export const outboundSchema = AddressPaginatedList$outboundSchema;
  /** @deprecated use `AddressPaginatedList$Outbound` instead. */
  export type Outbound = AddressPaginatedList$Outbound;
}
