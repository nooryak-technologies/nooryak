"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Images } from "@/utils/Images";

export default function FloatingButtons() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || message;
    if (!query || !query.trim()) {
      window.open(
        "https://wa.me/916374913298?text=Hello%20Nooryak%20Technologies%2C%20I%20would%20like%20to%20discuss%20about%20your%20Digital%20Services",
        "_blank"
      );
      return;
    }
    const encodedText = encodeURIComponent(query.trim());
    window.open(`https://wa.me/916374913298?text=${encodedText}`, "_blank");
    setMessage("");
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".whatsapp-pill-group")
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* WhatsApp Support Chat Popup */}
      {isOpen && mounted && createPortal(
        <div className="wa-chat-popup" ref={popupRef}>
          {/* Header */}
          <div className="wa-chat-header">
            <div className="wa-chat-header-info">
              <div className="wa-avatar-wrap">
                <Image
                  src={Images.whatsappnooryak_logo}
                  alt="Nooryak Logo"
                  width={48}
                  height={48}
                  className="wa-avatar-img"
                />
                <span className="wa-status-dot"></span>
              </div>
              <div className="wa-header-text">
                <h4 className="wa-header-title">Nooryak Support Team</h4>
                <div className="wa-header-status">
                  <span className="online-badge-dot"></span> Online
                </div>
              </div>
            </div>
            <button
              className="wa-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Body */}
          <div className="wa-chat-body">
            {/* Welcome Bubble */}
            <div className="wa-message-bubble">
              <p className="wa-message-text">
                👋 Welcome to Nooryak Technologies! How can we help you today?
              </p>
              <span className="wa-timestamp">Just now</span>
            </div>

            {/* Quick Response Options */}
            <div className="wa-quick-actions">
              <button
                type="button"
                className="wa-quick-btn"
                onClick={() =>
                  handleSend(
                    "Hello Nooryak Technologies, I'm interested in web development."
                  )
                }
              >
                <div className="wa-btn-icon-badge">
                  <i className="fa-solid fa-code"></i>
                </div>
                <span>I&apos;m interested in web development</span>
              </button>

              <button
                type="button"
                className="wa-quick-btn"
                onClick={() =>
                  handleSend(
                    "Hello Nooryak Technologies, I Want Mobile Application."
                  )
                }
              >
                <div className="wa-btn-icon-badge">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
                <span>I Want Mobile Application</span>
              </button>

              <button
                type="button"
                className="wa-quick-btn"
                onClick={() =>
                  handleSend(
                    "Hello Nooryak Technologies, I Need Software Development."
                  )
                }
              >
                <div className="wa-btn-icon-badge">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <span>I Need Software Development</span>
              </button>

              <button
                type="button"
                className="wa-quick-btn"
                onClick={() =>
                  handleSend(
                    "Hello Nooryak Technologies, I am looking for Digital Marketing For My Business."
                  )
                }
              >
                <div className="wa-btn-icon-badge">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <span>Digital Marketing For My Business</span>
              </button>
            </div>
          </div>

          {/* Input Footer */}
          <div className="wa-chat-footer">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="wa-chat-form"
            >
              <input
                type="text"
                className="wa-chat-input"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="wa-send-btn"
                aria-label="Send Message"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}

      {/* WhatsApp Floating Button & Pill Group */}
      <div className="foot_floating">
        <div className="whatsapp-pill-group" onClick={togglePopup}>
          <div className="whatsapp-float-btn-wrap">
            <button
              className="whatsapp-float-btn"
              aria-label="Open WhatsApp Chat"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </button>
            <span className="wa-ripple-ring ring1"></span>
            <span className="wa-ripple-ring ring2"></span>
            <span className="wa-ripple-ring ring3"></span>
          </div>

          {!isOpen && (
            <div className="whatsapp-chat-pill">
              <span>Chat With Us</span>
            </div>
          )}
        </div>
      </div>

      {/* Call Button - Hidden on Laptop/Desktop, Displayed on Mobile View */}
      <a href="tel:6374913298" rel="nofollow" className="btn-call mobile-only-call">
        <div className="btn-call__ico">
          <i className="fas fa-phone-alt"></i>
        </div>
        <span className="call-ripple-ring ring1"></span>
        <span className="call-ripple-ring ring2"></span>
        <span className="call-ripple-ring ring3"></span>
      </a>
    </>
  );
}

