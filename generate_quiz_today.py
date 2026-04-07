#!/usr/bin/env python3
"""
Generate today's Cloze Quiz file manually.
This creates quiz-2026-04-01.js with 10-15 questions.
"""
import json
from datetime import datetime

today = datetime.now().strftime("%Y-%m-%d")
today_var = today.replace("-", "")

# Sample quiz questions (you can customize these or use AI to generate them)
questions = [
    {
        "question": "The cat ___ on the mat.",
        "options": ["sit", "sits", "sitting", "sat"],
        "answer": "sits",
        "hint": "Present simple, third person singular"
    },
    {
        "question": "Yesterday, I ___ to the store.",
        "options": ["go", "went", "gone", "going"],
        "answer": "went",
        "hint": "Past simple of 'go'"
    },
    {
        "question": "She ___ reading a book right now.",
        "options": ["is", "are", "am", "be"],
        "answer": "is",
        "hint": "Present continuous, third person singular"
    },
    {
        "question": "They ___ football every Sunday.",
        "options": ["play", "plays", "playing", "played"],
        "answer": "play",
        "hint": "Present simple, plural subject"
    },
    {
        "question": "___ you like pizza?",
        "options": ["Do", "Does", "Is", "Are"],
        "answer": "Do",
        "hint": "Question form with 'you'"
    },
    {
        "question": "He ___ not know the answer.",
        "options": ["do", "does", "is", "are"],
        "answer": "does",
        "hint": "Negative present simple, third person singular"
    },
    {
        "question": "We ___ watching TV when you called.",
        "options": ["was", "were", "are", "is"],
        "answer": "were",
        "hint": "Past continuous, plural subject"
    },
    {
        "question": "I ___ my homework already.",
        "options": ["finish", "finished", "have finished", "finishing"],
        "answer": "have finished",
        "hint": "Present perfect"
    },
    {
        "question": "If it rains, we ___ at home.",
        "options": ["stay", "stayed", "will stay", "staying"],
        "answer": "will stay",
        "hint": "First conditional"
    },
    {
        "question": "She is the ___ student in the class.",
        "options": ["smart", "smarter", "smartest", "most smart"],
        "answer": "smartest",
        "hint": "Superlative adjective"
    }
]

# Create the JavaScript file content
js_content = f"""var quiz{today_var} = [
  {{
    title: "Cloze Quiz - {today}",
    questions: {json.dumps(questions, indent=4)}
  }}
];
"""

# Write the file
with open(f'quiz-{today}.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"✅ Created quiz-{today}.js with {len(questions)} questions")
print("Now run: node -c quiz-{today}.js && git add quiz-{today}.js && git commit -m 'Add quiz for {today}' && git push")
