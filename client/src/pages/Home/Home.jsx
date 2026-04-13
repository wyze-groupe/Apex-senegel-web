import Sidebar from "../../components/layout/Sidebar";
// import Header from "../../components/layout/Header";
import { Camera, PencilLine } from "lucide-react";
import { BookOpen, Trophy, LineChart, MessageSquare } from "lucide-react";
import "./Home.css";

function Home() {
  const user = {
    firstName: "kemiseba",
    fullName: "Kemi Seba",
    status: "Apprenant Débutant",
    certificationProgress: 0,
    portfolioCount: 0,
    hasJournalEntry: false,
  };

  return (
    <div className="home-layout">
      <Sidebar />

      <main className="home-main">
        {/* <header /> */}

        <section className="welcome-section">
          <h1>Bienvenue mon ami, {user.firstName}</h1>
          <p>L'excellence de la formation au Sénégal</p>
        </section>

        <section className="top-grid">
          <div className="certification-card">
            <div className="certification-top">
              <div>
                <h2>Votre parcours commence ici</h2>
                <p>
                  Commencez votre apprentissage et débloquez votre progression
                  étape par étape.
                </p>
              </div>

              <div className="tags">
                <span className="tag">Digital Coach</span>
                <span className="tag highlight">Top Performer</span>
              </div>
            </div>

            <div className="certification-bottom">
              <div className="level-line">
                <span>Niveau: Débutant</span>
                <span className="progress-value">
                  {user.certificationProgress}%
                </span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${user.certificationProgress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="quick-access">
            <h3>ACCÈS RAPIDE</h3>

           <div className="quick-grid">
              <div className="quick-card">
                <div className="quick-icon">
                  <BookOpen size={24} />
                </div>
                <span>Cours</span>
              </div>

              <div className="quick-card">
                <div className="quick-icon">
                  <Trophy size={24} />
                </div>
                <span>Badges</span>
              </div>

              <div className="quick-card">
                <div className="quick-icon">
                  <LineChart size={24} />
                </div>
                <span>Stats</span>
              </div>

              <div className="quick-card">
                <div className="quick-icon">
                  <MessageSquare size={24} />
                </div>
                <span>Chat</span>
              </div>
           </div>
          </div>
        </section>

        <section className="personal-space-card">
          <div className="personal-left">
            <div className="personal-icon">🚀</div>

            <div>
              <h2>Mon Espace Personnel</h2>
              <p>Accéder à mes cours et badges en un clic</p>
            </div>
          </div>

          <button className="primary-dark-btn">Commencer l'apprentissage</button>
        </section>

        <section className="bottom-grid">
          <div className="info-card">
            <div className="info-header">
              <div className="info-icon">
                <Camera size={18} strokeWidth={2.2} />
              </div>
              <div className="info-text">
                <h3>Portfolio</h3>
                <p>Ajouter photos ou vidéos de vos sessions</p>
              </div>
            </div>

            <div className="info-footer">
              <span>12 éléments partagés</span>
              <button className="text-btn">Ouvrir →</button>
            </div>
          </div>

          <div className="info-card">
            <div className="info-header">
              <div className="info-icon light">
                <PencilLine size={18} strokeWidth={2.2} />
              </div>
              <div className="info-text">
                <h3>Journal</h3>
                <p>Relever le défi du jour et noter vos réflexions</p>
              </div>
            </div>

            <div className="info-footer">
              <span className="warning-dot">● Défi disponible</span>
              <button className="start-btn">Commencer</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;