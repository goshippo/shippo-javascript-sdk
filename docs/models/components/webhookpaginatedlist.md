# WebhookPaginatedList


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `next`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | baseurl?page=3&results=10                                  |
| `previous`                                                 | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | baseurl?page=1&results=10                                  |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `results`                                                  | [components.Webhook](../../models/components/webhook.md)[] | :heavy_minus_sign:                                         | N/A                                                        |                                                            |