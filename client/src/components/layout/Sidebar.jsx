import "./Sidebar.css";
import logo from "../../assets/logo.png";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <img src={logo} alt="APEx logo" className="logo-image" />
          
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item active">Accueil</button>
          <button className="nav-item">Coach</button>
          <button className="nav-item">Profil</button>
          <button className="nav-item">Messages</button>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <button className="new-session-btn">New Session</button>
      </div>
    </aside>
  );
}

export default Sidebar;