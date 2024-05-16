/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    CustomsExporterIdentification,
    CustomsExporterIdentification$,
} from "./customsexporteridentification";
import { CustomsInvoicedCharges, CustomsInvoicedCharges$ } from "./customsinvoicedcharges";
import { ObjectStateEnum, ObjectStateEnum$ } from "./objectstateenum";
import * as z from "zod";

/**
 * Object ID of the Importer address.
 */
export type CustomsDeclarationAddressImporter = {};

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
    isVatCollected?: any | undefined;
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
    addressImporter?: CustomsDeclarationAddressImporter | undefined;
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
     * Additional exporter identification that may be required to ship in certain countries
     */
    exporterIdentification?: CustomsExporterIdentification | undefined;
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
export namespace CustomsDeclarationAddressImporter$ {
    export const inboundSchema: z.ZodType<
        CustomsDeclarationAddressImporter,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CustomsDeclarationAddressImporter
    > = z.object({});
}

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
            exporter_reference: z.string().optional(),
            importer_reference: z.string().optional(),
            is_vat_collected: z.any().optional(),
            invoice: z.string().optional(),
            license: z.string().optional(),
            metadata: z.string().optional(),
            notes: z.string().optional(),
            address_importer: z
                .lazy(() => CustomsDeclarationAddressImporter$.inboundSchema)
                .optional(),
            contents_type: z.string(),
            eel_pfc: z.string().optional(),
            exporter_identification: CustomsExporterIdentification$.inboundSchema.optional(),
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
            return {
                ...(v.aes_itn === undefined ? null : { aesItn: v.aes_itn }),
                ...(v.b13a_filing_option === undefined
                    ? null
                    : { b13aFilingOption: v.b13a_filing_option }),
                ...(v.b13a_number === undefined ? null : { b13aNumber: v.b13a_number }),
                ...(v.certificate === undefined ? null : { certificate: v.certificate }),
                certify: v.certify,
                certifySigner: v.certify_signer,
                ...(v.commercial_invoice === undefined
                    ? null
                    : { commercialInvoice: v.commercial_invoice }),
                ...(v.contents_explanation === undefined
                    ? null
                    : { contentsExplanation: v.contents_explanation }),
                ...(v.disclaimer === undefined ? null : { disclaimer: v.disclaimer }),
                ...(v.exporter_reference === undefined
                    ? null
                    : { exporterReference: v.exporter_reference }),
                ...(v.importer_reference === undefined
                    ? null
                    : { importerReference: v.importer_reference }),
                ...(v.is_vat_collected === undefined
                    ? null
                    : { isVatCollected: v.is_vat_collected }),
                ...(v.invoice === undefined ? null : { invoice: v.invoice }),
                ...(v.license === undefined ? null : { license: v.license }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.address_importer === undefined
                    ? null
                    : { addressImporter: v.address_importer }),
                contentsType: v.contents_type,
                ...(v.eel_pfc === undefined ? null : { eelPfc: v.eel_pfc }),
                ...(v.exporter_identification === undefined
                    ? null
                    : { exporterIdentification: v.exporter_identification }),
                ...(v.incoterm === undefined ? null : { incoterm: v.incoterm }),
                ...(v.invoiced_charges === undefined
                    ? null
                    : { invoicedCharges: v.invoiced_charges }),
                items: v.items,
                nonDeliveryOption: v.non_delivery_option,
                ...(v.object_created === undefined ? null : { objectCreated: v.object_created }),
                ...(v.object_id === undefined ? null : { objectId: v.object_id }),
                ...(v.object_owner === undefined ? null : { objectOwner: v.object_owner }),
                ...(v.object_state === undefined ? null : { objectState: v.object_state }),
                ...(v.object_updated === undefined ? null : { objectUpdated: v.object_updated }),
                ...(v.test === undefined ? null : { test: v.test }),
            };
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
        exporter_reference?: string | undefined;
        importer_reference?: string | undefined;
        is_vat_collected?: any | undefined;
        invoice?: string | undefined;
        license?: string | undefined;
        metadata?: string | undefined;
        notes?: string | undefined;
        address_importer?: CustomsDeclarationAddressImporter$.Outbound | undefined;
        contents_type: string;
        eel_pfc?: string | undefined;
        exporter_identification?: CustomsExporterIdentification$.Outbound | undefined;
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
            exporterReference: z.string().optional(),
            importerReference: z.string().optional(),
            isVatCollected: z.any().optional(),
            invoice: z.string().optional(),
            license: z.string().optional(),
            metadata: z.string().optional(),
            notes: z.string().optional(),
            addressImporter: z
                .lazy(() => CustomsDeclarationAddressImporter$.outboundSchema)
                .optional(),
            contentsType: z.string(),
            eelPfc: z.string().optional(),
            exporterIdentification: CustomsExporterIdentification$.outboundSchema.optional(),
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
            return {
                ...(v.aesItn === undefined ? null : { aes_itn: v.aesItn }),
                ...(v.b13aFilingOption === undefined
                    ? null
                    : { b13a_filing_option: v.b13aFilingOption }),
                ...(v.b13aNumber === undefined ? null : { b13a_number: v.b13aNumber }),
                ...(v.certificate === undefined ? null : { certificate: v.certificate }),
                certify: v.certify,
                certify_signer: v.certifySigner,
                ...(v.commercialInvoice === undefined
                    ? null
                    : { commercial_invoice: v.commercialInvoice }),
                ...(v.contentsExplanation === undefined
                    ? null
                    : { contents_explanation: v.contentsExplanation }),
                ...(v.disclaimer === undefined ? null : { disclaimer: v.disclaimer }),
                ...(v.exporterReference === undefined
                    ? null
                    : { exporter_reference: v.exporterReference }),
                ...(v.importerReference === undefined
                    ? null
                    : { importer_reference: v.importerReference }),
                ...(v.isVatCollected === undefined ? null : { is_vat_collected: v.isVatCollected }),
                ...(v.invoice === undefined ? null : { invoice: v.invoice }),
                ...(v.license === undefined ? null : { license: v.license }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.addressImporter === undefined
                    ? null
                    : { address_importer: v.addressImporter }),
                contents_type: v.contentsType,
                ...(v.eelPfc === undefined ? null : { eel_pfc: v.eelPfc }),
                ...(v.exporterIdentification === undefined
                    ? null
                    : { exporter_identification: v.exporterIdentification }),
                ...(v.incoterm === undefined ? null : { incoterm: v.incoterm }),
                ...(v.invoicedCharges === undefined
                    ? null
                    : { invoiced_charges: v.invoicedCharges }),
                items: v.items,
                non_delivery_option: v.nonDeliveryOption,
                ...(v.objectCreated === undefined ? null : { object_created: v.objectCreated }),
                ...(v.objectId === undefined ? null : { object_id: v.objectId }),
                ...(v.objectOwner === undefined ? null : { object_owner: v.objectOwner }),
                ...(v.objectState === undefined ? null : { object_state: v.objectState }),
                ...(v.objectUpdated === undefined ? null : { object_updated: v.objectUpdated }),
                ...(v.test === undefined ? null : { test: v.test }),
            };
        });
}
