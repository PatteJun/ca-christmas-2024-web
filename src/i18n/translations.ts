interface Translation {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    growth: {
      title: string;
      description: string;
      nextHighlight: string;
    };
    event: {
      title: string;
      description: string;
      nextHighlight: string;
    };
    partnerships: {
      title: string;
      description: string;
      features: {
        private: {
          title: string;
          description: string;
        };
        diverse: {
          title: string;
          description: string;
        };
      };
      nextHighlight: string;
    };
    security: {
      title: string;
      description: string;
      features: {
        protection: {
          title: string;
          description: string;
        };
        verification: {
          title: string;
          description: string;
        };
      };
      nextHighlight: string;
    };
    appreciation: {
      title: string;
      description1: string;
      description2: string;
    };
  }
  
  const de: Translation = {
    hero: {
        "title": "20 JAHRE\nVERTRAUEN UND PARTNERSCHAFT",
        "subtitle": "Im Jahr 2024 feiern wir zwei Jahrzehnte, in denen wir gemeinsam mit Ihnen die Automobilwelt gestalten durften. Danke, dass Sie Teil dieser besonderen Reise sind.",
        "cta": "UNSERE HIGHLIGHTS 2024"
    },
    growth: {
        "title": "Wachstum im Transaktionsvolumen",
        "description": "Ihr Vertrauen und Ihre Partnerschaft haben es möglich gemacht: 2024 konnten wir unser Transaktionsvolumen nachhaltig steigern.",
        "nextHighlight": "Zum nächsten Highlight"
    },
    "event": {
        "title": "Gemeinsam Wachsen seit 20 Jahren",
        "description": "2024 war ein ganz besonderes Jahr für uns: Wir feierten unser 20-jähriges Firmenjubiläum. Dieses Meilenstein-Jahr haben wir gemeinsam mit Ihnen, unseren geschätzten Kunden und Partnern, gefeiert. Ob Käufer oder Verkäufer – Ihre Zusammenarbeit hat unsere Reise geprägt und zu diesem Erfolg beigetragen.",
        "nextHighlight": "Nächstes Highlight"
    },
    "partnerships": {
        "title": "Horizonte Erweitern",
        "description": "2024 war ein Jahr der Innovation und Zusammenarbeit: Durch unsere Partnerschaft mit dem größten Schweizer Automobil-Marktplatz können wir nun auch Privatfahrzeuge in unseren Auktionen anbieten. Diese Erweiterung bereichert unser Portfolio und schafft neue Möglichkeiten für Käufer und Verkäufer.",
        "features": {
        "private": {
            "title": "Privatfahrzeuge in der Auktion",
            "description": "Neue Chancen für private Autobesitzer, ihre Fahrzeuge einem breiten Publikum anzubieten"
        },
        "diverse": {
            "title": "Vielfältiges Fahrzeugangebot",
            "description": "Erweitertes Portfolio für Käufer mit unterschiedlichen Präferenzen und Bedürfnissen"
        }
        },
        "nextHighlight": "Nächstes Highlight"
    },
    "security": {
        "title": "Sicherheit, auf die Sie zählen können",
        "description": "Ihr Vertrauen ist unser höchstes Gut. 2024 haben wir wichtige Verbesserungen an der Sicherheit unserer Plattform vorgenommen und arbeiten weiterhin daran, sichere und reibungslose Transaktionen für unsere gesamte Gemeinschaft zu gewährleisten.",
        "features": {
        "protection": {
            "title": "Moderner Schutz",
            "description": "Neue Technologien und Maßnahmen sorgen für den sicheren Schutz Ihrer Transaktionen"
        },
        "verification": {
            "title": "Verlässliche Prozesse",
            "description": "Verbesserte Prüfverfahren für mehr Sicherheit bei Käufern und Verkäufern"
        }
        },
        "nextHighlight": "Nächstes Highlight"
    },
    "appreciation": {
        "title": "Sie sind unser grösstes Highlight",
        "description1": "So wie der Weihnachtsmann den Stern auf die Spitze des Baums setzt, sind Sie der Höhepunkt, der unsere Geschichte krönt. Ihre Partnerschaft und Ihr Vertrauen sind das Fundament unserer 20-jährigen Erfolgsgeschichte.",
        "description2": "Dank Ihnen konnten wir gemeinsam etwas Einzigartiges in der Automobilwelt schaffen. Sie sind unser grösstes Highlight – und dafür sagen wir von Herzen: Danke."
    }
  };
  
  const fr: Translation = {
    "hero": {
        "title": "20 ANS\nDE CONFIANCE ET DE PARTENARIAT",
        "subtitle": "En 2024, nous célébrons deux décennies de collaboration pour façonner le monde de l'automobile avec vous. Merci de faire partie de cette aventure exceptionnelle.",
        "cta": "NOS TEMPS FORTS 2024"
    },
    "growth": {
        "title": "de croissance du volume de transactions",
        "description": "Votre confiance et votre partenariat ont rendu cela possible : en 2024, nous avons réalisé une croissance durable de notre volume de transactions.",
        "nextHighlight": "Prochain temps fort"
    },
    "event": {
        "title": "Grandir ensemble depuis 20 ans",
        "description": "2024 a été une année très spéciale pour nous : nous avons célébré notre 20e anniversaire. Cette année charnière, nous l’avons célébrée avec vous, nos précieux clients et partenaires. Qu'il s'agisse d'acheteurs ou de vendeurs – votre collaboration a façonné notre parcours et contribué à ce succès.",
        "nextHighlight": "Prochain temps fort"
    },
    "partnerships": {
        "title": "Élargir les horizons",
        "description": "2024 a été une année d'innovation et de collaboration : grâce à notre partenariat avec le plus grand marché automobile de Suisse, nous proposons désormais des véhicules privés dans nos enchères. Cette expansion enrichit notre portefeuille et crée de nouvelles opportunités pour les acheteurs et les vendeurs.",
        "features": {
        "private": {
            "title": "Véhicules privés aux enchères",
            "description": "Nouvelles opportunités pour les propriétaires privés de présenter leurs véhicules à un large public"
        },
        "diverse": {
            "title": "Une offre diversifiée de véhicules",
            "description": "Un portefeuille élargi pour les acheteurs ayant des préférences et des besoins variés"
        }
        },
        "nextHighlight": "Prochain temps fort"
    },
    "security": {
        "title": "Une sécurité sur laquelle vous pouvez compter",
        "description": "Votre confiance est notre bien le plus précieux. En 2024, nous avons apporté des améliorations majeures à la sécurité de notre plateforme et continuons à travailler pour garantir des transactions sûres et fluides pour toute notre communauté.",
        "features": {
        "protection": {
            "title": "Protection avancée",
            "description": "Nouvelles technologies et mesures pour assurer la sécurité de vos transactions"
        },
        "verification": {
            "title": "Processus fiables",
            "description": "Procédures de vérification améliorées pour une sécurité accrue des acheteurs et des vendeurs"
        }
        },
        "nextHighlight": "Prochain temps fort"
    },
    "appreciation": {
        "title": "Vous êtes notre plus beau moment",
        "description1": "Tout comme le Père Noël place l'étoile au sommet de l'arbre, vous êtes l'aboutissement de notre histoire. Votre partenariat et votre confiance sont le fondement de nos 20 années de succès.",
        "description2": "Grâce à vous, nous avons pu créer quelque chose d'unique dans le monde de l'automobile. Vous êtes notre plus beau moment – et pour cela, nous vous disons un grand merci."
    }
  };
  
  const it: Translation = {
    "hero": {
        "title": "20 ANNI\nDI FIDUCIA E PARTNERSHIP",
        "subtitle": "Nel 2024 celebriamo due decenni di collaborazione per plasmare insieme a voi il mondo dell’automobile. Grazie per essere parte di questo straordinario percorso.",
        "cta": "I NOSTRI HIGHLIGHT 2024"
    },
    "growth": {
        "title": "di crescita nel volume delle transazioni",
        "description": "La vostra fiducia e collaborazione lo hanno reso possibile: nel 2024 abbiamo ottenuto una crescita sostenibile nel volume delle transazioni.",
        "nextHighlight": "Prossimo highlight"
    },
    "event": {
        "title": "Crescere insieme da 20 anni",
        "description": "Il 2024 è stato un anno davvero speciale per noi: abbiamo festeggiato il nostro 20° anniversario. Questo anno importante lo abbiamo celebrato insieme a voi, i nostri stimati clienti e partner. Che siate acquirenti o venditori – la vostra collaborazione ha plasmato il nostro percorso e contribuito a questo successo.",
        "nextHighlight": "Prossimo highlight"
    },
    "partnerships": {
        "title": "Espandere gli orizzonti",
        "description": "Il 2024 è stato un anno di innovazione e collaborazione: grazie alla nostra partnership con il più grande marketplace automobilistico svizzero, ora offriamo veicoli privati nelle nostre aste. Questa espansione arricchisce il nostro portfolio e crea nuove opportunità per acquirenti e venditori.",
        "features": {
        "private": {
            "title": "Veicoli privati in asta",
            "description": "Nuove opportunità per i proprietari privati di presentare i loro veicoli a un vasto pubblico"
        },
        "diverse": {
            "title": "Un’offerta diversificata di veicoli",
            "description": "Un portfolio ampliato per acquirenti con preferenze ed esigenze diverse"
        }
        },
        "nextHighlight": "Prossimo highlight"
    },
    "security": {
        "title": "Sicurezza su cui contare",
        "description": "La vostra fiducia è il nostro bene più prezioso. Nel 2024 abbiamo apportato importanti miglioramenti alla sicurezza della nostra piattaforma e continuiamo a lavorare per garantire transazioni sicure e senza problemi per tutta la nostra comunità.",
        "features": {
        "protection": {
            "title": "Protezione avanzata",
            "description": "Nuove tecnologie e misure per garantire la sicurezza delle vostre transazioni"
        },
        "verification": {
            "title": "Processi affidabili",
            "description": "Procedure di verifica migliorate per una maggiore sicurezza di acquirenti e venditori"
        }
        },
        "nextHighlight": "Prossimo highlight"
    },
    "appreciation": {
        "title": "Siete il nostro momento più importante",
        "description1": "Proprio come Babbo Natale mette la stella sulla cima dell'albero, voi siete il culmine della nostra storia. La vostra fiducia e collaborazione sono il fondamento dei nostri 20 anni di successi.",
        "description2": "Grazie a voi, siamo riusciti a creare qualcosa di davvero unico nel mondo dell'automobile. Siete il nostro momento più importante – e per questo vi diciamo di cuore: grazie."
    }
  };
  
  const en: Translation = {
    "hero": {
        "title": "20 YEARS\nOF TRUST AND PARTNERSHIP",
        "subtitle": "In 2024, we celebrate two decades of shaping the automotive world together with you. Thank you for being part of this remarkable journey.",
        "cta": "OUR 2024 HIGHLIGHTS"
    },
    "growth": {
        "title": "Growth in Transaction Volume",
        "description": "Your trust and partnership made it possible: in 2024, we achieved sustainable growth in our transaction volume.",
        "nextHighlight": "Next Highlight"
    },
    "event": {
        "title": "Growing Together for 20 Years",
        "description": "2024 was a very special year for us: we celebrated our 20th anniversary. This milestone year was celebrated together with you, our valued customers and partners. Whether buyer or seller – your collaboration has shaped our journey and contributed to this success.",
        "nextHighlight": "Next Highlight"
    },
    "partnerships": {
        "title": "Expanding Horizons",
        "description": "2024 was a year of innovation and collaboration: Through our partnership with Switzerland's largest automotive marketplace, we now offer private vehicles in our auctions. This expansion enriches our portfolio and creates new opportunities for both buyers and sellers.",
        "features": {
        "private": {
            "title": "Private Vehicles in Auctions",
            "description": "New opportunities for private car owners to present their vehicles to a wide audience"
        },
        "diverse": {
            "title": "Diverse Vehicle Selection",
            "description": "An expanded portfolio for buyers with different preferences and needs"
        }
        },
        "nextHighlight": "Next Highlight"
    },
    "security": {
        "title": "Security You Can Rely On",
        "description": "Your trust is our greatest asset. In 2024, we made key improvements to the security of our platform and continue to work on ensuring safe and seamless transactions for our entire community.",
        "features": {
        "protection": {
            "title": "Advanced Protection",
            "description": "New technologies and measures to ensure the secure handling of your transactions"
        },
        "verification": {
            "title": "Reliable Processes",
            "description": "Enhanced verification procedures for greater safety for both buyers and sellers"
        }
        },
        "nextHighlight": "Next Highlight"
    },
    "appreciation": {
        "title": "You Are Our Greatest Highlight",
        "description1": "Just as Santa places the star atop the tree, you are the crowning achievement of our story. Your partnership and trust are the foundation of our 20-year success story.",
        "description2": "Thanks to you, we have been able to create something truly unique in the automotive world. You are our greatest highlight – and for that, we thank you from the bottom of our hearts."
    }
  };
  
  export const languages = {
    de,
    fr,
    it,
    en
  };
  
  export type Lang = keyof typeof languages;