import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { PAGE_METADATA, SITE } from './data/site';
import { renderHead } from './seo';

export const pages = Object.keys(PAGE_METADATA);
export const site = SITE;
export function render(path: string) {
  return { body: renderToString(<StrictMode><App path={path}/></StrictMode>), head: renderHead(path) };
}
