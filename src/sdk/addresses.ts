/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { addressesCreate } from "../funcs/addressesCreate.js";
import { addressesGet } from "../funcs/addressesGet.js";
import { addressesList } from "../funcs/addressesList.js";
import { addressesValidate } from "../funcs/addressesValidate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Addresses extends ClientSDK {
  /**
   * List all addresses
   *
   * @remarks
   * Returns a list of all address objects that have been created in this account.
   */
  async list(
    page?: number | undefined,
    results?: number | undefined,
    options?: RequestOptions,
  ): Promise<components.AddressPaginatedList> {
    return unwrapAsync(addressesList(
      this,
      page,
      results,
      options,
    ));
  }

  /**
   * Create a new address
   *
   * @remarks
   * Creates a new address object. You can use address objects to create new shipments, calculate rates, and to create orders.
   */
  async create(
    request: components.AddressCreateRequest,
    options?: RequestOptions,
  ): Promise<components.Address> {
    return unwrapAsync(addressesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve an address
   *
   * @remarks
   * Returns an existing address using an object ID.
   */
  async get(
    addressId: string,
    options?: RequestOptions,
  ): Promise<components.Address> {
    return unwrapAsync(addressesGet(
      this,
      addressId,
      options,
    ));
  }

  /**
   * Validate an address
   *
   * @remarks
   * Validates an existing address using an object ID
   */
  async validate(
    addressId: string,
    options?: RequestOptions,
  ): Promise<components.Address> {
    return unwrapAsync(addressesValidate(
      this,
      addressId,
      options,
    ));
  }
}
