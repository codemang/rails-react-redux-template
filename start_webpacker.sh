#!/bin/sh

set -e
rm -rf public/packs
./bin/webpack-dev-server
