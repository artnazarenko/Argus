# Argus

Argus is a designer-owned executable UI reference built around Figma, Storybook,
and a reviewable Git workflow.

## Status

The repository is bootstrapped. The application and component architecture will
be added after the preliminary architecture is reviewed.

## Purpose

- turn approved Figma decisions into inspectable browser examples;
- let designers collaborate through short-lived branches and pull requests;
- document component states, behavior, tokens, and composition rules;
- give frontend engineers an implementation reference without presenting this
  repository as production source code.

## Sources of truth

- **Figma** owns visual intent, component anatomy, and variant taxonomy;
- **Git** owns the history of executable examples and review decisions;
- **Storybook** owns the browser-based component specification;
- **production repositories** continue to own production implementation.

## Next input

The next step is to add the proposed architecture and decide the runtime,
Storybook structure, token-import format, component taxonomy, and preview host.

