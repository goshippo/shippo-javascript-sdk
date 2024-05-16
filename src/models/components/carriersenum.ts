/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * |Token | Carrier name|
 *
 * @remarks
 * |:---|:---|
 * | airterra | Airterra |
 * | apc_postal | APC Postal|
 * | apg | APG|
 * | aramex | Aramex|
 * | asendia_us | Asendia US|
 * | australia_post | Australia Post (also used for Startrack)|
 * | axlehire | Axlehire|
 * | better_trucks | BetterTrucks|
 * | borderguru | BorderGuru|
 * | boxberry | Boxberry|
 * | bring | Bring (also used for Posten Norge)|
 * | canada_post | Canada Post|
 * | cdl | CDL|
 * | chronopost | Chronopost|
 * | collect_plus | CollectPlus|
 * | correios_br | CorreiosBR|
 * | correos_espana | Correos España |
 * | couriersplease | Couriers Please|
 * | colissimo | Colissimo|
 * | deutsche_post | Deutsche Post|
 * | dhl_benelux | DHL Benelux|
 * | dhl_ecommerce | DHL eCommerce|
 * | dhl_express | DHL Express|
 * | dhl_germany_c2c | DHL Germany C2C|
 * | dhl_germany | DHL Germany|
 * | dpd_de | DPD GERMANY|
 * | dpd_uk | DPD UK|
 * | estafeta | Estafeta|
 * | fastway_australia | Aramex|
 * | fedex | FedEx|
 * | globegistics | Globegistics (now Asendia)|
 * | gls_us | GLS US|
 * | gophr | Gophr|
 * | gso | GSO|
 * | hermes_germany_b2c | Hermes Germany B2C|
 * | hermes_uk | Evri UK |
 * | hongkong_post | Hongkong Post|
 * | lasership | LaserShip|
 * | lso | LSO|
 * | mondial_relay | Mondial Relay|
 * | new_zealand_post | New Zealand Post (also used for Pace and CourierPost)|
 * | nippon_express | Nippon Express|
 * | ontrac | OnTrac|
 * | orangeds | OrangeDS|
 * | parcelforce | Parcelforce|
 * | parcel | Parcel|
 * | passport | Passport|
 * | pcf | PCF|
 * | poste_italiane | Poste Italiane |
 * | posti | Posti|
 * | purolator | Purolator|
 * | royal_mail | Royal Mail|
 * | rr_donnelley | ePost Global|
 * | russian_post | Russian Post|
 * | sendle | Sendle|
 * | skypostal | SkyPostal|
 * | stuart | Stuart|
 * | swyft | Swyft|
 * | uds | UDS (United Delivery Service)|
 * | ups | UPS|
 * | usps | USPS|
 * | veho | Veho |
 * | x_delivery | X Delivery (now Maergo)|
 * | yodel | Yodel|
 *
 */
export enum CarriersEnum {
    Airterra = "airterra",
    ApcPostal = "apc_postal",
    Apg = "apg",
    Aramex = "aramex",
    AsendiaUs = "asendia_us",
    AustraliaPost = "australia_post",
    Axlehire = "axlehire",
    BetterTrucks = "better_trucks",
    Borderguru = "borderguru",
    Boxberry = "boxberry",
    Bring = "bring",
    CanadaPost = "canada_post",
    Cdl = "cdl",
    Chronopost = "chronopost",
    CollectPlus = "collect_plus",
    CorreiosBr = "correios_br",
    CorreosEspana = "correos_espana",
    Couriersplease = "couriersplease",
    Colissimo = "colissimo",
    DeutschePost = "deutsche_post",
    DhlBenelux = "dhl_benelux",
    DhlEcommerce = "dhl_ecommerce",
    DhlExpress = "dhl_express",
    DhlGermanyC2c = "dhl_germany_c2c",
    DhlGermany = "dhl_germany",
    DpdDe = "dpd_de",
    DpdUk = "dpd_uk",
    Estafeta = "estafeta",
    FastwayAustralia = "fastway_australia",
    Fedex = "fedex",
    Globegistics = "globegistics",
    GlsUs = "gls_us",
    Gophr = "gophr",
    Gso = "gso",
    HermesGermanyB2c = "hermes_germany_b2c",
    HermesUk = "hermes_uk",
    HongkongPost = "hongkong_post",
    Lasership = "lasership",
    Lso = "lso",
    MondialRelay = "mondial_relay",
    NewZealandPost = "new_zealand_post",
    NipponExpress = "nippon_express",
    Ontrac = "ontrac",
    Orangeds = "orangeds",
    Parcelforce = "parcelforce",
    Parcel = "parcel",
    Passport = "passport",
    Pcf = "pcf",
    PosteItaliane = "poste_italiane",
    Posti = "posti",
    Purolator = "purolator",
    RoyalMail = "royal_mail",
    RrDonnelley = "rr_donnelley",
    RussianPost = "russian_post",
    Sendle = "sendle",
    Skypostal = "skypostal",
    Stuart = "stuart",
    Swyft = "swyft",
    Uds = "uds",
    Ups = "ups",
    Usps = "usps",
    Veho = "veho",
    XDelivery = "x_delivery",
    Yodel = "yodel",
}

/** @internal */
export namespace CarriersEnum$ {
    export const inboundSchema = z.nativeEnum(CarriersEnum);
    export const outboundSchema = inboundSchema;
}
