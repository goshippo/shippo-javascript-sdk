import {describe, it, beforeEach} from 'mocha';
import {
    CarriersEnum,
    ServiceGroupAccountAndServiceLevel,
    ServiceGroupTypeEnum,
    ServiceLevelUPSEnum,
    DistanceUnitEnum,
    WeightUnitEnum,
} from '../src/models/components';
import {expect} from "chai";
import {getCarrierAccount, shippoSdk} from "./helpers";

async function deleteAllServiceGroups() {
    const serviceGroups = await shippoSdk.serviceGroups.list();
    const deleteServiceGroups = serviceGroups.map(serviceGroup => {
        shippoSdk.serviceGroups.delete(serviceGroup.objectId);
    });
    await Promise.all(deleteServiceGroups);
}

describe('TestRatesAtCheckout', function() {

    beforeEach(() => {
        deleteAllServiceGroups();
    });

    it('test ratesAtCheckout', async () => {
        const carrierAccount =  await getCarrierAccount(CarriersEnum.Ups);
        const upsAccountObjectId =  carrierAccount.objectId;

        const availableServiceLevels = [ServiceLevelUPSEnum.UpsGround, ServiceLevelUPSEnum.UpsNextDayAirSaver];
        const serviceLevels: ServiceGroupAccountAndServiceLevel[] =
            availableServiceLevels.map(serviceLevelToken => ({
                accountObjectId: upsAccountObjectId,
                serviceLevelToken: serviceLevelToken
            }));

        const serviceGroup = await shippoSdk.serviceGroups.create({
            name: "UPS shipping",
            description: "UPS shipping options",
            flatRate: "5",
            flatRateCurrency: "USD",
            type: ServiceGroupTypeEnum.LiveRate,
            serviceLevels: serviceLevels
        });
        expect(serviceGroup).to.not.be.null;

        const liveRates = await shippoSdk.ratesAtCheckout.create(
            {
                addressFrom: {
                    name: "S. Hippo",
                    company: "Shippo",
                    street1: "731 Market St #200",
                    city: "San Francisco",
                    state: "CA",
                    zip: "94103",
                    country: "US"
                },
                addressTo: {
                    name: "Bob Bloat",
                    company: "SF Zoo",
                    street1: "Sloat Blvd. & Upper Great Hwy.",
                    city: "San Francisco",
                    state: "CA",
                    zip: "94132",
                    country: "US"
                },
                lineItems: [{
                    quantity: 1,
                    totalPrice: "12.00",
                    currency: "USD",
                    weight: "1.0",
                    weightUnit: WeightUnitEnum.Lb,
                    title: "Hippo Snax",
                    manufactureCountry: "US",
                    sku: "HM-123"
                }],
                parcel: {
                    length: "10",
                    width: "15",
                    height: "10",
                    distanceUnit: DistanceUnitEnum.In,
                    weight: "1",
                    massUnit: WeightUnitEnum.Lb
                }
            });

        expect(liveRates.results.length).to.be.greaterThan(0);
        liveRates.results.forEach(liveRate => {
            expect(liveRate.title).to.equal(serviceGroup.name);
        });
    });

});
