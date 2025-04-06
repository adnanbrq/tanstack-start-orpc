# TanStack Router / Start + oRPC

This application showcases a React-based `@tanstack/start` application using `oRPC` for communication instead of traditional Server Functions.

### ⚠️ Warning

This codebase contains a _known_ issue that occurs only under specific conditions:

When visiting a layout-based page and then modifying an oRPC-related file, the query inside the layout is re-run, which triggers an oRPC decoding error.

This behavior is **intentional** in this repo, as it also serves as a demo to highlight and reproduce this strange bug.
