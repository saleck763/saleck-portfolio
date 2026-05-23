import React from 'react';

function App() {
  // Liste des projets définie dynamiquement en JavaScript
  const myProjects = [
    { 
      id: 1, 
      title: 'Makhzanak! (Votre Entrepôt)', 
      desc: 'Une solution SaaS cloud pour la gestion des stocks des entreprises et le suivi des inventaires avec précision.' 
    },
    { 
      id: 2, 
      title: 'DevTask Dashboard', 
      desc: 'Une application interactive construite avec React et Vite pour la gestion des tâches et des révisions durant les vacances.' 
    }
  ];

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      direction: 'ltr', // Alignement de gauche à droite pour le français
      backgroundColor: '#f4f7f6',
      color: '#333',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      
      {/* 1. SECTION HEADER */}
      <header style={{
        textAlign: 'center',
        marginBottom: '40px',
        borderBottom: '2px solid #007acc',
        paddingBottom: '20px'
      }}>
        <h1 style={{ color: '#007acc', fontSize: '2.5rem', margin: '0' }}>Salek sidiawbeck</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '10px' }}>
          Étudiant en DSI (Développement des Systèmes d'Information) | Développeur Web Full-Stack Passionné
        </p>
      </header>

      {/* 2. SECTION À PROPOS (ABOUT ME) */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto 30px auto',
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#007acc', marginTop: '0' }}>🌟 À Propos de Moi</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          Actuellement étudiant en première année informatique, spécialité Développement des Systèmes d'Information (DSI). 
          Passionné par la résolution de problèmes complexes, la conception des bases de données et la création d'interfaces 
          utilisatrices rapides et interactives. Mon objectif est de transformer des idées logiques en logiciels performants avec un code propre et optimisé.
        </p>
      </section>

      {/* 3. SECTION MES PROJETS */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#007acc', marginTop: '0', marginBottom: '20px' }}>🚀 Mes Projets Académiques & Personnels</h2>
        
        <div style={{ display: 'grid', gap: '20px' }}>
          {myProjects.map((project) => (
            <div key={project.id} style={{
              padding: '15px',
              borderLeft: '4px solid #007acc', // Bordure à gauche pour le style LTR
              backgroundColor: '#fafafa',
              borderRadius: '4px'
            }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{project.title}</h3>
              <p style={{ margin: '0', color: '#555', lineHeight: '1.6' }}>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;