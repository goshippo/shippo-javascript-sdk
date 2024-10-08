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
 * | dpd_uk_ship_to_shop | Ship to shop|
 * | dpd_uk_1030 | Door to door 10.30 next day|
 * | dpd_uk_1200 | Door to door 12.00 next day|
 * | dpd_uk_saturday | Saturday Delivery|
 * | dpd_uk_saturday_1030 | Saturday Delivery 10.30|
 * | dpd_uk_saturday_1200 | Saturday Delivery 12.00|
 * | dpd_uk_sunday | Sunday Delivery|
 * | dpd_uk_sunday_1030 | Sunday Delivery 10.30|
 * | dpd_uk_sunday_1200 | Sunday Delivery 12.00|
 * | dpd_uk_next_day | Next day|
 * | dpd_uk_two_day | Two day|
 * | dpd_uk_classic | DPD Classic|
 * | dpd_uk_air_classic | DPD Air Classic|
 * | dpd_uk_air_express | DPD Air Express|
 * | dpd_uk_direct | DPD Direct|
 * | dpd_uk_direct_tracked_mail| DPD Tracked Mail|
 * | dpd_uk_pickup_returns | Pickup Returns|
 */
export const ServiceLevelDPDUKEnum = {
  DpdUkShipToShop: "dpd_uk_ship_to_shop",
  DpdUk1030: "dpd_uk_1030",
  DpdUk1200: "dpd_uk_1200",
  DpdUkSaturday: "dpd_uk_saturday",
  DpdUkSaturday1030: "dpd_uk_saturday_1030",
  DpdUkSaturday1200: "dpd_uk_saturday_1200",
  DpdUkSunday: "dpd_uk_sunday",
  DpdUkSunday1030: "dpd_uk_sunday_1030",
  DpdUkSunday1200: "dpd_uk_sunday_1200",
  DpdUkNextDay: "dpd_uk_next_day",
  DpdUkTwoDay: "dpd_uk_two_day",
  DpdUkClassic: "dpd_uk_classic",
  DpdUkAirClassic: "dpd_uk_air_classic",
  DpdUkAirExpress: "dpd_uk_air_express",
  DpdUkDirect: "dpd_uk_direct",
  DpdUkDirectTrackedMail: "dpd_uk_direct_tracked_mail",
  DpdUkPickupReturns: "dpd_uk_pickup_returns",
} as const;
/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | dpd_uk_ship_to_shop | Ship to shop|
 * | dpd_uk_1030 | Door to door 10.30 next day|
 * | dpd_uk_1200 | Door to door 12.00 next day|
 * | dpd_uk_saturday | Saturday Delivery|
 * | dpd_uk_saturday_1030 | Saturday Delivery 10.30|
 * | dpd_uk_saturday_1200 | Saturday Delivery 12.00|
 * | dpd_uk_sunday | Sunday Delivery|
 * | dpd_uk_sunday_1030 | Sunday Delivery 10.30|
 * | dpd_uk_sunday_1200 | Sunday Delivery 12.00|
 * | dpd_uk_next_day | Next day|
 * | dpd_uk_two_day | Two day|
 * | dpd_uk_classic | DPD Classic|
 * | dpd_uk_air_classic | DPD Air Classic|
 * | dpd_uk_air_express | DPD Air Express|
 * | dpd_uk_direct | DPD Direct|
 * | dpd_uk_direct_tracked_mail| DPD Tracked Mail|
 * | dpd_uk_pickup_returns | Pickup Returns|
 */
export type ServiceLevelDPDUKEnum = ClosedEnum<typeof ServiceLevelDPDUKEnum>;

/** @internal */
export const ServiceLevelDPDUKEnum$inboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelDPDUKEnum
> = z.nativeEnum(ServiceLevelDPDUKEnum);

/** @internal */
export const ServiceLevelDPDUKEnum$outboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelDPDUKEnum
> = ServiceLevelDPDUKEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelDPDUKEnum$ {
  /** @deprecated use `ServiceLevelDPDUKEnum$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelDPDUKEnum$inboundSchema;
  /** @deprecated use `ServiceLevelDPDUKEnum$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelDPDUKEnum$outboundSchema;
}
