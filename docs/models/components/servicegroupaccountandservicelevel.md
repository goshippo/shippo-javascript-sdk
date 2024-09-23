# ServiceGroupAccountAndServiceLevel

## Example Usage

```typescript
import { ServiceGroupAccountAndServiceLevel } from "shippo/models/components";

let value: ServiceGroupAccountAndServiceLevel = {
  accountObjectId: "80feb1633d4a43c898f0058506cfd82d",
  serviceLevelToken: "ups_next_day_air_saver",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `accountObjectId`                                                                                                      | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | ID of a Carrier Account object                                                                                         | 80feb1633d4a43c898f0058506cfd82d                                                                                       |
| `serviceLevelToken`                                                                                                    | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Service level token, e.g. `usps_priority` or `fedex_ground`.<br><br/>See <a href="#tag/Service-Levels">Service Levels</a>. | ups_next_day_air_saver                                                                                                 |