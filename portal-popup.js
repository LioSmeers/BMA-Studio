(() => {
  const triggers = document.querySelectorAll(".portal-nav-link");
  if (!triggers.length) return;
  const MASTER_ACCESS_CODE = "2004188930041945";

  const project = {
    code: "BMA-KEVINCLAES-1786",
    clientName: "Dakwerken Kevin Claes",
    projectName: "Website voor Dakwerken Kevin Claes",
    previewUrl: "https://liosmeers.github.io/Dakwerken-Kevin-Claes/",
    status: "Wachten op feedback",
    feedback: [],
    files: 0,
    invoice: "€399 · nog niet betaald",
    domain: "Nog niet zeker",
  };

  const storagePrefix = `bma-portal-popup-${project.code}`;
  const getFeedback = () => {
    try {
      return JSON.parse(localStorage.getItem(`${storagePrefix}-feedback`)) || project.feedback;
    } catch {
      return project.feedback;
    }
  };

  const modal = document.createElement("div");
  modal.className = "portal-popup";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="portal-popup-backdrop" data-portal-close></div>
    <section class="portal-popup-card" role="dialog" aria-modal="true" aria-labelledby="portal-popup-title">
      <button class="portal-popup-close" type="button" aria-label="Sluit klantenportaal" data-portal-close>×</button>
      <div class="portal-popup-login" data-portal-login>
        <span class="eyebrow">🔒 BMA Klantenportaal</span>
        <h2 id="portal-popup-title">Open je project.</h2>
        <p>Vul de unieke code in die je van BMA Studio kreeg. Daarna zie je alleen jouw eigen project.</p>
        <form class="portal-popup-form" data-portal-form>
          <label for="portal-popup-code">Unieke projectcode</label>
          <input id="portal-popup-code" type="text" placeholder="BMA-KEVINCLAES-1786" autocomplete="off" required />
          <button class="primary-button full-width" type="submit">Project openen</button>
          <p class="portal-popup-error" data-portal-error hidden></p>
        </form>
        <p class="portal-popup-help">Geen code? <a href="mailto:info@bmastudio.be">Contacteer BMA Studio</a>.</p>
      </div>
      <div class="portal-popup-project" data-portal-project hidden>
        <div class="portal-popup-project-heading">
          <div><span class="eyebrow">BMA Klantenportaal</span><h2>Welkom, ${project.clientName}</h2><p>${project.projectName}</p></div>
          <span class="portal-popup-status">${project.status}</span>
        </div>
        <div class="portal-popup-facts">
          <div><span>Website</span><strong>Preview bekijken</strong><a href="${project.previewUrl}" target="_blank" rel="noopener">Open preview ↗</a></div>
          <div><span>Feedback</span><strong data-popup-feedback-count>0 opmerkingen open</strong><small>Rechtstreeks in dit portaal</small></div>
          <div><span>Bestanden</span><strong>${project.files} foto's ontvangen</strong><small>Nog geen foto's ontvangen</small></div>
          <div><span>Factuur</span><strong>${project.invoice}</strong><small>Projectfactuur</small></div>
          <div><span>Domein</span><strong>${project.domain}</strong><small>Nog niet vastgelegd</small></div>
        </div>
        <div class="portal-popup-statusline"><span class="is-current">Ontwerp</span><span>Feedback</span><span>Aanpassingen</span><span>Klaar</span></div>
        <div class="portal-popup-feedback"><div class="portal-popup-section-heading"><h3>Feedback</h3><span data-popup-feedback-count>0 opmerkingen open</span></div><div data-popup-feedback-list><p class="portal-popup-feedback-empty">Nog geen feedback ontvangen.</p></div><form data-popup-feedback-form><label for="portal-popup-feedback-input">Nieuwe opmerking</label><textarea id="portal-popup-feedback-input" rows="3" placeholder="Schrijf je opmerking..." required></textarea><button class="secondary-button" type="submit">Feedback versturen</button><p class="portal-popup-success" data-portal-feedback-success hidden></p></form></div>
        <div class="portal-popup-approve"><div><span class="eyebrow">Project goedkeuren</span><h3>Is het ontwerp klaar?</h3></div><button class="primary-button" type="button" data-portal-approve>Ontwerp goedkeuren</button><p class="portal-popup-success" data-portal-approve-success hidden>Bedankt, je akkoord is opgeslagen.</p></div>
      </div>
    </section>`;
  document.body.append(modal);

  const loginView = modal.querySelector("[data-portal-login]");
  const projectView = modal.querySelector("[data-portal-project]");
  const codeInput = modal.querySelector("#portal-popup-code");
  const error = modal.querySelector("[data-portal-error]");
  const feedbackList = modal.querySelector("[data-popup-feedback-list]");
  const feedbackInput = modal.querySelector("#portal-popup-feedback-input");
  const feedbackSuccess = modal.querySelector("[data-portal-feedback-success]");
  const approveButton = modal.querySelector("[data-portal-approve]");
  const approveSuccess = modal.querySelector("[data-portal-approve-success]");

  function renderFeedback() {
    const feedback = getFeedback();
    modal.querySelectorAll("[data-popup-feedback-count]").forEach((element) => {
      element.textContent = `${feedback.length} opmerkingen open`;
    });
    feedbackList.innerHTML = feedback.length ? feedback.map((item) => `<p class="portal-popup-feedback-item">${item}</p>`).join("") : '<p class="portal-popup-feedback-empty">Nog geen feedback ontvangen.</p>';
  }

  function openModal() {
    modal.hidden = false;
    document.body.classList.add("portal-popup-open");
    codeInput.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("portal-popup-open");
  }

  triggers.forEach((trigger) => trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openModal();
  }));
  modal.querySelectorAll("[data-portal-close]").forEach((element) => element.addEventListener("click", closeModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });

  modal.querySelector("[data-portal-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredCode = codeInput.value.trim().toUpperCase();
    if (enteredCode !== project.code && enteredCode !== MASTER_ACCESS_CODE) {
      error.hidden = false;
      error.textContent = "Deze code klopt niet. Controleer je code of contacteer BMA Studio.";
      return;
    }
    error.hidden = true;
    loginView.hidden = true;
    projectView.hidden = false;
    renderFeedback();
  });

  modal.querySelector("[data-popup-feedback-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const text = feedbackInput.value.trim();
    if (!text) return;
    const feedback = [...getFeedback(), text];
    localStorage.setItem(`${storagePrefix}-feedback`, JSON.stringify(feedback));
    feedbackInput.value = "";
    feedbackSuccess.hidden = false;
    feedbackSuccess.textContent = "Je feedback is toegevoegd.";
    renderFeedback();
  });

  approveButton.addEventListener("click", () => {
    localStorage.setItem(`${storagePrefix}-approved`, "true");
    approveButton.disabled = true;
    approveButton.textContent = "Ontwerp goedgekeurd";
    approveSuccess.hidden = false;
  });
})();
