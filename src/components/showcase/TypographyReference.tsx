import type { ReactNode } from 'react';

type Heading = readonly [name: string, sizeToken: string, lineToken: string, defaultCompactSize: string, defaultCompactLine: string, sample: string];
type TextStyle = readonly [name: string, sizeToken: string, lineToken: string, defaultCompactSize: string, defaultCompactLine: string, paragraphToken: string, listToken: string, use: string];

const headings: readonly Heading[] = [
  ['H1', 'fontSizeHeading1', 'lineHeightHeading1', '38 / 32 px', '46 / 40 px', 'Список товаров'],
  ['H2', 'fontSizeHeading2', 'lineHeightHeading2', '30 / 26 px', '38 / 34 px', 'Динамика основных метрик'],
  ['H3', 'fontSizeHeading3', 'lineHeightHeading3', '24 / 20 px', '32 / 28 px', 'Динамика основных метрик'],
  ['H4', 'fontSizeHeading4', 'lineHeightHeading4', '20 / 16 px', '28 / 24 px', 'Динамика основных метрик'],
  ['H5', 'fontSizeHeading5', 'lineHeightHeading5', '16 / 14 px', '24 / 22 px', 'Динамика основных метрик'],
  ['H6', 'fontSizeHeading6', 'lineHeightHeading6', '14 / 12 px', '22 / 20 px', 'Динамика основных метрик'],
];

const paragraphStyles: readonly TextStyle[] = [
  ['Text SM', 'fontSizeSM', 'lineHeightSM', '12 / 10 px', '20 / 18 px', 'ps-8', 'ls-4', 'Мелкий текст'],
  ['Text Base', 'fontSize', 'lineHeight', '14 / 12 px', '22 / 20 px', 'ps-12', 'ls-8', 'Обычный текст'],
  ['Text LG', 'fontSizeLG', 'lineHeightLG', '16 / 14 px', '24 / 22 px', 'ps-12', 'ls-8', 'Увеличенный текст'],
];

// В Figma UI Text отличается от Paragraph Text именно интерлиньяжем SM/Base/LG.
const uiStyles: readonly TextStyle[] = [
  ['Text SM / Normal', 'fontSizeSM', 'lineHeightS', '12 / 10 px', '16 / 14 px', 'ps-8', 'ls-4', 'Мелкий интерфейсный текст'],
  ['Text Base / Normal', 'fontSize', 'lineHeightSM', '14 / 12 px', '20 / 18 px', 'ps-12', 'ls-8', 'Обычный интерфейсный текст'],
  ['Text LG / Normal', 'fontSizeLG', 'lineHeight', '16 / 14 px', '22 / 20 px', 'ps-12', 'ls-8', 'Увеличенный интерфейсный текст'],
];

const cssVars: Record<string, string> = {
  fontSizeHeading1: '--argus-font-size-h1', fontSizeHeading2: '--argus-font-size-h2', fontSizeHeading3: '--argus-font-size-h3',
  fontSizeHeading4: '--argus-font-size-h4', fontSizeHeading5: '--argus-font-size-h5', fontSizeHeading6: '--argus-font-size-h6',
  lineHeightHeading1: '--argus-line-height-h1', lineHeightHeading2: '--argus-line-height-h2', lineHeightHeading3: '--argus-line-height-h3',
  lineHeightHeading4: '--argus-line-height-h4', lineHeightHeading5: '--argus-line-height-h5', lineHeightHeading6: '--argus-line-height-h6',
  fontSizeSM: '--argus-font-size-sm', fontSize: '--argus-font-size', fontSizeLG: '--argus-font-size-lg',
  lineHeightS: '--argus-line-height-s', lineHeightSM: '--argus-line-height-sm', lineHeight: '--argus-line-height-base', lineHeightLG: '--argus-line-height-lg',
};

export function Token({ children }: { children: ReactNode }) {
  return <span className="token-chip">{children}</span>;
}

