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

Place the source libraries in `raw/libraries/`, preferably as `ANT.fig` and
`Argus.fig`. Preserve the original filenames when they carry version information.
