#!/bin/bash
# Create new daily news file for textbook
# Usage: make-daily-news.sh [YYYY-MM-DD]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Get today's date or use provided date
if [ -n "$1" ]; then
    NEWS_DATE="$1"
else
    NEWS_DATE=$(date +%Y-%m-%d)
fi

# Validate date format
if ! [[ "$NEWS_DATE" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}$ ]]; then
    echo "Error: Date must be in YYYY-MM-DD format"
    exit 1
fi

# Parse date components
YEAR=$(echo "$NEWS_DATE" | cut -d- -f1)
MONTH=$(echo "$NEWS_DATE" | cut -d- -f2)
DAY=$(echo "$NEWS_DATE" | cut -d- -f3)
DATE_NUMBER="${YEAR}${MONTH}${DAY}"

# Create news file
NEWS_FILE="news-${NEWS_DATE}.js"

if [ -f "$NEWS_FILE" ]; then
    echo "Warning: $NEWS_FILE already exists!"
    echo "Overwrite? (y/N)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        echo "Cancelled."
        exit 0
    fi
fi

# Create template file
cat > "$NEWS_FILE" << 'EOTEMPLATE'
var newsDATE_NUMBER = [
    {
        title: "Daily News - DATE",
        content: `Add your news articles here in the format:
1. English question
Japanese translation

Each article separates with a blank line.`
    }
];
EOTEMPLATE

# Replace placeholders
sed -i "s/DATE_NUMBER/${DATE_NUMBER}/g" "$NEWS_FILE"
sed -i "s/DATE/${NEWS_DATE}/g" "$NEWS_FILE"

echo "✅ Created: $NEWS_FILE"
echo "📝 Now add your news questions to this file"
echo "📅 News will auto-expire after 48 hours"
echo ""
echo "Preview:"
head -10 "$NEWS_FILE"
