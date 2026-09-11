# -*- coding: utf-8 -*-
"""Generates the secondary-page artboards from one shared design system,
so desktop and mobile can never drift apart."""

INK   = '#0a1f38'
BODY  = '#5a5a6a'
MUTED = '#64748b'
LINE  = '#e8edf1'
HAIR  = '#eef2f5'
SAGE  = '#98B690'
SAGED = '#4e6645'
BG    = '#f7f9fa'
BLUE  = ('linear-gradient(180deg, #0a4a85 0%, #003366 55%, #00264d 100%)')

HEAD = '''<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap">
  <style>
    body { margin: 0; }
    * { box-sizing: border-box; }
    a { color: #003366; text-decoration: none; }
    a:hover { color: #0a4a85; }
    .h { font-family: "Instrument Sans", -apple-system, "Helvetica Neue", sans-serif; letter-spacing: -0.035em; }
    .b { font-family: Inter, -apple-system, "Helvetica Neue", sans-serif; }
    .eyebrow { font-family: Inter, sans-serif; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; }
  </style>
</helmet>
'''
FOOT = '''</x-dc>
</body>
</html>
'''

def nav_desktop(active):
    items = ['Accueil', 'À propos', 'Services', 'FAQ', 'Contact', 'Articles']
    links = ''.join(
        f'<span style="color: {"#fff" if i==active else "rgba(255,255,255,0.7)"};">{i}</span>'
        for i in items)
    return f'''  <div style="display: flex; align-items: center; justify-content: space-between; height: 72px; padding: 0 72px; background: {INK};">
    <div class="h" style="font-size: 21px; font-weight: 600; color: #fff;">MobiSoins</div>
    <div style="display: flex; gap: 32px; font-size: 14px;">{links}</div>
    <div style="display: flex; gap: 14px; align-items: center;">
      <span style="font-size: 13px; color: rgba(255,255,255,0.5);">FR / EN</span>
      <div style="background: {BLUE}; color: #fff; font-size: 13.5px; font-weight: 500; padding: 10px 18px; border-radius: 8px;">Rejoindre la liste</div>
    </div>
  </div>
'''

def nav_mobile():
    return f'''  <div style="display: flex; align-items: center; justify-content: space-between; height: 60px; padding: 0 20px; background: {INK};">
    <div class="h" style="font-size: 18px; font-weight: 600; color: #fff;">MobiSoins</div>
    <div style="display: flex; flex-direction: column; gap: 5px; padding: 12px; margin-right: -12px;">
      <div style="width: 20px; height: 1.5px; background: #fff;"></div>
      <div style="width: 20px; height: 1.5px; background: #fff;"></div>
    </div>
  </div>
'''

def page_header(eyebrow, title, lead, mobile=False):
    pad = '40px 20px 48px' if mobile else '72px 72px 88px'
    ts  = '34px' if mobile else '56px'
    ls  = '15.5px' if mobile else '18px'
    return f'''  <div style="background: {INK}; color: #fff; padding: {pad};">
    <div class="eyebrow" style="font-size: {'11px' if mobile else '12px'}; color: {SAGE};">{eyebrow}</div>
    <h1 class="h" style="margin: {'14px' if mobile else '20px'} 0 0; font-size: {ts}; line-height: 1.06; font-weight: 600; color: #fff; max-width: 760px;">{title}</h1>
    <p style="margin: {'14px' if mobile else '22px'} 0 0; font-size: {ls}; line-height: 1.6; font-weight: 300; color: #a8bacd; max-width: 620px; text-wrap: pretty;">{lead}</p>
  </div>
'''

