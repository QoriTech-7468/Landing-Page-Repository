  function applyTranslation(lang) {
         const elements = document.querySelectorAll('[data-i18n]');
          elements.forEach(el => {
           const key = el.getAttribute('data-i18n');
           let text = getNestedTranslation(translation[lang], key);
    
            // Manejar casos especiales donde el texto es un array (como en las listas)
           if (Array.isArray(text)) {
           const parts = key.split('.');
           const index = parseInt(parts[parts.length - 1], 10) - 1; // Obtener el índice (restar 1)
           text = text[index] || '';
              }

             if (text) {
             el.textContent = text;
                 }
        });
          } 

// Función auxiliar para obtener el valor de una clave anidada (ej. 'hero.title')
function getNestedTranslation(obj, key) {
  return key.split('.').reduce((o, i) => o ? o[i] : '', obj);
}

// Asignar el idioma predeterminado y escuchar los cambios
document.addEventListener('DOMContentLoaded', () => {
    // Establecer el idioma inicial (por ejemplo, el idioma del navegador o un predeterminado)
    const initialLang = 'en'; // o 'es'
    document.documentElement.lang = initialLang;
    applyTranslation(initialLang);

    // Escuchar clics en los botones de idioma
    document.getElementById('lang-en').addEventListener('click', () => {
        document.documentElement.lang = 'en';
        applyTranslation('en');
    });

    document.getElementById('lang-es').addEventListener('click', () => {
        document.documentElement.lang = 'es';
        applyTranslation('es');
    });
});

