# ParcelPaginatedList

## Example Usage

```typescript
import { ParcelPaginatedList } from "shippo/models/components";

let value: ParcelPaginatedList = {
  next: "baseurl?page=3&results=10",
  previous: "baseurl?page=1&results=10",
  results: [
    {
      massUnit: "lb",
      weight: "1",
      distanceUnit: "in",
      height: "1",
      length: "1",
      width: "1",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `next`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | baseurl?page=3&results=10                                |
| `previous`                                               | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      | baseurl?page=1&results=10                                |
| `results`                                                | [components.Parcel](../../models/components/parcel.md)[] | :heavy_minus_sign:                                       | N/A                                                      |                                                          |