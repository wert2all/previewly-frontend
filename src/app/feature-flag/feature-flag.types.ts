export type FeatureFlagName = keyof typeof FEATURE_FLAGS;

export const FEATURE_FLAGS = {
  upload_pictures: false,
} as const satisfies Record<string, boolean>;