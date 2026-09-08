# Figma imports

This directory stores source artifacts received from Figma.

```text
imports/figma/
├── raw/
│   ├── tokens/
│   ├── libraries/
│   ├── icons/
│   ├── logos/
│   └── references/
└── manifest.json
```

Files under `raw/` are preserved exactly as delivered. Runtime code must not
import raw files directly. A later normalization step will produce validated
tokens and assets for Storybook.

The original Figma `.fig` libraries are deliberately **not** stored in Git or
copied to `raw/libraries/`. They are local inspection material only. Their
filenames and checksums are recorded in `manifest.json` for traceability.

The raw source committed here is the immutable plugin export in
`raw/tokens/`. Do not edit either `ant.tokens.json` or `argus.tokens.json` in
place; create normalized runtime tokens and a documented mapping separately.