function TextTable({ title, styles }: { title: string; styles: readonly TextStyle[] }) {
  return <section className="catalog-section typography-reference__section">
    <h2>{title}</h2>
    <table className="token-table">
      <thead><tr><th>Style</th><th>Использование</th><th>Font Family Token</th><th>Font Size Token</th><th>Line Height Token</th><th>Font Weight Token</th><th>Letter spacing Token</th><th>Paragraph spacing Token</th><th>List spacing Token</th></tr></thead>
      <tbody>{styles.map(([name, sizeToken, lineToken, size, line, paragraph, list, use]) => <tr key={name}>
        <td>{name}</td><td>{use}</td><td><Token>fontFamily · X5 Sans VF</Token></td>
        <td><Token>{sizeToken} · {size}</Token></td><td><Token>{lineToken} · {line}</Token></td>
        <td><Token>fontWeightNormal · 400</Token></td><td><Token>letterSpacing · 0 px</Token></td>
        <td><Token>{paragraph}</Token></td><td><Token>{list}</Token></td>
      </tr>)}</tbody>
    </table>
    <div className="type-scale">{styles.map(([name, sizeToken, lineToken, , , paragraph, list]) => <div className="typography-sample" key={`${name}-sample`}>
      <div className="typography-reference__sample-name">{name}</div>
      <p style={{ fontSize: `var(${cssVars[sizeToken]})`, lineHeight: `var(${cssVars[lineToken]})`, fontWeight: 'var(--argus-font-weight-normal)' }}>При открытии модального окна используйте эффект lightbox: он привлекает внимание к окну и сообщает, что остальная страница временно недоступна.</p>
      <ul style={{ fontSize: `var(${cssVars[sizeToken]})`, lineHeight: `var(${cssVars[lineToken]})` }}><li>Токенизированный текст сохраняет одинаковую иерархию во всех подсистемах.</li><li>Размерность переключается в панели Storybook.</li></ul>
      <div className="type-meta"><Token>{sizeToken}</Token><Token>{lineToken}</Token><Token>fontWeightNormal</Token><Token>letterSpacing</Token><Token>{paragraph}</Token><Token>{list}</Token></div>
    </div>)}</div>
  </section>;
}

export function TypographyReference() {
  return <div className="typography-reference">
    <section className="catalog-section typography-reference__section">
      <h2>Heading</h2>
      <table className="token-table"><thead><tr><th>Style</th><th>Использование</th><th>Font Family Token</th><th>Font Size Token</th><th>Line Height Token</th><th>Font Weight Token</th><th>Letter spacing Token</th></tr></thead>
        <tbody>{headings.map(([name, sizeToken, lineToken, size, line]) => <tr key={name}><td>{name}</td><td>Заголовок</td><td><Token>fontFamily · X5 Sans VF</Token></td><td><Token>{sizeToken} · {size}</Token></td><td><Token>{lineToken} · {line}</Token></td><td><Token>fontWeightStrong · 600</Token></td><td><Token>letterSpacing · 0 px</Token></td></tr>)}</tbody>
      </table>
      <div className="type-scale">{headings.map(([name, sizeToken, lineToken, , , sample]) => <div className="typography-sample" key={`${name}-sample`}><div className="typography-reference__sample-name">{name}</div><div style={{ fontSize: `var(${cssVars[sizeToken]})`, lineHeight: `var(${cssVars[lineToken]})`, fontWeight: 'var(--argus-font-weight-strong)' }}>{sample}</div><div className="type-meta"><Token>{sizeToken}</Token><Token>{lineToken}</Token><Token>fontWeightStrong</Token><Token>letterSpacing</Token></div></div>)}</div>
    </section>
    <TextTable title="Paragraph Text" styles={paragraphStyles} />
    <TextTable title="UI Text" styles={uiStyles} />
    <section className="catalog-section typography-reference__section">
      <h2>X5 Sans VF — насыщенность</h2>
      <table className="token-table"><thead><tr><th>Style</th><th>Default</th><th>Compact</th><th>Пример</th></tr></thead><tbody>
        <tr><td>Normal</td><td><Token>fontWeightNormal · 400</Token></td><td><Token>fontWeightNormal · 400</Token></td><td style={{ fontWeight: 'var(--argus-font-weight-normal)' }}>Текст интерфейса</td></tr>
        <tr><td>Medium</td><td><Token>fontWeightMedium · 500</Token></td><td><Token>fontWeightMedium · 500</Token></td><td style={{ fontWeight: 'var(--argus-font-weight-medium)' }}>Текст интерфейса</td></tr>
        <tr><td>Strong</td><td><Token>fontWeightStrong · 600</Token></td><td><Token>fontWeightStrong · 600</Token></td><td style={{ fontWeight: 'var(--argus-font-weight-strong)' }}>Текст интерфейса</td></tr>
      </tbody></table>
    </section>
  </div>;
}
