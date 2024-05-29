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

export class Batches extends ClientSDK {
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
     * Create a batch
     *
     * @remarks
     * Creates a new batch object for purchasing shipping labels for many shipments at once. Batches are created asynchronously. This means that the API response won't include your batch shipments yet. You need to retrieve the batch later to verify that all batch shipments are valid.
     */
    async create(
        request: components.BatchCreateRequest,
        options?: RequestOptions
    ): Promise<components.Batch> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.BatchCreateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/batches")();

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
            operationID: "CreateBatch",
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

        const [result$] = await this.matcher<components.Batch>()
            .json(201, components.Batch$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Retrieve a batch
     *
     * @remarks
     * Returns a batch using an object ID. <br> Batch shipments are displayed 100 at a time.  You can iterate
     * through each `page` using the `?page= query` parameter.  You can also filter based on batch shipment
     * status, for example, by passing a query param like `?object_results=creation_failed`. <br>
     * For more details on filtering results, see our guide on <a href="https://docs.goshippo.com/docs/api_concepts/filtering/" target="blank"> filtering</a>.
     */
    async get(batchId: string, options?: RequestOptions): Promise<components.Batch> {
        const input$: operations.GetBatchRequest = {
            batchId: batchId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetBatchRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            BatchId: enc$.encodeSimple("BatchId", payload$.BatchId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/batches/{BatchId}")(pathParams$);

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
            operationID: "GetBatch",
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
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const [result$] = await this.matcher<components.Batch>()
            .json(200, components.Batch$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Add shipments to a batch
     *
     * @remarks
     * Adds batch shipments to an existing batch.
     */
    async addShipments(
        batchId: string,
        requestBody: Array<components.BatchShipmentCreateRequest>,
        options?: RequestOptions
    ): Promise<components.Batch> {
        const input$: operations.AddShipmentsToBatchRequest = {
            batchId: batchId,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AddShipmentsToBatchRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            BatchId: enc$.encodeSimple("BatchId", payload$.BatchId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/batches/{BatchId}/add_shipments")(pathParams$);

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
            operationID: "AddShipmentsToBatch",
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

        const [result$] = await this.matcher<components.Batch>()
            .json(200, components.Batch$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Purchase a batch
     *
     * @remarks
     * Purchases an existing batch with a status of `VALID`.
     * Once you send a POST request to the purchase endpoint the batch status will change to `PURCHASING`.
     * When all the shipments are purchased, the status will change to `PURCHASED` and you will receive a
     * `batch_purchased` webhook indicating that the batch has been purchased
     */
    async purchase(batchId: string, options?: RequestOptions): Promise<components.Batch> {
        const input$: operations.PurchaseBatchRequest = {
            batchId: batchId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.PurchaseBatchRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            BatchId: enc$.encodeSimple("BatchId", payload$.BatchId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/batches/{BatchId}/purchase")(pathParams$);

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
            operationID: "PurchaseBatch",
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

        const [result$] = await this.matcher<components.Batch>()
            .json(200, components.Batch$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }

    /**
     * Remove shipments from a batch
     *
     * @remarks
     * Removes shipments from an existing batch shipment.
     */
    async removeShipments(
        batchId: string,
        requestBody: Array<string>,
        options?: RequestOptions
    ): Promise<components.Batch> {
        const input$: operations.RemoveShipmentsFromBatchRequest = {
            batchId: batchId,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RemoveShipmentsFromBatchRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            BatchId: enc$.encodeSimple("BatchId", payload$.BatchId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/batches/{BatchId}/remove_shipments")(pathParams$);

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
            operationID: "RemoveShipmentsFromBatch",
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

        const [result$] = await this.matcher<components.Batch>()
            .json(200, components.Batch$)
            .fail([400, "4XX", "5XX"])
            .match(response);

        return result$;
    }
}
