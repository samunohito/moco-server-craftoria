#!/usr/bin/env bash
set -euo pipefail
cd -- "$(dirname -- "$0")"
if [[ ! -f serverstarter-2.4.1.jar ]]; then
  curl --fail --location --output serverstarter-2.4.1.jar \
    https://github.com/TeamAOF/ServerStarter/releases/download/v2.4.1/serverstarter-2.4.1.jar
fi
exec java -jar serverstarter-2.4.1.jar
