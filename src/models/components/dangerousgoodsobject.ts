/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    DangerousGoodsBiologicalMaterial,
    DangerousGoodsBiologicalMaterial$,
} from "./dangerousgoodsbiologicalmaterial";
import {
    DangerousGoodsLithiumBatteries,
    DangerousGoodsLithiumBatteries$,
} from "./dangerousgoodslithiumbatteries";
import * as z from "zod";

/**
 * Container for specifying the presence of dangerous materials. This is specific to USPS, and if any contents
 *
 * @remarks
 * are provided, only certain USPS service levels will be eligible. For more information, see our
 * <a href="https://docs.goshippo.com/docs/shipments/hazmat/">guide on hazardous or dangerous materials shipping</a>.
 */
export type DangerousGoodsObject = {
    /**
     * Indicates if the shipment contains dangerous goods.
     */
    contains?: boolean | undefined;
    /**
     * Container for specifying the presence of biological material.
     */
    biologicalMaterial?: DangerousGoodsBiologicalMaterial | undefined;
    /**
     * Container for specifying the presence of lithium batteries.
     */
    lithiumBatteries?: DangerousGoodsLithiumBatteries | undefined;
};

/** @internal */
export namespace DangerousGoodsObject$ {
    export const inboundSchema: z.ZodType<DangerousGoodsObject, z.ZodTypeDef, unknown> = z
        .object({
            contains: z.boolean().optional(),
            biological_material: DangerousGoodsBiologicalMaterial$.inboundSchema.optional(),
            lithium_batteries: DangerousGoodsLithiumBatteries$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.contains === undefined ? null : { contains: v.contains }),
                ...(v.biological_material === undefined
                    ? null
                    : { biologicalMaterial: v.biological_material }),
                ...(v.lithium_batteries === undefined
                    ? null
                    : { lithiumBatteries: v.lithium_batteries }),
            };
        });

    export type Outbound = {
        contains?: boolean | undefined;
        biological_material?: DangerousGoodsBiologicalMaterial$.Outbound | undefined;
        lithium_batteries?: DangerousGoodsLithiumBatteries$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DangerousGoodsObject> = z
        .object({
            contains: z.boolean().optional(),
            biologicalMaterial: DangerousGoodsBiologicalMaterial$.outboundSchema.optional(),
            lithiumBatteries: DangerousGoodsLithiumBatteries$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.contains === undefined ? null : { contains: v.contains }),
                ...(v.biologicalMaterial === undefined
                    ? null
                    : { biological_material: v.biologicalMaterial }),
                ...(v.lithiumBatteries === undefined
                    ? null
                    : { lithium_batteries: v.lithiumBatteries }),
            };
        });
}
