const translations = {
en:{
navAbout:"About",navSkills:"Skills",navProjects:"Projects",navExperience:"Experience",navGithub:"GitHub",navContact:"Contact",availability:"Open to opportunities",hello:"Hello, I'm",role:"Web Developer · Informatics Student",
heroDesc:"I’m an aspiring web developer who enjoys building practical digital solutions, learning new technologies, and turning ideas into useful applications.",viewWork:"Explore my work",getInTouch:"Get in touch",profileCaption:"Curious mind. Practical builder.",chipBuild:"Building useful things",
aboutLabel:"ABOUT",aboutTitle:"A little about me",aboutLead:"I’m an Informatics student at Universitas Dian Nuswantoro with a primary interest in web development and software solutions.",
aboutText:"My experience includes building and exploring web applications, as well as working with Microsoft Power Platform during my internship. I enjoy understanding a problem, designing a practical solution, and learning the tools needed to bring it to life.",
aboutText2:"I’m currently strengthening my development skills through academic and personal projects, with the goal of creating applications that are useful, reliable, and easy to use.",
basedIn:"BASED IN",education:"EDUCATION",degree:"Informatics · 2021–2027",gpa:"GPA",interests:"INTERESTS",interestValue:"Web development · Software · Automation",
skillsLabel:"SKILLS",skillsTitle:"Tools I work with",skillsIntro:"A growing toolkit from coursework, independent learning, and hands-on projects.",skillProgramming:"Programming & Web",skillPlatform:"Frameworks & Platforms",skillTools:"Tools & Database",skillLevelNote:"Self-assessed overall proficiency: Intermediate. Skills vary by technology and project experience.",
projectsLabel:"PROJECTS",projectsTitle:"Selected work",projectsIntro:"Projects from internship experience and academic exploration.",internship:"INTERNSHIP PROJECT",academic:"ACADEMIC PROJECT",caseStudy:"Internship project",githubProfile:"GitHub profile ↗",academicWork:"Academic work",webApplication:"Web application",
projectTds:"A product specification data management application developed with Microsoft Power Platform to centralize TDS data and support an approval workflow.",
projectIrr:"A Python-based text retrieval project applying TF-IDF and Cosine Similarity to rank documents according to their relevance to a search query.",
projectRoom:"A Laravel-based web application for managing room borrowing requests and organizing room-use information.",
projectNote:"The links currently lead to your GitHub profile. Replace each with its specific repository when available, and add screenshots of your own work.",
experienceLabel:"EXPERIENCE",experienceTitle:"Experience & education",internDesc:"Contributed to the development of a product specification data management application using Power Apps, SharePoint, and Power Automate, focusing on centralized data and approval workflow support.",eduDesc:"Undergraduate study focused on computing fundamentals, programming, and software development. Current GPA: 3.07 / 4.00.",
githubTitle:"Code, commits & progress",githubIntro:"Explore my public repositories and development activity.",githubCaption:"My code repositories on GitHub",statsNote:"GitHub statistics are provided by a third-party service and may occasionally be unavailable or rate-limited.",
contactLabel:"CONTACT",contactTitle:"Let's build something useful.",contactText:"I’m open to connecting, discussing ideas, and exploring opportunities to learn and contribute.",emailMe:"Email me",rights:"Built with curiosity.",backTop:"Back to top ↑"
},
id:{
navAbout:"Tentang",navSkills:"Keahlian",navProjects:"Proyek",navExperience:"Pengalaman",navGithub:"GitHub",navContact:"Kontak",availability:"Terbuka untuk peluang",hello:"Halo, saya",role:"Web Developer · Mahasiswa Teknik Informatika",
heroDesc:"Saya calon web developer yang senang membangun solusi digital praktis, mempelajari teknologi baru, dan mengubah ide menjadi aplikasi yang bermanfaat.",viewWork:"Lihat proyek saya",getInTouch:"Hubungi saya",profileCaption:"Penuh rasa ingin tahu. Suka membangun solusi.",chipBuild:"Membangun hal bermanfaat",
aboutLabel:"TENTANG",aboutTitle:"Sedikit tentang saya",aboutLead:"Saya mahasiswa Teknik Informatika di Universitas Dian Nuswantoro dengan minat utama pada pengembangan web dan solusi perangkat lunak.",
aboutText:"Pengalaman saya mencakup pembuatan dan eksplorasi aplikasi web, serta penggunaan Microsoft Power Platform selama magang. Saya senang memahami masalah, merancang solusi praktis, dan mempelajari teknologi yang dibutuhkan untuk mewujudkannya.",
aboutText2:"Saat ini saya terus mengembangkan kemampuan melalui proyek akademik dan pribadi, dengan tujuan membuat aplikasi yang bermanfaat, andal, dan mudah digunakan.",
basedIn:"DOMISILI",education:"PENDIDIKAN",degree:"Teknik Informatika · 2021–2027",gpa:"IPK",interests:"MINAT",interestValue:"Web development · Perangkat lunak · Otomatisasi",
skillsLabel:"KEAHLIAN",skillsTitle:"Teknologi yang saya gunakan",skillsIntro:"Kemampuan yang terus berkembang dari perkuliahan, belajar mandiri, dan proyek praktik.",skillProgramming:"Pemrograman & Web",skillPlatform:"Framework & Platform",skillTools:"Tools & Database",skillLevelNote:"Penilaian kemampuan secara keseluruhan: Menengah. Penguasaan tiap teknologi dapat berbeda sesuai pengalaman proyek.",
projectsLabel:"PROYEK",projectsTitle:"Proyek pilihan",projectsIntro:"Proyek dari pengalaman magang dan eksplorasi akademik.",internship:"PROYEK MAGANG",academic:"PROYEK AKADEMIK",caseStudy:"Proyek magang",githubProfile:"Profil GitHub ↗",academicWork:"Proyek akademik",webApplication:"Aplikasi web",
projectTds:"Aplikasi pengelolaan data spesifikasi produk yang dikembangkan menggunakan Microsoft Power Platform untuk memusatkan data TDS dan mendukung alur persetujuan.",
projectIrr:"Proyek temu kembali dokumen teks berbasis Python yang menerapkan TF-IDF dan Cosine Similarity untuk mengurutkan dokumen berdasarkan relevansi terhadap kueri pencarian.",
projectRoom:"Aplikasi web berbasis Laravel untuk mengelola permintaan peminjaman ruangan dan mengatur informasi penggunaan ruangan.",
projectNote:"Tautan saat ini mengarah ke profil GitHub. Ganti masing-masing dengan repositori proyek yang sesuai jika sudah tersedia, dan tambahkan tangkapan layar hasil karyamu.",
experienceLabel:"PENGALAMAN",experienceTitle:"Pengalaman & pendidikan",internDesc:"Berkontribusi dalam pengembangan aplikasi pengelolaan data spesifikasi produk menggunakan Power Apps, SharePoint, dan Power Automate, dengan fokus pada pemusatan data dan dukungan alur persetujuan.",eduDesc:"Pendidikan sarjana dengan fokus pada dasar komputasi, pemrograman, dan pengembangan perangkat lunak. IPK saat ini: 3.07 / 4.00.",
githubTitle:"Kode, commit & perkembangan",githubIntro:"Jelajahi repositori publik dan aktivitas pengembangan saya.",githubCaption:"Repositori kode saya di GitHub",statsNote:"Statistik GitHub disediakan oleh layanan pihak ketiga dan terkadang dapat tidak tersedia atau terkena batas permintaan.",
contactLabel:"KONTAK",contactTitle:"Mari bangun sesuatu yang bermanfaat.",contactText:"Saya terbuka untuk menjalin koneksi, berdiskusi, dan mengeksplorasi kesempatan untuk belajar serta berkontribusi.",emailMe:"Kirim email",rights:"Dibuat dengan rasa ingin tahu.",backTop:"Kembali ke atas ↑"
}
};
let currentLanguage="en";
const languageSwitch=document.getElementById("languageSwitch");
function setLanguage(language){
 currentLanguage=language;document.documentElement.lang=language;
 document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[language][key])el.textContent=translations[language][key];});
 languageSwitch.textContent=language==="en"?"ID":"EN";
 languageSwitch.setAttribute("aria-label",language==="en"?"Switch to Indonesian":"Switch to English");
}
languageSwitch.addEventListener("click",()=>setLanguage(currentLanguage==="en"?"id":"en"));
const menuToggle=document.getElementById("menuToggle"),navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
navLinks.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{navLinks.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
if("IntersectionObserver" in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});
 document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}else{document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));}
