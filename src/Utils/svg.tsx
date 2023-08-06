
const plusSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V5C11.25 4.58579 11.5858 4.25 12 4.25Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z" />
</svg>
`;

export const IconMap = {
    plusSvg
} as const;

export type IconKey = keyof typeof IconMap;
export type IconType = typeof IconMap[IconKey];