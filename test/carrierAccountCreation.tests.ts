import {expect} from 'chai';
import {describe, it} from 'mocha';
import { Fetcher } from '../src/lib/http';
import { MockShippoSDK } from "./helpers";
import { ServiceLevel } from '../src/models/components';

describe('TestCarrierAccountCreation', () => {
    it('testCreateCarrierAccount:UPS', async () => {
        const createCarrierAccountResponse = {
          account_id: '00000000-0000-0000-0000-000000000000',
          active: true,
          carrier: 'ups',
          parameters: {},
          carrier_name: 'UPS',
          is_shippo_account: false,
          object_owner: 'mrhippo@hippo.com',
          service_levels: <ServiceLevel[]>[
            {
              name: 'Ground',
              token: 'ups_ground'
            }
          ]
        }

        var requestBody: RequestInfo | URL | undefined;
        const fetcher: Fetcher = async (input, init) => {
          requestBody = input;
          return new Response(JSON.stringify(createCarrierAccountResponse), {status: 201, headers: {'Content-type': 'application/json'}});
        };
        
        const shippoSdk = new MockShippoSDK(fetcher);
        const carrierAccount = await shippoSdk.carrierAccounts.register({
            carrier: 'ups',
            parameters: {
              billingAddressCity: "San Francisco",
              billingAddressCountryIso2: "US",
              billingAddressState: "CA",
              billingAddressStreet1: "731 Market St",
              billingAddressStreet2: "STE 200",
              billingAddressZip: "94103",
              company: "Shippo",
              email: "hippo@shippo.com",
              fullName: "Shippo Meister",
              phone: "1112223333",
              pickupAddressCity: "San Francisco",
              pickupAddressCountryIso2: "US",
              pickupAddressSameAsBillingAddress: false,
              pickupAddressState: "CA",
              pickupAddressStreet1: "731 Market St",
              pickupAddressStreet2: "STE 200",
              pickupAddressZip: "94103",
              upsAgreements: true
            }
        })

        expect(requestBody).to.not.be.null;
        // Obtain the submitted request body as an object
        const receivedRequest = await requestBody.json();
        expect(receivedRequest).to.not.be.null;

        // Validate the expected body
        expect(receivedRequest['carrier']).to.be.equal('ups');
        expect(receivedRequest['parameters']).to.be.an('object');
        expect(receivedRequest['parameters']).to.have.property('billing_address_city');
        expect(receivedRequest['parameters']['billing_address_city']).to.be.equal('San Francisco');
        expect(receivedRequest['parameters']).to.have.property('billing_address_country_iso2');
        expect(receivedRequest['parameters']['billing_address_country_iso2']).to.be.equal('US');
        expect(receivedRequest['parameters']).to.have.property('billing_address_state');
        expect(receivedRequest['parameters']['billing_address_state']).to.be.equal('CA');
        expect(receivedRequest['parameters']).to.have.property('billing_address_street1');
        expect(receivedRequest['parameters']['billing_address_street1']).to.be.equal('731 Market St');
        expect(receivedRequest['parameters']).to.have.property('billing_address_street2');
        expect(receivedRequest['parameters']['billing_address_street2']).to.be.equal('STE 200');
        expect(receivedRequest['parameters']).to.have.property('billing_address_zip');
        expect(receivedRequest['parameters']['billing_address_zip']).to.be.equal('94103');
        expect(receivedRequest['parameters']).to.have.property('company');
        expect(receivedRequest['parameters']['company']).to.be.equal('Shippo');
        expect(receivedRequest['parameters']).to.have.property('email');
        expect(receivedRequest['parameters']['email']).to.be.equal('hippo@shippo.com');
        expect(receivedRequest['parameters']).to.have.property('full_name');
        expect(receivedRequest['parameters']['full_name']).to.be.equal('Shippo Meister');
        expect(receivedRequest['parameters']).to.have.property('phone');
        expect(receivedRequest['parameters']['phone']).to.be.equal('1112223333');
        expect(receivedRequest['parameters']).to.have.property('pickup_address_city');
        expect(receivedRequest['parameters']['pickup_address_city']).to.be.equal('San Francisco');
        expect(receivedRequest['parameters']).to.have.property('pickup_address_country_iso2');
        expect(receivedRequest['parameters']['pickup_address_country_iso2']).to.be.equal('US');
        expect(receivedRequest['parameters']).to.have.property('pickup_address_same_as_billing_address');
        expect(receivedRequest['parameters']['pickup_address_same_as_billing_address']).to.be.false;
        expect(receivedRequest['parameters']).to.have.property('pickup_address_state');
        expect(receivedRequest['parameters']['pickup_address_state']).to.be.equal('CA');
        expect(receivedRequest['parameters']).to.have.property('pickup_address_street1');
        expect(receivedRequest['parameters']['pickup_address_street1']).to.be.equal('731 Market St');
        expect(receivedRequest['parameters']).to.have.property('pickup_address_street2');
        expect(receivedRequest['parameters']['pickup_address_street2']).to.be.equal('STE 200');
        expect(receivedRequest['parameters']).to.have.property('pickup_address_zip');
        expect(receivedRequest['parameters']['pickup_address_zip']).to.be.equal('94103');
        expect(receivedRequest['parameters']).to.have.property('ups_agreements');
        expect(receivedRequest['parameters']['ups_agreements']).to.be.true;
    })

    it('testCreateCarrierAccount:DHL', async () => {
        const createCarrierAccountResponse = {
          account_id: '00000000-0000-0000-0000-000000000000',
          active: true,
          carrier: 'dhl_express',
          parameters: {},
          carrier_name: 'DHL Express',
          is_shippo_account: false,
          object_owner: 'mrhippo@hippo.com',
          service_levels: <ServiceLevel[]>[
            {
              name: 'Ground',
              token: 'dhl_express_ground'
            }
          ]
        }

        var requestBody: RequestInfo | URL | undefined;
        const fetcher: Fetcher = async (input, init) => {
          requestBody = input;
          return new Response(JSON.stringify(createCarrierAccountResponse), {status: 201, headers: {'Content-type': 'application/json'}});
        };
        
        const shippoSdk = new MockShippoSDK(fetcher);
        const carrierAccount = await shippoSdk.carrierAccounts.register({
            carrier: 'dhl_express',
            parameters: {
              userAcceptedTermsAndConditions: true
            }
        })

        expect(requestBody).to.not.be.null;
        // Obtain the submitted request body as an object
        const receivedRequest = await requestBody.json();
        expect(receivedRequest).to.not.be.null;

        // Validate the expected body
        expect(receivedRequest['carrier']).to.be.equal('dhl_express');
        expect(receivedRequest['parameters']).to.be.an('object');
        expect(receivedRequest['parameters']).to.have.property('user_accepted_terms_and_conditions');
        expect(receivedRequest['parameters']['user_accepted_terms_and_conditions']).to.be.equal(true);
    })

    it('testCreateCarrierAccount:Canada Post', async () => {
        const createCarrierAccountResponse = {
          account_id: '00000000-0000-0000-0000-000000000000',
          active: true,
          carrier: 'canada_post',
          parameters: {},
          carrier_name: 'DHL Express',
          is_shippo_account: false,
          object_owner: 'mrhippo@hippo.com',
          service_levels: <ServiceLevel[]>[
            {
              name: 'Ground',
              token: 'canada_post_ground'
            }
          ]
        }

        var requestBody: RequestInfo | URL | undefined;
        const fetcher: Fetcher = async (input, init) => {
          requestBody = input;
          return new Response(JSON.stringify(createCarrierAccountResponse), {status: 201, headers: {'Content-type': 'application/json'}});
        };
        
        const shippoSdk = new MockShippoSDK(fetcher);
        const carrierAccount = await shippoSdk.carrierAccounts.register({
            carrier: 'canada_post',
            parameters: {
              email: 'mrhippo@hippo.com',
              fullName: 'Mr. Hippo',
              phone: '1112223333',
              canadaPostTerms: true,
              company: 'Shippo'
            }
        })

        expect(requestBody).to.not.be.null;
        // Obtain the submitted request body as an object
        const receivedRequest = await requestBody.json();
        expect(receivedRequest).to.not.be.null;

        // Validate the expected body
        expect(receivedRequest['carrier']).to.be.equal('canada_post');
        expect(receivedRequest['parameters']).to.be.an('object');
        expect(receivedRequest['parameters']).to.have.property('email');
        expect(receivedRequest['parameters']['email']).to.be.equal('mrhippo@hippo.com');
        expect(receivedRequest['parameters']).to.have.property('full_name');
        expect(receivedRequest['parameters']['full_name']).to.be.equal('Mr. Hippo');
        expect(receivedRequest['parameters']).to.have.property('phone');
        expect(receivedRequest['parameters']['phone']).to.be.equal('1112223333');
        expect(receivedRequest['parameters']).to.have.property('canada_post_terms');
        expect(receivedRequest['parameters']['canada_post_terms']).to.be.true;
        expect(receivedRequest['parameters']).to.have.property('company');
        expect(receivedRequest['parameters']['company']).to.be.equal('Shippo');
    })})