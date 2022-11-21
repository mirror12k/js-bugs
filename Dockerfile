#!/usr/bin/env -S bash -c "docker run -v \${PWD}:/app -it \$(docker build . >&2 && docker build -q .) \$@"
FROM ubuntu:14.04

WORKDIR /app

ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \
    apt install -y nodejs libmozjs-24-bin

CMD bash




