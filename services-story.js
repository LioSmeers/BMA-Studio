(() => {
	const chapters = [...document.querySelectorAll("[data-service-chapter]")];
	if (!chapters.length) return;

	const navLinks = [...document.querySelectorAll(".services-story-nav a")];
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const revealTargets = [...document.querySelectorAll("[data-story-reveal]")];

	const setCurrentChapter = (chapter) => {
		chapters.forEach((item) => item.classList.toggle("is-current", item === chapter));
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

	if ("IntersectionObserver" in window) {
		const chapterObserver = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (visible) setCurrentChapter(visible.target);
			},
			{ threshold: [0, 0.2, 0.45], rootMargin: "-38% 0px -38% 0px" },
		);
		chapters.forEach((chapter) => chapterObserver.observe(chapter));
	}

	const chapterFromHash = chapters.find((chapter) => `#${chapter.id}` === window.location.hash);
	if (chapterFromHash) setCurrentChapter(chapterFromHash);
})();
