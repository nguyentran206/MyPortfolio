import "../styles/global.css";
import "../styles/About.css";
import avatar from "../assets/avatar3.jpg";
import Agile from "../assets/Agile_TECHBASE.pdf";
import Aptis from "../assets/Aptis_Certificate.pdf";
import transcript from "../assets/Academic_Transcript.pdf";

export default function AboutSection() {
  return (
    <section id="about" className="about-container">
      {/* Ảnh đại diện bên trái */}
      <div className="about-left">
        <img
          src={avatar} 
          alt="Tran Thi Thao Nguyen"
          className="about-avatar"
        />
      </div>

      {/* Thông tin bên phải */}
      <div className="about-right">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I'm <strong>Tran Thi Thao Nguyen</strong>, a Computer Science student at Ton Duc Thang University
          focused on <strong>Applied AI, Machine Learning, and Natural Language Processing</strong>.
          I have hands-on experience building and evaluating NLP/ML pipelines, developing backend APIs,
          and integrating LLM-based components into AI applications.
          <br /><br />

          My projects cover problems such as <strong>machine translation, Vietnamese text classification,
          and CV–job matching</strong>, where I focus not only on model development but also on
          evaluation, system design, and turning AI capabilities into usable applications.
          <br /><br />

          During my internship, I also worked with <strong>Python, FastAPI, PostgreSQL, REST APIs,
          requirement analysis, and software testing</strong>, which strengthened my understanding
          of how AI features integrate with real software systems.
          <br /><br />

          I'm currently seeking opportunities as an <strong>AI Engineer Intern</strong> where I can
          contribute to applied AI projects while deepening my experience in model evaluation,
          LLM applications, and production-oriented AI systems.
        </p>

        

        <div className="about-info">
          <p><strong>Current Location:</strong> Nha Be, Ho Chi Minh City, Vietnam</p>
        </div>

        {/* Học vấn */}
        <div className="about-section">
          <h3>Education</h3>
          <p>
            <strong>Ton Duc Thang University</strong> – Bachelor of Computer Science<br />
            <strong>GPA:</strong> 8.08 / 10.0 (Current)<br />
            <strong>Study Period:</strong> 2022 – 2026 <br />
            <strong>Expected Graduation:</strong> 11/2026<br />
            <strong>Transcript: </strong> 
            <a
              href={transcript}
              target="_blank"
              rel="noreferrer"
              className="cert-link"
            >
            View Transcript (PDF)
          </a><br />
          </p>
        </div>
        

        <div className="about-section">
          <h3>Career Objective</h3>
          <p>
            To develop as an AI Engineer by building practical AI applications that combine
            machine learning, NLP, LLMs, and reliable backend systems. I am particularly
            interested in solving real-world problems through measurable model evaluation
            and production-oriented AI development.
          </p>
        </div>

        {/* Kỹ năng chính */}
        <div className="about-section">
          <h3>Technical Skills</h3>
          <ul>
            <li>
              <strong>Programming & Data:</strong> Python, SQL, Pandas, NumPy, PostgreSQL
            </li>

            <li>
              <strong>Machine Learning & NLP:</strong> Scikit-learn, PyTorch, TensorFlow,
              Hugging Face Transformers, ViT5, PhoBERT
            </li>

            <li>
              <strong>LLM & AI Applications:</strong> Gemini API, Prompt Engineering,
              Semantic Similarity, LLM Workflows, LangGraph
            </li>

            <li>
              <strong>Backend & APIs:</strong> FastAPI, REST APIs, SQLAlchemy, Pydantic
            </li>

            <li>
              <strong>Engineering Tools:</strong> Git, GitHub, Docker, Postman,
              Google Colab, Kaggle
            </li>
          </ul>
        </div>

        {/* Môn học nổi bật */}
        <div className="about-section">
          <h3>Relevant Coursework</h3>
          <p>
            Data Structures and Algorithms, Artificial Intelligence, Machine Learning,
            Deep Learning, Natural Language Processing, Data Mining, and Massive Data Processing.
          </p>
        </div>

        <div className="about-section">
          <h3>Certificates</h3>
          <ul>
            <li>
              <a
                href={Agile}
                target="_blank"
                rel="noreferrer"
                className="cert-link"
              >
                Agile Development & Scrum Framework – Issued 25/10/2024 by TECHBASE (at Ton Duc Thang University)
              </a>
            </li>
            <li><a
                href={Aptis}
                target="_blank"
                rel="noreferrer"
                className="cert-link"
              >
                Aptis English Certificate (B2 – CEFR) – Issued 01/03/2026 by British Council
              </a>
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Languages</h3>
          <ul>
            <li><strong>Vietnamese:</strong> Native</li>
            <li><strong>English:</strong> B2 (CEFR)</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Soft Skills</h3>
          <ul>
            <li>Teamwork and collaboration</li>
            <li>Critical thinking and problem-solving</li>
            <li>Time management and adaptability</li>
            <li>Continuous learning mindset</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
