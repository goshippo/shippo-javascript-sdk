# CreatedBy

An object with details about the user who created the Transaction (purchased the label).
A value will be returned only for Transactions that can be associated with a specific user, e.g. when a logged-in
user purchases a label via the Shippo Web application; but not for Transactions purchased e.g. via the API using a ShippoToken,
which is associated with the account but not any specific user.


## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `firstName`          | *string*             | :heavy_minus_sign:   | N/A                  | Shwan                |
| `lastName`           | *string*             | :heavy_minus_sign:   | N/A                  | Ippotle              |
| `username`           | *string*             | :heavy_minus_sign:   | N/A                  | shippotle@shippo.com |