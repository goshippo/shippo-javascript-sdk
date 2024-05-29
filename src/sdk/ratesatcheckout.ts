/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as operations from "../models/operations";
import * as z from "zod";

export class RatesAtCheckout extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Generate a live rates request
     *
     * @remarks
     * Initiates a live rates request. Include either the object ID for
     * an existing address record or a fully formed address object when entering
     * an address value. You can also enter the object ID of an existing user parcel
     * template or a fully formed user parcel template object as the parcel value.
     */
    async create(
        request: components.LiveRateCreateRequest,
        options?: RequestOptions
    ): Promise<components.LiveRatePaginatedList> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.LiveRateCreateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/live-rates")();

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            enc$.encodeSimple("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "CreateLiveRate",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.LiveRatePaginatedList>()
            .json(200, components.LiveRatePaginatedList$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Show current default parcel template
     *
     * @remarks
     * Retrieve and display the currently configured default parcel template for live rates.
     */
    async getDefaultParcelTemplate(
        options?: RequestOptions
    ): Promise<components.DefaultParcelTemplate> {
        const input$: operations.GetDefaultParcelTemplateRequest = {};
        void input$; // request input is unused
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/live-rates/settings/parcel-template")();

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            enc$.encodeSimple("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetDefaultParcelTemplate",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.DefaultParcelTemplate>()
            .json(200, components.DefaultParcelTemplate$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Update default parcel template
     *
     * @remarks
     * Update the currently configured default parcel template for live rates. The object_id in the request payload should identify the user parcel template to be the new default.
     */
    async updateDefaultParcelTemplate(
        objectId?: string | undefined,
        options?: RequestOptions
    ): Promise<components.DefaultParcelTemplate> {
        const input$: components.DefaultParcelTemplateUpdateRequest | undefined = {
            objectId: objectId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                components.DefaultParcelTemplateUpdateRequest$.outboundSchema
                    .optional()
                    .parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/live-rates/settings/parcel-template")();

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            enc$.encodeSimple("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "UpdateDefaultParcelTemplate",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.DefaultParcelTemplate>()
            .json(200, components.DefaultParcelTemplate$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Clear current default parcel template
     *
     * @remarks
     * Clears the currently configured default parcel template for live rates.
     */
    async deleteDefaultParcelTemplate(options?: RequestOptions): Promise<void> {
        const input$: operations.DeleteDefaultParcelTemplateRequest = {};
        void input$; // request input is unused
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "*/*");

        const path$ = this.templateURLComponent("/live-rates/settings/parcel-template")();

        const query$ = "";

        headers$.set(
            "SHIPPO-API-VERSION",
            enc$.encodeSimple("SHIPPO-API-VERSION", this.options$.shippoApiVersion, {
                explode: false,
                charEncoding: "none",
            })
        );

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "DeleteDefaultParcelTemplate",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["400", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }
}
