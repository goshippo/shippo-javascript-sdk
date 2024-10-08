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
 * | uds_next_day | Next Day|
 */
export const ServiceLevelUDSEnum = {
  UdsNextDay: "uds_next_day",
} as const;
/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | uds_next_day | Next Day|
 */
export type ServiceLevelUDSEnum = ClosedEnum<typeof ServiceLevelUDSEnum>;

/** @internal */
export const ServiceLevelUDSEnum$inboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelUDSEnum
> = z.nativeEnum(ServiceLevelUDSEnum);

/** @internal */
export const ServiceLevelUDSEnum$outboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelUDSEnum
> = ServiceLevelUDSEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelUDSEnum$ {
  /** @deprecated use `ServiceLevelUDSEnum$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelUDSEnum$inboundSchema;
  /** @deprecated use `ServiceLevelUDSEnum$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelUDSEnum$outboundSchema;
}
