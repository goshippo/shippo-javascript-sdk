/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { Alcohol, Alcohol$ } from "./alcohol";
import { Billing, Billing$ } from "./billing";
import { Cod, Cod$ } from "./cod";
import { CustomerReference, CustomerReference$ } from "./customerreference";
import { DangerousGoodsObject, DangerousGoodsObject$ } from "./dangerousgoodsobject";
import { DepartmentNumber, DepartmentNumber$ } from "./departmentnumber";
import { DryIce, DryIce$ } from "./dryice";
import { Insurance, Insurance$ } from "./insurance";
import { InvoiceNumber, InvoiceNumber$ } from "./invoicenumber";
import { PoNumber, PoNumber$ } from "./ponumber";
import { RmaNumber, RmaNumber$ } from "./rmanumber";
import { UPSReferenceFields, UPSReferenceFields$ } from "./upsreferencefields";
import * as z from "zod";

/**
 * Specify an ancillary service endorsement to provide the USPS with instructions on how to handle undeliverable-as-addressed pieces (DHL eCommerce only).
 */
export enum AncillaryEndorsement {
    ForwardingServiceRequested = "FORWARDING_SERVICE_REQUESTED",
    ReturnServiceRequested = "RETURN_SERVICE_REQUESTED",
}

/**
 * Dangerous Goods Code (DHL eCommerce only). See <a href="https://api-legacy.dhlecs.com/docs/v2/appendix.html#dangerous-goods">Category Codes</a>
 */
export enum DangerousGoodsCode {
    One = "01",
    Two = "02",
    Three = "03",
    Four = "04",
    Five = "05",
    Six = "06",
    Seven = "07",
    Eight = "08",
    Nine = "09",
}

/**
 * Specify Lasership Attributes (Lasership only). Multiple options accepted.
 */
export enum LasershipAttrs {
    TwoPersonDelivery = "TwoPersonDelivery",
    Explosive = "Explosive",
    Alcohol = "Alcohol",
    Hazmat = "Hazmat",
    ControlledSubstance = "ControlledSubstance",
    Refrigerated = "Refrigerated",
    DryIce = "DryIce",
    Perishable = "Perishable",
    NoRTS = "NoRTS",
}

/**
 * Required for DHL Germany Paket Sameday. Designates a desired timeframe for delivery. Format is `HHMMHHMM`
 */
export enum PreferredDeliveryTimeframe {
    TenMillionOneThousandTwoHundred = "10001200",
    TwelveMillionOneThousandFourHundred = "12001400",
    FourteenMillionOneThousandSixHundred = "14001600",
    SixteenMillionOneThousandEightHundred = "16001800",
    EighteenMillionTwoThousand = "18002000",
    NineteenMillionTwoThousandOneHundred = "19002100",
}

/**
 * Request additional return option for return shipments (UPS only).
 */
export enum ReturnServiceType {
    PrintAndMail = "PRINT_AND_MAIL",
    Attempt1 = "ATTEMPT_1",
    Attempt3 = "ATTEMPT_3",
    ElectronicLabel = "ELECTRONIC_LABEL",
}

/**
 * Request standard or adult signature confirmation. You can alternatively request Certified Mail (USPS only)
 *
 * @remarks
 * or Indirect signature (FedEx only) or Carrier Confirmation (Deutsche Post only).
 */
export enum SignatureConfirmation {
    Standard = "STANDARD",
    Adult = "ADULT",
    Certified = "CERTIFIED",
    Indirect = "INDIRECT",
    CarrierConfirmation = "CARRIER_CONFIRMATION",
}

/**
 * An object holding optional extra services to be requested.
 */
