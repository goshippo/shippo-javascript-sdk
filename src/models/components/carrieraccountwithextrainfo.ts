/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
    CarrierAccountServiceLevel,
    CarrierAccountServiceLevel$,
} from "./carrieraccountservicelevel.js";
import {
    FedExConnectExistingOwnAccountParameters,
    FedExConnectExistingOwnAccountParameters$,
} from "./fedexconnectexistingownaccountparameters.js";
import {
    UPSConnectExistingOwnAccountParameters,
    UPSConnectExistingOwnAccountParameters$,
} from "./upsconnectexistingownaccountparameters.js";
import * as z from "zod";

export type ParametersT =
    | FedExConnectExistingOwnAccountParameters
    | UPSConnectExistingOwnAccountParameters
    | { [k: string]: any };

/**
 * Authentication method used by this account.
 */
export const CarrierAccountWithExtraInfoType = {
    Default: "default",
    Oauth: "oauth",
} as const;
/**
 * Authentication method used by this account.
 */
export type CarrierAccountWithExtraInfoType = ClosedEnum<typeof CarrierAccountWithExtraInfoType>;

/**
 * Current authentication status. Possible values: 'disconnected' (authorization lost, reconnect needed), 'connected' (authorized and active), 'authorization_pending' (awaiting initial authorization flow).
 */
export const CarrierAccountWithExtraInfoStatus = {
    Disconnected: "disconnected",
    Connected: "connected",
    AuthorizationPending: "authorization_pending",
} as const;
/**
 * Current authentication status. Possible values: 'disconnected' (authorization lost, reconnect needed), 'connected' (authorized and active), 'authorization_pending' (awaiting initial authorization flow).
 */
export type CarrierAccountWithExtraInfoStatus = ClosedEnum<
    typeof CarrierAccountWithExtraInfoStatus
>;

export type Authentication = {
    /**
     * Authentication method used by this account.
     */
    type?: CarrierAccountWithExtraInfoType | undefined;
    /**
     * Current authentication status. Possible values: 'disconnected' (authorization lost, reconnect needed), 'connected' (authorized and active), 'authorization_pending' (awaiting initial authorization flow).
     */
    status?: CarrierAccountWithExtraInfoStatus | undefined;
};

/**
 * Holds internal state relevant to users.
 */
export type ObjectInfo = {
    authentication?: Authentication | undefined;
};

export type CarrierAccountWithExtraInfo = {
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
    /**
     * Carrier name, see <a href="#tag/Carriers">Carriers</a><br>
     */
    carrierName?: any | undefined;
    isShippoAccount?: boolean | undefined;
    metadata?: string | undefined;
    /**
     * Unique identifier of the carrier account object.
     */
    objectId?: string | undefined;
    /**
     * Username of the user who created the carrier account object.
     */
    objectOwner?: string | undefined;
    serviceLevels?: Array<CarrierAccountServiceLevel> | undefined;
    /**
     * Indicates whether the object has been created in test mode.
     */
    test?: boolean | undefined;
    /**
     * Holds internal state relevant to users.
     */
    objectInfo?: ObjectInfo | undefined;
};

/** @internal */
export namespace ParametersT$ {
    export const inboundSchema: z.ZodType<ParametersT, z.ZodTypeDef, unknown> = z.union([
        FedExConnectExistingOwnAccountParameters$.inboundSchema,
        UPSConnectExistingOwnAccountParameters$.inboundSchema,
        z.record(z.any()),
    ]);

    export type Outbound =
        | FedExConnectExistingOwnAccountParameters$.Outbound
        | UPSConnectExistingOwnAccountParameters$.Outbound
        | { [k: string]: any };
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ParametersT> = z.union([
        FedExConnectExistingOwnAccountParameters$.outboundSchema,
        UPSConnectExistingOwnAccountParameters$.outboundSchema,
        z.record(z.any()),
    ]);
}

/** @internal */
export namespace CarrierAccountWithExtraInfoType$ {
    export const inboundSchema: z.ZodNativeEnum<typeof CarrierAccountWithExtraInfoType> =
        z.nativeEnum(CarrierAccountWithExtraInfoType);
    export const outboundSchema: z.ZodNativeEnum<typeof CarrierAccountWithExtraInfoType> =
        inboundSchema;
}

/** @internal */
export namespace CarrierAccountWithExtraInfoStatus$ {
    export const inboundSchema: z.ZodNativeEnum<typeof CarrierAccountWithExtraInfoStatus> =
        z.nativeEnum(CarrierAccountWithExtraInfoStatus);
    export const outboundSchema: z.ZodNativeEnum<typeof CarrierAccountWithExtraInfoStatus> =
        inboundSchema;
}

/** @internal */
export namespace Authentication$ {
    export const inboundSchema: z.ZodType<Authentication, z.ZodTypeDef, unknown> = z.object({
        type: CarrierAccountWithExtraInfoType$.inboundSchema.optional(),
        status: CarrierAccountWithExtraInfoStatus$.inboundSchema.optional(),
    });

    export type Outbound = {
        type?: string | undefined;
        status?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Authentication> = z.object({
        type: CarrierAccountWithExtraInfoType$.outboundSchema.optional(),
        status: CarrierAccountWithExtraInfoStatus$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace ObjectInfo$ {
    export const inboundSchema: z.ZodType<ObjectInfo, z.ZodTypeDef, unknown> = z.object({
        authentication: z.lazy(() => Authentication$.inboundSchema).optional(),
    });

    export type Outbound = {
        authentication?: Authentication$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ObjectInfo> = z.object({
        authentication: z.lazy(() => Authentication$.outboundSchema).optional(),
    });
}

/** @internal */
export namespace CarrierAccountWithExtraInfo$ {
    export const inboundSchema: z.ZodType<CarrierAccountWithExtraInfo, z.ZodTypeDef, unknown> = z
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
            carrier_name: z.any().optional(),
            is_shippo_account: z.boolean().optional(),
            metadata: z.string().optional(),
            object_id: z.string().optional(),
            object_owner: z.string().optional(),
            service_levels: z.array(CarrierAccountServiceLevel$.inboundSchema).optional(),
            test: z.boolean().optional(),
            object_info: z.lazy(() => ObjectInfo$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                account_id: "accountId",
                carrier_name: "carrierName",
                is_shippo_account: "isShippoAccount",
                object_id: "objectId",
                object_owner: "objectOwner",
                service_levels: "serviceLevels",
                object_info: "objectInfo",
            });
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
        carrier_name?: any | undefined;
        is_shippo_account?: boolean | undefined;
        metadata?: string | undefined;
        object_id?: string | undefined;
        object_owner?: string | undefined;
        service_levels?: Array<CarrierAccountServiceLevel$.Outbound> | undefined;
        test?: boolean | undefined;
        object_info?: ObjectInfo$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CarrierAccountWithExtraInfo> = z
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
            carrierName: z.any().optional(),
            isShippoAccount: z.boolean().optional(),
            metadata: z.string().optional(),
            objectId: z.string().optional(),
            objectOwner: z.string().optional(),
            serviceLevels: z.array(CarrierAccountServiceLevel$.outboundSchema).optional(),
            test: z.boolean().optional(),
            objectInfo: z.lazy(() => ObjectInfo$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                accountId: "account_id",
                carrierName: "carrier_name",
                isShippoAccount: "is_shippo_account",
                objectId: "object_id",
                objectOwner: "object_owner",
                serviceLevels: "service_levels",
                objectInfo: "object_info",
            });
        });
}
