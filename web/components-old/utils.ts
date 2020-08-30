export const expandMQ = (sm?: any, lg?: any) => [sm, sm, lg, lg];

export const expandSpan = (span?: number) =>
  span ? expandMQ(undefined, `span ${span}`) : undefined;
