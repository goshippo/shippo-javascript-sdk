/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ServiceLevelAirterraEnum,
  ServiceLevelAirterraEnum$inboundSchema,
  ServiceLevelAirterraEnum$outboundSchema,
} from "./servicelevelairterraenum.js";
import {
  ServiceLevelAPCPostalEnum,
  ServiceLevelAPCPostalEnum$inboundSchema,
  ServiceLevelAPCPostalEnum$outboundSchema,
} from "./servicelevelapcpostalenum.js";
import {
  ServiceLevelAPGEnum,
  ServiceLevelAPGEnum$inboundSchema,
  ServiceLevelAPGEnum$outboundSchema,
} from "./servicelevelapgenum.js";
import {
  ServiceLevelAramexAustraliaEnum,
  ServiceLevelAramexAustraliaEnum$inboundSchema,
  ServiceLevelAramexAustraliaEnum$outboundSchema,
} from "./servicelevelaramexaustraliaenum.js";
import {
  ServiceLevelAsendiaEnum,
  ServiceLevelAsendiaEnum$inboundSchema,
  ServiceLevelAsendiaEnum$outboundSchema,
} from "./servicelevelasendiaenum.js";
import {
  ServiceLevelAustraliaPostEnum,
  ServiceLevelAustraliaPostEnum$inboundSchema,
  ServiceLevelAustraliaPostEnum$outboundSchema,
} from "./servicelevelaustraliapostenum.js";
import {
  ServiceLevelBetterTrucksEnum,
  ServiceLevelBetterTrucksEnum$inboundSchema,
  ServiceLevelBetterTrucksEnum$outboundSchema,
} from "./servicelevelbettertrucksenum.js";
import {
  ServiceLevelCanadaPostEnum,
  ServiceLevelCanadaPostEnum$inboundSchema,
  ServiceLevelCanadaPostEnum$outboundSchema,
} from "./servicelevelcanadapostenum.js";
import {
  ServiceLevelCDLEnum,
  ServiceLevelCDLEnum$inboundSchema,
  ServiceLevelCDLEnum$outboundSchema,
} from "./servicelevelcdlenum.js";
import {
  ServiceLevelChronopostEnum,
  ServiceLevelChronopostEnum$inboundSchema,
  ServiceLevelChronopostEnum$outboundSchema,
} from "./servicelevelchronopostenum.js";
import {
  ServiceLevelColissimoEnum,
  ServiceLevelColissimoEnum$inboundSchema,
  ServiceLevelColissimoEnum$outboundSchema,
} from "./servicelevelcolissimoenum.js";
import {
  ServiceLevelCorreosEspanaEnum,
  ServiceLevelCorreosEspanaEnum$inboundSchema,
  ServiceLevelCorreosEspanaEnum$outboundSchema,
} from "./servicelevelcorreosespanaenum.js";
import {
  ServiceLevelDeutschePostEnum,
  ServiceLevelDeutschePostEnum$inboundSchema,
  ServiceLevelDeutschePostEnum$outboundSchema,
} from "./serviceleveldeutschepostenum.js";
import {
  ServiceLevelDHLeCommerceEnum,
  ServiceLevelDHLeCommerceEnum$inboundSchema,
  ServiceLevelDHLeCommerceEnum$outboundSchema,
} from "./serviceleveldhlecommerceenum.js";
import {
  ServiceLevelDHLExpressEnum,
  ServiceLevelDHLExpressEnum$inboundSchema,
  ServiceLevelDHLExpressEnum$outboundSchema,
} from "./serviceleveldhlexpressenum.js";
import {
  ServiceLevelDHLGermanyEnum,
  ServiceLevelDHLGermanyEnum$inboundSchema,
  ServiceLevelDHLGermanyEnum$outboundSchema,
} from "./serviceleveldhlgermanyenum.js";
import {
  ServiceLevelDPDDEEnum,
  ServiceLevelDPDDEEnum$inboundSchema,
  ServiceLevelDPDDEEnum$outboundSchema,
} from "./serviceleveldpddeenum.js";
import {
  ServiceLevelDPDUKEnum,
  ServiceLevelDPDUKEnum$inboundSchema,
  ServiceLevelDPDUKEnum$outboundSchema,
} from "./serviceleveldpdukenum.js";
import {
  ServiceLevelePostGlobalEnum,
  ServiceLevelePostGlobalEnum$inboundSchema,
  ServiceLevelePostGlobalEnum$outboundSchema,
} from "./servicelevelepostglobalenum.js";
import {
  ServiceLevelEvriUKEnum,
  ServiceLevelEvriUKEnum$inboundSchema,
  ServiceLevelEvriUKEnum$outboundSchema,
} from "./servicelevelevriukenum.js";
import {
  ServiceLevelFedExEnum,
  ServiceLevelFedExEnum$inboundSchema,
  ServiceLevelFedExEnum$outboundSchema,
} from "./servicelevelfedexenum.js";
import {
  ServiceLevelGlobegisticsEnum,
  ServiceLevelGlobegisticsEnum$inboundSchema,
  ServiceLevelGlobegisticsEnum$outboundSchema,
} from "./servicelevelglobegisticsenum.js";
import {
  ServiceLevelGLSUSEnum,
  ServiceLevelGLSUSEnum$inboundSchema,
  ServiceLevelGLSUSEnum$outboundSchema,
} from "./servicelevelglsusenum.js";
import {
  ServiceLevelJitsuEnum,
  ServiceLevelJitsuEnum$inboundSchema,
  ServiceLevelJitsuEnum$outboundSchema,
} from "./serviceleveljitsuenum.js";
import {
  ServiceLevelLasershipEnum,
  ServiceLevelLasershipEnum$inboundSchema,
  ServiceLevelLasershipEnum$outboundSchema,
} from "./servicelevellasershipenum.js";
import {
  ServiceLevelLSOEnum,
  ServiceLevelLSOEnum$inboundSchema,
  ServiceLevelLSOEnum$outboundSchema,
} from "./servicelevellsoenum.js";
import {
  ServiceLevelMondialRelayEnum,
  ServiceLevelMondialRelayEnum$inboundSchema,
  ServiceLevelMondialRelayEnum$outboundSchema,
} from "./servicelevelmondialrelayenum.js";
import {
  ServiceLevelOnTracEnum,
  ServiceLevelOnTracEnum$inboundSchema,
  ServiceLevelOnTracEnum$outboundSchema,
} from "./servicelevelontracenum.js";
import {
  ServiceLevelParcelforceEnum,
  ServiceLevelParcelforceEnum$inboundSchema,
  ServiceLevelParcelforceEnum$outboundSchema,
} from "./servicelevelparcelforceenum.js";
import {
  ServiceLevelPostItalianeEnum,
  ServiceLevelPostItalianeEnum$inboundSchema,
  ServiceLevelPostItalianeEnum$outboundSchema,
} from "./servicelevelpostitalianeenum.js";
import {
  ServiceLevelPurolatorEnum,
  ServiceLevelPurolatorEnum$inboundSchema,
  ServiceLevelPurolatorEnum$outboundSchema,
} from "./servicelevelpurolatorenum.js";
import {
  ServiceLevelRoyalMailEnum,
  ServiceLevelRoyalMailEnum$inboundSchema,
  ServiceLevelRoyalMailEnum$outboundSchema,
} from "./servicelevelroyalmailenum.js";
import {
  ServiceLevelSendleEnum,
  ServiceLevelSendleEnum$inboundSchema,
  ServiceLevelSendleEnum$outboundSchema,
} from "./servicelevelsendleenum.js";
import {
  ServiceLevelSwyftEnum,
  ServiceLevelSwyftEnum$inboundSchema,
  ServiceLevelSwyftEnum$outboundSchema,
} from "./servicelevelswyftenum.js";
import {
  ServiceLevelUDSEnum,
  ServiceLevelUDSEnum$inboundSchema,
  ServiceLevelUDSEnum$outboundSchema,
} from "./serviceleveludsenum.js";
import {
  ServiceLevelUPSEnum,
  ServiceLevelUPSEnum$inboundSchema,
  ServiceLevelUPSEnum$outboundSchema,
} from "./servicelevelupsenum.js";
import {
  ServiceLevelUSPSEnum,
  ServiceLevelUSPSEnum$inboundSchema,
  ServiceLevelUSPSEnum$outboundSchema,
} from "./serviceleveluspsenum.js";
import {
  ServiceLevelVehoEnum,
  ServiceLevelVehoEnum$inboundSchema,
  ServiceLevelVehoEnum$outboundSchema,
} from "./servicelevelvehoenum.js";

