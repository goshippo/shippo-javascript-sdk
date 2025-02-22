/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Transaction,
  Transaction$inboundSchema,
  Transaction$Outbound,
  Transaction$outboundSchema,
} from "./transaction.js";
import {
  WebhookEventTypeEnum,
  WebhookEventTypeEnum$inboundSchema,
  WebhookEventTypeEnum$outboundSchema,
} from "./webhookeventtypeenum.js";

/**
 * Content of the webhook posted to the external URL
 */
export type WebhookPayloadTransaction = {
  /**
   * Type of event that triggered the webhook.
   */
  event?: WebhookEventTypeEnum | undefined;
  /**
   * Determines whether the webhook is a test webhook or not.
   */
  test?: boolean | undefined;
  data?: Transaction | undefined;
};

/** @internal */
export const WebhookPayloadTransaction$inboundSchema: z.ZodType<
  WebhookPayloadTransaction,
  z.ZodTypeDef,
  unknown
> = z.object({
  event: WebhookEventTypeEnum$inboundSchema.optional(),
  test: z.boolean().optional(),
  data: Transaction$inboundSchema.optional(),
});

/** @internal */
export type WebhookPayloadTransaction$Outbound = {
  event?: string | undefined;
  test?: boolean | undefined;
  data?: Transaction$Outbound | undefined;
};

/** @internal */
export const WebhookPayloadTransaction$outboundSchema: z.ZodType<
  WebhookPayloadTransaction$Outbound,
  z.ZodTypeDef,
  WebhookPayloadTransaction
> = z.object({
  event: WebhookEventTypeEnum$outboundSchema.optional(),
  test: z.boolean().optional(),
  data: Transaction$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookPayloadTransaction$ {
  /** @deprecated use `WebhookPayloadTransaction$inboundSchema` instead. */
  export const inboundSchema = WebhookPayloadTransaction$inboundSchema;
  /** @deprecated use `WebhookPayloadTransaction$outboundSchema` instead. */
  export const outboundSchema = WebhookPayloadTransaction$outboundSchema;
  /** @deprecated use `WebhookPayloadTransaction$Outbound` instead. */
  export type Outbound = WebhookPayloadTransaction$Outbound;
}

export function webhookPayloadTransactionToJSON(
  webhookPayloadTransaction: WebhookPayloadTransaction,
): string {
  return JSON.stringify(
    WebhookPayloadTransaction$outboundSchema.parse(webhookPayloadTransaction),
  );
}

export function webhookPayloadTransactionFromJSON(
  jsonString: string,
): SafeParseResult<WebhookPayloadTransaction, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookPayloadTransaction$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookPayloadTransaction' from JSON`,
  );
}
