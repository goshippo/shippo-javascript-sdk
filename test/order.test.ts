import {shippoSdk} from "./helpers";
import {OrderStatusEnum} from "../src";
import {expect} from "chai";


describe('TestOrders', function () {
    it('testListOrders', async () => {
        const orders = await shippoSdk.orders.list({
            page: 1,
            results: 25,
            orderStatus: [OrderStatusEnum.Paid]
        })

        expect(orders).to.not.be.null;
        expect(orders).to.include.keys(['next', 'results']);
        expect(orders.results).to.be.an('array').that.is.not.empty;

        expect(orders.results).to.satisfy(results =>
            results.every(order =>
                order.orderStatus = [OrderStatusEnum.Paid] &&
                order &&
                typeof order.objectId === 'string' &&
                typeof order.toAddress === 'object' &&
                typeof order.fromAddress === 'object' &&
                Array.isArray(order.transactions)
            )
        );

    });
})