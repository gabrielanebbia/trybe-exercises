### HTTP GET

curl localhost:8000
# Hi, client! This is a POST method response

### HTTP POST

curl -d "userId=1" localhost:8000
# ou
curl -X POST -d "userId=1" localhost:8000
# Hi, client! This is a POST method response

### HTTP POST passando um header

curl -d '{"userId": 1}' -H 'Content-Type: application/json' localhost:8000
# Hi, client! This is a POST method response
