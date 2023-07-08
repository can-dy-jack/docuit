import { RouteService } from './RouteService';
import { describe, expect, test } from 'vitest';
import path from 'path';

describe('RouteService', async () => {
  const testDir = path.join(__dirname, 'fixtures');
  const routeService = new RouteService(testDir);
  await routeService.init();

  test('conventional route by file structure', async () => {
    const routeMeta = routeService.getRouteMeta().map((item) => ({
      ...item,
      absolutePath: item.absolutePath.replace(
        testDir.replaceAll('\\', '/'),
        'TEST_DIR'
      )
    }));

    // console.log(testDir, routeMeta);

    expect(routeMeta).toMatchInlineSnapshot(`
      [
        {
          "absolutePath": "TEST_DIR/a.mdx",
          "routePath": "/a",
        },
        {
          "absolutePath": "TEST_DIR/about/b.mdx",
          "routePath": "/about/b",
        },
      ]
    `);
  });

  test('generate routes code', async () => {
    expect(
      routeService
        .generateRoutesCode()
        .replaceAll(testDir.replaceAll('\\', '/'), 'TEST_DIR')
    ).toMatchInlineSnapshot(`
"
import React from 'react';
import loadable from '@loadable/component';
const Route0 = loadable(() => import('TEST_DIR/a.mdx'));
const Route1 = loadable(() => import('TEST_DIR/about/b.mdx'));
export const routes = [
{ path: '/a', element: React.createElement(Route0) },
{ path: '/about/b', element: React.createElement(Route1) }
];
"`);
  });
});
