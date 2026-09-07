# Frontend handoff contract

Argus is not intended to replace production frontend code. It is intended to
reduce interpretation work and make design decisions explicit and testable.

## What a frontend engineer should be able to obtain

For every documented component or pattern, Storybook should expose:

1. **Purpose** — when the component should and should not be used.
2. **Figma reference** — a direct link to the component or frame.
3. **Anatomy** — named slots and regions of the component.
4. **Variants** — the supported values and valid combinations.
5. **States** — default, hover, focus, active, disabled, loading, empty, and
   error states where relevant.
6. **Tokens** — semantic colors, typography, spacing, radii, elevation, and
   motion values used by the component.
7. **Dimensions** — explicit constraints such as minimum height, padding,
   gaps, icon size, and content limits.
8. **Behavior** — mouse, keyboard, focus, overflow, scrolling, and transition
   rules.
9. **Responsive rules** — what changes at each meaningful width.
10. **Accessibility** — role, label, focus order, keyboard operation, and
    contrast expectations.
11. **Content rules** — allowed lengths, truncation, empty values, and examples.
12. **Composition examples** — realistic use inside a page or product pattern.
13. **Change notes** — what changed, why it changed, and which consumers may be
    affected.
14. **Data contract** — canonical field keys, labels, value types, formats, and
    reusable mock scenarios.

## Recommended Storybook surface

Each component should provide:

- an Overview documentation page;
- an interactive Playground with controls;
- one story per meaningful state, not merely per visual screenshot;
- a side-by-side comparison with the linked Figma reference;
- a token and measurement table;
- a responsive example;
- at least one realistic composition example;
- a concise implementation note for production teams.
- a link to relevant entries in the generated Data Dictionary.

## What engineers should not infer

- DOM structure in Argus is not a production requirement unless explicitly
  documented as semantic behavior.
- CSS implementation details are illustrative unless they reference approved
  tokens or constraints.
- Dependencies used by Argus are not automatically approved for production.
- Mocked data contracts are examples, not backend API contracts.

## Handoff outcome

The intended handoff unit is not a source file. It is a reviewed package of:

- Figma link;
- Storybook story link;
- component contract;
- token references;
- states and behavior;
- responsive and accessibility expectations;
- design rationale and change notes.

This gives production engineers more reliable input than measuring a static
frame, while preserving their ownership of the final implementation.
