
/// <reference types="vite/client" />

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target?: string;
        }) => void;
      };
    };
  }
}
