### 21 curl exercises from blog [Julia Evans](https://jvns.ca/blog/2019/08/27/curl-exercises/)
### How to make different kinds of HTTP requests with curl 

1.  Request https://httpbin.org
```
curl https://httpbin.org
```

2. Request https://httpbin.org/anything. httpbin.org/anything will look at the request you made, parse it, and echo back to you what you requested. curl’s default is to make a GET request.
```
curl https://httpbin.org/anything
```
```
Response:

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.68.0", 
    "X-Amzn-Trace-Id": "Root=1-61305649-4f5cd70a362e8428582490df"
  }, 
  "json": null, 
  "method": "GET", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
}
```

3. Make a POST request to https://httpbin.org/anything
```
curl -X POST https://httpbin.org/anything
```
```
Response:

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.68.0", 
    "X-Amzn-Trace-Id": "Root=1-61305fd0-2b3944ab1e76a7b53b69b75b"
  }, 
  "json": null, 
  "method": "POST", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
```

4. Make a GET request to https://httpbin.org/anything, but this time add some query parameters (set value=panda).
```
curl -X GET --data "value=panda" "https://httpbin.org/anything"
```
```
Response:

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {
    "value": "panda"
  }, 
  "headers": {
    "Accept": "*/*", 
    "Content-Length": "11", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.68.0", 
    "X-Amzn-Trace-Id": "Root=1-61306485-3b7813e47aed8cfb5b43ffe4"
  }, 
  "json": null, 
  "method": "GET", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
}

```

5. Request google’s robots.txt file (www.google.com/robots.txt)
```
curl www.google.com/robots.txt
```

6. Make a GET request to https://httpbin.org/anything and set the header User-Agent: elephant.
```
curl https://httpbin.org/anything --user-agent elephant
```
or
```
curl -H 'User-agent: elephant' https://httpbin.org/anything 
```
```
Response:

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "User-Agent": "elephant", 
    "X-Amzn-Trace-Id": "Root=1-6130629b-4c0569314ad85a612bcd0007"
  }, 
  "json": null, 
  "method": "GET", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
}

Reference:
https://everything.curl.dev/http/requests#user-agent
```

7. Make a DELETE request to https://httpbin.org/anything
```
curl -X DELETE https://httpbin.org/anything
```
```
Response:

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.68.0", 
    "X-Amzn-Trace-Id": "Root=1-61306307-2dcb7379665d82fd02d6178a"
  }, 
  "json": null, 
  "method": "DELETE", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
}
```

8. Request https://httpbin.org/anything and also get the response headers
```
curl -i https://httpbin.org/anything
```
```
Response:

HTTP/2 200 
date: Thu, 02 Sep 2021 05:38:04 GMT
content-type: application/json
content-length: 343
server: gunicorn/19.9.0
access-control-allow-origin: *
access-control-allow-credentials: true

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.68.0", 
    "X-Amzn-Trace-Id": "Root=1-6130633c-2ce824b913c68619428d320e"
  }, 
  "json": null, 
  "method": "GET", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
}
```

9.  Make a POST request to https://httpbin.org/anything with the JSON body {"value": "panda"}
```
curl -X POST https://httpbin.org/anything --data '{"value": "panda"}'
```
```
Response:

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {
    "{\"value\": \"panda\"}": ""
  }, 
  "headers": {
    "Accept": "*/*", 
    "Content-Length": "18", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.68.0", 
    "X-Amzn-Trace-Id": "Root=1-61306603-32e7f9456278b85b49f8fa0a"
  }, 
  "json": null, 
  "method": "POST", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
}
```

10. Make the same POST request as the previous exercise, but set the Content-Type header to application/json (because POST requests need to have a content type that matches their body). Look at the json field in the response to see the difference from the previous one.
```
curl -X POST -H "Content-Type: application/json" https://httpbin.org/anything --data '{"value": "panda"}'
```
```
Response:

{
  "args": {}, 
  "data": "{\"value\": \"panda\"}", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Content-Length": "18", 
    "Content-Type": "application/json", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.68.0", 
    "X-Amzn-Trace-Id": "Root=1-61306698-6aa36c4c7fd1faa11dc8d282"
  }, 
  "json": {
    "value": "panda"
  }, 
  "method": "POST", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
}
```

11. Make a GET request to https://httpbin.org/anything and set the header Accept-Encoding: gzip (what happens? why?)
```
curl -H "Accept-Encoding: gzip" https://httpbin.org/anything
```
```
Response:

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Accept-Encoding": "gzip", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.68.0", 
    "X-Amzn-Trace-Id": "Root=1-613066cf-1c17a81f4bed55e52d261947"
  }, 
  "json": null, 
  "method": "GET", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
}
```

