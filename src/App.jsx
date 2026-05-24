import React, { useState } from 'react';
import saleckImg from './saleck.jpeg';

function App() {
  const [activeTab, setActiveTab] = useState('accueil');
  // 1. حالة إدارة الوضع الليلي (الافتراضي false يعني نهاراً)
  const [darkMode, setDarkMode] = useState(false);

  // Liste des projets
  const myProjects = [
    { 
      id: 1, 
      title: '📦 Makhzanak! (Votre Entrepôt)', 
      desc: 'Une application SaaS cloud innovante dédiée à la gestion des stocks et au suivi des inventaires en temps réel pour les entreprises.' 
    },
    { 
      id: 2, 
      title: '💻 DevTask Dashboard', 
      desc: 'Une plateforme interactive conçue avec React et Vite pour orchestrer les tâches quotidiennes et planifier les révisions.' 
    }
  ];

  // Liste des compétences
  const mySkills = [
    { name: 'Java & Python', level: 'Forte base en Algorithmique' },
    { name: 'SQL & MySQL', level: 'Conception de Bases de Données' },
    { name: 'HTML5 & CSS3', level: 'Création d\'interfaces Web' },
    { name: 'JavaScript & React', level: 'Développement Web Moderne' }
  ];

  // تنسيق أزرار التنقل حسب الصفحة والوضع الحالي
  const tabStyle = (tabName) => ({
    padding: '10px 20px',
    backgroundColor: activeTab === tabName ? '#007acc' : 'transparent',
    color: activeTab === tabName ? '#fff' : (darkMode ? '#cbd5e0' : '#4a5568'),
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease'
  });

  // 2. تحديد الألوان بناءً على الوضع الليلي أو النهاري
  const themeContainer = {
    fontFamily: "'Poppins', 'Segoe UI', sans-serif",
    direction: 'ltr',
    backgroundColor: darkMode ? '#1a202c' : '#f0f4f8', // خلفية الموقع كاملة
    color: darkMode ? '#f7fafc' : '#2d3748',          // لون النصوص العامة
    minHeight: '100vh',
    padding: '20px',
    transition: 'background-color 0.4s ease, color 0.4s ease' // حركة ناعمة عند التحول
  };

  const cardStyle = {
    backgroundColor: darkMode ? '#2d3748' : '#fff',    // خلفية البطاقات
    color: darkMode ? '#f7fafc' : '#2d3748',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: darkMode ? '0 4px 6px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={themeContainer}>
      
      {/* زر التبديل بين الوضع الليلي والنهاري Floating Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', maxWidth: '800px', margin: '0 auto 10px auto' }}>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '10px 15px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: darkMode ? '#f6e05e' : '#1a202c',
            color: darkMode ? '#1a202c' : '#fff',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease'
          }}
        >
          {darkMode ? '☀️ Mode Clair' : '🌙 Mode Sombre'}
        </button>
      </div>
      
      {/* HEADER */}
      <header style={{
        textAlign: 'center',
        marginBottom: '30px',
        background: darkMode ? 'linear-gradient(135deg, #1f4068, #162447)' : 'linear-gradient(135deg, #007acc, #005299)',
        color: '#fff',
        padding: '30px 20px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
        transition: 'all 0.4s ease'
      }}>
        <img 
          src={saleckImg} 
          alt="Salek Sidiawbeck" 
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #fff',
            marginBottom: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
          }}
        />
        <h1 style={{ fontSize: '2.3rem', margin: '0', fontWeight: '700' }}>Salek Sidiawbeck</h1>
        <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginTop: '8px', fontWeight: '300' }}>
          Étudiant en DSI | Futur Développeur Full-Stack
        </p>
      </header>

      {/* NAVBAR */}
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        backgroundColor: darkMode ? '#2d3748' : '#fff',
        padding: '10px',
        borderRadius: '30px',
        maxWidth: '600px',
        margin: '0 auto 30px auto',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        transition: 'all 0.4s ease'
      }}>
        <button style={tabStyle('accueil')} onClick={() => setActiveTab('accueil')}>Accueil</button>
        <button style={tabStyle('competences')} onClick={() => setActiveTab('competences')}>Compétences</button>
        <button style={tabStyle('projets')} onClick={() => setActiveTab('projets')}>Projets</button>
        <button style={tabStyle('contact')} onClick={() => setActiveTab('contact')}>Contact</button>
      </nav>

      {/* CONTAINER PRINCIPAL DYNAMIQUE */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* ACCUEIL */}
        {activeTab === 'accueil' && (
          <section style={cardStyle}>
            <h2 style={{ color: '#007acc', marginTop: '0', borderBottom: '2px solid #edf2f7', paddingBottom: '10px' }}>🌟 À Propos de Moi</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: darkMode ? '#cbd5e0' : '#4a5568' }}>
              Actuellement en première année de l'enseignement supérieur en informatique, option **Développement des Systèmes d'Information (DSI)**. 
              Passionné par l'écosystème du code, j'aime résoudre des défis algorithmiques, structurer des bases de données robustes et concevoir des applications web réactives. Mon but est de bâtir des solutions logicielles performantes, épurées et centrées sur l'utilisateur.
            </p>
          </section>
        )}

        {/* COMPÉTENCES */}
        {activeTab === 'competences' && (
          <section style={cardStyle}>
            <h2 style={{ color: '#007acc', marginTop: '0', borderBottom: '2px solid #edf2f7', paddingBottom: '10px', marginBottom: '20px' }}>🛠️ Mes Compétences</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              {mySkills.map((skill, index) => (
                <div 
                  key={index} 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                    e.currentTarget.style.backgroundColor = darkMode ? '#4a5568' : '#eef6fc';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = darkMode ? '#1a202c' : '#f7fafc';
                  }}
                  style={{ 
                    padding: '15px', 
                    backgroundColor: darkMode ? '#1a202c' : '#f7fafc', 
                    borderRadius: '8px', 
                    borderLeft: '4px solid #3182ce',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <h4 style={{ margin: '0 0 5px 0', color: '#2b6cb0', fontSize: '1.1rem' }}>{skill.name}</h4>
                  <p style={{ margin: '0', color: darkMode ? '#a0aec0' : '#718096', fontSize: '0.9rem' }}>{skill.level}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROJETS */}
        {activeTab === 'projets' && (
          <section style={cardStyle}>
            <h2 style={{ color: '#007acc', marginTop: '0', borderBottom: '2px solid #edf2f7', paddingBottom: '10px', marginBottom: '25px' }}>🚀 Mes Projets Récents</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {myProjects.map((project) => (
                <div 
                  key={project.id} 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
                  }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: darkMode ? '#1a202c' : '#f7fafc', 
                    borderRadius: '8px', 
                    borderTop: '3px solid #007acc',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 style={{ margin: '0 0 10px 0', color: darkMode ? '#fff' : '#1a202c' }}>{project.title}</h3>
                  <p style={{ margin: '0', color: darkMode ? '#cbd5e0' : '#4a5568', lineHeight: '1.6' }}>{project.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONTACT */}
        {activeTab === 'contact' && (
          <section style={cardStyle}>
            <h2 style={{ color: '#007acc', marginTop: '0' }}>📧 Contactez-moi</h2>
            <p style={{ color: darkMode ? '#cbd5e0' : '#4a5568', marginBottom: '20px' }}>Envoyez-moi un message directement depuis ce formulaire :</p>
            
            <form 
              action="https://formspree.io/f/xkoezvwo" 
              method="POST"
              style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', margin: '0 auto 30px auto' }}
            >
              <input type="text" name="name" placeholder="Votre Nom" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '1rem', backgroundColor: darkMode ? '#1a202c' : '#fff', color: darkMode ? '#fff' : '#000' }} />
              <input type="email" name="email" placeholder="Votre Adresse Email" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '1rem', backgroundColor: darkMode ? '#1a202c' : '#fff', color: darkMode ? '#fff' : '#000' }} />
              <textarea name="message" placeholder="Votre Message..." rows="4" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '1rem', resize: 'none', backgroundColor: darkMode ? '#1a202c' : '#fff', color: darkMode ? '#fff' : '#000' }}></textarea>
              <button type="submit" style={{ padding: '12px 24px', backgroundColor: '#007acc', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,122,204,0.3)' }}>
                Envoyer le Message
              </button>
            </form>

            <div style={{ borderTop: '2px solid #edf2f7', paddingTop: '20px', marginTop: '20px' }}>
              <p style={{ color: darkMode ? '#a0aec0' : '#718096', fontWeight: '600', marginBottom: '15px' }}>Retrouvez-moi sur :</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <a href="https://github.com/saleck763" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', backgroundColor: '#1a202c', color: '#fff', borderRadius: '20px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>🐙 GitHub</a>
                <a href="https://wa.me/22241193520" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', backgroundColor: '#25D366', color: '#fff', borderRadius: '20px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>💬 WhatsApp</a>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}

export default App;