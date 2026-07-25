export type Language = 'de' | 'en';

export type LinkItem = { label: string; href: string };

/** A paragraph, a bullet list, or both — with optional outbound links. */
export type Block = {
  heading?: string;
  text?: string;
  items?: string[];
  links?: LinkItem[];
};

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
    eyebrow: 'Talentbegleitung',
    title: 'Sie im Mittelpunkt. Führung stärken. Wandel gestalten.',
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
      'Im Executive Coaching stärken wir Ihre Führungsrolle, Entscheidungsfähigkeit und Präsenz.',
      'In der Teamentwicklung begleiten wir Teams auf dem Weg zu High Performance und mehr Freude an Zusammenarbeit.',
      'Mit Trainings und Organisationsimpulsen schaffen wir Räume für Lernen, Austausch und nachhaltige Veränderung.',
      'Mit Alps Days bieten wir ein besonderes Format, in dem Naturerfahrung und strategische Klärung zusammenkommen.',
    ],
    note: 'Alle Formate sind praxisnah, vertraulich und auf Ihren Kontext zugeschnitten – vom digitalen Einzelcoaching bis zum mehrtägigen Workshop vor Ort.',
    items: [
      {
        id: 'executive-coaching',
        title: 'Executive Coaching & Coaching für Mitarbeitende',
        lead: 'Im Rahmen unseres stärkenorientierten und systemischen Coachings werden gemeinsam mit Ihnen Lösungsansätze erarbeitet.',
        blocks: [
          {
            heading: 'Typische Coachingthemen',
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
            items: [
              'Sagen Sie Hallo.',
              'Kennenlerngespräch mit der Führungspersönlichkeit.',
              'Optional: Interviews mit den Mitarbeitenden.',
              'Workshop inklusive Vor- und Nachbereitung.',
              'Der Workshop findet vor Ort bei Ihnen oder an einem gemeinsam gewählten Workshoport statt.',
            ],
          },
          {
            text: 'In einem Teamentwicklungsprozess von ein bis drei Tagen wird ein hochindividueller Mehrwert für Ihr Team gemeinsam erarbeitet.',
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

  philosophy: {
    title: 'Philosophie',
    text: 'Talentbegleiter sind Potenzialverstärker und Brückenbauer zwischen jetzigem und zukünftigem Erfolg, Technologiebrückenköpfe und vertrauliche Wegbegleiter für Sie. Uns geht es darum, dass Sie Ihr Potenzial voll entfalten und Ihre Stärken, Kompetenzen und Beziehungen auf individueller, Team- und Organisationsebene wirksam nutzen können.',
  },

  profile: {
    title: 'Profil & Publikationen',
    profileTitle: 'Profil',
    profileLead: 'Talentbegleitung hat jahrzehntelange Expertise & Zertifikate in den Bereichen',
    credentials: [
      'Coaching, Training, Workshops',
      'Mediation, Moderation, Verhandlungsführung',
      'Master Business with AI',
    ],
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
    title: 'Sagen Sie hallo.',
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
    title: 'Datenschutz',
    placeholder:
      'Die vollständige Datenschutzerklärung wird derzeit erstellt und an dieser Stelle veröffentlicht. Bis dahin gilt: Diese Website setzt keine Tracking- oder Werbe-Cookies ein. Personenbezogene Daten werden ausschließlich verarbeitet, wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch kontaktieren – und ausschließlich zur Bearbeitung Ihrer Anfrage.',
    controllerTitle: 'Verantwortliche Stelle',
    controller: [
      'Marie-Louise Schäfer, Talentbegleitung',
      'Untersbergstr. 21, 83457 Bayerisch Gmain, Germany',
      'Telefon: +49 151 2726 8926',
      'E-Mail: schaefer@talentbegleitung.de',
    ],
    rightsTitle: 'Ihre Rechte',
    rights:
      'Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie ein Widerspruchsrecht und ein Recht auf Datenübertragbarkeit. Wenden Sie sich dafür gerne an die oben genannte Adresse.',
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
    eyebrow: 'Talentbegleitung',
    title: 'You matter. Strengthen leadership. Shape change.',
    lead: 'Talent facilitation for leaders, teams, and organizations who want to stay clear, effective, and able to act in brittle and complex times.',
    cta: 'Arrange an introductory conversation',
    ctaSecondary: 'See our services',
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
      'In Executive Coaching, we strengthen your leadership role, decision-making, and presence.',
      'In Team Development, we support teams on their path to high performance and more enjoyment in working together.',
      'With Trainings and Organizational Impulses, we create spaces for learning, exchange, and sustainable change.',
      'With Alps Days, we offer a distinctive format where time in nature and strategic clarity come together.',
    ],
    note: 'All formats are practical, confidential, and tailored to your context – from virtual one-on-one coaching to multi-day in-person workshops.',
    items: [
      {
        id: 'executive-coaching',
        title: 'Executive Coaching & Coaching for Employees',
        lead: 'In our strengths-based and systemic coaching, we work with you to develop concrete solutions for your leadership and day-to-day challenges.',
        blocks: [
          {
            heading: 'Typical coaching topics',
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
            items: [
              'Say hello.',
              'Introductory conversation with the leader.',
              'Optional: Interviews with team members.',
              'Workshop including preparation and follow-up.',
              'The workshop takes place either at your location or at a jointly chosen workshop venue.',
            ],
          },
          {
            text: 'In a team development process of one to three days, we create highly individualized added value for your team.',
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

  philosophy: {
    title: 'Philosophy',
    text: 'Talent facilitators are amplifiers of potential and bridge-builders between current and future success, bridgeheads between people and technology, and confidential companions on your path. Our purpose is to enable you to fully unfold your potential and to use your strengths, capabilities, and relationships effectively – at the individual, team, and organizational level.',
  },

  profile: {
    title: 'Profile & Publications',
    profileTitle: 'Profile',
    profileLead: 'Talentbegleitung brings decades of experience and solid credentials in:',
    credentials: [
      'Coaching, training, and workshops',
      'Mediation, facilitation, and negotiation',
      'Master Business with AI',
    ],
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
    placeholder:
      'The full privacy policy is currently being prepared and will be published here. Until then: this website uses no tracking or advertising cookies. Personal data is processed only when you contact us via the contact form, by email or by phone – and solely in order to handle your enquiry.',
    controllerTitle: 'Controller',
    controller: [
      'Marie-Louise Schäfer, Talentbegleitung',
      'Untersbergstr. 21, 83457 Bayerisch Gmain, Germany',
      'Phone: +49 151 2726 8926',
      'Email: schaefer@talentbegleitung.de',
    ],
    rightsTitle: 'Your rights',
    rights:
      'You have the right at any time to information, rectification, erasure and restriction of the processing of your data, as well as a right to object and a right to data portability. Please contact us at the address above.',
  },
};

export const translations: Record<Language, TranslationType> = { de, en };

/** Section ids are shared across languages so anchors stay stable. */
export const SECTIONS = {
  home: 'sie-im-mittelpunkt',
  services: 'leistungen',
  stories: 'erfolgsgeschichten',
  philosophy: 'philosophie',
  profile: 'profil-publikationen',
} as const;
