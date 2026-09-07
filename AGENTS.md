# Argus repository instructions

## Current phase

The repository is in its architecture phase. Do not add a frontend framework,
Storybook dependencies, or migrate prototype code until the preliminary
architecture has been reviewed and recorded under `docs/architecture/`.

## Product boundaries

- Treat Figma as the source of visual intent and variant naming.
- Treat Storybook as an executable specification, not as production code.
- Do not claim that code in this repository is ready for production reuse.
- Prefer explicit component contracts over undocumented visual imitation.
- Keep imported token exports separate from normalized runtime tokens.
- Do not hard-code shared table headings or field labels inside page stories.
- Reference canonical field definitions from the shared field catalog.
- Keep field definitions, mock values, and UI scenarios in separate layers.
- Use deterministic mock data so visual examples and tests remain stable.

## Git workflow

- `main` contains the current approved reference.
- Use one short-lived branch per task.
- Use `feature/<component>-<change>` for new behavior.
- Use `fix/<component>-<problem>` for corrections.
- Use `tokens/<group>-<change>` for token changes.
- Do not merge a task without human review.
- Delete completed task branches after merge.

## Definition of done for component work

A component change must include, where applicable:

- a Figma component or frame link;
- all relevant variants and states;
- responsive behavior;
- keyboard and focus behavior;
- tokens used by the component;
- content constraints;
- a frontend handoff note;
- updated Storybook documentation and examples.
- updated field catalog or mock scenarios when the data contract changes.
