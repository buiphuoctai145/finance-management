import { createContext } from 'react';

import type { GraphProps } from '@/types/data';

const initialGraphProps: GraphProps = {
  values: [],
};

export const GraphCtx = createContext(null);
