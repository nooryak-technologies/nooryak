"use client";

import mobileMenuData from "@/data/header-menu/mobileMenuData";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";

type MainMobileMenuProps = {
  onNavigate?: () => void;
};

const MainMobileMenu = ({ onNavigate }: MainMobileMenuProps) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSubCol, setActiveSubCol] = useState<string | null>(null);

  const toggleMenu = (id: number) => {
    setActiveMenu((prev) => {
      const next = prev === id ? null : id;
      if (next === null) setActiveSubCol(null);
      return next;
    });
  };

  const toggleSubCol = (key: string) => {
    setActiveSubCol((prev) => (prev === key ? null : key));
  };

  const isRouteActive = (link: string) => {
    if (!pathname) return false;
    if (link === "/") return pathname === "/";
    if (link === "/coming-soon") return false;
    return pathname === link || pathname.startsWith(`${link}/`);
  };

  return (
    <ul className="ny-mobile-nav-list">
      {mobileMenuData.map((menuItem) => {
        const isDropdown = Boolean(menuItem.megaMenu && menuItem.columns?.length);
        const isOpen = activeMenu === menuItem.id;
        const isCurrent = isRouteActive(menuItem.link);
        const isHighlighted = isOpen || isCurrent;
        const isCareers = menuItem.title.toLowerCase() === "careers";

        return (
          <li
            key={menuItem.id}
            className={`ny-mobile-nav-item ${isDropdown ? "has-dropdown" : ""} ${
              isHighlighted ? "is-highlighted" : ""
            } ${isOpen ? "is-open" : ""}`}
          >
            {isDropdown ? (
              <button
                type="button"
                className={`ny-nav-pill ${isHighlighted ? "is-active" : ""}`}
                onClick={() => toggleMenu(menuItem.id)}
                aria-expanded={isOpen}
              >
                <span className="ny-pill-label">
                  <span>{menuItem.title}</span>
                </span>
                <span className={`ny-pill-icon ${isOpen ? "rotated" : ""}`}>
                  <ChevronDown size={18} strokeWidth={2.4} />
                </span>
              </button>
            ) : (
              <Link
                href={menuItem.link}
                className={`ny-nav-pill ${isHighlighted ? "is-active" : ""}`}
                onClick={() => onNavigate?.()}
              >
                <span className="ny-pill-label">
                  <span>{menuItem.title}</span>
                  {isCareers && <span className="ny-hiring-badge">Hiring</span>}
                </span>
                <span className="ny-pill-icon">
                  <ArrowRight size={17} strokeWidth={2.4} />
                </span>
              </Link>
            )}

            {/* Expandable Dropdown Panel */}
            {isDropdown && isOpen && (
              <div className="ny-submenu-drawer">
                <Link
                  href={menuItem.link}
                  className="ny-submenu-all-link"
                  onClick={() => onNavigate?.()}
                >
                  <span>View All {menuItem.title}</span>
                  <ArrowRight size={14} strokeWidth={2.4} />
                </Link>

                <div className="ny-submenu-groups">
                  {menuItem.columns?.map((column, colIndex) => {
                    const colKey = `${menuItem.id}-${colIndex}`;
                    const hasGroupTitle = Boolean(column.title && column.title.trim().length > 0);
                    const isMultiGroup = (menuItem.columns?.length || 0) > 1;
                    const isColExpanded = !isMultiGroup || activeSubCol === colKey;

                    return (
                      <div key={colKey} className="ny-submenu-group">
                        {hasGroupTitle && (
                          <button
                            type="button"
                            className={`ny-submenu-group-head ${isColExpanded ? "open" : ""}`}
                            onClick={() => toggleSubCol(colKey)}
                          >
                            <span>{column.title}</span>
                            <ChevronDown size={15} className="ny-sub-chevron" />
                          </button>
                        )}

                        {isColExpanded && (
                          <ul className="ny-submenu-links">
                            {hasGroupTitle && column.link && (
                              <li>
                                <Link
                                  href={column.link}
                                  className="ny-submenu-link ny-submenu-overview"
                                  onClick={() => onNavigate?.()}
                                >
                                  <span>All {column.title}</span>
                                  <ArrowRight size={13} />
                                </Link>
                              </li>
                            )}
                            {column.links.map((link, linkIndex) => {
                              const isExternal = link.link.startsWith("http");
                              return (
                                <li key={linkIndex}>
                                  {isExternal ? (
                                    <a
                                      href={link.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="ny-submenu-link"
                                      onClick={() => onNavigate?.()}
                                    >
                                      <span>{link.title}</span>
                                      <ArrowRight size={13} />
                                    </a>
                                  ) : (
                                    <Link
                                      href={link.link}
                                      className={`ny-submenu-link ${
                                        pathname === link.link ? "active-sub" : ""
                                      }`}
                                      onClick={() => onNavigate?.()}
                                    >
                                      <span>{link.title}</span>
                                      <ArrowRight size={13} />
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MainMobileMenu;
