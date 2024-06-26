/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | Fastway_Australia_Satchel_A2 | Satchel A2 | 594.00 x 420.00 x 48.00 mm|
 * | Fastway_Australia_Satchel_A3 | Satchel A3 | 420.00 x 297.00 x 64.00 mm|
 * | Fastway_Australia_Satchel_A4 | Satchel A4 | 297.00 x 210.00 x 64.00 mm|
 * | Fastway_Australia_Satchel_A5 | Satchel A5 | 210.00 x 148.00 x 64.00 mm|
 *
 */
export const AramexAustraliaParcelTemplate = {
    FastwayAustraliaSatchelA2: "Fastway_Australia_Satchel_A2",
    FastwayAustraliaSatchelA3: "Fastway_Australia_Satchel_A3",
    FastwayAustraliaSatchelA4: "Fastway_Australia_Satchel_A4",
    FastwayAustraliaSatchelA5: "Fastway_Australia_Satchel_A5",
} as const;
/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | Fastway_Australia_Satchel_A2 | Satchel A2 | 594.00 x 420.00 x 48.00 mm|
 * | Fastway_Australia_Satchel_A3 | Satchel A3 | 420.00 x 297.00 x 64.00 mm|
 * | Fastway_Australia_Satchel_A4 | Satchel A4 | 297.00 x 210.00 x 64.00 mm|
 * | Fastway_Australia_Satchel_A5 | Satchel A5 | 210.00 x 148.00 x 64.00 mm|
 *
 */
export type AramexAustraliaParcelTemplate = ClosedEnum<typeof AramexAustraliaParcelTemplate>;

/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | couriersplease_500g_satchel | 500g Satchel | 22.00 x 33.50 x 0.10 cm|
 * | couriersplease_1kg_satchel | 1kg Satchel | 28.00 x 35.00 x 0.10 cm|
 * | couriersplease_3kg_satchel | 3kg Satchel | 34.00 x 42.00 x 0.10 cm|
 * | couriersplease_5kg_satchel | 5kg Satchel | 43.70 x 59.70 x 0.10 cm|
 *
 */
export const CouriersPleaseParcelTemplate = {
    Couriersplease500gSatchel: "couriersplease_500g_satchel",
    Couriersplease1kgSatchel: "couriersplease_1kg_satchel",
    Couriersplease3kgSatchel: "couriersplease_3kg_satchel",
    Couriersplease5kgSatchel: "couriersplease_5kg_satchel",
} as const;
/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | couriersplease_500g_satchel | 500g Satchel | 22.00 x 33.50 x 0.10 cm|
 * | couriersplease_1kg_satchel | 1kg Satchel | 28.00 x 35.00 x 0.10 cm|
 * | couriersplease_3kg_satchel | 3kg Satchel | 34.00 x 42.00 x 0.10 cm|
 * | couriersplease_5kg_satchel | 5kg Satchel | 43.70 x 59.70 x 0.10 cm|
 *
 */
export type CouriersPleaseParcelTemplate = ClosedEnum<typeof CouriersPleaseParcelTemplate>;

/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | DPD_UK_Express_Pak| DPD UK Express Pak | 530.00 x 400.00 x 100.00 mm|
 *
 */
export const DPDUKParcelTemplate = {
    DPDUKExpressPak: "DPD_UK_Express_Pak",
} as const;
/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | DPD_UK_Express_Pak| DPD UK Express Pak | 530.00 x 400.00 x 100.00 mm|
 *
 */
export type DPDUKParcelTemplate = ClosedEnum<typeof DPDUKParcelTemplate>;

/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | DHLeC_Irregular | Irregular Shipment | 10.00 x 10.00 x 10.00 in|
 * | DHLeC_SM_Flats | Flats | 27.00 x 17.00 x 17.00 in|
 *
 */
export const DHLECommerceParcelTemplate = {
    DHLeCIrregular: "DHLeC_Irregular",
    DHLeCSMFlats: "DHLeC_SM_Flats",
} as const;
/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | DHLeC_Irregular | Irregular Shipment | 10.00 x 10.00 x 10.00 in|
 * | DHLeC_SM_Flats | Flats | 27.00 x 17.00 x 17.00 in|
 *
 */
export type DHLECommerceParcelTemplate = ClosedEnum<typeof DHLECommerceParcelTemplate>;

