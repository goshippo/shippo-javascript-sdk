/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UserParcelTemplateWithCarrierTemplateCreateRequest,
  UserParcelTemplateWithCarrierTemplateCreateRequest$inboundSchema,
  UserParcelTemplateWithCarrierTemplateCreateRequest$Outbound,
  UserParcelTemplateWithCarrierTemplateCreateRequest$outboundSchema,
} from "./userparceltemplatewithcarriertemplatecreaterequest.js";
import {
  UserParcelTemplateWithoutCarrierTemplateCreateRequest,
  UserParcelTemplateWithoutCarrierTemplateCreateRequest$inboundSchema,
  UserParcelTemplateWithoutCarrierTemplateCreateRequest$Outbound,
  UserParcelTemplateWithoutCarrierTemplateCreateRequest$outboundSchema,
} from "./userparceltemplatewithoutcarriertemplatecreaterequest.js";

export type UserParcelTemplateCreateRequest =
  | UserParcelTemplateWithCarrierTemplateCreateRequest
  | UserParcelTemplateWithoutCarrierTemplateCreateRequest;

/** @internal */
export const UserParcelTemplateCreateRequest$inboundSchema: z.ZodType<
  UserParcelTemplateCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.union([
  UserParcelTemplateWithCarrierTemplateCreateRequest$inboundSchema,
  UserParcelTemplateWithoutCarrierTemplateCreateRequest$inboundSchema,
]);

/** @internal */
export type UserParcelTemplateCreateRequest$Outbound =
  | UserParcelTemplateWithCarrierTemplateCreateRequest$Outbound
  | UserParcelTemplateWithoutCarrierTemplateCreateRequest$Outbound;

/** @internal */
export const UserParcelTemplateCreateRequest$outboundSchema: z.ZodType<
  UserParcelTemplateCreateRequest$Outbound,
  z.ZodTypeDef,
  UserParcelTemplateCreateRequest
> = z.union([
  UserParcelTemplateWithCarrierTemplateCreateRequest$outboundSchema,
  UserParcelTemplateWithoutCarrierTemplateCreateRequest$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserParcelTemplateCreateRequest$ {
  /** @deprecated use `UserParcelTemplateCreateRequest$inboundSchema` instead. */
  export const inboundSchema = UserParcelTemplateCreateRequest$inboundSchema;
  /** @deprecated use `UserParcelTemplateCreateRequest$outboundSchema` instead. */
  export const outboundSchema = UserParcelTemplateCreateRequest$outboundSchema;
  /** @deprecated use `UserParcelTemplateCreateRequest$Outbound` instead. */
  export type Outbound = UserParcelTemplateCreateRequest$Outbound;
}

export function userParcelTemplateCreateRequestToJSON(
  userParcelTemplateCreateRequest: UserParcelTemplateCreateRequest,
): string {
  return JSON.stringify(
    UserParcelTemplateCreateRequest$outboundSchema.parse(
      userParcelTemplateCreateRequest,
    ),
  );
}

export function userParcelTemplateCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<UserParcelTemplateCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UserParcelTemplateCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UserParcelTemplateCreateRequest' from JSON`,
  );
}
