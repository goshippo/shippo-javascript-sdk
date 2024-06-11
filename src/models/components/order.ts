/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { Address, Address$ } from "./address";
import { LineItem, LineItem$ } from "./lineitem";
import { OrderStatusEnum, OrderStatusEnum$ } from "./orderstatusenum";
import { WeightUnitEnum, WeightUnitEnum$ } from "./weightunitenum";
import * as z from "zod";

/**
 * Platform the order was created on and, if applicable, imported from.
 *
 * @remarks
 * Orders created via the Shippo API or dashboard will have the value "Shippo".
 */
export enum ShopApp {
    Amazon = "Amazon",
    Bigcommerce = "Bigcommerce",
    CSVImport = "CSV_Import",
    EBay = "eBay",
    EPages = "ePages",
    Etsy = "Etsy",
    Godaddy = "Godaddy",
    Magento = "Magento",
    Shippo = "Shippo",
    Shopify = "Shopify",
    Spreecommerce = "Spreecommerce",
    StripeRelay = "StripeRelay",
    Weebly = "Weebly",
    WooCommerce = "WooCommerce",
}

export type Order = {
    /**
     * **Required if total_price is provided**<br>
     *
     * @remarks
     * Currency of the <code>total_price</code> and <code>total_tax</code> amounts.
     */
    currency?: string | undefined;
    /**
     * Custom buyer- or seller-provided notes about the order.
     */
    notes?: string | undefined;
    /**
     * An alphanumeric identifier for the order used by the seller/buyer. This identifier doesn't need to be unique.
     */
    orderNumber?: string | undefined;
    /**
     * Current state of the order. See the <a href="https://docs.goshippo.com/docs/orders/orders/">orders tutorial</a>
     *
     * @remarks
     * for the logic of how the status is handled.
     */
    orderStatus?: OrderStatusEnum | undefined;
    /**
     * Date and time when the order was placed. This datetime can be different from the datetime of the order object creation on Shippo.
     */
    placedAt: string;
    /**
     * Amount paid by the buyer for shipping. This amount can be different from the price the seller will actually pay for shipping.
     */
    shippingCost?: string | undefined;
    /**
     * **Required if shipping_cost is provided**<br>
     *
     * @remarks
     * Currency of the <code>shipping_cost</code> amount.
     */
    shippingCostCurrency?: string | undefined;
    /**
     * Shipping method (carrier + service or other free text description) chosen by the buyer.
     *
     * @remarks
     * This value can be different from the shipping method the seller will actually choose.
     */
    shippingMethod?: string | undefined;
    subtotalPrice?: string | undefined;
    /**
     * Total amount paid by the buyer for this order.
     */
    totalPrice?: string | undefined;
    /**
     * Total tax amount paid by the buyer for this order.
     */
    totalTax?: string | undefined;
    /**
     * Total weight of the order.
     */
    weight?: string | undefined;
    /**
     * The unit used for weight.
     */
    weightUnit?: WeightUnitEnum | undefined;
    /**
     * <a href="#tag/Addresses">Address</a> object of the sender / seller. Will be returned expanded by default.
     */
    fromAddress?: Address | undefined;
    /**
     * <a href="#tag/Addresses">Address</a> object of the recipient / buyer. Will be returned expanded by default.
     */
    toAddress: Address;
    /**
     * Array of <a href="#section/Line-Item">line item</a> objects representing the items in this order.
     *
     * @remarks
     * All objects will be returned expanded by default.
     */
    lineItems?: Array<LineItem> | undefined;
    /**
     * Unique identifier of the order object.
     */
    objectId?: string | undefined;
    /**
     * Username of the user who created the object.
     */
    objectOwner?: string | undefined;
    /**
     * Platform the order was created on and, if applicable, imported from.
     *
     * @remarks
     * Orders created via the Shippo API or dashboard will have the value "Shippo".
     */
    shopApp?: ShopApp | undefined;
    /**
     * Array of <a href="#tag/Transactions">transaction</a> objects representing all shipping labels purchased for this order.
     *
     * @remarks
     * All objects are returned expanded with a limited number of fields by default.
     */
    transactions?: Array<string> | undefined;
};

