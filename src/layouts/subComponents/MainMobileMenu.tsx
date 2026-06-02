"use client";

import mobileMenuData from "@/data/header-menu/mobileMenuData";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type MainMobileMenuProps = {
  onNavigate?: () => void;
};

const MainMobileMenu = ({ onNavigate }: MainMobileMenuProps) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  return (
    <ul>
      {mobileMenuData.map((menuItem) => {
        const isDropdown = menuItem.megaMenu;

        return (
          <li
            key={menuItem.id}
            className={`${isDropdown ? "has-dropdown" : ""} ${
              activeMenu === menuItem.id ? "active" : ""
            }`}
          >
            {/* ✅ MAIN MENU */}
            <Link
              href={menuItem.link}
              onClick={(e) => {
                if (isDropdown) {
                  e.preventDefault();
                  setActiveMenu(menuItem.id);
                  return;
                }

                onNavigate?.();
              }}
            >
              <span className="menu-text">{menuItem.title}</span>
            </Link>

            {/* ✅ MEGA MENU */}
            {isDropdown && menuItem.megaMenu && (
              <div
                className="tp-megamenu-wrapper mega-menu"
                style={{
                  display: activeMenu === menuItem.id ? "block" : "none",
                }}
              >
                <div className="row gx-0">
                  {menuItem.columns?.map((column, colIndex) => (
                    <div key={colIndex} className="col-xl-3">
                      <div className="tp-megamenu-list">
                        <h4 className="tp-megamenu-title">
                          {column.link ? (
                            <Link
                              href={column.link}
                              onClick={() => onNavigate?.()}
                            >
                              {column.title}
                            </Link>
                          ) : (
                            column.title
                          )}
                        </h4>

                        <ul>
                          {column.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link href={link.link} onClick={() => onNavigate?.()}>
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}

                  {/* IMAGE */}
                  {menuItem.image && (
                    <div className="col-xl-3">
                      <div className="tp-megamenu-thumb">
                        <Image
                          src={menuItem.image.src}
                          alt={menuItem.image.alt}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ✅ TOGGLE BUTTON ONLY FOR DROPDOWN */}
            {isDropdown && (
              <button
                className={`tp-menu-close ${
                  activeMenu === menuItem.id ? "active" : ""
                }`}
                onClick={() => toggleMenu(menuItem.id)}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MainMobileMenu;