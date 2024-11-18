import {expect} from 'chai';
import {describe, it} from 'mocha';
import {CarriersEnum, DistanceUnitEnum, WeightUnitEnum} from '../src/models/components';
import {shippoSdk, getCarrierAccount} from "./helpers";

describe('TestInstalabel', function() {
    it('testInstalabel', async () => {
        const carrierAccount = await getCarrierAccount(CarriersEnum.Usps);

        const addressFrom = await shippoSdk.addresses.create({
            name: "Rachael",
            street1: "1092 Indian Summer Ct",
            city: "San Jose",
            state: "CA",
            zip: "95122",
            country: "US",
            phone: "4159876543",
            email: "rachael@alltheyarnz.com"
        })

        const addressTo = await shippoSdk.addresses.create({
            name: "Mr Hippo",
            street1: "965 Mission St #572",
            city: "San Francisco",
            state: "CA",
            zip: "94103",
            country: "US",
            phone: "4151234567",
            email: "mrhippo@shippo.com"
        })

        const parcel = await shippoSdk.parcels.create(
            {
                length: "5",
                width: "5",
                height: "5",
                distanceUnit: DistanceUnitEnum.Cm,
                weight: "2",
                massUnit: WeightUnitEnum.Lb
            }
        )

        const shipment = await shippoSdk.shipments.create(
            {
                addressFrom: addressFrom,
                addressTo: addressTo,
                parcels: [
                    parcel
                ]
            });

        const transaction = await shippoSdk.transactions.create({
            carrierAccount: carrierAccount.objectId,
            servicelevelToken: "usps_ground_advantage",
            shipment: shipment
        });

        expect(transaction).to.not.be.null;
        expect(transaction.rate.objectId).to.not.be.null;
    });
});
