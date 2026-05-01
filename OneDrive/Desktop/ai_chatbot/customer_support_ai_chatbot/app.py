import streamlit as st
from dotenv import load_dotenv
from chatbot import get_chatbot_response

load_dotenv()

st.set_page_config(
    page_title="AI Support Assistant",
    page_icon="logo.png",
    layout="wide"
)

st.markdown("""
<style>
.stApp {
    background: linear-gradient(135deg, #09090f 0%, #151527 45%, #26152e 100%);
    color: white;
}

[data-testid="stSidebar"] {
    background: rgba(18, 18, 30, 0.95);
    border-right: 1px solid rgba(255,255,255,0.08);
}

.hero {
    padding: 35px;
    border-radius: 28px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    box-shadow: 0 20px 50px rgba(0,0,0,0.35);
    margin-bottom: 25px;
}

.hero h1 {
    font-size: 52px;
    margin-bottom: 10px;
}

.hero p {
    font-size: 18px;
    color: #d8d8e8;
}

.feature-card {
    padding: 18px;
    border-radius: 18px;
    background: rgba(255,255,255,0.08);
    margin-bottom: 14px;
    border: 1px solid rgba(255,255,255,0.08);
}

.badge {
    display: inline-block;
    padding: 8px 14px;
    border-radius: 999px;
    background: linear-gradient(90deg, #ff4ecd, #7c5cff);
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 15px;
}

.chat-box {
    padding: 22px;
    border-radius: 22px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.10);
    margin-bottom: 18px;
}

.footer-note {
    color: #aaa;
    font-size: 14px;
    margin-top: 18px;
}
</style>
""", unsafe_allow_html=True)

with st.sidebar:
    st.markdown("## 🚀 Project Features")

    features = [
        "FAQ Handling",
        "Intent Detection",
        "Context Memory",
        "Escalation Support",
        "OpenAI API Integration",
    ]

    for feature in features:
        st.markdown(f"<div class='feature-card'>✅ {feature}</div>", unsafe_allow_html=True)

    if st.button("🧹 Clear Chat"):
        st.session_state.messages = []
        st.rerun()

st.markdown("""
<div class="hero">
    <div class="badge">GenAI Customer Support System</div>
    <h1>AI Support Assistant</h1>
    <p>
        A smart LLM-powered chatbot that handles FAQs, understands user intent,
        remembers context, resolves common issues, and escalates complex queries.
    </p>
</div>
""", unsafe_allow_html=True)

if "messages" not in st.session_state:
    st.session_state.messages = []

st.markdown("### Conversation")

for message in st.session_state.messages:
    role = "🧑 User" if message["role"] == "user" else "🤖 Assistant"
    st.markdown(
        f"""
        <div class="chat-box">
            <b>{role}</b><br><br>
            {message["content"]}
        </div>
        """,
        unsafe_allow_html=True
    )

user_query = st.chat_input("Ask your support question...")

if user_query:
    st.session_state.messages.append({"role": "user", "content": user_query})

    with st.spinner("Analyzing query..."):
        try:
            response, intent, score = get_chatbot_response(
                user_query,
                st.session_state.messages
            )

            st.session_state.messages.append({"role": "assistant", "content": response})

            st.success("Response generated successfully")

            with st.expander("🔍 Behind the scenes"):
                st.write(f"Detected Intent: {intent}")
                st.write(f"FAQ Match Score: {round(score, 2)}")

            st.rerun()

        except Exception as e:
            st.error("Something went wrong. Please check API billing/key.")
            st.caption(str(e))

st.markdown("""
<p class="footer-note">
Built with Python, Streamlit, OpenAI API, Prompt Engineering, Intent Detection, and Context Memory.
</p>
""", unsafe_allow_html=True)