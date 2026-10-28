(() => {
	const chapters = [...document.querySelectorAll("[data-service-chapter]")];
	if (!chapters.length) return;

	const navLinks = [...document.querySelectorAll(".services-story-nav a")];
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const revealTargets = [...document.querySelectorAll("[data-story-reveal]")];

	const stage = document.createElement("aside");
	stage.className = "services-visual-stage";
	stage.setAttribute("aria-label", "Voorbeeld bij de dienst");
	const visuals = chapters.map((chapter) => {
		const visual = chapter.querySelector(".service-art").cloneNode(true);
		visual.removeAttribute("data-story-reveal");
		visual.classList.remove("is-visible");
		visual.setAttribute("aria-hidden", "true");
		stage.append(visual);
		return visual;
	});
	document.querySelector(".services-story-layout").append(stage);
	document.body.classList.add("has-services-visual-stage");

	const setCurrentChapter = (chapter) => {
		chapters.forEach((item, index) => {
			const current = item === chapter;
			item.classList.toggle("is-current", current);
			visuals[index].classList.toggle("is-current", current);
			visuals[index].setAttribute("aria-hidden", String(!current));
		});
		navLinks.forEach((link) => {
			if (link.hash === `#${chapter.id}`) link.setAttribute("aria-current", "location");
			else link.removeAttribute("aria-current");
		});
	};

	if (reduceMotion || !("IntersectionObserver" in window)) {
		revealTargets.forEach((target) => target.classList.add("is-visible"));
	} else {
		document.body.classList.add("services-story-ready");
		const revealObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				});
			},
			{ threshold: 0.16, rootMargin: "0px 0px -5% 0px" },
		);
		revealTargets.forEach((target) => revealObserver.observe(target));
	}

	chapters.forEach((chapter) => {
		chapter.addEventListener("focusin", () => setCurrentChapter(chapter));
	});

	let queued = false;
	const updateCurrent = () => {
		queued = false;
		const center = innerHeight / 2;
		let nearest = chapters[0];
		let distance = Infinity;
		chapters.forEach((chapter) => {
			const rect = chapter.getBoundingClientRect();
			const next = Math.abs(rect.top + rect.height / 2 - center);
			if (next < distance) { distance = next; nearest = chapter; }
		});
		setCurrentChapter(nearest);
	};
	const scheduleCurrent = () => {
		if (queued) return;
		queued = true;
		requestAnimationFrame(updateCurrent);
	};
	window.addEventListener("scroll", scheduleCurrent, { passive: true });
	window.addEventListener("resize", scheduleCurrent, { passive: true });
	scheduleCurrent();

	const chapterFromHash = chapters.find((chapter) => `#${chapter.id}` === window.location.hash);
	if (chapterFromHash) setCurrentChapter(chapterFromHash);
})();
