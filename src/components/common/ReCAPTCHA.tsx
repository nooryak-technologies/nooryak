'use client';

import { useEffect, useRef } from 'react';

interface ReCAPTCHAProps {
  sitekey: string;
  onChange: (token: string | null) => void;
  theme?: 'light' | 'dark';
}

export default function ReCAPTCHA({ sitekey, onChange, theme = 'dark' }: ReCAPTCHAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Keep a reference to the latest onChange callback to prevent useEffect from re-running when it changes
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    let active = true;
    let checkReadyInterval: NodeJS.Timeout | null = null;

    const renderRecaptcha = () => {
      if (!active) return;
      if (window.grecaptcha && window.grecaptcha.render && containerRef.current && widgetIdRef.current === null) {
        try {
          // Explicitly clear inner HTML to avoid duplicate widgets if container had old stuff
          containerRef.current.innerHTML = '';
          const widgetId = window.grecaptcha.render(containerRef.current, {
            sitekey,
            theme,
            callback: (token: string) => {
              if (active) onChangeRef.current(token);
            },
            'expired-callback': () => {
              if (active) onChangeRef.current(null);
            },
            'error-callback': () => {
              if (active) onChangeRef.current(null);
            },
          });
          widgetIdRef.current = widgetId;
        } catch (error) {
          console.error('reCAPTCHA render error:', error);
        }
      }
    };

    const init = () => {
      const scriptId = 'recaptcha-script';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          checkReadyInterval = setInterval(() => {
            if (window.grecaptcha && window.grecaptcha.render) {
              if (checkReadyInterval) clearInterval(checkReadyInterval);
              renderRecaptcha();
            }
          }, 100);
        };
        document.body.appendChild(script);
      } else {
        if (window.grecaptcha && window.grecaptcha.render) {
          renderRecaptcha();
        } else {
          checkReadyInterval = setInterval(() => {
            if (window.grecaptcha && window.grecaptcha.render) {
              if (checkReadyInterval) clearInterval(checkReadyInterval);
              renderRecaptcha();
            }
          }, 100);
        }
      }
    };

    init();

    return () => {
      active = false;
      if (checkReadyInterval) clearInterval(checkReadyInterval);
      if (widgetIdRef.current !== null && window.grecaptcha && window.grecaptcha.reset) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch (e) {
          // Ignore
        }
        widgetIdRef.current = null;
      }
    };
  }, [sitekey, theme]);

  return (
    <div 
      ref={containerRef} 
      className="g-recaptcha-container" 
      style={{ 
        minHeight: '78px', 
        display: 'flex', 
        justifyContent: 'center', 
        margin: '15px 0' 
      }} 
    />
  );
}
