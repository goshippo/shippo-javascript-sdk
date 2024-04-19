# ListShipmentRatesByCurrencyCodeRequest


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `shipmentId`                                       | *string*                                           | :heavy_check_mark:                                 | Object ID of the shipment to update                |
| `currencyCode`                                     | *string*                                           | :heavy_check_mark:                                 | ISO currency code for the rates                    |
| `page`                                             | *number*                                           | :heavy_minus_sign:                                 | The page number you want to select                 |
| `results`                                          | *number*                                           | :heavy_minus_sign:                                 | The number of results to return per page (max 100) |