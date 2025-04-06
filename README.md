# WASD Closed - Static Page

This repository provides a minimal setup using **Docker** and **NGINX** to serve a static HTML page indicating that the website has been closed.

## Contents

- `Dockerfile`: Builds a lightweight container running NGINX.
- `default.conf`: NGINX configuration to serve a single static file.
- `index.html`: The HTML page displaying the closure message.
- `docker-compose.yaml`: Optional Compose file to simplify container management.

## Usage

This setup is intended for deployments where a simple notice needs to be shown instead of a full website.
 The static page is served on port 80 using NGINX within a Docker container.
