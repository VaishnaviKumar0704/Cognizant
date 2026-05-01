from dotenv import load_dotenv
load_dotenv()
from openai import OpenAI
import os
from knowledge_base import load_faqs, find_best_faq_match
from intent_detector import detect_intent
from escalation import create_escalation_ticket

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


def generate_llm_response(user_query, chat_history, faq_answer=None, intent="General Query"):
    """
    Generate contextual chatbot response using OpenAI API.
    """
    system_prompt = """
    You are a polite and helpful AI customer support chatbot.

    Your goals:
    1. Answer customer questions clearly.
    2. Use the FAQ answer when provided.
    3. Keep the tone professional and friendly.
    4. If the issue is complex, suggest escalation to a human support agent.
    5. Do not make fake promises like guaranteed refunds or instant approvals.
    """

    context = ""
    for message in chat_history[-6:]:
        context += f"{message['role']}: {message['content']}\n"

    user_prompt = f"""
    Customer query: {user_query}

    Detected intent: {intent}

    Relevant FAQ answer:
    {faq_answer if faq_answer else "No direct FAQ match found."}

    Recent conversation:
    {context}

    Write the best customer support response.
    """

    response = client.responses.create(
        model="gpt-4.1-mini",
        input=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ]
    )

    return response.output_text


def get_chatbot_response(user_query, chat_history):
    """
    Main chatbot pipeline:
    1. Detect intent
    2. Search FAQ knowledge base
    3. Decide whether escalation is needed
    4. Generate response
    """
    faqs = load_faqs()
    intent = detect_intent(user_query)
    faq_match, score = find_best_faq_match(user_query, faqs)

    faq_answer = faq_match["answer"] if faq_match else None

    if intent == "Escalation Required":
        ticket = create_escalation_ticket(user_query, intent)
        response = (
            "I understand that this issue needs extra attention. "
            "I am escalating this to a human support agent.\n\n"
            + ticket
        )
        return response, intent, score

    response = generate_llm_response(
        user_query=user_query,
        chat_history=chat_history,
        faq_answer=faq_answer,
        intent=intent
    )

    return response, intent, score