/** @internal */
export namespace ShopApp$ {
    export const inboundSchema = z.nativeEnum(ShopApp);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Order$ {
    export const inboundSchema: z.ZodType<Order, z.ZodTypeDef, unknown> = z
        .object({
            currency: z.string().optional(),
            notes: z.string().optional(),
            order_number: z.string().optional(),
            order_status: OrderStatusEnum$.inboundSchema.optional(),
            placed_at: z.string(),
            shipping_cost: z.string().optional(),
            shipping_cost_currency: z.string().optional(),
            shipping_method: z.string().optional(),
            subtotal_price: z.string().optional(),
            total_price: z.string().optional(),
            total_tax: z.string().optional(),
            weight: z.string().optional(),
            weight_unit: WeightUnitEnum$.inboundSchema.optional(),
            from_address: Address$.inboundSchema.optional(),
            to_address: Address$.inboundSchema,
            line_items: z.array(LineItem$.inboundSchema).optional(),
            object_id: z.string().optional(),
            object_owner: z.string().optional(),
            shop_app: ShopApp$.inboundSchema.optional(),
            transactions: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                order_number: "orderNumber",
                order_status: "orderStatus",
                placed_at: "placedAt",
                shipping_cost: "shippingCost",
                shipping_cost_currency: "shippingCostCurrency",
                shipping_method: "shippingMethod",
                subtotal_price: "subtotalPrice",
                total_price: "totalPrice",
                total_tax: "totalTax",
                weight_unit: "weightUnit",
                from_address: "fromAddress",
                to_address: "toAddress",
                line_items: "lineItems",
                object_id: "objectId",
                object_owner: "objectOwner",
                shop_app: "shopApp",
            });
        });

    export type Outbound = {
        currency?: string | undefined;
        notes?: string | undefined;
        order_number?: string | undefined;
        order_status?: string | undefined;
        placed_at: string;
        shipping_cost?: string | undefined;
        shipping_cost_currency?: string | undefined;
        shipping_method?: string | undefined;
        subtotal_price?: string | undefined;
        total_price?: string | undefined;
        total_tax?: string | undefined;
        weight?: string | undefined;
        weight_unit?: string | undefined;
        from_address?: Address$.Outbound | undefined;
        to_address: Address$.Outbound;
        line_items?: Array<LineItem$.Outbound> | undefined;
        object_id?: string | undefined;
        object_owner?: string | undefined;
        shop_app?: string | undefined;
        transactions?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Order> = z
        .object({
            currency: z.string().optional(),
            notes: z.string().optional(),
            orderNumber: z.string().optional(),
            orderStatus: OrderStatusEnum$.outboundSchema.optional(),
            placedAt: z.string(),
            shippingCost: z.string().optional(),
            shippingCostCurrency: z.string().optional(),
            shippingMethod: z.string().optional(),
            subtotalPrice: z.string().optional(),
            totalPrice: z.string().optional(),
            totalTax: z.string().optional(),
            weight: z.string().optional(),
            weightUnit: WeightUnitEnum$.outboundSchema.optional(),
            fromAddress: Address$.outboundSchema.optional(),
            toAddress: Address$.outboundSchema,
            lineItems: z.array(LineItem$.outboundSchema).optional(),
            objectId: z.string().optional(),
            objectOwner: z.string().optional(),
            shopApp: ShopApp$.outboundSchema.optional(),
            transactions: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                orderNumber: "order_number",
                orderStatus: "order_status",
                placedAt: "placed_at",
                shippingCost: "shipping_cost",
                shippingCostCurrency: "shipping_cost_currency",
                shippingMethod: "shipping_method",
                subtotalPrice: "subtotal_price",
                totalPrice: "total_price",
                totalTax: "total_tax",
                weightUnit: "weight_unit",
                fromAddress: "from_address",
                toAddress: "to_address",
                lineItems: "line_items",
                objectId: "object_id",
                objectOwner: "object_owner",
                shopApp: "shop_app",
            });
        });
}
