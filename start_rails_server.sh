#!/bin/sh

set -e
rm -rf tmp/pids/server.pid
rails server -p 3000 -b 0.0.0.0
