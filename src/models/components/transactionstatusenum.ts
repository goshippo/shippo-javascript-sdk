/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Indicates the status of the Transaction.
 */
export const TransactionStatusEnum = {
  Waiting: "WAITING",
  Queued: "QUEUED",
  Success: "SUCCESS",
  Error: "ERROR",
  Refunded: "REFUNDED",
  Refundpending: "REFUNDPENDING",
  Refundrejected: "REFUNDREJECTED",
} as const;
/**
 * Indicates the status of the Transaction.
 */
export type TransactionStatusEnum = ClosedEnum<typeof TransactionStatusEnum>;

/** @internal */
export const TransactionStatusEnum$inboundSchema: z.ZodNativeEnum<
  typeof TransactionStatusEnum
> = z.nativeEnum(TransactionStatusEnum);

/** @internal */
export const TransactionStatusEnum$outboundSchema: z.ZodNativeEnum<
  typeof TransactionStatusEnum
> = TransactionStatusEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionStatusEnum$ {
  /** @deprecated use `TransactionStatusEnum$inboundSchema` instead. */
  export const inboundSchema = TransactionStatusEnum$inboundSchema;
  /** @deprecated use `TransactionStatusEnum$outboundSchema` instead. */
  export const outboundSchema = TransactionStatusEnum$outboundSchema;
}
