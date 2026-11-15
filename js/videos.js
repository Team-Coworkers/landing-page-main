/*
 * YouTube videos of the landing page. This is the only place to change them.
 * Paste only the video ID: the 11 characters after "watch?v=" or after "youtu.be/".
 * While an ID is empty, its video stays hidden, and the whole section stays hidden
 * until at least one video has an ID.
 */
const VIDEO_IDS = {
  product: "", // About the Product
  team: "BBDl29vUedM", // About the Team
};

(() => {
  const isVideoId = (id) => /^[A-Za-z0-9_-]{11}$/.test(id);
  const section = document.querySelector("[data-videos]");
  if (!section) return;

  const frames = [];
  section.querySelectorAll("[data-video]").forEach((figure) => {
    const key = figure.dataset.video;
    const id = (VIDEO_IDS[key] || "").trim();
    if (!isVideoId(id)) return;

    const caption = figure.querySelector("figcaption");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?rel=0`;
    iframe.title = caption ? caption.textContent.trim() : "Hostera video";
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    figure.querySelector("[data-video-frame]").append(iframe);
    figure.hidden = false;
    frames.push({ iframe, caption });

    document.querySelectorAll(`[data-video-link="${key}"]`).forEach((link) => {
      link.hidden = false;
    });
  });

  if (!frames.length) return;
  section.hidden = false;
  document.querySelectorAll("[data-video-nav]").forEach((link) => {
    link.hidden = false;
  });

  // Keep each iframe title in the language the visitor chose.
  document.addEventListener("hostera:languagechange", () => {
    frames.forEach(({ iframe, caption }) => {
      if (caption) iframe.title = caption.textContent.trim();
    });
  });
})();
