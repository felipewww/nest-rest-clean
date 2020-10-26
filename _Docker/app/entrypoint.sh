#!/bin/bash

GREEN='\033[1;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e  "${GREEN} Initializing Api...${NC} ${YELLOW} ${NC}"
npm install && \
npm run start:dev
