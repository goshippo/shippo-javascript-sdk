/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";

export class Manifests extends ClientSDK {
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
     * List all manifests
     *
     * @remarks
     * Returns a list of all manifest objects.
     */
    async list(
        page?: number | undefined,
        results?: number | undefined,
        options?: RequestOptions
    ): Promise<components.ManifestPaginatedList> {
        const input$: operations.ListManifestsRequest = {
            page: page,
            results: results,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListManifestsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/manifests")();

        const query$ = encodeFormQuery$({
            page: payload$.page,
            results: payload$.results,
        });

        const headers$ = new Headers({
            Accept: "application/json",
            "SHIPPO-API-VERSION": encodeSimple$(
                "SHIPPO-API-VERSION",
                this.options$.shippoApiVersion,
                { explode: false, charEncoding: "none" }
            ),
        });

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "ListManifests",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, { context, errorCodes: ["400", "4XX", "5XX"] });

        const [result$] = await this.matcher<components.ManifestPaginatedList>()
            .json(200, components.ManifestPaginatedList$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Create a new manifest
     *
     * @remarks
     * Creates a new manifest object.
     */
    async create(
        request: components.ManifestCreateRequest,
        options?: RequestOptions
    ): Promise<components.Manifest> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.ManifestCreateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/manifests")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "SHIPPO-API-VERSION": encodeSimple$(
                "SHIPPO-API-VERSION",
                this.options$.shippoApiVersion,
                { explode: false, charEncoding: "none" }
            ),
        });

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "CreateManifest",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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

        const response = await this.do$(request$, { context, errorCodes: ["400", "4XX", "5XX"] });

        const [result$] = await this.matcher<components.Manifest>()
            .json(201, components.Manifest$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Retrieve a manifest
     *
     * @remarks
     * Returns an existing manifest using an object ID.
     */
    async get(manifestId: string, options?: RequestOptions): Promise<components.Manifest> {
        const input$: operations.GetManifestRequest = {
            manifestId: manifestId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetManifestRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            ManifestId: encodeSimple$("ManifestId", payload$.ManifestId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/manifests/{ManifestId}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
            "SHIPPO-API-VERSION": encodeSimple$(
                "SHIPPO-API-VERSION",
                this.options$.shippoApiVersion,
                { explode: false, charEncoding: "none" }
            ),
        });

        let security$;
        if (typeof this.options$.apiKeyHeader === "function") {
            security$ = { apiKeyHeader: await this.options$.apiKeyHeader() };
        } else if (this.options$.apiKeyHeader) {
            security$ = { apiKeyHeader: this.options$.apiKeyHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "GetManifest",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, { context, errorCodes: ["400", "4XX", "5XX"] });

        const [result$] = await this.matcher<components.Manifest>()
            .json(200, components.Manifest$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }
}