def footer(mobile=False):
    if mobile:
        return f'''  <div style="background: #04142a; color: #fff; padding: 36px 20px 24px;">
    <div class="h" style="font-size: 18px; font-weight: 600;">MobiSoins</div>
    <div style="font-size: 13px; color: #8da4bd; margin-top: 10px; font-weight: 300;">Soins infirmiers à domicile, partout au Québec.</div>
    <div style="display: flex; flex-direction: column; gap: 2px; margin-top: 22px;">
      <span style="font-size: 14px; color: #c3d2e0; padding: 13px 0; min-height: 46px; display: flex; align-items: center;">Soins offerts</span>
      <span style="font-size: 14px; color: #c3d2e0; padding: 13px 0; min-height: 46px; display: flex; align-items: center;">Rejoindre le réseau</span>
      <span style="font-size: 14px; color: #c3d2e0; padding: 13px 0; min-height: 46px; display: flex; align-items: center;">Confidentialité</span>
    </div>
    <div style="margin-top: 20px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: #5f7a96;">© 2026 MobiSoins · Fait au Québec</div>
  </div>
'''
    cols = [('Service', ['Soins offerts', 'Secteurs desservis', 'Tarifs']),
            ('Infirmières', ['Rejoindre le réseau', 'Exigences OIIQ', 'Rémunération']),
            ('Légal', ['Confidentialité', 'Conditions', 'Sécurité des données'])]
    colhtml = ''.join(
        f'''      <div style="display: flex; flex-direction: column; gap: 11px;">
        <div class="eyebrow" style="font-size: 12px; color: #5f7a96;">{t}</div>''' +
        ''.join(f'<span style="font-size: 13.5px; color: #c3d2e0;">{l}</span>' for l in ls) +
        '</div>' for t, ls in cols)
    return f'''  <div style="background: #04142a; color: #fff; padding: 54px 72px 30px;">
    <div style="display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 48px;">
      <div>
        <div class="h" style="font-size: 20px; font-weight: 600;">MobiSoins</div>
        <div style="font-size: 13.5px; line-height: 1.6; color: #8da4bd; margin-top: 12px; max-width: 280px; font-weight: 300;">Soins infirmiers à domicile, partout au Québec.</div>
      </div>
{colhtml}
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 36px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12.5px; color: #5f7a96;">
      <span>© 2026 MobiSoins</span><span>Fait au Québec</span>
    </div>
  </div>
'''

def wrap(width, inner):
    return HEAD + f'<div class="b" style="width: {width}px; background: #fff; color: #1a1a24;">\n' + inner + '</div>\n' + FOOT

def rule_item(title, desc, mobile=False):
    return f'''      <div style="border-top: 1px solid {INK}; padding-top: 20px;">
        <div class="h" style="font-size: {'17px' if mobile else '18px'}; font-weight: 500; color: {INK};">{title}</div>
        <div style="font-size: 14.5px; line-height: 1.6; color: {BODY}; margin-top: 10px; font-weight: 300;">{desc}</div>
      </div>'''

def grid(items, cols, mobile=False):
    tpl = f'repeat({cols}, minmax(0, 1fr))'
    return (f'    <div style="display: grid; grid-template-columns: {tpl}; gap: 30px; row-gap: 40px;">\n'
            + '\n'.join(items) + '\n    </div>\n')

def cta_band(mobile=False):
    if mobile:
        return f'''  <div style="background: {BG}; border-top: 1px solid {LINE}; padding: 48px 20px;">
    <h2 class="h" style="margin: 0; font-size: 28px; line-height: 1.1; font-weight: 600; color: {INK}; text-align: center;">Nous lançons bientôt au Québec.</h2>
    <div style="background: {BLUE}; color: #fff; font-size: 15px; font-weight: 500; padding: 16px; border-radius: 10px; text-align: center; margin-top: 22px; min-height: 52px;">Rejoindre la liste d'attente</div>
  </div>
'''
    return f'''  <div style="background: {BG}; border-top: 1px solid {LINE}; padding: 96px 72px; text-align: center;">
    <h2 class="h" style="margin: 0; font-size: 40px; line-height: 1.1; font-weight: 600; color: {INK};">Nous lançons bientôt au Québec.</h2>
    <p style="margin: 16px auto 0; font-size: 16.5px; color: {BODY}; font-weight: 300; max-width: 440px;">Inscrivez-vous pour être parmi les premiers servis dans votre secteur.</p>
    <div style="display: inline-block; background: {BLUE}; color: #fff; font-size: 15px; font-weight: 500; padding: 15px 30px; border-radius: 10px; margin-top: 28px;">Rejoindre la liste d'attente</div>
  </div>
'''

# ─────────────────────────── content (all from the app's own FR strings)

VALUES = [
 ("Accessibilité", "Des soins de qualité pour tous, partout au Québec, sans les longues attentes."),
 ("Humanité", "La personne au cœur de chaque intervention, avec écoute et bienveillance."),
 ("Excellence clinique", "Des infirmières membres de l'OIIQ, tenues aux plus hauts standards de pratique."),
 ("Innovation", "La technologie au service de soins plus rapides, sûrs et transparents."),
]
TEAM = [("Rigueur clinique", "Fondée par deux infirmières cliniciennes."),
        ("Ingénierie solide", "Une plateforme construite pour la fiabilité."),
        ("Ancrage terrain", "Conçue au Québec, pour le réseau québécois.")]
