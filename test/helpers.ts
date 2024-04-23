import {CarrierAccountWithExtraInfo, CarriersEnum} from "../models/components";
import {Shippo} from "../sdk";

export const shippoSdk = new Shippo({
    apiKeyHeader: process.env.SHIPPO_TOKEN
});

export async function getCarrierAccounts(carrier: CarriersEnum) : Promise<Array<CarrierAccountWithExtraInfo>> {
    const carrierAccountsResponse = await shippoSdk.carrierAccounts.list({carrier: carrier});
    const carrierAccounts = carrierAccountsResponse?.results;
    if (!carrierAccounts) {
        throw new Error('No carrier accounts found');
    } else {
        return carrierAccounts;
    }
}


export async function getCarrierAccount(carrier: CarriersEnum) : Promise<CarrierAccountWithExtraInfo> {
    const carrierAccounts = await getCarrierAccounts(carrier)
    return carrierAccounts[0];
}
