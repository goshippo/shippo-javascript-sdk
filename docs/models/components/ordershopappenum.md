# OrderShopAppEnum

Platform the order was created on and, if applicable, imported from. 
Orders created via the Shippo API or dashboard will have the value "Shippo".

## Example Usage

```typescript
import { OrderShopAppEnum } from "shippo/models/components";

let value: OrderShopAppEnum = "Shippo";
```

## Values

```typescript
"Amazon" | "Bigcommerce" | "CSV_Import" | "eBay" | "ePages" | "Etsy" | "Godaddy" | "Magento" | "Shippo" | "Shopify" | "Spreecommerce" | "StripeRelay" | "Walmart" | "Weebly" | "WooCommerce"
```