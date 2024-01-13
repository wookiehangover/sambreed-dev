---
title: Nginx Certs
description: How to setup ssl with Certbot for Nginx
createdAt: 2024-01-13
categories:
  - Computers
  - Web Development
type: note
---

For posterity, this is how I set up the certs for dev sites that need them. I've had to set this up a few times over the last year or so and I chronically forget how to do it. I wrote down the instructions for myself and now I'm putting them here.

Install Nginx and Certbot

```
sudo apt-get install nginx certbot python3-certbot-nginx
sudo certbot --nginx -d <domain-name-here>
```

Then add the following config to the `https server` directive in `/etc/nginx/sites-available/default`. The http server is automatically redirected by certbot.

```
location / {
	proxy_set_header Host $host;
	proxy_pass http://localhost:8080;

	proxy_buffering off;
	proxy_cache off;
	proxy_set_header Connection '';
	proxy_http_version 1.1;
	chunked_transfer_encoding off;
}
```

Check Nginx config and reload

```
sudo nginx -t
sudo nginx -s reload
```