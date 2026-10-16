(() => {
  const links = Array.from(document.querySelectorAll(".nav .nav__link"));
  if (!links.length) return;

  const targets = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const setActive = (hash) => {
    links.forEach((a) =>
      a.classList.toggle("is-active", a.getAttribute("href") === hash)
    );
  };

  const updateActive = () => {
    const trigger = window.scrollY + window.innerHeight * 0.35;
    let current = targets[0];
    for (const section of targets) {
      if (section.offsetTop <= trigger) current = section;
    }
    if (current) setActive(`#${current.id}`);
  };

  links.forEach((a) => {
    a.addEventListener("click", () => setActive(a.getAttribute("href")));
  });

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
})();
