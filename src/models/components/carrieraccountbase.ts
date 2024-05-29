/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    FedExConnectExistingOwnAccountParameters,
    FedExConnectExistingOwnAccountParameters$,
} from "./fedexconnectexistingownaccountparameters";
import {
    UPSConnectExistingOwnAccountParameters,
    UPSConnectExistingOwnAccountParameters$,
} from "./upsconnectexistingownaccountparameters";
import * as z from "zod";

export type CarrierAccountBaseParameters =
    | FedExConnectExistingOwnAccountParameters
    | UPSConnectExistingOwnAccountParameters
    | { [k: string]: any };

export type CarrierAccountBase = {
    /**
     * Unique identifier of the account. Please check the <a href="https://docs.goshippo.com/docs/carriers/carrieraccounts/">carrier accounts tutorial</a>
     *
     * @remarks
     * page for the `account_id` per carrier.<br>
     * To protect account information, this field will be masked in any API response.
     */
    accountId: string;
    /**
     * Determines whether the account is active. When creating a shipment, if no `carrier_accounts` are explicitly
     *
     * @remarks
     * passed Shippo will query all carrier accounts that have this field set. By default, this is set to True.
     */
    active?: boolean | undefined;
    /**
     * Carrier token, see <a href="#tag/Carriers">Carriers</a><br>
     *
     * @remarks
     * Please check the <a href="https://docs.goshippo.com/docs/carriers/carrieraccounts/">carrier accounts tutorial</a> page for all supported carriers.
     */
    carrier: string;
    parameters?:
        | FedExConnectExistingOwnAccountParameters
        | UPSConnectExistingOwnAccountParameters
        | { [k: string]: any }
        | undefined;
};

/** @internal */
export namespace CarrierAccountBaseParameters$ {
    export const inboundSchema: z.ZodType<CarrierAccountBaseParameters, z.ZodTypeDef, unknown> =
        z.union([
            FedExConnectExistingOwnAccountParameters$.inboundSchema,
            UPSConnectExistingOwnAccountParameters$.inboundSchema,
            z.record(z.any()),
        ]);

    export type Outbound =
        | FedExConnectExistingOwnAccountParameters$.Outbound
        | UPSConnectExistingOwnAccountParameters$.Outbound
        | { [k: string]: any };
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CarrierAccountBaseParameters> =
        z.union([
            FedExConnectExistingOwnAccountParameters$.outboundSchema,
            UPSConnectExistingOwnAccountParameters$.outboundSchema,
            z.record(z.any()),
        ]);
}

/** @internal */
export namespace CarrierAccountBase$ {
    export const inboundSchema: z.ZodType<CarrierAccountBase, z.ZodTypeDef, unknown> = z
        .object({
            account_id: z.string(),
            active: z.boolean().optional(),
            carrier: z.string(),
            parameters: z
                .union([
                    FedExConnectExistingOwnAccountParameters$.inboundSchema,
                    UPSConnectExistingOwnAccountParameters$.inboundSchema,
                    z.record(z.any()),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                accountId: v.account_id,
                ...(v.active === undefined ? null : { active: v.active }),
                carrier: v.carrier,
                ...(v.parameters === undefined ? null : { parameters: v.parameters }),
            };
        });

    export type Outbound = {
        account_id: string;
        active?: boolean | undefined;
        carrier: string;
        parameters?:
            | FedExConnectExistingOwnAccountParameters$.Outbound
            | UPSConnectExistingOwnAccountParameters$.Outbound
            | { [k: string]: any }
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CarrierAccountBase> = z
        .object({
            accountId: z.string(),
            active: z.boolean().optional(),
            carrier: z.string(),
            parameters: z
                .union([
                    FedExConnectExistingOwnAccountParameters$.outboundSchema,
                    UPSConnectExistingOwnAccountParameters$.outboundSchema,
                    z.record(z.any()),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                account_id: v.accountId,
                ...(v.active === undefined ? null : { active: v.active }),
                carrier: v.carrier,
                ...(v.parameters === undefined ? null : { parameters: v.parameters }),
            };
        });
}
