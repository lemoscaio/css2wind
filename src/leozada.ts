interface CssProperties {
  [key: string]: string[];
}

export const cssProperties: CssProperties = {
  "align-items: baseline": ["items-baseline"],
  "align-items: center": ["items-center"],
  "align-items: flex-end": ["items-end"],
  "align-items: flex-start": ["items-start"],
  "align-items: stretch": ["items-stretch"],
  "align-self: auto": ["self-auto"],
  "align-self: baseline": ["self-baseline"],
  "align-self: center": ["self-center"],
  "align-self: flex-end": ["self-end"],
  "align-self: flex-start": ["self-start"],
  "align-self: stretch": ["self-stretch"],
  "display: block": ["block"],
  "display: contents": ["contents"],
  "text-transform: uppercase": ["uppercase"],
  "text-transform: lowercase": ["lowercase"],
  "text-transform: capitalize": ["capitalize"],
  "text-transform: none": ["normal-case"],
  "display: flex": ["flex"],
  "display: flow-root": ["flow-root"],
  "display: grid": ["grid"],
  "display: inline-block": ["inline-block"],
  "display: inline-flex": ["inline-flex"],
  "display: inline-grid": ["inline-grid"],
  "display: inline-table": ["inline-table"],
  "letter-spacing: -0.05em": ["tracking-tighter"],
  "letter-spacing: -0.025em": ["tracking-tight"],
  "letter-spacing: 0em": ["tracking-normal"],
  "letter-spacing: 0.025em": ["tracking-wide"],
  "letter-spacing: 0.05em": ["tracking-wider"],
  "letter-spacing: 0.1em": ["tracking-widest"],
  "line-height: 12px": ["leading-3"],
  "line-height: 16px": ["leading-4"],
  "line-height: 20px": ["leading-5"],
  "line-height: 24px": ["leading-6"],
  "line-height: 28px": ["leading-7"],
  "line-height: 32px": ["leading-8"],
  "line-height: 36px": ["leading-9"],
  "line-height: 40px": ["leading-10"],
  "line-height: 1": ["leading-none"],
  "line-height: 1.25": ["leading-tight"],
  "line-height: 1.375": ["leading-snug"],
  "line-height: 1.5": ["leading-normal"],
  "line-height: 1.625": ["leading-relaxed"],
  "line-height: 2": ["leading-loose"],
  "display: inline": ["inline"],
  "display: list-item": ["list-item"],
  "display: none": ["hidden"],
  "display: table-caption": ["table-caption"],
  "display: table-cell": ["table-cell"],
  "display: table-column-group": ["table-column-group"],
  "display: table-column": ["table-column"],
  "display: table-footer-group": ["table-footer-group"],
  "display: table-header-group": ["table-header-group"],
  "display: table-row-group": ["table-row-group"],
  "display: table-row": ["table-row"],
  "display: table": ["table"],
  "flex-direction: column-reverse": ["flex-col-reverse"],
  "flex-direction: column": ["flex-col"],
  "flex-direction: row-reverse": ["flex-row-reverse"],
  "flex-direction: row": ["flex-row"],
  "flex: 0 1 auto": ["flex-initial"],
  "flex: 1 1 0%": ["flex-1"],
  "flex: 1 1 auto": ["flex-auto"],
  "flex: none": ["flex-none"],
  "font-style: italic": ["italic"],
  "font-style: normal": ["not-italic"],
  "height: 100%": ["h-full"],
  "height: 100vh": ["h-screen"],
  "height: 10px": ["h-2.5", "h-[10px]"],
  "height: 12px": ["h-3", "h-[12px]"],
  "height: 14px": ["h-3.5", "h-[14px]"],
  "height: 160px": ["h-40", "h-[160px]"],
  "height: 16px": ["h-4", "h-[16px]"],
  "height: 1px": ["h-px", "h-[1px]"],
  "height: 20px": ["h-5", "h-[20px]"],
  "height: 24px": ["h-6", "h-[24px]"],
  "height: 28px": ["h-7", "h-[28px]"],
  "height: 2px": ["h-0.5", "h-[2px]"],
  "height: 320px": ["h-80", "h-[320px]"],
  "height: 32px": ["h-8", "h-[32px]"],
  "height: 36px": ["h-9", "h-[36px]"],
  "height: 40px": ["h-10", "h-[40px]"],
  "height: 48px": ["h-12", "h-[48px]"],
  "height: 4px": ["h-1", "h-[4px]"],
  "height: 6px": ["h-1.5", "h-[6px]"],
  "height: 80px": ["h-20", "h-[80px]"],
  "height: 8px": ["h-2", "h-[8px]"],
  "height: auto": ["h-auto"],
  "height: fit-content": ["h-fit"],
  "height: max-content": ["h-max"],
  "height: min-content": ["h-min"],
  "justify-content: center": ["justify-center"],
  "justify-content: flex-end": ["justify-end"],
  "justify-content: flex-start": ["justify-start"],
  "justify-content: normal": ["justify-normal"],
  "justify-content: space-around": ["justify-around"],
  "justify-content: space-between": ["justify-between"],
  "justify-content: space-evenly": ["justify-evenly"],
  "justify-content: stretch": ["justify-stretch"],
  "justify-self: auto": ["justify-self-auto"],
  "justify-self: center": ["justify-self-center"],
  "justify-self: end": ["justify-self-end"],
  "justify-self: start": ["justify-self-start"],
  "justify-self: stretch": ["justify-self-stretch"],
  "margin-block: 10px": ["my-2.5", "my-[10px]"],
  "margin-block: 12px": ["my-3", "my-[12px]"],
  "margin-block: 14px": ["my-3.5", "my-[14px]"],
  "margin-block: 160px": ["my-40", "my-[160px]"],
  "margin-block: 16px": ["my-4", "my-[16px]"],
  "margin-block: 1px": ["my-px", "my-[1px]"],
  "margin-block: 20px": ["my-5", "my-[20px]"],
  "margin-block: 24px": ["my-6", "my-[24px]"],
  "margin-block: 28px": ["my-7", "my-[28px]"],
  "margin-block: 2px": ["my-0.5", "my-[2px]"],
  "margin-block: 320px": ["my-80", "my-[320px]"],
  "margin-block: 32px": ["my-8", "my-[32px]"],
  "margin-block: 36px": ["my-9", "my-[36px]"],
  "margin-block: 40px": ["my-10", "my-[40px]"],
  "margin-block: 48px": ["my-12", "my-[48px]"],
  "margin-block: 4px": ["my-1", "my-[4px]"],
  "margin-block: 6px": ["my-1.5", "my-[6px]"],
  "margin-block: 80px": ["my-20", "my-[80px]"],
  "margin-block: 8px": ["my-2", "my-[8px]"],
  "margin-bottom: 10px": ["mb-2.5", "mb-[10px]"],
  "margin-bottom: 12px": ["mb-3", "mb-[12px]"],
  "margin-bottom: 14px": ["mb-3.5", "mb-[14px]"],
  "margin-bottom: 160px": ["mb-40", "mb-[160px]"],
  "margin-bottom: 16px": ["mb-4", "mb-[16px]"],
  "margin-bottom: 1px": ["mb-px", "mb-[1px]"],
  "margin-bottom: 20px": ["mb-5", "mb-[20px]"],
  "margin-bottom: 24px": ["mb-6", "mb-[24px]"],
  "margin-bottom: 28px": ["mb-7", "mb-[28px]"],
  "margin-bottom: 2px": ["mb-0.5", "mb-[2px]"],
  "margin-bottom: 320px": ["mb-80", "mb-[320px]"],
  "margin-bottom: 32px": ["mb-8", "mb-[32px]"],
  "margin-bottom: 36px": ["mb-9", "mb-[36px]"],
  "margin-bottom: 40px": ["mb-10", "mb-[40px]"],
  "margin-bottom: 48px": ["mb-12", "mb-[48px]"],
  "margin-bottom: 4px": ["mb-1", "mb-[4px]"],
  "margin-bottom: 6px": ["mb-1.5", "mb-[6px]"],
  "margin-bottom: 80px": ["mb-20", "mb-[80px]"],
  "margin-bottom: 8px": ["mb-2", "mb-[8px]"],
  "margin-inline: 10px": ["mx-2.5", "mx-[10px]"],
  "margin-inline: 12px": ["mx-3", "mx-[12px]"],
  "margin-inline: 14px": ["mx-3.5", "mx-[14px]"],
  "margin-inline: 160px": ["mx-40", "mx-[160px]"],
  "margin-inline: 16px": ["mx-4", "mx-[16px]"],
  "margin-inline: 1px": ["mx-px", "mx-[1px]"],
  "margin-inline: 20px": ["mx-5", "mx-[20px]"],
  "margin-inline: 24px": ["mx-6", "mx-[24px]"],
  "margin-inline: 28px": ["mx-7", "mx-[28px]"],
  "margin-inline: 2px": ["mx-0.5", "mx-[2px]"],
  "margin-inline: 320px": ["mx-80", "mx-[320px]"],
  "margin-inline: 32px": ["mx-8", "mx-[32px]"],
  "margin-inline: 36px": ["mx-9", "mx-[36px]"],
  "margin-inline: 40px": ["mx-10", "mx-[40px]"],
  "margin-inline: 48px": ["mx-12", "mx-[48px]"],
  "margin-inline: 4px": ["mx-1", "mx-[4px]"],
  "margin-inline: 6px": ["mx-1.5", "mx-[6px]"],
  "margin-inline: 80px": ["mx-20", "mx-[80px]"],
  "margin-inline: 8px": ["mx-2", "mx-[8px]"],
  "margin-left: 10px": ["ml-2.5", "ml-[10px]"],
  "margin-left: 12px": ["ml-3", "ml-[12px]"],
  "margin-left: 14px": ["ml-3.5", "ml-[14px]"],
  "margin-left: 160px": ["ml-40", "ml-[160px]"],
  "margin-left: 16px": ["ml-4", "ml-[16px]"],
  "margin-left: 1px": ["ml-px", "ml-[1px]"],
  "margin-left: 20px": ["ml-5", "ml-[20px]"],
  "margin-left: 24px": ["ml-6", "ml-[24px]"],
  "margin-left: 28px": ["ml-7", "ml-[28px]"],
  "margin-left: 2px": ["ml-0.5", "ml-[2px]"],
  "margin-left: 320px": ["ml-80", "ml-[320px]"],
  "margin-left: 32px": ["ml-8", "ml-[32px]"],
  "margin-left: 36px": ["ml-9", "ml-[36px]"],
  "margin-left: 40px": ["ml-10", "ml-[40px]"],
  "margin-left: 48px": ["ml-12", "ml-[48px]"],
  "margin-left: 4px": ["ml-1", "ml-[4px]"],
  "margin-left: 6px": ["ml-1.5", "ml-[6px]"],
  "margin-left: 80px": ["ml-20", "ml-[80px]"],
  "margin-left: 8px": ["ml-2", "ml-[8px]"],
  "margin-right: 10px": ["mr-2.5", "mr-[10px]"],
  "margin-right: 12px": ["mr-3", "mr-[12px]"],
  "margin-right: 14px": ["mr-3.5", "mr-[14px]"],
  "margin-right: 160px": ["mr-40", "mr-[160px]"],
  "margin-right: 16px": ["mr-4", "mr-[16px]"],
  "margin-right: 1px": ["mr-px", "mr-[1px]"],
  "margin-right: 20px": ["mr-5", "mr-[20px]"],
  "margin-right: 24px": ["mr-6", "mr-[24px]"],
  "margin-right: 28px": ["mr-7", "mr-[28px]"],
  "margin-right: 2px": ["mr-0.5", "mr-[2px]"],
  "margin-right: 320px": ["mr-80", "mr-[320px]"],
  "margin-right: 32px": ["mr-8", "mr-[32px]"],
  "margin-right: 36px": ["mr-9", "mr-[36px]"],
  "margin-right: 40px": ["mr-10", "mr-[40px]"],
  "margin-right: 48px": ["mr-12", "mr-[48px]"],
  "margin-right: 4px": ["mr-1", "mr-[4px]"],
  "margin-right: 6px": ["mr-1.5", "mr-[6px]"],
  "margin-right: 80px": ["mr-20", "mr-[80px]"],
  "margin-right: 8px": ["mr-2", "mr-[8px]"],
  "margin-top: 10px": ["mt-2.5", "mt-[10px]"],
  "margin-top: 12px": ["mt-3", "mt-[12px]"],
  "margin-top: 14px": ["mt-3.5", "mt-[14px]"],
  "margin-top: 160px": ["mt-40", "mt-[160px]"],
  "margin-top: 16px": ["mt-4", "mt-[16px]"],
  "margin-top: 1px": ["mt-px", "mt-[1px]"],
  "margin-top: 20px": ["mt-5", "mt-[20px]"],
  "margin-top: 24px": ["mt-6", "mt-[24px]"],
  "margin-top: 28px": ["mt-7", "mt-[28px]"],
  "margin-top: 2px": ["mt-0.5", "mt-[2px]"],
  "margin-top: 320px": ["mt-80", "mt-[320px]"],
  "margin-top: 32px": ["mt-8", "mt-[32px]"],
  "margin-top: 36px": ["mt-9", "mt-[36px]"],
  "margin-top: 40px": ["mt-10", "mt-[40px]"],
  "margin-top: 48px": ["mt-12", "mt-[48px]"],
  "margin-top: 4px": ["mt-1", "mt-[4px]"],
  "margin-top: 6px": ["mt-1.5", "mt-[6px]"],
  "margin-top: 80px": ["mt-20", "mt-[80px]"],
  "margin-top: 8px": ["mt-2", "mt-[8px]"],
  "margin: 10px": ["m-2.5", "m-[10px]"],
  "margin: 12px": ["m-3", "m-[12px]"],
  "margin: 14px": ["m-3.5", "m-[14px]"],
  "margin: 160px": ["m-40", "m-[160px]"],
  "margin: 16px": ["m-4", "m-[16px]"],
  "margin: 1px": ["m-px", "m-[1px]"],
  "margin: 20px": ["m-5", "m-[20px]"],
  "margin: 24px": ["m-6", "m-[24px]"],
  "margin: 28px": ["m-7", "m-[28px]"],
  "margin: 2px": ["m-0.5", "m-[2px]"],
  "margin: 320px": ["m-80", "m-[320px]"],
  "margin: 32px": ["m-8", "m-[32px]"],
  "margin: 36px": ["m-9", "m-[36px]"],
  "margin: 40px": ["m-10", "m-[40px]"],
  "margin: 48px": ["m-12", "m-[48px]"],
  "margin: 4px": ["m-1", "m-[4px]"],
  "margin: 6px": ["m-1.5", "m-[6px]"],
  "margin: 80px": ["m-20", "m-[80px]"],
  "margin: 8px": ["m-2", "m-[8px]"],
  "max-height: 0px": ["max-h-0", "max-h-[0px]"],
  "max-height: 100%": ["max-h-full"],
  "max-height: 100vh": ["max-h-screen"],
  "max-height: 10px": ["max-h-2.5"],
  "max-height: 12px": ["max-h-3"],
  "max-height: 14px": ["max-h-3.5"],
  "max-height: 160px": ["max-h-40"],
  "max-height: 16px": ["max-h-4"],
  "max-height: 1px": ["max-h-px"],
  "max-height: 20px": ["max-h-5"],
  "max-height: 24px": ["max-h-6"],
  "max-height: 28px": ["max-h-7"],
  "max-height: 2px": ["max-h-0.5"],
  "max-height: 320px": ["max-h-80"],
  "max-height: 32px": ["max-h-8"],
  "max-height: 36px": ["max-h-9"],
  "max-height: 40px": ["max-h-10"],
  "max-height: 48px": ["max-h-12"],
  "max-height: 4px": ["max-h-1"],
  "max-height: 6px": ["max-h-1.5"],
  "max-height: 80px": ["max-h-20"],
  "max-height: 8px": ["max-h-2"],
  "max-height: fit-content": ["max-h-fit"],
  "max-height: max-content": ["max-h-max"],
  "max-height: min-content": ["max-h-min"],
  "max-height: none": ["max-h-none"],
  "max-width: 0px": ["max-w-0", "max-w-[0px]"],
  "max-width: 100%": ["max-w-full"],
  "max-width: 1024px": ["max-w-5xl", "max-w-screen-lg", "max-w-[1024px]"],
  "max-width: 1152px": ["max-w-6xl", "max-w-[1152px]"],
  "max-width: 1280px": ["max-w-7xl", "max-w-screen-xl", "max-w-[1280px]"],
  "max-width: 1536px": ["max-w-screen-2xl", "max-w-[1536px]"],
  "max-width: 320px": ["max-w-xs", "max-w-[320px]"],
  "max-width: 448px": ["max-w-md", "max-w-[448px]"],
  "max-width: 512px": ["max-w-lg", "max-w-[512px]"],
  "max-width: 576px": ["max-w-xl", "max-w-[576px]"],
  "max-width: 640px": ["max-w-screen-sm", "max-w-[640px]"],
  "max-width: 65ch": ["max-w-prose", "max-w-[65ch]"],
  "max-width: 672px": ["max-w-2xl", "max-w-[672px]"],
  "max-width: 768px": ["max-w-3xl", "max-w-screen-md", "max-w-[768px]"],
  "max-width: fit-content": ["max-w-fit"],
  "max-width: max-content": ["max-w-max"],
  "max-width: min-content": ["max-w-min"],
  "max-width: none": ["max-w-none"],
  "min-height: 0px": ["min-h-0", "min-h-[0px]"],
  "min-height: 100%": ["min-h-full"],
  "min-height: 100vh": ["min-h-screen"],
  "min-height: fit-content": ["min-h-fit"],
  "min-height: max-content": ["min-h-max"],
  "min-height: min-content": ["min-h-min"],
  "min-width: 0px": ["min-w-0", "min-w-[0px]"],
  "min-width: 100%": ["min-w-full"],
  "min-width: max-content": ["min-w-max"],
  "min-width: min-content": ["min-w-min"],
  "object-fit: contain": ["object-contain"],
  "object-fit: cover": ["object-cover"],
  "object-fit: fill": ["object-fill"],
  "object-fit: none": ["object-none"],
  "object-fit: scale-down": ["object-scale-down"],
  "opacity: 0.05": ["opacity-5"],
  "opacity: 0.1": ["opacity-10"],
  "opacity: 0.2": ["opacity-20"],
  "opacity: 0.25": ["opacity-25"],
  "opacity: 0.3": ["opacity-30"],
  "opacity: 0.4": ["opacity-40"],
  "opacity: 0.5": ["opacity-50"],
  "opacity: 0.6": ["opacity-60"],
  "opacity: 0.7": ["opacity-70"],
  "opacity: 0.75": ["opacity-75"],
  "opacity: 0.8": ["opacity-80"],
  "opacity: 0.9": ["opacity-90"],
  "opacity: 0.95": ["opacity-95"],
  "opacity: 0": ["opacity-0"],
  "opacity: 1": ["opacity-100"],
  "padding-block: 0px": ["py-0", "py-[0px]"],
  "padding-block: 10px": ["py-2.5", "py-[10px]"],
  "padding-block: 12px": ["py-3", "py-[12px]"],
  "padding-block: 14px": ["py-3.5", "py-[14px]"],
  "padding-block: 160px": ["py-40", "py-[160px]"],
  "padding-block: 16px": ["py-4", "py-[16px]"],
  "padding-block: 1px": ["py-px", "py-[1px]"],
  "padding-block: 20px": ["py-5", "py-[20px]"],
  "padding-block: 24px": ["py-6", "py-[24px]"],
  "padding-block: 28px": ["py-7", "py-[28px]"],
  "padding-block: 2px": ["py-0.5", "py-[2px]"],
  "padding-block: 320px": ["py-80", "py-[320px]"],
  "padding-block: 32px": ["py-8", "py-[32px]"],
  "padding-block: 36px": ["py-9", "py-[36px]"],
  "padding-block: 40px": ["py-10", "py-[40px]"],
  "padding-block: 48px": ["py-12", "py-[48px]"],
  "padding-block: 4px": ["py-1", "py-[4px]"],
  "padding-block: 6px": ["py-1.5", "py-[6px]"],
  "padding-block: 80px": ["py-20", "py-[80px]"],
  "padding-block: 8px": ["py-2", "py-[8px]"],
  "padding-bottom: 10px": ["pb-2.5", "pb-[10px]"],
  "padding-bottom: 12px": ["pb-3", "pb-[12px]"],
  "padding-bottom: 14px": ["pb-3.5", "pb-[14px]"],
  "padding-bottom: 160px": ["pb-40", "pb-[160px]"],
  "padding-bottom: 16px": ["pb-4", "pb-[16px]"],
  "padding-bottom: 1px": ["pb-px", "pb-[1px]"],
  "padding-bottom: 20px": ["pb-5", "pb-[20px]"],
  "padding-bottom: 24px": ["pb-6", "pb-[24px]"],
  "padding-bottom: 28px": ["pb-7", "pb-[28px]"],
  "padding-bottom: 2px": ["pb-0.5", "pb-[2px]"],
  "padding-bottom: 320px": ["pb-80", "pb-[320px]"],
  "padding-bottom: 32px": ["pb-8", "pb-[32px]"],
  "padding-bottom: 36px": ["pb-9", "pb-[36px]"],
  "padding-bottom: 40px": ["pb-10", "pb-[40px]"],
  "padding-bottom: 48px": ["pb-12", "pb-[48px]"],
  "padding-bottom: 4px": ["pb-1", "pb-[4px]"],
  "padding-bottom: 6px": ["pb-1.5", "pb-[6px]"],
  "padding-bottom: 80px": ["pb-20", "pb-[80px]"],
  "padding-bottom: 8px": ["pb-2", "pb-[8px]"],
  "padding-inline: 10px": ["px-2.5", "px-[10px]"],
  "padding-inline: 12px": ["px-3", "px-[12px]"],
  "padding-inline: 14px": ["px-3.5", "px-[14px]"],
  "padding-inline: 160px": ["px-40", "px-[160px]"],
  "padding-inline: 16px": ["px-4", "px-[16px]"],
  "padding-inline: 1px": ["px-px", "px-[1px]"],
  "padding-inline: 20px": ["px-5", "px-[20px]"],
  "padding-inline: 24px": ["px-6", "px-[24px]"],
  "padding-inline: 28px": ["px-7", "px-[28px]"],
  "padding-inline: 2px": ["px-0.5", "px-[2px]"],
  "padding-inline: 320px": ["px-80", "px-[320px]"],
  "padding-inline: 32px": ["px-8", "px-[32px]"],
  "padding-inline: 36px": ["px-9", "px-[36px]"],
  "padding-inline: 40px": ["px-10", "px-[40px]"],
  "padding-inline: 48px": ["px-12", "px-[48px]"],
  "padding-inline: 4px": ["px-1", "px-[4px]"],
  "padding-inline: 6px": ["px-1.5", "px-[6px]"],
  "padding-inline: 80px": ["px-20", "px-[80px]"],
  "padding-inline: 8px": ["px-2", "px-[8px]"],
  "padding-left: 10px": ["pl-2.5", "pl-[10px]"],
  "padding-left: 12px": ["pl-3", "pl-[12px]"],
  "padding-left: 14px": ["pl-3.5", "pl-[14px]"],
  "padding-left: 160px": ["pl-40", "pl-[160px]"],
  "padding-left: 16px": ["pl-4", "pl-[16px]"],
  "padding-left: 1px": ["pl-px", "pl-[1px]"],
  "padding-left: 20px": ["pl-5", "pl-[20px]"],
  "padding-left: 24px": ["pl-6", "pl-[24px]"],
  "padding-left: 28px": ["pl-7", "pl-[28px]"],
  "padding-left: 2px": ["pl-0.5", "pl-[2px]"],
  "padding-left: 320px": ["pl-80", "pl-[320px]"],
  "padding-left: 32px": ["pl-8", "pl-[32px]"],
  "padding-left: 36px": ["pl-9", "pl-[36px]"],
  "padding-left: 40px": ["pl-10", "pl-[40px]"],
  "padding-left: 48px": ["pl-12", "pl-[48px]"],
  "padding-left: 4px": ["pl-1", "pl-[4px]"],
  "padding-left: 6px": ["pl-1.5", "pl-[6px]"],
  "padding-left: 80px": ["pl-20", "pl-[80px]"],
  "padding-left: 8px": ["pl-2", "pl-[8px]"],
  "padding-right: 10px": ["pr-2.5", "pr-[10px]"],
  "padding-right: 12px": ["pr-3", "pr-[12px]"],
  "padding-right: 14px": ["pr-3.5", "pr-[14px]"],
  "padding-right: 160px": ["pr-40", "pr-[160px]"],
  "padding-right: 16px": ["pr-4", "pr-[16px]"],
  "padding-right: 1px": ["pr-px", "pr-[1px]"],
  "padding-right: 20px": ["pr-5", "pr-[20px]"],
  "padding-right: 24px": ["pr-6", "pr-[24px]"],
  "padding-right: 28px": ["pr-7", "pr-[28px]"],
  "padding-right: 2px": ["pr-0.5", "pr-[2px]"],
  "padding-right: 320px": ["pr-80", "pr-[320px]"],
  "padding-right: 32px": ["pr-8", "pr-[32px]"],
  "padding-right: 36px": ["pr-9", "pr-[36px]"],
  "padding-right: 40px": ["pr-10", "pr-[40px]"],
  "padding-right: 48px": ["pr-12", "pr-[48px]"],
  "padding-right: 4px": ["pr-1", "pr-[4px]"],
  "padding-right: 6px": ["pr-1.5", "pr-[6px]"],
  "padding-right: 80px": ["pr-20", "pr-[80px]"],
  "padding-right: 8px": ["pr-2", "pr-[8px]"],
  "padding-top: 10px": ["pt-2.5", "pt-[10px]"],
  "padding-top: 12px": ["pt-3", "pt-[12px]"],
  "padding-top: 14px": ["pt-3.5", "pt-[14px]"],
  "padding-top: 160px": ["pt-40", "pt-[160px]"],
  "padding-top: 16px": ["pt-4", "pt-[16px]"],
  "padding-top: 1px": ["pt-px", "pt-[1px]"],
  "padding-top: 20px": ["pt-5", "pt-[20px]"],
  "padding-top: 24px": ["pt-6", "pt-[24px]"],
  "padding-top: 28px": ["pt-7", "pt-[28px]"],
  "padding-top: 2px": ["pt-0.5", "pt-[2px]"],
  "padding-top: 320px": ["pt-80", "pt-[320px]"],
  "padding-top: 32px": ["pt-8", "pt-[32px]"],
  "padding-top: 36px": ["pt-9", "pt-[36px]"],
  "padding-top: 40px": ["pt-10", "pt-[40px]"],
  "padding-top: 48px": ["pt-12", "pt-[48px]"],
  "padding-top: 4px": ["pt-1", "pt-[4px]"],
  "padding-top: 6px": ["pt-1.5", "pt-[6px]"],
  "padding-top: 80px": ["pt-20", "pt-[80px]"],
  "padding-top: 8px": ["pt-2", "pt-[8px]"],
  "position: absolute": ["absolute"],
  "position: fixed": ["fixed"],
  "position: relative": ["relative"],
  "position: static": ["static"],
  "position: sticky": ["sticky"],
  "resize: both": ["resize"],
  "resize: horizontal": ["resize-x"],
  "resize: none": ["resize-none"],
  "resize: vertical": ["resize-y"],
  "transform-origin: bottom left": ["origin-bottom-left"],
  "transform-origin: bottom right": ["origin-bottom-right"],
  "transform-origin: bottom": ["origin-bottom"],
  "transform-origin: center": ["origin-center"],
  "transform-origin: left": ["origin-left"],
  "transform-origin: right": ["origin-right"],
  "transform-origin: top left": ["origin-top-left"],
  "transform-origin: top right": ["origin-top-right"],
  "transform-origin: top": ["origin-top"],
  "transform: rotate(0deg)": ["rotate-0"],
  "transform: rotate(12deg)": ["rotate-12"],
  "transform: rotate(180deg)": ["rotate-180"],
  "transform: rotate(1deg)": ["rotate-1"],
  "transform: rotate(2deg)": ["rotate-2"],
  "transform: rotate(3deg)": ["rotate-3"],
  "transform: rotate(45deg)": ["rotate-45"],
  "transform: rotate(6deg)": ["rotate-6"],
  "transform: rotate(90deg)": ["rotate-90"],
  "transform: scale(.5)": ["scale-50"],
  "transform: scale(.75)": ["scale-75"],
  "transform: scale(.9)": ["scale-90"],
  "transform: scale(.95)": ["scale-95"],
  "transform: scale(0)": ["scale-0"],
  "transform: scale(1.05)": ["scale-105"],
  "transform: scale(1.1)": ["scale-110"],
  "transform: scale(1.25)": ["scale-125"],
  "transform: scale(1.5)": ["scale-150"],
  "transform: scale(1)": ["scale-100"],
  "transform: scaleX(.5)": ["scale-x-50"],
  "transform: scaleX(.75)": ["scale-x-75"],
  "transform: scaleX(.9)": ["scale-x-90"],
  "transform: scaleX(.95)": ["scale-x-95"],
  "transform: scaleX(0)": ["scale-x-0"],
  "transform: scaleX(1.05)": ["scale-x-105"],
  "transform: scaleX(1.1)": ["scale-x-110"],
  "transform: scaleX(1.25)": ["scale-x-125"],
  "transform: scaleX(1.5)": ["scale-x-150"],
  "transform: scaleX(1)": ["scale-x-100"],
  "transform: scaleY(.5)": ["scale-y-50"],
  "transform: scaleY(.75)": ["scale-y-75"],
  "transform: scaleY(.9)": ["scale-y-90"],
  "transform: scaleY(.95)": ["scale-y-95"],
  "transform: scaleY(0)": ["scale-y-0"],
  "transform: scaleY(1.05)": ["scale-y-105"],
  "transform: scaleY(1.1)": ["scale-y-110"],
  "transform: scaleY(1.25)": ["scale-y-125"],
  "transform: scaleY(1.5)": ["scale-y-150"],
  "transform: scaleY(1)": ["scale-y-100"],
  "transform: skewX(0deg)": ["skew-x-0"],
  "transform: skewX(12deg)": ["skew-x-12"],
  "transform: skewX(1deg)": ["skew-x-1"],
  "transform: skewX(2deg)": ["skew-x-2"],
  "transform: skewX(3deg)": ["skew-x-3"],
  "transform: skewX(6deg)": ["skew-x-6"],
  "transform: skewY(0deg)": ["skew-y-0"],
  "transform: skewY(12deg)": ["skew-y-12"],
  "transform: skewY(1deg)": ["skew-y-1"],
  "transform: skewY(2deg)": ["skew-y-2"],
  "transform: skewY(3deg)": ["skew-y-3"],
  "transform: skewY(6deg)": ["skew-y-6"],
  "transform: translateX(100%)": ["translate-x-full", "translate-x-[100%]"],
  "transform: translateX(10px)": ["translate-x-2.5", "translate-x-[10px]"],
  "transform: translateX(12px)": ["translate-x-3", "translate-x-[12px]"],
  "transform: translateX(14px)": ["translate-x-3.5", "translate-x-[14px]"],
  "transform: translateX(16px)": ["translate-x-4", "translate-x-[16px]"],
  "transform: translateX(20px)": ["translate-x-5", "translate-x-[20px]"],
  "transform: translateX(24px)": ["translate-x-6", "translate-x-[24px]"],
  "transform: translateX(28px)": ["translate-x-7", "translate-x-[28px]"],
  "transform: translateX(2px)": ["translate-x-0.5", "translate-x-[2px]"],
  "transform: translateX(32px)": ["translate-x-8", "translate-x-[32px]"],
  "transform: translateX(36px)": ["translate-x-9", "translate-x-[36px]"],
  "transform: translateX(40px)": ["translate-x-10", "translate-x-[40px]"],
  "transform: translateX(48px)": ["translate-x-12", "translate-x-[48px]"],
  "transform: translateX(4px)": ["translate-x-1", "translate-x-[4px]"],
  "transform: translateX(60px)": ["translate-x-15", "translate-x-[60px]"],
  "transform: translateX(6px)": ["translate-x-1.5", "translate-x-[6px]"],
  "transform: translateX(80px)": ["translate-x-20", "translate-x-[80px]"],
  "transform: translateX(8px)": ["translate-x-2", "translate-x-[8px]"],
  "transform: translateY(100%)": ["translate-y-full", "translate-y-[100%]"],
  "transform: translateY(10px)": ["translate-y-2.5", "translate-y-[10px]"],
  "transform: translateY(12px)": ["translate-y-3", "translate-y-[12px]"],
  "transform: translateY(14px)": ["translate-y-3.5", "translate-y-[14px]"],
  "transform: translateY(16px)": ["translate-y-4", "translate-y-[16px]"],
  "transform: translateY(20px)": ["translate-y-5", "translate-y-[20px]"],
  "transform: translateY(24px)": ["translate-y-6", "translate-y-[24px]"],
  "transform: translateY(28px)": ["translate-y-7", "translate-y-[28px]"],
  "transform: translateY(2px)": ["translate-y-0.5", "translate-y-[2px]"],
  "transform: translateY(32px)": ["translate-y-8", "translate-y-[32px]"],
  "transform: translateY(36px)": ["translate-y-9", "translate-y-[3 6px]"],
  "transform: translateY(40px)": ["translate-y-10", "translate-y-[40px]"],
  "transform: translateY(48px)": ["translate-y-12", "translate-y-[48px]"],
  "transform: translateY(4px)": ["translate-y-1", "translate-y-[4px]"],
  "transform: translateY(60px)": ["translate-y-15", "translate-y-[60px]"],
  "transform: translateY(6px)": ["translate-y-1.5", "translate-y-[6px]"],
  "transform: translateY(80px)": ["translate-y-20", "translate-y-[80px]"],
  "transform: translateY(8px)": ["translate-y-2", "translate-y-[8px]"],
  "transition-duration: 0s": ["duration-0"],
  "transition-duration: 1000ms": ["duration-1000"],
  "transition-duration: 100ms": ["duration-100"],
  "transition-duration: 150ms": ["duration-150"],
  "transition-duration: 200ms": ["duration-200"],
  "transition-duration: 300ms": ["duration-300"],
  "transition-duration: 500ms": ["duration-500"],
  "transition-duration: 700ms": ["duration-700"],
  "transition-duration: 75ms": ["duration-75"],
  "user-select: all": ["select-all"],
  "user-select: auto": ["select-auto"],
  "user-select: none": ["select-none"],
  "user-select: text": ["select-text"],
  "width: 0px": ["w-0", "w-[0px]"],
  "width: 100%": ["w-full"],
  "width: 100vw": ["w-screen"],
  "width: 10px": ["w-2.5", "w-[10px]"],
  "width: 12px": ["w-3", "w-[12px]"],
  "width: 14px": ["w-3.5", "w-[14px]"],
  "width: 160px": ["w-40", "w-[160px]"],
  "width: 16px": ["w-4", "w-[16px]"],
  "width: 1px": ["w-px", "w-[1px]"],
  "width: 20px": ["w-5", "w-[20px]"],
  "width: 24px": ["w-6", "w-[24px]"],
  "width: 28px": ["w-7", "w-[28px]"],
  "width: 2px": ["w-0.5", "w-[2px]"],
  "width: 320px": ["w-80", "w-[320px]"],
  "width: 32px": ["w-8", "w-[32px]"],
  "width: 36px": ["w-9", "w-[36px]"],
  "width: 40px": ["w-10", "w-[40px]"],
  "width: 48px": ["w-12", "w-[48px]"],
  "width: 4px": ["w-1", "w-[4px]"],
  "width: 6px": ["w-1.5", "w-[6px]"],
  "width: 80px": ["w-20", "w-[80px]"],
  "width: 8px": ["w-2", "w-[8px]"],
  "width: auto": ["w-auto"],
  "width: fit-content": ["w-fit"],
  "width: max-content": ["w-max"],
  "width: min-content": ["w-min"],
  "z-index: 0": ["z-0"],
  "z-index: 10": ["z-10"],
  "z-index: 20": ["z-20"],
  "z-index: 30": ["z-30"],
  "z-index: 40": ["z-40"],
  "z-index: 50": ["z-50"],
  "z-index: auto": ["z-auto"],
};
