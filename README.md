# Node.js REST API Example

This example shows how to implement a simple REST API using Node.js and Docker. The API has five endpoints that all return a simple response in JSON.

* GET /
* GET /:id
* POST /
* PUT /
* DELETE /

## Build

```
docker build -t web .
```

## Run

Run in port `18800` with a share network:
```
docker run --name web -p 18800:18800 --network sharednet -d web
```


## Test

#### GET /

```
curl -i http://localhost:4000/

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json
Date: Tue, 28 Feb 2017 10:38:31 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"response":"This is GET method."}
```
