'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { projectsData } from '@/data/portfolioMainData';
import { ArrowLeft, ExternalLink, Calendar, User, Tag, Award, Play, Pause } from 'lucide-react';
import { ArrowSvg } from '@/svg';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const project = projectsData.find((p) => p.id === parseInt(id));

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  
  // Ref for video elements
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // If project not found, redirect to portfolio main
    if (!project && id) {
      router.push('/portfolio');
    }
  }, [project, id, router]);

  // Prevent background body scroll when lightbox is open
  useEffect(() => {
    let smoother: any = null;
    try {
      const { ScrollSmoother } = require('gsap/ScrollSmoother');
      smoother = ScrollSmoother.get();
    } catch (e) {
      console.warn("GSAP ScrollSmoother not loaded", e);
    }

    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      if (smoother) {
        smoother.paused(true);
      }
    } else {
      document.body.style.overflow = 'unset';
      if (smoother) {
        smoother.paused(false);
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (smoother) {
        smoother.paused(false);
      }
    };
  }, [lightboxOpen]);

  if (!project) {
    return (
      <div className="portfolio-detail-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.gallery) {
      setCurrentImageIndex((prev) => (prev === 0 ? project.gallery!.length - 1 : prev - 1));
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.gallery) {
      setCurrentImageIndex((prev) => (prev === project.gallery!.length - 1 ? 0 : prev + 1));
    }
  };

  const togglePlayVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        // Pause all other videos first
        videoRefs.current.forEach((v, idx) => {
          if (v && idx !== index) {
            v.pause();
          }
        });
        video.play();
        setPlayingVideo(index);
      } else {
        video.pause();
        setPlayingVideo(null);
      }
    }
  };

  const isVideoCategory = project.category === 'Videos';

  return (
    <div className="portfolio-detail-wrapper pt-5">
      {/* ── PROJECT HERO HEADER ── */}
      <section className="project-detail-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="project-category-badge">{project.category}</span>
              <h1 className="project-detail-title">{project.title}</h1>
              <p className="project-detail-desc">{project.description}</p>
            </div>
            <div className="col-lg-5 text-lg-end">
              <a 
                href={project.projectUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-orange-premium project-live-btn"
              >
                Visit Live Site
                <span className="arrow-icon">
                  <ExternalLink size={16} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT & GALLERY SECTION ── */}
      <section className="project-main-section">
        <div className="container">
          <div className="row g-5">
            
            {/* Left Column: Project Info Meta */}
            <div className="col-lg-4">
              <div className="project-meta-card">
                <h3 className="meta-card-title">Project Details</h3>
                <ul className="meta-list">
                  <li>
                    <div className="meta-icon"><User size={18} /></div>
                    <div className="meta-info">
                      <span className="meta-label">Client</span>
                      <span className="meta-value">{project.client}</span>
                    </div>
                  </li>
                  <li>
                    <div className="meta-icon"><Calendar size={18} /></div>
                    <div className="meta-info">
                      <span className="meta-label">Date</span>
                      <span className="meta-value">{project.date}</span>
                    </div>
                  </li>
                  <li>
                    <div className="meta-icon"><Tag size={18} /></div>
                    <div className="meta-info">
                      <span className="meta-label">Category</span>
                      <span className="meta-value">{project.category}</span>
                    </div>
                  </li>
                  <li>
                    <div className="meta-icon"><Award size={18} /></div>
                    <div className="meta-info">
                      <span className="meta-label">Services</span>
                      <span className="meta-value">{project.services}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Responsive Gallery (Images or Videos) */}
            <div className="col-lg-8">
              <h3 className="section-title mb-4">Project Gallery</h3>
              
              {/* VIDEO GALLERY (For Videos Category) */}
              {isVideoCategory && project.videos && (
                <div className="video-gallery-grid">
                  {/* Reels Section (Vertical) */}
                  <div className="reels-header-title">Social Reels & Shorts (9:16)</div>
                  <div className="reels-row">
                    {project.videos.filter(v => v.type === 'reel').map((video, index) => {
                      const absoluteIndex = project.videos!.findIndex(v => v.src === video.src);
                      return (
                        <div key={absoluteIndex} className="reel-card-wrapper">
                          <div className="reel-video-container">
                            <video
                              ref={(el) => { videoRefs.current[absoluteIndex] = el; }}
                              src={video.src}
                              className="reel-video-element"
                              loop
                              playsInline
                              onClick={() => togglePlayVideo(absoluteIndex)}
                            />
                            <button 
                              className={`video-play-overlay-btn ${playingVideo === absoluteIndex ? 'playing' : ''}`}
                              onClick={() => togglePlayVideo(absoluteIndex)}
                            >
                              {playingVideo === absoluteIndex ? <Pause size={24} /> : <Play size={24} />}
                            </button>
                            <div className="reel-title-overlay">{video.title}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Standard Videos Section (Horizontal) */}
                  <div className="videos-header-title mt-5">Featured Videos & Promos (16:9)</div>
                  <div className="row g-4">
                    {project.videos.filter(v => v.type === 'video').map((video, index) => {
                      const absoluteIndex = project.videos!.findIndex(v => v.src === video.src);
                      return (
                        <div key={absoluteIndex} className="col-md-6">
                          <div className="standard-video-container">
                            <video
                              ref={(el) => { videoRefs.current[absoluteIndex] = el; }}
                              src={video.src}
                              className="standard-video-element"
                              controls
                              loop
                              playsInline
                            />
                            <div className="video-info-banner">
                              <span className="video-title">{video.title}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* PHOTO GALLERY (For Non-Video Categories) */}
              {!isVideoCategory && project.gallery && (
                <div className="photo-gallery-grid">
                  {project.gallery.map((imgUrl, index) => (
                    <div 
                      key={index} 
                      className="gallery-item-wrapper"
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setLightboxOpen(true);
                      }}
                    >
                      <div className="gallery-image-hover-overlay">
                        <span className="overlay-plus">+</span>
                      </div>
                      <img src={imgUrl} alt={`${project.title} screenshot ${index + 1}`} className="gallery-thumbnail-img" />
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* ── LIGHTBOX MODAL FOR IMAGE GALLERY ── */}
      {mounted && lightboxOpen && project.gallery && typeof window !== 'undefined' && createPortal(
        <div className="lightbox-modal" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close-btn" onClick={() => setLightboxOpen(false)}>&times;</button>
          
          <button className="lightbox-nav-btn prev" onClick={handlePrevImage}>&#10094;</button>
          <button className="lightbox-nav-btn next" onClick={handleNextImage}>&#10095;</button>

          <div className="lightbox-content-container" onClick={(e) => e.stopPropagation()}>
            <img 
              src={project.gallery[currentImageIndex]} 
              alt={`${project.title} full view`} 
              className="lightbox-main-img" 
            />
            <div className="lightbox-caption">
              {project.title} - Image {currentImageIndex + 1} of {project.gallery.length}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
