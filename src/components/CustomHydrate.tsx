"use client";

import { HydrateProps, Hydrate as RQHydrate } from "@tanstack/react-query";

export const CustomHydrate = (props: HydrateProps) => {
  return <RQHydrate {...props} />;
};
