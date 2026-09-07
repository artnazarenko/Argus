# Figma synchronization model

Argus uses controlled synchronization rather than unrestricted two-way sync.

## Figma to Git

- A Figma plugin exports variables into a raw, versioned token file.
- Raw exports remain unchanged so that updates can be reviewed clearly.
- A normalization step converts the raw export into the format used by the
  Storybook runtime.
- Figma component URLs and node identifiers are recorded in component metadata.
- Figma properties and variants are mapped to component props and stories.

## Git to Figma

- Published Storybook stories are linked back to their Figma components.
- Figma users can open the live browser implementation from the component.
- Storybook does not overwrite Figma component geometry or authored designs.

## Ownership

- Figma owns visual intent and naming.
- The raw token export is an input artifact.
- Normalized tokens and executable examples are reviewed in Git.
- Behavior that cannot be expressed in Figma is documented in Storybook.