export type ShipmentExtra = {
    accountsReceivableCustomerAccount?: UPSReferenceFields | undefined;
    /**
     * Indicates that a shipment contains Alcohol (Fedex and UPS only).
     */
    alcohol?: Alcohol | undefined;
    /**
     * Specify an ancillary service endorsement to provide the USPS with instructions on how to handle undeliverable-as-addressed pieces (DHL eCommerce only).
     */
    ancillaryEndorsement?: AncillaryEndorsement | undefined;
    appropriationNumber?: UPSReferenceFields | undefined;
    /**
     * Request `true` to give carrier permission to leave the parcel in a safe place if no one answers the
     *
     * @remarks
     * door (where supported). When set to `false`, if no one is available to receive the item, the parcel
     * will not be left (*surcharges may be applicable).
     */
    authorityToLeave?: boolean | undefined;
    billOfLadingNumber?: UPSReferenceFields | undefined;
    /**
     * Specify billing details (UPS, FedEx, and DHL Germany only).
     */
    billing?: Billing | undefined;
    /**
     * Bypasses address validation (USPS, UPS, & LaserShip only).
     */
    bypassAddressValidation?: boolean | undefined;
    /**
     * Request carbon offsets by passing true (UPS only).
     */
    carbonNeutral?: boolean | undefined;
    /**
     * Identifies the carrier injection site.
     */
    carrierHubId?: string | undefined;
    /**
     * Travel time in hours from fulfillment center to carrier injection site.
     */
    carrierHubTravelTime?: number | undefined;
    /**
     * Specify collection on delivery details (UPS only).
     */
    cod?: Cod | undefined;
    codNumber?: UPSReferenceFields | undefined;
    /**
     * Specify container type.
     */
    containerType?: string | undefined;
    /**
     * Carrier arrival time to pickup packages from the fulfillment center.
     *
     * @remarks
     * UTC format: `%Y-%m-%dT%H:%M:%SZ`
     */
    criticalPullTime?: string | undefined;
    /**
     * Specify customer branch (Lasership only).
     */
    customerBranch?: string | undefined;
    /**
     * Specify the reference field on the label (FedEx and UPS only).
     */
    customerReference?: CustomerReference | undefined;
    /**
     * Container for specifying the presence of dangerous materials. This is specific to USPS, and if any contents
     *
     * @remarks
     * are provided, only certain USPS service levels will be eligible. For more information, see our
     * <a href="https://docs.goshippo.com/docs/shipments/hazmat/">guide on hazardous or dangerous materials shipping</a>.
     */
    dangerousGoods?: DangerousGoodsObject | undefined;
    /**
     * Dangerous Goods Code (DHL eCommerce only). See <a href="https://api-legacy.dhlecs.com/docs/v2/appendix.html#dangerous-goods">Category Codes</a>
     */
    dangerousGoodsCode?: DangerousGoodsCode | undefined;
    dealerOrderNumber?: UPSReferenceFields | undefined;
    /**
     * Specify delivery instructions. Up to 500 characters. (FedEx and OnTrac only).
     */
    deliveryInstructions?: string | undefined;
    /**
     * Specify the department number field on the label (FedEx and UPS only).
     */
    deptNumber?: DepartmentNumber | undefined;
    /**
     * Specify that the package contains Dry Ice (FedEx, Veho, and UPS only).
     */
    dryIce?: DryIce | undefined;
    fdaProductCode?: UPSReferenceFields | undefined;
    /**
     * The fulfilment center where the package originates from.
     */
    fulfillmentCenter?: string | undefined;
    /**
     * To add 3rd party insurance powered by <a href="https://docs.goshippo.com/docs/shipments/shippinginsurance/">XCover</a>, specify <br> `amount`, `content`, and `currency`. <br> Alternatively, you can choose carrier provided insurance by additionally specifying `provider` (UPS, FedEx and OnTrac only). <br><br> If you do not want to add insurance to you shipment, do not set these parameters.
     */
    insurance?: Insurance | undefined;
    /**
     * Specify the invoice number field on the label (FedEx and UPS only).
     */
    invoiceNumber?: InvoiceNumber | undefined;
    /**
     * This field specifies if it is a scan-based return shipment. See the <a href="https://docs.goshippo.com/docs/shipments/returns/">Create a return shipment</a> section for more details.
     */
    isReturn?: boolean | undefined;
    /**
     * Specify Lasership Attributes (Lasership only). Multiple options accepted.
     */
    lasershipAttrs?: LasershipAttrs | undefined;
    /**
     * Declared value (Lasership only). Defaults to `50.00`.
     */
    lasershipDeclaredValue?: string | undefined;
    manifestNumber?: UPSReferenceFields | undefined;
    modelNumber?: UPSReferenceFields | undefined;
    partNumber?: UPSReferenceFields | undefined;
    /**
     * Specify the PO number field on the label (FedEx and UPS only).
     */
    poNumber?: PoNumber | undefined;
    /**
     * Required for DHL Germany Paket Sameday. Designates a desired timeframe for delivery. Format is `HHMMHHMM`
     */
    preferredDeliveryTimeframe?: PreferredDeliveryTimeframe | undefined;
    /**
     * Add premium service to a shipment (DHL Germany international shipments only).
     */
    premium?: boolean | undefined;
    productionCode?: UPSReferenceFields | undefined;
    purchaseRequestNumber?: UPSReferenceFields | undefined;
    /**
     * Request a QR code for a given transaction when creating a shipping label (USPS domestic and Evri UK only).
     */
    qrCodeRequested?: boolean | undefined;
    /**
     * Optional text to be printed on the shipping label if supported by carrier. Up to 50 characters.
     */
    reference1?: string | undefined;
    /**
     * Optional text to be printed on the shipping label if supported by carrier. Up to 50 characters. For DHL eCommerce, this field can be used for billing reference.
     */
    reference2?: string | undefined;
    /**
     * Returns retail rates instead of account-based rates (UPS and FedEx only).
     */
    requestRetailRates?: boolean | undefined;
    /**
     * Request additional return option for return shipments (UPS only).
     */
    returnServiceType?: ReturnServiceType | undefined;
    /**
     * Specify the RMA number field on the label (FedEx and UPS only).
     */
    rmaNumber?: RmaNumber | undefined;
    /**
     * Marks shipment as to be delivered on a Saturday.
     */
    saturdayDelivery?: boolean | undefined;
    salespersonNumber?: UPSReferenceFields | undefined;
    serialNumber?: UPSReferenceFields | undefined;
    /**
     * Request standard or adult signature confirmation. You can alternatively request Certified Mail (USPS only)
     *
     * @remarks
     * or Indirect signature (FedEx only) or Carrier Confirmation (Deutsche Post only).
     */
    signatureConfirmation?: SignatureConfirmation | undefined;
    storeNumber?: UPSReferenceFields | undefined;
    transactionReferenceNumber?: UPSReferenceFields | undefined;
};

