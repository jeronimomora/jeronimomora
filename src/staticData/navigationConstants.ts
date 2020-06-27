const navigationConstants = Object.freeze({
  CAREER_PROFILE: "CAREER_PROFILE" as const,
  SKILLS: "SKILLS" as const,
  WORK_EXPERIENCE: "WORK_EXPERIENCE" as const,
  EDUCATION: "EDUCATION" as const,
});

export default navigationConstants;

export type NavigationConstantType = typeof navigationConstants[keyof typeof navigationConstants];
