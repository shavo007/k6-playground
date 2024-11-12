/*
 * Greeting API
 * This is an **example** API to demonstrate features of OpenAPI specification # Introduction This API definition is intended to to be a good starting point for describing your API in [OpenAPI/Swagger format](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md). It also demonstrates features of [create-openapi-repo](https://github.com/Redocly/create-openapi-repo) tool and [Redoc](https://github.com/Redocly/Redoc) documentation engine. So beyond the standard OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/Redoc/blob/master/docs/redoc-vendor-extensions.md).  # OpenAPI Specification The goal of The OpenAPI Specification is to define a standard, language-agnostic interface to REST APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined via OpenAPI, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interfaces have done for lower-level programming, OpenAPI removes the guesswork in calling the service.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact@example.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 *
 * OpenAPI generator version: 6.3.0-SNAPSHOT
 */

import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = "http://host.docker.internal:8081";
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.

export default function () {
  group("/greetings", () => {
    // Request No. 1
    {
      let url = BASE_URL + `/greetings`;
      let request = http.get(url);

      check(request, {
        Success: (r) => r.status === 200,
      });

      sleep(SLEEP_DURATION);
    }

    // Request No. 2
    {
      let url = BASE_URL + `/greetings`;
      // TODO: edit the parameters of the request body.
      let body = {
        id: "long",
        message: "string",
        creationDate: "date",
        label: "string",
        isFriendly: "boolean",
        weatherType: "weathertype",
        status: "string",
      };
      let params = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      let request = http.post(url, JSON.stringify(body), params);

      check(request, {
        "Greeting created": (r) => r.status === 201,
      });
    }
  });

  group("/greetings/{greetingId}", () => {
    let greetingId = "TODO_EDIT_THE_GREETINGID"; // specify value as there is no example value for this parameter in OpenAPI spec

    // Request No. 1
    {
      let url = BASE_URL + `/greetings/${greetingId}`;
      let request = http.get(url);

      check(request, {
        Success: (r) => r.status === 200,
      });
    }
  });
}
