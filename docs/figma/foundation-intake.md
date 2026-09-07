# Figma foundation intake

This intake defines the first delivery required to reproduce the atomic Argus UI
in Storybook. The underlying design system name is `ANT`.
This spelling must not be automatically replaced with another product name.

## Minimum useful delivery

### 1. Figma source

Provide one of the following:

- access to the Figma library file and a direct file URL;
- an exported `.fig` file;
- component-set URLs plus screenshots when the source file cannot be shared.

Include the page names that contain variables, foundations, and components.

### 2. Raw token export

Export variables with the team's existing Figma plugin and provide the original
file without manual cleanup. JSON is preferred. If the plugin can export several
formats, include JSON and note the plugin name and export settings.

Expected token groups include:

- primitive color palette;
- semantic colors;
- typography families, sizes, weights, line heights, and letter spacing;
- spacing;
- dimensions and control heights;
- radii;
- borders;
- elevation and shadows;
- opacity;
- breakpoints, if present;
- motion durations and easing, if present;
- light, dark, or other modes;
- component-level tokens already introduced by the team.

Raw exports are stored under `imports/figma/raw/tokens/` and are never edited in
place. Normalized runtime tokens will be generated separately after their source
shape is understood.

### 3. Brand delta from ANT

Describe or show every intentional difference from the base design system:

- brand colors;
- fonts and font weights;
- typography scale;
- spacing or sizing changes;
- new or changed semantic tokens;
- component geometry changes;
- state or interaction changes;
- additions not present in the base system.

If a difference is not intentional, it should not become an Argus override.

### 4. Fonts

Provide:

- exact family names;
- supported weights and styles;
- font files when the license permits repository and web distribution;
- licensing or hosting constraints when files cannot be committed;
- expected fallback stack.

Font files must not be added to a published repository without confirmed usage
rights.

### 5. Icons and brand assets

Provide original SVG assets where possible:

- Argus logo;
- subsystem logos;
- navigation icons;
- common action and status icons.

Include naming rules, supported sizes, stroke width, and whether icons inherit
the current text color.

### 6. Atomic component set

The recommended first component batch is:

1. Typography;
2. Icon;
3. Button;
4. Icon button;
5. Link;
6. Text input;
7. Text area;
8. Select;
9. Checkbox;
10. Radio;
11. Switch;
12. Badge or Tag;
13. Tooltip;
14. Divider;
15. Avatar.

For every component, include all Figma properties, variants, sizes, and states.
At minimum: default, hover, focus, active, disabled, loading, invalid, and
read-only where those states apply.

## Recommended upload sequence

The foundation may be delivered in several messages:

1. token export;
2. font information and permitted font files;
3. icon and logo archive;
4. Figma library or component links;
5. screenshots of component sets and properties;
6. a short list of known Argus overrides.

Files do not need to be renamed before delivery. Their original names help
preserve source traceability.

## Processing sequence in Argus

After receiving the delivery, Argus will:

1. preserve the raw files;
2. inventory token collections and modes;
3. identify naming collisions and missing aliases;
4. record the ANT-to-Argus brand delta;
5. normalize tokens into stable semantic names;
6. create a token preview and Data Dictionary;
7. implement the atomic components;
8. connect component variants to Storybook controls and stories;
9. compare the browser result with the Figma reference;
10. publish the first reviewable atomic UI baseline.

## Acceptance criteria for the first baseline

- raw source exports remain recoverable and unchanged;
- every runtime token has a traceable Figma source or documented local origin;
- brand overrides are explicit rather than mixed invisibly with base values;
- fonts render with approved weights and fallbacks;
- atomic components cover their meaningful states;
- Figma variant names and Storybook control names are mapped explicitly;
- the baseline works without backend services;
- frontend engineers can inspect tokens, states, dimensions, and intended usage.
