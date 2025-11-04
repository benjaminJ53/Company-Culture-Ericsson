function setupCollapsible(triggerId, regionId) {
  const trigger = document.getElementById(triggerId);
  const region = document.getElementById(regionId);

  if (!trigger || !region) return;

  region.hidden = true;

  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      trigger.setAttribute('aria-expanded', 'false');
      region.hidden = true;
    } else {
      trigger.setAttribute('aria-expanded', 'true');
      region.hidden = false;
    }
  });
}
const companyInfo = [
  "Ericsson UK Ltd Company",
  "Founded - 2025 in Brighton UK",
  "Co-founders - Ben J & Bob M",
  "",
  "Clan Culture with strong British values",
  "Cooprative thinking and teamwork",
  "Focus on employee well-being and growth"
];
const ethicsRules = [
  "Job Title: Head Developer",
  "Description: Company DevOps Lead",
  "Skills: JavaScript, HTML, CSS",
  "",
  "Job Title: Marketing/Data Analyst",
  "Description: Handles Data Gathering & Planning",
  "Skills: Data Analysis, Advertising"
];
function loadCompanyInfo() {
  const box = document.getElementById('company-content');
  box.innerHTML = companyInfo.map(item => `<p>${item}</p>`).join('');
}
function loadEthicsRules() {
  const box = document.getElementById('ethics-content');
  box.innerHTML = ethicsRules.map(rule => `<p>${rule}</p>`).join('');
}
document.addEventListener('DOMContentLoaded', () => {
  setupCollapsible('company-trigger', 'company-region');
  setupCollapsible('ethics-trigger', 'ethics-region');

  loadCompanyInfo();
  loadEthicsRules();
});