SERVICES = [
 ("Soins infirmiers", "Pansements, retrait de points, administration de médicaments, soins post-opératoires et suivi clinique."),
 ("Suivi des maladies chroniques", "Suivi du diabète, de l'hypertension et autres conditions, avec enseignement et prévention des complications."),
 ("Bilan de santé", "Évaluation complète, prise des signes vitaux et conseils personnalisés pour votre santé."),
 ("Santé sexuelle", "Dépistage ITSS, contraception, éducation et suivi."),
 ("Soins aux aînés", "Surveillance de la santé, gestion de la médication et soutien à domicile."),
 ("Analyses et prélèvements", "Prélèvements sanguins et tests diagnostiques, selon ordonnance."),
 ("Services aux entreprises", "Cliniques mobiles, bilans de santé et programmes de prévention en milieu de travail."),
]
FAQS = [
 ("Comment fonctionne MobiSoins?", "MobiSoins jumelle les patients à des infirmières membres de l'OIIQ pour des soins à domicile. Vous réservez dans l'application, suivez votre infirmière en temps réel, puis payez de façon sécuritaire une fois le soin terminé."),
 ("Les infirmières sont-elles vraiment qualifiées?", None),
 ("Quels sont les coûts?", None),
 ("Quelles régions sont couvertes?", None),
 ("Les soins sont-ils remboursés par les assurances?", None),
 ("Puis-je annuler une réservation?", None),
 ("Mes données médicales sont-elles protégées?", None),
 ("Comment devenir infirmière partenaire?", None),
]
ARTICLES = [
 ("Innovation santé", "Télésanté", "Comment la télésanté transforme le suivi médical",
  "Et si consulter un professionnel de la santé devenait aussi simple qu'un appel vidéo? La télésanté transforme le suivi médical en profondeur.", "[X] min"),
 ("Guide pratique", "Domicile", "Comment bien se préparer à sa première visite avec MobiSoins",
  "Recevoir des soins infirmiers à domicile, c'est bénéficier d'un suivi professionnel directement dans son environnement.", "[X] min"),
 ("Tendance santé", "Aînés", "Les avantages des soins à domicile pour les aînés",
  "Et si le meilleur endroit pour vieillir n'était pas l'hôpital… mais tout simplement chez soi?", "[X] min"),
]

def section(inner, mobile=False, bg='#fff', last=False):
    pad = f'48px 20px' if mobile else f'96px 72px'
    return f'  <div style="background: {bg}; padding: {pad};">\n{inner}  </div>\n'

def heading(eyebrow, title, mobile=False, sub=None):
    out = f'    <div class="eyebrow" style="font-size: {"11px" if mobile else "12px"}; color: {MUTED};">{eyebrow}</div>\n'
    out += f'    <h2 class="h" style="margin: {"12px" if mobile else "18px"} 0 0; font-size: {"28px" if mobile else "40px"}; line-height: 1.1; font-weight: 600; color: {INK}; max-width: 680px;">{title}</h2>\n'
    if sub:
        out += f'    <p style="margin: 14px 0 0; font-size: {"15px" if mobile else "16.5px"}; line-height: 1.65; color: {BODY}; font-weight: 300; max-width: 620px; text-wrap: pretty;">{sub}</p>\n'
    return out

# ─────────────────────────── À PROPOS
def about(mobile=False):
    w = 390 if mobile else 1440
    cols = 1 if mobile else 4
    s  = nav_mobile() if mobile else nav_desktop('À propos')
    s += page_header('À propos', "Des soins accessibles,<br>où que vous soyez.",
        "Au Québec, obtenir des soins simples peut exiger des heures d'attente, parfois des jours. MobiSoins existe pour changer cela.", mobile)
    body = heading('Le problème', "Un système sous pression, des patients laissés de côté.", mobile,
        "Fondée par deux infirmières cliniciennes, MobiSoins a pour mission de rendre les soins de santé plus accessibles, rapides et sécuritaires, tout en plaçant la personne au cœur de chaque intervention.")
    s += section(body, mobile)
    v = heading('Nos valeurs', 'Ce qui nous guide', mobile) + '\n    <div style="height: 40px;"></div>\n'
    v += grid([rule_item(t, d, mobile) for t, d in VALUES], cols, mobile)
    s += section(v, mobile, BG)
    t = heading('Notre équipe', 'Le soin et la technologie, côte à côte.', mobile) + '\n    <div style="height: 40px;"></div>\n'
    t += grid([rule_item(a, b, mobile) for a, b in TEAM], 1 if mobile else 3, mobile)
    s += section(t, mobile)
    s += cta_band(mobile) + footer(mobile)
    return wrap(w, s)