const translation = {
  en: {
    navbar: {
      home: 'Home',
      feature: 'Feature',
      about: 'About Us',
      plans: 'Plans',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      getstarted: 'Get started'
    },
    hero: {
      title: 'Welcome to Rutana',
      subtitle: '-Present by Qoritech-',
      description: 'Planing, delegating and report!\nOur platform helps your company with planing the best routes, simplify the rol assignment and get a full report of the whole situation.\nGet on the rode and make your company the fastest there is!',
      btnStart: 'Try free trial'
    },
    feaTure: {
      title: 'Meet our value',
      description: 'Take the control of your business',
      cards: {
        smartRoute: {
          title: 'Smart Route Management',
          text: 'Optimize routes in real time considering traffic, weather, and road conditions.'
        },
        tracking: {
          title: "Tracking",
          text: "Allow companies how their teams are performing during the day"
        },
        installC: {
          title: "Instant Communication",
          text: "Direct channel between drivers, managers, and clients to coordinate changes or solve issues."
        }
      }
    },
    aboutUS: {
      title: 'About Us',
      cards: {
        help: {
          title: 'How We Help',
          text: 'We empower transport companies and drivers with a smart, easy-to-use platform that simplifies logistics, ensures real-time visibility, and improves communication with clients. Our app reduces inefficiencies, saves time, and builds trust through transparent operation'
        },
        mission: {
          title: "Mission & Vision",
          text: "Our mission is to simplify and optimize transportation by providing drivers and companies with efficient, transparent, and reliable digital tools. With the vision of becoming the leading transportation ecosystem in Latin America, we aim to connect people, businesses, and products through innovative, technology-driven solutions."
        },
        value: {
          title: "Value Proposition",
          text: "Our value lies in delivering smarter logistics, real-time visibility, and cost savings, while strengthening trust and efficiency across the entire supply chain. We help transporters and companies streamline their operations, reduce complexity, and ensure seamless communication with clients."
        }
      }
    },
    team: {
      title: "Our Team",
      description: "Learn more about our partners",
      role: '- Software Engineer -',
      julio: "Jesus Castillo",
      gabriela: "Yaku Guzman",
      jahaziel: "Christopher Costa",
      williams: "Ingrid Medina",
      yaku: "Santiago Gordillo"
    },
    pLans: {
      title: "Choose Your Plan",
      description: "Rutana has the right plan for you.",
      cards: {
        free: {
          title: "Free",
          text: "$0/month",
          features: [
            "Limit 10 users",
            "Basic route management",
            "Real-time tracking",
            "Email support"
          ],
          btnstarted: 'Get started'
        },
        professional: {
          title: "Professional Plan",
          text: "$50/month",
          features: [
            "50 users available",
            "All features from Free Plan",
            "Detailed reports",
            "Priority customer support"
          ],
          btnstarted: 'Get started'
        },
        enterprise: {
          title: "Enterprise Plan",
          text: "Contact us",
          features: [
            "Users according to your needs",
            "All features",
            "Dedicated account manager",
            "Premium support"
          ],
          btnstarted: 'Get started'
        }
      }
    },
    testimonials: {
      title: 'Testimonials',
      description: 'Hear what our users say about how Restock has transformed their business, helping them manage inventory smarter and reach their goals with greater peace of mind and confidence.',
      cards: {
        '1': {
          comment: '"As a driver, I can focus on the road instead of worrying about planning. Everything is mapped out for me."',
          name: 'David R., Driver',
          role: 'Professional Driver' // NUEVO
        },
        '2': {
          comment: '"Simple, smart, and efficient. Exactly what our transport business needed."',
          name: 'Emily P., Manager',
          role: 'Operations Manager' // NUEVO
        }
      }
    },
    faq: {
      title: 'Frequently asked Questions',
      subtitle: 'FAQ Forum',
      items: {
        '1': {
          question: 'What can I do?',
          answer: 'With Rutana, you can optimize delivery routes, track vehicles in real-time, manage driver assignments, analyze performance metrics, and communicate seamlessly with your team and customers.'
        },
        '2': {
          question: 'Who is Rutana for?', // MODIFICADO
          answer: 'Our platform serves logistics managers, delivery companies, transportation coordinators, fleet operators, and businesses of all sizes that need efficient route management and tracking solutions.' // MODIFICADO
        },
        '3': {
          question: 'What industries does Rutana serve?', // MODIFICADO
          answer: 'Whether you\'re in e-commerce, food delivery, field services, or traditional logistics, Rutana adapts to your specific industry needs and workflow requirements.' // MODIFICADO
        },
        '4': {
          question: 'Does Rutana integrate with my existing systems?', // NUEVO
          answer: 'Our solution integrates with existing systems and provides customizable features to match your operational processes and business objectives.' // NUEVO
        }
      }
    },
    footer: {
      title: 'Rutana', // NUEVO
      topLeftText: 'Rutana was created for the new ways we live and work. We make the world of transportation better', // MODIFICADO
      sectionsTitle: 'Pages',
      sections: {
        home: 'Home',
        feature: 'Benefits', // MODIFICADO
        about: 'About Us',
        plans: 'Plans',
        testimonials: 'Testimonials',
        faq: 'Contact' // MODIFICADO
      },
      socialTitle: 'Social media', // MODIFICADO
      social: {
        facebook: '@Rutana',
        instagram: '@Rutana',
        twitter: '@Rutana',
        linkedin: '@Rutana'
      },
      bottom: {
        privacyPolicy: 'Privacy Policy',
        terms: 'Terms of Services',
        rights: '©2025 Qoritech LLC.'
      }
    }
  },

  es: {
    navbar: {
      home: 'Inicio',
      feature: 'Caracteristicas',
      about: 'Nosotros',
      plans: 'Planes',
      testimonials: 'Testimonios',
      faq: 'Preguntas',
      getstarted: 'Comenzar'
    },
    hero: {
      title: 'Bienvenido a Rutana',
      subtitle: '-Presentado por Qoritech-',
      description: '¡Planificación, delegación e informes!\nNuestra plataforma ayuda a tu empresa a planificar las mejores rutas, simplificar la asignación de roles y obtener un informe completo de toda la situación.\n¡Ponte en marcha y haz que tu empresa sea la más rápida!',
      btnStart: 'Prueba gratuita'
    },
    feaTure: {
      title: 'Conoce nuestro valor',
      description: 'Toma el control de tu negocio',
      cards: {
        smartRoute: {
          title: 'Gestión Inteligente de Rutas',
          text: 'Optimiza las rutas en tiempo real considerando el tráfico, el clima y las condiciones de las vías.'
        },
        tracking: {
          title: "Seguimiento",
          text: "Permite a las empresas ver cómo se desempeñan sus equipos durante el día."
        },
        installC: {
          title: "Comunicación Instantánea",
          text: "Canal directo entre conductores, gerentes y clientes para coordinar cambios o resolver problemas."
        }
      }
    },
    aboutUS: {
      title: 'Sobre Nosotros',
      cards: {
        help: {
          title: 'Cómo Ayudamos',
          text: 'Empoderamos a las empresas de transporte y a los conductores con una plataforma inteligente y fácil de usar que simplifica la logística, garantiza visibilidad en tiempo real y mejora la comunicación con los clientes. Nuestra app reduce ineficiencias, ahorra tiempo y genera confianza mediante una operación transparente.'
        },
        mission: {
          title: "Misión & Visión",
          text: "Nuestra misión es simplificar y optimizar el transporte proporcionando a conductores y empresas herramientas digitales eficientes, transparentes y confiables. Con la visión de convertirnos en el ecosistema de transporte líder en Latinoamérica, buscamos conectar personas, negocios y productos mediante soluciones innovadoras impulsadas por la tecnología."
        },
        value: {
          title: "Propuesta de Valor",
          text: "Nuestro valor radica en ofrecer logística más inteligente, visibilidad en tiempo real y ahorro de costos, al mismo tiempo que fortalecemos la confianza y la eficiencia en toda la cadena de suministro. Ayudamos a transportistas y empresas a agilizar sus operaciones, reducir la complejidad y asegurar una comunicación fluida con los clientes."
        }
      }
    },
    team: {
      title: "Nuestro Equipo",
      description: "Conoce más sobre nuestros colaboradores",
      role: '- Ingeniero de Software -',
      julio: "Jesús Castillo",
      gabriela: "Yaku Guzmán",
      jahaziel: "Christopher Costa",
      williams: "Ingrid Medina",
      yaku: "Santiago Gordillo"
    },
    pLans: {
      title: "Elige Tu Plan",
      description: "Rutana tiene el plan adecuado para ti.",
      cards: {
        free: {
          title: "Gratis",
          text: "$0/mes",
          features: [
            "Límite de 10 usuarios",
            "Gestión básica de rutas",
            "Seguimiento en tiempo real",
            "Soporte por correo electrónico"
          ],
          btnstarted: 'Empezar'
        },
        professional: {
          title: "Plan Profesional",
          text: "$50/mes",
          features: [
            "50 usuarios disponibles",
            "Todas las funciones del Plan Gratis",
            "Reportes detallados",
            "Soporte prioritario al cliente"
          ],
          btnstarted: 'Empezar'
        },
        enterprise: {
          title: "Plan Empresarial",
          text: "Contáctanos",
          features: [
            "Usuarios según tus necesidades",
            "Todas las funciones",
            "Gerente de cuenta dedicado",
            "Soporte premium"
          ],
          btnstarted: 'Empezar'
        }
      }
    },
    testimonials: {
      title: 'Testimonios',
      description: 'Escucha lo que nuestros usuarios dicen sobre cómo Restock ha transformado su negocio, ayudándolos a gestionar el inventario de manera más inteligente y alcanzar sus objetivos con mayor tranquilidad y confianza.',
      cards: {
        '1': {
          comment: '"Como conductor, puedo concentrarme en la carretera en lugar de preocuparme por la planificación. Todo está mapeado para mí."',
          name: 'David R., Conductor',
          role: 'Conductor Profesional' // NUEVO
        },
        '2': {
          comment: '"Simple, inteligente y eficiente. Exactamente lo que nuestro negocio de transporte necesitaba."',
          name: 'Emily P., Gerente',
          role: 'Gerente de Operaciones' // NUEVO
        }
      }
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Foro de Preguntas',
      items: {
        '1': {
          question: '¿Qué puedo hacer?',
          answer: 'Con Rutana, puedes optimizar las rutas de entrega, rastrear vehículos en tiempo real, gestionar asignaciones de conductores, analizar métricas de rendimiento y comunicarte sin problemas con tu equipo y clientes.'
        },
        '2': {
          question: '¿Para quién es Rutana?', // MODIFICADO
          answer: 'Nuestra plataforma es para gerentes de logística, empresas de mensajería, coordinadores de transporte, operadores de flotas y empresas de todos los tamaños que necesitan soluciones eficientes de gestión y seguimiento de rutas.' // MODIFICADO
        },
        '3': {
          question: '¿A qué industrias sirve Rutana?', // MODIFICADO
          answer: 'Ya sea que te dediques al comercio electrónico, la entrega de alimentos, servicios de campo o logística tradicional, Rutana se adapta a las necesidades específicas de tu industria y a los requisitos de tu flujo de trabajo.' // MODIFICADO
        },
        '4': {
          question: '¿Se integra Rutana con mis sistemas existentes?', // NUEVO
          answer: 'Nuestra solución se integra con los sistemas existentes y proporciona características personalizables para que coincidan con tus procesos operativos y objetivos comerciales.' // NUEVO
        }
      }
    },
    footer: {
      title: 'Rutana', // NUEVO
      topLeftText: 'Rutana fue creado para las nuevas formas en que vivimos y trabajamos. Hacemos que el mundo del transporte sea mejor', // MODIFICADO
      sectionsTitle: 'Páginas',
      sections: {
        home: 'Inicio',
        feature: 'Beneficios', // MODIFICADO
        about: 'Sobre Nosotros',
        plans: 'Planes',
        testimonials: 'Testimonios',
        faq: 'Contacto' // MODIFICADO
      },
      socialTitle: 'Redes Sociales',
      social: {
        facebook: '@Rutana',
        instagram: '@Rutana',
        twitter: '@Rutana',
        linkedin: '@Rutana'
      },
      bottom: {
        privacyPolicy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
        rights: '©2025 Qoritech LLC.'
      }
    }
  }
};