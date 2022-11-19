/*
 * In this document, we declare the types of the environment variables
 * that are in the .env file.
 */
declare module '@env' {
  export const API_URL: string;
  export const MODE: Mode;
}

type Mode = 'dev' | 'prod' | 'test';
