import assert from 'node:assert/strict';
import test from 'node:test';
import { assertPayloadPath } from './payload.js';

test('allows an intentional ProbeJS typing snapshot', () => {
  assert.equal(
    assertPayloadPath('kubejs/probe/server/generated.d.ts'),
    'kubejs/probe/server/generated.d.ts',
  );
});

test('continues to reject KubeJS runtime logs', () => {
  assert.throws(
    () => assertPayloadPath('kubejs/logs/server.log'),
    /Generated KubeJS content cannot be owned by the overlay/u,
  );
});
