#!/bin/bash

# Check if already logged in by trying to get user info
if storyblok user >/dev/null 2>&1; then
  exit 0
fi

# Try to login with management token if available
if [ -n "$STORYBLOK_MANAGEMENT_TOKEN" ]; then
  echo "Logging in with STORYBLOK_MANAGEMENT_TOKEN..."
  storyblok login --token "$STORYBLOK_MANAGEMENT_TOKEN"
  if [ $? -eq 0 ]; then
    exit 0
  fi
fi

# Try to use access token as fallback (load from .env.local if exists)
if [ -f .env.local ]; then
  ACCESS_TOKEN=$(grep -E "^NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=" .env.local | cut -d '=' -f2 | tr -d '"' | tr -d "'")
  if [ -n "$ACCESS_TOKEN" ]; then
    echo "Attempting login with access token from .env.local..."
    storyblok login --token "$ACCESS_TOKEN"
    if [ $? -eq 0 ]; then
      exit 0
    fi
  fi
fi

# If still not logged in, show error and instructions
echo ""
echo "❌ Not authenticated with Storyblok CLI"
echo ""
echo "Please login first by running:"
echo "  pnpm storyblok login"
echo ""
echo "Or set a management token:"
echo "  export STORYBLOK_MANAGEMENT_TOKEN=your_token"
echo ""
exit 1

