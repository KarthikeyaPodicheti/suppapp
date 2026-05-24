const allSubjects = {
// SEMESTER 1 - Common
m1: {
    name: "Mathematics-I (M1)", code: "MA101BS", sem: 1, branch: "ALL",
    passTip: "Focus on solving previous papers. M1 is all about practice - do at least 5 problems from each unit daily. Memorize formulas before exam.",
    important: ["Rolle's Theorem & Mean Value Theorems", "Partial Differentiation", "Jacobians", "Taylor's & Maclaurin's Series", "Maxima & Minima of two variables", "Radius of Curvature"],
    units: ["Sequences & Series, Convergence tests", "Mean Value Theorems, Taylor's Series", "Partial Differentiation, Jacobians", "Curvature, Maxima & Minima", "Multiple Integrals"],
    tips: ["Memorize all formulas - make a formula sheet", "Practice previous 5 years papers", "Focus on theorems - proofs are often asked", "Jacobians and partial derivatives are scoring"],
    resources: "Textbook: B.S. Grewal. YouTube: Dr. Gajendra Purohit, NPTEL Mathematics"
},
engg_physics: {
    name: "Engineering Physics", code: "PH102BS", sem: 1, branch: "ALL",
    passTip: "Learn derivations and diagrams. Numericals are straightforward if you know formulas. Focus on Lasers, Fiber Optics, and Semiconductors.",
    important: ["Laser principles & types", "Optical Fiber - NA, modes", "Semiconductor physics", "Magnetic materials", "Superconductivity", "Nanotechnology basics"],
    units: ["Wave Optics - Interference, Diffraction", "Lasers & Fiber Optics", "Semiconductor Physics", "Magnetic & Dielectric Materials", "Superconductivity & Nanotechnology"],
    tips: ["Draw neat diagrams - they carry marks", "Derivations of laser and fiber optics are must", "Numericals repeat from previous papers", "Understand band theory well"],
    resources: "Textbook: Engineering Physics by Gaur & Gupta. YouTube: Physics Wallah, NPTEL"
},
engg_chemistry: {
    name: "Engineering Chemistry", code: "CH103BS", sem: 1, branch: "ALL",
    passTip: "Memorize reactions and mechanisms. Water treatment and corrosion are very important. Practice numerical problems on hardness.",
    important: ["Water treatment methods", "Corrosion & its prevention", "Polymers - types & uses", "Batteries & Fuel Cells", "Lubricants", "Spectroscopy basics"],
    units: ["Water Technology", "Electrochemistry & Corrosion", "Polymers", "Lubricants", "Engineering Materials & Spectroscopy"],
    tips: ["Water hardness numericals are must practice", "Learn all corrosion prevention methods", "Polymer classifications asked frequently", "Battery reactions are important"],
    resources: "Textbook: Engineering Chemistry by Jain & Jain. YouTube: Unacademy, Chemistry by Paaras Thakur"
},
english: {
    name: "English", code: "EN104HS", sem: 1, branch: "ALL",
    passTip: "Focus on grammar, vocabulary, and comprehension. Practice letter writing and report formats. Easy subject to score if you read the textbook.",
    important: ["Grammar - Tenses, Voice, Articles", "Vocabulary & Synonyms", "Letter Writing formats", "Report Writing", "Reading Comprehension", "Technical Writing"],
    units: ["Grammar & Usage", "Vocabulary Building", "Reading Skills", "Writing Skills", "Communication Skills"],
    tips: ["Practice grammar exercises daily", "Learn format of formal letters", "Read passages for comprehension practice", "Technical vocabulary is important"],
    resources: "Textbook: Prescribed OU English textbook. Practice grammar from Wren & Martin"
},
c_programming: {
    name: "C Programming", code: "CS105ES", sem: 1, branch: "ALL",
    passTip: "Practice writing programs by hand. Focus on pointers, arrays, and functions. Trace outputs of given programs - very common question type.",
    important: ["Pointers & Pointer Arithmetic", "Arrays - 1D & 2D", "Functions & Recursion", "Structures & Unions", "File Handling", "String operations"],
    units: ["Introduction to C, Data Types, Operators", "Control Structures, Loops", "Arrays & Strings", "Functions & Pointers", "Structures, Unions, Files"],
    tips: ["Write programs on paper without computer", "Pointer programs are must", "Trace output questions need practice", "Understand recursion with examples"],
    resources: "Textbook: Let Us C by Yashwant Kanetkar. YouTube: Jenny's Lectures, Neso Academy"
},
engg_drawing: {
    name: "Engineering Drawing", code: "ME106ES", sem: 1, branch: "ALL",
    passTip: "Practice drawing daily. Projections and isometric views are most important. Use proper instruments and maintain neatness.",
    important: ["Orthographic Projections", "Isometric Projections", "Projections of Points & Lines", "Projections of Planes", "Projections of Solids", "Sections of Solids"],
    units: ["Scales, Conic Sections", "Projections of Points & Lines", "Projections of Planes", "Projections of Solids", "Isometric & Orthographic Projections"],
    tips: ["Practice 2-3 drawings daily", "Neatness carries marks", "Learn standard dimensions", "Projections of solids most important"],
    resources: "Textbook: N.D. Bhatt Engineering Drawing. Practice from previous papers"
},

// SEMESTER 2 - Common
m2: {
    name: "Mathematics-II (M2)", code: "MA201BS", sem: 2, branch: "ALL",
    passTip: "Laplace transforms and Differential equations are scoring. Practice solving DEs by different methods. Fourier series needs formula memorization.",
    important: ["Laplace Transforms & Inverse", "Solving DEs using Laplace", "Fourier Series", "First Order DEs", "Higher Order Linear DEs", "Method of Variation of Parameters"],
    units: ["First Order DEs - exact, linear, Bernoulli", "Higher Order Linear DEs", "Laplace Transforms", "Inverse Laplace & Applications", "Fourier Series"],
    tips: ["Laplace transform table must be memorized", "Practice all types of DEs", "Fourier series formulas are must", "Variation of parameters is important method"],
    resources: "Textbook: B.S. Grewal. YouTube: Dr. Gajendra Purohit, NPTEL M2 lectures"
},
m3: {
    name: "Mathematics-III (M3)", code: "MA301BS", sem: 2, branch: "ALL",
    passTip: "Vector calculus and Complex analysis are key. Practice line integrals, Green's theorem. Probability problems are straightforward.",
    important: ["Vector Differentiation - Gradient, Divergence, Curl", "Line & Surface Integrals", "Green's, Stokes, Gauss Theorems", "Analytic Functions", "Complex Integration", "Probability Distributions"],
    units: ["Vector Calculus", "Line, Surface, Volume Integrals", "Complex Variables", "Complex Integration", "Probability & Statistics"],
    tips: ["Vector calculus theorems are must", "Practice Cauchy's integral formula", "Probability distributions - Binomial, Poisson, Normal", "Residue theorem problems are scoring"],
    resources: "Textbook: B.S. Grewal, Kreyszig. YouTube: NPTEL, Dr. Gajendra Purohit"
},
beee: {
    name: "Basic Electrical & Electronics Engg", code: "EE202ES", sem: 2, branch: "ALL",
    passTip: "Focus on circuit analysis and DC machines. Numericals are important. Understand Kirchhoff's laws and network theorems well.",
    important: ["Kirchhoff's Laws", "Network Theorems - Thevenin, Norton", "AC Circuits - RLC", "Transformers", "DC Machines", "Diodes & Transistors basics"],
    units: ["DC Circuits & Network Theorems", "AC Circuits", "Transformers", "DC Machines", "Basic Electronics"],
    tips: ["Practice numerical problems", "Network theorems are very important", "Understand phasor diagrams", "Transformer problems are scoring"],
    resources: "Textbook: B.L. Theraja. YouTube: Neso Academy, Gate Smashers"
},
eds: {
    name: "Engineering Data Structures", code: "CS203ES", sem: 2, branch: "ALL",
    passTip: "Understand concepts with diagrams. Practice writing algorithms and tracing. Trees and sorting algorithms are most important.",
    important: ["Stacks & Queues", "Linked Lists - all types", "Binary Trees & BST", "Tree Traversals", "Sorting Algorithms", "Searching - Linear, Binary"],
    units: ["Arrays, Stacks, Queues", "Linked Lists", "Trees", "Graphs", "Sorting & Searching"],
    tips: ["Draw diagrams for tree problems", "Trace sorting algorithms step by step", "Time complexity is important", "Practice linked list operations"],
    resources: "Textbook: Data Structures by Lipschutz. YouTube: Jenny's Lectures, Abdul Bari"
},


// SEMESTER 3 - CSE
dsa: {
    name: "Data Structures & Algorithms", code: "CS301PC", sem: 3, branch: "CSE",
    passTip: "Master recursion and trees. Write algorithms on paper. Time complexity analysis is must for every algorithm.",
    important: ["AVL Trees", "Graph Traversals - BFS, DFS", "Dijkstra's Algorithm", "Hashing techniques", "Dynamic Programming basics", "Heap & Priority Queue"],
    units: ["Recursion & Stacks", "Queues & Lists", "Trees & BST", "Graphs", "Hashing & Heaps"],
    tips: ["Practice tree rotations", "Graph algorithms need step-by-step tracing", "Understand hashing collision handling", "DP problems need practice"],
    resources: "Textbook: Cormen CLRS, Sahni. YouTube: Abdul Bari, Take U Forward"
},
dbms: {
    name: "Database Management Systems", code: "CS302PC", sem: 3, branch: "CSE",
    passTip: "ER diagrams and Normalization are very important. Practice SQL queries. Understand ACID properties and transactions.",
    important: ["ER Diagrams", "Normalization - 1NF to BCNF", "SQL Queries - joins, subqueries", "Transaction Management", "ACID Properties", "Indexing"],
    units: ["Introduction & ER Model", "Relational Model", "SQL", "Normalization", "Transaction Management"],
    tips: ["Draw ER diagrams neatly", "Practice normalization step by step", "SQL queries from previous papers", "Understand concurrency control"],
    resources: "Textbook: Korth, Navathe. YouTube: Gate Smashers, Jenny's Lectures"
},
os: {
    name: "Operating Systems", code: "CS303PC", sem: 3, branch: "CSE",
    passTip: "Process scheduling and memory management are key. Practice numerical problems on scheduling algorithms. Understand deadlock conditions.",
    important: ["CPU Scheduling Algorithms", "Process Synchronization", "Deadlock - conditions & handling", "Memory Management - Paging, Segmentation", "Page Replacement Algorithms", "Disk Scheduling"],
    units: ["Process Management", "CPU Scheduling", "Synchronization & Deadlocks", "Memory Management", "File Systems"],
    tips: ["Practice Gantt charts for scheduling", "Banker's algorithm numericals", "Page replacement - FIFO, LRU, Optimal", "Understand semaphores well"],
    resources: "Textbook: Galvin, Silberschatz. YouTube: Gate Smashers, Neso Academy"
},
coa: {
    name: "Computer Organization & Architecture", code: "CS304PC", sem: 3, branch: "CSE",
    passTip: "Focus on CPU design and memory hierarchy. Practice number conversions and arithmetic operations. Pipeline concepts are important.",
    important: ["Number Systems & Arithmetic", "CPU Organization", "Pipelining", "Memory Hierarchy - Cache", "I/O Organization", "Instruction formats"],
    units: ["Data Representation", "ALU Design", "CPU Design", "Memory Organization", "I/O Organization"],
    tips: ["Practice binary arithmetic", "Understand cache mapping techniques", "Pipeline hazards are important", "Addressing modes must know"],
    resources: "Textbook: Morris Mano, Carl Hamacher. YouTube: Neso Academy, Gate Smashers"
},

// SEMESTER 3 - ECE
ss: {
    name: "Signals & Systems", code: "EC301PC", sem: 3, branch: "ECE",
    passTip: "Fourier and Laplace transforms are must. Practice convolution problems. Understand system properties well.",
    important: ["Fourier Series & Transform", "Laplace Transform", "Z-Transform", "Convolution", "System Properties - LTI", "Sampling Theorem"],
    units: ["Signal Classification", "LTI Systems", "Fourier Analysis", "Laplace Transform", "Z-Transform"],
    tips: ["Transform tables must memorize", "Practice convolution step by step", "Sampling theorem numericals", "ROC concepts are important"],
    resources: "Textbook: Oppenheim, Haykin. YouTube: Neso Academy, NPTEL"
},
ade: {
    name: "Analog & Digital Electronics", code: "EC302PC", sem: 3, branch: "ECE",
    passTip: "Op-amp circuits and digital logic design are key. Practice K-map simplification. Understand amplifier configurations.",
    important: ["Op-Amp applications", "Amplifier configurations", "Boolean Algebra", "K-Map simplification", "Flip-flops & Counters", "ADC/DAC"],
    units: ["Diode & Transistor Circuits", "Amplifiers", "Op-Amps", "Digital Logic", "Sequential Circuits"],
    tips: ["Op-amp circuits are scoring", "Practice K-maps thoroughly", "Counter design problems", "Understand feedback in amplifiers"],
    resources: "Textbook: Sedra Smith, Morris Mano. YouTube: Neso Academy, NPTEL"
},
emtl: {
    name: "EM Theory & Transmission Lines", code: "EC303PC", sem: 3, branch: "ECE",
    passTip: "Maxwell's equations and transmission line theory are important. Practice Smith chart problems. Vector calculus is prerequisite.",
    important: ["Maxwell's Equations", "Wave Propagation", "Transmission Line Equations", "Smith Chart", "Impedance Matching", "Waveguides basics"],
    units: ["Electrostatics", "Magnetostatics", "Maxwell's Equations", "EM Wave Propagation", "Transmission Lines"],
    tips: ["Maxwell's equations derivations", "Smith chart usage practice", "Standing wave problems", "Understand boundary conditions"],
    resources: "Textbook: Sadiku, Hayt. YouTube: NPTEL, Neso Academy"
},

// SEMESTER 4 - CSE
daa: {
    name: "Design & Analysis of Algorithms", code: "CS401PC", sem: 4, branch: "CSE",
    passTip: "Master divide & conquer, greedy, and DP. Practice time complexity analysis. Understand recurrence relations.",
    important: ["Divide & Conquer - Merge, Quick sort", "Greedy Algorithms", "Dynamic Programming", "Backtracking", "Branch & Bound", "NP-Completeness basics"],
    units: ["Algorithm Analysis", "Divide & Conquer", "Greedy Method", "Dynamic Programming", "Backtracking & B&B"],
    tips: ["Master recurrence solving", "DP problems need lots of practice", "Greedy vs DP - know when to use", "Graph algorithms complexity"],
    resources: "Textbook: Cormen, Horowitz. YouTube: Abdul Bari, Take U Forward"
},
cn: {
    name: "Computer Networks", code: "CS402PC", sem: 4, branch: "CSE",
    passTip: "OSI and TCP/IP models are foundation. Understand protocols at each layer. Practice subnetting problems.",
    important: ["OSI & TCP/IP Models", "TCP vs UDP", "IP Addressing & Subnetting", "Routing Algorithms", "Flow & Error Control", "Application Protocols"],
    units: ["Network Models", "Data Link Layer", "Network Layer", "Transport Layer", "Application Layer"],
    tips: ["Layer-wise protocols must know", "Subnetting practice is must", "Understand sliding window", "Routing algorithms - DVR, LSR"],
    resources: "Textbook: Kurose & Ross, Tanenbaum. YouTube: Gate Smashers, Neso Academy"
},
se: {
    name: "Software Engineering", code: "CS403PC", sem: 4, branch: "CSE",
    passTip: "SDLC models and testing are important. Understand UML diagrams. Practice drawing DFDs and use case diagrams.",
    important: ["SDLC Models - Waterfall, Agile", "Requirements Engineering", "UML Diagrams", "Testing types", "Software metrics", "Project Management"],
    units: ["Software Process", "Requirements", "Design", "Testing", "Project Management"],
    tips: ["Compare SDLC models", "Draw UML diagrams neatly", "Testing techniques - BB, WB", "COCOMO model for estimation"],
    resources: "Textbook: Pressman, Sommerville. YouTube: Gate Smashers, Knowledge Gate"
},

// SEMESTER 4 - ECE  
dc: {
    name: "Digital Communications", code: "EC401PC", sem: 4, branch: "ECE",
    passTip: "PCM and digital modulation techniques are key. Practice bandwidth and bit rate calculations. Understand error control coding.",
    important: ["PCM - Sampling, Quantization", "Delta Modulation", "ASK, FSK, PSK, QAM", "Error Control Coding", "Information Theory", "Channel Capacity"],
    units: ["Sampling & Quantization", "PCM & DM", "Digital Modulation", "Error Control", "Information Theory"],
    tips: ["PCM numericals are must", "Compare modulation techniques", "Hamming code problems", "Shannon's theorem"],
    resources: "Textbook: Haykin, Proakis. YouTube: NPTEL, Neso Academy"
},
mpmc: {
    name: "Microprocessors & Microcontrollers", code: "EC402PC", sem: 4, branch: "ECE",
    passTip: "8086 architecture and instruction set are important. Practice assembly programs. Understand 8051 microcontroller.",
    important: ["8086 Architecture", "Addressing Modes", "Assembly Programming", "8051 Architecture", "Interrupts", "Interfacing - ADC, DAC, LCD"],
    units: ["8086 Architecture", "8086 Instruction Set", "8086 Interfacing", "8051 Microcontroller", "8051 Programming"],
    tips: ["Memorize instruction set", "Practice assembly programs", "Interfacing diagrams important", "Interrupt handling concepts"],
    resources: "Textbook: Gaonkar, Mazidi. YouTube: Bharat Acharya, NPTEL"
},


// SEMESTER 3 - EEE
em1: {
    name: "Electrical Machines-I", code: "EE301PC", sem: 3, branch: "EEE",
    passTip: "DC machines and transformers are key. Practice equivalent circuit problems. Understand losses and efficiency calculations.",
    important: ["DC Generator - types, EMF equation", "DC Motor - characteristics, speed control", "Transformer - equivalent circuit", "Losses & Efficiency", "OC & SC tests", "Voltage Regulation"],
    units: ["DC Generators", "DC Motors", "Single Phase Transformers", "Three Phase Transformers", "Testing of Machines"],
    tips: ["EMF equations must memorize", "Practice efficiency problems", "Equivalent circuits are important", "Speed control methods of DC motor"],
    resources: "Textbook: Nagrath & Kothari, B.L. Theraja. YouTube: NPTEL, Bharat Acharya"
},
eca: {
    name: "Electronic Circuit Analysis", code: "EE302PC", sem: 3, branch: "EEE",
    passTip: "Amplifier analysis and feedback are important. Practice small signal analysis. Understand oscillator circuits.",
    important: ["BJT & FET Amplifiers", "Multistage Amplifiers", "Feedback Amplifiers", "Oscillators", "Power Amplifiers", "Tuned Amplifiers"],
    units: ["Single Stage Amplifiers", "Multistage Amplifiers", "Feedback", "Oscillators", "Power Amplifiers"],
    tips: ["Small signal models practice", "Feedback types and effects", "Oscillator conditions", "Class A, B, AB amplifiers"],
    resources: "Textbook: Sedra Smith, Millman Halkias. YouTube: Neso Academy, NPTEL"
},

// SEMESTER 3 - MECH
tom: {
    name: "Theory of Machines", code: "ME301PC", sem: 3, branch: "MECH",
    passTip: "Mechanisms and gear trains are important. Practice velocity and acceleration diagrams. Understand cam profiles.",
    important: ["Mechanisms - 4 bar, slider crank", "Velocity & Acceleration Analysis", "Gear Trains", "Cams & Followers", "Governors", "Gyroscope"],
    units: ["Mechanisms", "Velocity Analysis", "Acceleration Analysis", "Gears & Gear Trains", "Cams"],
    tips: ["Draw mechanisms neatly", "Practice graphical methods", "Gear train problems", "Cam profile construction"],
    resources: "Textbook: S.S. Rattan, R.S. Khurmi. YouTube: NPTEL, Ekeeda"
},
sm: {
    name: "Strength of Materials", code: "ME302PC", sem: 3, branch: "MECH",
    passTip: "Stress-strain concepts and bending are key. Practice SFD and BMD problems. Understand torsion and columns.",
    important: ["Stress & Strain", "SFD & BMD", "Bending Stresses", "Shear Stresses", "Torsion", "Columns & Struts"],
    units: ["Simple Stresses", "Beams - SFD, BMD", "Bending & Shear Stresses", "Torsion", "Columns"],
    tips: ["SFD BMD practice daily", "Bending equation derivation", "Torsion formula important", "Euler's column formula"],
    resources: "Textbook: R.K. Bansal, Timoshenko. YouTube: NPTEL, Ekeeda"
},
td: {
    name: "Thermodynamics", code: "ME303PC", sem: 3, branch: "MECH",
    passTip: "Laws of thermodynamics and cycles are important. Practice PV and TS diagrams. Understand entropy concepts.",
    important: ["First & Second Law", "Carnot Cycle", "Otto & Diesel Cycles", "Rankine Cycle", "Entropy", "Availability"],
    units: ["Basic Concepts", "First Law", "Second Law", "Entropy", "Gas & Vapor Cycles"],
    tips: ["Cycle efficiency formulas", "PV & TS diagrams practice", "Entropy change calculations", "Compare Otto vs Diesel"],
    resources: "Textbook: P.K. Nag, Cengel. YouTube: NPTEL, Ekeeda"
},

// SEMESTER 3 - CIVIL
som: {
    name: "Strength of Materials", code: "CE301PC", sem: 3, branch: "CIVIL",
    passTip: "Bending and shear stress analysis are key. Master SFD and BMD. Practice numerical problems on columns.",
    important: ["Stress-Strain Relations", "SFD & BMD", "Bending Stresses", "Shear Stresses", "Deflection of Beams", "Columns"],
    units: ["Simple Stresses", "Beams", "Bending", "Torsion", "Columns & Struts"],
    tips: ["SFD BMD are must practice", "Moment of inertia calculations", "Deflection formulas", "Column buckling problems"],
    resources: "Textbook: R.K. Bansal, Timoshenko. YouTube: NPTEL, Civil Engineering Academy"
},
sm_civil: {
    name: "Surveying", code: "CE302PC", sem: 3, branch: "CIVIL",
    passTip: "Chain surveying and leveling are important. Understand theodolite operations. Practice numerical problems.",
    important: ["Chain Surveying", "Compass Surveying", "Leveling", "Theodolite", "Contouring", "Tacheometry"],
    units: ["Linear Measurements", "Compass Surveying", "Leveling", "Theodolite", "Curves"],
    tips: ["Leveling problems practice", "Theodolite angles", "Contour interpolation", "Curve setting problems"],
    resources: "Textbook: B.C. Punmia, Kanetkar. YouTube: NPTEL, Civil Concepts"
},
fm: {
    name: "Fluid Mechanics", code: "CE303PC", sem: 3, branch: "CIVIL",
    passTip: "Bernoulli's equation and flow through pipes are key. Practice numerical problems. Understand dimensional analysis.",
    important: ["Fluid Properties", "Bernoulli's Equation", "Flow Through Pipes", "Dimensional Analysis", "Boundary Layer", "Open Channel Flow"],
    units: ["Fluid Properties", "Fluid Statics", "Fluid Kinematics", "Fluid Dynamics", "Pipe Flow"],
    tips: ["Bernoulli's applications", "Pipe flow numericals", "Dimensional analysis practice", "Manometer problems"],
    resources: "Textbook: R.K. Bansal, Modi & Seth. YouTube: NPTEL, Civil Simplified"
},

// SEMESTER 5-6 CSE
cd: {
    name: "Compiler Design", code: "CS501PC", sem: 5, branch: "CSE",
    passTip: "Lexical analysis and parsing are key. Practice constructing DFA from regex. Understand LR parsing.",
    important: ["Lexical Analysis", "Regular Expressions & DFA", "Context Free Grammars", "LL & LR Parsing", "Syntax Directed Translation", "Code Optimization"],
    units: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Generation", "Code Optimization"],
    tips: ["Regex to DFA conversion", "First & Follow sets", "LR parsing table construction", "Three address code"],
    resources: "Textbook: Aho Ullman (Dragon Book). YouTube: Gate Smashers, Neso Academy"
},
ml: {
    name: "Machine Learning", code: "CS502PE", sem: 5, branch: "CSE",
    passTip: "Understand algorithms conceptually. Practice decision tree and SVM problems. Know evaluation metrics.",
    important: ["Linear Regression", "Decision Trees", "SVM", "Neural Networks basics", "Clustering - K-means", "Evaluation Metrics"],
    units: ["Introduction", "Supervised Learning", "Unsupervised Learning", "Neural Networks", "Evaluation"],
    tips: ["Algorithm comparisons", "Bias-variance tradeoff", "Overfitting concepts", "Confusion matrix metrics"],
    resources: "Textbook: Tom Mitchell, PRML. YouTube: Andrew Ng, StatQuest"
},
cns: {
    name: "Cryptography & Network Security", code: "CS503PC", sem: 5, branch: "CSE",
    passTip: "Encryption algorithms and protocols are key. Practice RSA and DES problems. Understand digital signatures.",
    important: ["DES & AES", "RSA Algorithm", "Diffie-Hellman", "Digital Signatures", "Hash Functions", "SSL/TLS"],
    units: ["Classical Encryption", "Block Ciphers", "Public Key Crypto", "Authentication", "Network Security"],
    tips: ["RSA numerical practice", "DES rounds understanding", "Hash function properties", "Protocol comparisons"],
    resources: "Textbook: Stallings, Forouzan. YouTube: Gate Smashers, Neso Academy"
},

// SEMESTER 5-6 ECE
vlsi: {
    name: "VLSI Design", code: "EC501PC", sem: 5, branch: "ECE",
    passTip: "CMOS logic design and fabrication are key. Practice stick diagrams. Understand timing analysis.",
    important: ["CMOS Fabrication", "CMOS Inverter", "Combinational Logic Design", "Sequential Circuits", "Stick Diagrams", "Timing Analysis"],
    units: ["MOS Transistor", "CMOS Inverter", "Combinational Logic", "Sequential Logic", "Memory Design"],
    tips: ["CMOS inverter analysis", "Stick diagram practice", "Setup & hold time", "Power dissipation"],
    resources: "Textbook: Weste & Harris, Kang. YouTube: NPTEL, Neso Academy"
},
dsp: {
    name: "Digital Signal Processing", code: "EC502PC", sem: 5, branch: "ECE",
    passTip: "DFT and FFT are very important. Practice filter design. Understand Z-transform applications.",
    important: ["DFT & FFT", "Z-Transform", "FIR Filter Design", "IIR Filter Design", "Filter Structures", "DSP Applications"],
    units: ["Discrete Signals", "Z-Transform", "DFT & FFT", "FIR Filters", "IIR Filters"],
    tips: ["FFT algorithm steps", "Filter design methods", "Frequency response analysis", "Stability criteria"],
    resources: "Textbook: Oppenheim, Proakis. YouTube: NPTEL, Neso Academy"
},

// IT Branch subjects
oops_java: {
    name: "OOP through Java", code: "IT301PC", sem: 3, branch: "IT",
    passTip: "OOP concepts and exception handling are key. Practice writing programs. Understand inheritance and polymorphism.",
    important: ["Classes & Objects", "Inheritance types", "Polymorphism", "Exception Handling", "Multithreading", "Collections Framework"],
    units: ["OOP Concepts", "Inheritance", "Packages & Interfaces", "Exception Handling", "Multithreading"],
    tips: ["Write programs by hand", "Inheritance examples", "Exception types", "Thread synchronization"],
    resources: "Textbook: Herbert Schildt. YouTube: Telusko, Durga Software"
},
web_tech: {
    name: "Web Technologies", code: "IT401PC", sem: 4, branch: "IT",
    passTip: "HTML, CSS, JavaScript basics are must. Understand servlets and JSP. Practice writing code snippets.",
    important: ["HTML5 & CSS3", "JavaScript basics", "DOM Manipulation", "Servlets", "JSP", "JDBC"],
    units: ["HTML & CSS", "JavaScript", "Servlets", "JSP", "Database Connectivity"],
    tips: ["Practice HTML forms", "JavaScript events", "Servlet lifecycle", "JSP implicit objects"],
    resources: "Textbook: Web Technologies by Uttam Roy. YouTube: Traversy Media, Telusko"
},

// AI&DS Branch Subjects (OU/Methodist College Syllabus)

// SEMESTER 3 - AI&DS
python_prog: {
    name: "Python Programming", code: "SPC301AD", sem: 3, branch: "AIDS",
    passTip: "Practice coding daily. Focus on data structures, file handling, and OOP. Write programs by hand for exams.",
    important: ["Data Types & Control Flow", "Functions & Modules", "File Handling", "Exception Handling", "OOP in Python", "NumPy & Pandas basics"],
    units: ["Python Basics & Data Types", "Control Structures & Functions", "Strings, Lists, Tuples, Dictionaries", "File Handling & Exceptions", "OOP & Libraries"],
    tips: ["Practice list/dict operations", "File handling programs are must", "Understand classes and objects", "NumPy array operations"],
    resources: "Textbook: Learning Python by Mark Lutz. YouTube: Corey Schafer, Telusko"
},
prob_stats: {
    name: "Probability & Statistics", code: "SBS301AD", sem: 3, branch: "AIDS",
    passTip: "Master probability distributions and hypothesis testing. Practice numerical problems. Understand correlation and regression.",
    important: ["Probability Distributions - Binomial, Poisson, Normal", "Hypothesis Testing", "Correlation & Regression", "Sampling Theory", "Bayes Theorem", "Central Limit Theorem"],
    units: ["Probability Theory", "Random Variables", "Probability Distributions", "Sampling & Estimation", "Hypothesis Testing"],
    tips: ["Distribution formulas must memorize", "Practice hypothesis testing steps", "Correlation coefficient problems", "Bayes theorem applications"],
    resources: "Textbook: Probability & Statistics by Walpole. YouTube: StatQuest, Khan Academy"
},
dsa_aids: {
    name: "Data Structures", code: "SPC302AD", sem: 3, branch: "AIDS",
    passTip: "Focus on trees, graphs, and sorting. Practice time complexity analysis. Write algorithms step by step.",
    important: ["Arrays & Linked Lists", "Stacks & Queues", "Trees - BST, AVL", "Graph Traversals", "Sorting Algorithms", "Hashing"],
    units: ["Linear Data Structures", "Stacks & Queues", "Trees", "Graphs", "Sorting & Searching"],
    tips: ["Tree traversals must know", "Graph BFS DFS practice", "Sorting algorithm comparisons", "Time complexity analysis"],
    resources: "Textbook: Data Structures by Sahni. YouTube: Abdul Bari, Take U Forward"
},
dbms_aids: {
    name: "Database Management Systems", code: "SPC303AD", sem: 3, branch: "AIDS",
    passTip: "ER diagrams and normalization are key. Practice SQL queries extensively. Understand transactions and ACID properties.",
    important: ["ER Model & Diagrams", "Relational Model", "SQL - DDL, DML, Joins", "Normalization 1NF-BCNF", "Transactions & ACID", "Indexing"],
    units: ["Database Concepts", "ER Model", "Relational Model & SQL", "Normalization", "Transaction Management"],
    tips: ["Draw ER diagrams neatly", "SQL joins practice", "Normalization step by step", "Concurrency control basics"],
    resources: "Textbook: Korth, Navathe. YouTube: Gate Smashers, Jenny's Lectures"
},
de_aids: {
    name: "Digital Electronics", code: "SES301AD", sem: 3, branch: "AIDS",
    passTip: "Boolean algebra and K-maps are foundation. Practice combinational and sequential circuits. Understand flip-flops well.",
    important: ["Boolean Algebra", "K-Map Simplification", "Combinational Circuits", "Flip-flops - SR, JK, D, T", "Counters & Registers", "ADC/DAC"],
    units: ["Number Systems & Codes", "Boolean Algebra", "Combinational Logic", "Sequential Circuits", "Memory & Programmable Logic"],
    tips: ["K-map practice daily", "Flip-flop conversions", "Counter design problems", "Timing diagrams"],
    resources: "Textbook: Morris Mano Digital Design. YouTube: Neso Academy, Gate Smashers"
},

// SEMESTER 4 - AI&DS
ml_aids: {
    name: "Machine Learning", code: "SPC401AD", sem: 4, branch: "AIDS",
    passTip: "Understand algorithms conceptually first. Practice decision tree and regression problems. Know when to use which algorithm.",
    important: ["Linear & Logistic Regression", "Decision Trees & Random Forest", "SVM", "K-Means Clustering", "KNN", "Naive Bayes"],
    units: ["Introduction to ML", "Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Ensemble Methods"],
    tips: ["Bias-variance tradeoff", "Overfitting vs underfitting", "Confusion matrix metrics", "Cross-validation importance"],
    resources: "Textbook: Tom Mitchell, Hands-on ML by Geron. YouTube: Andrew Ng, StatQuest"
},
ai_aids: {
    name: "Artificial Intelligence", code: "SPC402AD", sem: 4, branch: "AIDS",
    passTip: "Focus on search algorithms and knowledge representation. Practice A* and minimax problems. Understand logic and inference.",
    important: ["Search Algorithms - BFS, DFS, A*", "Heuristic Search", "Game Playing - Minimax, Alpha-Beta", "Knowledge Representation", "Propositional & Predicate Logic", "Expert Systems"],
    units: ["Introduction to AI", "Problem Solving & Search", "Knowledge Representation", "Logic & Inference", "Expert Systems"],
    tips: ["A* algorithm practice", "Minimax tree problems", "Predicate logic conversions", "Heuristic function design"],
    resources: "Textbook: Russell & Norvig AIMA. YouTube: Gate Smashers, NPTEL AI"
},
os_aids: {
    name: "Operating Systems", code: "SPC403AD", sem: 4, branch: "AIDS",
    passTip: "Process scheduling and memory management are key. Practice numerical problems on scheduling algorithms. Understand deadlock.",
    important: ["CPU Scheduling Algorithms", "Process Synchronization", "Deadlock - conditions & handling", "Memory Management - Paging", "Page Replacement Algorithms", "File Systems"],
    units: ["Process Management", "CPU Scheduling", "Synchronization & Deadlocks", "Memory Management", "File Systems"],
    tips: ["Practice Gantt charts for scheduling", "Banker's algorithm numericals", "Page replacement - FIFO, LRU, Optimal", "Understand semaphores"],
    resources: "Textbook: Galvin, Silberschatz. YouTube: Gate Smashers, Neso Academy"
},
daa_aids: {
    name: "Design & Analysis of Algorithms", code: "SPC404AD", sem: 4, branch: "AIDS",
    passTip: "Master divide & conquer, greedy, and dynamic programming. Practice recurrence relations. Time complexity is must.",
    important: ["Divide & Conquer", "Greedy Algorithms", "Dynamic Programming", "Backtracking", "Graph Algorithms", "NP-Completeness"],
    units: ["Algorithm Analysis", "Divide & Conquer", "Greedy Method", "Dynamic Programming", "Backtracking"],
    tips: ["Recurrence solving methods", "DP vs Greedy comparison", "Graph algorithm complexity", "Practice optimization problems"],
    resources: "Textbook: Cormen CLRS. YouTube: Abdul Bari, Take U Forward"
},

// SEMESTER 5 - AI&DS
atcd_aids: {
    name: "Automata Theory & Compiler Design", code: "SPC501AD", sem: 5, branch: "AIDS",
    passTip: "FA, PDA and CFG are important. Practice DFA minimization. Understand parsing techniques - LL and LR.",
    important: ["Finite Automata - DFA, NFA", "Regular Expressions", "Context Free Grammar", "Pushdown Automata", "LL & LR Parsing", "Turing Machines"],
    units: ["Finite Automata & RE", "CFG & PDA", "Turing Machines", "Lexical Analysis", "Syntax Analysis & Parsing"],
    tips: ["DFA minimization practice", "RE to NFA to DFA conversion", "First & Follow sets", "LR parsing table construction"],
    resources: "Textbook: Hopcroft Ullman, Aho Ullman Dragon Book. YouTube: Neso Academy, Gate Smashers"
},
nlp_aids: {
    name: "Natural Language Processing", code: "SPC502AD", sem: 5, branch: "AIDS",
    passTip: "Text preprocessing and word embeddings are key. Understand language models. Practice POS tagging and NER.",
    important: ["Text Preprocessing - Tokenization, Stemming", "Word Embeddings - Word2Vec, GloVe", "POS Tagging", "Named Entity Recognition", "N-gram Language Models", "Sentiment Analysis"],
    units: ["NLP Introduction & Text Processing", "Word Level Analysis", "Syntactic Analysis", "Semantics & Pragmatics", "Discourse Analysis & Applications"],
    tips: ["Preprocessing pipeline", "TF-IDF calculations", "Word2Vec concepts", "CFG for NLP"],
    resources: "Textbook: Jurafsky & Martin, NLTK Book. YouTube: Stanford NLP, NPTEL"
},
daa2_aids: {
    name: "Design & Analysis of Algorithms", code: "SPC503AD", sem: 5, branch: "AIDS",
    passTip: "Advanced algorithms - tries, string matching, NP problems. Practice pattern matching algorithms.",
    important: ["Tries - Standard, Compressed, Suffix", "String Matching - Brute Force, Boyer-Moore", "Huffman Coding", "NP-Complete Problems", "Approximation Algorithms", "All-Pairs Shortest Path"],
    units: ["Advanced Data Structures", "String Algorithms", "Graph Algorithms", "NP-Completeness", "Approximation"],
    tips: ["Trie construction", "Pattern matching algorithms", "Floyd-Warshall algorithm", "NP-Hard vs NP-Complete"],
    resources: "Textbook: Cormen CLRS, Goodrich. YouTube: Abdul Bari, MIT OCW"
},
mv_aids: {
    name: "Machine Vision", code: "SPE511AD", sem: 5, branch: "AIDS",
    passTip: "Image processing fundamentals and transformations are key. Practice edge detection and segmentation.",
    important: ["Image Enhancement & Restoration", "Fourier Transform", "Edge Detection", "Image Segmentation", "Feature Extraction - SIFT, HOG", "Object Recognition"],
    units: ["Digital Image Fundamentals", "Image Enhancement", "Segmentation & Clustering", "Transformations", "Object Recognition & CBIR"],
    tips: ["Convolution operations", "Histogram equalization", "K-means for segmentation", "Hough transform"],
    resources: "Textbook: Gonzalez Digital Image Processing, Forsyth & Ponce. YouTube: NPTEL, First Principles of CV"
},

// SEMESTER 6 - AI&DS
dl_aids: {
    name: "Deep Learning", code: "SPC601AD", sem: 6, branch: "AIDS",
    passTip: "Understand neural network architectures. Focus on CNN and RNN. Practice backpropagation calculations.",
    important: ["Perceptron & MLP", "Backpropagation", "CNN - Convolution, Pooling", "RNN & LSTM", "Activation Functions", "Regularization - Dropout, Batch Norm"],
    units: ["Neural Network Basics", "Deep Neural Networks", "CNN", "RNN & LSTM", "Optimization Techniques"],
    tips: ["Backpropagation derivation", "CNN layer calculations", "Vanishing gradient problem", "LSTM gates understanding"],
    resources: "Textbook: Deep Learning by Goodfellow. YouTube: 3Blue1Brown, Andrew Ng DL"
},
big_data: {
    name: "Big Data Analytics", code: "SPC602AD", sem: 6, branch: "AIDS",
    passTip: "Hadoop ecosystem and MapReduce are important. Understand distributed computing concepts. Practice Spark basics.",
    important: ["Hadoop Architecture - HDFS, YARN", "MapReduce Programming", "Hive & Pig", "Spark Basics", "NoSQL Databases", "Data Warehousing"],
    units: ["Big Data Concepts", "Hadoop Ecosystem", "MapReduce", "Spark", "NoSQL & Analytics"],
    tips: ["HDFS architecture", "MapReduce word count example", "Hive vs Pig comparison", "Spark RDD operations"],
    resources: "Textbook: Tom White Hadoop. YouTube: Edureka, Simplilearn"
},
spm_aids: {
    name: "Software Project Management", code: "SPC603AD", sem: 6, branch: "AIDS",
    passTip: "SDLC models and project estimation are important. Understand risk management and quality assurance.",
    important: ["SDLC Models - Waterfall, Agile, Scrum", "Project Estimation - COCOMO", "Risk Management", "Quality Assurance", "Configuration Management", "Project Scheduling - PERT, CPM"],
    units: ["Software Process", "Project Planning", "Risk Management", "Quality Management", "Project Monitoring"],
    tips: ["Compare SDLC models", "COCOMO calculations", "Risk identification techniques", "Gantt charts & PERT"],
    resources: "Textbook: Pressman, Sommerville. YouTube: Gate Smashers, Knowledge Gate"
},
cns_aids: {
    name: "Cryptography & Network Security", code: "SPE514AD", sem: 6, branch: "AIDS",
    passTip: "Encryption algorithms and protocols are key. Practice RSA and DES problems. Understand digital signatures.",
    important: ["DES & AES", "RSA Algorithm", "Diffie-Hellman", "Digital Signatures", "Hash Functions - MD5, SHA", "SSL/TLS"],
    units: ["Classical Encryption", "Block Ciphers", "Public Key Crypto", "Authentication", "Network Security"],
    tips: ["RSA numerical practice", "DES rounds understanding", "Hash function properties", "Protocol comparisons"],
    resources: "Textbook: Stallings, Forouzan. YouTube: Gate Smashers, Neso Academy"
},
ds_aids: {
    name: "Distributed Systems", code: "SPE515AD", sem: 6, branch: "AIDS",
    passTip: "Understand distributed architectures and synchronization. Focus on consistency models and fault tolerance.",
    important: ["Distributed Architectures", "Inter-process Communication", "Synchronization & Mutual Exclusion", "Consistency & Replication", "Fault Tolerance", "Distributed File Systems"],
    units: ["Introduction & Architectures", "Communication", "Naming & Synchronization", "Consistency", "Fault Tolerance"],
    tips: ["Clock synchronization algorithms", "Election algorithms", "Two-phase commit", "CAP theorem"],
    resources: "Textbook: Tanenbaum Distributed Systems. YouTube: NPTEL, MIT OCW"
},

// Closing brace
};
