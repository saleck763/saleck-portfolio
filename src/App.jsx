import React from 'react';

function App() {
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

  // Liste des compétences (Skills)
  const mySkills = [
    { name: 'Java & Python', level: 'Forte base en Algorithmique' },
    { name: 'SQL & MySQL', level: 'Conception de Bases de Données' },
    { name: 'HTML5 & CSS3', level: 'Création d\'interfaces Web' },
    { name: 'JavaScript & React', level: 'Développement Web Moderne' }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      direction: 'ltr',
      backgroundColor: '#f0f4f8',
      color: '#2d3748',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      
      {/* 1. HEADER */}
      <header style={{
        textAlign: 'center',
        marginBottom: '50px',
        background: 'linear-gradient(135deg, #007acc, #005299)',
        color: '#fff',
        padding: '40px 20px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,122,204,0.2)'
      }}>
        <h1 style={{ fontSize: '2.8rem', margin: '0', fontWeight: '700', letterSpacing: '1px' }}>Salek Sidiawbeck</h1>
        <p style={{ fontSize: '1.25rem', color: '#e2e8f0', marginTop: '12px', fontWeight: '300' }}>
          Étudiant en DSI (Développement des Systèmes d'Information) | Futur Développeur Full-Stack
        </p>
      </header>

      {/* CONTAINER PRINCIPAL */}
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* 2. À PROPOS DE MOI */}
        <section style={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          marginBottom: '35px'
        }}>
          <h2 style={{ color: '#007acc', marginTop: '0', borderBottom: '2px solid #edf2f7', paddingBottom: '10px' }}>🌟 À Propos de Moi</h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#4a5568' }}>
            Actuellement en première année de l'enseignement supérieur en informatique, option **Développement des Systèmes d'Information (DSI)**. 
            Passionné par l'écosystème du code, j'aime résoudre des défis algorithmiques, structurer des bases de données robustes et concevoir des applications web réactives. Mon but est de bâtir des solutions logicielles performantes, épurées et centrées sur l'utilisateur.
          </p>
        </section>

        {/* 3. MES COMPÉTENCES */}
        <section style={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          marginBottom: '35px'
        }}>
          <h2 style={{ color: '#007acc', marginTop: '0', borderBottom: '2px solid #edf2f7', paddingBottom: '10px', marginBottom: '20px' }}>🛠️ Mes Compétences</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {mySkills.map((skill, index) => (
              <div key={index} style={{
                padding: '15px',
                backgroundColor: '#f7fafc',
                borderRadius: '8px',
                borderLeft: '4px solid #3182ce',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                <h4 style={{ margin: '0 0 5px 0', color: '#2b6cb0', fontSize: '1.1rem' }}>{skill.name}</h4>
                <p style={{ margin: '0', color: '#718096', fontSize: '0.9rem' }}>{skill.level}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. MES PROJETS */}
        <section style={{
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          marginBottom: '35px'
        }}>
          <h2 style={{ color: '#007acc', marginTop: '0', borderBottom: '2px solid #edf2f7', paddingBottom: '10px', marginBottom: '25px' }}>🚀 Mes Projets Récents</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {myProjects.map((project) => (
              <div key={project.id} style={{
                padding: '20px',
                backgroundColor: '#f7fafc',
                borderRadius: '8px',
                borderTop: '3px solid #007acc',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#1a202c' }}>{project.title}</h3>
                <p style={{ margin: '0', color: '#4a5568', lineHeight: '1.6' }}>{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

  {/* 5. CONTACT FORM (SOLUTION PROFESSIONNELLE) */}
        <footer style={{
          textAlign: 'center',
          padding: '30px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ color: '#007acc', marginTop: '0' }}>📧 Contactez-moi</h2>
          <p style={{ color: '#4a5568', marginBottom: '20px' }}>
            Envoyez-moi un message directement depuis ce formulaire :
          </p>
          
          <form 
            action="https://formspree.io/f/xkoezvwo" // <--- ضع رابط Formspree الخاص بك هنا
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', margin: '0 auto' }}
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Votre Nom" 
              required 
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '1rem' }}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Votre Adresse Email" 
              required 
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '1rem' }}
            />
            <textarea 
              name="message" 
              placeholder="Votre Message..." 
              rows="4" 
              required 
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '1rem', resize: 'none' }}
            ></textarea>
            
            <button type="submit" style={{
              padding: '12px 24px',
              backgroundColor: '#007acc',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,122,204,0.3)'
            }}>
              Envoyer le Message
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
}

export default App;