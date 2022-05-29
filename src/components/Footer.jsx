import React from "react";

export const Footer = () => {
  return (
    <footer className="content">
      <div className="item__social">
        <i className="fas fa-school fa-3x item__social-icon" />
        <a
          className="item__social-link"
          href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiCvbXG74P4AhV0omoFHWaXCVgQFnoECAMQAQ&url=https%3A%2F%2Fwww.colima.tecnm.mx%2F&usg=AOvVaw1R8e6YZStsRjDo528x5QVD"
          id="tec"
          target="_blank"
        >
          <p>Tecnologico de Colima</p>
        </a>
      </div>
      <div className="item__social">
        <i className="fa fa-instagram fa-3x item__social-icon" />
        <a
          className="item__social-link-ig"
          href="https://www.instagram.com/mivcm/"
          id="tec"
          target="_blank"
        >
          <p>Instagram Melanie</p>
        </a>
      </div>
      <div className="item__social">
        <i className="fa fa-instagram fa-3x item__social-icon" />
        <a
          className="item__social-link-ig"
          href="https://www.instagram.com/xferchovj/"
          id="tec"
          target="_blank"
        >
          <p>Instagram Fernando</p>
        </a>
      </div>
    </footer>
  );
};
