import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const N8N_CHAT_STYLES = `
  :root {
    /* Primary: indigo-purple gradient base */
    --chat--color--primary: #667eea;
    --chat--color--primary-shade-50: #5a6fd6;
    --chat--color--primary--shade-100: #4e60c2;
    --chat--color--secondary: #764ba2;
    --chat--color-secondary-shade-50: #6a4392;

    /* Dark theme colors */
    --chat--color-white: #ffffff;
    --chat--color-light: #1a1a2e;
    --chat--color-light-shade-50: #16162a;
    --chat--color-light-shade-100: #2a2a3e;
    --chat--color-medium: #3a3a4e;
    --chat--color-dark: #0a0a0a;
    --chat--color-disabled: #3a3a4e;
    --chat--color-typing: #a0a0b8;

    /* Layout */
    --chat--spacing: 1rem;
    --chat--border-radius: 0.75rem;
    --chat--transition-duration: 0.3s;
    --chat--font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
      'Helvetica Neue', sans-serif;

    /* Window */
    --chat--window--width: 400px;
    --chat--window--height: 600px;
    --chat--window--bottom: 1.5rem;
    --chat--window--right: 1.5rem;
    --chat--window--z-index: 9999;
    --chat--window--border: 1px solid rgba(255, 255, 255, 0.1);
    --chat--window--border-radius: 1rem;

    /* Header */
    --chat--header--padding: 1.25rem;
    --chat--header--background: #0a0a0a;
    --chat--header--color: #f0f0f0;
    --chat--header--border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    --chat--header--border-top: none;
    --chat--header--border-left: none;
    --chat--header--border-right: none;
    --chat--heading--font-size: 1.5em;
    --chat--subtitle--font-size: 0.875rem;
    --chat--subtitle--line-height: 1.6;

    /* Messages */
    --chat--message--font-size: 0.9375rem;
    --chat--message--padding: 0.875rem 1rem;
    --chat--message--border-radius: 0.75rem;
    --chat--message-line-height: 1.6;
    --chat--message--bot--background: rgba(255, 255, 255, 0.06);
    --chat--message--bot--color: #e0e0e8;
    --chat--message--bot--border: 1px solid rgba(255, 255, 255, 0.08);
    --chat--message--user--background: linear-gradient(135deg, #667eea, #764ba2);
    --chat--message--user--color: #ffffff;
    --chat--message--user--border: none;
    --chat--message--pre--background: rgba(0, 0, 0, 0.3);
    --chat--messages-list--padding: 1rem;

    /* Toggle button */
    --chat--toggle--size: 60px;
    --chat--toggle--width: var(--chat--toggle--size);
    --chat--toggle--height: var(--chat--toggle--size);
    --chat--toggle--border-radius: 50%;
    --chat--toggle--background: linear-gradient(135deg, #667eea, #764ba2);
    --chat--toggle--hover--background: linear-gradient(135deg, #5a6fd6, #6a4392);
    --chat--toggle--active--background: linear-gradient(135deg, #4e60c2, #5e3d82);
    --chat--toggle--color: #ffffff;

    /* Input */
    --chat--textarea--height: 50px;
    --chat--input--font-size: 0.9375rem;
    --chat--input--border: 1px solid rgba(255, 255, 255, 0.1);
    --chat--input--border-radius: 0.75rem;
    --chat--input--padding: 0.8rem 1rem;
    --chat--input--background: rgba(255, 255, 255, 0.05);
    --chat--input--text-color: #e0e0e8;
    --chat--input--border-active: 1px solid #667eea;

    /* Buttons */
    --chat--button--border-radius: 9999px;
    --chat--button--font-size: 0.9375rem;
    --chat--button--color--primary: #ffffff;
    --chat--button--background--primary: linear-gradient(135deg, #667eea, #764ba2);
    --chat--button--border--primary: none;
    --chat--button--color--primary--hover: #ffffff;
    --chat--button--background--primary--hover: linear-gradient(135deg, #5a6fd6, #6a4392);
    --chat--button--border--primary--hover: none;
    --chat--button--color--secondary: #e0e0e8;
    --chat--button--background--secondary: rgba(255, 255, 255, 0.08);
    --chat--button--border--secondary: 1px solid rgba(255, 255, 255, 0.1);
    --chat--button--color--secondary--hover: #ffffff;
    --chat--button--background--secondary--hover: rgba(255, 255, 255, 0.12);
    --chat--button--border--secondary--hover: 1px solid rgba(255, 255, 255, 0.15);
    --chat--close--button--color-hover: #667eea;

    /* Send & File buttons */
    --chat--input--send--button--background: transparent;
    --chat--input--send--button--color: #667eea;
    --chat--input--send--button--background-hover: rgba(102, 126, 234, 0.15);
    --chat--input--send--button--color-hover: #764ba2;
    --chat--input--file--button--background: transparent;
    --chat--input--file--button--color: #667eea;
    --chat--input--file--button--background-hover: rgba(102, 126, 234, 0.15);
    --chat--input--file--button--color-hover: #764ba2;

    /* Body & Footer */
    --chat--body--background: #0f0f1a;
    --chat--footer--background: #0a0a0a;
    --chat--footer--color: #8888a0;
  }

  /* Toggle button glow effect */
  .chat-window-toggle {
    box-shadow: 0 4px 24px rgba(102, 126, 234, 0.4) !important;
    transition: all 0.3s ease !important;
  }
  .chat-window-toggle:hover {
    box-shadow: 0 6px 32px rgba(102, 126, 234, 0.55) !important;
    transform: scale(1.05) !important;
  }

  /* Chat window shadow & backdrop */
  .chat-window {
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5), 0 0 80px rgba(102, 126, 234, 0.08) !important;
    backdrop-filter: blur(12px) !important;
  }

  /* Scrollbar styling */
  .chat-messages-list::-webkit-scrollbar {
    width: 6px;
  }
  .chat-messages-list::-webkit-scrollbar-track {
    background: transparent;
  }
  .chat-messages-list::-webkit-scrollbar-thumb {
    background: rgba(102, 126, 234, 0.3);
    border-radius: 3px;
  }
  .chat-messages-list::-webkit-scrollbar-thumb:hover {
    background: rgba(102, 126, 234, 0.5);
  }

  /* User message gradient */
  .chat-message-user .chat-message-body {
    background: linear-gradient(135deg, #667eea, #764ba2) !important;
  }

  /* Input focus ring */
  .n8n-input textarea:focus {
    box-shadow: 0 0 0 1px #667eea, 0 0 12px rgba(102, 126, 234, 0.2) !important;
  }

  /* Fix: ensure chat input is visible (Tailwind base resets can hide it) */
  .chat-footer {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    padding: 0.5rem !important;
    background: var(--chat--footer--background, #0a0a0a) !important;
    border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
    align-items: flex-end !important;
    gap: 0.5rem !important;
    min-height: 60px !important;
  }

  .n8n-input {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    flex: 1 !important;
    align-items: flex-end !important;
    gap: 0.5rem !important;
    width: 100% !important;
  }

  .n8n-input textarea {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    min-height: 50px !important;
    height: auto !important;
    width: 100% !important;
    flex: 1 !important;
    color: #e0e0e8 !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    padding: 0.8rem 1rem !important;
    font-size: 0.9375rem !important;
    resize: none !important;
    border-radius: 0.75rem !important;
  }

  .n8n-input button,
  .chat-footer button {
    display: inline-flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    min-width: 36px !important;
    min-height: 36px !important;
  }
`;

const N8nChat = () => {
  useEffect(() => {
    // Inject custom styles
    const style = document.createElement('style');
    style.textContent = N8N_CHAT_STYLES;
    document.head.appendChild(style);

    try {
      createChat({
        webhookUrl: 'https://miwebhookn8n.proyectoiluminacion.com/webhook/9f8f7196-2ff5-4f6b-8645-68778ad293ee/chat',
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        loadPreviousSession: true,
        showWelcomeScreen: false,
        defaultLanguage: 'en',
        initialMessages: [
          '¡Hola! 👋',
          'Soy el asistente de Robots Consultant. ¿En qué puedo ayudarte?',
        ],
        i18n: {
          en: {
            title: '¡Hola! 👋',
            subtitle: 'Chatea con nosotros. Estamos aquí para ayudarte.',
            footer: '',
            getStarted: 'Nueva conversación',
            inputPlaceholder: 'Escribe tu pregunta...',
          },
        },
      });
    } catch (e) {
      console.error('N8nChat initialization failed:', e);
    }

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div id="n8n-chat" />;
};

export default N8nChat;
