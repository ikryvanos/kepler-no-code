export class Logger {
  private readonly enabled: boolean;

  constructor(private readonly context: string) {
    this.enabled = window.localStorage.getItem('KEPLER_NO_CODE_LOGGER_ENABLED') === 'true';
  }

  debug(message: string | Record<string, any>) {
    if (!this.enabled) {
      return;
    }

    let logLinePayload: string
    if (typeof message === 'object' && message.toJSON) {
      logLinePayload = JSON.stringify(message.toJSON());
    } else if (typeof message === 'object' && !message.toJSON) {
      logLinePayload = JSON.stringify(message);
    } else {
      logLinePayload = message as string;
    }

    console.log(`DEBUG ${[new Date().toISOString()]} [${this.context}] ${logLinePayload}`)
  }
}
