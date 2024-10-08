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
 * | purolator_ground | Ground|
 * | purolator_ground9_am | Ground 9am|
 * | purolator_ground1030_am | Ground 10:30am|
 * | purolator_ground_distribution | Ground Distribution|
 * | purolator_ground_evening | Ground Evening|
 * | purolator_ground_us | Ground US|
 * | purolator_express | Express|
 * | purolator_express9_am | Express 9am|
 * | purolator_express1030_am | Express 10am|
 * | purolator_express_evening | Express Evening|
 * | purolator_express_us | Express US|
 * | purolator_express_us9_am | Express US 9am|
 * | purolator_express_us1030_am | Express US 10:30am|
 * | purolator_express_us1200 | Express US 12pm|
 * | purolator_express_international | Express International|
 * | purolator_express_international9_am | Express International 9am|
 * | purolator_express_international1030_am | Express International 10:30am|
 * | purolator_express_international1200 | Express International 12pm|
 */
export const ServiceLevelPurolatorEnum = {
  PurolatorGround: "purolator_ground",
  PurolatorGround9Am: "purolator_ground9_am",
  PurolatorGround1030Am: "purolator_ground1030_am",
  PurolatorGroundDistribution: "purolator_ground_distribution",
  PurolatorGroundEvening: "purolator_ground_evening",
  PurolatorGroundUs: "purolator_ground_us",
  PurolatorExpress: "purolator_express",
  PurolatorExpress9Am: "purolator_express9_am",
  PurolatorExpress1030Am: "purolator_express1030_am",
  PurolatorExpressEvening: "purolator_express_evening",
  PurolatorExpressUs: "purolator_express_us",
  PurolatorExpressUs9Am: "purolator_express_us9_am",
  PurolatorExpressUs1030Am: "purolator_express_us1030_am",
  PurolatorExpressUs1200: "purolator_express_us1200",
  PurolatorExpressInternational: "purolator_express_international",
  PurolatorExpressInternational9Am: "purolator_express_international9_am",
  PurolatorExpressInternational1030Am: "purolator_express_international1030_am",
  PurolatorExpressInternational1200: "purolator_express_international1200",
} as const;
/**
 * |Token | Service name|
 *
 * @remarks
 * |:---|:---|
 * | purolator_ground | Ground|
 * | purolator_ground9_am | Ground 9am|
 * | purolator_ground1030_am | Ground 10:30am|
 * | purolator_ground_distribution | Ground Distribution|
 * | purolator_ground_evening | Ground Evening|
 * | purolator_ground_us | Ground US|
 * | purolator_express | Express|
 * | purolator_express9_am | Express 9am|
 * | purolator_express1030_am | Express 10am|
 * | purolator_express_evening | Express Evening|
 * | purolator_express_us | Express US|
 * | purolator_express_us9_am | Express US 9am|
 * | purolator_express_us1030_am | Express US 10:30am|
 * | purolator_express_us1200 | Express US 12pm|
 * | purolator_express_international | Express International|
 * | purolator_express_international9_am | Express International 9am|
 * | purolator_express_international1030_am | Express International 10:30am|
 * | purolator_express_international1200 | Express International 12pm|
 */
export type ServiceLevelPurolatorEnum = ClosedEnum<
  typeof ServiceLevelPurolatorEnum
>;

/** @internal */
export const ServiceLevelPurolatorEnum$inboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelPurolatorEnum
> = z.nativeEnum(ServiceLevelPurolatorEnum);

/** @internal */
export const ServiceLevelPurolatorEnum$outboundSchema: z.ZodNativeEnum<
  typeof ServiceLevelPurolatorEnum
> = ServiceLevelPurolatorEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelPurolatorEnum$ {
  /** @deprecated use `ServiceLevelPurolatorEnum$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelPurolatorEnum$inboundSchema;
  /** @deprecated use `ServiceLevelPurolatorEnum$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelPurolatorEnum$outboundSchema;
}
