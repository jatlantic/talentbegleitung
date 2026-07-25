/**
 * Web3Forms access key — decides which inbox the contact form delivers to.
 *
 * This is a public key by design: it names the destination inbox, it does not
 * authorise anything, and it ships inside the client bundle of every built
 * page regardless of where it is stored. Keeping it in the source means the
 * form works on Vercel, on the GitHub Pages fallback and in development with
 * no per-environment setup.
 *
 * NEXT_PUBLIC_WEB3FORMS_KEY overrides it, so the key can be rotated or pointed
 * at a test inbox without a code change.
 */
export const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '0a2af88e-f0fd-42ca-83e2-3790d2031871';

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Where enquiries arrive — used for the mailto fallback and the "write to us
 * directly" line if a submission fails.
 *
 * NOTE: this is the -begleiter domain, confirmed as the live inbox. It is
 * deliberately different from the -begleitung address printed in the
 * Impressum, which is reproduced verbatim from the client's document.
 */
export const FORM_RECIPIENT = 'schaefer@talentbegleiter.de';
