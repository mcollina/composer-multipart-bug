# Multipart Bug

This is a Platformatic Runtime application that has a Composer and a Service,
named `composer` and `service`.

`service` exposes a multipart route as `/upload`. `composer` exposes that route:

* via reverse proxy as `/proxy/upload`
* via OpenAPI composition as `/service/upload`.

Currently the `OpenAPI` composition exposes this incorrectly and it remaps the type
from `multipart/form-data` to `application/json`.

A failing client demonstrating this is available at `test.mjs`, to use:

1. `npm install`
2. `npm start`
3. `node test.mjs` (in another window)
