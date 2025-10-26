export interface Translation {
  navigation: {
    home: string
    about: string
    skills: string
    projects: string
    blogs: string
    contact: string
    feedbacks: string
    lightMode: string
    darkMode: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    learnMore: string
    techStack: string
  }
  about: {
    title: string
    subtitle: string
    profileSummary: string
    profileDescription: string
    experience: string
    education: string
    certifications: string
    bilingual: string
    qualityAssurance: string
    technicalSupport: string
    softwareTesting: string
  }
  skills: {
    title: string
    subtitle: string
    frontendDevelopment: string
    backendDevelopment: string
    designUx: string
    leadershipManagement: string
    toolsTechnologies: string
  }
  projects: {
    title: string
    subtitle: string
    viewDetails: string
    viewCode: string
    liveDemo: string
    projectOverview: string
    keyHighlights: string
    technologiesUsed: string
    projectDemo: string
    playDemo: string
    category: {
      desktopApplication: string
      webApplication: string
      mobileDesktopApplication: string
      designProject: string
    }
  }
  blog: {
    title: string
    subtitle: string
    searchPosts: string
    all: string
    readMore: string
    readFullArticle: string
    minRead: string
    noPosts: string
  }
  contact: {
    title: string
    subtitle: string
    sendMessage: string
    name: string
    email: string
    subject: string
    message: string
    sendButton: string
    sending: string
    contactInformation: string
    connectWithMe: string
    currentlyAvailable: string
    availabilityDescription: string
    viewResume: string
    scheduleCall: string
    messageSent: string
    messageSentDescription: string
  }
  feedback: {
    title: string
    subtitle: string
    testimonials: string
    submitFeedback: string
    adminPanel: string
    shareExperience: string
    company: string
    role: string
    rating: string
    yourFeedback: string
    submitButton: string
    adminAccess: string
    adminPassword: string
    accessAdmin: string
    feedbackManagement: string
    logout: string
    pendingReview: string
    approved: string
    totalFeedback: string
    approve: string
    reject: string
    noTestimonials: string
    noPendingFeedback: string
    feedbackSubmitted: string
    feedbackSubmittedDescription: string
    adminAccessGranted: string
    adminAccessDescription: string
    accessDenied: string
    invalidPassword: string
    feedbackApproved: string
    feedbackRejected: string
    feedbackApprovedDescription: string
    feedbackRejectedDescription: string
    // Placeholders
    namePlaceholder: string
    emailPlaceholder: string
    companyPlaceholder: string
    rolePlaceholder: string
    messagePlaceholder: string
  }
  common: {
    loading: string
    error: string
    success: string
    cancel: string
    save: string
    edit: string
    delete: string
    confirm: string
  }
}

