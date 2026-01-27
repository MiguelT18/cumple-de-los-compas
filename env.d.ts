interface ImportMetaEnv {
  readonly MONGODB_URI: string;
  readonly MONGODB_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}