export type Language = 'de' | 'en';

export type LinkItem = { label: string; href: string };

/** A paragraph, a bullet list, or both — with optional outbound links. */
export type Block = {
  heading?: string;
  text?: string;
  items?: string[];
  /** Render `items` as a grid of boxes instead of a bullet list. */
  boxed?: boolean;
  /** Render as a process flow: boxes joined by the chevron mark. */
  steps?: string[];
  links?: LinkItem[];
};

/** One line of the services overview; `id` anchors to the service section. Bold parts are marked with `**…**`. */
export type SummaryItem = { id: string; text: string };

export type Service = {
  id: string;
  title: string;
  lead: string;
  blocks: Block[];
};

export type LegalSection = {
  heading: string;
  lines?: string[];
  paragraphs?: string[];
  links?: LinkItem[];
};

const de = {
  meta: {
    title: 'Talentbegleitung | Marie-Louise Schäfer',
    description:
      'Talentbegleitung für Führungspersönlichkeiten, Teams und Organisationen: Executive Coaching, Teamentwicklung, Alps Days, Trainings und Organisationsimpulse.',
  },

  nav: {
    home: 'Sie im Mittelpunkt',
    services: 'Leistungen',
    stories: 'Erfolgsgeschichten',
    philosophy: 'Philosophie',
    profile: 'Profil & Publikationen',
    menu: 'Menü',
    close: 'Menü schließen',
    open: 'Menü öffnen',
  },

  hero: {
    title: 'Führung stärken. Teams befähigen. Zukunft gestalten.',
    lead: 'Talentbegleitung für Führungspersönlichkeiten, Teams und Organisationen, die in brüchigen und komplexen Zeiten handlungsfähig, klar und wirksam bleiben wollen.',
    cta: 'Kennenlerngespräch vereinbaren',
    ctaSecondary: 'Leistungen ansehen',
  },

  intro: {
    achieveTitle: 'Was Sie mit uns erreichen können',
    achieve: [
      {
        title: 'Führung stärken',
        text: 'Klarheit in komplexen Situationen, tragfähige Entscheidungen, Präsenz unter Druck.',
      },
      {
        title: 'Teams befähigen',
        text: 'Zusammenarbeit verbessern, Leistung erhöhen, Veränderung konstruktiv gestalten.',
      },
      {
        title: 'Zukunft gestalten',
        text: 'Neue Technologien integrieren, ohne die Menschen aus dem Blick zu verlieren.',
      },
    ],
    statement:
      'Ob Ihre Organisation an den ständigen Herausforderungen und dem immerwährenden Wandel zerbricht oder gestärkt daraus hervorgeht, entscheidet sich an Führung, Zusammenarbeit und der Fähigkeit, mit neuen Technologien sinnvoll umzugehen. Genau hier setzt unsere Talentbegleitung an.',
    standTitle: 'Dafür stehen wir',
    stand: [
      {
        title: 'Persönliche Stärke',
        text: 'Raum für Reflexion, Entlastung und stimmige Entscheidungen.',
      },
      {
        title: 'Teamwirksamkeit',
        text: 'Menschen, die sich vertrauen, Verantwortung übernehmen und Ergebnisse liefern.',
      },
      {
        title: 'Organisationsentwicklung',
        text: 'Impulse, Formate und Prozesse, die Orientierung geben und Zukunftsbilder greifbar machen.',
      },
    ],
    closingTitle: 'Lassen Sie uns sprechen.',
    closingText:
      'In einem unverbindlichen Kennenlerngespräch klären wir, wie Talentbegleitung Sie, Ihr Team oder Ihre Organisation konkret unterstützen kann.',
  },

  services: {
    title: 'Leistungen',
    lead: 'Unsere Talentbegleitung bietet wirksame Formate für Individuen, Teams und Organisationen.',
    summary: [
      {
        id: 'executive-coaching',
        text: 'Im **Executive Coaching** stärken wir Ihre Führungsrolle, Entscheidungsfähigkeit und Präsenz.',
      },
      {
        id: 'teamentwicklung',
        text: 'In der **Teamentwicklung** begleiten wir Teams auf dem Weg zu High Performance und mehr Freude an Zusammenarbeit.',
      },
      {
        id: 'trainings',
        text: 'Mit **Trainings** schaffen wir Räume für Lernen, Austausch und nachhaltige Veränderung.',
      },
      {
        id: 'alps-days',
        text: 'Mit **Alps Days** bieten wir ein besonderes Format, in dem Naturerfahrung und strategische Klärung zusammenkommen.',
      },
      {
        id: 'organisationsimpulse',
        text: 'Weitere **Organisationsimpulse**? Wir konzipieren diese genau für Sie und Ihre Organisation.',
      },
    ] as SummaryItem[],
    note: 'Alle Formate sind praxisnah, vertraulich und auf Ihren Kontext zugeschnitten – vom Einzelcoaching bis zum mehrtägigen Workshop vor Ort.',
    items: [
      {
        id: 'executive-coaching',
        title: 'Executive Coaching & Coaching für Mitarbeitende',
        lead: 'Im Rahmen unseres stärkenorientierten und systemischen Coachings werden gemeinsam mit Ihnen Lösungsansätze erarbeitet.',
        blocks: [
          {
            heading: 'Typische Coachingthemen',
            boxed: true,
            items: [
              'Mitarbeiterführung, eine neue oder erweiterte Führungsaufgabe',
              'Verantwortungsübernahme und Unterstützung zur Steigerung der Schlagkraft Ihrer Teams',
              'Umgang mit Druck und Kritik sowie Aufbau von Resilienz und Empathie',
              'Orientierung in und Integration von neuen Technologien',
              'Grenzsetzung, Strukturierung und Work-Life-Balance',
              'Persönliche und berufliche Weiterentwicklung',
            ],
          },
          {
            text: 'Sprechen Sie uns zu diesen oder weiteren Themen gerne an. In drei bis zehn vertraulichen Coaching-Sessions von 60 bis 90 Minuten werden – auf Basis der Expertise des Coachees und der jahrzehntelangen Erfahrung eines Talentbegleiters – unmittelbar anwendbare Lösungen individuell entwickelt und in die Praxis überführt. Die Coachings finden digital oder vor Ort statt.',
          },
          {
            text: 'Das Coaching führt erfahrungsgemäß zu einer unmittelbaren Entlastung der gecoachten Persönlichkeit und ihres unmittelbaren Umfelds und schafft in kurzer Zeit hochindividuelle Lösungen.',
          },
        ],
      },
      {
        id: 'teamentwicklung',
        title: 'Teamentwicklung & High Performance Teams',
        lead: 'Durch unsere Teamentwicklung mit Fokus auf Zusammenarbeit und Wirksamkeit gelangt Ihr Team mit einem erfahrenen Talentbegleiter auf den Weg zu High Performance – mit mehr Freude an der Zusammenarbeit und besseren Ergebnissen.',
        blocks: [
          {
            heading: 'Wir unterstützen Sie, damit Ihr Team erfolgreich ist bei',
            boxed: true,
            items: [
              'Akzeptanz von Veränderungen',
              'Ungleichverteilung von Expertise',
              'Leistungssteigerung',
              'Rollenverständnis',
              'Schnittstellendynamiken',
              'standortunabhängiger Zusammenarbeit',
              'Teamentwicklung zu Hochleistungsteams',
              'Teamdynamik',
              'Integration neuer Technologien',
              'Stärkung der Veränderungsfähigkeit',
            ],
          },
          {
            text: 'Kommen Sie gerne mit einem dieser oder einem weiteren Thema auf uns zu. Erfahrungsgemäß führt der Workshop zu einer spürbaren Entlastung der Führungspersönlichkeit und der Teammitglieder.',
          },
          {
            heading: 'Typischer Ablauf',
            steps: [
              'Sagen Sie Hallo.',
              'Kennenlerngespräch mit der Führungspersönlichkeit.',
              'Optional: Interviews mit den Mitarbeitenden.',
              'Workshop inklusive Vor- und Nachbereitung.',
            ],
          },
          {
            text: 'Der Workshop findet vor Ort bei Ihnen oder an einem gemeinsam gewählten Workshoport statt. In einem Teamentwicklungsprozess von ein bis drei Tagen wird ein hochindividueller Mehrwert für Ihr Team gemeinsam erarbeitet.',
          },
        ],
      },
      {
        id: 'alps-days',
        title: 'Alps Days',
        lead: 'Alps Days ist unser Signature-Workshop für Teams, die hoch hinauswollen: ein Workshop, verbunden mit einem Bergspaziergang. Das Workshop-Design ist eingebunden in eine gemeinsame Erfahrung im (Vor-)Alpenambiente.',
        blocks: [
          {
            text: 'Dieser Workshop eignet sich für die oben genannten Themen.',
          },
          {
            heading: 'Exzellent geeignet ist Alps Days auch für',
            items: [
              'Standortbestimmung, Visionsentwicklung und Schärfung der nächsten strategischen Schritte.',
            ],
          },
          {
            text: 'Die Alps Days finden ab zwei Tagen statt. Sprechen Sie uns gerne auf dieses besondere Workshopformat und mögliche Veranstaltungsorte an. Die Alps Days führt Talentbegleitung in Kooperation mit hobacon durch. Ein Kooperationspartner von Alps Days ist die Grande Dame der Alpen.',
            links: [
              { label: 'hobacon', href: 'https://hobacon.de/perspektive/perspektiven-alps-days/' },
              { label: 'Grande Dame der Alpen', href: 'https://www.predigtstuhlbahn.de' },
            ],
          },
        ],
      },
      {
        id: 'trainings',
        title: 'Trainings',
        lead: 'Wir bieten Trainings zu verschiedenen Themen an, unter anderem:',
        blocks: [
          {
            boxed: true,
            items: [
              'Resilienz',
              'Stressabbau',
              'Umgang mit neuen Technologien',
              'Stärkung der Kommunikationsfähigkeit',
              'Ausbau der Veränderungskapazität',
            ],
          },
          {
            text: 'In einem geschützten Rahmen werden ausgewählte Inhalte an eine Gruppe von Mitarbeitenden vermittelt, sodass die Teilnehmenden danach über mehr Handlungssicherheit und Wirksamkeit im Alltag verfügen.',
          },
          {
            items: [
              'Ein Training umfasst mindestens vier Stunden und maximal vier Tage.',
              'Es kann digital oder vor Ort stattfinden.',
            ],
          },
          { text: 'Sprechen Sie uns gerne mit Ihrem Wunschthema an.' },
        ],
      },
      {
        id: 'organisationsimpulse',
        title: 'Organisationsimpulse',
        lead: 'Eine Organisation ist ein lebendiges System, das sich über Impulse freut. Erfahrungsgemäß können diese Impulse ganz unterschiedlicher Natur sein:',
        blocks: [
          {
            items: [
              'Eine einstündige Keynote zu einem Führungs- oder technologischen Zukunftsthema',
              'Ein Dialoggespräch mit einem Teil der Organisation von einem halben Tag oder einem Tag',
              'Konzeption und Durchführung einer Großgruppenveranstaltung von einem oder mehreren Tagen, sei es eine regelmäßig oder außergewöhnlich stattfindende Veranstaltung wie ein Jahrestreffen, Sommerfest oder ein Zukunftsdialog',
            ],
          },
          { text: 'Sprechen Sie uns gerne für Ideen und erfahrungsgemäß erfolgreiche Formate an.' },
          {
            text: 'Wir sind zudem erfahrene Change-Berater und Organisationsentwickler. Organisationsentwicklung bieten wir in Kooperation mit doujak.eu an.',
            links: [{ label: 'doujak.eu', href: 'https://www.doujak.eu/who/' }],
          },
        ],
      },
    ] as Service[],
    focusTitle: 'Kunden-Schwerpunkte',
    focus: [
      'Automotive und Zulieferer',
      'Bildungswesen',
      'Gründer und Start-up-Industrie',
      'Food',
      'Gesellschaft, Wissenschaft & Politik',
      'Gesundheitswesen',
      'Großkanzleien',
      'Maschinenbau',
      'Mittelstand',
      'Wissenschaftssektor',
    ],
    languagesTitle: 'Wir begleiten Sie in folgenden Arbeitssprachen',
    languages: ['Deutsch', 'Englisch', 'Französisch', 'Spanisch'],
  },

  stories: {
    title: 'Erfolgsgeschichten',
    lead: 'Ausgewählte Stimmen von Kundinnen und Kunden, die mit Talentbegleitung gearbeitet haben, finden Sie hier.',
    items: [
      {
        prompt: 'Was sagt eine Senior Advisorin nach dem Teamtraining?',
        quote:
          'Mein Team hat wieder zu einem konstruktiven Arbeitsumgang gefunden. Danke für den vertrauensvollen Umgang mit meinen Mitarbeitern!',
        author: 'Senior Advisorin, Unternehmensberatung',
      },
      {
        prompt: 'Was sagt eine Bereichsleiterin nach dem Training?',
        quote: 'Trainer ohne zu belehren, Coach ohne vorzugeben; souverän und voll thematischen Tiefgangs.',
        author: 'Bereichsleitung internationaler Chemiekonzern',
      },
      {
        prompt: 'Was sagt ein Wirtschaftspartner nach dem Executive Coaching?',
        quote:
          'Ich habe zu danken! Zu danken für wirklich sehr wertvolle Hilfestellungen, die genau auf meine Person abgestimmt waren. Die Erfahrung wünsche ich jedem und bin sehr dankbar, dass ich sie habe machen dürfen.',
        author: 'Partner, Wirtschaftskanzlei',
      },
      {
        prompt: 'Was sagt ein Mitarbeiter nach dem Coaching?',
        quote:
          'Im Sport war ich es gewohnt, mit einem Coach zusammenzuarbeiten. Warum also nicht ein Coaching vor einer wichtigen beruflichen Entscheidung machen?',
        author: 'Mitarbeiter, Automotive',
      },
      {
        prompt: 'Was sagt ein Partner zur Organisationsentwicklung?',
        quote:
          'Talentbegleiter sind ein Urquell positiver Energie. Sie erfassen komplexe Sachverhalte schnell und bringen vor allem die wesentlichen Dinge schnell auf den Punkt. Darüber hinaus stehen sie auch für unkonventionelle und kreative Lösungsansätze.',
        author: 'Senior Manager, Private Equity Firm',
      },
    ],
  },

  philosophy: {
    title: 'Philosophie',
    paragraphs: [
      'Talentbegleiter sind **Potenzialverstärker** und **Brückenbauer** zwischen jetzigem und zukünftigem Erfolg.',
      'Wir fungieren als **Technologiebrückenköpfe** und **vertrauliche Wegbegleiter** für Sie.',
      'Entfalten Sie Ihr Potenzial voll. Nutzen Sie Ihre Stärken, Kompetenzen und Beziehungen auf individueller, Team- und Organisationsebene vollumfänglich!',
    ],
    cta: 'Gerne mit uns.',
  },

  profile: {
    title: 'Profil & Publikationen',
    profileTitle: 'Profil',
    profileLead: 'Talentbegleitung hat jahrzehntelange Expertise & Zertifikate in den Bereichen',
    credentials: [
      'Coaching, Training, Workshops – stärkenorientiert und systemisch, für Führungspersönlichkeiten, Teams und Organisationen',
      'Mediation, Moderation, Verhandlungsführung – für Klärung und tragfähige Ergebnisse in anspruchsvollen Situationen',
      'Master Business with AI – fundierte Orientierung für den sinnvollen Einsatz neuer Technologien',
    ],
    focusLink: 'Zu unseren Kunden-Schwerpunkten',
    founderTitle: 'Das Gesicht der Gründerin',
    founderName: 'Marie-Louise Schäfer, MBAI',
    founderRole: 'Gründerin von Talentbegleitung',
    founderText:
      'Juristin, ausgebildete Mediatorin und systemische Coachin – mit Stationen bei Roland Berger, der Technischen Universität München und im Management-Team der Max Planck Digital Library. 2011 gründete sie Talentbegleitung für Persönlichkeits- und Organisationsentwicklung. 2025 folgte das Universitätszertifikat Master Business with AI (MBAI®) der Hochschule Fresenius; seit 2026 ist sie zudem Partnerin bei Doujak Corporate Development.',
    founderMotto: '„Don’t limit your challenges. Challenge your limits.“',
    founderLink: {
      label: 'LinkedIn-Profil',
      href: 'https://www.linkedin.com/in/marie-louise-sch%C3%A4fer-989189129/',
    },
    publicationsTitle: 'Publikationen',
    publicationsLead: 'Wir teilen unsere Gedanken gerne mit Ihnen. Sie finden unsere Publikationen in:',
    publications: [
      {
        title: '„Fit for digital transformation – how individuals best succeed“',
        source: 'in: Global Coaching Excellence, Feldhaus/Windmühle Verlag',
        isbn: 'ISBN 978-3-86451-060-1',
      },
      {
        title: 'Spiegel-Bestseller „NIMM DEINE KARRIERE IN DIE HAND“',
        source: 'Remote Verlag',
        isbn: 'ISBN 978-1-960004-64-2',
      },
    ],
    outro: 'Am Liebsten sind wir mit Ihnen im Gespräch. Sprechen Sie uns gerne auf unsere Ideen an und challengen Sie diese!',
  },

  contact: {
    kicker: 'Einfach.machen – einfach mit uns.',
    title: 'Sagen Sie Hallo.',
    name: 'Marie-Louise Schäfer',
    phoneLabel: 'Telefon',
    phone: '+49 151 2726 8926',
    emailLabel: 'E-Mail',
    email: 'schaefer@talentbegleitung.de',
    formTitle: 'Kontaktformular',
    form: {
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefonnummer',
      message: 'Nachricht',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet …',
      privacy: 'Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäß unserer Datenschutzerklärung zu.',
      privacyLink: 'Datenschutzerklärung',
      required: 'Bitte füllen Sie Name, E-Mail und Nachricht aus.',
      invalidEmail: 'Bitte prüfen Sie Ihre E-Mail-Adresse.',
      sent: 'Vielen Dank! Ihre Nachricht ist eingegangen – wir melden uns zeitnah bei Ihnen.',
      sentMail: 'Danke! Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Nachricht.',
      error: 'Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt:',
      subject: 'Anfrage über talentbegleitung.com',
    },
  },

  footer: {
    tagline: 'Talentbegleitung für Führungspersönlichkeiten, Teams und Organisationen.',
    navTitle: 'Navigation',
    contactTitle: 'Kontakt',
    legalTitle: 'Rechtliches',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    cookies: 'Cookie-Einstellungen',
    rights: 'Alle Rechte vorbehalten.',
    back: 'Zurück zur Startseite',
  },

  cookies: {
    title: 'Cookie-Einstellungen',
    text: 'Diese Website kommt ohne Tracking und ohne Werbe-Cookies aus. Wir speichern lediglich technisch notwendige Angaben – Ihre Sprachwahl und diese Cookie-Entscheidung – lokal in Ihrem Browser.',
    necessary: 'Technisch notwendig',
    necessaryHint: 'Sprachwahl und Cookie-Entscheidung. Immer aktiv.',
    analytics: 'Statistik & Analyse',
    analyticsHint: 'Derzeit nicht im Einsatz. Wird aktiviert, sobald wir Analyse-Werkzeuge nutzen.',
    accept: 'Alle akzeptieren',
    necessaryOnly: 'Nur notwendige',
    save: 'Auswahl speichern',
    open: 'Cookie-Einstellungen öffnen',
  },

  imprint: {
    title: 'Impressum',
    sections: [
      {
        heading: 'Angaben gemäß § 5 Telemediengesetz (TMG)',
        lines: [
          'Marie-Louise Schäfer, Talentbegleitung',
          'Germany',
          'Untersbergstr. 21, 83457 Bayerisch Gmain',
          'Telefon: +49 151 2726 8926',
          'E-Mail: schaefer@talentbegleitung.de',
          'Website: www.talentbegleitung.de',
        ],
      },
      {
        heading: 'Umsatzsteuer-ID',
        paragraphs: [
          'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: USt-IdNr. DE283449715',
        ],
      },
      {
        heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
        lines: [
          'Marie-Louise Schäfer, Talentbegleitung',
          'Germany',
          'Untersbergstr. 21, 83457 Bayerisch Gmain',
          'Telefon: +49 151 2726 8926',
          'E-Mail: schaefer@talentbegleitung.de',
          'Website: www.talentbegleitung.de',
        ],
      },
      {
        heading: 'Haftung für Inhalte',
        paragraphs: [
          'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG (bzw. den entsprechenden Regelungen des geltenden Digitalrechts) für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
          'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
        ],
      },
      {
        heading: 'Haftung für Links',
        paragraphs: [
          'Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets die bzw. der jeweilige Anbieter:in oder Betreiber:in der Seiten verantwortlich.',
          'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
        ],
      },
      {
        heading: 'Urheberrecht',
        paragraphs: [
          'Die durch die Seitenbetreiber:in erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der bzw. des jeweiligen Autors oder Erstellers.',
          'Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet, sofern nicht ausdrücklich etwas anderes angegeben ist.',
          'Soweit die Inhalte auf dieser Seite nicht von der Betreiber:in erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
        ],
      },
    ] as LegalSection[],
  },

  privacy: {
    title: 'Datenschutzerklärung',
    updated: 'Stand: August 2026',
    sections: [
      {
        heading: 'Allgemeine Hinweise',
        paragraphs: [
          'Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO), des Bundesdatenschutzgesetzes (BDSG) und des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG). Diese Datenschutzerklärung informiert Sie darüber, welche Daten beim Besuch dieser Website und bei der Nutzung unserer Kontaktmöglichkeiten verarbeitet werden.',
          'Diese Website nutzt keine Analyse-, Tracking- oder Werbedienste und setzt keine Cookies zu diesen Zwecken ein.',
        ],
      },
      {
        heading: 'Verantwortliche Stelle',
        paragraphs: ['Verantwortliche Stelle im Sinne von Art. 4 Nr. 7 DSGVO ist:'],
        lines: [
          'Marie-Louise Schäfer, Talentbegleitung',
          'Untersbergstr. 21, 83457 Bayerisch Gmain, Deutschland',
          'Telefon: +49 151 2726 8926',
          'E-Mail: schaefer@talentbegleitung.de',
        ],
      },
      {
        heading: 'Hosting und Server-Logfiles',
        paragraphs: [
          'Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet. Beim Aufruf der Website verarbeitet Vercel automatisch Informationen, die Ihr Browser übermittelt (sogenannte Server-Logfiles). Dazu gehören insbesondere die IP-Adresse, Datum und Uhrzeit des Zugriffs, die aufgerufene Seite, Browsertyp und -version sowie das verwendete Betriebssystem.',
          'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, stabilen und effizienten Bereitstellung der Website. Die Logdaten werden nicht mit anderen Datenquellen zusammengeführt.',
          'Mit Vercel besteht ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO. Soweit Daten in die USA übermittelt werden, stützt sich die Übermittlung auf den Angemessenheitsbeschluss der EU-Kommission zum EU-U.S. Data Privacy Framework sowie ergänzend auf EU-Standardvertragsklauseln.',
        ],
        links: [{ label: 'Datenschutzerklärung von Vercel', href: 'https://vercel.com/legal/privacy-policy' }],
      },
      {
        heading: 'SSL-/TLS-Verschlüsselung',
        paragraphs: [
          'Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit „https://“ beginnt, sowie am Schloss-Symbol in Ihrer Browserzeile.',
        ],
      },
      {
        heading: 'Kontaktformular',
        paragraphs: [
          'Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten – Name, E-Mail-Adresse, gegebenenfalls Telefonnummer sowie Ihre Nachricht – ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Anbahnung oder Durchführung eines Vertrags zusammenhängt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).',
          'Für die technische Übermittlung des Formulars nutzen wir den Dienst Web3Forms (api.web3forms.com). Ihre Eingaben werden über diesen Dienst an unser E-Mail-Postfach weitergeleitet und nach Angaben des Anbieters nicht dauerhaft gespeichert.',
          'Ihre Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Alternativ können Sie uns jederzeit direkt per E-Mail oder Telefon kontaktieren.',
        ],
        links: [{ label: 'Datenschutzerklärung von Web3Forms', href: 'https://web3forms.com/privacy' }],
      },
      {
        heading: 'Kontakt per E-Mail und Telefon',
        paragraphs: [
          'Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, Kontaktdaten, Inhalt der Anfrage) zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.',
        ],
      },
      {
        heading: 'Cookies und lokale Speicherung',
        paragraphs: [
          'Diese Website setzt keine Cookies zu Analyse-, Tracking- oder Werbezwecken ein. Im lokalen Speicher Ihres Browsers (Local Storage) werden lediglich zwei technisch erforderliche Angaben abgelegt: Ihre Sprachwahl und Ihre Entscheidung im Cookie-Hinweis. Diese Speicherung ist für die Bereitstellung des von Ihnen gewünschten Dienstes erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG); eine Übermittlung dieser Angaben an uns oder an Dritte findet nicht statt.',
          'Sie können diese Einträge jederzeit über die Cookie-Einstellungen dieser Website ändern oder durch Löschen der Websitedaten in Ihrem Browser entfernen.',
        ],
      },
      {
        heading: 'Schriftarten',
        paragraphs: [
          'Diese Website verwendet die Schriftart „Inter“. Die Schriftdateien werden lokal von unserem Server ausgeliefert; eine Verbindung zu Servern von Google oder anderen Drittanbietern findet beim Laden der Schriften nicht statt.',
        ],
      },
      {
        heading: 'Ihre Rechte',
        paragraphs: [
          'Sie haben hinsichtlich der Sie betreffenden personenbezogenen Daten folgende Rechte: Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie Datenübertragbarkeit (Art. 20 DSGVO). Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die oben genannte verantwortliche Stelle.',
          'Widerspruchsrecht (Art. 21 DSGVO): Soweit wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einzulegen.',
          'Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.',
          'Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für uns zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.',
        ],
        links: [{ label: 'Bayerisches Landesamt für Datenschutzaufsicht', href: 'https://www.lda.bayern.de' }],
      },
      {
        heading: 'Aktualität dieser Datenschutzerklärung',
        paragraphs: [
          'Diese Datenschutzerklärung hat den Stand August 2026. Wir passen sie an, sobald Änderungen an der Website oder rechtliche Vorgaben dies erforderlich machen.',
        ],
      },
    ] as LegalSection[],
  },
};

