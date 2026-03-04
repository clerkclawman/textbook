#!/bin/bash
# Push textbook changes to GitHub
# Usage: push-textbook-changes.sh "Commit message"

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Check for uncommitted changes
if [ -z "$(git status --porcelain)" ]; then
    echo "No changes to commit."
    exit 0
fi

# Add all changes
git add .

# Commit with provided message or default
MESSAGE="${1:-Update textbook}"
git commit -m "$MESSAGE"

# Push to GitHub
git push origin main

echo "✅ Changes pushed to GitHub"
