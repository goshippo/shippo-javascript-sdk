/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  UserParcelTemplate,
  UserParcelTemplate$inboundSchema,
  UserParcelTemplate$Outbound,
  UserParcelTemplate$outboundSchema,
} from "./userparceltemplate.js";

export type UserParcelTemplateList = {
  results?: Array<UserParcelTemplate> | undefined;
};

/** @internal */
export const UserParcelTemplateList$inboundSchema: z.ZodType<
  UserParcelTemplateList,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(UserParcelTemplate$inboundSchema).optional(),
});

/** @internal */
export type UserParcelTemplateList$Outbound = {
  results?: Array<UserParcelTemplate$Outbound> | undefined;
};

/** @internal */
export const UserParcelTemplateList$outboundSchema: z.ZodType<
  UserParcelTemplateList$Outbound,
  z.ZodTypeDef,
  UserParcelTemplateList
> = z.object({
  results: z.array(UserParcelTemplate$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserParcelTemplateList$ {
  /** @deprecated use `UserParcelTemplateList$inboundSchema` instead. */
  export const inboundSchema = UserParcelTemplateList$inboundSchema;
  /** @deprecated use `UserParcelTemplateList$outboundSchema` instead. */
  export const outboundSchema = UserParcelTemplateList$outboundSchema;
  /** @deprecated use `UserParcelTemplateList$Outbound` instead. */
  export type Outbound = UserParcelTemplateList$Outbound;
}
