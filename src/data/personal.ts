import type { PersonalInfo } from "../types";
import { useI18n } from "vue-i18n";

export const usePersonalData = (): PersonalInfo => {
  const { t } = useI18n();

  return {
    name: t("personal.name"),
    title: t("personal.title"),
    email: t("personal.email"),
    location: t("personal.location"),
    education: t("personal.education"),
    experience: t("personal.experience"),
    interests: t("personal.interests") as unknown as string[],
    bio: {
      short: t("personal.bio.short"),
      long: t("personal.bio.long"),
    },
    social: {
      github: "https://github.com/hectorrosario22",
      linkedin: "https://linkedin.com/in/hector-rosario",
    },
  };
};
