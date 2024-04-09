import { expect } from 'chai';
import { describe, it } from 'mocha';
import shippo, { AddressCreateRequest, InstantTransactionRequestBody, ParcelCreateRequest, ShipmentCreateRequest } from 'shippo'; // Adjust import based on actual shippo TypeScript definitions
import { getCarrierAccount, Carriers } from './path/to/your/utility/functions'; // Adjust import based on your project structure

describe('TestInstalabel', function() {
    this.timeout(10000); // Adjust timeout based on expected request time

    it('test_instalabel', async () => {
        const api = new shippo.Shippo('your_shippo_api_key'); // Initialize with your Shippo API key
        const carrierAccount = await getCarrierAccount(api, Carriers.USPS);

        const transaction = await api.transactions.create({
            request_body: new InstantTransactionRequestBody({
                carrier_account: carrierAccount.object_id,
                servicelevel_token: "usps_ground_advantage",
                shipment: new ShipmentCreateRequest({
                    address_from: new AddressCreateRequest({
                        name: "Rachael",
                        street1: "1092 Indian Summer Ct",
                        city: "San Jose",
                        state: "CA",
                        zip: "95122",
                        country: "US",
                        phone: "4159876543",
                        email: "rachael@alltheyarnz.com"
                    }),
                    address_to: new AddressCreateRequest({
                        name: "Mr Hippo",
                        street1: "965 Mission St #572",
                        city: "San Francisco",
                        state: "CA",
                        zip: "94103",
                        country: "US",
                        phone: "4151234567",
                        email: "mrhippo@shippo.com"
                    }),
                    parcels: [
                        new ParcelCreateRequest({
                            length: "5",
                            width: "5",
                            height: "5",
                            distance_unit: "CM", // Adjust if enum
                            weight: "2",
                            mass_unit: "LB" // Adjust if enum
                        })
                    ]
                })
            })
        });

        expect(transaction).to.not.be.null;
    });
});