# ─────────────────────────── SERVICES
def services(mobile=False):
    w = 390 if mobile else 1440
    s  = nav_mobile() if mobile else nav_desktop('Services')
    s += page_header('Services', 'Les soins que nous offrons<br>à domicile.',
        "MobiSoins offre une gamme complète de soins infirmiers adaptés à vos besoins, à domicile ou en ligne.", mobile)
    body = grid([rule_item(t, d, mobile) for t, d in SERVICES], 1 if mobile else 3, mobile)
    body += f'    <div style="font-size: 13px; color: {MUTED}; margin-top: 48px;">Certains services sont admissibles au remboursement par les assurances privées. Reçus officiels fournis.</div>\n'
    s += section(body, mobile)
    s += cta_band(mobile) + footer(mobile)
    return wrap(w, s)

# ─────────────────────────── FAQ
def faq(mobile=False):
    w = 390 if mobile else 1440
    s  = nav_mobile() if mobile else nav_desktop('FAQ')
    s += page_header('FAQ', 'Questions fréquentes',
        'Trouvez des réponses à vos questions les plus courantes.', mobile)
    rows = ''
    for i, (q, a) in enumerate(FAQS):
        open_ = (i == 0)
        rows += f'''      <div style="border-bottom: 1px solid {HAIR};">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: {"20px 0" if mobile else "24px 0"}; min-height: 56px;">
          <div class="h" style="font-size: {"16px" if mobile else "18px"}; font-weight: 500; color: {INK};">{q}</div>
          <div style="flex-shrink: 0; width: 20px; height: 20px; position: relative;">
            <div style="position: absolute; top: 9px; left: 0; width: 20px; height: 1.5px; background: {INK};"></div>
            {'' if open_ else f'<div style="position: absolute; top: 0; left: 9px; width: 1.5px; height: 20px; background: {INK};"></div>'}
          </div>
        </div>
        {f'<div style="font-size: 14.5px; line-height: 1.7; color: {BODY}; font-weight: 300; padding-bottom: 24px; max-width: 720px;">{a}</div>' if open_ and a else ''}
      </div>
'''
    body = f'    <div style="max-width: 880px;">\n{rows}    </div>\n'
    body += f'''    <div style="display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; background: {BG}; border-radius: 16px; padding: {"24px" if mobile else "32px"}; margin-top: 48px;">
      <div class="h" style="font-size: {"17px" if mobile else "19px"}; font-weight: 500; color: {INK};">Vous ne trouvez pas votre réponse?</div>
      <div style="border: 1px solid {LINE}; border-radius: 9px; padding: 13px 22px; font-size: 14px; color: {INK}; min-height: 48px; display: flex; align-items: center;">Nous écrire</div>
    </div>
'''
    s += section(body, mobile)
    s += footer(mobile)
    return wrap(w, s)

