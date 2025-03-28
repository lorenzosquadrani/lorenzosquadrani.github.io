document.addEventListener("DOMContentLoaded", function () {
    const tocList = document.getElementById("toc-list");
    const content = document.querySelector(".note-body");

    if (!tocList || !content) {
        console.warn("Table of Contents: Missing elements.");
        return;
    }

    const headers = content.querySelectorAll("h1, h2, h3");

    if (headers.length === 0) {
        console.warn("Table of Contents: No headers found.");
        return;
    }

    let tocHTML = "";
    headers.forEach((header, index) => {
        if (!header.id) header.id = "section-" + index; // Add an ID if missing

        let levelClass = header.tagName === "H1" ? "toc-level-1" :
                         header.tagName === "H2" ? "toc-level-2" :
                         "toc-level-3"; // Different styles per level

        tocHTML += `<li class="${levelClass}"><a href="#${header.id}">${header.innerText}</a></li>`;
    });

    tocList.innerHTML = tocHTML;
});