12. Put a bunch of a JSON in a file and then make a POST request to https://httpbin.org/anything with the JSON in that file as the body
```
curl -X POST https://httpbin.org/anythin --data @data.json
```

13. Make a request to https://httpbin.org/image and set the header ‘Accept: image/png’. Save the output to a PNG file and open the file in an image viewer. Try the same thing with different Accept: headers.
```
curl -H 'Accept: image/png' https://httpbin.org/image -o image.png
```
```
Response:
```
![Response exercise 13](image.png)

14. Make a PUT request to https://httpbin.org/anything
```
curl -X PUT https://httpbin.org/anything
```
```
Response:

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.68.0", 
    "X-Amzn-Trace-Id": "Root=1-61306fd7-22c4851d69d0e50c644eae54"
  }, 
  "json": null, 
  "method": "PUT", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
}
```

15. Request https://httpbin.org/image/jpeg, save it to a file, and open that file in your image editor.
```
curl -o image2.jpeg https://httpbin.org/image/jpeg
```
```
Response:
```
![Response exercise 15](image2.jpeg)

16. Request https://www.twitter.com. You’ll get an empty response. Get curl to show you the response headers too, and try to figure out why the response was empty.
```
curl -i https://www.twitter.com
```
```
Response:

Because was pass on a "Transfer-Encoding: chunked" header when doing the request, will make curl send the data using chunked encoding. This can lead to the header being sent to other hosts than the original host.

HTTP/2 301 
date: Thu, 02 Sep 2021 06:36:58 UTC
server: tsa_b
location: https://twitter.com/
set-cookie: personalization_id="v1_7xC7dmZBW4kU7NY5Si0I/A=="; Max-Age=63072000; Expires=Sat, 02 Sep 2023 06:36:58 GMT; Path=/; Domain=.twitter.com; Secure; SameSite=None
set-cookie: guest_id=v1%3A163056461822315044; Max-Age=63072000; Expires=Sat, 02 Sep 2023 06:36:58 GMT; Path=/; Domain=.twitter.com; Secure; SameSite=None
cache-control: no-cache, no-store, max-age=0
content-length: 0
strict-transport-security: max-age=631138519
x-connection-hash: 9d63f999de6e9162d4df0ea7b824f8097a48b6224d3d5a5750c7b8684001525c
```

17. Make any request to https://httpbin.org/anything and just set some nonsense headers (like panda: elephant)
```
curl -H 'Panda: Elephant' https://httpbin.org/anything
```
```
Response:

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Host": "httpbin.org", 
    "Panda": "Elephant", 
    "User-Agent": "curl/7.68.0", 
    "X-Amzn-Trace-Id": "Root=1-61307605-6fb7fec11164523c636adcfa"
  }, 
  "json": null, 
  "method": "GET", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
}
```

18. Request https://httpbin.org/status/404 and https://httpbin.org/status/200. Request them again and get curl to show the response headers.
```
curl https://httpbin.org/status/404
curl -i https://httpbin.org/status/404
```
```
Response:

HTTP/2 404 
date: Thu, 02 Sep 2021 06:59:58 GMT
content-type: text/html; charset=utf-8
content-length: 0
server: gunicorn/19.9.0
access-control-allow-origin: *
access-control-allow-credentials: true
```
```
curl https://httpbin.org/status/200
curl -i https://httpbin.org/status/200
```
```
Response:

HTTP/2 200 
date: Thu, 02 Sep 2021 07:00:19 GMT
content-type: text/html; charset=utf-8
content-length: 0
server: gunicorn/19.9.0
access-control-allow-origin: *
access-control-allow-credentials: true
```

19. Request https://httpbin.org/anything and set a username and password (with -u username:password)
```
curl -u username:secret https://httpbin.org/anything
```
```
Response:

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Authorization": "Basic dXNlcm5hbWU6c2VjcmV0", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.68.0", 
    "X-Amzn-Trace-Id": "Root=1-613076f6-5ee666962b434cbe1931d31d"
  }, 
  "json": null, 
  "method": "GET", 
  "origin": "189.60.105.53", 
  "url": "https://httpbin.org/anything"
}
```

20. Download the Twitter homepage (https://twitter.com) in Spanish by setting the Accept-Language: es-ES header.
```
curl -H 'Accept-Language: es-ES' https://twitter.com
```

21. Make a request to the Stripe API with curl. (see https://stripe.com/docs/development for how, they give you a test API key). Try making exactly the same request to https://httpbin.org/anything.
```
Since you need create an account and login to get a test API key, so i use a fake one for the exercise.

curl https://httpbin.org/anything
-u sk_test_000000000000000000

Reference: 
https://stripe.com/docs/api
```
