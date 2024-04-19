# AddShipmentsToBatchRequest


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `batchId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Object ID of the batch                                                         |
| `requestBody`                                                                  | [components.BatchShipmentBase](../../models/components/batchshipmentbase.md)[] | :heavy_minus_sign:                                                             | Array of shipments to add to the batch                                         |