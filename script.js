const menu=document.querySelector('.menu');
const navLinks=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const skills={
 technical:[
  ['Python', 'Pandas · NumPy · Scikit-learn', 4.5],['SQL','Extraction · validation · reporting',4],
  ['Power BI','DAX · Power Query · dashboards',4.5],['Data Visualisation','BI · Tableau · Matplotlib',4],
  ['Machine Learning','Classification · clustering · NLP',4],['Process Analysis','Mapping · requirements · improvement',4.5],
  ['Excel','Analysis · reporting · modelling',4],['Web Development','HTML · CSS · JavaScript',3.5]
 ],
 soft:[
  ['Analytical Thinking','Turning data into actionable insight',5],['Problem Solving','Structured, creative problem resolution',5],
  ['Stakeholder Communication','Requirements · reporting · collaboration',4.5],['Process Improvement','Finding friction and simplifying workflows',5],
  ['Adaptability','Fast learning across data, tech and media',5],['Presentation','Executive summaries · dashboards · storytelling',4],
  ['Team Collaboration','Cross-functional delivery and feedback',4.5],['Creative Thinking','Connecting technology with user needs',5]
 ],
 tools:[
  ['Power BI','Dashboards · DAX · Power Query',4.5],['Python / Jupyter','Analytics · ML · NLP workflows',4.5],
  ['Tableau','KPI dashboards · visual analysis',4],['Excel','Reporting · analysis · modelling',4.5],
  ['Git / GitHub','Version control · collaboration',4],['VS Code','Development · notebooks · debugging',4],
  ['Figma / Canva','UI/UX · digital content',4],['Photoshop','Graphic and digital asset design',3.5]
 ]
};
const labels={technical:'Technical capabilities',soft:'Professional soft skills',tools:'Tools & platforms'};
const display=document.querySelector('#skill-display');
const subtitle=document.querySelector('#skill-subtitle');
const summary=document.querySelector('#skill-summary');

function rating(value){
  return '<div class="rating">'+Array.from({length:5},(_,i)=>`<i class="${i<Math.round(value)?'on':''}"></i>`).join('')+`<span class="rating-num">${value}/5</span></div>`;
}
function renderSkills(type){
  display.innerHTML=skills[type].map(([name,desc,rate])=>`<div class="skill"><b>${name}</b><small>${desc}</small>${rating(rate)}</div>`).join('');
  subtitle.textContent=labels[type];
  summary.textContent=`${skills[type].length} ${type==='soft'?'professional soft skills':type==='tools'?'tools & platforms':'technical capabilities'}`;
  document.querySelectorAll('.skill-tabs button').forEach(b=>b.classList.toggle('active',b.dataset.skill===type));
}
document.querySelectorAll('.skill-tabs button').forEach(btn=>btn.addEventListener('click',()=>renderSkills(btn.dataset.skill)));
renderSkills('technical');

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav-links a')];
const activeObserver=new IntersectionObserver(entries=>entries.forEach(e=>{
 if(e.isIntersecting) links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));
}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>activeObserver.observe(s));

// Project previews: hover on desktop, tap/click on touch screens.
document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('click', e=>{
    if(window.matchMedia('(max-width: 760px)').matches){
      const alreadyOpen=card.classList.contains('is-open');
      document.querySelectorAll('.project-card.is-open').forEach(c=>c.classList.remove('is-open'));
      if(!alreadyOpen) card.classList.add('is-open');
    }
  });
  card.addEventListener('keydown', e=>{
    if(e.key==='Enter' || e.key===' '){
      e.preventDefault();
      if(window.matchMedia('(max-width: 760px)').matches) card.click();
    }
  });
});
