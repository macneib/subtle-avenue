#
# solid-saturn runtime Dockerfile
#

FROM alpine:latest

MAINTAINER "Blair MacNeil <macneib@spoxr.com>"

WORKDIR /app
ADD . /app

RUN apk update && \
    apk upgrade && \
    apk add make gcc g++ python git nodejs && rm -rf /var/cache/apk/* && \
    echo '{ "allow_root": true }' > /root/.bowerrc && \
    npm install --production && \
    apk del make gcc g++ python git && \
    rm -rf /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp

# General config
ENV NODE_ENV production
ENV PORT 8000

# RethinkDB link
ENV RDB_HOST rethinkdb

# Redis link
ENV REDIS_HOST redis

# Kue/Redis link
ENV KUE_HOST kue

# Expose ports.
EXPOSE 8000

CMD ["node", "server"]