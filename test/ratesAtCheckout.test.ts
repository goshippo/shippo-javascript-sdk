import {describe, it} from 'mocha';
import {Carriers, ServiceGroupAccountAndServiceLevel, ServiceGroupType, ServiceLevelUPS} from '../models/components';
import {DistanceUnit, WeightUnit} from "../src/models/components";
import {expect} from "chai";
import {getCarrierAccount, shippoSdk} from "./helpers";

async function deleteAllServiceGroups() {
    const serviceGroups = await shippoSdk.serviceGroups.list()
    const deleteServiceGroups = serviceGroups.map(serviceGroup => {
        return shippoSdk.serviceGroups.delete(serviceGroup.objectId)
    })
    await Promise.all(deleteServiceGroups)
}


describe('TestRatesAtCheckout', function() {

    this.beforeEach(() => {
        deleteAllServiceGroups()
    });

    it('testRatesAtCheckout', async () => {
        const carrierAccount =  await getCarrierAccount(Carriers.Usps)
        const upsAccountObjectId =  carrierAccount.objectId

        const availableServiceLevels = [ServiceLevelUPS.UpsGround, ServiceLevelUPS.UpsNextDayAirSaver]
        const serviceLevels: ServiceGroupAccountAndServiceLevel[] =
            availableServiceLevels.map(serviceLevelToken => ({
                accountObjectId: upsAccountObjectId,
                serviceLevelToken: serviceLevelToken
            }))

        const serviceGroup = await shippoSdk.serviceGroups.create(undefined, {
            name: "UPS shipping",
            description: "UPS shipping options",
            flatRate: "5",
            flatRateCurrency: "USD",
            type: ServiceGroupType.LiveRate,
            serviceLevels: serviceLevels
        })
        expect(serviceGroup).to.not.be.null;

        const liveRates = await shippoSdk.ratesAtCheckout.create(undefined,
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
                    weightUnit: WeightUnit.Lb,
                    title: "Hippo Snax",
                    manufactureCountry: "US",
                    sku: "HM-123"
                }],
                parcel: {
                    length: "10",
                    width: "15",
                    height: "10",
                    distanceUnit: DistanceUnit.In,
                    weight: "1",
                    massUnit: WeightUnit.Lb
                }
            })

        expect(liveRates.results.length).to.be.greaterThan(0);
        liveRates.results.forEach(liveRate => {
            expect(liveRate.title).to.equal(serviceGroup.name);
        });
    })

})

// @pytest.fixture(scope: 'class', autouse: True)
//     def setup(self, api: shippo.Shippo):
//     self._delete_all_service_groups(api)
//
//     def _delete_all_service_groups(self, api: shippo.Shippo):
//     service_groups :  api.service_groups.list()
//     for sg in service_groups:
//     api.service_groups.delete(sg.object_id)
//
//     def test_rates_at_checkout(self, api: shippo.Shippo):
//     carrier_account :  get_carrier_account(api, Carriers.USPS)
//     ups_account_id :  carrier_account.object_id
//
//     available_service_levels :  [ServiceLevelUPS.UPS_GROUND, ServiceLevelUPS.UPS_NEXT_DAY_AIR_SAVER]
//     service_levels :  [
//         ServiceGroupAccountAndServiceLevel(
//             account_object_id: ups_account_id,
//             service_level_token: available_service_level.value
//         )
//     for available_service_level in available_service_levels
//         ]
//
//     service_group :  api.service_groups.create(
//         service_group_create_request: ServiceGroupCreateRequest(
//             name: "UPS shipping",
//             description: "UPS shipping options",
//             flat_rate: "5",
//             flat_rate_currency: "USD",
//             type: ServiceGroupType.LIVE_RATE,
//             service_levels: service_levels
//         ))
//     assert service_group is not None
//

