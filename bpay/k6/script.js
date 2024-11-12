/*
 * Validate BPAY Payment API
 * When a payment is submitted to a Financial Institution, the Financial Institution is required to validate the payment details when accepting it. This API validates the payment details for the Settlement Date specified in a request. This API provides functionality to perform BPAY payment validation before payment is submitted.   * This validation result is correct as at the time of calling the API Service.   * The Validate BPAY Payment API does not result in a payment being submitted to BPAY for processing. The Payment Instruction must be submitted to your financial institution (or BPAY if you are a Scheme Member) before cut-off on the same Business Banking Day as the Settlement date specified in a request.   * A maximum of 200 payment records may be included in a request. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: operations@bpay.com.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 *
 * OpenAPI generator version: 5.1.1-SNAPSHOT
 */


import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = "https://sandbox.api.bpaygroup.com.au/payments/v1";
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.

export default function() {
    group("/validatepayments", () => {
        let url = BASE_URL + `/validatepayments`;
        // Request No. 1
        // TODO: edit the parameters of the request body.
        let body = {"payments": [{"tid": "string", "payment": "payment"}]};
        let params = {headers: {"Content-Type": "application/json", "Accept": "application/json"}};
        let request = http.post(url, body, params);
        check(request, {
            "Response to indicate the request was successfully processed. Note that the order of the results should not be relied on to co-relate the response with the original request, rather use the "tid" included in the response for the co-relation. Note that the response is considered a 'success' (error code 200) regardless of whether the included payments are validated successfully or not.": (r) => r.status === 200
        });
        sleep(SLEEP_DURATION);
    });
}
