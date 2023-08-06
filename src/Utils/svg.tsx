
const plusSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V5C11.25 4.58579 11.5858 4.25 12 4.25Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z" />
</svg>
`;

const meatball = `
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0827 12.9999C14.0827 12.4016 13.5977 11.9166 12.9993 11.9166C12.401 11.9166 11.916 12.4016 11.916 12.9999C11.916 13.5982 12.401 14.0833 12.9993 14.0833C13.5977 14.0833 14.0827 13.5982 14.0827 12.9999Z" fill="black" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.58268 12.9999C7.58268 12.4016 7.09766 11.9166 6.49935 11.9166C5.90104 11.9166 5.41602 12.4016 5.41602 12.9999C5.41602 13.5982 5.90104 14.0833 6.49935 14.0833C7.09766 14.0833 7.58268 13.5982 7.58268 12.9999Z" fill="black" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5827 12.9999C20.5827 12.4016 20.0977 11.9166 19.4993 11.9166C18.901 11.9166 18.416 12.4016 18.416 12.9999C18.416 13.5982 18.901 14.0833 19.4993 14.0833C20.0977 14.0833 20.5827 13.5982 20.5827 12.9999Z" fill="black" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

export const IconMap = {
    plusSvg,
    meatball
} as const;

export type IconKey = keyof typeof IconMap;
export type IconType = typeof IconMap[IconKey];