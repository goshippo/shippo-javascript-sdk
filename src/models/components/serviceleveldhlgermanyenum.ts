/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | dhl_germany_europaket | DHL Germany Europaket|
 * | dhl_germany_paket | DHL Germany Paket|
 * | dhl_germany_paket_connect | DHL Germany Paket Connect|
 * | dhl_germany_paket_international | DHL Germany Paket International|
 * | dhl_germany_paket_priority | DHL Germany Paket Priority|
 * | dhl_germany_paket_sameday | DHL Germany Paket Sameday|
 */
export const ServiceLevelDHLGermanyEnum = {
  DhlGermanyEuropaket: "dhl_germany_europaket",
  DhlGermanyPaket: "dhl_germany_paket",
  DhlGermanyPaketConnect: "dhl_germany_paket_connect",
  DhlGermanyPaketInternational: "dhl_germany_paket_international",
  DhlGermanyPaketPriority: "dhl_germany_paket_priority",
  DhlGermanyPaketSameday: "dhl_germany_paket_sameday",
} as const;
/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | dhl_germany_europaket | DHL Germany Europaket|
 * | dhl_germany_paket | DHL Germany Paket|
 * | dhl_germany_paket_connect | DHL Germany Paket Connect|
 * | dhl_germany_paket_international | DHL Germany Paket International|
 * | dhl_germany_paket_priority | DHL Germany Paket Priority|
 * | dhl_germany_paket_sameday | DHL Germany Paket Sameday|
 */
export type ServiceLevelDHLGermanyEnum = ClosedEnum<
  typeof ServiceLevelDHLGermanyEnum
>;

/** @internal */
export const ServiceLevelDHLGermanyEnum$inboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelDHLGermanyEnum
> = z.nativeEnum(ServiceLevelDHLGermanyEnum);

/** @internal */
export const ServiceLevelDHLGermanyEnum$outboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelDHLGermanyEnum
> = ServiceLevelDHLGermanyEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelDHLGermanyEnum$ {
  /** @deprecated use `ServiceLevelDHLGermanyEnum$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelDHLGermanyEnum$inboundSchema;
  /** @deprecated use `ServiceLevelDHLGermanyEnum$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelDHLGermanyEnum$outboundSchema;
}
