# Как работать с Argus

Argus — общий исполняемый reference-проект. Дизайнер может менять Storybook,
открывать pull request и передавать результат на ревью; второй участник не
переписывает его изменения вручную, а забирает ветку или сливает pull request.

## Первый запуск

Нужны Git, Node.js 22+ и pnpm 10+.

```bash
pnpm install --frozen-lockfile
pnpm storybook
```

Storybook открывается на `http://localhost:6006`.

Перед передачей работы запускаются проверки:

```bash
pnpm check
```

Команда проверяет TypeScript и собирает production-версию Storybook.

## Рабочий цикл

1. Обновите `main` и создайте отдельную ветку:

   ```bash
   git switch main
   git pull --ff-only origin main
   git switch -c feature/<short-name>
   ```

2. Делайте одну логически связанную задачу в одной ветке. Для исправления
   используйте `fix/<component>-<problem>`, для токенов —
   `tokens/<group>-<change>`.

3. Коммитьте небольшими законченными шагами. Сообщение должно описывать
   результат, например `feat(input): add password state matrix`.

4. Перед публикацией обновите ветку и прогоните проверки:

   ```bash
   git fetch origin
   git rebase origin/main
   pnpm check
   git status
   ```

5. Отправьте ветку и откройте pull request в `main`:

   ```bash
   git push -u origin feature/<short-name>
   ```

6. В pull request приложите ссылку на Figma-фрейм, перечислите изменённые
   варианты, темы, размеры, состояния и токены. После ревью и зелёного CI
   ветка вливается в `main`.

7. После слияния локальная копия обновляется так:

   ```bash
   git switch main
   git pull --ff-only origin main
   git branch -d feature/<short-name>
   ```

## Что обязательно проверять

- ARGUS Light и ARGUS Dark;
- Default и Compact там, где Compact уже описан токенами;
- все состояния и размеры из New DS Argus;
- интерактивное поведение, клавиатуру и focus;
- отсутствие исходных `.fig` в Git;
- отсутствие секретов, локальных путей и `node_modules` в коммите.

Figma New DS Argus отвечает за визуальное решение и названия вариантов,
Storybook — за проверяемую browser-спецификацию, а production-репозитории — за
конечную реализацию.
