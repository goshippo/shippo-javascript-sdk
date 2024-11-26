import {shippoSdk} from "./helpers";
import {expect} from "chai";

describe('TestShipments', function () {
    it('testListAllShipments', async() => {
        const response = await shippoSdk.shipments.list({});

        expect(response).to.not.be.null;
        expect(response).to.be.an('object');

        expect(response).to.have.property('results').that.is.an('array');
        assertShipmentResults(response.results);
    });

    it('testListAllShipmentsPagination', async() => {
        const response = await shippoSdk.shipments.list({ page: 1, results: 2 });

        // Basic response assertions
        expect(response).to.not.be.null;
        expect(response).to.have.property('results').that.is.an('array');
        assertShipmentResults(response.results);

        if (response.next) {
            const pageTokenMatch = response.next.match(/page_token=([^&]+)/);
            if (pageTokenMatch) {
                const pageToken = pageTokenMatch[1];
                const secondResponse = await shippoSdk.shipments.list({ page_token: pageToken, page: 2, results: 2 });

                expect(secondResponse).to.not.be.null;
                expect(secondResponse).to.have.property('results').that.is.an('array');
                assertShipmentResults(secondResponse.results);
            }
        }
    });
});

function assertShipmentResults(results) {
    if (results.length > 0) {
        results.forEach(result => {
            expect(result).to.have.property('objectId').that.is.a('string').and.is.not.empty;
            expect(result).to.have.property('addressFrom').that.is.an('object');
            expect(result).to.have.property('addressTo').that.is.an('object');
        });
    }
}
