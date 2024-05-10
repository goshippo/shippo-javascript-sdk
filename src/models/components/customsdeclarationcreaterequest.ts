/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AddressImporter, AddressImporter$ } from "./addressimporter";
import {
    CustomsDeclarationB13AFilingOptionEnum,
    CustomsDeclarationB13AFilingOptionEnum$,
} from "./customsdeclarationb13afilingoptionenum";
import {
    CustomsDeclarationContentsTypeEnum,
    CustomsDeclarationContentsTypeEnum$,
} from "./customsdeclarationcontentstypeenum";
import {
    CustomsDeclarationEelPfcEnum,
    CustomsDeclarationEelPfcEnum$,
} from "./customsdeclarationeelpfcenum";
import {
    CustomsDeclarationIncotermEnum,
    CustomsDeclarationIncotermEnum$,
} from "./customsdeclarationincotermenum";
import {
    CustomsDeclarationNonDeliveryOptionEnum,
    CustomsDeclarationNonDeliveryOptionEnum$,
} from "./customsdeclarationnondeliveryoptionenum";
import { CustomsItemCreateRequest, CustomsItemCreateRequest$ } from "./customsitemcreaterequest";
import * as z from "zod";

export type CustomsDeclarationCreateRequest = {
    /**
     * **required if eel_pfc is `AES_ITN`**<br>
     *
     * @remarks
     * AES / ITN reference of the shipment.
     */
    aesItn?: string | undefined;
    b13aFilingOption?: CustomsDeclarationB13AFilingOptionEnum | undefined;
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
    commercialInvoice?: string | undefined;
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
     * Object that represents the address of the importer
     */
    addressImporter?: AddressImporter | undefined;
    contentsType: CustomsDeclarationContentsTypeEnum;
    eelPfc?: CustomsDeclarationEelPfcEnum | undefined;
    incoterm?: CustomsDeclarationIncotermEnum | undefined;
    items: Array<CustomsItemCreateRequest>;
    nonDeliveryOption: CustomsDeclarationNonDeliveryOptionEnum;
    test?: boolean | undefined;
};

/** @internal */
export namespace CustomsDeclarationCreateRequest$ {
    export type Inbound = {
        aes_itn?: string | undefined;
        b13a_filing_option?: CustomsDeclarationB13AFilingOptionEnum | undefined;
        b13a_number?: string | undefined;
        certificate?: string | undefined;
        certify: boolean;
        certify_signer: string;
        commercial_invoice?: string | undefined;
        contents_explanation?: string | undefined;
        disclaimer?: string | undefined;
        exporter_reference?: string | undefined;
        importer_reference?: string | undefined;
        is_vat_collected?: any | undefined;
        invoice?: string | undefined;
        license?: string | undefined;
        metadata?: string | undefined;
        notes?: string | undefined;
        address_importer?: AddressImporter$.Inbound | undefined;
        contents_type: CustomsDeclarationContentsTypeEnum;
        eel_pfc?: CustomsDeclarationEelPfcEnum | undefined;
        incoterm?: CustomsDeclarationIncotermEnum | undefined;
        items: Array<CustomsItemCreateRequest$.Inbound>;
        non_delivery_option: CustomsDeclarationNonDeliveryOptionEnum;
        test?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<CustomsDeclarationCreateRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                aes_itn: z.string().optional(),
                b13a_filing_option: CustomsDeclarationB13AFilingOptionEnum$.optional(),
                b13a_number: z.string().optional(),
                certificate: z.string().optional(),
                certify: z.boolean(),
                certify_signer: z.string(),
                commercial_invoice: z.string().optional(),
                contents_explanation: z.string().optional(),
                disclaimer: z.string().optional(),
                exporter_reference: z.string().optional(),
                importer_reference: z.string().optional(),
                is_vat_collected: z.any().optional(),
                invoice: z.string().optional(),
                license: z.string().optional(),
                metadata: z.string().optional(),
                notes: z.string().optional(),
                address_importer: AddressImporter$.inboundSchema.optional(),
                contents_type: CustomsDeclarationContentsTypeEnum$,
                eel_pfc: CustomsDeclarationEelPfcEnum$.optional(),
                incoterm: CustomsDeclarationIncotermEnum$.optional(),
                items: z.array(CustomsItemCreateRequest$.inboundSchema),
                non_delivery_option: CustomsDeclarationNonDeliveryOptionEnum$,
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
                    ...(v.incoterm === undefined ? null : { incoterm: v.incoterm }),
                    items: v.items,
                    nonDeliveryOption: v.non_delivery_option,
                    ...(v.test === undefined ? null : { test: v.test }),
                };
            });

    export type Outbound = {
        aes_itn?: string | undefined;
        b13a_filing_option?: CustomsDeclarationB13AFilingOptionEnum | undefined;
        b13a_number?: string | undefined;
        certificate?: string | undefined;
        certify: boolean;
        certify_signer: string;
        commercial_invoice?: string | undefined;
        contents_explanation?: string | undefined;
        disclaimer?: string | undefined;
        exporter_reference?: string | undefined;
        importer_reference?: string | undefined;
        is_vat_collected?: any | undefined;
        invoice?: string | undefined;
        license?: string | undefined;
        metadata?: string | undefined;
        notes?: string | undefined;
        address_importer?: AddressImporter$.Outbound | undefined;
        contents_type: CustomsDeclarationContentsTypeEnum;
        eel_pfc?: CustomsDeclarationEelPfcEnum | undefined;
        incoterm?: CustomsDeclarationIncotermEnum | undefined;
        items: Array<CustomsItemCreateRequest$.Outbound>;
        non_delivery_option: CustomsDeclarationNonDeliveryOptionEnum;
        test?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CustomsDeclarationCreateRequest
    > = z
        .object({
            aesItn: z.string().optional(),
            b13aFilingOption: CustomsDeclarationB13AFilingOptionEnum$.optional(),
            b13aNumber: z.string().optional(),
            certificate: z.string().optional(),
            certify: z.boolean(),
            certifySigner: z.string(),
            commercialInvoice: z.string().optional(),
            contentsExplanation: z.string().optional(),
            disclaimer: z.string().optional(),
            exporterReference: z.string().optional(),
            importerReference: z.string().optional(),
            isVatCollected: z.any().optional(),
            invoice: z.string().optional(),
            license: z.string().optional(),
            metadata: z.string().optional(),
            notes: z.string().optional(),
            addressImporter: AddressImporter$.outboundSchema.optional(),
            contentsType: CustomsDeclarationContentsTypeEnum$,
            eelPfc: CustomsDeclarationEelPfcEnum$.optional(),
            incoterm: CustomsDeclarationIncotermEnum$.optional(),
            items: z.array(CustomsItemCreateRequest$.outboundSchema),
            nonDeliveryOption: CustomsDeclarationNonDeliveryOptionEnum$,
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
                ...(v.incoterm === undefined ? null : { incoterm: v.incoterm }),
                items: v.items,
                non_delivery_option: v.nonDeliveryOption,
                ...(v.test === undefined ? null : { test: v.test }),
            };
        });
}
