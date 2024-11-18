import {expect} from 'chai';
import {describe, it} from 'mocha';
import {shippoSdk} from "./helpers";

describe('TestAddresses', function() {
    it('testCreateAddress', async () => {
        const address = await shippoSdk.addresses.create({
            name: 'Rachael',
            street1: '1092 Indian Summer Ct',
            city: 'San Jose',
            state: 'CA',
            zip: '95122',
            country: 'US',
            phone: '4159876543',
            email: 'rachael@alltheyarnz.com'
        })

        expect(address).to.not.be.null;
        expect(address).to.be.an('object');
        expect(address).to.have.property('objectId').that.is.a('string');
        expect(address).to.have.property('name').that.is.equal('Rachael')
        expect(address).to.have.property('country').that.is.equal('US');
    })
})