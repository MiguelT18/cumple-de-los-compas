interface ImportMetaEnv {
  readonly MONGODB_URI: string;
  readonly MONGODB_NAME: string;
  readonly NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}