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
 * | epacket | ePacket|
 * | epacket_plus | ePacket Plus|
 * | eparcel_premium | eParcel premium|
 * | apg_eparcel_expedited | eParcel Expedited|
 */
export const ServiceLevelAPGEnum = {
  Epacket: "epacket",
  EpacketPlus: "epacket_plus",
  EparcelPremium: "eparcel_premium",
  ApgEparcelExpedited: "apg_eparcel_expedited",
} as const;
/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | epacket | ePacket|
 * | epacket_plus | ePacket Plus|
 * | eparcel_premium | eParcel premium|
 * | apg_eparcel_expedited | eParcel Expedited|
 */
export type ServiceLevelAPGEnum = ClosedEnum<typeof ServiceLevelAPGEnum>;

/** @internal */
export const ServiceLevelAPGEnum$inboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelAPGEnum
> = z.nativeEnum(ServiceLevelAPGEnum);

/** @internal */
export const ServiceLevelAPGEnum$outboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelAPGEnum
> = ServiceLevelAPGEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelAPGEnum$ {
  /** @deprecated use `ServiceLevelAPGEnum$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelAPGEnum$inboundSchema;
  /** @deprecated use `ServiceLevelAPGEnum$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelAPGEnum$outboundSchema;
}
