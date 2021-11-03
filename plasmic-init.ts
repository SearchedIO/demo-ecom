import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "e8Pk9NUWSNVPwF5VX335aC",  // ID of a project you are using
      token: "sZuVyZzRzwwCPJ5keFkT0Q8FCaKH1KPXsvI1bmTNAK3G3ZVaxo09EH9FdB4kESf2pADi2U6K85ljBybkVyKqPA"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})