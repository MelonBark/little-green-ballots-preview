// Paste the Microsoft 365 Forms waitlist URL on the next line only.
// It must be an https://forms.office.com/ link. Leave REPLACE_ME in place
// until that form exists — the button then shows "Waitlist form coming soon."
const WAITLIST_FORM_URL = "https://forms.office.com/REPLACE_ME";

(function () {
  var link = document.getElementById("waitlist-cta");
  var note = document.getElementById("waitlist-note");
  if (!link) return;

  var url = String(WAITLIST_FORM_URL || "").trim();
  var prefix = "https://forms.office.com/";
  var ready = url.indexOf(prefix) === 0 && url.indexOf("REPLACE_ME") === -1 && url.length > prefix.length;

  if (ready) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return;
  }

  link.href = "#waitlist-note";
  link.removeAttribute("target");
  link.addEventListener("click", function (event) {
    event.preventDefault();
    if (!note) return;
    note.hidden = false;
    note.textContent = "Waitlist form coming soon.";
  });
})();