export type ServiceLevelEnumSet =
  | ServiceLevelUSPSEnum
  | ServiceLevelFedExEnum
  | ServiceLevelUPSEnum
  | ServiceLevelAirterraEnum
  | ServiceLevelAPCPostalEnum
  | ServiceLevelAsendiaEnum
  | ServiceLevelAustraliaPostEnum
  | ServiceLevelAPGEnum
  | ServiceLevelBetterTrucksEnum
  | ServiceLevelCanadaPostEnum
  | ServiceLevelCDLEnum
  | ServiceLevelChronopostEnum
  | ServiceLevelCorreosEspanaEnum
  | ServiceLevelColissimoEnum
  | ServiceLevelPurolatorEnum
  | ServiceLevelDHLExpressEnum
  | ServiceLevelDHLeCommerceEnum
  | ServiceLevelDHLGermanyEnum
  | ServiceLevelDPDDEEnum
  | ServiceLevelDPDUKEnum
  | ServiceLevelDeutschePostEnum
  | ServiceLevelAramexAustraliaEnum
  | ServiceLevelGlobegisticsEnum
  | ServiceLevelGLSUSEnum
  | ServiceLevelLSOEnum
  | ServiceLevelMondialRelayEnum
  | ServiceLevelParcelforceEnum
  | ServiceLevelPostItalianeEnum
  | ServiceLevelePostGlobalEnum
  | ServiceLevelRoyalMailEnum
  | ServiceLevelSendleEnum
  | ServiceLevelOnTracEnum
  | ServiceLevelJitsuEnum
  | ServiceLevelLasershipEnum
  | ServiceLevelEvriUKEnum
  | ServiceLevelUDSEnum
  | ServiceLevelVehoEnum
  | ServiceLevelSwyftEnum;

