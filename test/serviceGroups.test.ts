import {expect} from 'chai';
import {describe, it} from 'mocha';
import {shippoSdk} from "./helpers";

describe('TestListServiceGroups', function() {
    it('testListServiceGroups', async() => {
        const result = await shippoSdk.serviceGroups.list();

        expect(result).to.not.be.null;
        expect(result).to.be.an('array');
        expect(result).to.have.length.greaterThan(0);
        const firstServiceGroup = result[0];
        expect(firstServiceGroup).to.be.an('object');
        expect(firstServiceGroup).to.have.property('objectId').that.is.a('string');
        expect(firstServiceGroup).to.have.property('name').that.is.a('string');
        expect(firstServiceGroup).to.have.property('description').that.is.a('string');
        expect(firstServiceGroup).to.have.property('serviceLevels').that.is.an('array');
        const firstServiceLevel = firstServiceGroup.serviceLevels[0];
        expect(firstServiceLevel).to.have.property('account_object_id').that.is.a('string');
        expect(firstServiceLevel).to.have.property('service_level_token').that.is.an('string');
        console.log(result);
        console.log(firstServiceLevel);
    })
})