/* =====================================================================
   CONTENT FILE: edit this file to update the website.
   ---------------------------------------------------------------------
   • Everything shown on the site comes from this one file.
   • Text goes inside "quotes". Keep the commas between items.
   • `null` means "not provided yet". While settings.showPlaceholders
     is true, missing items appear on the site as [BRACKETED] markers
     so you can see what still needs filling in.
   • After saving, refresh the page in your browser to see changes.
   ===================================================================== */

window.SITE = {
  settings: {
    // Shows [BRACKETED] markers for missing content. Set to false before publishing.
    showPlaceholders: false,

    // Layout style: "editorial" (default), "minimal", or "sidebar".
    // Compare them on design-options.html.
    defaultStyle: "editorial",

    // Your name as it appears in author lists; it is shown in bold.
    highlightAuthor: ["Reese A. Dunne", "Reese Dunne", "Dunne RA"],

    // Relevant Coursework (About): how many course groups to show before the "Show more courses"
    // button. Groups appear in the order listed under coursework below. Set to null to show all.
    courseworkPreviewGroups: 2,
  },

  /* ---------------------------------------------------------------
     PERSONAL INFO
     --------------------------------------------------------------- */
  person: {
    name: "Reese Dunne",
    title: "Stanford Mechanical Engineering PhD Candidate",
    position: "M.S. & Ph.D. Candidate in Mechanical Engineering, Stanford University",
    affiliation: "Radiological Sciences Laboratory, Department of Radiology, Stanford University",
    sidebarLine: "PhD Candidate, Mechanical Engineering · Stanford University",
    focusAreas: ["Quantitative MRI", "Neuroimaging", "Biomechanics", "Scientific Computing"],

    shortBio:
      "I am a Mechanical Engineering PhD candidate at Stanford University conducting research at the intersection of medical imaging, computational modeling, and quantitative data analysis. My doctoral research focuses on quantitative MRI biomarkers in Alzheimer’s disease and longitudinal neuroimaging of repetitive head impacts. My broader work spans biomechanics, constitutive modeling, scientific computing, and machine learning.",

    longBio: [
      "I am a Ph.D. candidate in Mechanical Engineering at Stanford University, where I conduct research with Dr. Michael Zeineh in the Department of Radiology. My work focuses on ultra-high-field MRI and quantitative neuroimaging. I use 7T MRI, quantitative susceptibility mapping (QSM), R2*, and diffusion MRI to study brain iron and microstructure, and to investigate potential imaging biomarkers of Alzheimer’s disease and neurological injury, including longitudinal imaging of collegiate athletes exposed to repetitive head impacts.",
      "I also conduct research with Dr. Ellen Kuhl in Stanford’s Living Matter Laboratory, where I study the mechanical behavior of biological tissues. I currently lead a project using rheometry to characterize fresh human brain tissue under compression, tension, shear, stress relaxation, and cyclic loading.",
      "Across these projects, and earlier work in photoacoustic imaging, diffusion imaging of skeletal muscle, and finite element modeling of biodegradable implants, the common thread is building quantitative methods (imaging pipelines, statistical models, and physics-based and machine-learning models) and applying them to biomedical problems. I am particularly interested in bringing these methods to medical imaging and health technology.",
    ],

    email: "radunne@stanford.edu",

    // Photo shown at the top of the homepage (web-sized copy of images/headshot.jpg).
    headshot: "images/headshot-web.jpg",
    headshotAlt: "Portrait of Reese Dunne",

    links: {
      linkedin: "https://www.linkedin.com/in/reesedunne",
      scholar: "https://scholar.google.com/citations?user=IBTMWacAAAAJ&hl=en",
      cv: "files/Reese_Dunne_Resume.pdf",
    },
  },

  // Shown in the About section.
  outputSummary: [
    { value: "5", label: "publications" },
    { value: "2", label: "first-author publications" },
    { value: "7", label: "international conference presentations" },
  ],

  /* ---------------------------------------------------------------
     EDUCATION & HONORS
     --------------------------------------------------------------- */
  education: [
    {
      school: "Stanford University",
      degree: "M.S. & Ph.D. Candidate, Mechanical Engineering",
      details: "GPA 3.93 / 4.00",
      dates: "Expected June 2029",
    },
    {
      school: "Mississippi State University",
      degree: "B.S., Mechanical Engineering",
      details: "GPA 4.00 / 4.00",
      dates: "May 2023",
    },
  ],

  studyAbroad: [
    {
      school: "University of Oxford, Trinity College",
      program: "Associate Student, Trinity Term 2022",
      location: "Oxford, England",
      dates: "May – June 2022",
      details: "Courses: Molecular Basis of Alzheimer’s Disease; The Inklings of Oxford",
    },
    {
      school: "University of Strathclyde",
      program: "Fulbright Scotland Summer Institute: Technology, Innovation and Creativity",
      location: "Glasgow, Scotland",
      dates: "July – Aug. 2022",
      details: null,
    },
  ],

  // Relevant Stanford coursework. Add { name: "...", inProgress: true } for current courses.
  coursework: [
    {
      title: "Machine Learning & Computation",
      items: [{ name: "CS 230: Deep Learning", inProgress: true }, "CS 106B: Programming Abstractions (Data Structures, C++)"],
    },
    {
      title: "Mathematics & Statistics",
      items: [
        "ME 300A: Linear Algebra with Application to Engineering Computations",
        "CME 106: Introduction to Probability and Statistics for Engineers",
      ],
    },
    {
      title: "Imaging & Signal Processing",
      items: [
        "EE 369A: Medical Imaging Systems I",
        "EE 369B: Medical Imaging Systems II",
        "EE 261: The Fourier Transform and Its Applications",
        { name: "BIOS 214: Open-Source MRI Sequence Development: Simulation to Scanner", inProgress: true },
      ],
    },
    {
      title: "Mechanics",
      items: [
        "ME 335A: Finite Element Analysis",
        "ME 338: Continuum Mechanics",
        "ME 287: Mechanics of Biological Tissues",
      ],
    },
  ],

  honors: [
    {
      title: "Graduate fellowships",
      items: [
        {
          name: "Stanford Graduate Fellowship",
          org: "Stanford University",
          date: "Apr. 2023",
          description: "One of approximately 100 incoming Stanford graduate students selected for the university’s highest honor for incoming graduate students; nominated by the Department of Mechanical Engineering.",
        },
        {
          name: "Tau Beta Pi Fellowship",
          org: "Tau Beta Pi Engineering Honor Society",
          date: "Apr. 2023",
          description: "One of 32 students selected nationwide for the Tau Beta Pi graduate fellowship.",
        },
        {
          name: "NSF Graduate Research Fellowship",
          article: "https://www.msstate.edu/newsroom/article/2023/05/msu-well-represented-2023-class-nsf-graduate-research-fellows",
          org: "National Science Foundation",
          date: "Mar. 2023",
          description: "Selected from among 12,000+ applicants nationwide; recognizes students with the potential to be high-achieving scientists and engineers.",
        },
      ],
    },
    {
      title: "Nationally competitive honors",
      items: [
        {
          name: "Knight-Hennessy Scholarship Finalist",
          org: "Stanford University",
          date: "Feb. 2023",
          description: "One of 170 finalists selected from 7,119 applicants.",
        },
        {
          name: "Churchill Scholarship Alternate",
          org: "Churchill Foundation",
          date: "Dec. 2022",
          description: "Selected as one of three alternates, among the top 19 applicants in the U.S.",
        },
        {
          name: "Rhodes Scholarship Finalist",
          article: "https://www.msstate.edu/newsroom/article/2022/11/msus-dunne-named-rhodes-scholarship-finalist",
          org: "Rhodes Trust",
          date: "Oct. 2022",
          description: "One of 15 finalists selected in District VII.",
        },
        {
          name: "Astronaut Scholarship",
          article: "https://www.msstate.edu/newsroom/article/2021/07/mississippis-newest-astronaut-scholars-hail-msus-bagley-college",
          org: "Astronaut Scholarship Foundation",
          date: "June 2021",
          description: "One of 60 undergraduates from 44 universities nationwide selected as 2021 Astronaut Scholars.",
        },
        {
          name: "Barry Goldwater Scholarship",
          article: "https://www.msstate.edu/newsroom/article/2021/04/msus-dunne-selected-prestigious-goldwater-scholarship",
          org: "Goldwater Scholarship Committee",
          date: "Mar. 2021",
          description: "Sole Mississippi State University recipient of the 2021 Goldwater Scholarship, the nation’s premier undergraduate STEM research scholarship.",
        },
        {
          name: "Fulbright U.K. Summer Institute",
          article: "https://www.msstate.edu/newsroom/article/2020/07/starkville-scotland-msu-student-athlete-anticipates-2021-fulbright-uk",
          org: "US-UK Fulbright Commission",
          date: "June 2020",
          description: "One of five American students selected nationwide for the Fulbright Scotland Summer Institute at the University of Strathclyde and Glasgow School of Art; the second Mississippi State student ever selected (program held 2022).",
        },
      ],
    },
    {
      title: "University & state honors",
      collapsed: true, // hidden behind a "Show" button on the homepage; delete this line to always show
      items: [
        {
          name: "Dean’s Award, Shackouls Honors College",
          org: "Mississippi State University",
          date: "May 2023",
          description: "Recognizes the most outstanding student in the Shackouls Honors College for significant and lasting contributions.",
        },
        {
          name: "Bagley College of Engineering Student Hall of Fame",
          org: "Mississippi State University",
          date: "Feb. 2023",
          description: "One of six undergraduates selected.",
        },
        {
          name: "Outstanding Engineering Senior",
          org: "Mississippi Engineering Society",
          date: "Jan. 2023",
          description: "Selected as the most outstanding engineering senior in Mississippi State’s Bagley College of Engineering; awarded to one senior from each engineering college in Mississippi.",
        },
        {
          name: "Mr. Mississippi State University",
          article: "https://reflector-online.com/20364/news/mr-msu-2021-reese-dunne/",
          org: "Mississippi State University",
          date: "Oct. 2021",
          description: "Sole male student selected to represent Mississippi State’s student body of 23,000 on the Homecoming Court as the 2021 Mr. MSU.",
        },
        {
          name: "Top Rated Presenter, Undergraduate Research Symposium (Biological Sciences and Engineering)",
          org: "Mississippi State University",
          date: "Apr. 2022",
          description: "One of seven presentations out of 80 selected as top rated, for “A Diffusion Tensor Imaging approach to investigate the effects of exercise on quadriceps muscle fiber lengths.”",
          project: "muscle-dti",
        },
        {
          name: "Outstanding Research Award, Shackouls Honors College",
          org: "Mississippi State University",
          date: "Apr. 2021",
          description: "Selected as the top undergraduate researcher in the honors college.",
        },
        {
          name: "1st Place, Undergraduate Research Symposium (Biological Sciences and Engineering)",
          org: "Mississippi State University",
          date: "Apr. 2021",
          description: "Awarded for “Development and implementation of a magnesium-based finite element degradation model for orthopedic implants.”",
          project: "magnesium-implants",
        },
        {
          name: "1st Place Oral Presentation (STEM), Mississippi Undergraduate Honors Conference",
          org: "Mississippi Undergraduate Honors Conference",
          date: "Feb. 2021",
          description: "Awarded for “Comparison of Compressional and Elastic Transcranial Photoacoustic Simulations for Presurgical Planning of Neurosurgeries.”",
          project: "photoacoustic",
        },
      ],
    },
  ],

  /* ---------------------------------------------------------------
     RESEARCH PROJECTS
     ---------------------------------------------------------------
     group:     "doctoral" or "prior" (controls which heading it falls under)
     stats:     big numbers; the first 4 appear on the homepage
     contributions: "My contributions" bullets on the project page
                (replaces highlights once filled in)
     tags:      the first 4 appear on the homepage
     figures:   add { src, alt, captionTitle, caption }. In captions, **text** is bold
                and χ_para / χ_dia become subscripts. "Figure N:" is added automatically.
     links:     extra links, e.g. { label: "Poster", url: "files/poster.pdf" }
     thumbnail: optional small figure shown under the project on the homepage timeline
     timelineDescription: optional shorter description for the homepage timeline (else description is used)
     manuscriptStatus: optional note under Publications, e.g. "Manuscript in preparation"
     figureCredit: optional { text, url } shown under the figures (for published figures)
     datasetLabel: optional heading for the cohort section (default "Study cohort"), e.g. "Samples"
     Detail-page fields left as null show as placeholders until filled.
     --------------------------------------------------------------- */
  projects: [
    {
      id: "head-impacts",
      manuscriptStatus: "Manuscript in preparation",
      group: "doctoral",
      title: "Longitudinal MRI of Repetitive Head Impacts in Collegiate Athletes",
      role: "Doctoral Researcher",
      advisor: "Dr. Michael Zeineh",
      institution: "Department of Radiology, Stanford University",
      dates: "Oct. 2025 – Present",
      description:
        "Lead a longitudinal neuroimaging analysis investigating brain microstructural changes associated with repetitive head impacts in collegiate athletes.",
      stats: [
        { value: "74", label: "collegiate athletes" },
        { value: "262", label: "MRI examinations" },
        { value: "Up to 4 yrs", label: "of longitudinal follow-up" },
        { value: "4 + 8", label: "susceptibility + diffusion MRI metrics" },
      ],
      highlights: ["Linear mixed-effects modeling", "Oral presentation at ISMRM 2026"],
      contributions: [
        "Lead a longitudinal neuroimaging analysis of 74 collegiate athletes across 262 MRI examinations, using source-separated QSM and diffusion MRI to study brain microstructural changes associated with repetitive head impacts over 4 years",
        "Develop linear mixed-effects models across 4 susceptibility and 8 diffusion MRI metrics to compare longitudinal trajectories between football and volleyball athletes",
        "Integrate multimodal MRI measurements across a hierarchical FreeSurfer framework, combining QSM, R2*, source-separated susceptibility, and diffusion-derived measures with image, segmentation, and registration quality control",
        "Conduct football-specific exposure and concussion analyses relating imaging trajectories to cognitive performance, position-based impact risk, years of tackle football, and concussion history, including acute and delayed post-concussion MRI changes",
      ],
      keyFindings: [],
      methods: [
        "Source-separated QSM",
        "Diffusion MRI",
        "Longitudinal statistical modeling",
        "Linear mixed-effects models",
        "Quantitative MRI",
        "MATLAB",
        "Bash",
        "Stata",
      ],
      tags: ["MRI", "Neuroimaging", "Statistical Modeling"],
      researchQuestion:
        "How does repetitive head-impact exposure affect longitudinal iron-, myelin-, and microstructure-related MRI changes in collegiate football athletes compared with low-contact volleyball athletes?",
      dataset: null,
      figures: [],
      links: [],
    },
    {
      id: "alzheimers-7t",
      manuscriptStatus: "Manuscript in preparation",
      group: "doctoral",
      title: "7T MRI of Hippocampal Subfield Iron in Alzheimer’s Disease",
      role: "Doctoral Researcher",
      advisor: "Dr. Michael Zeineh",
      institution: "Department of Radiology, Stanford University",
      dates: "Jan. 2024 – Present", // CONFIRM: dates for this study
      description:
        "Use ultra-high resolution in vivo 7T MRI, R2*, and source-separated QSM to quantify iron in hippocampal subfields across healthy controls, mild cognitive impairment, and Alzheimer’s disease.",
      stats: [
        { value: "20", label: "participants (healthy, MCI, AD)" },
        { value: "3", label: "hippocampal regions of interest (subiculum, CA1, subiculum-CA1)" },
        { value: "4", label: "iron- and myelin-sensitive MRI metrics (R2*, QSM, χ_para, χ_dia)" },
      ],
      highlights: ["Python, MATLAB, and Bash pipelines", "Hippocampal R2* analysis"],
      contributions: [
        "Developed an end-to-end 7T MRI processing pipeline in Python, MATLAB, and Bash to quantify hippocampal iron, generating R2* and QSM maps from multi-echo gradient-echo data and source-separated susceptibility maps (χ_para, χ_dia)",
        "Segmented the subiculum and CA1 hippocampal subfields on ultra-high resolution T2-weighted images using automated segmentation, reviewing every subject slice by slice and manually correcting segmentation errors, and registered susceptibility maps to anatomical space",
        "Led quality control of all susceptibility maps and segmentation volumes, blinded to diagnosis, with independent review by an experienced neuroradiologist",
        "Extracted subfield-level R2*, QSM, χ_para, and χ_dia measures and applied nonparametric statistics (Jonckheere-Terpstra trend tests, Spearman correlations) to test ordered differences across healthy, MCI, and AD participants and associations with memory composite scores",
      ],
      keyFindings: [
        "Significant increases in hippocampal R2* with greater disease severity, consistent with increased iron",
        "Significant negative association between memory scores and χ_para in CA1 across diagnoses",
      ],
      methods: [
        "7T MRI",
        "QSM",
        "Source-separated QSM",
        "R2*",
        "Image registration",
        "Segmentation",
        "Python",
        "MATLAB",
        "Bash",
        "Stata",
        "FSL",
        "Neuroimaging",
        "ASHS",
        "NiftyReg",
        "MEDI",
        "SPURS phase unwrapping",
        "Jonckheere-Terpstra test",
        "Spearman correlation",
      ],
      tags: ["MRI", "Python", "MATLAB"],
      researchQuestion:
        "Can ultra-high resolution in vivo 7T MRI detect hippocampal subfield iron differences across healthy aging, mild cognitive impairment, and Alzheimer’s disease?",
      dataset:
        "20 ADRC participants (8 healthy controls, 6 mild cognitive impairment, 6 Alzheimer’s disease)",
      figures: [],
      links: [],
    },
    {
      id: "alzheimers-petmr",
      group: "doctoral",
      title: "Source-Separated QSM of Olfactory and Medial Temporal Regions in Alzheimer’s Disease",
      role: "Doctoral Researcher",
      advisor: "Dr. Michael Zeineh",
      institution: "Department of Radiology, Stanford University",
      dates: "Jan. 2024 – Present", // CONFIRM: dates for this study
      description:
        "Use 3T PET-MR with source-separated QSM to investigate iron- and myelin-sensitive susceptibility changes in olfactory and memory-related brain regions across Alzheimer’s disease.",
      stats: [
        { value: "66", label: "participants at 3T PET-MR" },
        { value: "5", label: "clinical / biomarker groups" },
        { value: "4", label: "memory- and olfactory-related brain regions" },
        { value: "3", label: "susceptibility metrics (QSM, χ_para, χ_dia)" },
      ],
      highlights: ["Analysis of iron- and myelin-sensitive susceptibility abnormalities"],
      contributions: [
        "Applied my previously developed QSM and source-separation pipeline in Python, MATLAB, and Bash to generate QSM, χ_para, and χ_dia maps from 3T PET-MR multi-echo gradient-echo data across 66 participants",
        "Registered all susceptibility maps to high-resolution T2-weighted segmentation space and performed quality control of every registration",
        "Performed quality control of all QSM and source-separated susceptibility images, assessing motion artifacts and image quality",
        "Extracted median QSM, χ_para, and χ_dia from the entorhinal-perirhinal cortices, piriform-PAC, amygdala, and whole hippocampus and applied nonparametric ordered-trend and unpaired tests across 5 clinical and amyloid-biomarker groups, including amyloid-positive vs. amyloid-negative healthy controls",
      ],
      keyFindings: [],
      methods: [
        "3T PET-MR",
        "QSM",
        "Source-separated QSM",
        "MEDI",
        "Image registration",
        "NiftyReg",
        "Quality control",
        "Python",
        "MATLAB",
        "Bash",
        "Stata",
        "FSL",
        "Neuroimaging",
      ],
      tags: ["MRI", "Python", "MATLAB"],
      researchQuestion:
        "How do iron- and myelin-sensitive susceptibility changes in olfactory and medial temporal regions differ across clinical and amyloid-biomarker stages of Alzheimer’s disease?",
      dataset: null,
      figures: [],
      links: [],
    },
    {
      id: "brain-tissue",
      group: "doctoral",
      status: "Ongoing · data collection in progress",
      title: "Mechanical Characterization of Fresh Human Brain Tissue",
      role: "Doctoral Researcher",
      advisor: "Dr. Ellen Kuhl",
      institution: "Department of Mechanical Engineering, Stanford University",
      dates: "Jan. 2026 – Present",
      description:
        "Initiated and currently lead rheological testing of fresh human brain tissue to quantify nonlinear, time-dependent behavior and improve constitutive models of brain mechanics.",
      stats: [],
      highlights: [],
      contributions: [
        "Initiated and currently lead a rheological testing study of fresh human brain tissue in Stanford’s Living Matter Laboratory",
        "Develop experimental protocols for fresh human brain tissue testing under compression, tension, shear, stress relaxation, and cyclic loading using rheometry",
        "Prepare and test tissue samples while optimizing experimental conditions to preserve tissue hydration and mechanical integrity during testing",
        "Analyze stress-strain and time-dependent responses in MATLAB to characterize mechanical behavior across loading modes",
      ],
      keyFindings: [],
      methods: [
        "Rheometry",
        "Compression / tension / shear testing",
        "Stress-relaxation testing",
        "Cyclic loading",
        "Constitutive modeling",
        "MATLAB",
      ],
      tags: ["Biomechanics", "Rheology", "Constitutive Modeling"],
      researchQuestion:
        "How can fresh human brain tissue mechanics be characterized across multiple loading modes to quantify its nonlinear and time-dependent mechanical behavior?",
      dataset: null,
      figures: [],
      links: [],
    },
    {
      id: "meat-mechanics",
      thumbnail: "images/projects/food-testing/thumb-web.jpg", // small figure on the homepage timeline
      group: "doctoral",
      title: "Mechanical Characterization of Plant-Based and Animal-Based Meat",
      role: "Doctoral Researcher",
      advisor: "Dr. Ellen Kuhl",
      institution: "Department of Mechanical Engineering, Stanford University",
      dates: "Sept. 2023 – July 2025",
      description:
        "Combined rheology, mechanical testing, and constitutive neural networks to compare plant-based and animal meats and establish quantitative targets for improving plant-based meat texture.",
      timelineDescription: "Combined rheology, mechanical testing, and constitutive neural networks to compare plant-based and animal meats.",
      stats: [
        { value: "8", label: "meat products" },
        { value: "10", label: "quantified mechanical properties" },
        { value: "157", label: "tension, compression, and shear tests" },
      ],
      highlights: [
        "Product-specific 3D constitutive models",
        "First fully three-dimensional mechanical characterization of 8 plant-based and animal meats",
        "Oral presentation at ESB 2025",
      ],
      contributions: [
        "Led a study of 8 plant-based and animal meat products using double-compression texture profile analysis and oscillatory rheology to quantify 10 mechanical properties and establish quantitative targets for improving plant-based meat texture",
        "Prepared samples and performed all texture profile analysis and rheological testing, including double-compression tests and amplitude and frequency sweeps, measuring stiffness, hardness, cohesiveness, springiness, resilience, chewiness, storage and loss moduli, complex shear modulus, and phase angle",
        "Built MATLAB analysis and statistical workflows to process rheometer data, extract mechanical parameters, and compare material behavior across products using ANOVA and Tukey–Kramer testing",
        "Conducted 157 tension, compression, and shear tests for a collaborative study applying Constitutive Artificial Neural Networks (CANNs) to discover product-specific 3D constitutive models, contributing to the first fully three-dimensional mechanical characterization of 8 plant-based and animal meats",
      ],
      keyFindings: [
        "Double-compression stiffness and storage moduli followed the same ranking as prior tension, compression, and shear testing of the same products",
        "Plant-based turkey was the stiffest product (stiffness 418.9 ± 41.7 kPa; storage modulus 50.4 ± 4.1 kPa) and firm tofu the softest (56.7 ± 14.1 kPa; 5.7 ± 0.5 kPa), with all three animal meats falling in between",
      ],
      methods: [
        "Texture profile analysis",
        "Oscillatory rheology",
        "Tension / compression / shear testing",
        "Sample preparation",
        "ANOVA",
        "Tukey–Kramer post-hoc testing",
        "MATLAB",
      ],
      tags: ["Biomechanics", "Rheology", "MATLAB"],
      researchQuestion:
        "How do the textural and viscoelastic properties of plant-based meats compare with animal meats, and which mechanical measures best reflect how we perceive texture?",
      datasetLabel: "Samples",
      dataset:
        "8 products (5 plant-based: hotdog, sausage, turkey, firm tofu, extra-firm tofu; 3 animal: hotdog, sausage, turkey), 13 texture profile analysis samples per product, 5 frequency sweeps per product, and a 16-participant sensory survey",
      figures: [
        {
          src: "images/projects/food-testing/fig1-web.jpg",
          alt: "Photographs of eight meat samples mounted on a rheometer: four rows showing each product under compression (top two rows) and shear (bottom two rows).",
          captionTitle: "Sample testing.",
          caption:
            "For all eight meats, n = 13 samples were used for double compression testing, n = 1 sample for initial amplitude sweep testing, and n = 5 samples for frequency sweep testing with an AR-2000ex torsional rheometer. For the double compression tests (top), samples were mounted between a 25 mm diameter base plate and a 25 mm parallel plate and compressed twice to half of their initial height. For the shear tests (bottom), samples were mounted between a 20 mm diameter base plate and an 8 mm parallel plate, both sandpaper-covered to avoid slippage, and frequency sweep tests were performed.",
        },
        {
          src: "images/projects/food-testing/fig2-web.jpg",
          alt: "Three plots: an idealized double-compression force versus time curve, a measured force versus time curve with two peaks, and a measured stress versus strain loop.",
          captionTitle: "Double-compression texture profile analysis.",
          caption:
            "For each of the eight meats, n = 13 double compression tests were performed with a peak compressive strain of ε = −50% and a strain rate of 3 mm/s. From the averaged force vs. time curves, the peak forces of the first and second loading cycles F₁ and F₂, the associated loading times t₁ and t₂, the areas under the loading paths A₁ and A₃, and the areas under the unloading paths A₂ and A₄ were extracted. The curves were then converted into stress vs. strain curves, where the stress σ = F/A is the recorded force F divided by the specimen cross section area A, and the strain is the applied strain rate multiplied by the time t.",
        },
        {
          src: "images/projects/food-testing/fig3-web.jpg",
          alt: "Six box-plot panels of stiffness, hardness, cohesiveness, springiness, resilience, and chewiness for eight meat products, each marked with a cow or leaf icon.",
          captionTitle: "Texture profile analysis across all eight meats.",
          caption:
            "Stiffness, hardness, cohesiveness, springiness, resilience, and chewiness of all eight meats; the box and whisker plots summarize the minimum, lower quartile, median, upper quartile, maximum values, and outliers across n = 13 double compression tests; AH animal hotdog, PH plant-based hotdog, AS animal sausage, PS plant-based sausage, FT firm tofu, ET extrafirm tofu, AT animal turkey, PT plant-based turkey. Cow and leaf icons mark animal and plant-based products.",
        },
      ],
      figureCredit: {
        text: "Figures reproduced from Dunne et al., Food Research International (2025), CC BY 4.0",
        url: "https://doi.org/10.1016/j.foodres.2025.115876",
      },
      links: [{ label: "Stanford Report: Can AI improve plant-based meats?", url: "https://news.stanford.edu/stories/2024/11/can-ai-help-improve-plant-based-meats" }],
    },
    {
      id: "magnesium-implants",
      thumbnail: "images/projects/fea-magnesium-degredation/thumb-web.jpg", // small figure on the homepage timeline
      group: "prior",
      title: "Computational Modeling of Biodegradable Magnesium Implants",
      role: "Undergraduate Researcher",
      advisor: "Dr. Matthew Priddy",
      institution: "Mississippi State University",
      dates: "Aug. 2020 – Dec. 2024",
      description: "Built multiscale computational models to predict degradation of biodegradable magnesium implants.",
      stats: [
        { value: "12,760", label: "element Abaqus/UMAT finite element framework" },
        { value: "120 days", label: "of simulated degradation" },
        { value: "~40 days", label: "longer predicted lifespan with hydroxyapatite coating" },
      ],
      highlights: ["Density functional theory integration"],
      contributions: [
        "Built a multiscale computational model combining finite element analysis (12,760-element Abaqus/UMAT framework) and density functional theory to predict magnesium implant degradation over 120 days, showing hydroxyapatite coating extended simulated implant lifespan by ~40 days compared to uncoated magnesium",
        "Developed the Abaqus finite element model of pure and hydroxyapatite-coated magnesium specimens, including geometry, material properties, boundary conditions, and a 0.75 mm C3D8R mesh with a single-element HA coating layer",
        "Integrated a continuum-damage-based pitting corrosion law into a Fortran user-material (UMAT) subroutine co-developed with a collaborator, with Python-assigned, Weibull-distributed pitting parameters, element deletion, and faster degradation of edge and corner elements",
        "Calibrated simulated mass loss against 30-day in vitro degradation data and extended simulations to 120 days, and incorporated collaborator density functional theory calculations to give the pitting parameter physical meaning",
      ],
      keyFindings: [
        "The calibrated model reproduced 30-day experimental mass loss, with non-coated and HA-coated magnesium retaining 93.7% and 98.2% of their initial mass",
        "Hydroxyapatite coating substantially slowed degradation: at 90 days, coated magnesium retained 42.3% of its mass versus 6.4% for non-coated, and at 120 days non-coated magnesium was fully degraded while coated retained 7.9%",
        "Degradation initiated at specimen edges and corners and propagated inward through pitting corrosion, consistent with experimental observations",
      ],
      methods: ["Abaqus", "Fortran UMAT", "Finite element analysis", "Density functional theory", "Python"],
      tags: ["Finite Element Analysis", "Biomechanics", "Python"],
      researchQuestion:
        "Can a finite element degradation model that combines pitting corrosion, surface-exposure-dependent degradation, and a hydroxyapatite (HA) coating accurately predict the long-term degradation of pure and HA-coated magnesium implants?",
      datasetLabel: "Simulation setup",
      dataset:
        "Cylindrical pure Mg and HA-coated pure Mg specimens (25.4 mm diameter, 8 mm height) meshed with 12,760 C3D8R elements (0.75 mm), calibrated to a 30-day in vitro degradation study and extended to 120 days",
      figures: [
        {
          src: "images/projects/fea-magnesium-degredation/fig1-web.jpg",
          alt: "Photograph of a cylindrical magnesium specimen, followed by its 3D model geometry and the meshed finite element model.",
          captionTitle: "From experimental specimen to finite element model.",
          caption:
            "The cylindrical pure Mg specimen from a prior in vitro degradation study (left) was modeled in Abaqus/Standard FE software (25.4 mm diameter, 8 mm height) (middle). After assigning the material properties of pure Mg and hydroxyapatite (HA) and applying the necessary boundary conditions, the part was meshed with 12,760 C3D8R (linear reduced integration brick) elements, all 0.75 mm in length (right). Two parts were modeled: (1) pure Mg and (2) HA-coated pure Mg, with the HA coating represented as the outermost layer of elements (0.75 mm, 1 element thickness). Using these FE models, mass loss versus degradation time was calculated and calibrated against experimental mass loss data.",
        },
        {
          src: "images/projects/fea-magnesium-degredation/fig2-web.jpg",
          alt: "Line plot of percent of initial mass versus days over 120 days for simulated non-coated and coated magnesium, with an inset comparing simulation and experimental data over the first 30 days.",
          captionTitle: "Simulated and experimental mass loss over 120 days.",
          caption:
            "Simulated and experimental mass loss versus degradation time over 30 days (inset), followed by predicted degradation over 120 days (outer plot). The FE model was calibrated to experimental mass loss data by determining optimal degradation parameters for both pure Mg and HA-coated pure Mg. At 30 days, the non-coated and coated specimens retained 93.7% and 98.2% of their initial mass, respectively. At 60 days, 50.7% and 85.0% of the non-coated and coated specimens’ initial mass was retained, and at 90 days, 6.4% and 42.3%. At 120 days, the non-coated specimen had lost 100% of its initial mass, while the coated specimen retained 7.9%.",
        },
        {
          src: "images/projects/fea-magnesium-degredation/fig3-web.jpg",
          alt: "Color-coded damage maps of finite element magnesium specimens at 30, 60, 90, and 120 days, comparing pure magnesium (top row) with hydroxyapatite-coated magnesium (bottom row).",
          captionTitle: "Simulated degradation of pure and HA-coated magnesium.",
          caption:
            "Simulated degradation of pure Mg and HA-coated pure Mg over a 120-day period, extended from a 30-day experimental study. After 30 days, degradation initiated at several points along the specimen edge (A), where elements have more faces exposed to the surface and therefore higher degradation rates. After 60 days, pitting corrosion, in which a pit forms after an element is deleted and degradation propagates outward from that pit, is evident (B). The HA-coated pure Mg specimen degraded much more slowly than the non-coated pure Mg specimen throughout the 120-day period.",
        },
      ],
      figureCredit: {
        text: "Figures from the submitted manuscript of Dunne et al., Journal of Biomedical Materials Research Part B (2024), published by Wiley",
        url: "https://doi.org/10.1002/jbm.b.35519",
      },
      links: [],
    },
    {
      id: "muscle-dti",
      thumbnail: "images/projects/DTI-quadriceps/thumb-web.jpg", // small figure on the homepage timeline
      group: "prior",
      title: "Diffusion MRI of Exercise-Related Skeletal Muscle Adaptation",
      role: "Research Intern, Stanford RSL REU Program",
      advisor: "Dr. Garry Gold",
      institution: "Department of Radiology, Stanford University",
      dates: "June 2021 – May 2022",
      description:
        "Analyzed longitudinal diffusion tensor imaging of quadriceps muscle adaptation following resistance training.",
      stats: [
        { value: "5", label: "subjects" },
        { value: "5", label: "longitudinal time points" },
        { value: "3 months", label: "resistance training regimen" },
        { value: "~12%", label: "increase in rectus femoris fiber length" },
      ],
      highlights: ["Fiber tractography", "Python-based 3D visualization", "Quantified muscle fiber length changes"],
      contributions: [
        "Analyzed 25 longitudinal diffusion tensor imaging scans (5 subjects × 5 time points) using deterministic fiber tractography to quantify fiber length in the vastus lateralis, vastus medialis, and rectus femoris over a three-month resistance training program",
        "Performed sensitivity analyses to optimize tractography parameters and applied a 30 mm threshold to remove physiologically unrealistic fiber lengths",
        "Developed Python-based 3D visualizations of quadriceps muscle fiber tracts for each subject and time point",
        "Quantified pre- and post-training changes in average fiber length and tested for differences over time using single-factor ANOVA",
      ],
      keyFindings: [
        "DTI tractography produced quadriceps fiber lengths consistent with values reported in the literature, supporting its potential for tracking muscle architecture",
        "Rectus femoris fiber length increased by ~12% from month 0 to month 3, in line with the ~10–11% increases reported in prior ultrasound and MRI studies",
      ],
      methods: ["Diffusion MRI", "Diffusion tensor imaging", "Fiber tractography", "Sensitivity analysis", "ANOVA", "Python", "Jupyter"],
      tags: ["MRI", "Python"],
      researchQuestion:
        "Can diffusion tensor imaging and fiber tractography detect changes in quadriceps muscle fiber length during a three-month resistance training program?",
      dataset:
        "5 healthy participants performing single-leg decline squats (3 × 15 repetitions, twice daily, 4–5 days per week) for three months, scanned at 5 time points (25 DTI scans)",
      figures: [
        {
          src: "images/projects/DTI-quadriceps/fig1-web.jpg",
          alt: "Timeline with five scan points: Baseline, Month 0, Month 1, Month 2, and Month 3, grouped into before and during exercise intervention.",
          captionTitle: "Timeline of DTI scans.",
          caption:
            "DTI scans were generated from each of the five subjects throughout the experiment. An initial (Baseline) DTI scan of each subject was taken between one to three months before the resistance training regimen. Each subject then had another scan the day before starting the training regimen (Month 0). Subsequent DTI scans were taken after one month of exercise (Month 1), two months of exercise (Month 2), and at the conclusion of the three-month resistance training regimen (Month 3).",
        },
        {
          src: "images/projects/DTI-quadriceps/fig2-web.jpg",
          alt: "Two panels: a DTI scan of the quadriceps with color-coded segmentations of the rectus femoris, vastus lateralis, and vastus medialis, and the resulting tracked muscle fibers.",
          captionTitle: "DTI and muscle tractography approach.",
          caption:
            "Each of the five human subjects underwent a DTI scan of the left and right quadriceps muscles. **Left:** DTI scans of the subjects were generated, and individual muscle components of the quadriceps were segmented, indicated by the colors. **Right:** A muscle tractography algorithm used the DTI scan to track and reconstruct muscle fibers in the quadriceps muscles.",
        },
        {
          src: "images/projects/DTI-quadriceps/fig3-web.jpg",
          alt: "Bar chart of average fiber length in millimeters for the vastus lateralis, vastus medialis, and rectus femoris at baseline and months 0 through 3, with error bars.",
          captionTitle: "Average quadriceps muscle fiber lengths for all subjects.",
          caption:
            "Each cluster of bars represents fiber lengths from an individual quadriceps muscle group, and the color of the bars represents the time points studied in the experiment. Single Factor ANOVA tests were performed for each muscle group, showing no statistical differences in average fiber length over time for all muscle groups.",
        },
      ],
      figureCredit: {
        text: "Figures from Dunne et al., ISMRM 2022 (abstract #1022)",
        url: "https://doi.org/10.58530/2022/1022",
      },
      links: [],
    },
    {
      id: "photoacoustic",
      thumbnail: "images/projects/photoacoustic-imaging/thumb-web.jpg", // small figure on the homepage timeline
      group: "prior",
      title: "Transcranial Photoacoustic Image Simulation",
      role: "Research Intern",
      advisor: "Dr. Muyinatu Bell",
      institution: "Johns Hopkins University",
      dates: "May 2020 – July 2021",
      description:
        "Compared compressional and elastic-wave photoacoustic simulations for transcranial image guidance.",
      stats: [
        { value: "3", label: "acoustic windows" },
        { value: "78%", label: "lower computation time with compressional-wave simulation" },
        { value: "63%", label: "lower memory requirements with compressional-wave simulation" },
      ],
      highlights: ["Compressional-wave simulations achieved equivalent target detectability to elastic-wave simulations"],
      contributions: [
        "Configured anatomically realistic 3D k-Wave photoacoustic simulations from a CT volume of a human cadaver head, comparing compressional and elastic wave models across 3 acoustic windows (ocular, nasal, temporal) and multiple source and ultrasound transducer configurations",
        "Quantified differences between compressional and elastic simulations using image quality metrics including contrast and resolution",
        "Developed MATLAB scripts to calculate image resolution and evaluate the effects of cranial bone on transcranial photoacoustic image quality",
        "Compared heterogeneous and homogeneous simulation conditions to assess modeling accuracy and computational efficiency, showing equivalent target detectability with 78% less computation time and 63% less memory, informing presurgical planning",
      ],
      keyFindings: [
        "Target detectability (generalized contrast-to-noise ratio) was equivalent between compressional and elastic simulations across the ocular, nasal, and temporal acoustic windows",
        "Elastic simulations required ~4.6× more computation time and ~2.7× more memory than compressional simulations",
        "Point spread function areas differed by only 0.33 to 3.35 mm², and target-to-instrument distance measurements were within 1.24 mm of the true distances",
        "Faster, less memory-intensive compressional-wave simulations are likely sufficient for presurgical planning",
      ],
      methods: ["3D k-Wave simulations", "MATLAB", "Photoacoustic imaging", "Image-quality analysis", "Shell", "Linux"],
      tags: ["Photoacoustic Imaging", "Simulation", "MATLAB"],
      researchQuestion:
        "Are faster, less memory-intensive compressional-wave simulations sufficient, compared with elastic-wave simulations, for patient-specific planning of transcranial photoacoustic-guided neurosurgery?",
      datasetLabel: "Simulation setup",
      dataset:
        "3D k-Wave simulations based on a CT volume of a human cadaver head (0.3 mm isotropic grid, 82 MHz sampling, NVIDIA Quadro RTX 6000 GPU), with photoacoustic sources at the internal carotid artery and surgical instrument tip positions, received through the ocular, nasal, and temporal acoustic windows",
      figures: [
        {
          src: "images/projects/photoacoustic-imaging/fig1-web.jpg",
          alt: "Workflow diagram comparing neurosurgery without simulations, where the surgeon experimentally determines transducer locations, to neurosurgery with simulations, where CT-based simulations determine optimal transducer locations before surgery.",
          captionTitle: "Surgical workflow with and without patient-specific simulations.",
          caption:
            "Without photoacoustic simulations, a surgeon will likely have to test multiple ultrasound receiver locations and their feasibility. Simulations have the potential to efficiently identify these locations before the surgical procedure.",
        },
        {
          src: "images/projects/photoacoustic-imaging/fig2-web.jpg",
          alt: "Axial CT slice of a human skull showing transducer positions at the nasal cavity, ocular region, and temporal region, with photoacoustic sources at the carotid artery and instrument tip.",
          captionTitle: "Simulation configuration.",
          caption:
            "Axial slice from the CT volume of the human cadaver skull showing a 2D cross-section of the 3D simulation configuration. Spherical photoacoustic sources were placed within the left internal carotid artery (LCA) and at distances of 6 to 13 mm from the LCA to represent the tip of a surgical instrument (a distance of 6 mm is shown). Green lines illustrate the locations of independently placed ultrasound transducers.",
        },
        {
          src: "images/projects/photoacoustic-imaging/fig3-web.jpg",
          alt: "Two rows of four snapshots showing an acoustic wave expanding from a source over time, in a homogeneous medium (top) and inside a skull (bottom), where the wave is distorted by bone.",
          captionTitle: "Acoustic wave propagation in homogeneous and heterogeneous simulations.",
          caption:
            "2D cross-section of acoustic wave propagation at various time points (t₀ through t₃) during (a) the homogeneous and (b) heterogeneous 3D simulations. No bone is present in the homogeneous simulation, as represented by the grayscale background. In both cases, the acoustic wave propagates spherically outward from the initial pressure distribution (location of the left ICA). In the heterogeneous simulations, acoustic interactions with cranial bone cause distortions (i.e., aberrations, attenuation, scattering, and reverberations) in the waveform, which ultimately degrade image quality.",
        },
      ],
      figureCredit: {
        text: "Figures reproduced from Graham, Dunne, and Bell, Journal of Biomedical Optics (2021), CC BY 4.0",
        url: "https://doi.org/10.1117/1.JBO.26.7.076006",
      },
      links: [],
    },
  ],

  /* ---------------------------------------------------------------
     PUBLICATIONS
     doi:     just the DOI, e.g. "10.1016/j.foodres.2025.000000"
     url:     publisher page (used if there is no DOI)
     pdf:     optional, e.g. "files/paper.pdf" (check the publisher allows posting)
     project: id of the related research project above
     cover:   optional image of the paper's first page (shown on hover on the homepage)
     --------------------------------------------------------------- */
  publications: [
    {
      authors: "Dunne RA et al.",
      title: "Texture profile analysis and rheology of plant-based and animal meat",
      venue: "Food Research International",
      year: 2025,
      role: "First author",
      doi: "10.1016/j.foodres.2025.115876",
      cover: "images/publications/food-res-int-2025-cover.jpg", // first page, shown on the homepage on hover
      url: null,
      pdf: null,
      project: "meat-mechanics",
    },
    {
      authors: "Dunne RA et al.",
      title:
        "Finite Element and Density Functional Theory Modeling Effectively Predict Pitting Degradation of Hydroxyapatite-Coated Pure Magnesium",
      venue: "Journal of Biomedical Materials Research Part B: Applied Biomaterials",
      year: 2024,
      role: "First author",
      doi: "10.1002/jbm.b.35519",
      cover: "images/publications/jbmr-b-2024-cover.jpg", // first page, shown on the homepage on hover
      url: null,
      pdf: null,
      project: "magnesium-implants",
    },
    {
      authors: "St. Pierre SR et al.",
      title: "The mechanical and sensory signature of plant-based and animal meat",
      venue: "npj Science of Food",
      year: 2024,
      role: "Co-author",
      doi: "10.1038/s41538-024-00330-6",
      cover: "images/publications/npj-sci-food-2024-cover.jpg", // first page, shown on the homepage on hover
      url: null,
      pdf: null,
      project: "meat-mechanics",
    },
    {
      authors: "Graham MT, Dunne RA, Bell MAL",
      title:
        "Comparison of compressional and elastic wave simulations for patient-specific planning prior to transcranial photoacoustic-guided neurosurgery",
      venue: "Journal of Biomedical Optics",
      year: 2021,
      role: "Second author",
      doi: "10.1117/1.JBO.26.7.076006",
      cover: "images/publications/jbo-2021-cover.jpg", // first page, shown on the homepage on hover
      url: null,
      pdf: null,
      project: "photoacoustic",
    },
    {
      authors: "Graham MT, Dunne RA, Bell MAL",
      title:
        "Investigating the effects of compressional and elastic photoacoustic waves to predict transcranial photoacoustic image quality for guidance of minimally invasive neurosurgeries",
      venue: "SPIE Proceedings",
      year: 2021,
      role: "Second author",
      type: "Conference proceeding",
      doi: "10.1117/12.2579076",
      cover: "images/publications/spie-2021-cover.jpg", // first page, shown on the homepage on hover
      url: null,
      pdf: null,
      project: "photoacoustic",
    },
  ],

  /* ---------------------------------------------------------------
     PRESENTATIONS
     url:       link to the published abstract (shown with linkLabel)
     poster:    optional poster PDF, e.g. "files/AAIC_2026_Poster_Dunne.pdf"
     note:      optional short note shown under the entry
     project:   id of the related research project
     --------------------------------------------------------------- */
  presentations: [
    {
      conference: "ISMRM",
      conferenceFull: "International Society for Magnetic Resonance in Medicine",
      year: 2026,
      type: "Oral presentation",
      title: "Longitudinal Imaging of Iron and Myelin Maturation in Contact-Sport Athletes Using Source-Separated QSM",
      authors:
        "Reese A. Dunne, Marios Georgiadis, Mahta Karimpoor, Pascal Spincemaille, Alexey Dimov, Brian Mills, Maged Goubran, Hossein M. Taghavi, Nicole Mouchawar, Sohrab Sami, Max Wintermark, Gerald Grant, David Camarillo, Yi Wang, Michael Zeineh",
      location: "Cape Town, South Africa",
      url: null, // not yet published
      linkLabel: "ISMRM 2026 Oral Presentation",
      poster: null,
      note: "This abstract reflects an earlier stage of the ongoing project. The current analysis is described on the project page.",
      project: "head-impacts",
    },
    {
      conference: "AAIC",
      conferenceFull: "Alzheimer’s Association International Conference",
      year: 2026,
      type: "Poster",
      title: "Source-Separated Quantitative Susceptibility Mapping of Olfactory and Medial Temporal Regions Across Alzheimer’s Disease",
      authors:
        "Reese Dunne, Hossein Moein Taghavi, Mahta Karimpoor, Eric K. van Staalduinen, Christina B. Young, Marios Georgiadis, America Romero, Alexandra Trelle, Hillary Vossler, Maya Yutsis, Pascal Spincemaille, Yi Wang, Alexey Dimov, Guido A. Davidzon, Greg Zaharchuk, Kathleen Poston, Anthony D. Wagner, Victor W. Henderson, Elizabeth Mormino, Michael Zeineh",
      location: "London, United Kingdom",
      url: null, // not yet published
      linkLabel: null,
      poster: null,
      project: "alzheimers-petmr",
    },
    {
      conference: "ISMRM",
      conferenceFull: "International Society for Magnetic Resonance in Medicine",
      year: 2025,
      type: "Digital poster",
      title: "Ultra-high Resolution in vivo 7T MRI Detects Hippocampal Subfield Iron in Mild Cognitive Impairment and Alzheimer’s Disease",
      authors:
        "Reese Dunne, Hossein Moein Taghavi, Phil DiGiacomo, Julian Maclaren, Meghan Bell, Mackenzie Carlson, Elizabeth Mormino, Victor Henderson, Pascal Spincemaille, Hangwei Zhuang, Yi Wang, Brian Rutt, Marios Georgiadis, Michael Zeineh",
      location: "Honolulu, Hawaii, USA",
      url: "https://doi.org/10.58530/2025/1785",
      linkLabel: "Abstract (ISMRM archive)",
      poster: null,
      project: "alzheimers-7t",
    },
    {
      conference: "AAIC",
      conferenceFull: "Alzheimer’s Association International Conference",
      year: 2025,
      type: "Poster",
      title: "Detecting Hippocampal Subfield Iron in Alzheimer’s Disease using Ultra-high Resolution in vivo 7T MRI",
      authors:
        "Reese Dunne, Hossein Moein Taghavi, Phil DiGiacomo, Julian Maclaren, Meghan Bell, Mackenzie Carlson, Elizabeth Mormino, Victor Henderson, Pascal Spincemaille, Hangwei Zhuang, Yi Wang, Brian Rutt, Marios Georgiadis, Michael Zeineh",
      location: "Toronto, Canada",
      url: "https://doi.org/10.1002/alz70856_106116",
      linkLabel: "Published abstract",
      poster: null,
      project: "alzheimers-7t",
    },
    {
      conference: "ESB",
      conferenceFull: "30th Congress of the European Society of Biomechanics",
      year: 2025,
      type: "Oral presentation",
      title: "Texture Profile Analysis and Rheology of Plant-Based and Animal Meat",
      authors: "Reese Dunne, Ethan Darwin, Valerie Perez Medina, Marc Levenston, Skyler St. Pierre, Ellen Kuhl",
      location: "Zürich, Switzerland",
      url: null,
      linkLabel: null,
      poster: null,
      project: "meat-mechanics",
    },
    {
      conference: "ISMRM",
      conferenceFull: "International Society for Magnetic Resonance in Medicine",
      year: 2022,
      type: "Digital poster",
      title: "A Diffusion Tensor Imaging approach to investigate the effects of exercise on quadricep muscle fiber lengths",
      authors: "Reese A. Dunne, Garry E. Gold, Valentina Mazzoli",
      location: "London, United Kingdom",
      url: "https://doi.org/10.58530/2022/1022",
      linkLabel: "Abstract (ISMRM archive)",
      poster: null,
      project: "muscle-dti",
    },
    {
      conference: "SPIE",
      conferenceFull: "SPIE",
      year: 2021,
      type: "Oral presentation",
      title:
        "Investigating the effects of compressional and elastic photoacoustic waves to predict transcranial photoacoustic image quality for guidance of minimally invasive neurosurgeries",
      authors: "Graham MT, Dunne RA, Bell MAL",
      location: "San Francisco, California, USA",
      url: "https://doi.org/10.1117/12.2579076",
      linkLabel: "Proceedings paper",
      poster: null,
      note: "Presented by first author M. T. Graham.",
      role: "Co-author", // shown next to the type on the homepage
      project: "photoacoustic",
    },
  ],

  /* ---------------------------------------------------------------
     FEATURED: news coverage. Newest first.
     summary: one short line in our own words (not copied from the article)
     --------------------------------------------------------------- */
  featured: [
    {
      title: "Can AI improve plant-based meats?",
      outlet: "Stanford Report",
      date: "Nov. 2024",
      summary: "Feature on the Kuhl Lab’s work combining three-dimensional mechanical testing and AI to close the texture gap between plant-based and animal meat.",
      url: "https://news.stanford.edu/stories/2024/11/can-ai-help-improve-plant-based-meats",
      image: "images/featured/meat-article-web.jpg",
      imagePosition: "center 30%",
    },
    {
      title: "MSU well-represented in 2023 class of NSF Graduate Research Fellows",
      outlet: "Mississippi State University Newsroom",
      date: "May 2023",
      summary: "Recognized among Mississippi State’s 2023 NSF Graduate Research Fellows.",
      url: "https://www.msstate.edu/newsroom/article/2023/05/msu-well-represented-2023-class-nsf-graduate-research-fellows",
      image: "images/featured/alternate-headshot-web.jpg",
    },
    {
      title: "MSU’s Dunne named Rhodes Scholarship Finalist",
      outlet: "Mississippi State University Newsroom",
      date: "Nov. 2022",
      summary: "Named Mississippi State’s newest Rhodes Scholarship Finalist.",
      image: "images/headshot-web.jpg", // optional thumbnail (imagePosition adjusts the crop)
      url: "https://www.msstate.edu/newsroom/article/2022/11/msus-dunne-named-rhodes-scholarship-finalist",
    },
    {
      title: "Mr. MSU 2021: Reese Dunne",
      outlet: "The Reflector",
      date: "2021",
      summary: "Profile of the 2021 Mr. MSU, highlighting athletics, State Singers, and Lambda Sigma Honor Society leadership.",
      image: "images/featured/mr-msu-web.jpg",
      imagePosition: "center 25%",
      url: "https://reflector-online.com/20364/news/mr-msu-2021-reese-dunne/",
    },
    {
      title: "Mississippi’s newest Astronaut Scholars hail from MSU’s Bagley College of Engineering",
      outlet: "Mississippi State University Newsroom",
      date: "July 2021",
      summary: "Announcement of Mississippi State’s 2021 Astronaut Scholars from the Bagley College of Engineering.",
      image: "images/featured/alternate-headshot-web.jpg",
      url: "https://www.msstate.edu/newsroom/article/2021/07/mississippis-newest-astronaut-scholars-hail-msus-bagley-college",
    },
    {
      title: "A Starkville Super-Scholar",
      outlet: "Hail State (Mississippi State Athletics)",
      date: "June 2021",
      summary: "Feature on being named a 2021 Astronaut Scholar while competing in track and field and cross country.",
      image: "images/featured/track-web.jpg",
      imagePosition: "center 35%",
      url: "https://hailstate.com/news/2021/6/17/track-field-a-starkville-super-scholar",
    },
    {
      title: "MSU’s Dunne selected for prestigious Goldwater Scholarship",
      outlet: "Mississippi State University Newsroom",
      date: "Apr. 2021",
      summary: "Selected as the 19th Mississippi State student to receive the Goldwater Scholarship.",
      image: "images/headshot-web.jpg",
      url: "https://www.msstate.edu/newsroom/article/2021/04/msus-dunne-selected-prestigious-goldwater-scholarship",
    },
    {
      title: "From Starkville to Scotland: MSU student-athlete anticipates 2021 Fulbright U.K. Summer Institute",
      outlet: "Mississippi State University Newsroom",
      date: "July 2020",
      summary: "Selected for the Fulbright U.K. Summer Institute, representing the Honors College, College of Engineering, and Athletics.",
      image: "images/featured/track-headshot-web.jpg",
      url: "https://www.msstate.edu/newsroom/article/2020/07/starkville-scotland-msu-student-athlete-anticipates-2021-fulbright-uk",
    },
  ],

  /* ---------------------------------------------------------------
     OTHER PRESENTATIONS: regional and university talks/posters.
     Shown on the printable CV only (homepage links to it). Newest first.
     --------------------------------------------------------------- */
  otherPresentations: [
    {
      authors: "Dunne R, Green A, Kim D, Priddy L, Priddy M",
      title: "Development and implementation of a magnesium-based finite element degradation model for hydroxyapatite-coated orthopedic implants",
      type: "Poster presentation",
      venue: "MSU Graduate Student Research Symposium",
      location: "Mississippi State, MS, USA",
      date: "Oct. 22, 2022",
    },
    {
      authors: "Dunne R, Mazzoli V, Gold G",
      title: "A Diffusion Tensor Imaging approach to investigate the effects of exercise on quadricep muscle fiber lengths",
      type: "Poster presentation",
      venue: "MSU Spring 2022 Undergraduate Research Symposium",
      location: "Mississippi State, MS, USA",
      date: "Apr. 14, 2022",
    },
    {
      authors: "Dunne R, Mazzoli V, Gold G",
      title: "A Diffusion Tensor Imaging approach to investigate the effects of exercise on quadricep muscle fiber lengths",
      type: "Poster presentation",
      venue: "Stanford Research Conference",
      location: "Stanford, CA, USA",
      date: "Apr. 10, 2022",
    },
    {
      authors: "Dunne R, Mazzoli V, Gold G",
      title: "A Diffusion Tensor Imaging approach to investigate the effects of exercise on quadricep muscle fiber lengths",
      type: "Oral presentation",
      venue: "Southern Regional Honors Council Conference",
      location: "Birmingham, AL, USA",
      date: "Apr. 1, 2022",
    },
    {
      authors: "Dunne R, Mazzoli V, Gold G",
      title: "A Diffusion Tensor Imaging approach to investigate the effects of exercise on quadricep muscle fiber lengths",
      type: "Oral presentation",
      venue: "Stanford Radiological Sciences Laboratory REU",
      location: "Stanford, CA, USA",
      date: "Aug. 25, 2021",
    },
    {
      authors: "Dunne R, Graham MT, Bell MAL",
      title: "Comparison of compressional and elastic transcranial photoacoustic simulations for presurgical planning of neurosurgeries",
      type: "Oral presentation",
      venue: "Astronaut Scholar Technical Conference",
      location: "Orlando, FL, USA",
      date: "Aug. 13, 2021",
    },
    {
      authors: "Dunne R, Betts JL, Green A, Priddy L, Priddy M",
      title: "Development and implementation of a magnesium-based finite element degradation model for orthopedic implants",
      type: "Poster presentation",
      venue: "MSU Spring 2021 Undergraduate Research Symposium",
      location: "Mississippi State, MS, USA",
      date: "Apr. 8–9, 2021",
    },
    {
      authors: "Dunne R, Graham MT, Bell MAL",
      title: "Comparison of compressional and elastic transcranial photoacoustic simulations for presurgical planning of neurosurgeries",
      type: "Oral presentation",
      venue: "Mississippi Honors Undergraduate Conference",
      location: "Columbus, MS, USA",
      date: "Feb. 19, 2021",
    },
    {
      authors: "Dunne R, Graham MT, Bell MAL",
      title: "Comparison of compressional and elastic transcranial photoacoustic simulations for presurgical planning",
      type: "Poster presentation",
      venue: "MSU Fall 2020 Undergraduate Research Symposium",
      location: "Mississippi State, MS, USA",
      date: "Oct. 11–13, 2020",
    },
  ],

  /* ---------------------------------------------------------------
     SKILLS: plain text, or { name: "...", level: "familiar" }
     --------------------------------------------------------------- */
  skills: [
    {
      title: "Languages & Tools",
      items: [
        "Python",
        "MATLAB",
        "Bash / Shell",
        "Fortran",
        "Linux",
        "Stata",
        "Jupyter",
        "Abaqus",
        { name: "C++", level: "familiar" },
        { name: "R", level: "familiar" },
      ],
    },
    {
      title: "Machine Learning",
      items: ["TensorFlow", "scikit-learn", "Deep Learning", { name: "PyTorch", level: "familiar" }],
    },
    {
      title: "Imaging & Data Analysis",
      items: ["Statistical Analysis", "Mixed-Effects Modeling", "MRI", "Image Registration", "Segmentation", "FSL"],
    },
  ],

  /* ---------------------------------------------------------------
     LEADERSHIP
     --------------------------------------------------------------- */
  leadership: [
    {
      title: "Leadership",
      items: [
        {
          title: "Founder & President, Nonnie’s Notes, 501(c)(3)",
          organization: null,
          dates: "2016–2024",
          description:
            "Founded a service organization that brings student musical performances to assisted-living and memory-care facilities. Led 50+ volunteers and incorporated the organization as a 501(c)(3) nonprofit in 2022. The organization was inspired by my grandmother, who had Alzheimer’s disease.",
        },
        {
          title: "U.S. Student Representative, National Board",
          organization: "Lambda Sigma Honor Society",
          dates: "2019–2022",
          description:
            "Elected sole student representative to the national board, serving as the liaison between national leadership and chapter presidents nationwide.",
        },
        {
          title: "President, Tau Beta Pi Engineering Honor Society",
          organization: "Mississippi State University",
          dates: "2021–2023",
          description:
            "Led the chapter as president (2022–2023), coordinating executive meetings and biannual initiation ceremonies, and represented Mississippi State as a voting delegate at the 2022 national convention. Previously social coordinator (2021–2022).",
        },
        {
          title: "President, Lambda Sigma Honor Society",
          organization: "Mississippi State University",
          dates: "2019–2021",
          description:
            "Led the chapter as president (2019–2020), setting meeting agendas, organizing community-service projects, and representing the chapter at the national conference; remained on the executive board as junior advisor (2020–2021).",
        },
        {
          title: "Social Coordinator, Radiological Sciences Laboratory Trainee Council",
          organization: "Stanford University",
          dates: "2025–Present",
          description:
            "Organize events that build community and cross-lab connections for students, postdocs, faculty, and staff across Stanford Radiology research groups.",
        },
      ],
    },
    {
      title: "Athletics & Activities",
      items: [
        {
          title: "NCAA Division I Track & Field / Cross Country Athlete",
          organization: "Mississippi State University",
          article: "https://hailstate.com/news/2021/6/17/track-field-a-starkville-super-scholar",
          dates: "2018–2023",
          description:
            "Competed in the SEC in the 800m and 1500m, training ~20 hours per week alongside a full-time mechanical engineering curriculum and undergraduate research.",
        },
        {
          title: "Stanford Triathlon Team",
          organization: "Stanford University",
          dates: "2023–Present",
          description: "Compete in triathlons across California and nationally; social media coordinator (2025–2026).",
        },
        {
          title: "Choral Singer",
          organization: "MSU State Singers · Stanford Memorial Church Choir",
          dates: "2018–2023, 2026–Present",
          description:
            "Tenor in Mississippi State’s premier choral ensemble, performing repertoire in English, German, Latin, and Italian; joined the Stanford Memorial Church Choir in 2026.",
        },
      ],
    },
  ],
};