/** @internal */
export const ServiceLevelEnumSet$inboundSchema: z.ZodType<
  ServiceLevelEnumSet,
  z.ZodTypeDef,
  unknown
> = z.union([
  ServiceLevelUSPSEnum$inboundSchema,
  ServiceLevelFedExEnum$inboundSchema,
  ServiceLevelUPSEnum$inboundSchema,
  ServiceLevelAirterraEnum$inboundSchema,
  ServiceLevelAPCPostalEnum$inboundSchema,
  ServiceLevelAsendiaEnum$inboundSchema,
  ServiceLevelAustraliaPostEnum$inboundSchema,
  ServiceLevelAPGEnum$inboundSchema,
  ServiceLevelBetterTrucksEnum$inboundSchema,
  ServiceLevelCanadaPostEnum$inboundSchema,
  ServiceLevelCDLEnum$inboundSchema,
  ServiceLevelChronopostEnum$inboundSchema,
  ServiceLevelCorreosEspanaEnum$inboundSchema,
  ServiceLevelColissimoEnum$inboundSchema,
  ServiceLevelPurolatorEnum$inboundSchema,
  ServiceLevelDHLExpressEnum$inboundSchema,
  ServiceLevelDHLeCommerceEnum$inboundSchema,
  ServiceLevelDHLGermanyEnum$inboundSchema,
  ServiceLevelDPDDEEnum$inboundSchema,
  ServiceLevelDPDUKEnum$inboundSchema,
  ServiceLevelDeutschePostEnum$inboundSchema,
  ServiceLevelAramexAustraliaEnum$inboundSchema,
  ServiceLevelGlobegisticsEnum$inboundSchema,
  ServiceLevelGLSUSEnum$inboundSchema,
  ServiceLevelLSOEnum$inboundSchema,
  ServiceLevelMondialRelayEnum$inboundSchema,
  ServiceLevelParcelforceEnum$inboundSchema,
  ServiceLevelPostItalianeEnum$inboundSchema,
  ServiceLevelePostGlobalEnum$inboundSchema,
  ServiceLevelRoyalMailEnum$inboundSchema,
  ServiceLevelSendleEnum$inboundSchema,
  ServiceLevelOnTracEnum$inboundSchema,
  ServiceLevelJitsuEnum$inboundSchema,
  ServiceLevelLasershipEnum$inboundSchema,
  ServiceLevelEvriUKEnum$inboundSchema,
  ServiceLevelUDSEnum$inboundSchema,
  ServiceLevelVehoEnum$inboundSchema,
  ServiceLevelSwyftEnum$inboundSchema,
]);

