/**
 * Starts the development environment.
 */
import { execa } from 'execa';
import open from 'open';
import delay from 'delay';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

(async () => {
  const dbExists = await fs.pathExists(
    path.resolve(__dirname, '../app/db.sqlite')
  );

  if (!dbExists) {
    await execa('npm', ['run', 'exec', '--command=migrate'], {
      cwd: path.resolve(__dirname, '../app'),
      stdin: 'inherit',
      stdout: 'inherit',
      stderr: 'inherit',
    });
    await execa('npm', ['run', 'exec', '--command=seed'], {
      cwd: path.resolve(__dirname, '../app'),
      stdin: 'inherit',
      stdout: 'inherit',
      stderr: 'inherit',
    });
  }

  const api = execa('npm', ['run', 'start:dev'], {
    cwd: path.resolve(__dirname, '../app'),
    stdin: 'inherit',
    stdout: 'inherit',
    stderr: 'inherit',
  });

  const frontend = execa('npm', ['run', 'start:dev'], {
    cwd: path.resolve(__dirname, '../frontend'),
    stdin: 'inherit',
    stdout: 'inherit',
    stderr: 'inherit',
  });

  delay(3000).then(() => {
    open('http://localhost:9010');
  });

  await Promise.all([api, frontend]);
})();
