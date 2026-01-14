# ServiceLevelUSPSEnum

|Token | Service name|
|:---|:---|
| usps_priority | Priority Mail|
| usps_priority_express | Priority Mail Express|
| usps_media_mail | Media Mail, only for existing Shippo customers with grandfathered Media Mail option.|
| usps_priority_mail_international | Priority Mail International|
| usps_priority_mail_express_international | Priority Mail Express International|
| usps_first_class_package_international_service | First Class Package International|
| usps_ground_advantage | Ground Advantage |


## Example Usage

```typescript
import { ServiceLevelUSPSEnum } from "shippo/models/components";

let value: ServiceLevelUSPSEnum = "usps_priority_mail_international";
```

## Values

```typescript
"usps_priority" | "usps_priority_express" | "usps_media_mail" | "usps_priority_mail_international" | "usps_priority_mail_express_international" | "usps_first_class_package_international_service" | "usps_ground_advantage"
```