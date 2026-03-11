interface AppConfig {
  apiBaseUrl: string;
  demoRedirectUrl: string;
}

const defaults: AppConfig = {
  apiBaseUrl: "https://api.himeet.ai",
  demoRedirectUrl: "https://app.himeet.ai/demo",
};

let _config: AppConfig | null = null;

export async function loadConfig(): Promise<AppConfig> {
  if (_config) return _config;

  try {
    const res = await fetch("/config.json");
    if (res.ok) {
      const json = await res.json();
      _config = { ...defaults, ...json };
    } else {
      _config = defaults;
    }
  } catch {
    _config = defaults;
  }

  return _config;
}

export function getConfig(): AppConfig {
  return _config ?? defaults;
}

export function getEndpoints() {
  const { apiBaseUrl } = getConfig();
  return {
    requestDemo: `${apiBaseUrl}/api/request-demo`,
    validateCode: `${apiBaseUrl}/api/validate-code`,
    signup: `${apiBaseUrl}/api/signup`,
  };
}

export function getDemoRedirectUrl(): string {
  return getConfig().demoRedirectUrl;
}
