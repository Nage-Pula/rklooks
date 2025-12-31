// import { GiHalfBodyCrawling } from "react-icons/gi";

// export default function Footer() {
//   return (
//     <footer className="relative bg-gray-950">
//       {/* subtle top divider */}
//       <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

//       <div className="px-6 py-4 text-center text-xs text-gray-400">
//         <span>Designed & Developed by </span>

//         <span className="relative inline-block font-semibold">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 brightness-125 transition hover:brightness-165 flex items-center justify-center ">

//             CrawL-UP<GiHalfBodyCrawling className="text-cyan-400" /> Digitals
//           </span>

//           {/* glow underline */}
//           <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 blur-sm opacity-70" />
//         </span>
//       </div>
//     </footer>
//   );
// }
import { GiHalfBodyCrawling } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full bg-gray-950/90 backdrop-blur">
      {/* top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="flex items-center justify-center gap-2 px-4 py-2 text-xs text-gray-400">
        <span>Designed & Developed by</span>

        <span className="relative inline-flex items-center gap-1 font-semibold">
          <span className="flex items-center gap-1 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 transition hover:brightness-125">
            CrawL-UP
            <GiHalfBodyCrawling className="text-cyan-400 text-sm" />
            Digitals
          </span>

          {/* glow underline */}
          <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 blur-sm opacity-70" />
        </span>
      </div>
    </footer>
  );
}
