declare module "bootstrap/dist/js/bootstrap.bundle.min";

interface Window {
  grecaptcha?: {
    render?: (
      container: HTMLElement | string,
      parameters: {
        sitekey: string;
        theme?: "light" | "dark";
        callback?: (token: string) => void;
        "expired-callback"?: () => void;
        "error-callback"?: () => void;
      }
    ) => number;
    reset?: (widgetId?: number) => void;
    getResponse?: (widgetId?: number) => string;
  };
}