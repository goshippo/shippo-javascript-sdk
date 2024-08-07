/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import * as z from "zod";

export class UserParcelTemplates extends ClientSDK {
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
     * List all user parcel templates
     *
     * @remarks
     * Returns a list all of all user parcel template objects.
     */
    async list(options?: RequestOptions): Promise<components.UserParcelTemplateList> {
        const input$: operations.ListUserParcelTemplatesRequest = {};
        void input$; // request input is unused

        const path$ = this.templateURLComponent("/user-parcel-templates")();

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
            operationID: "ListUserParcelTemplates",
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
            },
            options
        );

        const response = await this.do$(request$, { context, errorCodes: ["400", "4XX", "5XX"] });

        const [result$] = await this.matcher<components.UserParcelTemplateList>()
            .json(200, components.UserParcelTemplateList$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Create a new user parcel template
     *
     * @remarks
     * Creates a new user parcel template. <br>You can choose to create a
     * parcel template using a preset carrier template as a starting point, or
     * you can create an entirely custom one. To use a preset carrier template,
     * pass in a unique template token from <a href="#tag/Parcel-Templates">this list</a>
     * plus the weight fields (**weight** and **weight_unit**). Otherwise, omit
     * the template field and pass the other fields, for the weight, length, height,
     * and depth, as well as their units."
     */
    async create(
        request: components.UserParcelTemplateCreateRequest,
        options?: RequestOptions
    ): Promise<components.UserParcelTemplate> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.UserParcelTemplateCreateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/user-parcel-templates")();

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
            operationID: "CreateUserParcelTemplate",
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

        const [result$] = await this.matcher<components.UserParcelTemplate>()
            .json(200, components.UserParcelTemplate$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Delete a user parcel template
     *
     * @remarks
     * Deletes a user parcel template using an object ID.
     */
    async delete(userParcelTemplateObjectId: string, options?: RequestOptions): Promise<void> {
        const input$: operations.DeleteUserParcelTemplateRequest = {
            userParcelTemplateObjectId: userParcelTemplateObjectId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteUserParcelTemplateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            UserParcelTemplateObjectId: encodeSimple$(
                "UserParcelTemplateObjectId",
                payload$.UserParcelTemplateObjectId,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent(
            "/user-parcel-templates/{UserParcelTemplateObjectId}"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "*/*",
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
            operationID: "DeleteUserParcelTemplate",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, { context, errorCodes: ["400", "4XX", "5XX"] });

        const [result$] = await this.matcher<void>()
            .void(204, z.void())
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Retrieves a user parcel template
     *
     * @remarks
     * Returns the parcel template information for a specific user parcel
     * template, identified by the object ID.
     */
    async get(
        userParcelTemplateObjectId: string,
        options?: RequestOptions
    ): Promise<components.UserParcelTemplate> {
        const input$: operations.GetUserParcelTemplateRequest = {
            userParcelTemplateObjectId: userParcelTemplateObjectId,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetUserParcelTemplateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            UserParcelTemplateObjectId: encodeSimple$(
                "UserParcelTemplateObjectId",
                payload$.UserParcelTemplateObjectId,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent(
            "/user-parcel-templates/{UserParcelTemplateObjectId}"
        )(pathParams$);

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
            operationID: "GetUserParcelTemplate",
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

        const [result$] = await this.matcher<components.UserParcelTemplate>()
            .json(200, components.UserParcelTemplate$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Update an existing user parcel template
     *
     * @remarks
     * Updates an existing user parcel template.
     */
    async update(
        userParcelTemplateObjectId: string,
        userParcelTemplateUpdateRequest?: components.UserParcelTemplateUpdateRequest | undefined,
        options?: RequestOptions
    ): Promise<components.UserParcelTemplate> {
        const input$: operations.UpdateUserParcelTemplateRequest = {
            userParcelTemplateObjectId: userParcelTemplateObjectId,
            userParcelTemplateUpdateRequest: userParcelTemplateUpdateRequest,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateUserParcelTemplateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UserParcelTemplateUpdateRequest, {
            explode: true,
        });

        const pathParams$ = {
            UserParcelTemplateObjectId: encodeSimple$(
                "UserParcelTemplateObjectId",
                payload$.UserParcelTemplateObjectId,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent(
            "/user-parcel-templates/{UserParcelTemplateObjectId}"
        )(pathParams$);

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
            operationID: "UpdateUserParcelTemplate",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKeyHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

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

        const response = await this.do$(request$, { context, errorCodes: ["400", "4XX", "5XX"] });

        const [result$] = await this.matcher<components.UserParcelTemplate>()
            .json(200, components.UserParcelTemplate$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }
}