export type TranslationType = typeof de;

const en: TranslationType = {
  meta: {
    title: 'Talentbegleitung | Marie-Louise Schäfer',
    description:
      'Talent facilitation for leaders, teams and organizations: executive coaching, team development, Alps Days, trainings and organizational impulses.',
  },

  nav: {
    home: 'You matter',
    services: 'Services',
    stories: 'Success Stories',
    philosophy: 'Philosophy',
    profile: 'Profile & Publications',
    menu: 'Menu',
    close: 'Close menu',
    open: 'Open menu',
  },

  hero: {
    title: 'Strengthen leadership. Empower teams. Shape the future.',
    lead: 'Talent facilitation for leaders, teams, and organizations who want to stay clear, effective, and able to act in brittle and complex times.',
    cta: 'Tell us about your challenge',
    ctaSecondary: 'Explore our services',
  },

  intro: {
    achieveTitle: 'What you can achieve with us',
    achieve: [
      {
        title: 'Strengthen leadership',
        text: 'Clarity in complex situations, sound decisions, presence under pressure.',
      },
      {
        title: 'Empower teams',
        text: 'Improve collaboration, increase performance, and shape change constructively.',
      },
      {
        title: 'Shape the future',
        text: 'Integrate new technologies without losing sight of the people.',
      },
    ],
    statement:
      'Whether your organization is worn down by constant challenges and ongoing change – or emerges stronger from them – depends on leadership, collaboration, and the ability to use new technologies wisely. This is exactly where our talent facilitation comes in.',
    standTitle: 'What we stand for',
    stand: [
      {
        title: 'Personal strength',
        text: 'Space for reflection, relief, and well-aligned decisions.',
      },
      {
        title: 'Team effectiveness',
        text: 'People who trust each other, take ownership, and deliver results.',
      },
      {
        title: 'Organizational development',
        text: 'Impulses, formats, and processes that provide orientation and make future scenarios tangible.',
      },
    ],
    closingTitle: 'Let’s talk.',
    closingText:
      'In an initial exploratory conversation, we clarify how Talentbegleitung can support you, your team, or your organization in a concrete and practical way.',
  },

  services: {
    title: 'Services',
    lead: 'Our talent facilitation offers effective formats for individuals, teams, and organizations.',
    summary: [
      {
        id: 'executive-coaching',
        text: 'In **Executive Coaching**, we strengthen your leadership role, decision-making, and presence.',
      },
      {
        id: 'teamentwicklung',
        text: 'In **Team Development**, we support teams on their path to high performance and more enjoyment in working together.',
      },
      {
        id: 'trainings',
        text: 'With **Trainings**, we create spaces for learning, exchange, and sustainable change.',
      },
      {
        id: 'alps-days',
        text: 'With **Alps Days**, we offer a distinctive format where time in nature and strategic clarity come together.',
      },
      {
        id: 'organisationsimpulse',
        text: 'Looking for further **Organizational Impulses**? We design them precisely for you and your organization.',
      },
    ] as SummaryItem[],
    note: 'All formats are practical, confidential, and tailored to your context – from one-on-one coaching to multi-day in-person workshops.',
    items: [
      {
        id: 'executive-coaching',
        title: 'Executive Coaching & Coaching for Employees',
        lead: 'In our strengths-based and systemic coaching, we work with you to develop concrete solutions for your leadership and day-to-day challenges.',
        blocks: [
          {
            heading: 'Typical coaching topics',
            boxed: true,
            items: [
              'Leading employees; stepping into a new or expanded leadership role',
              'Taking on responsibility and increasing the impact of your teams',
              'Dealing with pressure and criticism; building resilience and empathy',
              'Finding orientation in and integrating new technologies',
              'Setting boundaries, structuring work, and maintaining work–life balance',
              'Personal and professional development',
            ],
          },
          {
            text: 'Please contact us with these or other topics. In three to ten confidential coaching sessions of 60 to 90 minutes, we develop individually tailored solutions based on the expertise of the coaching client and the decades of experience of a talent facilitator – and translate them into practice. Coaching sessions can take place virtually or on site.',
          },
          {
            text: 'Experience shows that coaching leads to immediate relief for the person being coached and their close environment and creates highly individualized solutions in a short period of time.',
          },
        ],
      },
      {
        id: 'teamentwicklung',
        title: 'Team Development & High Performance Teams',
        lead: 'Through our team development with a focus on collaboration and effectiveness, your team embarks – together with an experienced talent facilitator – on the path to high performance, with more enjoyment in working together and better results.',
        blocks: [
          {
            heading: 'We support you in enabling your team to succeed when it comes to',
            boxed: true,
            items: [
              'Accepting change',
              'Uneven distribution of expertise',
              'Increasing performance',
              'Clarifying roles and expectations',
              'Navigating interface dynamics',
              'Remote and hybrid collaboration',
              'Developing teams into high-performing teams',
              'Working with team dynamics',
              'Integrating new technologies',
              'Strengthening the capacity to change',
            ],
          },
          {
            text: 'Feel free to reach out to us with any of these or additional topics. In our experience, workshops lead to noticeable relief for both the leader and the team members.',
          },
          {
            heading: 'Typical steps',
            steps: [
              'Say hello.',
              'Introductory conversation with the leader.',
              'Optional: Interviews with team members.',
              'Workshop including preparation and follow-up.',
            ],
          },
          {
            text: 'The workshop takes place either at your location or at a jointly chosen workshop venue. In a team development process of one to three days, we create highly individualized added value for your team.',
          },
        ],
      },
      {
        id: 'alps-days',
        title: 'Alps Days',
        lead: 'Alps Days is our signature workshop for teams who aim high: a workshop combined with a mountain walk. The workshop design is embedded in a shared experience in an Alpine or pre-Alpine setting.',
        blocks: [
          {
            text: 'This workshop is suitable for the topics mentioned above.',
          },
          {
            heading: 'Alps Days is also particularly effective for',
            items: [
              'Taking stock of your current situation, developing a shared vision, and sharpening the next strategic steps.',
            ],
          },
          {
            text: 'Alps Days are offered for durations starting at two days. Please talk to us about this special workshop format and potential locations. Alps Days is delivered by Talentbegleitung in cooperation with our partner hobacon. One partner of Alps Days is the “Grande Dame of the Alps”.',
            links: [
              { label: 'hobacon', href: 'https://hobacon.de/perspektive/perspektiven-alps-days/' },
              { label: 'Grande Dame of the Alps', href: 'https://www.predigtstuhlbahn.de/en/' },
            ],
          },
        ],
      },
      {
        id: 'trainings',
        title: 'Trainings',
        lead: 'We offer trainings on a range of topics, including:',
        blocks: [
          {
            boxed: true,
            items: [
              'Resilience',
              'Stress reduction',
              'Working with new technologies',
              'Strengthening communication skills',
              'Expanding the capacity for change',
            ],
          },
          {
            text: 'In a safe learning environment, selected content is delivered to a group of employees so that participants gain greater confidence and effectiveness in their day-to-day work.',
          },
          {
            items: [
              'A training lasts at least four hours and up to four days.',
              'It can take place virtually or on site.',
            ],
          },
          { text: 'Please contact us with your desired training topic.' },
        ],
      },
      {
        id: 'organisationsimpulse',
        title: 'Organizational Impulses',
        lead: 'An organization is a living system that benefits from fresh impulses. In our experience, such impulses can take many forms:',
        blocks: [
          {
            items: [
              'A one-hour keynote on a leadership or future-related technology topic',
              'A dialogue format with part of the organization over half a day or a full day',
              'The design and facilitation of a large-group event over one or several days – whether it is a regular or special event such as an annual meeting, summer event, or future-focused dialogue',
            ],
          },
          { text: 'Please reach out to us for ideas and proven formats.' },
          {
            text: 'We are also experienced change consultants and organizational development practitioners. We provide organizational development in cooperation with doujak.eu.',
            links: [{ label: 'doujak.eu', href: 'https://www.doujak.eu/who/' }],
          },
        ],
      },
    ] as Service[],
    focusTitle: 'Client Focus Areas',
    focus: [
      'Automotive and suppliers',
      'Education sector',
      'Food industry',
      'Founders and start-up sector',
      'Global law firms',
      'Healthcare',
      'Mechanical engineering',
      'Mid-sized companies (Mittelstand)',
      'Society, academia & policy',
    ],
    languagesTitle: 'We facilitate in the following languages',
    languages: ['German', 'English', 'French', 'Spanish'],
  },

  stories: {
    title: 'Success Stories',
    lead: 'Here you will find selected voices and stories from clients who have worked with Talentbegleitung.',
    items: [
      {
        prompt: 'What does a Senior Advisor say after the team training?',
        quote:
          'My team has once again found a constructive way of working together. Thank you for the trusting way you worked with my employees!',
        author: 'Senior Advisor, Management consulting firm',
      },
      {
        prompt: 'What does a Division Head say after the training?',
        quote:
          'A trainer who doesn’t lecture, a coach who doesn’t prescribe; confident and with real depth in the subject matter.',
        author: 'Division Head, International chemical corporation',
      },
      {
        prompt: 'What does a Partner say after Executive Coaching?',
        quote:
          'I’m the one who should be saying thank you! Thank you for truly valuable guidance that was tailored precisely to me. I wish this experience for everyone and am very grateful I was able to have it.',
        author: 'Partner, Global law firm',
      },
      {
        prompt: 'What does an Employee say after coaching?',
        quote:
          'In sports, I was used to working with a coach. So why not do coaching before making an important career decision?',
        author: 'Employee, Automotive industry',
      },
      {
        prompt: 'What does a Partner say about organizational development?',
        quote:
          'Talentbegleitung is a wellspring of positive energy. They quickly grasp complex issues and, above all, get to the heart of what really matters. In addition, Talentbegleitung stands for unconventional and creative solution approaches.',
        author: 'Senior Manager, Private equity firm',
      },
    ],
  },

  philosophy: {
    title: 'Philosophy',
    paragraphs: [
      'Talent facilitators are **amplifiers of potential** and **bridge-builders** between current and future success.',
      'We act as **technology bridgeheads** and **confidential companions** on your path.',
      'Unfold your full potential. Make full use of your strengths, capabilities, and relationships at the individual, team, and organizational level!',
    ],
    cta: 'Gladly with us.',
  },

  profile: {
    title: 'Profile & Publications',
    profileTitle: 'Profile',
    profileLead: 'Talentbegleitung brings decades of experience and solid credentials in:',
    credentials: [
      'Coaching, training, and workshops – strengths-based and systemic, for leaders, teams, and organizations',
      'Mediation, facilitation, and negotiation – for clarity and sustainable outcomes in demanding situations',
      'Master Business with AI – well-founded orientation for the meaningful use of new technologies',
    ],
    focusLink: 'See our client focus areas',
    founderTitle: 'The face of the founder',
    founderName: 'Marie-Louise Schäfer, MBAI',
    founderRole: 'Founder of Talentbegleitung',
    founderText:
      'Lawyer, trained mediator, and systemic coach – with previous roles at Roland Berger, the Technical University of Munich, and on the management team of the Max Planck Digital Library. In 2011 she founded Talentbegleitung for personality and organizational development. In 2025 she completed the Master Business with AI (MBAI®) university certificate at Fresenius University of Applied Sciences; since 2026 she is also a partner at Doujak Corporate Development.',
    founderMotto: '“Don’t limit your challenges. Challenge your limits.”',
    founderLink: {
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/marie-louise-sch%C3%A4fer-989189129/',
    },
    publicationsTitle: 'Publications',
    publicationsLead: 'We are happy to share our thinking with you. Selected publications include:',
    publications: [
      {
        title: '“Fit for digital transformation – how individuals best succeed”',
        source: 'in: Global Coaching Excellence, Feldhaus / Windmühle Verlag',
        isbn: 'ISBN 978-3-86451-060-1',
      },
      {
        title: 'SPIEGEL bestseller “NIMM DEINE KARRIERE IN DIE HAND”',
        source: 'Remote Verlag',
        isbn: 'ISBN 978-1-960004-64-2',
      },
    ],
    outro: 'What we value most is being in real conversation with you. Feel free to ask about our ideas – and to challenge them.',
  },

  contact: {
    kicker: 'Make it simple. Make it work.',
    title: 'Do it with us and say hello.',
    name: 'Marie-Louise Schäfer',
    phoneLabel: 'Phone',
    phone: '+49 151 2726 8926',
    emailLabel: 'Email',
    email: 'schaefer@talentbegleitung.de',
    formTitle: 'Contact form',
    form: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone number',
      message: 'Message',
      submit: 'Send message',
      sending: 'Sending …',
      privacy: 'By submitting you agree to your details being processed in line with our privacy policy.',
      privacyLink: 'privacy policy',
      required: 'Please fill in name, email and message.',
      invalidEmail: 'Please check your email address.',
      sent: 'Thank you! Your message has arrived – we will be in touch shortly.',
      sentMail: 'Thank you! Your email client will open with the prepared message.',
      error: 'That did not work, unfortunately. Please try again or write to us directly:',
      subject: 'Enquiry via talentbegleitung.com',
    },
  },

  footer: {
    tagline: 'Talent facilitation for leaders, teams and organizations.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    legalTitle: 'Legal',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Preferences',
    rights: 'All rights reserved.',
    back: 'Back to the homepage',
  },

  cookies: {
    title: 'Cookie Preferences',
    text: 'This website works without tracking and without advertising cookies. We only store technically necessary information – your language choice and this cookie decision – locally in your browser.',
    necessary: 'Strictly necessary',
    necessaryHint: 'Language choice and cookie decision. Always active.',
    analytics: 'Statistics & analytics',
    analyticsHint: 'Not currently in use. Will be activated if and when we adopt analytics tools.',
    accept: 'Accept all',
    necessaryOnly: 'Necessary only',
    save: 'Save selection',
    open: 'Open cookie preferences',
  },

  imprint: {
    title: 'Imprint',
    sections: [
      {
        heading: 'Information pursuant to § 5 German Telemedia Act (TMG)',
        lines: [
          'Marie-Louise Schäfer, Talentbegleitung',
          'Germany',
          'Untersbergstr. 21, 83457 Bayerisch Gmain',
          'Phone: +49 151 2726 8926',
          'Email: schaefer@talentbegleitung.de',
          'Website: www.talentbegleitung.de',
        ],
      },
      {
        heading: 'VAT ID',
        paragraphs: [
          'VAT identification number in accordance with § 27 a German Value Added Tax Act (UStG): VAT ID No. DE283449715',
        ],
      },
      {
        heading: 'Responsible for content pursuant to § 18 (2) German State Media Treaty (MStV)',
        lines: [
          'Marie-Louise Schäfer, Talentbegleitung',
          'Germany',
          'Untersbergstr. 21, 83457 Bayerisch Gmain',
          'Phone: +49 151 2726 8926',
          'Email: schaefer@talentbegleitung.de',
          'Website: www.talentbegleitung.de',
        ],
      },
      {
        heading: 'Liability for Content',
        paragraphs: [
          'As a service provider, we are responsible for our own content on these pages in accordance with § 7 (1) TMG and the applicable provisions of digital law. However, pursuant to §§ 8 to 10 TMG, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances indicating unlawful activity.',
          'Obligations to remove or block the use of information under the general laws remain unaffected. Any liability in this respect is, however, only possible from the time at which we become aware of a specific legal infringement. As soon as we become aware of such legal infringements, we will remove this content immediately.',
        ],
      },
      {
        heading: 'Liability for Links',
        paragraphs: [
          'Our website may contain links to external third-party websites, the content of which we cannot influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of those pages.',
          'The linked pages were checked for possible legal violations at the time the links were created. Unlawful content was not recognizable at that time. However, permanent monitoring of the content of the linked pages is not reasonable without specific indications of a legal infringement. As soon as we become aware of legal infringements, we will remove such links immediately.',
        ],
      },
      {
        heading: 'Copyright',
        paragraphs: [
          'The content and works created by the site operator on these pages are subject to German copyright law. Contributions by third parties are marked as such. Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the prior written consent of the respective author or creator.',
          'Downloads and copies of this site are permitted only for private, non-commercial use, unless expressly stated otherwise.',
          'Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. As soon as we become aware of legal infringements, we will remove such content immediately.',
        ],
      },
    ] as LegalSection[],
  },

  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: August 2026',
    sections: [
      {
        heading: 'General information',
        paragraphs: [
          'Protecting your personal data matters to us. We process personal data exclusively within the scope of the applicable legal provisions, in particular the EU General Data Protection Regulation (GDPR), the German Federal Data Protection Act (BDSG), and the German Telecommunications Digital Services Data Protection Act (TDDDG). This privacy policy explains which data is processed when you visit this website and when you use our contact options.',
          'This website uses no analytics, tracking, or advertising services and sets no cookies for such purposes.',
        ],
      },
      {
        heading: 'Controller',
        paragraphs: ['The controller within the meaning of Art. 4 (7) GDPR is:'],
        lines: [
          'Marie-Louise Schäfer, Talentbegleitung',
          'Untersbergstr. 21, 83457 Bayerisch Gmain, Germany',
          'Phone: +49 151 2726 8926',
          'Email: schaefer@talentbegleitung.de',
        ],
      },
      {
        heading: 'Hosting and server log files',
        paragraphs: [
          'This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. When you access the website, Vercel automatically processes information transmitted by your browser (so-called server log files). This includes in particular your IP address, the date and time of access, the page accessed, browser type and version, and the operating system used.',
          'This processing is based on Art. 6 (1) (f) GDPR. Our legitimate interest lies in providing the website securely, reliably, and efficiently. The log data is not combined with other data sources.',
          'A data processing agreement pursuant to Art. 28 GDPR is in place with Vercel. Insofar as data is transferred to the USA, the transfer is based on the EU Commission’s adequacy decision on the EU-U.S. Data Privacy Framework, supplemented by EU standard contractual clauses.',
        ],
        links: [{ label: 'Vercel privacy policy', href: 'https://vercel.com/legal/privacy-policy' }],
      },
      {
        heading: 'SSL/TLS encryption',
        paragraphs: [
          'For security reasons and to protect the transmission of confidential content, this website uses SSL/TLS encryption. You can recognize an encrypted connection by the “https://” prefix and the lock symbol in your browser’s address bar.',
        ],
      },
      {
        heading: 'Contact form',
        paragraphs: [
          'If you contact us via the contact form, we process the data you provide – name, email address, phone number (if given), and your message – exclusively in order to handle your enquiry. The legal basis is Art. 6 (1) (b) GDPR where your enquiry relates to entering into or performing a contract, and otherwise Art. 6 (1) (f) GDPR (our legitimate interest in responding to your enquiry).',
          'For the technical delivery of the form we use the service Web3Forms (api.web3forms.com). Your entries are forwarded to our email inbox via this service and, according to the provider, are not stored permanently.',
          'Your data is deleted once your enquiry has been fully dealt with, unless statutory retention obligations require otherwise. Alternatively, you can always contact us directly by email or phone.',
        ],
        links: [{ label: 'Web3Forms privacy policy', href: 'https://web3forms.com/privacy' }],
      },
      {
        heading: 'Contact by email and phone',
        paragraphs: [
          'If you contact us by email or phone, we process the information you provide (e.g. name, contact details, content of your enquiry) in order to handle your request. The legal basis is Art. 6 (1) (b) GDPR or Art. 6 (1) (f) GDPR. The data is deleted once it is no longer required for this purpose and no statutory retention obligations apply.',
        ],
      },
      {
        heading: 'Cookies and local storage',
        paragraphs: [
          'This website sets no cookies for analytics, tracking, or advertising purposes. Only two technically necessary items are stored in your browser’s local storage: your language choice and your decision in the cookie notice. This storage is necessary to provide the service you request (Section 25 (2) no. 2 TDDDG); this information is not transmitted to us or to any third parties.',
          'You can change these entries at any time via this website’s cookie preferences or remove them by deleting the site data in your browser.',
        ],
      },
      {
        heading: 'Fonts',
        paragraphs: [
          'This website uses the “Inter” typeface. The font files are served locally from our own server; no connection to Google or other third-party servers is established when the fonts are loaded.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'With regard to your personal data, you have the following rights: access (Art. 15 GDPR), rectification (Art. 16 GDPR), erasure (Art. 17 GDPR), restriction of processing (Art. 18 GDPR), and data portability (Art. 20 GDPR). An informal message to the controller named above is sufficient to exercise your rights.',
          'Right to object (Art. 21 GDPR): Insofar as we process your data on the basis of Art. 6 (1) (f) GDPR, you have the right to object to the processing at any time on grounds relating to your particular situation.',
          'Where processing is based on your consent, you may withdraw it at any time with effect for the future.',
          'You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). The authority responsible for us is the Bavarian State Office for Data Protection Supervision (BayLDA), Promenade 18, 91522 Ansbach, Germany.',
        ],
        links: [{ label: 'Bavarian State Office for Data Protection Supervision', href: 'https://www.lda.bayern.de' }],
      },
      {
        heading: 'Currency of this privacy policy',
        paragraphs: [
          'This privacy policy is dated August 2026. We will update it whenever changes to the website or legal requirements make this necessary.',
        ],
      },
    ] as LegalSection[],
  },
};

export const translations: Record<Language, TranslationType> = { de, en };

/** Section ids are shared across languages so anchors stay stable. */
export const SECTIONS = {
  home: 'sie-im-mittelpunkt',
  services: 'leistungen',
  focus: 'kunden-schwerpunkte',
  stories: 'erfolgsgeschichten',
  philosophy: 'philosophie',
  profile: 'profil-publikationen',
  contact: 'kontakt',
} as const;
