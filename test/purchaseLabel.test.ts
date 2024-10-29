import {describe, it} from 'mocha';
import {expect} from "chai";
import {CarriersEnum, DistanceUnitEnum, WeightUnitEnum} from '../src/models/components';
import {getCarrierAccounts, shippoSdk} from "./helpers";


// https://docs.goshippo.com/docs/stories/single_rating_guide/
describe('TestPurchaseLabel', function() {

    it('testPurchaseLabel', async () => {
        const carrierAccounts = await getCarrierAccounts(CarriersEnum.Usps);
        const carrierAccountIds = carrierAccounts
            .map((carrierAccount) => carrierAccount.objectId)
            .filter((id) => id !== undefined);

        const shipment = await shippoSdk.shipments.create({
            carrierAccounts: carrierAccountIds,
            addressFrom: {
                name: "Rachael",
                street1: "1092 Indian Summer Ct",
                city: "San Jose",
                state: "CA",
                zip: "95122",
                country: "US",
                phone: "4159876543",
                email: "rachael@alltheyarnz.com"
            },
            addressTo: {
                name: "Mr Hippo",
                street1: "965 Mission St #572",
                city: "San Francisco",
                state: "CA",
                zip: "94103",
                country: "US",
                phone: "4151234567",
                email: "mrhippo@shippo.com"
            },
            parcels: [
                {
                    length: "5",
                    width: "5",
                    height: "5",
                    distanceUnit: DistanceUnitEnum.Cm,
                    weight: "2",
                    massUnit: WeightUnitEnum.Lb
                }
            ]
        });

        expect(shipment).to.not.be.null;

        const transaction = await shippoSdk.transactions.create({
            rate: shipment.rates[0].objectId
        });
        expect(transaction).to.not.be.null;
        expect(transaction.rate).to.be.a('string')
    });

    it('testPurchaseLabelUsingReferenceIds', async () => {
        const addressFromPromise = shippoSdk.addresses.create({
            name: "Rachael",
            street1: "1092 Indian Summer Ct",
            city: "San Jose",
            state: "CA",
            zip: "95122",
            country: "US",
            phone: "4159876543",
            email: "rachael@alltheyarnz.com"
        })

        const addressToPromise = shippoSdk.addresses.create({
            name: "Mr Hippo",
            street1: "965 Mission St #572",
            city: "San Francisco",
            state: "CA",
            zip: "94103",
            country: "US",
            phone: "4151234567",
            email: "mrhippo@shippo.com"
        })

        const parcelPromise = shippoSdk.parcels.create({
            length: "5",
            width: "5",
            height: "5",
            distanceUnit: DistanceUnitEnum.Cm,
            weight: "2",
            massUnit: WeightUnitEnum.Lb,
            metadata: "Wool Box1",
        })

        const [addressFrom, addressTo, parcel] = await Promise.all([addressFromPromise, addressToPromise, parcelPromise])
        const shipment = await shippoSdk.shipments.create({
            addressFrom: addressFrom.objectId,
            addressReturn: addressFrom.objectId,
            addressTo: addressTo.objectId,
            parcels: [parcel.objectId]
        })

        expect(shipment).to.not.be.null;
        expect(shipment.addressTo.objectId).to.equal(addressTo.objectId)
        expect(shipment.addressFrom.objectId).to.equal(addressFrom.objectId)
        expect(shipment.addressReturn?.objectId).to.equal(addressFrom.objectId)

        const transaction = await shippoSdk.transactions.create({
            rate: shipment.rates[0].objectId
        })
        expect(transaction).to.not.be.null;
        expect(transaction.rate).to.be.a('string')
    })

});
