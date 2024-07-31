import * as Sentry from "@sentry/react";

const env = import.meta.env

Sentry.init({
  dsn: "https://82d6fa149186f4ad8377cb6363a3227c@o4507248999989248.ingest.us.sentry.io/4507687554318336",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  environment: env.MODE,
  tracesSampleRate: env.MODE === 'development' ? 1.0 : 0.1,
  tracePropagationTargets: ["localhost",' env.BASE_URL'], // white list
  replaysSessionSampleRate: env.MODE === 'development' ? 1.0 : 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: env.MODE === 'development' ? 1.0 : 0.1, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});