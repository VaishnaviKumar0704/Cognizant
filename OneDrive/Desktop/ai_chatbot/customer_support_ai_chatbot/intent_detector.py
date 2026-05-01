def detect_intent(user_query):
    """
    Basic intent detection using keyword matching.
    This can later be upgraded using an ML model or LLM classification.
    """
    query = user_query.lower()

    escalation_words = [
        "manager", "human", "agent", "complaint", "legal",
        "angry", "not solved", "escalate", "supervisor"
    ]

    refund_words = [
        "refund", "return", "money back", "cancel", "payment",
        "charged", "billing"
    ]

    technical_words = [
        "error", "bug", "not working", "login issue", "crash",
        "failed", "unable", "problem"
    ]

    faq_words = [
        "how", "what", "where", "when", "can i", "do you"
    ]

    if any(word in query for word in escalation_words):
        return "Escalation Required"

    if any(word in query for word in refund_words):
        return "Refund/Billing Issue"

    if any(word in query for word in technical_words):
        return "Technical Issue"

    if any(word in query for word in faq_words):
        return "FAQ"

    return "General Query"
