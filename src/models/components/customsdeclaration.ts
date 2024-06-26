/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    CustomsExporterIdentification,
    CustomsExporterIdentification$,
} from "./customsexporteridentification.js";
import { CustomsInvoicedCharges, CustomsInvoicedCharges$ } from "./customsinvoicedcharges.js";
import { ObjectStateEnum, ObjectStateEnum$ } from "./objectstateenum.js";
import * as z from "zod";

export type CustomsDeclaration = {
    /**
     * **required if eel_pfc is `AES_ITN`**<br>
     *
     * @remarks
     * AES / ITN reference of the shipment.
     */
    aesItn?: string | undefined;
    /**
     * B13A Option details are obtained by filing a B13A Canada Export Declaration via the Canadian Export Reporting System (CERS).
     *
     * @remarks
     * <a href="https://www.cbsa-asfc.gc.ca/services/export/guide-eng.html" target="_blank" rel="noopener noreferrer"> More information on reporting commercial exports from Canada. </a>
     * Allowed values available <a href="#tag/Customs-Declaration-B13A-Filing-Option">here</a>
     */
    b13aFilingOption?: string | undefined;
    /**
     * **must be provided if and only if b13a_filing_option is provided**<br>
     *
     * @remarks
     * Represents:<br> the Proof of Report (POR) Number when b13a_filing_option is `FILED_ELECTRONICALLY`;<br>
     * the Summary ID Number when b13a_filing_option is `SUMMARY_REPORTING`;<br>
     * or the Exemption Number when b13a_filing_option is `NOT_REQUIRED`.
     */
    b13aNumber?: string | undefined;
    /**
     * Certificate reference of the shipment.
     */
    certificate?: string | undefined;
    /**
     * Expresses that the certify_signer has provided all information of this customs declaration truthfully.
     */
    certify: boolean;
    /**
     * Name of the person who created the customs declaration and is responsible for the validity of all
     *
     * @remarks
     * information provided.
     */
    certifySigner: string;
    commercialInvoice?: boolean | undefined;
    /**
     * **required if contents_type is `OTHER`**<br>
     *
     * @remarks
     * Explanation of the type of goods of the shipment.
     */
    contentsExplanation?: string | undefined;
    /**
     * Disclaimer for the shipment and customs information that have been provided.
     */
    disclaimer?: string | undefined;
    /**
     * Additional exporter identification that may be required to ship in certain countries
     */
    exporterIdentification?: CustomsExporterIdentification | undefined;
    /**
     * Exporter reference of an export shipment.
     */
    exporterReference?: string | undefined;
    /**
     * Importer reference of an import shipment.
     */
    importerReference?: string | undefined;
    /**
     * Indicates whether the shipment's destination VAT has been collected. May be required for some destinations.
     */
    isVatCollected?: boolean | undefined;
    /**
     * Invoice reference of the shipment.
     */
    invoice?: string | undefined;
    /**
     * License reference of the shipment.
     */
    license?: string | undefined;
    /**
     * A string of up to 100 characters that can be filled with any additional information you
     *
     * @remarks
     * want to attach to the object.
     */
    metadata?: string | undefined;
    /**
     * Additional notes to be included in the customs declaration.
     */
    notes?: string | undefined;
    /**
     * Object ID of the Importer address.
     */
    addressImporter?: string | undefined;
    /**
     * Type of goods of the shipment.
     *
     * @remarks
     * Allowed values available <a href="#tag/Customs-Declaration-Contents-Type">here</a>
     */
    contentsType: string;
    /**
     * EEL / PFC type of the shipment. For most shipments from the US to CA, `NOEEI_30_36` is applicable; for most
     *
     * @remarks
     * other shipments from the US, `NOEEI_30_37_a` is applicable.
     * Allowed values available <a href="#tag/Customs-Declaration-EELPFC">here</a>
     */
    eelPfc?: string | undefined;
    /**
     * The incoterm reference of the shipment. FCA is available for DHL Express and FedEx only.
     *
     * @remarks
     * eDAP is available for DPD UK only. DAP is available for DHL Express and DPD UK.
     * If expecting DAP for other carriers, please use DDU.
     * Allowed values available <a href="#tag/Customs-Declaration-Incoterm">here</a>
     */
    incoterm?: string | undefined;
    /**
     * Additional invoiced charges to be shown on the Customs Declaration Commercial Invoice.
     */
    invoicedCharges?: CustomsInvoicedCharges | undefined;
    /**
     * Distinct Parcel content items as Customs Items object_ids.
     */
    items: Array<string>;
    /**
     * Indicates how the carrier should proceed in case the shipment can't be delivered.
     *
     * @remarks
     * Allowed values available <a href="#tag/Customs-Declaration-Non-Delivery-Option">here</a>
     */
    nonDeliveryOption: string;
    /**
     * Date and time of object creation.
     */
    objectCreated?: Date | undefined;
    /**
     * Unique identifier of the given object.
     */
    objectId?: string | undefined;
    /**
     * Username of the user who created the object.
     */
    objectOwner?: string | undefined;
    /**
     * Indicates the validity of the enclosing object
     */
    objectState?: ObjectStateEnum | undefined;
    /**
     * Date and time of last object update.
     */
    objectUpdated?: Date | undefined;
    /**
     * Indicates whether the object has been created in test mode.
     */
    test?: boolean | undefined;
};

