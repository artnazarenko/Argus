# Figma imports

This directory stores source artifacts received from Figma.

```text
imports/figma/
├── raw/
│   ├── tokens/
│   ├── icons/
│   ├── logos/
│   └── references/
└── manifest.json
```

Files under `raw/` are preserved exactly as delivered. Runtime code must not
import raw files directly. A later normalization step will produce validated
tokens and assets for Storybook.

