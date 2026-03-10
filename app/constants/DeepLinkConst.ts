export const domain: string = 'copilotdisprzlearning.page.link';

export const bundleId: string = 'com.simform.copilotdisprzlearning';

export const deepLinkPrefixes = ['copilotdisprzlearning://', `${domain}//`, `https://${domain}`];

export enum DeepLink {
  // copilotdisprzlearning://magic_link&lang=en&tenantId=austin-electrical-qqm76
  MagicLink = 'magic_link',
  // copilotdisprzlearning://forgot_password&lang=en&tenantId=austin-electrical-qqm76
  ForgotPassword = 'forgot_password',
  // copilotdisprzlearning://?toastMessage=<message content>
  ToastMessage = 'toastMessage'
}

export default DeepLink;