/** @internal */
export namespace AncillaryEndorsement$ {
    export const inboundSchema = z.nativeEnum(AncillaryEndorsement);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace DangerousGoodsCode$ {
    export const inboundSchema = z.nativeEnum(DangerousGoodsCode);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace LasershipAttrs$ {
    export const inboundSchema = z.nativeEnum(LasershipAttrs);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace PreferredDeliveryTimeframe$ {
    export const inboundSchema = z.nativeEnum(PreferredDeliveryTimeframe);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ReturnServiceType$ {
    export const inboundSchema = z.nativeEnum(ReturnServiceType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace SignatureConfirmation$ {
    export const inboundSchema = z.nativeEnum(SignatureConfirmation);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ShipmentExtra$ {
    export const inboundSchema: z.ZodType<ShipmentExtra, z.ZodTypeDef, unknown> = z
        .object({
            accounts_receivable_customer_account: UPSReferenceFields$.inboundSchema.optional(),
            alcohol: Alcohol$.inboundSchema.optional(),
            ancillary_endorsement: AncillaryEndorsement$.inboundSchema.optional(),
            appropriation_number: UPSReferenceFields$.inboundSchema.optional(),
            authority_to_leave: z.boolean().optional(),
            bill_of_lading_number: UPSReferenceFields$.inboundSchema.optional(),
            billing: Billing$.inboundSchema.optional(),
            bypass_address_validation: z.boolean().optional(),
            carbon_neutral: z.boolean().optional(),
            carrier_hub_id: z.string().optional(),
            carrier_hub_travel_time: z.number().int().optional(),
            COD: Cod$.inboundSchema.optional(),
            cod_number: UPSReferenceFields$.inboundSchema.optional(),
            container_type: z.string().optional(),
            critical_pull_time: z.string().optional(),
            customer_branch: z.string().optional(),
            customer_reference: CustomerReference$.inboundSchema.optional(),
            dangerous_goods: DangerousGoodsObject$.inboundSchema.optional(),
            dangerous_goods_code: DangerousGoodsCode$.inboundSchema.optional(),
            dealer_order_number: UPSReferenceFields$.inboundSchema.optional(),
            delivery_instructions: z.string().optional(),
            dept_number: DepartmentNumber$.inboundSchema.optional(),
            dry_ice: DryIce$.inboundSchema.optional(),
            fda_product_code: UPSReferenceFields$.inboundSchema.optional(),
            fulfillment_center: z.string().optional(),
            insurance: Insurance$.inboundSchema.optional(),
            invoice_number: InvoiceNumber$.inboundSchema.optional(),
            is_return: z.boolean().optional(),
            lasership_attrs: LasershipAttrs$.inboundSchema.optional(),
            lasership_declared_value: z.string().optional(),
            manifest_number: UPSReferenceFields$.inboundSchema.optional(),
            model_number: UPSReferenceFields$.inboundSchema.optional(),
            part_number: UPSReferenceFields$.inboundSchema.optional(),
            po_number: PoNumber$.inboundSchema.optional(),
            preferred_delivery_timeframe: PreferredDeliveryTimeframe$.inboundSchema.optional(),
            premium: z.boolean().optional(),
            production_code: UPSReferenceFields$.inboundSchema.optional(),
            purchase_request_number: UPSReferenceFields$.inboundSchema.optional(),
            qr_code_requested: z.boolean().optional(),
            reference_1: z.string().optional(),
            reference_2: z.string().optional(),
            request_retail_rates: z.boolean().optional(),
            return_service_type: ReturnServiceType$.inboundSchema.optional(),
            rma_number: RmaNumber$.inboundSchema.optional(),
            saturday_delivery: z.boolean().optional(),
            salesperson_number: UPSReferenceFields$.inboundSchema.optional(),
            serial_number: UPSReferenceFields$.inboundSchema.optional(),
            signature_confirmation: SignatureConfirmation$.inboundSchema.optional(),
            store_number: UPSReferenceFields$.inboundSchema.optional(),
            transaction_reference_number: UPSReferenceFields$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                accounts_receivable_customer_account: "accountsReceivableCustomerAccount",
                ancillary_endorsement: "ancillaryEndorsement",
                appropriation_number: "appropriationNumber",
                authority_to_leave: "authorityToLeave",
                bill_of_lading_number: "billOfLadingNumber",
                bypass_address_validation: "bypassAddressValidation",
                carbon_neutral: "carbonNeutral",
                carrier_hub_id: "carrierHubId",
                carrier_hub_travel_time: "carrierHubTravelTime",
                COD: "cod",
                cod_number: "codNumber",
                container_type: "containerType",
                critical_pull_time: "criticalPullTime",
                customer_branch: "customerBranch",
                customer_reference: "customerReference",
                dangerous_goods: "dangerousGoods",
                dangerous_goods_code: "dangerousGoodsCode",
                dealer_order_number: "dealerOrderNumber",
                delivery_instructions: "deliveryInstructions",
                dept_number: "deptNumber",
                dry_ice: "dryIce",
                fda_product_code: "fdaProductCode",
                fulfillment_center: "fulfillmentCenter",
                invoice_number: "invoiceNumber",
                is_return: "isReturn",
                lasership_attrs: "lasershipAttrs",
                lasership_declared_value: "lasershipDeclaredValue",
                manifest_number: "manifestNumber",
                model_number: "modelNumber",
                part_number: "partNumber",
                po_number: "poNumber",
                preferred_delivery_timeframe: "preferredDeliveryTimeframe",
                production_code: "productionCode",
                purchase_request_number: "purchaseRequestNumber",
                qr_code_requested: "qrCodeRequested",
                reference_1: "reference1",
                reference_2: "reference2",
                request_retail_rates: "requestRetailRates",
                return_service_type: "returnServiceType",
                rma_number: "rmaNumber",
                saturday_delivery: "saturdayDelivery",
                salesperson_number: "salespersonNumber",
                serial_number: "serialNumber",
                signature_confirmation: "signatureConfirmation",
                store_number: "storeNumber",
                transaction_reference_number: "transactionReferenceNumber",
            });
        });

    export type Outbound = {
        accounts_receivable_customer_account?: UPSReferenceFields$.Outbound | undefined;
        alcohol?: Alcohol$.Outbound | undefined;
        ancillary_endorsement?: string | undefined;
        appropriation_number?: UPSReferenceFields$.Outbound | undefined;
        authority_to_leave?: boolean | undefined;
        bill_of_lading_number?: UPSReferenceFields$.Outbound | undefined;
        billing?: Billing$.Outbound | undefined;
        bypass_address_validation?: boolean | undefined;
        carbon_neutral?: boolean | undefined;
        carrier_hub_id?: string | undefined;
        carrier_hub_travel_time?: number | undefined;
        COD?: Cod$.Outbound | undefined;
        cod_number?: UPSReferenceFields$.Outbound | undefined;
        container_type?: string | undefined;
        critical_pull_time?: string | undefined;
        customer_branch?: string | undefined;
        customer_reference?: CustomerReference$.Outbound | undefined;
        dangerous_goods?: DangerousGoodsObject$.Outbound | undefined;
        dangerous_goods_code?: string | undefined;
        dealer_order_number?: UPSReferenceFields$.Outbound | undefined;
        delivery_instructions?: string | undefined;
        dept_number?: DepartmentNumber$.Outbound | undefined;
        dry_ice?: DryIce$.Outbound | undefined;
        fda_product_code?: UPSReferenceFields$.Outbound | undefined;
        fulfillment_center?: string | undefined;
        insurance?: Insurance$.Outbound | undefined;
        invoice_number?: InvoiceNumber$.Outbound | undefined;
        is_return?: boolean | undefined;
        lasership_attrs?: string | undefined;
        lasership_declared_value?: string | undefined;
        manifest_number?: UPSReferenceFields$.Outbound | undefined;
        model_number?: UPSReferenceFields$.Outbound | undefined;
        part_number?: UPSReferenceFields$.Outbound | undefined;
        po_number?: PoNumber$.Outbound | undefined;
        preferred_delivery_timeframe?: string | undefined;
        premium?: boolean | undefined;
        production_code?: UPSReferenceFields$.Outbound | undefined;
        purchase_request_number?: UPSReferenceFields$.Outbound | undefined;
        qr_code_requested?: boolean | undefined;
        reference_1?: string | undefined;
        reference_2?: string | undefined;
        request_retail_rates?: boolean | undefined;
        return_service_type?: string | undefined;
        rma_number?: RmaNumber$.Outbound | undefined;
        saturday_delivery?: boolean | undefined;
        salesperson_number?: UPSReferenceFields$.Outbound | undefined;
        serial_number?: UPSReferenceFields$.Outbound | undefined;
        signature_confirmation?: string | undefined;
        store_number?: UPSReferenceFields$.Outbound | undefined;
        transaction_reference_number?: UPSReferenceFields$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ShipmentExtra> = z
        .object({
            accountsReceivableCustomerAccount: UPSReferenceFields$.outboundSchema.optional(),
            alcohol: Alcohol$.outboundSchema.optional(),
            ancillaryEndorsement: AncillaryEndorsement$.outboundSchema.optional(),
            appropriationNumber: UPSReferenceFields$.outboundSchema.optional(),
            authorityToLeave: z.boolean().optional(),
            billOfLadingNumber: UPSReferenceFields$.outboundSchema.optional(),
            billing: Billing$.outboundSchema.optional(),
            bypassAddressValidation: z.boolean().optional(),
            carbonNeutral: z.boolean().optional(),
            carrierHubId: z.string().optional(),
            carrierHubTravelTime: z.number().int().optional(),
            cod: Cod$.outboundSchema.optional(),
            codNumber: UPSReferenceFields$.outboundSchema.optional(),
            containerType: z.string().optional(),
            criticalPullTime: z.string().optional(),
            customerBranch: z.string().optional(),
            customerReference: CustomerReference$.outboundSchema.optional(),
            dangerousGoods: DangerousGoodsObject$.outboundSchema.optional(),
            dangerousGoodsCode: DangerousGoodsCode$.outboundSchema.optional(),
            dealerOrderNumber: UPSReferenceFields$.outboundSchema.optional(),
            deliveryInstructions: z.string().optional(),
            deptNumber: DepartmentNumber$.outboundSchema.optional(),
            dryIce: DryIce$.outboundSchema.optional(),
            fdaProductCode: UPSReferenceFields$.outboundSchema.optional(),
            fulfillmentCenter: z.string().optional(),
            insurance: Insurance$.outboundSchema.optional(),
            invoiceNumber: InvoiceNumber$.outboundSchema.optional(),
            isReturn: z.boolean().optional(),
            lasershipAttrs: LasershipAttrs$.outboundSchema.optional(),
            lasershipDeclaredValue: z.string().optional(),
            manifestNumber: UPSReferenceFields$.outboundSchema.optional(),
            modelNumber: UPSReferenceFields$.outboundSchema.optional(),
            partNumber: UPSReferenceFields$.outboundSchema.optional(),
            poNumber: PoNumber$.outboundSchema.optional(),
            preferredDeliveryTimeframe: PreferredDeliveryTimeframe$.outboundSchema.optional(),
            premium: z.boolean().optional(),
            productionCode: UPSReferenceFields$.outboundSchema.optional(),
            purchaseRequestNumber: UPSReferenceFields$.outboundSchema.optional(),
            qrCodeRequested: z.boolean().optional(),
            reference1: z.string().optional(),
            reference2: z.string().optional(),
            requestRetailRates: z.boolean().optional(),
            returnServiceType: ReturnServiceType$.outboundSchema.optional(),
            rmaNumber: RmaNumber$.outboundSchema.optional(),
            saturdayDelivery: z.boolean().optional(),
            salespersonNumber: UPSReferenceFields$.outboundSchema.optional(),
            serialNumber: UPSReferenceFields$.outboundSchema.optional(),
            signatureConfirmation: SignatureConfirmation$.outboundSchema.optional(),
            storeNumber: UPSReferenceFields$.outboundSchema.optional(),
            transactionReferenceNumber: UPSReferenceFields$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                accountsReceivableCustomerAccount: "accounts_receivable_customer_account",
                ancillaryEndorsement: "ancillary_endorsement",
                appropriationNumber: "appropriation_number",
                authorityToLeave: "authority_to_leave",
                billOfLadingNumber: "bill_of_lading_number",
                bypassAddressValidation: "bypass_address_validation",
                carbonNeutral: "carbon_neutral",
                carrierHubId: "carrier_hub_id",
                carrierHubTravelTime: "carrier_hub_travel_time",
                cod: "COD",
                codNumber: "cod_number",
                containerType: "container_type",
                criticalPullTime: "critical_pull_time",
                customerBranch: "customer_branch",
                customerReference: "customer_reference",
                dangerousGoods: "dangerous_goods",
                dangerousGoodsCode: "dangerous_goods_code",
                dealerOrderNumber: "dealer_order_number",
                deliveryInstructions: "delivery_instructions",
                deptNumber: "dept_number",
                dryIce: "dry_ice",
                fdaProductCode: "fda_product_code",
                fulfillmentCenter: "fulfillment_center",
                invoiceNumber: "invoice_number",
                isReturn: "is_return",
                lasershipAttrs: "lasership_attrs",
                lasershipDeclaredValue: "lasership_declared_value",
                manifestNumber: "manifest_number",
                modelNumber: "model_number",
                partNumber: "part_number",
                poNumber: "po_number",
                preferredDeliveryTimeframe: "preferred_delivery_timeframe",
                productionCode: "production_code",
                purchaseRequestNumber: "purchase_request_number",
                qrCodeRequested: "qr_code_requested",
                reference1: "reference_1",
                reference2: "reference_2",
                requestRetailRates: "request_retail_rates",
                returnServiceType: "return_service_type",
                rmaNumber: "rma_number",
                saturdayDelivery: "saturday_delivery",
                salespersonNumber: "salesperson_number",
                serialNumber: "serial_number",
                signatureConfirmation: "signature_confirmation",
                storeNumber: "store_number",
                transactionReferenceNumber: "transaction_reference_number",
            });
        });
}
