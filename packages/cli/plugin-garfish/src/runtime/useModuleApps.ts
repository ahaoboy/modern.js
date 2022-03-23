import garfish, { interfaces as GarfishInterfaces } from 'garfish';
import React, { useContext } from 'react';
import { logger } from '../util';
import { GarfishContext } from './utils/Context';

export type Options = typeof garfish.options;
export type ModuleInfo = GarfishInterfaces.AppInfo & {
  Component?: React.ComponentType | React.ElementType;
  originInfo?: Record<string, unknown>;
};
export type ModulesInfo = Array<ModuleInfo>;

export type Manifest = {
  modules?: ModulesInfo;
  loadable?: LoadableConfig;
  getAppList?: () => Promise<Array<GarfishInterfaces.AppInfo>>;
};

export type LoadingComponent = React.ComponentType<{
  isLoading: boolean;
  pastDelay: boolean;
  timedOut: boolean;
  error: any;
  retry: () => void;
}>;

export interface LoadableConfig {
  timeout?: number;
  delay?: number;
  loading?: LoadingComponent;
}

export type ModernGarfishConfig = {
  manifest?: Manifest;
};

export type MicroComponentProps = { loadable?: LoadableConfig };

export type Config = Partial<Options> & ModernGarfishConfig;

export type UseModuleApps = {
  [index in 'apps' | string]: index extends 'apps'
    ? ModulesInfo
    : React.FC<any>;
} & {
  readonly MApp: React.FC<any>;
  readonly apps: ModulesInfo;
};

export function useModuleApps() {
  const { apps, MApp, appInfoList } = useContext(GarfishContext);
  logger('call useModuleApps', apps, MApp, appInfoList);

  const Info = new Proxy(
    {
      MApp,
      apps: appInfoList,
      ...apps,
    },
    {
      get(target, p, receiver) {
        logger('apps init Component Render', p);
        if (typeof p === 'string' && p in target) {
          return Reflect.get(target, p, receiver);
        }
        return () => React.createElement('div');
      },
    },
  );

  return Info as UseModuleApps;
}

export function useModuleApp() {
  const { MApp } = useContext(GarfishContext);
  logger('call useModuleApps', MApp);
  return MApp;
}