/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * EEL / PFC type of the shipment. For most shipments from the US to CA, `NOEEI_30_36` is applicable; for most
 *
 * @remarks
 * other shipments from the US, `NOEEI_30_37_a` is applicable.
 * Allowed values available <a href="#tag/Customs-Declaration-EELPFC">here</a>
 */
export enum CustomsDeclarationEelPfcEnum {
    NOEEI3037A = "NOEEI_30_37_a",
    NOEEI3037H = "NOEEI_30_37_h",
    NOEEI3037F = "NOEEI_30_37_f",
    Noeei3036 = "NOEEI_30_36",
    AesItn = "AES_ITN",
}

/** @internal */
export namespace CustomsDeclarationEelPfcEnum$ {
    export const inboundSchema = z.nativeEnum(CustomsDeclarationEelPfcEnum);
    export const outboundSchema = inboundSchema;
}