/** @internal */
export namespace CustomsDeclaration$ {
    export const inboundSchema: z.ZodType<CustomsDeclaration, z.ZodTypeDef, unknown> = z
        .object({
            aes_itn: z.string().optional(),
            b13a_filing_option: z.string().optional(),
            b13a_number: z.string().optional(),
            certificate: z.string().optional(),
            certify: z.boolean(),
            certify_signer: z.string(),
            commercial_invoice: z.boolean().optional(),
            contents_explanation: z.string().optional(),
            disclaimer: z.string().optional(),
            exporter_identification: CustomsExporterIdentification$.inboundSchema.optional(),
            exporter_reference: z.string().optional(),
            importer_reference: z.string().optional(),
            is_vat_collected: z.boolean().optional(),
            invoice: z.string().optional(),
            license: z.string().optional(),
            metadata: z.string().optional(),
            notes: z.string().optional(),
            address_importer: z.string().optional(),
            contents_type: z.string(),
            eel_pfc: z.string().optional(),
            incoterm: z.string().optional(),
            invoiced_charges: CustomsInvoicedCharges$.inboundSchema.optional(),
            items: z.array(z.string()),
            non_delivery_option: z.string(),
            object_created: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            object_id: z.string().optional(),
            object_owner: z.string().optional(),
            object_state: ObjectStateEnum$.inboundSchema.optional(),
            object_updated: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            test: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                aes_itn: "aesItn",
                b13a_filing_option: "b13aFilingOption",
                b13a_number: "b13aNumber",
                certify_signer: "certifySigner",
                commercial_invoice: "commercialInvoice",
                contents_explanation: "contentsExplanation",
                exporter_identification: "exporterIdentification",
                exporter_reference: "exporterReference",
                importer_reference: "importerReference",
                is_vat_collected: "isVatCollected",
                address_importer: "addressImporter",
                contents_type: "contentsType",
                eel_pfc: "eelPfc",
                invoiced_charges: "invoicedCharges",
                non_delivery_option: "nonDeliveryOption",
                object_created: "objectCreated",
                object_id: "objectId",
                object_owner: "objectOwner",
                object_state: "objectState",
                object_updated: "objectUpdated",
            });
        });

    export type Outbound = {
        aes_itn?: string | undefined;
        b13a_filing_option?: string | undefined;
        b13a_number?: string | undefined;
        certificate?: string | undefined;
        certify: boolean;
        certify_signer: string;
        commercial_invoice?: boolean | undefined;
        contents_explanation?: string | undefined;
        disclaimer?: string | undefined;
        exporter_identification?: CustomsExporterIdentification$.Outbound | undefined;
        exporter_reference?: string | undefined;
        importer_reference?: string | undefined;
        is_vat_collected?: boolean | undefined;
        invoice?: string | undefined;
        license?: string | undefined;
        metadata?: string | undefined;
        notes?: string | undefined;
        address_importer?: string | undefined;
        contents_type: string;
        eel_pfc?: string | undefined;
        incoterm?: string | undefined;
        invoiced_charges?: CustomsInvoicedCharges$.Outbound | undefined;
        items: Array<string>;
        non_delivery_option: string;
        object_created?: string | undefined;
        object_id?: string | undefined;
        object_owner?: string | undefined;
        object_state?: string | undefined;
        object_updated?: string | undefined;
        test?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CustomsDeclaration> = z
        .object({
            aesItn: z.string().optional(),
            b13aFilingOption: z.string().optional(),
            b13aNumber: z.string().optional(),
            certificate: z.string().optional(),
            certify: z.boolean(),
            certifySigner: z.string(),
            commercialInvoice: z.boolean().optional(),
            contentsExplanation: z.string().optional(),
            disclaimer: z.string().optional(),
            exporterIdentification: CustomsExporterIdentification$.outboundSchema.optional(),
            exporterReference: z.string().optional(),
            importerReference: z.string().optional(),
            isVatCollected: z.boolean().optional(),
            invoice: z.string().optional(),
            license: z.string().optional(),
            metadata: z.string().optional(),
            notes: z.string().optional(),
            addressImporter: z.string().optional(),
            contentsType: z.string(),
            eelPfc: z.string().optional(),
            incoterm: z.string().optional(),
            invoicedCharges: CustomsInvoicedCharges$.outboundSchema.optional(),
            items: z.array(z.string()),
            nonDeliveryOption: z.string(),
            objectCreated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            objectId: z.string().optional(),
            objectOwner: z.string().optional(),
            objectState: ObjectStateEnum$.outboundSchema.optional(),
            objectUpdated: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            test: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                aesItn: "aes_itn",
                b13aFilingOption: "b13a_filing_option",
                b13aNumber: "b13a_number",
                certifySigner: "certify_signer",
                commercialInvoice: "commercial_invoice",
                contentsExplanation: "contents_explanation",
                exporterIdentification: "exporter_identification",
                exporterReference: "exporter_reference",
                importerReference: "importer_reference",
                isVatCollected: "is_vat_collected",
                addressImporter: "address_importer",
                contentsType: "contents_type",
                eelPfc: "eel_pfc",
                invoicedCharges: "invoiced_charges",
                nonDeliveryOption: "non_delivery_option",
                objectCreated: "object_created",
                objectId: "object_id",
                objectOwner: "object_owner",
                objectState: "object_state",
                objectUpdated: "object_updated",
            });
        });
}
