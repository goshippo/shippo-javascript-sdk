/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type InstantTransactionRate = {
    /**
     * Final Rate price, expressed in the currency used in the sender's country.
     */
    amount?: string | undefined;
    /**
     * Final Rate price, expressed in the currency used in the recipient's country.
     */
    amountLocal?: string | undefined;
    /**
     * Currency used in the sender's country, refers to `amount`.
     *
     * @remarks
     * The <a href="http://www.xe.com/iso4217.php">official ISO 4217</a> currency codes are used, e.g. `USD` or `EUR`.
     */
    currency?: string | undefined;
    /**
     * Currency used in the recipient's country, refers to `amount_local`.
     *
     * @remarks
     * The <a href="http://www.xe.com/iso4217.php">official ISO 4217</a> currency codes are used, e.g. `USD` or "EUR".
     */
    currencyLocal?: string | undefined;
    /**
     * Unique identifier of the Rate object.
     */
    objectId?: string | undefined;
    /**
     * Carrier offering the rate, e.g., `FedEx` or `Deutsche Post DHL`.
     */
    provider?: string | undefined;
    /**
     * Object ID of the carrier account that has been used to retrieve the rate.
     */
    carrierAccount?: string | undefined;
    /**
     * Service level name, e.g. `Priority Mail` or `FedEx Ground®`.
     *
     * @remarks
     * A service level commonly defines the transit time of a Shipment (e.g., Express vs. Standard),
     * along with other properties.  These names vary depending on the provider.<br>
     * See <a href="#tag/Service-Levels">Service Levels</a>.
     */
    servicelevelName?: string | undefined;
    /**
     * Token of the Rate's servicelevel, e.g. `usps_priority` or `fedex_ground`.
     *
     * @remarks
     * See <a href="#tag/Service-Levels">servicelevels</a>.
     */
    servicelevelToken?: string | undefined;
};

/** @internal */
export namespace InstantTransactionRate$ {
    export type Inbound = {
        amount?: string | undefined;
        amount_local?: string | undefined;
        currency?: string | undefined;
        currency_local?: string | undefined;
        object_id?: string | undefined;
        provider?: string | undefined;
        carrier_account?: string | undefined;
        servicelevel_name?: string | undefined;
        servicelevel_token?: string | undefined;
    };

    export const inboundSchema: z.ZodType<InstantTransactionRate, z.ZodTypeDef, Inbound> = z
        .object({
            amount: z.string().optional(),
            amount_local: z.string().optional(),
            currency: z.string().optional(),
            currency_local: z.string().optional(),
            object_id: z.string().optional(),
            provider: z.string().optional(),
            carrier_account: z.string().optional(),
            servicelevel_name: z.string().optional(),
            servicelevel_token: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.amount_local === undefined ? null : { amountLocal: v.amount_local }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.currency_local === undefined ? null : { currencyLocal: v.currency_local }),
                ...(v.object_id === undefined ? null : { objectId: v.object_id }),
                ...(v.provider === undefined ? null : { provider: v.provider }),
                ...(v.carrier_account === undefined ? null : { carrierAccount: v.carrier_account }),
                ...(v.servicelevel_name === undefined
                    ? null
                    : { servicelevelName: v.servicelevel_name }),
                ...(v.servicelevel_token === undefined
                    ? null
                    : { servicelevelToken: v.servicelevel_token }),
            };
        });

    export type Outbound = {
        amount?: string | undefined;
        amount_local?: string | undefined;
        currency?: string | undefined;
        currency_local?: string | undefined;
        object_id?: string | undefined;
        provider?: string | undefined;
        carrier_account?: string | undefined;
        servicelevel_name?: string | undefined;
        servicelevel_token?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InstantTransactionRate> = z
        .object({
            amount: z.string().optional(),
            amountLocal: z.string().optional(),
            currency: z.string().optional(),
            currencyLocal: z.string().optional(),
            objectId: z.string().optional(),
            provider: z.string().optional(),
            carrierAccount: z.string().optional(),
            servicelevelName: z.string().optional(),
            servicelevelToken: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.amount === undefined ? null : { amount: v.amount }),
                ...(v.amountLocal === undefined ? null : { amount_local: v.amountLocal }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.currencyLocal === undefined ? null : { currency_local: v.currencyLocal }),
                ...(v.objectId === undefined ? null : { object_id: v.objectId }),
                ...(v.provider === undefined ? null : { provider: v.provider }),
                ...(v.carrierAccount === undefined ? null : { carrier_account: v.carrierAccount }),
                ...(v.servicelevelName === undefined
                    ? null
                    : { servicelevel_name: v.servicelevelName }),
                ...(v.servicelevelToken === undefined
                    ? null
                    : { servicelevel_token: v.servicelevelToken }),
            };
        });
}
