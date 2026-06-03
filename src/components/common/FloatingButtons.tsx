"use client";

import React from "react";
import { Images } from "@/utils/Images";

export default function FloatingButtons() {
  return (
    <div className="foot_floating">
      <a
        href="https://wa.me/916374913298?text=Hello%20Nooryak%20Tech%2C%20I%20would%20like%20to%20discuss%20about%20your%20Digital%20Services"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Images.whatsapp.src} alt="WhatsApp" />
      </a>
      <a href="tel: 6374913298" rel="nofollow" className="btn-call">
        <div className="btn-call__ico">
          <i className="fas fa-phone-alt"></i>
        </div>
      </a>
    </div>
  );
}
