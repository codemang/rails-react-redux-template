FROM ruby:2.5.1-alpine
MAINTAINER Nate Rubin

RUN apk update && apk upgrade

# Clean APK cache
RUN rm -rf /var/cache/apk/*

# Needed for rails
RUN apk add ruby-bundler

# Needed for nokogiri
RUN apk add ruby-dev build-base

# Needed for webpack
RUN apk add nodejs
RUN npm install -g yarn

# Needed for postgres
RUN apk add postgresql-dev

# Use volume to cache gems
ENV BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    GEM_HOME=/bundle

ENV PATH="${BUNDLE_BIN}:${PATH}"

# Setup app dir
RUN mkdir /app
WORKDIR /app
