(() => {
  const triggers = document.querySelectorAll(".portal-nav-link");
  if (!triggers.length) return;
  const MASTER_ACCESS_CODE = "2004188930041945";

  const project = {
    code: "BMA-KEVINCLAES-1786",
    clientName: "Dakwerken Kevin Claes",
    projectName: "Website voor Dakwerken Kevin Claes",
    projectNameEn: "Website for Dakwerken Kevin Claes",
    previewUrl: "https://liosmeers.github.io/Dakwerken-Kevin-Claes/",
    status: "Wachten op feedback",
    statusStep: "Ontwerp",
    statusEn: "Waiting for feedback",
    feedback: [],
    files: 0,
    filesDetail: "Nog geen foto's ontvangen",
    filesDetailEn: "No photos received yet",
    invoice: "€399 · nog niet betaald",
    invoiceEn: "€399 · not paid yet",
    domain: "Nog niet zeker",
    domainDetail: "Nog niet vastgelegd",
    domainEn: "Not decided yet",
    domainDetailEn: "Not set yet",
  };
  const projects = {
    [project.code]: project,
    "BMA-THORSMEERS-6767": {
      code: "BMA-THORSMEERS-6767",
      clientName: "Thor Smeers",
      projectName: "Website voor Thor Smeers",
      projectNameEn: "Website for Thor Smeers",
      previewUrl: "https://thorsmeers.be",
      status: "Klaar voor feedback",
      statusStep: "Feedback",
      statusEn: "Ready for feedback",
      feedback: [],
      files: 12,
      filesDetail: "12 foto's ontvangen",
      filesDetailEn: "12 photos received",
      invoice: "€5 per maand · maandelijkse betaling",
      invoiceEn: "€5 per month · monthly payment",
      domain: "Nog niet zeker",
      domainDetail: "Nog niet vastgelegd",
      domainEn: "Not decided yet",
      domainDetailEn: "Not set yet",
    },
  };

  let activeProject = project;
  let storagePrefix = `bma-portal-popup-${activeProject.code}`;
  let portalLanguage = document.documentElement.lang === "en" || localStorage.getItem("bma-language") === "en" ? "en" : "nl";
  const getFeedback = () => {
    try {
      return JSON.parse(localStorage.getItem(`${storagePrefix}-feedback`)) || activeProject.feedback;
    } catch {
      return activeProject.feedback;
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
        <span class="eyebrow"><span class="portal-lock-icon" aria-hidden="true"></span> BMA Klantenportaal</span>
        <h2 id="portal-popup-title">Open je project.</h2>
        <p>Vul de unieke code in die je van BMA Studio kreeg. Daarna zie je alleen jouw eigen project.</p>
        <form class="portal-popup-form" data-portal-form>
          <label for="portal-popup-code">Unieke projectcode</label>
          <input id="portal-popup-code" type="text" placeholder="bv: BMA-JOUWBEDRIJF-0000" autocomplete="off" required />
          <button class="primary-button full-width" type="submit">Project openen</button>
          <p class="portal-popup-error" data-portal-error hidden></p>
        </form>
        <p class="portal-popup-help">Geen code? <a href="mailto:info@bmastudio.be">Contacteer BMA Studio</a>.</p>
      </div>
      <div class="portal-popup-project" data-portal-project hidden>
        <div class="portal-popup-project-heading">
          <div><span class="eyebrow">BMA Klantenportaal</span><h2 data-project-client>Welkom, ${project.clientName}</h2><p data-project-name>${project.projectName}</p></div>
          <span class="portal-popup-status" data-project-status>${project.status}</span>
        </div>
        <div class="portal-popup-facts">
          <div><span>Website</span><strong>Preview bekijken</strong><a data-project-preview href="${project.previewUrl}" target="_blank" rel="noopener">Open preview ↗</a></div>
          <div><span>Feedback</span><strong data-popup-feedback-count>0 opmerkingen open</strong><small>Rechtstreeks in dit portaal</small></div>
          <div><span>Bestanden</span><strong data-project-files>${project.files} foto's ontvangen</strong><small data-project-files-detail>${project.filesDetail}</small></div>
          <div><span>Factuur</span><strong data-project-invoice>${project.invoice}</strong><small>Projectfactuur</small></div>
          <div><span>Domein</span><strong data-project-domain>${project.domain}</strong><small data-project-domain-detail>${project.domainDetail}</small></div>
        </div>
        <div class="portal-popup-statusline"><span data-project-step="Ontwerp">Ontwerp</span><span data-project-step="Feedback">Feedback</span><span data-project-step="Aanpassingen">Aanpassingen</span><span data-project-step="Klaar">Klaar</span></div>
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
  const feedbackForm = modal.querySelector("[data-popup-feedback-form]");
  const feedbackSubmit = feedbackForm.querySelector("button[type='submit']");
  const feedbackSuccess = modal.querySelector("[data-portal-feedback-success]");
  const approveButton = modal.querySelector("[data-portal-approve]");
  const approveSuccess = modal.querySelector("[data-portal-approve-success]");

  function portalText(valueNl, valueEn) {
    return portalLanguage === "en" ? valueEn : valueNl;
  }

  function applyPortalLanguage(language = portalLanguage) {
    portalLanguage = language === "en" ? "en" : "nl";
    const loginEyebrow = modal.querySelector(".portal-popup-login .eyebrow");
    const projectEyebrow = modal.querySelector(".portal-popup-project .eyebrow");
    loginEyebrow.innerHTML = `<span class="portal-lock-icon" aria-hidden="true"></span> ${portalText("BMA Klantenportaal", "BMA Client Portal")}`;
    projectEyebrow.textContent = portalText("BMA Klantenportaal", "BMA Client Portal");
    modal.querySelector("#portal-popup-title").textContent = portalText("Open je project.", "Open your project.");
    modal.querySelector(".portal-popup-login > p").textContent = portalText("Vul de unieke code in die je van BMA Studio kreeg. Daarna zie je alleen jouw eigen project.", "Enter the unique code you received from BMA Studio. You will only see your own project.");
    modal.querySelector(".portal-popup-form label").textContent = portalText("Unieke projectcode", "Unique project code");
    modal.querySelector(".portal-popup-form button").textContent = portalText("Project openen", "Open project");
    modal.querySelector(".portal-popup-help").innerHTML = portalText("Geen code? <a href=\"mailto:info@bmastudio.be\">Contacteer BMA Studio</a>.", "No code? <a href=\"mailto:info@bmastudio.be\">Contact BMA Studio</a>.");
    modal.querySelector("[data-project-name]").textContent = portalLanguage === "en" ? activeProject.projectNameEn : activeProject.projectName;
    modal.querySelector("[data-project-status]").textContent = portalLanguage === "en" ? activeProject.statusEn : activeProject.status;
    modal.querySelector("[data-project-files-detail]").textContent = portalLanguage === "en" ? activeProject.filesDetailEn : activeProject.filesDetail;
    modal.querySelector("[data-project-invoice]").textContent = portalLanguage === "en" ? activeProject.invoiceEn : activeProject.invoice;
    modal.querySelector("[data-project-domain]").textContent = portalLanguage === "en" ? activeProject.domainEn : activeProject.domain;
    modal.querySelector("[data-project-domain-detail]").textContent = portalLanguage === "en" ? activeProject.domainDetailEn : activeProject.domainDetail;
    const facts = modal.querySelectorAll(".portal-popup-facts > div");
    ["Website", "Feedback", "Bestanden", "Factuur", "Domein"].forEach((label, index) => {
      facts[index].querySelector("span").textContent = portalText(label, ["Website", "Feedback", "Files", "Invoice", "Domain"][index]);
    });
    facts[0].querySelector("strong").textContent = portalText("Preview bekijken", "View preview");
    facts[0].querySelector("a").textContent = portalText("Open preview ↗", "Open preview ↗");
    facts[1].querySelector("small").textContent = portalText("Rechtstreeks in dit portaal", "Directly in this portal");
    facts[2].querySelector("strong").textContent = `${activeProject.files} ${portalText("foto's ontvangen", "photos received")}`;
    facts[3].querySelector("small").textContent = portalText("Projectfactuur", "Project invoice");
    modal.querySelector("[data-project-step='Ontwerp']").textContent = portalText("Ontwerp", "Design");
    modal.querySelector("[data-project-step='Feedback']").textContent = "Feedback";
    modal.querySelector("[data-project-step='Aanpassingen']").textContent = portalText("Aanpassingen", "Revisions");
    modal.querySelector("[data-project-step='Klaar']").textContent = portalText("Klaar", "Ready");
    modal.querySelector(".portal-popup-section-heading h3").textContent = "Feedback";
    modal.querySelector(".portal-popup-feedback label").textContent = portalText("Nieuwe opmerking", "New comment");
    feedbackInput.placeholder = portalText("Schrijf je opmerking...", "Write your comment...");
    feedbackSubmit.textContent = portalText("Feedback versturen", "Send feedback");
    modal.querySelector(".portal-popup-approve .eyebrow").textContent = portalText("Project goedkeuren", "Approve project");
    modal.querySelector(".portal-popup-approve h3").textContent = portalText("Is het ontwerp klaar?", "Is the design ready?");
    approveButton.textContent = approveButton.disabled ? portalText("Ontwerp goedgekeurd", "Design approved") : portalText("Ontwerp goedkeuren", "Approve design");
    renderFeedback();
  }

  function renderProject(nextProject) {
    activeProject = nextProject;
    storagePrefix = `bma-portal-popup-${activeProject.code}`;
    modal.querySelector("[data-project-client]").textContent = `Welkom, ${activeProject.clientName}`;
    modal.querySelector("[data-project-preview]").href = activeProject.previewUrl;
    modal.querySelectorAll("[data-project-step]").forEach((step) => {
      step.classList.toggle("is-current", step.dataset.projectStep === activeProject.statusStep);
    });
    const approved = localStorage.getItem(`${storagePrefix}-approved`) === "true";
    approveButton.disabled = approved;
    approveButton.textContent = approved ? "Ontwerp goedgekeurd" : "Ontwerp goedkeuren";
    approveSuccess.hidden = !approved;
    applyPortalLanguage();
  }

  function renderFeedback() {
    const feedback = getFeedback();
    modal.querySelectorAll("[data-popup-feedback-count]").forEach((element) => {
      element.textContent = `${feedback.length} ${portalText("opmerkingen open", "open comments")}`;
    });
    feedbackList.innerHTML = feedback.length ? feedback.map((item) => `<p class="portal-popup-feedback-item">${item}</p>`).join("") : `<p class="portal-popup-feedback-empty">${portalText("Nog geen feedback ontvangen.", "No feedback received yet.")}</p>`;
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

  window.addEventListener("bma-language-change", (event) => {
    applyPortalLanguage(event.detail?.language);
  });

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
    const selectedProject = projects[enteredCode] || (enteredCode === MASTER_ACCESS_CODE ? project : null);
    if (!selectedProject) {
      error.hidden = false;
      error.textContent = portalText("Deze code klopt niet. Controleer je code of contacteer BMA Studio.", "This code is not valid. Check it or contact BMA Studio.");
      return;
    }
    error.hidden = true;
    renderProject(selectedProject);
    loginView.hidden = true;
    projectView.hidden = false;
  });

  feedbackForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const text = feedbackInput.value.trim();
    if (!text) return;
    feedbackSubmit.disabled = true;
    feedbackSubmit.textContent = "Versturen...";
    feedbackSuccess.hidden = true;
    feedbackSuccess.classList.remove("is-error");

    const formData = new FormData();
    formData.append("_subject", `Feedback ${activeProject.clientName} via BMA Klantenportaal`);
    formData.append("project", activeProject.projectName);
    formData.append("project_code", activeProject.code);
    formData.append("message", `${activeProject.clientName} heeft feedback achtergelaten: ${text}`);
    formData.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@bmastudio.be", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === "false") throw new Error("Feedback kon niet worden verzonden.");

      const feedback = [...getFeedback(), text];
      localStorage.setItem(`${storagePrefix}-feedback`, JSON.stringify(feedback));
      feedbackInput.value = "";
      feedbackSuccess.hidden = false;
      feedbackSuccess.textContent = portalText("Je feedback is toegevoegd en doorgestuurd naar BMA Studio.", "Your feedback was added and sent to BMA Studio.");
      renderFeedback();
    } catch {
      feedbackSuccess.hidden = false;
      feedbackSuccess.classList.add("is-error");
      feedbackSuccess.textContent = portalText("Versturen lukt niet. Mail je opmerking rechtstreeks naar info@bmastudio.be.", "Sending failed. Email your comment directly to info@bmastudio.be.");
    } finally {
      feedbackSubmit.disabled = false;
      feedbackSubmit.textContent = "Feedback versturen";
    }
  });

  approveButton.addEventListener("click", () => {
    localStorage.setItem(`${storagePrefix}-approved`, "true");
    approveButton.disabled = true;
    approveButton.textContent = "Ontwerp goedgekeurd";
    approveSuccess.hidden = false;
  });
})();
