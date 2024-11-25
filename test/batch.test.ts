import {describe, it} from 'mocha';
import {expect} from "chai";
import {getDefaultCarrierAccountObjectId, shippoSdk} from "./helpers";

let BATCH_OBJECT_ID = "";

describe('Batches Tests', () => {

    it('shouldCreateBatch', async () => {

        const carrierAccountObjectId = await getDefaultCarrierAccountObjectId();

        const addressFrom = {
            name: "Rachael",
            street1: "1092 Indian Summer Ct",
            street3: "",
            streetNo: "",
            city: "San Jose",
            state: "CA",
            zip: "94117",
            country: "US",
            phone: "+1 415 987 6543",
            email: "rachael@alltheyarnz.com",
        };

        const addressTo = {
            name: "Mr Hippo",
            street1: "965 Mission St #572",
            street3: "",
            streetNo: "",
            city: "San Francisco",
            state: "CA",
            zip: "94103",
            country: "US",
            phone: "+1 415 123 4567",
            email: "mrhippo@shippo.com",
        };

        const response = await shippoSdk.batches.create({
            defaultCarrierAccount: carrierAccountObjectId,
            defaultServicelevelToken: "usps_priority",
            batchShipments: [{
                carrierAccount: carrierAccountObjectId,
                shipment: {
                    addressFrom: addressFrom,
                    addressTo: addressTo,
                    parcels: [
                        {
                            length: "1",
                            width: "1",
                            height: "1",
                            distanceUnit: "in",
                            weight: "1",
                            massUnit: "lb",
                        },
                    ],
                }
            }]
        });

        expect(response).not.to.be.null;

        expect(response).to.have.property('objectId');
        BATCH_OBJECT_ID = response.objectId;
    });

    it('shouldListAllBatches', async () => {

        const response = await shippoSdk.batches.get(
            BATCH_OBJECT_ID, 1,5
        );

        expect(response).to.not.be.null
        expect(response).to.have.property('objectId')
        expect(response.objectId).to.be.equal(BATCH_OBJECT_ID);
    });
});
