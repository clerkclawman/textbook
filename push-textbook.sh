#!/bin/bash
# Push textbook changes to GitHub
# Usage: push-textbook.sh "Commit message" [target-branch]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Check for uncommitted changes
if [ -z "$(git status --porcelain)" ]; then
    echo "No changes to commit."
    exit 0
fi

# Add and commit
git add .
MESSAGE="${1:-Update textbook}"
git commit -m "$MESSAGE"

# Determine target branch (default: main, or use second argument)
TARGET_BRANCH="${2:-main}"

# Push to GitHub
git push origin "$(git branch --show-current):$TARGET_BRANCH"

echo "✅ Changes pushed to GitHub ($TARGET_BRANCH)"
