/**
 * Widget de voz de Retell AI para la demo de /mentoria-ia.
 *
 * Mientras valga null, la página enseña el hueco con un "muy pronto".
 * Para activarlo, copia los datos del <script> que da el panel de Retell:
 *
 *   <script src="https://..." data-public-key="..." data-agent-id="..."></script>
 *
 * quedaría así:
 *
 *   export const RETELL_WIDGET: RetellWidget | null = {
 *     src: 'https://...',
 *     attributes: { 'data-public-key': '...', 'data-agent-id': '...' },
 *   };
 *
 * Copia TODOS los atributos del script tal cual (id, type, data-*...).
 */
export interface RetellWidget {
  src: string;
  attributes: Record<string, string>;
}

export const RETELL_WIDGET: RetellWidget | null = null;
