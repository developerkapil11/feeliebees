// Styles copied from version 2, limited to the site header.
const styles: Record<string, string> = {
    "v2-logo": "h-auto w-[clamp(120px,9.5vw,160px)] object-contain min-[1900px]:w-[10vw] min-[701px]:max-[1101px]:w-[105px] max-desktop:w-[88px]",
    "v2-header-cta": "inline-flex items-center gap-[.6em] rounded-[40px] button-orange px-[1.3em] py-[.9em] text-[clamp(12px,1vw,20px)] font-black whitespace-nowrap hover:-translate-y-0.5 hover:shadow-[0_6px_16px_#38241215] motion-reduce:hover:translate-y-0 max-tablet:hidden [&_svg]:size-[1.1em] [&_svg]:stroke-3",
    "v2-feature-icon": "inline-flex shrink-0 items-center justify-center size-[clamp(34px,3.4vw,57px)]! align-middle bg-none! shadow-none! [&_img]:block [&_img]:size-full [&_img]:object-contain [&.emblem-circle]:size-[clamp(66px,6.65vw,109px)]!",
    "v2-inline-icon": "[&&&]:size-[22px]!",
  };
  
  export function headerClasses(hooks: string): string {
    return [hooks, ...hooks.split(/\s+/).map(hook => styles[hook] || "")].join(" ");
  }
  
  export const headerStyles = "absolute! top-[.9vw] left-[10%] w-[80%] rounded-[100px] border-0! bg-[#eff2df]! text-[#082b47] [&_.header-inner]:w-[96%]! [&_.header-inner]:min-h-[76px]! [&_.header-inner]:py-1! [&_.header-inner]:gap-[1.5vw]! [&_.desktop-nav]:gap-[.6vw]! [&_.desktop-nav_a]:px-[1em]! [&_.desktop-nav_a]:py-[.65em]! [&_.desktop-nav_a]:text-[clamp(12px,.95vw,20px)]! [&_.desktop-nav_a]:font-extrabold! [&_.desktop-nav_a[aria-current]]:rounded-[40px] [&_.desktop-nav_a[aria-current]]:bg-[#fff0e1] [&_.desktop-nav_a[aria-current]]:text-[#f06e23]! [&_.desktop-nav_a]:after:hidden! min-[1900px]:[&_.header-inner]:min-h-[5vw]! min-[701px]:max-[1101px]:left-[3%] min-[701px]:max-[1101px]:w-[94%] min-[701px]:max-[1101px]:[&_.header-inner]:min-h-[68px]! min-[701px]:max-[1101px]:[&_.desktop-nav]:gap-0! min-[701px]:max-[1101px]:[&_.desktop-nav_a]:px-[.65em]! max-desktop:top-[10px] max-desktop:left-[4%] max-desktop:w-[92%] max-desktop:[&_.header-inner]:min-h-[68px]! max-desktop:[&_.header-inner]:w-[89%]! max-desktop:[&_.header-inner]:p-0! max-desktop:[&#home_#mobile-nav]:top-[calc(100%+8px)] max-desktop:[&#home_#mobile-nav]:rounded-[22px] [&[data-page=inner]]:relative! [&[data-page=inner]]:top-auto! [&[data-page=inner]]:left-auto! [&[data-page=inner]]:w-[88%]! [&[data-page=inner]]:mx-auto [&[data-page=inner]]:mt-4 [&[data-page=inner]]:bg-white! [&[data-page=inner]]:shadow-[0_4px_30px_#753b1210] max-desktop:[&[data-page=inner]]:w-[92%]! max-desktop:[&[data-page=inner]]:mt-[10px]";
  