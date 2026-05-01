# AI Chatbot for Customer Support

A GenAI-based customer support chatbot that answers FAQs, resolves common issues, detects user intent, remembers conversation context, and escalates complex queries.

## Features

- FAQ answering from a simple knowledge base
- LLM-powered contextual responses
- Intent detection: FAQ, issue resolution, refund/billing, technical issue, escalation
- Conversation memory
- Escalation message generation for complex queries
- Streamlit web interface

## Tech Stack

Python, Streamlit, OpenAI API, Prompt Engineering, JSON Knowledge Base

## Project Structure

```
customer_support_ai_chatbot/
│
├── app.py
├── chatbot.py
├── intent_detector.py
├── knowledge_base.py
├── escalation.py
├── requirements.txt
├── .env.example
├── data/
│   └── faqs.json
└── README.md
```

## Setup

### 1. Install dependencies

```bash
pip install -r requirements.txt
```

### 2. Add your OpenAI API key

Create a `.env` file in the project folder:

```bash
OPENAI_API_KEY=your_api_key_here
```

### 3. Run the app

```bash
streamlit run app.py
```

## Resume Line

Developed an LLM-based customer support chatbot capable of contextual query resolution, FAQ handling, intent detection, and automated escalation using prompt engineering and API integration.
