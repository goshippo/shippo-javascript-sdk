import {describe, it} from 'mocha';
import {expect} from "chai";
import {
    CustomsDeclarationContentsTypeEnum,
    CustomsDeclarationIncotermEnum,
    CustomsDeclarationNonDeliveryOptionEnum,
    DistanceUnitEnum,
    WeightUnitEnum
} from '../src/models/components';
import {shippoSdk} from "./helpers";


// https://docs.goshippo.com/docs/stories/intl_rating_guide/
describe('TestPurchaseInternationalLabel', function () {

    it('should purchase international label', async () => {
        const addressFromPromise = shippoSdk.addresses.create({
            name: "Sarah",
            company: "We Sell Guitars",
            street1: "215 Clayton St.",
            city: "San Francisco",
            state: "CA",
            zip: "94117",
            country: "US",
            phone: "+1 555 341 9393",
            email: "sarah@wesellguitars.net",
            isResidential: false,
            metadata: "We Sell Guitars HQ"
        });

        const customsDeclarationPromise = shippoSdk.customsDeclarations.create({
            contentsType: CustomsDeclarationContentsTypeEnum.Merchandise,
            nonDeliveryOption: CustomsDeclarationNonDeliveryOptionEnum.Return,
            certify: true,
            certifySigner: "Tom Marks",
            incoterm: CustomsDeclarationIncotermEnum.Ddp,
            items: [
                {
                    description: "Guitar Pedal",
                    quantity: 1,
                    netWeight: "5",
                    massUnit: WeightUnitEnum.Lb,
                    valueAmount: "200",
                    valueCurrency: "USD",
                    originCountry: "US"
                }
            ]
        });

        const [addressFrom, customsDeclaration] = await Promise.all([addressFromPromise, customsDeclarationPromise]);

        const shipment = await shippoSdk.shipments.create({
            addressFrom: addressFrom.objectId,
            addressTo: {
                name: "Tom Marks",
                street1: "159 Broadhurst Gardens",
                city: "London",
                zip: "NW6 3AU",
                country: "GB",
                phone: "4159876543",
                email: "tommarks@gmmail.com"
            },
            parcels: [{
                weight: "5",
                length: "10",
                width: "5",
                height: "4",
                distanceUnit: DistanceUnitEnum.In,
                massUnit: WeightUnitEnum.Lb
            }],
            customsDeclaration: customsDeclaration.objectId,
            extra: {
                insurance: {
                    amount: "200",
                    currency: "USD",
                    content: "guitar pedal"
                }
            }
        });
        expect(shipment).to.not.be.null;
    })

});
