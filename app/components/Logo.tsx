// export function Logo({ className = "w-10 h-10" }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 64 64"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       aria-label="Arsalan Shahyar logo"
//     >
//       {/* Background circle with gradient */}
//       <defs>
//         <linearGradient id="logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
//           <stop offset="0%" stopColor="#8b5cf6" />
//           <stop offset="50%" stopColor="#06b6d4" />
//           <stop offset="100%" stopColor="#10b981" />
//         </linearGradient>
//         <linearGradient id="letter-grad" x1="16" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
//           <stop offset="0%" stopColor="#ffffff" />
//           <stop offset="100%" stopColor="#e2e8f0" />
//         </linearGradient>
//       </defs>
//       <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#logo-grad)" />
//       {/* Letter A */}
//       <path
//         d="M22 46L32 16L42 46M26 37H38"
//         stroke="url(#letter-grad)"
//         strokeWidth="3.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         fill="none"
//       />
//       {/* Small neural-net dots */}
//       <circle cx="14" cy="32" r="2" fill="rgba(255,255,255,0.4)" />
//       <circle cx="50" cy="32" r="2" fill="rgba(255,255,255,0.4)" />
//       <circle cx="32" cy="8" r="1.5" fill="rgba(255,255,255,0.3)" />
//       <circle cx="32" cy="56" r="1.5" fill="rgba(255,255,255,0.3)" />
//       {/* Connecting lines (neural net feel) */}
//       <line x1="14" y1="32" x2="22" y2="46" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
//       <line x1="50" y1="32" x2="42" y2="46" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
//       <line x1="32" y1="8" x2="32" y2="16" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
//     </svg>
//   );
// }


import Image from "next/image";

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Arsalan Shahyar Logo"
      width={40}
      height={40}
      className={className}
    />
  );
}