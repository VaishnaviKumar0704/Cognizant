import json
from difflib import SequenceMatcher


def load_faqs(file_path="data/faqs.json"):
    """Load FAQ knowledge base from JSON file."""
    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)


def find_best_faq_match(user_query, faqs, threshold=0.45):
    """
    Finds the closest FAQ question using simple text similarity.
    This keeps the project beginner-friendly without needing vector databases.
    """
    best_match = None
    best_score = 0

    for faq in faqs:
        score = SequenceMatcher(
            None,
            user_query.lower(),
            faq["question"].lower()
        ).ratio()

        if score > best_score:
            best_score = score
            best_match = faq

    if best_score >= threshold:
        return best_match, best_score

    return None, best_score
