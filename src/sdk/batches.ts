/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { batchesAddShipments } from "../funcs/batchesAddShipments.js";
import { batchesCreate } from "../funcs/batchesCreate.js";
import { batchesGet } from "../funcs/batchesGet.js";
import { batchesPurchase } from "../funcs/batchesPurchase.js";
import { batchesRemoveShipments } from "../funcs/batchesRemoveShipments.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Batches extends ClientSDK {
  /**
   * Create a batch
   *
   * @remarks
   * Creates a new batch object for purchasing shipping labels for many shipments at once. Batches are created asynchronously. This means that the API response won't include your batch shipments yet. You need to retrieve the batch later to verify that all batch shipments are valid.
   */
  async create(
    request: components.BatchCreateRequest,
    options?: RequestOptions,
  ): Promise<components.Batch> {
    return unwrapAsync(batchesCreate(
      this,
      request,
      options,
    ));
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
  async get(
    batchId: string,
    page?: number | undefined,
    results?: number | undefined,
    options?: RequestOptions,
  ): Promise<components.Batch> {
    return unwrapAsync(batchesGet(
      this,
      batchId,
      page,
      results,
      options,
    ));
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
    options?: RequestOptions,
  ): Promise<components.Batch> {
    return unwrapAsync(batchesAddShipments(
      this,
      batchId,
      requestBody,
      options,
    ));
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
  async purchase(
    batchId: string,
    options?: RequestOptions,
  ): Promise<components.Batch> {
    return unwrapAsync(batchesPurchase(
      this,
      batchId,
      options,
    ));
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
    options?: RequestOptions,
  ): Promise<components.Batch> {
    return unwrapAsync(batchesRemoveShipments(
      this,
      batchId,
      requestBody,
      options,
    ));
  }
}
