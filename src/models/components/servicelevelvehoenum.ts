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
 * | veho_next_day | Veho Next Day |
 */
export const ServiceLevelVehoEnum = {
  VehoNextDay: "veho_next_day",
} as const;
/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | veho_next_day | Veho Next Day |
 */
export type ServiceLevelVehoEnum = ClosedEnum<typeof ServiceLevelVehoEnum>;

/** @internal */
export const ServiceLevelVehoEnum$inboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelVehoEnum
> = z.nativeEnum(ServiceLevelVehoEnum);

/** @internal */
export const ServiceLevelVehoEnum$outboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelVehoEnum
> = ServiceLevelVehoEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelVehoEnum$ {
  /** @deprecated use `ServiceLevelVehoEnum$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelVehoEnum$inboundSchema;
  /** @deprecated use `ServiceLevelVehoEnum$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelVehoEnum$outboundSchema;
}