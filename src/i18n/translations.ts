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
      title: "20 JAHRE\nGEMEINSAM",
      subtitle: "Seit zwei Jahrzehnten haben wir das Privileg, unserer Automobilgemeinschaft zu dienen. Danke, dass Sie Teil dieser bemerkenswerten Reise sind.",
      cta: "UNSERE REISE ENTDECKEN"
    },
    growth: {
      title: "Wachstum im Transaktionsvolumen",
      description: "Dank Ihrem Vertrauen und Ihrer Partnerschaft haben wir 2024 gemeinsam ein nachhaltiges Wachstum erreicht.",
      nextHighlight: "Nächstes Highlight"
    },
    event: {
      title: "Gemeinsam Wachsen",
      description: "Dieses Jahr markierte eine bedeutende Erweiterung unserer Gemeinschaft. Wir begrüßten mehr Privatverkäufer und neue Partnerschaften, die unseren Marktplatz mit vielfältigen Automobilangeboten für alle unsere geschätzten Kunden bereichern.",
      nextHighlight: "Nächstes Highlight"
    },
    partnerships: {
      title: "Horizonte Erweitern",
      description: "In diesem Jahr haben wir stolz Privatverkäufer auf unserem Marktplatz willkommen geheißen und unser Portfolio mit einzigartigen Fahrzeugen und persönlichen Geschichten bereichert. Gemeinsam mit unseren vertrauenswürdigen Partnern schaffen wir mehr Möglichkeiten für alle in unserer Automobilgemeinschaft.",
      features: {
        private: {
          title: "Privatverkäufer Willkommen",
          description: "Neue Möglichkeiten für private Autobesitzer, qualifizierte Käufer zu erreichen"
        },
        diverse: {
          title: "Vielfältige Auswahl",
          description: "Erweitertes Fahrzeugportfolio für verschiedene Präferenzen und Bedürfnisse"
        }
      },
      nextHighlight: "Nächstes Highlight"
    },
    security: {
      title: "Verbesserte Sicherheit",
      description: "Ihr Vertrauen verdient höchsten Schutz. Wir haben die Sicherheit unserer Plattform verstärkt, um sichere und zuverlässige Transaktionen für jedes Mitglied unserer Gemeinschaft zu gewährleisten.",
      features: {
        protection: {
          title: "Fortschrittlicher Schutz",
          description: "Modernste Sicherheitsmaßnahmen zum Schutz Ihrer Transaktionen"
        },
        verification: {
          title: "Verifizierte Prozesse",
          description: "Verbesserte Verifizierungssysteme für die Sicherheit von Käufern und Verkäufern"
        }
      },
      nextHighlight: "Nächstes Highlight"
    },
    appreciation: {
      title: "Sie Sind Unser Stern",
      description1: "So wie der Weihnachtsmann den leuchtenden Stern auf die Spitze des Weihnachtsbaums setzt, sind Sie der Höhepunkt, der unsere Geschichte vollendet. Ihr Vertrauen und Ihre Partnerschaft waren die krönende Errungenschaft unserer 20-jährigen Reise.",
      description2: "Gemeinsam haben wir etwas wirklich Besonderes in der Automobilwelt geschaffen. Danke, dass Sie unser hellster Stern sind."
    }
  };
  
  const fr: Translation = {
    hero: {
      title: "20 ANS\nENSEMBLE",
      subtitle: "Depuis deux décennies, nous avons le privilège de servir notre communauté automobile. Merci d'avoir fait partie de ce remarquable voyage.",
      cta: "DÉCOUVREZ NOTRE VOYAGE"
    },
    growth: {
      title: "Croissance du Volume de Transactions",
      description: "Grâce à votre confiance et à votre partenariat, nous avons réalisé ensemble une croissance durable en 2024.",
      nextHighlight: "Prochain Temps Fort"
    },
    event: {
      title: "Grandir Ensemble",
      description: "Cette année a marqué une expansion significative de notre communauté. Nous avons accueilli plus de vendeurs privés et de nouveaux partenariats, enrichissant notre place de marché avec des offres automobiles diversifiées pour tous nos clients estimés.",
      nextHighlight: "Prochain Temps Fort"
    },
    partnerships: {
      title: "Élargir les Horizons",
      description: "Cette année, nous avons fièrement accueilli des vendeurs privés sur notre place de marché, enrichissant notre portfolio avec des véhicules uniques et des histoires personnelles. Avec nos partenaires de confiance, nous créons plus d'opportunités pour tous dans notre communauté automobile.",
      features: {
        private: {
          title: "Bienvenue aux Vendeurs Privés",
          description: "Nouvelles opportunités pour les propriétaires de voitures d'atteindre des acheteurs qualifiés"
        },
        diverse: {
          title: "Sélection Diversifiée",
          description: "Portfolio de véhicules élargi répondant aux différentes préférences et besoins"
        }
      },
      nextHighlight: "Prochain Temps Fort"
    },
    security: {
      title: "Sécurité Renforcée",
      description: "Votre confiance mérite le plus haut niveau de protection. Nous avons renforcé la sécurité de notre plateforme pour garantir des transactions sûres et fiables pour chaque membre de notre communauté.",
      features: {
        protection: {
          title: "Protection Avancée",
          description: "Mesures de sécurité de pointe pour protéger vos transactions"
        },
        verification: {
          title: "Processus Vérifiés",
          description: "Systèmes de vérification améliorés pour la tranquillité des acheteurs et vendeurs"
        }
      },
      nextHighlight: "Prochain Temps Fort"
    },
    appreciation: {
      title: "Vous Êtes Notre Étoile",
      description1: "Tout comme le Père Noël place l'étoile brillante au sommet du sapin de Noël, vous êtes le point culminant qui complète notre histoire. Votre confiance et votre partenariat ont été l'accomplissement suprême de notre voyage de 20 ans.",
      description2: "Ensemble, nous avons créé quelque chose de vraiment spécial dans le monde automobile. Merci d'être notre étoile la plus brillante."
    }
  };
  
  const it: Translation = {
    hero: {
      title: "20 ANNI\nINSIEME",
      subtitle: "Da due decenni abbiamo il privilegio di servire la nostra comunità automobilistica. Grazie per essere stati parte di questo straordinario viaggio.",
      cta: "ESPLORA IL NOSTRO VIAGGIO"
    },
    growth: {
      title: "Crescita nel Volume delle Transazioni",
      description: "Grazie alla vostra fiducia e partnership, abbiamo raggiunto insieme una crescita sostenibile nel 2024.",
      nextHighlight: "Prossimo Highlight"
    },
    event: {
      title: "Crescere Insieme",
      description: "Quest'anno ha segnato una significativa espansione della nostra comunità. Abbiamo accolto più venditori privati e nuove partnership, arricchendo il nostro marketplace con offerte automobilistiche diversificate per tutti i nostri stimati clienti.",
      nextHighlight: "Prossimo Highlight"
    },
    partnerships: {
      title: "Ampliare gli Orizzonti",
      description: "Quest'anno abbiamo accolto con orgoglio i venditori privati nel nostro marketplace, arricchendo il nostro portfolio con veicoli unici e storie personali. Insieme ai nostri partner fidati, stiamo creando più opportunità per tutti nella nostra comunità automobilistica.",
      features: {
        private: {
          title: "Benvenuti Venditori Privati",
          description: "Nuove opportunità per i proprietari di auto di raggiungere acquirenti qualificati"
        },
        diverse: {
          title: "Selezione Diversificata",
          description: "Portfolio veicoli ampliato per soddisfare varie preferenze e necessità"
        }
      },
      nextHighlight: "Prossimo Highlight"
    },
    security: {
      title: "Sicurezza Migliorata",
      description: "La vostra fiducia merita il massimo livello di protezione. Abbiamo rafforzato la sicurezza della nostra piattaforma per garantire transazioni sicure e affidabili per ogni membro della nostra comunità.",
      features: {
        protection: {
          title: "Protezione Avanzata",
          description: "Misure di sicurezza all'avanguardia per proteggere le vostre transazioni"
        },
        verification: {
          title: "Processi Verificati",
          description: "Sistemi di verifica migliorati per la tranquillità di acquirenti e venditori"
        }
      },
      nextHighlight: "Prossimo Highlight"
    },
    appreciation: {
      title: "Siete la Nostra Stella",
      description1: "Proprio come Babbo Natale pone la stella splendente in cima all'albero di Natale, voi siete il punto culminante che completa la nostra storia. La vostra fiducia e partnership sono state il coronamento del nostro viaggio ventennale.",
      description2: "Insieme abbiamo creato qualcosa di veramente speciale nel mondo automobilistico. Grazie per essere la nostra stella più brillante."
    }
  };
  
  const en: Translation = {
    hero: {
      title: "20 YEARS\nTOGETHER",
      subtitle: "For two decades, we've been privileged to serve our automotive community. Thank you for being part of this remarkable journey.",
      cta: "EXPLORE OUR JOURNEY"
    },
    growth: {
      title: "Growth in Transaction Volume",
      description: "Thanks to your trust and partnership, we've achieved sustainable growth together in 2024.",
      nextHighlight: "Next Highlight"
    },
    event: {
      title: "Growing Together",
      description: "This year marked a significant expansion in our community. We welcomed more private sellers and new partnerships, enriching our marketplace with diverse automotive offerings for all our valued customers.",
      nextHighlight: "Next Highlight"
    },
    partnerships: {
      title: "Expanding Horizons",
      description: "This year, we proudly welcomed private sellers to our marketplace, enriching our portfolio with unique vehicles and personal stories. Together with our trusted partners, we're creating more opportunities for everyone in our automotive community.",
      features: {
        private: {
          title: "Private Sellers Welcome",
          description: "New opportunities for individual car owners to reach qualified buyers"
        },
        diverse: {
          title: "Diverse Selection",
          description: "Expanded vehicle portfolio catering to various preferences and needs"
        }
      },
      nextHighlight: "Next Highlight"
    },
    security: {
      title: "Enhanced Security",
      description: "Your trust deserves the highest level of protection. We've strengthened our platform's security to ensure safe and reliable transactions for every member of our community.",
      features: {
        protection: {
          title: "Advanced Protection",
          description: "State-of-the-art security measures to protect your transactions"
        },
        verification: {
          title: "Verified Processes",
          description: "Enhanced verification systems for buyer and seller peace of mind"
        }
      },
      nextHighlight: "Next Highlight"
    },
    appreciation: {
      title: "You Are Our Tree Topper",
      description1: "Just as Santa places the shining star atop the Christmas tree, you are the highlight that completes our story. Your trust and partnership have been the crowning achievement of our 20-year journey.",
      description2: "Together, we've created something truly special in the automotive world. Thank you for being our brightest star."
    }
  };
  
  export const languages = {
    de,
    fr,
    it,
    en
  };
  
  export type Lang = keyof typeof languages;