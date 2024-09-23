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
 * | better_trucks_same_day | Same Day|
 * | better_trucks_next_day | Next Day|
 */
export const ServiceLevelBetterTrucksEnum = {
  BetterTrucksSameDay: "better_trucks_same_day",
  BetterTrucksNextDay: "better_trucks_next_day",
} as const;
/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | better_trucks_same_day | Same Day|
 * | better_trucks_next_day | Next Day|
 */
export type ServiceLevelBetterTrucksEnum = ClosedEnum<
  typeof ServiceLevelBetterTrucksEnum
>;

/** @internal */
export const ServiceLevelBetterTrucksEnum$inboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelBetterTrucksEnum
> = z.nativeEnum(ServiceLevelBetterTrucksEnum);

/** @internal */
export const ServiceLevelBetterTrucksEnum$outboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelBetterTrucksEnum
> = ServiceLevelBetterTrucksEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelBetterTrucksEnum$ {
  /** @deprecated use `ServiceLevelBetterTrucksEnum$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelBetterTrucksEnum$inboundSchema;
  /** @deprecated use `ServiceLevelBetterTrucksEnum$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelBetterTrucksEnum$outboundSchema;
}
