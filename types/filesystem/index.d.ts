// Minimal stub for the 'filesystem' type library which some environments may implicitly request.
// This file prevents TypeScript from failing when an implicit 'filesystem' type is present.

// If you later need actual filesystem types (like in Node's experimental fs types), replace
// these with proper declarations or install the appropriate @types package.

declare namespace Filesystem {
  // no-op placeholder
}

declare module 'filesystem' {
  export = Filesystem;
}
