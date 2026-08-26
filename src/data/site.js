/**
 * Single source of truth for every piece of copy on the site.
 * Edit here — the components read from it.
 *
 * Copy is deliberately terse. Each entry gets one line, and that line should
 * carry a number wherever the work produced one: the measurement is the part
 * worth reading, and it is what a paragraph of description around it tends to
 * bury. Anything that needs more than a line belongs in the linked repo, not
 * on this page.
 */

export const profile = {
  name: 'Jaitej',
  wordmark: 'Jaitej',
  role: 'AI Engineer',
  email: 'cjaitej@gmail.com',
  location: 'Kanpur, India',
  available: true,
  /* Points out to Drive rather than a PDF served from this site, so the link
     opens the resume for reading instead of pushing a file at whoever clicks
     it. Nothing to keep in sync at build time either - updating the resume is
     replacing the file in Drive, and this URL keeps resolving to the current
     version. */
  resume:
    'https://drive.google.com/file/d/1QNe4umfIf6hpxyE5Hob2A6xweXrYR_nd/view?usp=sharing',
  socials: [
    { label: 'GitHub', icon: 'github', href: 'https://github.com/cjaitej' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/cjaitej' },
    { label: 'Email', icon: 'mail', href: 'mailto:cjaitej@gmail.com' },
  ],
}

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

/* No About entry - the bio is two sentences in the hero, not a stop of its own. */
export const navLinks = [
  { label: 'Work', section: 'work' },
  { label: 'Research', section: 'research' },
  { label: 'Experience', section: 'experience' },
  { label: 'Contact', section: 'contact' },
]

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  /* Set as separate lines so the headline breaks where it is written to break,
     rather than wherever the viewport happens to put it. */
  title: ['Deep learning', 'that runs in the', 'real world'],
  lead: "M.Tech at IIT Kanpur, working on computer vision and on-device ML. I care more about whether a model still holds up after it leaves the notebook than about another point of accuracy.",
  /* The hero's right-hand column. Deliberately not a repeat of `facts` below
     it: that strip covers focus, education, rank and location, so this covers
     what that one does not - the shape of the career, and availability.

     Two entries rather than one: "Currently" on its own left the column with a
     short block at the top and a tall gap beneath it, and it also raised the
     obvious question it did not answer. "Previously" fills the space with the
     answer instead of with padding. */
  roles: [
    {
      label: 'Currently',
      role: 'Graduate Researcher',
      org: 'IIT Kanpur',
      detail: 'M.Tech thesis — efficient IMU-based inertial odometry',
    },
    {
      label: 'Previously',
      role: 'Associate Software Engineer',
      org: 'CBRE India',
      detail: 'NLP deduplication and XGBoost models in production',
    },
  ],
  facts: [
    { label: 'Focus', value: 'Computer Vision · On-Device ML' },
    { label: 'Education', value: 'M.Tech CSE, IIT Kanpur' },
    { label: 'GATE CSE 2025', value: 'AIR 182 / 170,825' },
    { label: 'Based in', value: 'Kanpur, India' },
  ],
}

/* -------------------------------------------------------------------------- */
/* Projects                                                                    */
/* -------------------------------------------------------------------------- */

/* SpendWise leads the list on purpose - it is the pinned flagship, not the
   most recent. Everything after it runs newest to oldest.

   `featured: true` pulls it out of the numbered index into a block of its own
   above the list, so it carries a lead sentence and figures the one-line rows
   have no room for. It keeps its place in this array, though, because the
   index numbers are taken from position here - which is what makes the
   featured block 01 and the list start at 02.

   `href` is always the source repo, and is always the row's primary link -
   clicking the row itself goes there, same as every project. `demo` is
   optional; where present, it adds a small visible "Live Demo" link alongside
   the repo one, for the projects that have a hosted app to try rather than
   just read. */
