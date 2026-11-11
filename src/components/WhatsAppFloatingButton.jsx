import React from 'react';

const WHATSAPP_NUMBER = '919000019249';
const WHATSAPP_MESSAGE =
  'Hello VERICON Engineering, I would like to discuss a project.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export default function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-6 left-6 z-[9998] group">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+91 90000 19249)"
        onClick={() => {
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'whatsapp_click', {
              contact_number: '+91 90000 19249',
            });
          }
        }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:bg-[#1ebe5d] hover:scale-105 hover:shadow-[0_8px_26px_rgba(37,211,102,0.6)] active:scale-95 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <svg
          viewBox="0 0 32 32"
          className="relative w-7 h-7 fill-current"
          aria-hidden="true"
        >
          <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16.004c0 2.353.616 4.651 1.787 6.676L2.55 29.333l6.827-1.79a13.28 13.28 0 0 0 6.627 1.76h.006c7.363 0 13.337-5.973 13.337-13.336 0-3.562-1.387-6.911-3.905-9.429a13.255 13.255 0 0 0-9.438-3.871zm7.768 18.899c-.327.921-1.91 1.761-2.646 1.87-.683.102-1.547.145-2.497-.156-.576-.183-1.314-.427-2.259-.835-3.974-1.716-6.57-5.716-6.768-5.98-.199-.264-1.617-2.151-1.617-4.103 0-1.951 1.022-2.911 1.384-3.307.363-.396.792-.495 1.056-.495.264 0 .528.003.759.014.244.012.57-.092.891.68.327.792 1.122 2.742 1.221 2.941.099.198.165.429.033.693-.132.264-.198.429-.396.66-.198.231-.417.516-.594.693-.198.198-.404.413-.173.81.231.396 1.026 1.694 2.203 2.743 1.514 1.351 2.79 1.769 3.186 1.967.396.198.627.165.858-.099.231-.264.99-1.155 1.254-1.551.264-.396.528-.33.891-.198.363.132 2.31 1.089 2.706 1.287.396.198.66.297.759.462.099.165.099.957-.228 1.878z" />
        </svg>
      </a>
      <span className="hidden md:block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#050D1A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-white/10">
        Chat on WhatsApp
      </span>
    </div>
  );
}
