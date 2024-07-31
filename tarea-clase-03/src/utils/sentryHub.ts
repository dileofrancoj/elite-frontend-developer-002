import * as Sentry from '@sentry/react'

const sentryHub = {
    captureException: (ex: string) => {
        Sentry.captureException(ex)
    },
    captureMessage: (message:string) => {
        Sentry.captureMessage(message)
    }
}

Object.freeze(sentryHub)

export {sentryHub}