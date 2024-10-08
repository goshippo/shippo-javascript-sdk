/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { pickupsCreate } from "../funcs/pickupsCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Pickups extends ClientSDK {
  /**
   * Create a pickup
   *
   * @remarks
   * Creates a pickup object. This request is for a carrier to come to a specified location to take a package for shipping.
   */
  async create(
    request: components.PickupBase,
    options?: RequestOptions,
  ): Promise<components.Pickup> {
    return unwrapAsync(pickupsCreate(
      this,
      request,
      options,
    ));
  }
}
