#!/bin/bash
# Set up daily cron jobs for textbook content generation
# This script adds cron jobs to run at 6:00 AM every day

cd /home/tony/textbook

# Remove existing textbook cron jobs (if any)
crontab -l 2>/dev/null | grep -v "generate-tony-jay" | grep -v "generate-news" | grep -v "generate-quiz" > /tmp/current-crontab

# Add new cron jobs
cat >> /tmp/current-crontab << 'EOF'
# Daily content generation for Chatterbox House textbook
# Tony & Jay Stories (6:00 AM)
0 6 * * * cd /home/tony/textbook && node generate-tony-jay.js >> /home/tony/textbook/cron.log 2>&1

# News Generation (6:05 AM)
5 6 * * * cd /home/tony/textbook && node generate-news.js >> /home/tony/textbook/cron.log 2>&1

# Quiz Generation (6:10 AM)
10 6 * * * cd /home/tony/textbook && node generate-quiz.js >> /home/tony/textbook/cron.log 2>&1
EOF

# Install the new crontab
crontab /tmp/current-crontab

echo "✅ Cron jobs installed!"
echo ""
echo "Current crontab:"
crontab -l
echo ""
echo "📅 Daily schedule:"
echo "  6:00 AM - Tony & Jay Stories"
echo "  6:05 AM - News"
echo "  6:10 AM - Quiz"