export const projects = [
  {
    slug: 'spendwise',
    title: 'SpendWise',
    period: 'Apr 2026 — Jun 2026',
    featured: true,
    blurb: 'Reads bank SMS on-device with a TinyBERT NER model at 97% merchant accuracy.',
    lead: 'Turns bank SMS into structured transactions entirely on-device — a TinyBERT NER model running in ONNX Runtime, so no bank message ever leaves the phone. A RAG assistant answers questions about your own spending on top of it.',
    stats: [
      { value: '97%', label: 'Merchant extraction accuracy' },
      { value: '4,361', label: 'SMS records hand-labelled' },
      { value: '748', label: 'Merchants covered' },
    ],
    tags: ['React Native', 'TinyBERT', 'ONNX Runtime', 'RAG', 'Supabase'],
    href: 'https://github.com/cjaitej/SpendWise',
    demo: 'https://github.com/cjaitej/SpendWise/releases/tag/V1',
  },
  {
    slug: 'askiitk',
    title: 'AskIITK',
    period: 'Jun 2026 — Aug 2026',
    blurb: 'Cited RAG over official IITK sources — every answer traceable to a citation.',
    tags: ['RAG', 'FastAPI', 'Azure'],
    href: 'https://github.com/cjaitej/Ask-IITK',
    demo: 'https://iitk-rag.proudbay-827b9367.centralindia.azurecontainerapps.io/ui',
  },
  {
    slug: 'coregpt',
    title: 'CoreGPT',
    period: 'Jun 2026 — Jul 2026',
    blurb: 'GPT-2 ablation framework — RoPE alone cut perplexity 11.6% on an identical baseline.',
    tags: ['PyTorch', 'Transformers'],
    href: 'https://github.com/cjaitej/CoreGPT',
    demo: 'https://coregpt.proudbay-827b9367.centralindia.azurecontainerapps.io/',
  },
  {
    slug: 'solar-wind-space-weather',
    title: 'Solar Wind Analytics',
    period: 'May 2026 — Jun 2026',
    blurb: '31 years of NASA OMNI data, 676 storms detected, 271K rows kept interactive.',
    tags: ['React', 'D3'],
    href: 'https://github.com/cjaitej/Solar-Wind-Space-Weather-Analytics',
  },
  {
    slug: 'disaster-damage-assessment',
    title: 'Disaster Damage Assessment',
    period: 'Jan 2026 — Mar 2026',
    blurb: 'Hybrid Attention Transformer for aerial segmentation — 77.35% mIoU at 44ms.',
    tags: ['PyTorch', 'Segmentation'],
    href: 'https://github.com/cjaitej/Disaster-Damage-Assessment-Using-Vision-Transformers',
    demo: 'https://rescueseg-c6d3e4hqe0huava7.eastasia-01.azurewebsites.net/',
  },
  {
    slug: 'diffusion-facial-synthesis',
    title: 'FaceForge',
    period: 'May 2025 — Jun 2025',
    blurb: 'Attribute-conditioned DDPM built from scratch — 14.07 FID, 20× faster with DDIM.',
    tags: ['PyTorch', 'Diffusion'],
    href: 'https://github.com/cjaitej/Face-Generation-using-Diffusion-Model',
    demo: 'https://diffusion-app.proudbay-827b9367.centralindia.azurecontainerapps.io',
  },
  {
    slug: 'self-driving-perception',
    title: 'Self-Driving Perception',
    period: 'Oct 2024 — Dec 2024',
    blurb: 'Joint segmentation and monocular depth on Cityscapes — 91.64% accuracy, 0.018 MAE.',
    tags: ['PyTorch', 'Attention U-Net'],
    href: 'https://github.com/cjaitej/Self-Driving-Cars',
  },
]

/* -------------------------------------------------------------------------- */
/* Research                                                                    */
/* -------------------------------------------------------------------------- */

/* Exactly what the resume's own "Research Experience" section lists - one
   entry, the M.Tech thesis. */
export const research = {
  title: 'Efficient IMU-Based Inertial Odometry for Patient Tracking',
  meta: 'M.Tech Thesis · Prof. Priyanka Bagade · IIT Kanpur · May 2026 — Present',
  blurb:
    'A lightweight inertial odometry backbone that beats RoNIN ResNet at a fraction of the size, paired with a Random Forest stage that refines its velocity estimates.',
  stats: [
    { value: '598K', label: 'Parameters — 7.7× smaller than RoNIN ResNet' },
    { value: '3.58m', label: 'ATE — down from 4.16m after refinement' },
    { value: '2.61m', label: 'RTE — a 17.2% improvement' },
  ],
}

/* -------------------------------------------------------------------------- */
/* Experience & Education                                                      */
/* -------------------------------------------------------------------------- */

/* Both lists share a shape, so one component renders them under two headings.

   Periods are "Month Year — Month Year", degraded to a bare year where the
   month is not something the record actually pins down (a degree is awarded in
   a year, not a month). Anything ongoing ends in "Present" rather than a
   trailing dash. */

export const experience = [
  {
    period: 'May 2026 — Present',
    role: 'Graduate Researcher',
    org: 'IIT Kanpur',
    blurb: 'M.Tech thesis on efficient IMU-based inertial odometry.',
  },
  {
    period: 'Aug 2025 — Nov 2025',
    role: 'Teaching Assistant, ESC111',
    org: 'IIT Kanpur',
    blurb: 'Fundamentals of Computing.',
  },
  {
    period: 'Jan 2024 — Jul 2025',
    role: 'Associate Software Engineer',
    org: 'CBRE India',
    blurb: 'NLP dedup across 200K+ work orders; XGBoost models up 11% in production.',
  },
]

export const education = [
  {
    period: '2025 — Present',
    role: 'M.Tech, Computer Science',
    org: 'IIT Kanpur',
    blurb: 'CPI 8.41 / 10.',
  },
  {
    period: '2020 — 2024',
    role: 'B.Tech, Computer Science',
    org: 'GITAM, Hyderabad',
    blurb: 'CPI 9.23 / 10.',
  },
]

/* -------------------------------------------------------------------------- */
/* Skills                                                                      */
/* -------------------------------------------------------------------------- */

/* Grouped lines of plain text rather than a grid of coloured glyph tiles. A
   tile per technology gave 27 pieces of chrome equal visual weight and said
   no more than the words do. */
export const skills = [
  { group: 'Languages', items: ['Python', 'C++', 'SQL', 'TypeScript', 'JavaScript'] },
  {
    group: 'AI / ML',
    items: ['PyTorch', 'TensorFlow', 'Transformers', 'Scikit-learn', 'LangChain', 'ONNX', 'RAG'],
  },
  {
    group: 'Platform',
    items: ['Docker', 'Azure', 'FastAPI', 'Supabase', 'PostgreSQL', 'Git', 'Linux'],
  },
]