export const translations: Record<string, Translation> = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      blogs: "Blogs",
      contact: "Contact",
      feedbacks: "Feedbacks",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
    },
    hero: {
      title: "Rhailyn Jane Cona",
      subtitle: "Software Development Student & QA Engineer",
      description:
        "Dedicated Software Development student with QA engineering and technical support background. Experienced in defect discovery, cross-team collaboration, and delivering high‑quality software. Bilingual (Filipino/English) and committed to continuous learning and innovation.",
      learnMore: "Learn More About Me",
      techStack: "Technologies I work with:",
    },
    about: {
      title: "About Me",
      subtitle:
        "Results-driven Software Development student with a strong foundation in QA engineering, technical support, and electronics—focused on building reliable, user-centered solutions.",
      profileSummary: "Profile Summary",
      profileDescription:
        "Experienced in identifying and resolving software defects, collaborating across teams, and improving product quality. Adaptable in dynamic environments with a passion for continuous learning and innovation.",
      experience: "Professional Experience",
      education: "Education",
      certifications: "Certifications & Achievements",
      bilingual: "Bilingual (Filipino & English)",
      qualityAssurance: "Quality Assurance",
      technicalSupport: "Technical Support",
      softwareTesting: "Software Testing",
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "A comprehensive overview of my technical skills and professional competencies",
      frontendDevelopment: "Frontend Development",
      backendDevelopment: "Backend Development",
      designUx: "Design & UX",
      leadershipManagement: "Leadership & Management",
      toolsTechnologies: "Tools & Technologies",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A showcase of my recent work and technical projects demonstrating various skills and technologies",
      viewDetails: "View Details",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      projectOverview: "Project Overview",
      keyHighlights: "Key Highlights",
      technologiesUsed: "Technologies Used",
      projectDemo: "Project Demo",
      playDemo: "Play Demo Video",
      category: {
        desktopApplication: "Desktop Application",
        webApplication: "Web Application",
        mobileDesktopApplication: "Mobile/Desktop Application",
        designProject: "Design Project",
      },
    },
    blog: {
      title: "Blog & Insights",
      subtitle: "Sharing my experiences, learnings, and insights from my journey in software development",
      searchPosts: "Search posts...",
      all: "all",
      readMore: "Read More",
      readFullArticle: "Read Full Article",
      minRead: "min read",
      noPosts: "No posts found matching your criteria.",
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology",
      sendMessage: "Send Me a Message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      sendButton: "Send Message",
      sending: "Sending...",
      contactInformation: "Contact Information",
      connectWithMe: "Connect With Me",
      currentlyAvailable: "Currently Available",
      availabilityDescription:
        "I'm actively seeking new opportunities in software development and QA engineering. Expected graduation: March 2026",
      viewResume: "View Resume",
      scheduleCall: "Schedule Call",
      messageSent: "Message Sent!",
      messageSentDescription: "Thank you for your message. I'll get back to you soon!",
    },
    feedback: {
      title: "Testimonials & Feedback",
      subtitle: "What colleagues and clients say about working with me",
      testimonials: "Testimonials",
      submitFeedback: "Submit Feedback",
      adminPanel: "Admin Panel",
      shareExperience: "Share Your Experience",
      company: "Company",
      role: "Role",
      rating: "Rating",
      yourFeedback: "Your Feedback",
      submitButton: "Submit Feedback",
      adminAccess: "Admin Access",
      adminPassword: "Admin Password",
      accessAdmin: "Access Admin Panel",
      feedbackManagement: "Feedback Management",
      logout: "Logout",
      pendingReview: "Pending Review",
      approved: "Approved",
      totalFeedback: "Total Feedback",
      approve: "Approve",
      reject: "Reject",
      noTestimonials: "No testimonials available yet.",
      noPendingFeedback: "No pending feedback to review.",
      feedbackSubmitted: "Feedback Submitted!",
      feedbackSubmittedDescription: "Thank you for your feedback. It will be reviewed and published soon.",
      adminAccessGranted: "Admin Access Granted",
      adminAccessDescription: "You can now manage feedback submissions.",
      accessDenied: "Access Denied",
      invalidPassword: "Invalid admin password.",
      feedbackApproved: "Feedback Approved",
      feedbackRejected: "Feedback Rejected",
      feedbackApprovedDescription: "The feedback has been approved and published.",
      feedbackRejectedDescription: "The feedback has been rejected.",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your.email@example.com",
      companyPlaceholder: "Your company",
      rolePlaceholder: "Your job title",
      messagePlaceholder: "Share your experience working with me...",
    },
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      confirm: "Confirm",
    },
  },
  fil: {
    navigation: {
      home: "Tahanan",
      about: "Tungkol",
      skills: "Kakayahan",
      projects: "Mga Proyekto",
      blogs: "Mga Blog",
      contact: "Makipag-ugnayan",
      feedbacks: "Mga Puna",
      lightMode: "Maliwanag na Mode",
      darkMode: "Madilim na Mode",
    },
    hero: {
      title: "Rhailyn Jane Cona",
      subtitle: "Estudyante ng Software Development at QA Engineer",
      description: "Masigasig sa paglikha ng mga makabagong solusyon at pagsisiguro ng mataas na kalidad ng software",
      learnMore: "Alamin Pa Ako",
      techStack: "Mga teknolohiyang ginagamit ko:",
    },
    about: {
      title: "Tungkol Sa Akin",
      subtitle:
        "Dedikado at resulta-driven na estudyante ng Software Development na may matatag na pundasyon sa technical support, Software QA Engineering, at electronics engineering.",
      profileSummary: "Buod ng Profile",
      profileDescription:
        "May karanasan sa pagtukoy at paglutas ng mga software defects sa pamamagitan ng epektibong teamwork at pakikipagtulungan, na nagsisiguro ng paghahatid ng mataas na kalidad na mga solusyon. Mahusay sa pag-adapt sa mga dynamic na work environments, na may hilig sa patuloy na pag-aaral at innovation.",
      experience: "Propesyonal na Karanasan",
      education: "Edukasyon",
      certifications: "Mga Sertipiko at Tagumpay",
      bilingual: "Dalawang Wika (Filipino at English)",
      qualityAssurance: "Quality Assurance",
      technicalSupport: "Technical Support",
      softwareTesting: "Software Testing",
    },
    skills: {
      title: "Mga Kakayahan at Dalubhasa",
      subtitle: "Komprehensibong pangkalahatang-ideya ng aking mga technical skills at propesyonal na kakayahan",
      frontendDevelopment: "Frontend Development",
      backendDevelopment: "Backend Development",
      designUx: "Design at UX",
      leadershipManagement: "Leadership at Management",
      toolsTechnologies: "Mga Tools at Teknolohiya",
    },
    projects: {
      title: "Mga Pangunahing Proyekto",
      subtitle:
        "Pagpapakita ng aking mga kamakailang gawa at technical projects na nagpapakita ng iba't ibang skills at teknolohiya",
      viewDetails: "Tingnan ang Detalye",
      viewCode: "Tingnan ang Code",
      liveDemo: "Live Demo",
      projectOverview: "Pangkalahatang-ideya ng Proyekto",
      keyHighlights: "Mga Pangunahing Highlight",
      technologiesUsed: "Mga Teknolohiyang Ginamit",
      projectDemo: "Demo ng Proyekto",
      playDemo: "I-play ang Demo Video",
      category: {
        desktopApplication: "Desktop Application",
        webApplication: "Web Application",
        mobileDesktopApplication: "Mobile/Desktop Application",
        designProject: "Design Project",
      },
    },
    blog: {
      title: "Blog at Mga Insight",
      subtitle:
        "Pagbabahagi ng aking mga karanasan, natutuhan, at mga insight mula sa aking paglalakbay sa software development",
      searchPosts: "Maghanap ng mga post...",
      all: "lahat",
      readMore: "Basahin Pa",
      readFullArticle: "Basahin ang Buong Artikulo",
      minRead: "minutong pagbasa",
      noPosts: "Walang nahanap na mga post na tumugma sa inyong criteria.",
    },
    contact: {
      title: "Makipag-ugnayan",
      subtitle:
        "Laging bukas ako sa pag-usapan ng mga bagong oportunidad, pakikipagtulungan, o simpleng pag-uusap tungkol sa teknolohiya",
      sendMessage: "Magpadala ng Mensahe",
      name: "Pangalan",
      email: "Email",
      subject: "Paksa",
      message: "Mensahe",
      sendButton: "Ipadala ang Mensahe",
      sending: "Nagpapadala...",
      contactInformation: "Impormasyon sa Pakikipag-ugnayan",
      connectWithMe: "Makipag-ugnayan Sa Akin",
      currentlyAvailable: "Kasalukuyang Available",
      availabilityDescription:
        "Aktibong naghahanap ako ng mga bagong oportunidad sa software development at QA engineering. Inaasahang graduation: Marso 2026",
      viewResume: "Tingnan ang Resume",
      scheduleCall: "Mag-schedule ng Tawag",
      messageSent: "Naipadala ang Mensahe!",
      messageSentDescription: "Salamat sa inyong mensahe. Magsasagot ako sa lalong madaling panahon!",
    },
    feedback: {
      title: "Mga Testimonial at Puna",
      subtitle: "Ano ang sinasabi ng mga kasamahan at kliyente tungkol sa pakikipagtrabaho sa akin",
      testimonials: "Mga Testimonial",
      submitFeedback: "Magpadala ng Puna",
      adminPanel: "Admin Panel",
      shareExperience: "Ibahagi ang Inyong Karanasan",
      company: "Kumpanya",
      role: "Tungkulin",
      rating: "Rating",
      yourFeedback: "Inyong Puna",
      submitButton: "Ipadala ang Puna",
      adminAccess: "Admin Access",
      adminPassword: "Admin Password",
      accessAdmin: "I-access ang Admin Panel",
      feedbackManagement: "Pamamahala ng Puna",
      logout: "Mag-logout",
      pendingReview: "Naghihintay ng Review",
      approved: "Na-approve",
      totalFeedback: "Kabuuang Puna",
      approve: "Aprubahan",
      reject: "Tanggihan",
      noTestimonials: "Wala pang available na mga testimonial.",
      noPendingFeedback: "Walang pending na puna na dapat i-review.",
      feedbackSubmitted: "Naipadala ang Puna!",
      feedbackSubmittedDescription: "Salamat sa inyong puna. Ire-review at ipa-publish ito sa lalong madaling panahon.",
      adminAccessGranted: "Nabigyan ng Admin Access",
      adminAccessDescription: "Maaari na ninyong pamahalaan ang mga feedback submissions.",
      accessDenied: "Tinanggihan ang Access",
      invalidPassword: "Mali ang admin password.",
      feedbackApproved: "Na-approve ang Puna",
      feedbackRejected: "Tinanggihan ang Puna",
      feedbackApprovedDescription: "Na-approve at na-publish na ang puna.",
      feedbackRejectedDescription: "Tinanggihan ang puna.",
      namePlaceholder: "Inyong buong pangalan",
      emailPlaceholder: "inyong.email@halimbawa.com",
      companyPlaceholder: "Inyong kumpanya",
      rolePlaceholder: "Inyong tungkulin sa trabaho",
      messagePlaceholder: "Ibahagi ang inyong karanasan sa pakikipagtrabaho sa akin...",
    },
    common: {
      loading: "Naglo-load...",
      error: "Error",
      success: "Tagumpay",
      cancel: "Kanselahin",
      save: "I-save",
      edit: "I-edit",
      delete: "Tanggalin",
      confirm: "Kumpirmahin",
    },
  },
  fr: {
    navigation: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      blogs: "Blogs",
      contact: "Contact",
      feedbacks: "Commentaires",
      lightMode: "Mode Clair",
      darkMode: "Mode Sombre",
    },
    hero: {
      title: "Rhailyn Jane Cona",
      subtitle: "Étudiante en Développement Logiciel et Ingénieure QA",
      description:
        "Passionnée par la création de solutions innovantes et l'assurance de livraison de logiciels de haute qualité",
      learnMore: "En Savoir Plus Sur Moi",
      techStack: "Technologies avec lesquelles je travaille:",
    },
    about: {
      title: "À Propos de Moi",
      subtitle:
        "Étudiante dévouée et axée sur les résultats en développement logiciel avec une base solide en support technique, ingénierie QA logicielle et ingénierie électronique.",
      profileSummary: "Résumé du Profil",
      profileDescription:
        "Expérimentée dans l'identification et la résolution des défauts logiciels grâce à un travail d'équipe et une collaboration efficaces, assurant la livraison de solutions de haute qualité. Habile à s'adapter aux environnements de travail dynamiques, avec une passion pour l'apprentissage continu et l'innovation.",
      experience: "Expérience Professionnelle",
      education: "Éducation",
      certifications: "Certifications et Réalisations",
      bilingual: "Bilingue (Filipino et Anglais)",
      qualityAssurance: "Assurance Qualité",
      technicalSupport: "Support Technique",
      softwareTesting: "Tests Logiciels",
    },
    skills: {
      title: "Compétences et Expertise",
      subtitle: "Un aperçu complet de mes compétences techniques et compétences professionnelles",
      frontendDevelopment: "Développement Frontend",
      backendDevelopment: "Développement Backend",
      designUx: "Design et UX",
      leadershipManagement: "Leadership et Gestion",
      toolsTechnologies: "Outils et Technologies",
    },
    projects: {
      title: "Projets Vedettes",
      subtitle:
        "Une vitrine de mes travaux récents et projets techniques démontrant diverses compétences et technologies",
      viewDetails: "Voir les Détails",
      viewCode: "Voir le Code",
      liveDemo: "Démo en Direct",
      projectOverview: "Aperçu du Projet",
      keyHighlights: "Points Clés",
      technologiesUsed: "Technologies Utilisées",
      projectDemo: "Démo du Projet",
      playDemo: "Lire la Vidéo Démo",
      category: {
        desktopApplication: "Application de Bureau",
        webApplication: "Application Web",
        mobileDesktopApplication: "Application Mobile/Bureau",
        designProject: "Projet de Design",
      },
    },
    blog: {
      title: "Blog et Insights",
      subtitle: "Partager mes expériences, apprentissages et insights de mon parcours en développement logiciel",
      searchPosts: "Rechercher des articles...",
      all: "tous",
      readMore: "Lire Plus",
      readFullArticle: "Lire l'Article Complet",
      minRead: "min de lecture",
      noPosts: "Aucun article trouvé correspondant à vos critères.",
    },
    contact: {
      title: "Entrer en Contact",
      subtitle:
        "Je suis toujours ouverte à discuter de nouvelles opportunités, collaborations, ou simplement avoir une conversation sur la technologie",
      sendMessage: "M'Envoyer un Message",
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      sendButton: "Envoyer le Message",
      sending: "Envoi en cours...",
      contactInformation: "Informations de Contact",
      connectWithMe: "Se Connecter Avec Moi",
      currentlyAvailable: "Actuellement Disponible",
      availabilityDescription:
        "Je recherche activement de nouvelles opportunités en développement logiciel et ingénierie QA. Diplôme prévu: Mars 2026",
      viewResume: "Voir le CV",
      scheduleCall: "Planifier un Appel",
      messageSent: "Message Envoyé!",
      messageSentDescription: "Merci pour votre message. Je vous répondrai bientôt!",
    },
    feedback: {
      title: "Témoignages et Commentaires",
      subtitle: "Ce que disent les collègues et clients sur le travail avec moi",
      testimonials: "Témoignages",
      submitFeedback: "Soumettre un Commentaire",
      adminPanel: "Panneau Admin",
      shareExperience: "Partager Votre Expérience",
      company: "Entreprise",
      role: "Rôle",
      rating: "Évaluation",
      yourFeedback: "Votre Commentaire",
      submitButton: "Soumettre le Commentaire",
      adminAccess: "Accès Admin",
      adminPassword: "Mot de Passe Admin",
      accessAdmin: "Accéder au Panneau Admin",
      feedbackManagement: "Gestion des Commentaires",
      logout: "Se Déconnecter",
      pendingReview: "En Attente de Révision",
      approved: "Approuvé",
      totalFeedback: "Total des Commentaires",
      approve: "Approuver",
      reject: "Rejeter",
      noTestimonials: "Aucun témoignage disponible pour le moment.",
      noPendingFeedback: "Aucun commentaire en attente à réviser.",
      feedbackSubmitted: "Commentaire Soumis!",
      feedbackSubmittedDescription: "Merci pour votre commentaire. Il sera révisé et publié bientôt.",
      adminAccessGranted: "Accès Admin Accordé",
      adminAccessDescription: "Vous pouvez maintenant gérer les soumissions de commentaires.",
      accessDenied: "Accès Refusé",
      invalidPassword: "Mot de passe admin invalide.",
      feedbackApproved: "Commentaire Approuvé",
      feedbackRejected: "Commentaire Rejeté",
      feedbackApprovedDescription: "Le commentaire a été approuvé et publié.",
      feedbackRejectedDescription: "Le commentaire a été rejeté.",
      namePlaceholder: "Votre nom complet",
      emailPlaceholder: "votre.email@exemple.com",
      companyPlaceholder: "Votre entreprise",
      rolePlaceholder: "Votre titre de poste",
      messagePlaceholder: "Partagez votre expérience de travail avec moi...",
    },
    common: {
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès",
      cancel: "Annuler",
      save: "Sauvegarder",
      edit: "Modifier",
      delete: "Supprimer",
      confirm: "Confirmer",
    },
  },
}

export function getTranslation(language: string): Translation {
  return translations[language] || translations.en
}
