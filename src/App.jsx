import React, { useState } from 'react';
import saleckImg from './saleck.jpeg';

function App() {
  // إدارة حالة الصفحة النشطة (الافتراضية هي الرئيسية 'accueil')
  const [activeTab, setActiveTab] = useState('accueil');

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

  // دالة مساعدة لتنسيق أزرار التنقل (Navbar) حسب الصفحة النشطة
  const tabStyle = (tabName) => ({
    padding: '10px 20px',
    backgroundColor: activeTab === tabName ? '#007acc' : 'transparent',
    color: activeTab === tabName ? '#fff' : '#4a5568',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease'
  });

  return (
    <div style={{
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      direction: 'ltr',
      backgroundColor: '#f0f4f8',
      color: '#2d3748',
      minHeight: '100vh',
      padding: '20px'
    }}>
      
      {/* 1. HEADER (ثابت في كل الصفحات ليعرف من أنت) */}
      <header style={{
        textAlign: 'center',
        marginBottom: '30px',
        background: 'linear-gradient(135deg, #007acc, #005299)',
        color: '#fff',
        padding: '30px 20px',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,122,204,0.2)'
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

      {/* 2. شريط التنقل الجديد (NAVIGATION NAVBAR) */}
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '30px',
        maxWidth: '600px',
        margin: '0 auto 30px auto',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
      }}>
        <button style={tabStyle('accueil')} onClick={() => setActiveTab('accueil')}>Accueil</button>
        <button style={tabStyle('competences')} onClick={() => setActiveTab('competences')}>Compétences</button>
        <button style={tabStyle('projets')} onClick={() => setActiveTab('projets')}>Projets</button>
        <button style={tabStyle('contact')} onClick={() => setActiveTab('contact')}>Contact</button>
      </nav>

      {/* CONTAINER PRINCIPAL DYNAMIQUE */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* عرض صفحة: ACCUEIL */}
        {activeTab === 'accueil' && (
          <section style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#007acc', marginTop: '0', borderBottom: '2px solid #edf2f7', paddingBottom: '10px' }}>🌟 À Propos de Moi</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#4a5568' }}>
              Actuellement en première année de l'enseignement supérieur en informatique, option **Développement des Systèmes d'Information (DSI)**. 
              Passionné par l'écosystème du code, j'aime résoudre des défis algorithmiques, structurer des bases de données robustes et concevoir des applications web réactives. Mon but est de bâtir des solutions logicielles performantes, épurées et centrées sur l'utilisateur.
            </p>
          </section>
        )}

   {/* عرض صفحة: COMPÉTENCES */}
        {activeTab === 'competences' && (
          <section style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#007acc', marginTop: '0', borderBottom: '2px solid #edf2f7', paddingBottom: '10px', marginBottom: '20px' }}>🛠️ Mes Compétences</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              {mySkills.map((skill, index) => (
                <div 
                  key={index} 
                  
                  // تأثير الـ Hover الذكي لبطاقات المهارات
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)'; // تكبير خفيف جداً وأنيق
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                    e.currentTarget.style.backgroundColor = '#eef6fc'; // تغيير لون الخلفية قليلاً عند الوقوف عليها
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = '#f7fafc';
                  }}

                  style={{ 
                    padding: '15px', 
                    backgroundColor: '#f7fafc', 
                    borderRadius: '8px', 
                    borderLeft: '4px solid #3182ce',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out' // حركة ناعمة وسريعة
                  }}
                >
                  <h4 style={{ margin: '0 0 5px 0', color: '#2b6cb0', fontSize: '1.1rem' }}>{skill.name}</h4>
                  <p style={{ margin: '0', color: '#718096', fontSize: '0.9rem' }}>{skill.level}</p>
                </div>
              ))}
            </div>
          </section>
        )}

       {/* عرض صفحة: PROJETS */}
        {activeTab === 'projets' && (
          <section style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#007acc', marginTop: '0', borderBottom: '2px solid #edf2f7', paddingBottom: '10px', marginBottom: '25px' }}>🚀 Mes Projets Récents</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {myProjects.map((project) => (
                <div 
                  key={project.id} 
                  
                  // الأسطر السحرية الـ 3 القادمة هي التي ستصنع التأثير الحركي فوراً عند مرور الماوس!
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
                  }}

                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#f7fafc', 
                    borderRadius: '8px', 
                    borderTop: '3px solid #007acc',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease' // هنا نجعل الحركة ناعمة وانسيابية
                  }}
                >
                  <h3 style={{ margin: '0 0 10px 0', color: '#1a202c' }}>{project.title}</h3>
                  <p style={{ margin: '0', color: '#4a5568', lineHeight: '1.6' }}>{project.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* عرض صفحة: CONTACT */}
        {activeTab === 'contact' && (
          <footer style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <h2 style={{ color: '#007acc', marginTop: '0' }}>📧 Contactez-moi</h2>
            <p style={{ color: '#4a5568', marginBottom: '20px' }}>Envoyez-moi un message directement depuis ce formulaire :</p>
            
            <form 
              action="https://formspree.io/f/xanyvwpd" // <--- تأكد من وضع رابط Formspree الخاص بك هنا
              method="POST"
              style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', margin: '0 auto 30px auto' }}
            >
              <input type="text" name="name" placeholder="Votre Nom" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '1rem' }} />
              <input type="email" name="email" placeholder="Votre Adresse Email" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '1rem' }} />
              <textarea name="message" placeholder="Votre Message..." rows="4" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '1rem', resize: 'none' }}></textarea>
              <button type="submit" style={{ padding: '12px 24px', backgroundColor: '#007acc', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,122,204,0.3)' }}>
                Envoyer le Message
              </button>
            </form>

            {/* 🌐 قسم الروابط الاجتماعية والمهنية الجديد */}
            <div style={{ borderTop: '2px solid #edf2f7', paddingTop: '20px', marginTop: '20px' }}>
              <p style={{ color: '#718096', fontWeight: '600', marginBottom: '15px' }}>Retrouvez-moi sur :</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                
                {/* رابط جيت هاب */}
                <a 
                  href="https://github.com/saleck763" // <--- ضع رابط حسابك في جيت هاب هنا بدقة
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#1a202c',
                    color: '#fff',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  🐙 GitHub
                </a>

                {/* رابط الواتساب للتواصل السريع */}
                <a 
                  href="https://wa.me/22241193520" // <--- ضع رقم هاتفك مكان الاكسات مع رمز الدولة بدون + أو أصفار (مثال: 22236XXXXXX)
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#25D366',
                    color: '#fff',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  💬 WhatsApp
                </a>

              </div>
            </div>

          </footer>
        )}

      </div>
    </div>
  );
}

export default App;