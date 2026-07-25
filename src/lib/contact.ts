/**
 * Web3Forms access key. Public by design — it identifies the destination
 * inbox, it does not authorise anything, so it is safe in client code.
 *
 * Create one at https://web3forms.com using the address enquiries should
 * reach, then set NEXT_PUBLIC_WEB3FORMS_KEY (Vercel → Settings → Environment
 * Variables, or .env.local for development).
 *
 * With no key set the form falls back to opening the visitor's mail client,
 * so it degrades rather than breaking.
 */
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Where enquiries actually arrive — used for the mailto fallback and the
 * "write to us directly" line if a submission fails.
 *
 * NOTE: this is the -begleiter domain, confirmed as the live inbox. It is
 * deliberately different from the -begleitung address printed in the
 * Impressum, which is reproduced verbatim from the client's document.
 */
export const FORM_RECIPIENT = 'schaefer@talentbegleiter.de';
