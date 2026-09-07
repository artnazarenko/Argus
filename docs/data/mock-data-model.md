# Mock data and terminology model

Argus uses realistic, deterministic mock data to assemble components, product
patterns, and complete pages in Storybook. Mock data is a shared project asset,
not data embedded independently inside every story.

## Four separate layers

### 1. Field catalog

The field catalog owns canonical semantic keys, user-facing labels, value kinds,
descriptions, and default formatting rules.

```ts
export const fields = {
  createdAt: {
    key: 'createdAt',
    label: 'Дата создания',
    kind: 'datetime',
    description: 'Дата и время создания записи',
    format: 'dd.MM.yyyy HH:mm',
  },
  status: {
    key: 'status',
    label: 'Статус',
    kind: 'status',
  },
} as const;
```

The semantic key is stable. A wording change such as `Дата создания` to
`Создано` is made in one catalog entry and is then reflected by every consumer
that uses the default label.

The catalog must not own context-specific layout values such as a table's exact
column width. Those belong to the table or page configuration.

### 2. Entity schemas

Schemas describe the available attributes and value types for each entity.
Different entities may expose different attributes while reusing the same
canonical fields when their meaning is identical.

```ts
export interface RequestRow {
  id: string;
  title: string;
  createdAt: string;
  status: 'new' | 'inProgress' | 'closed';
}
```

Two fields with different business meanings must not share a key merely because
their visible labels happen to be equal.

### 3. Fixtures and factories

Fixtures contain named, stable examples. Factories help construct larger data
sets without repeating every value.

```text
mocks/
├── fixtures/
│   ├── requests.ts
│   ├── tasks.ts
│   └── users.ts
├── factories/
│   ├── request.factory.ts
│   └── task.factory.ts
└── scenarios/
    ├── requests.default.ts
    ├── requests.empty.ts
    ├── requests.loading.ts
    ├── requests.error.ts
    └── requests.long-content.ts
```

Random data should be avoided in reviewed stories and visual tests. If generated
data is required, it must use a fixed seed and stable dates.

### 4. Story scenarios

Stories select a scenario rather than inventing inline rows. A scenario may
provide data, permissions, network responses, latency, and an expected UI state.

Examples include:

- default result set;
- empty result;
- loading;
- server error;
- partial permissions;
- long text and overflow;
- large result set;
- mixed statuses.

## Proposed runtime structure

The exact paths may be adjusted after the application architecture is reviewed.

```text
src/
├── data-contracts/
│   ├── fields/
│   ├── entities/
│   ├── formats/
│   └── dictionaries/
├── mocks/
│   ├── fixtures/
│   ├── factories/
│   ├── scenarios/
│   └── handlers/
├── components/
├── patterns/
└── pages/
```

`handlers/` will contain mocked API behavior if pages need to load data as if it
came from a real REST or GraphQL service.

## Table usage

A table configuration references canonical fields instead of repeating visible
labels:

```ts
const columns = [
  {
    accessorKey: fields.createdAt.key,
    header: fields.createdAt.label,
    cell: formatters.datetime,
  },
];
```

A page may explicitly override a label only when the business context genuinely
requires different wording. Such overrides should be visible in review.

## Storybook documentation

Argus should generate a Data Dictionary documentation page from the field
catalog. Frontend engineers will be able to inspect:

- canonical keys;
- approved Russian labels;
- value types;
- formatting rules;
- descriptions;
- known consumers;
- intentional contextual overrides.

The same catalog can also be exported as a machine-readable JSON artifact. This
does not force production teams to reuse Argus code, but gives them an explicit,
versioned terminology contract.

## Mock API behavior

For page-level stories, network behavior should be mocked at the request layer
rather than coupled to visual components. This allows the same page markup to be
shown with success, loading, empty, error, slow-response, and permission-denied
scenarios.