/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | USPS_FlatRateCardboardEnvelope | Flat Rate Cardboard Envelope |  12.50 x 9.50 x 0.75 in |
 * | USPS_FlatRateEnvelope | Flat Rate Envelope |  12.50 x 9.50 x 0.75 in |
 * | USPS_FlatRateGiftCardEnvelope | Flat Rate Gift Card Envelope |  10.00 x 7.00 x 0.75 in |
 * | USPS_FlatRateLegalEnvelope | Flat Rate Legal Envelope |  15.00 x 9.50 x 0.75 in |
 * | USPS_FlatRatePaddedEnvelope | Flat Rate Padded Envelope |  12.50 x 9.50 x 1.00 in |
 * | USPS_FlatRateWindowEnvelope | Flat Rate Window Envelope |  10.00 x 5.00 x 0.75 in |
 * | USPS_IrregularParcel | Irregular Parcel |  0.00 x 0.00 x 0.00 in |
 * | USPS_LargeFlatRateBoardGameBox | Large Flat Rate Board Game Box |  24.06 x 11.88 x 3.13 in |
 * | USPS_LargeFlatRateBox | Large Flat Rate Box |  12.25 x 12.25 x 6.00 in |
 * | USPS_APOFlatRateBox | APO/FPO/DPO Large Flat Rate Box |  12.25 x 12.25 x 6.00 in |
 * | USPS_LargeVideoFlatRateBox | Flat Rate Large Video Box (Int&#39;l only) |  9.60 x 6.40 x 2.20 in |
 * | USPS_MediumFlatRateBox1 | Medium Flat Rate Box 1 |  11.25 x 8.75 x 6.00 in |
 * | USPS_MediumFlatRateBox2 | Medium Flat Rate Box 2 |  14.00 x 12.00 x 3.50 in |
 * | USPS_RegionalRateBoxA1 | Regional Rate Box A1 |  10.13 x 7.13 x 5.00 in |
 * | USPS_RegionalRateBoxA2 | Regional Rate Box A2 |  13.06 x 11.06 x 2.50 in |
 * | USPS_RegionalRateBoxB1 | Regional Rate Box B1 |  12.25 x 10.50 x 5.50 in |
 * | USPS_RegionalRateBoxB2 | Regional Rate Box B2 |  16.25 x 14.50 x 3.00 in |
 * | USPS_SmallFlatRateBox | Small Flat Rate Box |  8.69 x 5.44 x 1.75 in |
 * | USPS_SmallFlatRateEnvelope | Small Flat Rate Envelope |  10.00 x 6.00 x 4.00 in |
 * | USPS_SoftPack | Soft Pack Padded Envelope |  Length and width defined in the Parcel|
 *
 */
export const USPSParcelTemplate = {
    USPSFlatRateCardboardEnvelope: "USPS_FlatRateCardboardEnvelope",
    USPSFlatRateEnvelope: "USPS_FlatRateEnvelope",
    USPSFlatRateGiftCardEnvelope: "USPS_FlatRateGiftCardEnvelope",
    USPSFlatRateLegalEnvelope: "USPS_FlatRateLegalEnvelope",
    USPSFlatRatePaddedEnvelope: "USPS_FlatRatePaddedEnvelope",
    USPSFlatRateWindowEnvelope: "USPS_FlatRateWindowEnvelope",
    USPSIrregularParcel: "USPS_IrregularParcel",
    USPSLargeFlatRateBoardGameBox: "USPS_LargeFlatRateBoardGameBox",
    USPSLargeFlatRateBox: "USPS_LargeFlatRateBox",
    USPSAPOFlatRateBox: "USPS_APOFlatRateBox",
    USPSLargeVideoFlatRateBox: "USPS_LargeVideoFlatRateBox",
    USPSMediumFlatRateBox1: "USPS_MediumFlatRateBox1",
    USPSMediumFlatRateBox2: "USPS_MediumFlatRateBox2",
    USPSRegionalRateBoxA1: "USPS_RegionalRateBoxA1",
    USPSRegionalRateBoxA2: "USPS_RegionalRateBoxA2",
    USPSRegionalRateBoxB1: "USPS_RegionalRateBoxB1",
    USPSRegionalRateBoxB2: "USPS_RegionalRateBoxB2",
    USPSSmallFlatRateBox: "USPS_SmallFlatRateBox",
    USPSSmallFlatRateEnvelope: "USPS_SmallFlatRateEnvelope",
    USPSSoftPack: "USPS_SoftPack",
} as const;
/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | USPS_FlatRateCardboardEnvelope | Flat Rate Cardboard Envelope |  12.50 x 9.50 x 0.75 in |
 * | USPS_FlatRateEnvelope | Flat Rate Envelope |  12.50 x 9.50 x 0.75 in |
 * | USPS_FlatRateGiftCardEnvelope | Flat Rate Gift Card Envelope |  10.00 x 7.00 x 0.75 in |
 * | USPS_FlatRateLegalEnvelope | Flat Rate Legal Envelope |  15.00 x 9.50 x 0.75 in |
 * | USPS_FlatRatePaddedEnvelope | Flat Rate Padded Envelope |  12.50 x 9.50 x 1.00 in |
 * | USPS_FlatRateWindowEnvelope | Flat Rate Window Envelope |  10.00 x 5.00 x 0.75 in |
 * | USPS_IrregularParcel | Irregular Parcel |  0.00 x 0.00 x 0.00 in |
 * | USPS_LargeFlatRateBoardGameBox | Large Flat Rate Board Game Box |  24.06 x 11.88 x 3.13 in |
 * | USPS_LargeFlatRateBox | Large Flat Rate Box |  12.25 x 12.25 x 6.00 in |
 * | USPS_APOFlatRateBox | APO/FPO/DPO Large Flat Rate Box |  12.25 x 12.25 x 6.00 in |
 * | USPS_LargeVideoFlatRateBox | Flat Rate Large Video Box (Int&#39;l only) |  9.60 x 6.40 x 2.20 in |
 * | USPS_MediumFlatRateBox1 | Medium Flat Rate Box 1 |  11.25 x 8.75 x 6.00 in |
 * | USPS_MediumFlatRateBox2 | Medium Flat Rate Box 2 |  14.00 x 12.00 x 3.50 in |
 * | USPS_RegionalRateBoxA1 | Regional Rate Box A1 |  10.13 x 7.13 x 5.00 in |
 * | USPS_RegionalRateBoxA2 | Regional Rate Box A2 |  13.06 x 11.06 x 2.50 in |
 * | USPS_RegionalRateBoxB1 | Regional Rate Box B1 |  12.25 x 10.50 x 5.50 in |
 * | USPS_RegionalRateBoxB2 | Regional Rate Box B2 |  16.25 x 14.50 x 3.00 in |
 * | USPS_SmallFlatRateBox | Small Flat Rate Box |  8.69 x 5.44 x 1.75 in |
 * | USPS_SmallFlatRateEnvelope | Small Flat Rate Envelope |  10.00 x 6.00 x 4.00 in |
 * | USPS_SoftPack | Soft Pack Padded Envelope |  Length and width defined in the Parcel|
 *
 */
export type USPSParcelTemplate = ClosedEnum<typeof USPSParcelTemplate>;

/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | UPS_Box_10kg | Box 10kg | 410.00 x 335.00 x 265.00 mm|
 * | UPS_Box_25kg | Box 25kg | 484.00 x 433.00 x 350.00 mm|
 * | UPS_Express_Box | Express Box | 460.00 x 315.00 x 95.00 mm|
 * | UPS_Express_Box_Large | Express Box Large | 18.00 x 13.00 x 3.00 in|
 * | UPS_Express_Box_Medium | Express Box Medium | 15.00 x 11.00 x 3.00 in|
 * | UPS_Express_Box_Small | Express Box Small | 13.00 x 11.00 x 2.00 in|
 * | UPS_Express_Envelope | Express Envelope | 12.50 x 9.50 x 2.00 in|
 * | UPS_Express_Hard_Pak | Express Hard Pak | 14.75 x 11.50 x 2.00 in|
 * | UPS_Express_Legal_Envelope | Express Legal Envelope | 15.00 x 9.50 x 2.00 in|
 * | UPS_Express_Pak | Express Pak | 16.00 x 12.75 x 2.00 in|
 * | UPS_Express_Tube | Express Tube | 970.00 x 190.00 x 165.00 mm|
 * | UPS_Laboratory_Pak | Laboratory Pak | 17.25 x 12.75 x 2.00 in|
 * | UPS_MI_BPM | BPM (Mail Innovations - Domestic &amp; International) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_BPM_Flat | BPM Flat (Mail Innovations - Domestic &amp; International) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_BPM_Parcel | BPM Parcel (Mail Innovations - Domestic &amp; International) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_First_Class | First Class (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Flat | Flat (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Irregular | Irregular (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Machinable | Machinable (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_MEDIA_MAIL | Media Mail (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Parcel_Post | Parcel Post (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Priority | Priority (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Standard_Flat | Standard Flat (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_Pad_Pak | Pad Pak | 14.75 x 11.00 x 2.00 in|
 * | UPS_Pallet | Pallet | 120.00 x 80.00 x 200.00 cm|
 *
 */
export const UPSParcelTemplate = {
    UPSBox10kg: "UPS_Box_10kg",
    UPSBox25kg: "UPS_Box_25kg",
    UPSExpressBox: "UPS_Express_Box",
    UPSExpressBoxLarge: "UPS_Express_Box_Large",
    UPSExpressBoxMedium: "UPS_Express_Box_Medium",
    UPSExpressBoxSmall: "UPS_Express_Box_Small",
    UPSExpressEnvelope: "UPS_Express_Envelope",
    UPSExpressHardPak: "UPS_Express_Hard_Pak",
    UPSExpressLegalEnvelope: "UPS_Express_Legal_Envelope",
    UPSExpressPak: "UPS_Express_Pak",
    UPSExpressTube: "UPS_Express_Tube",
    UPSLaboratoryPak: "UPS_Laboratory_Pak",
    UpsMiBpm: "UPS_MI_BPM",
    UPSMIBPMFlat: "UPS_MI_BPM_Flat",
    UPSMIBPMParcel: "UPS_MI_BPM_Parcel",
    UPSMIFirstClass: "UPS_MI_First_Class",
    UPSMIFlat: "UPS_MI_Flat",
    UPSMIIrregular: "UPS_MI_Irregular",
    UPSMIMachinable: "UPS_MI_Machinable",
    UpsMiMediaMail: "UPS_MI_MEDIA_MAIL",
    UPSMIParcelPost: "UPS_MI_Parcel_Post",
    UPSMIPriority: "UPS_MI_Priority",
    UPSMIStandardFlat: "UPS_MI_Standard_Flat",
    UPSPadPak: "UPS_Pad_Pak",
    UPSPallet: "UPS_Pallet",
} as const;
/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | UPS_Box_10kg | Box 10kg | 410.00 x 335.00 x 265.00 mm|
 * | UPS_Box_25kg | Box 25kg | 484.00 x 433.00 x 350.00 mm|
 * | UPS_Express_Box | Express Box | 460.00 x 315.00 x 95.00 mm|
 * | UPS_Express_Box_Large | Express Box Large | 18.00 x 13.00 x 3.00 in|
 * | UPS_Express_Box_Medium | Express Box Medium | 15.00 x 11.00 x 3.00 in|
 * | UPS_Express_Box_Small | Express Box Small | 13.00 x 11.00 x 2.00 in|
 * | UPS_Express_Envelope | Express Envelope | 12.50 x 9.50 x 2.00 in|
 * | UPS_Express_Hard_Pak | Express Hard Pak | 14.75 x 11.50 x 2.00 in|
 * | UPS_Express_Legal_Envelope | Express Legal Envelope | 15.00 x 9.50 x 2.00 in|
 * | UPS_Express_Pak | Express Pak | 16.00 x 12.75 x 2.00 in|
 * | UPS_Express_Tube | Express Tube | 970.00 x 190.00 x 165.00 mm|
 * | UPS_Laboratory_Pak | Laboratory Pak | 17.25 x 12.75 x 2.00 in|
 * | UPS_MI_BPM | BPM (Mail Innovations - Domestic &amp; International) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_BPM_Flat | BPM Flat (Mail Innovations - Domestic &amp; International) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_BPM_Parcel | BPM Parcel (Mail Innovations - Domestic &amp; International) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_First_Class | First Class (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Flat | Flat (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Irregular | Irregular (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Machinable | Machinable (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_MEDIA_MAIL | Media Mail (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Parcel_Post | Parcel Post (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Priority | Priority (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_MI_Standard_Flat | Standard Flat (Mail Innovations - Domestic only) | 0.00 x 0.00 x 0.00 in|
 * | UPS_Pad_Pak | Pad Pak | 14.75 x 11.00 x 2.00 in|
 * | UPS_Pallet | Pallet | 120.00 x 80.00 x 200.00 cm|
 *
 */
export type UPSParcelTemplate = ClosedEnum<typeof UPSParcelTemplate>;

/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | FedEx_Box_10kg | FedEx® 10kg Box | 15.81 x 12.94 x 10.19 in|
 * | FedEx_Box_25kg | FedEx® 25kg Box | 54.80 x 42.10 x 33.50 in|
 * | FedEx_Box_Extra_Large_1 | FedEx® Extra Large Box (X1) | 11.88 x 11.00 x 10.75 in|
 * | FedEx_Box_Extra_Large_2 | FedEx® Extra Large Box (X2) | 15.75 x 14.13 x 6.00 in|
 * | FedEx_Box_Large_1 | FedEx® Large Box (L1) | 17.50 x 12.38 x 3.00 in|
 * | FedEx_Box_Large_2 | FedEx® Large Box (L2) | 11.25 x 8.75 x 7.75 in|
 * | FedEx_Box_Medium_1 | FedEx® Medium Box (M1) | 13.25 x 11.50 x 2.38 in|
 * | FedEx_Box_Medium_2 | FedEx® Medium Box (M2) | 11.25 x 8.75 x 4.38 in|
 * | FedEx_Box_Small_1 | FedEx® Small Box (S1) | 12.38 x 10.88 x 1.50 in|
 * | FedEx_Box_Small_2 | FedEx® Small Box (S2) | 11.25 x 8.75 x 4.38 in|
 * | FedEx_Envelope | FedEx® Envelope | 12.50 x 9.50 x 0.80 in|
 * | FedEx_Padded_Pak | FedEx® Padded Pak | 11.75 x 14.75 x 2.00 in|
 * | FedEx_Pak_1 | FedEx® Large Pak | 15.50 x 12.00 x 0.80 in|
 * | FedEx_Pak_2 | FedEx® Small Pak | 12.75 x 10.25 x 0.80 in|
 * | FedEx_Tube | FedEx® Tube | 38.00 x 6.00 x 6.00 in|
 * | FedEx_XL_Pak | FedEx® Extra Large Pak | 17.50 x 20.75 x 2.00 in|
 *
 */
export const FedExParcelTemplate = {
    FedExBox10kg: "FedEx_Box_10kg",
    FedExBox25kg: "FedEx_Box_25kg",
    FedExBoxExtraLarge1: "FedEx_Box_Extra_Large_1",
    FedExBoxExtraLarge2: "FedEx_Box_Extra_Large_2",
    FedExBoxLarge1: "FedEx_Box_Large_1",
    FedExBoxLarge2: "FedEx_Box_Large_2",
    FedExBoxMedium1: "FedEx_Box_Medium_1",
    FedExBoxMedium2: "FedEx_Box_Medium_2",
    FedExBoxSmall1: "FedEx_Box_Small_1",
    FedExBoxSmall2: "FedEx_Box_Small_2",
    FedExEnvelope: "FedEx_Envelope",
    FedExPaddedPak: "FedEx_Padded_Pak",
    FedExPak1: "FedEx_Pak_1",
    FedExPak2: "FedEx_Pak_2",
    FedExTube: "FedEx_Tube",
    FedExXLPak: "FedEx_XL_Pak",
} as const;
/**
 * |Token | Name | Dimensions|
 *
 * @remarks
 * |:---|:---|:---|
 * | FedEx_Box_10kg | FedEx® 10kg Box | 15.81 x 12.94 x 10.19 in|
 * | FedEx_Box_25kg | FedEx® 25kg Box | 54.80 x 42.10 x 33.50 in|
 * | FedEx_Box_Extra_Large_1 | FedEx® Extra Large Box (X1) | 11.88 x 11.00 x 10.75 in|
 * | FedEx_Box_Extra_Large_2 | FedEx® Extra Large Box (X2) | 15.75 x 14.13 x 6.00 in|
 * | FedEx_Box_Large_1 | FedEx® Large Box (L1) | 17.50 x 12.38 x 3.00 in|
 * | FedEx_Box_Large_2 | FedEx® Large Box (L2) | 11.25 x 8.75 x 7.75 in|
 * | FedEx_Box_Medium_1 | FedEx® Medium Box (M1) | 13.25 x 11.50 x 2.38 in|
 * | FedEx_Box_Medium_2 | FedEx® Medium Box (M2) | 11.25 x 8.75 x 4.38 in|
 * | FedEx_Box_Small_1 | FedEx® Small Box (S1) | 12.38 x 10.88 x 1.50 in|
 * | FedEx_Box_Small_2 | FedEx® Small Box (S2) | 11.25 x 8.75 x 4.38 in|
 * | FedEx_Envelope | FedEx® Envelope | 12.50 x 9.50 x 0.80 in|
 * | FedEx_Padded_Pak | FedEx® Padded Pak | 11.75 x 14.75 x 2.00 in|
 * | FedEx_Pak_1 | FedEx® Large Pak | 15.50 x 12.00 x 0.80 in|
 * | FedEx_Pak_2 | FedEx® Small Pak | 12.75 x 10.25 x 0.80 in|
 * | FedEx_Tube | FedEx® Tube | 38.00 x 6.00 x 6.00 in|
 * | FedEx_XL_Pak | FedEx® Extra Large Pak | 17.50 x 20.75 x 2.00 in|
 *
 */
export type FedExParcelTemplate = ClosedEnum<typeof FedExParcelTemplate>;

/**
 * If template is passed, `length`, `width`, `height`, and `distance_unit` are not required
 */
export type ParcelTemplateEnumSet =
    | FedExParcelTemplate
    | UPSParcelTemplate
    | USPSParcelTemplate
    | DHLECommerceParcelTemplate
    | DPDUKParcelTemplate
    | CouriersPleaseParcelTemplate
    | AramexAustraliaParcelTemplate;

/** @internal */
export namespace AramexAustraliaParcelTemplate$ {
    export const inboundSchema: z.ZodNativeEnum<typeof AramexAustraliaParcelTemplate> =
        z.nativeEnum(AramexAustraliaParcelTemplate);
    export const outboundSchema: z.ZodNativeEnum<typeof AramexAustraliaParcelTemplate> =
        inboundSchema;
}

/** @internal */
export namespace CouriersPleaseParcelTemplate$ {
    export const inboundSchema: z.ZodNativeEnum<typeof CouriersPleaseParcelTemplate> = z.nativeEnum(
        CouriersPleaseParcelTemplate
    );
    export const outboundSchema: z.ZodNativeEnum<typeof CouriersPleaseParcelTemplate> =
        inboundSchema;
}

/** @internal */
export namespace DPDUKParcelTemplate$ {
    export const inboundSchema: z.ZodNativeEnum<typeof DPDUKParcelTemplate> =
        z.nativeEnum(DPDUKParcelTemplate);
    export const outboundSchema: z.ZodNativeEnum<typeof DPDUKParcelTemplate> = inboundSchema;
}

/** @internal */
export namespace DHLECommerceParcelTemplate$ {
    export const inboundSchema: z.ZodNativeEnum<typeof DHLECommerceParcelTemplate> = z.nativeEnum(
        DHLECommerceParcelTemplate
    );
    export const outboundSchema: z.ZodNativeEnum<typeof DHLECommerceParcelTemplate> = inboundSchema;
}

/** @internal */
export namespace USPSParcelTemplate$ {
    export const inboundSchema: z.ZodNativeEnum<typeof USPSParcelTemplate> =
        z.nativeEnum(USPSParcelTemplate);
    export const outboundSchema: z.ZodNativeEnum<typeof USPSParcelTemplate> = inboundSchema;
}

/** @internal */
export namespace UPSParcelTemplate$ {
    export const inboundSchema: z.ZodNativeEnum<typeof UPSParcelTemplate> =
        z.nativeEnum(UPSParcelTemplate);
    export const outboundSchema: z.ZodNativeEnum<typeof UPSParcelTemplate> = inboundSchema;
}

/** @internal */
export namespace FedExParcelTemplate$ {
    export const inboundSchema: z.ZodNativeEnum<typeof FedExParcelTemplate> =
        z.nativeEnum(FedExParcelTemplate);
    export const outboundSchema: z.ZodNativeEnum<typeof FedExParcelTemplate> = inboundSchema;
}

/** @internal */
export namespace ParcelTemplateEnumSet$ {
    export const inboundSchema: z.ZodType<ParcelTemplateEnumSet, z.ZodTypeDef, unknown> = z.union([
        FedExParcelTemplate$.inboundSchema,
        UPSParcelTemplate$.inboundSchema,
        USPSParcelTemplate$.inboundSchema,
        DHLECommerceParcelTemplate$.inboundSchema,
        DPDUKParcelTemplate$.inboundSchema,
        CouriersPleaseParcelTemplate$.inboundSchema,
        AramexAustraliaParcelTemplate$.inboundSchema,
    ]);

    export type Outbound = string | string | string | string | string | string | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ParcelTemplateEnumSet> = z.union(
        [
            FedExParcelTemplate$.outboundSchema,
            UPSParcelTemplate$.outboundSchema,
            USPSParcelTemplate$.outboundSchema,
            DHLECommerceParcelTemplate$.outboundSchema,
            DPDUKParcelTemplate$.outboundSchema,
            CouriersPleaseParcelTemplate$.outboundSchema,
            AramexAustraliaParcelTemplate$.outboundSchema,
        ]
    );
}
