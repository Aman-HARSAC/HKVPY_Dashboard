import React from "react";
import Logo1 from "../assets/Haryana_Logo.png";
import Logo3 from "../assets/harsac-logo.png";
import TreeGrowingVideo from "../assets/Tree_Growning.mp4";

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/authslice";
import { clearFilters } from "../features/filterslice";

export default function Header() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(clearFilters());
    dispatch(logOut());
  };

  const handleVideoError = (event) => {
    console.error(
      "Tree-growing header video could not be loaded:",
      event.currentTarget.error
    );
  };

  return (
    <header className="hkvpy-half-video-header relative z-[60] w-full shrink-0 border-b border-emerald-100 bg-white shadow-sm">
      <nav className="hkvpy-half-video-nav">
        {/* Haryana Government logo: opaque white panel */}
        <div className="hkvpy-logo-panel">
          <img
            src={Logo1}
            alt="Government of Haryana"
            className="hkvpy-government-logo"
          />
        </div>

        {/* Video only in the blank space after the Haryana logo */}
        <div className="hkvpy-video-slot" aria-hidden="true">
          <video
            className="hkvpy-slot-video"
            src={TreeGrowingVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={handleVideoError}
          />
        </div>

        {/* Scheme heading: opaque white panel */}
        <div className="hkvpy-title-panel">
          <h1 className="hkvpy-main-title">
            <span className="hidden sm:inline">
              हरियाणा किसान वृक्ष प्रोत्साहन योजना
            </span>
            <span className="sm:hidden">
              किसान वृक्ष प्रोत्साहन योजना
            </span>
          </h1>
          <p className="hkvpy-sub-title">हरियाणा सरकार</p>
        </div>

        {/* Video only in the blank space before HARSAC */}
        <div className="hkvpy-video-slot" aria-hidden="true">
          <video
            className="hkvpy-slot-video hkvpy-slot-video-mirrored"
            src={TreeGrowingVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={handleVideoError}
          />
        </div>

        {/* HARSAC logo and logout: opaque white panel */}
        <div className="hkvpy-action-panel">
          <img
            src={Logo3}
            alt="HARSAC"
            className="hkvpy-harsac-logo"
          />

          {isLoggedIn && (
            <button
              type="button"
              onClick={handleLogout}
              aria-label="Log out"
              title="Log out"
              className="hkvpy-logout-button"
            >
              <i className="pi pi-sign-out text-lg sm:text-xl" />
            </button>
          )}
        </div>
      </nav>

      <style>{`
        .hkvpy-half-video-header {
          isolation: isolate;
          width: 100%;
          min-height: 112px;
          overflow: hidden;
          background: #fff;
        }

        /* Restored to the original 112px desktop header height. */
        .hkvpy-half-video-nav {
          display: grid;
          grid-template-columns:
            minmax(125px, 185px)
            minmax(45px, 1fr)
            minmax(320px, max-content)
            minmax(45px, 1fr)
            minmax(125px, 185px);
          align-items: stretch;
          width: 100%;
          min-height: 112px;
          height: 112px;
          background: #fff;
        }

        .hkvpy-logo-panel,
        .hkvpy-title-panel,
        .hkvpy-action-panel {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
          height: 112px;
          overflow: hidden;
          background: #fff;
        }

        .hkvpy-logo-panel {
          justify-content: flex-start;
          padding: 4px 8px 4px 14px;
        }

        .hkvpy-government-logo {
          display: block;
          width: auto;
          height: 84px;
          max-width: 100%;
          object-fit: contain;
          opacity: 1;
          filter: none;
          image-rendering: auto;
        }

        .hkvpy-title-panel {
          flex-direction: column;
          gap: 2px;
          padding: 4px 8px;
          text-align: center;
        }

        .hkvpy-main-title {
          margin: 0;
          color: #347ff5;
          font-size: clamp(14px, 1.8vw, 28px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: .005em;
          white-space: nowrap;
        }

        .hkvpy-sub-title {
          margin: 0;
          color: #166534;
          font-size: clamp(9px, .7vw, 11px);
          font-weight: 600;
          line-height: 1.1;
        }

        .hkvpy-action-panel {
          justify-content: flex-end;
          gap: 8px;
          padding: 4px 12px 4px 6px;
        }

        .hkvpy-harsac-logo {
          display: block;
          width: 84px;
          height: 84px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #fff;
          object-fit: contain;
          opacity: 1;
          filter: none;
        }

        .hkvpy-logout-button {
          display: flex;
          width: 36px;
          height: 36px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 8px;
          background: #fff;
          color: #3588b2;
          cursor: pointer;
          transition: background-color .2s ease, color .2s ease;
        }

        .hkvpy-logout-button:hover {
          background: #eff8ff;
          color: #17658c;
        }

        .hkvpy-logout-button:focus-visible {
          outline: 2px solid #7dd3fc;
          outline-offset: 2px;
        }

        /* Videos fill both blank grid columns; the complete frame remains visible without cropping. */
        .hkvpy-video-slot {
          position: relative;
          z-index: 1;
          display: block;
          min-width: 0;
          min-height: 112px;
          height: 112px;
          overflow: hidden;
          background: #f7fbf4;
        }

        .hkvpy-slot-video {
          display: block;
          width: 100%;
          height: 112px;
          object-fit: fill;
          object-position: center;
          opacity: 1;
          filter: none;
          background: #f7fbf4;
        }

        .hkvpy-slot-video-mirrored {
          transform: scaleX(-1);
        }

        @media (max-width: 1100px) {
          .hkvpy-half-video-nav {
            grid-template-columns:
              minmax(105px, 145px)
              minmax(25px, 1fr)
              minmax(270px, max-content)
              minmax(25px, 1fr)
              minmax(105px, 145px);
          }

          .hkvpy-government-logo {
            height: 76px;
          }

          .hkvpy-harsac-logo {
            width: 76px;
            height: 76px;
          }

          .hkvpy-action-panel {
            gap: 5px;
            padding-right: 8px;
          }
        }

        @media (max-width: 760px) {
          .hkvpy-half-video-header,
          .hkvpy-half-video-nav {
            min-height: 96px;
            height: 96px;
          }

          .hkvpy-half-video-nav {
            grid-template-columns:
              76px minmax(12px, 1fr) minmax(0, 2fr)
              minmax(12px, 1fr) 70px;
          }

          .hkvpy-logo-panel,
          .hkvpy-title-panel,
          .hkvpy-action-panel,
          .hkvpy-video-slot {
            height: 96px;
          }

          .hkvpy-logo-panel {
            padding: 3px 3px 3px 6px;
          }

          .hkvpy-government-logo {
            height: 68px;
            max-width: 70px;
          }

          .hkvpy-title-panel {
            gap: 2px;
            padding: 3px;
          }

          .hkvpy-main-title {
            font-size: clamp(10px, 2.3vw, 16px);
            line-height: 1.08;
            white-space: normal;
          }

          .hkvpy-sub-title {
            font-size: 8px;
          }

          .hkvpy-action-panel {
            gap: 3px;
            padding: 3px 4px 3px 2px;
          }

          .hkvpy-harsac-logo {
            width: 64px;
            height: 64px;
          }

          .hkvpy-logout-button {
            width: 56px;
            height: 60px;
          }

          .hkvpy-video-slot,
          .hkvpy-slot-video {
            min-height: 96px;
            height: 96px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hkvpy-slot-video {
            transition: none;
          }
        }
      `}</style>
    </header>
  );
}
