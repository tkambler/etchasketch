import { execa } from 'execa';
import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

(async () => {
  const api = execa('npm', ['run', 'start:dev'], {
    cwd: path.resolve(__dirname, '../app'),
  });
  api.stdout.pipe(process.stdout);
  api.stderr.pipe(process.stderr);

  await api;
})();