# ─────────────────────────── CONTACT
def contact(mobile=False):
    w = 390 if mobile else 1440
    s  = nav_mobile() if mobile else nav_desktop('Contact')
    s += page_header('Contact', 'Contactez-nous',
        'Nous sommes là pour vos questions, commentaires ou propositions de partenariat. Nous vous répondons dans les plus brefs délais.', mobile)
    def field(label, ph, tall=False):
        return f'''        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="font-size: 13px; font-weight: 500; color: {INK};">{label}</div>
          <div style="border: 1px solid {LINE}; border-radius: 10px; padding: 15px 16px; font-size: 14.5px; color: #94a3b8; min-height: {"120px" if tall else "52px"};">{ph}</div>
        </div>'''
    two = 'grid-template-columns: 1fr;' if mobile else 'grid-template-columns: repeat(2, minmax(0, 1fr));'
    form = f'''      <div style="display: grid; {two} gap: 20px;">
{field('Prénom','Prénom')}
{field('Nom','Nom')}
      </div>
      <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 20px;">
{field('Courriel','votre@courriel.com')}
{field('Sujet','Comment pouvons-nous vous aider?')}
{field('Message','Décrivez votre demande en détail...', True)}
      </div>
      <div style="background: {BLUE}; color: #fff; font-size: 15px; font-weight: 500; padding: 16px 28px; border-radius: 10px; margin-top: 24px; min-height: 52px; display: flex; align-items: center; justify-content: center;{"" if mobile else " width: fit-content;"}">Envoyer le message</div>'''
    details = f'''      <div style="background: {BG}; border-radius: 16px; padding: {"24px" if mobile else "32px"};">
        <div class="eyebrow" style="font-size: 11px; color: {MUTED};">Coordonnées</div>
        <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 22px;">
          <div><div style="font-size: 12.5px; color: {MUTED};">Courriel</div><div class="h" style="font-size: 16px; font-weight: 500; color: {INK}; margin-top: 4px;">info@mobisoins.com</div></div>
          <div style="height: 1px; background: {LINE};"></div>
          <div><div style="font-size: 12.5px; color: {MUTED};">Téléphone</div><div class="h" style="font-size: 16px; font-weight: 500; color: {INK}; margin-top: 4px;">[NUMÉRO]</div></div>
          <div style="height: 1px; background: {LINE};"></div>
          <div><div style="font-size: 12.5px; color: {MUTED};">Adresse</div><div class="h" style="font-size: 16px; font-weight: 500; color: {INK}; margin-top: 4px;">[ADRESSE]</div></div>
        </div>
      </div>'''
    if mobile:
        body = form + '\n    <div style="height: 40px;"></div>\n' + details + '\n'
    else:
        body = f'''    <div style="display: grid; grid-template-columns: 1.4fr 1fr; gap: 64px; align-items: start;">
      <div>{form}
      </div>
{details}
    </div>
'''
    s += section(body, mobile)
    s += footer(mobile)
    return wrap(w, s)

# ─────────────────────────── ARTICLES
def articles(mobile=False):
    w = 390 if mobile else 1440
    s  = nav_mobile() if mobile else nav_desktop('Articles')
    s += page_header('Notre blogue', 'Derniers articles',
        'Restez au fait des dernières actualités en santé, des conseils de nos experts et des innovations MobiSoins.', mobile)
    cards = []
    for tag1, tag2, title, desc, rt in ARTICLES:
        cards.append(f'''      <div style="display: flex; flex-direction: column; border: 1px solid {LINE}; border-radius: 16px; overflow: hidden;">
        <div style="height: {"180px" if mobile else "200px"}; background: {BG}; border-bottom: 1px solid {LINE};"></div>
        <div style="padding: {"22px" if mobile else "26px"}; display: flex; flex-direction: column; gap: 12px; flex-grow: 1;">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span style="border: 1px solid {LINE}; border-radius: 999px; padding: 5px 11px; font-size: 11.5px; color: {BODY};">{tag1}</span>
            <span style="border: 1px solid {LINE}; border-radius: 999px; padding: 5px 11px; font-size: 11.5px; color: {BODY};">{tag2}</span>
          </div>
          <div class="h" style="font-size: {"18px" if mobile else "20px"}; font-weight: 500; line-height: 1.3; color: {INK};">{title}</div>
          <div style="font-size: 14px; line-height: 1.6; color: {BODY}; font-weight: 300;">{desc}</div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 16px; border-top: 1px solid {HAIR};">
            <span style="font-size: 12.5px; color: {MUTED};">{rt} de lecture</span>
            <span style="font-size: 13.5px; font-weight: 500; color: {INK};">Lire l'article →</span>
          </div>
        </div>
      </div>''')
    body = grid(cards, 1 if mobile else 3, mobile)
    s += section(body, mobile)
    s += cta_band(mobile) + footer(mobile)
    return wrap(w, s)

PAGES = {
 'About': about(False),        'AboutMobile': about(True),
 'Services': services(False),  'ServicesMobile': services(True),
 'Faq': faq(False),            'FaqMobile': faq(True),
 'Contact': contact(False),    'ContactMobile': contact(True),
 'Articles': articles(False),  'ArticlesMobile': articles(True),
}
for name, html in PAGES.items():
    open(f'{name}.dc.html', 'w').write(html)
    print(f'{name}.dc.html  {len(html):>6} bytes')
