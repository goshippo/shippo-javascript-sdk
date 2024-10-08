/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const ShipmentExtraLasershipAttributesEnum = {
  TwoPersonDelivery: "TwoPersonDelivery",
  Explosive: "Explosive",
  Alcohol: "Alcohol",
  Hazmat: "Hazmat",
  ControlledSubstance: "ControlledSubstance",
  Refrigerated: "Refrigerated",
  DryIce: "DryIce",
  Perishable: "Perishable",
  NoRTS: "NoRTS",
} as const;
export type ShipmentExtraLasershipAttributesEnum = ClosedEnum<
  typeof ShipmentExtraLasershipAttributesEnum
>;

/** @internal */
export const ShipmentExtraLasershipAttributesEnum$inboundSchema:
  z.ZodNativeEnum<typeof ShipmentExtraLasershipAttributesEnum> = z.nativeEnum(
    ShipmentExtraLasershipAttributesEnum,
  );

/** @internal */
export const ShipmentExtraLasershipAttributesEnum$outboundSchema:
  z.ZodNativeEnum<typeof ShipmentExtraLasershipAttributesEnum> =
    ShipmentExtraLasershipAttributesEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ShipmentExtraLasershipAttributesEnum$ {
  /** @deprecated use `ShipmentExtraLasershipAttributesEnum$inboundSchema` instead. */
  export const inboundSchema =
    ShipmentExtraLasershipAttributesEnum$inboundSchema;
  /** @deprecated use `ShipmentExtraLasershipAttributesEnum$outboundSchema` instead. */
  export const outboundSchema =
    ShipmentExtraLasershipAttributesEnum$outboundSchema;
}
