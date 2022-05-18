import React from "react";

export const Footer = () => {
  return (
    <footer className="footer__main flex-center">
      <span className="h4 txt-semibold">
        Made like a 🚀 by{" "}
        <a
          href="https://github.com/Hamdrive"
          target="_blank"
          rel="noreferrer"
          referrerPolicy="no-referrer"
          className="footer__external"
        >
          Hamza <i class="fas fa-xs fa-external-link-alt"></i>
        </a>
      </span>
    </footer>
  );
};
