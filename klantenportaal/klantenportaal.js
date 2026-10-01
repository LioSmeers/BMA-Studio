/*
 * BMA beheer: voeg hier projecten toe of pas ze aan.
 * Codes zijn hoofdletterongevoelig in het portaal, maar geef ze uniek uit aan klanten.
 */
const PORTAL_PROJECTS = {
  "BMA-KEVIN-4821": {
    clientName: "Dakwerken Kevin Claes",
    projectName: "Website voor Dakwerken Kevin Claes",
    previewUrl: "../portfolio.html",
    status: "Aanpassingen",
    statusDetail: "Aanpassingen bezig",
    fileCount: 14,
    lastUpload: "29 september 2026",
    invoiceAmount: "€399",
    invoiceStatus: "Betaald",
    domain: "dakwerkenkevinclaes.be",
    domainStatus: "Domein gereserveerd",
    feedback: [
      { text: "De foto van de gevel mag groter in het eerste scherm.", date: "28 september 2026", open: true },
      { text: "De knop naar contact mag ook naar WhatsApp linken.", date: "29 september 2026", open: true },
    ],
  },
};

const portalLogin = document.querySelector("#portal-login");
const portalDashboard = document.querySelector("#portal-dashboard");
const portalAccessForm = document.querySelector("#portal-access-form");
const portalCodeInput = document.querySelector("#portal-code");
const portalFormMessage = document.querySelector("#portal-form-message");
const portalLogout = document.querySelector("#portal-logout");
const feedbackForm = document.querySelector("#feedback-form");
const feedbackMessage = document.querySelector("#feedback-message");
const feedbackFormMessage = document.querySelector("#feedback-form-message");
const feedbackList = document.querySelector("#feedback-list");
const approvalButton = document.querySelector("#approve-project");
const approvalMessage = document.querySelector("#approval-message");
let activeCode = "";
let activeProject = null;

const normalizeCode = (value) => value.trim().toUpperCase();

function storageKey(suffix) {
  return `bma-portal-${activeCode}-${suffix}`;
}

function getStoredFeedback() {
  try {
    return JSON.parse(localStorage.getItem(storageKey("feedback"))) || activeProject.feedback;
  } catch {
    return activeProject.feedback;
  }
}

function setText(selector, value) {
  document.querySelectorAll(`[data-project="${selector}"]`).forEach((element) => {
    element.textContent = value;
  });
}

function renderFeedback() {
  const feedback = getStoredFeedback();
  const openCount = feedback.filter((item) => item.open).length;
  document.querySelectorAll("[data-open-feedback-count]").forEach((element) => {
    element.textContent = openCount;
  });
  feedbackList.innerHTML = feedback.map((item) => `
    <article class="feedback-item ${item.open ? "is-open" : "is-closed"}">
      <span class="feedback-item-status">${item.open ? "Open" : "Verwerkt"}</span>
      <p>${item.text}</p>
      <small>${item.date}</small>
    </article>
  `).join("");
}

function renderStatus() {
  const statusOrder = ["Ontwerp", "Feedback", "Aanpassingen", "Klaar"];
  const currentIndex = statusOrder.indexOf(activeProject.status);
  document.querySelectorAll("[data-status-step]").forEach((step, index) => {
    step.classList.toggle("is-complete", index < currentIndex);
    step.classList.toggle("is-current", index === currentIndex);
  });
}

function openProject(code) {
  activeCode = normalizeCode(code);
  activeProject = PORTAL_PROJECTS[activeCode];
  if (!activeProject) return false;

  portalLogin.hidden = true;
  portalDashboard.hidden = false;
  setText("clientName", activeProject.clientName);
  setText("projectName", activeProject.projectName);
  setText("code", activeCode);
  setText("status", activeProject.statusDetail);
  setText("statusDetail", activeProject.statusDetail);
  setText("fileCount", activeProject.fileCount);
  setText("lastUpload", activeProject.lastUpload);
  setText("invoiceAmount", activeProject.invoiceAmount);
  setText("invoiceStatus", activeProject.invoiceStatus);
  setText("domain", activeProject.domain);
  setText("domainStatus", activeProject.domainStatus);
  document.querySelectorAll("[data-project-href='previewUrl']").forEach((link) => {
    link.href = activeProject.previewUrl;
  });
  renderStatus();
  renderFeedback();
  const approved = localStorage.getItem(storageKey("approved")) === "true";
  approvalButton.disabled = approved;
  approvalButton.textContent = approved ? "Ontwerp goedgekeurd" : "Ontwerp goedkeuren";
  approvalMessage.hidden = !approved;
  approvalMessage.textContent = approved ? "Bedankt, je akkoord is opgeslagen." : "";
  window.scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

portalAccessForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = normalizeCode(portalCodeInput.value);
  if (!openProject(code)) {
    portalFormMessage.hidden = false;
    portalFormMessage.textContent = "Deze projectcode werd niet gevonden. Controleer de code of neem contact op met BMA Studio.";
    portalCodeInput.focus();
    return;
  }
  portalFormMessage.hidden = true;
});

portalLogout?.addEventListener("click", () => {
  activeCode = "";
  activeProject = null;
  portalDashboard.hidden = true;
  portalLogin.hidden = false;
  portalCodeInput.value = "";
  portalCodeInput.focus();
});

feedbackForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = feedbackMessage.value.trim();
  if (!text || !activeProject) return;
  const feedback = getStoredFeedback();
  feedback.push({ text, date: new Intl.DateTimeFormat("nl-BE", { dateStyle: "long" }).format(new Date()), open: true });
  localStorage.setItem(storageKey("feedback"), JSON.stringify(feedback));
  feedbackMessage.value = "";
  feedbackFormMessage.hidden = false;
  feedbackFormMessage.textContent = "Je feedback is toegevoegd aan het project.";
  renderFeedback();
});

approvalButton?.addEventListener("click", () => {
  if (!activeProject) return;
  localStorage.setItem(storageKey("approved"), "true");
  approvalButton.disabled = true;
  approvalButton.textContent = "Ontwerp goedgekeurd";
  approvalMessage.hidden = false;
  approvalMessage.textContent = "Bedankt, je akkoord is opgeslagen.";
});

document.querySelector("#year").textContent = new Date().getFullYear();