/** @internal */
export type ServiceLevelEnumSet$Outbound =
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string
  | string;

/** @internal */
export const ServiceLevelEnumSet$outboundSchema: z.ZodType<
  ServiceLevelEnumSet$Outbound,
  z.ZodTypeDef,
  ServiceLevelEnumSet
> = z.union([
  ServiceLevelUSPSEnum$outboundSchema,
  ServiceLevelFedExEnum$outboundSchema,
  ServiceLevelUPSEnum$outboundSchema,
  ServiceLevelAirterraEnum$outboundSchema,
  ServiceLevelAPCPostalEnum$outboundSchema,
  ServiceLevelAsendiaEnum$outboundSchema,
  ServiceLevelAustraliaPostEnum$outboundSchema,
  ServiceLevelAPGEnum$outboundSchema,
  ServiceLevelBetterTrucksEnum$outboundSchema,
  ServiceLevelCanadaPostEnum$outboundSchema,
  ServiceLevelCDLEnum$outboundSchema,
  ServiceLevelChronopostEnum$outboundSchema,
  ServiceLevelCorreosEspanaEnum$outboundSchema,
  ServiceLevelColissimoEnum$outboundSchema,
  ServiceLevelPurolatorEnum$outboundSchema,
  ServiceLevelDHLExpressEnum$outboundSchema,
  ServiceLevelDHLeCommerceEnum$outboundSchema,
  ServiceLevelDHLGermanyEnum$outboundSchema,
  ServiceLevelDPDDEEnum$outboundSchema,
  ServiceLevelDPDUKEnum$outboundSchema,
  ServiceLevelDeutschePostEnum$outboundSchema,
  ServiceLevelAramexAustraliaEnum$outboundSchema,
  ServiceLevelGlobegisticsEnum$outboundSchema,
  ServiceLevelGLSUSEnum$outboundSchema,
  ServiceLevelLSOEnum$outboundSchema,
  ServiceLevelMondialRelayEnum$outboundSchema,
  ServiceLevelParcelforceEnum$outboundSchema,
  ServiceLevelPostItalianeEnum$outboundSchema,
  ServiceLevelePostGlobalEnum$outboundSchema,
  ServiceLevelRoyalMailEnum$outboundSchema,
  ServiceLevelSendleEnum$outboundSchema,
  ServiceLevelOnTracEnum$outboundSchema,
  ServiceLevelJitsuEnum$outboundSchema,
  ServiceLevelLasershipEnum$outboundSchema,
  ServiceLevelEvriUKEnum$outboundSchema,
  ServiceLevelUDSEnum$outboundSchema,
  ServiceLevelVehoEnum$outboundSchema,
  ServiceLevelSwyftEnum$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ServiceLevelEnumSet$ {
  /** @deprecated use `ServiceLevelEnumSet$inboundSchema` instead. */
  export const inboundSchema = ServiceLevelEnumSet$inboundSchema;
  /** @deprecated use `ServiceLevelEnumSet$outboundSchema` instead. */
  export const outboundSchema = ServiceLevelEnumSet$outboundSchema;
  /** @deprecated use `ServiceLevelEnumSet$Outbound` instead. */
  export type Outbound = ServiceLevelEnumSet$Outbound;
}

export function serviceLevelEnumSetToJSON(
  serviceLevelEnumSet: ServiceLevelEnumSet,
): string {
  return JSON.stringify(
    ServiceLevelEnumSet$outboundSchema.parse(serviceLevelEnumSet),
  );
}

export function serviceLevelEnumSetFromJSON(
  jsonString: string,
): SafeParseResult<ServiceLevelEnumSet, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ServiceLevelEnumSet$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ServiceLevelEnumSet' from JSON`,
  );
}
