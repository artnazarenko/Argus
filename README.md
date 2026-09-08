# Argus

Argus is a designer-owned executable UI reference built around Figma, Storybook,
and a reviewable Git workflow.

## Status

The repository contains the working React/Vite Storybook reference. New work is
made on short-lived branches and merged to `main` only through a reviewed pull
request. See [CONTRIBUTING.md](CONTRIBUTING.md) before making changes.

## Purpose

- turn approved Figma decisions into inspectable browser examples;
- let designers collaborate through short-lived branches and pull requests;
- document component states, behavior, tokens, and composition rules;
- keep terminology and reusable mock scenarios consistent across pages;
- give frontend engineers an implementation reference without presenting this
  repository as production source code.

## Sources of truth

- **Figma** owns visual intent, component anatomy, and variant taxonomy;
- **Git** owns the history of executable examples and review decisions;
- **Storybook** owns the browser-based component specification;
- **the field catalog** owns shared interface terminology and semantic formats;
- **production repositories** continue to own production implementation.

The first design-system delivery should follow the
[Figma foundation intake](docs/figma/foundation-intake.md).

For the boundary between the Figma specification and the Ant Design runtime,
see the [Ant technical baseline](docs/handoff/ant-baseline.md).

For the shared Git process between designers and developers, see
[the team workflow](docs/workflow/team-git.md).
