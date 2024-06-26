/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Invalid carrier account provided by the user
 */
export type InitiateOauth2SigninCarrierAccountsResponseResponseBodyData = {
    title?: string | undefined;
    detail?: string | undefined;
};

/**
 * Invalid carrier account provided by the user
 */
export class InitiateOauth2SigninCarrierAccountsResponseResponseBody extends Error {
    title?: string | undefined;
    detail?: string | undefined;

    /** The original data that was passed to this error instance. */
    data$: InitiateOauth2SigninCarrierAccountsResponseResponseBodyData;

    constructor(err: InitiateOauth2SigninCarrierAccountsResponseResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.title != null) {
            this.title = err.title;
        }
        if (err.detail != null) {
            this.detail = err.detail;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "InitiateOauth2SigninCarrierAccountsResponseResponseBody";
    }
}

/**
 * Invalid ShippoToken or unsupported carrier account provided by the user
 */
export type InitiateOauth2SigninCarrierAccountsResponseBodyData = {
    title?: string | undefined;
    detail?: string | undefined;
};

/**
 * Invalid ShippoToken or unsupported carrier account provided by the user
 */
export class InitiateOauth2SigninCarrierAccountsResponseBody extends Error {
    title?: string | undefined;
    detail?: string | undefined;

    /** The original data that was passed to this error instance. */
    data$: InitiateOauth2SigninCarrierAccountsResponseBodyData;

    constructor(err: InitiateOauth2SigninCarrierAccountsResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.title != null) {
            this.title = err.title;
        }
        if (err.detail != null) {
            this.detail = err.detail;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "InitiateOauth2SigninCarrierAccountsResponseBody";
    }
}

/**
 * Invalid parameters provided by the user
 */
export type InitiateOauth2SigninResponseBodyData = {
    title?: string | undefined;
    detail?: string | undefined;
};

/**
 * Invalid parameters provided by the user
 */
export class InitiateOauth2SigninResponseBody extends Error {
    title?: string | undefined;
    detail?: string | undefined;

    /** The original data that was passed to this error instance. */
    data$: InitiateOauth2SigninResponseBodyData;

    constructor(err: InitiateOauth2SigninResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.title != null) {
            this.title = err.title;
        }
        if (err.detail != null) {
            this.detail = err.detail;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "InitiateOauth2SigninResponseBody";
    }
}

/** @internal */
export namespace InitiateOauth2SigninCarrierAccountsResponseResponseBody$ {
    export const inboundSchema: z.ZodType<
        InitiateOauth2SigninCarrierAccountsResponseResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            title: z.string().optional(),
            detail: z.string().optional(),
        })
        .transform((v) => {
            return new InitiateOauth2SigninCarrierAccountsResponseResponseBody(v);
        });

    export type Outbound = {
        title?: string | undefined;
        detail?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        InitiateOauth2SigninCarrierAccountsResponseResponseBody
    > = z
        .instanceof(InitiateOauth2SigninCarrierAccountsResponseResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                title: z.string().optional(),
                detail: z.string().optional(),
            })
        );
}

/** @internal */
export namespace InitiateOauth2SigninCarrierAccountsResponseBody$ {
    export const inboundSchema: z.ZodType<
        InitiateOauth2SigninCarrierAccountsResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            title: z.string().optional(),
            detail: z.string().optional(),
        })
        .transform((v) => {
            return new InitiateOauth2SigninCarrierAccountsResponseBody(v);
        });

    export type Outbound = {
        title?: string | undefined;
        detail?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        InitiateOauth2SigninCarrierAccountsResponseBody
    > = z
        .instanceof(InitiateOauth2SigninCarrierAccountsResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                title: z.string().optional(),
                detail: z.string().optional(),
            })
        );
}

/** @internal */
export namespace InitiateOauth2SigninResponseBody$ {
    export const inboundSchema: z.ZodType<InitiateOauth2SigninResponseBody, z.ZodTypeDef, unknown> =
        z
            .object({
                title: z.string().optional(),
                detail: z.string().optional(),
            })
            .transform((v) => {
                return new InitiateOauth2SigninResponseBody(v);
            });

    export type Outbound = {
        title?: string | undefined;
        detail?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        InitiateOauth2SigninResponseBody
    > = z
        .instanceof(InitiateOauth2SigninResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                title: z.string().optional(),
                detail: z.string().optional(),
            })
        );
}
