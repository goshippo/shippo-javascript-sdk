import {shippoSdk} from "./helpers";
import {expect} from "chai";


describe('TestOrders', function () {
    it('testListOrders', async () => {
        const orders = await shippoSdk.orders.list({
            page: 1,
            results: 25
        })

        expect(orders).to.not.be.null;
        expect(orders.results).to.be.an('array');

        if (orders.results.length > 0) {
            expect(orders.results).to.satisfy(results =>
                results.every(order =>
                    order &&
                    typeof order.objectId === 'string' &&
                    order.toAddress &&
                    typeof order.toAddress.country === 'string' &&
                    typeof order.toAddress.city === 'string' &&
                    typeof order.toAddress.street1 === 'string' &&
                    typeof order.fromAddress === 'object' &&
                    typeof order.fromAddress.country === 'string' &&
                    typeof order.fromAddress.city === 'string' &&
                    typeof order.fromAddress.street1 === 'string' &&
                    Array.isArray(order.transactions)
                )
            );
        }

    });
})