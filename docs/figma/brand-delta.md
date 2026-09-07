# ANT to Argus brand delta

Status: initial source confirmed; detailed component mapping remains pending.

This document records intentional Argus changes to the ANT design system.

## Identity

| Property | ANT baseline | Argus value | Rationale | Source |
| --- | --- | --- | --- | --- |
| Primary color | ANT semantic palette | `ARGUS Light` / `ARGUS Dark` semantic modes | Themes must be switchable from the first Storybook baseline | Argus token export |
| Font family | SF Pro Text predominates in source ANT file | X5 Sans VF | Primary Argus interface typeface, including Default and Compact token modes | Argus token export / design decision |

## Token changes

| Token | ANT value | Argus value | Change type | Source |
| --- | --- | --- | --- | --- |
| TBD | TBD | TBD | override / addition | Figma |

## Confirmed implementation rules

- Treat `ARGUS Light` and `ARGUS Dark` as first-class theme modes. Each
  implemented Storybook component must be reviewable in both modes.
- Start the browser baseline with the `Default` dimensions and typography mode.
  Retain `Compact` in the token model and documentation, but do not present it
  as a user-facing control until the team decides to use it.
- Use `X5 Sans VF` as the intended runtime family. Before browser implementation,
  obtain a permitted web font file or an approved fallback stack; do not commit
  a font file without confirmed distribution rights.

## Figma component status legend

| Marker | Meaning | Storybook handling |
| --- | --- | --- |
| Purple | There is a change relative to ANT | Capture the delta in the component mapping. |
| Purple with gray | An ANT component is reused with Argus modifications | Keep ANT provenance and document the Argus override. |
| Pure gray | Unchanged pure ANT component | It may be represented as ANT baseline with no invented Argus delta. |
| Hammer | Work in progress, but actively used | Include it when needed, visibly label it WIP, and do not describe it as final. |

## Component changes

| Component | Change | Affected states | Source |
| --- | --- | --- | --- |
| TBD | TBD | TBD | Figma |

## Rules

- Record only intentional differences.
- Preserve the original ANT token or component name where known.
- Distinguish a value override from a new Argus-only token.
- Link each change to its Figma component, variable, or supporting decision.
