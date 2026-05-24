let currentSem = null, currentBranch = null;
const $ = id => document.getElementById(id);
const semSection = document.querySelector('.semester-select');
const branchSection = document.querySelector('.branch-select');
const subjectsSection = document.querySelector('.subjects-list');
const detailSection = document.querySelector('.subject-detail');

document.querySelectorAll('.sem-btn').forEach(btn => {
    btn.onclick = () => { currentSem = +btn.dataset.sem; semSection.classList.add('hidden'); branchSection.classList.remove('hidden'); };
});

document.querySelectorAll('.branch-btn').forEach(btn => {
    btn.onclick = () => { currentBranch = btn.dataset.branch; showSubjects(); };
});

$('backToSem').onclick = () => { branchSection.classList.add('hidden'); semSection.classList.remove('hidden'); };
$('backToBranch').onclick = () => { subjectsSection.classList.add('hidden'); branchSection.classList.remove('hidden'); };
$('backToSubjects').onclick = () => { detailSection.classList.add('hidden'); subjectsSection.classList.remove('hidden'); };

function showSubjects() {
    branchSection.classList.add('hidden');
    subjectsSection.classList.remove('hidden');
    $('subjectTitle').textContent = `Semester ${currentSem} - ${currentBranch}`;
    const subs = Object.entries(allSubjects).filter(([k,v]) => v.sem === currentSem && (v.branch === 'ALL' || v.branch === currentBranch));
    $('subjectsContainer').innerHTML = subs.map(([id,s]) => `<div class="subject-card" onclick="showDetail('${id}')"><h3>${s.name}</h3><p>${s.code}</p></div>`).join('');
}

function showDetail(id) {
    const s = allSubjects[id]; if(!s) return;
    subjectsSection.classList.add('hidden');
    detailSection.classList.remove('hidden');
    $('subjectContent').innerHTML = `<h2>${s.name}</h2><p><strong>Code:</strong> ${s.code}</p>
        <div class="tip-box"><h4>🎯 How to Pass</h4><p>${s.passTip}</p></div>
        <div class="important-topics"><h3>🔥 Important Topics</h3><ul>${s.important.map(t=>`<li>${t}</li>`).join('')}</ul></div>
        <h3>📚 Units</h3>${s.units.map((u,i)=>`<p><strong>Unit ${i+1}:</strong> ${u}</p>`).join('')}
        <h3>💡 Tips</h3><ul>${s.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
        <h3>📖 Resources</h3><p>${s.resources}</p>`;
}
