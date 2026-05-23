import { execSync } from 'child_process';

execSync('git submodule update --remote src/assets/graphics', { stdio: 'inherit' });

try {
  execSync('git diff --quiet HEAD src/assets/graphics');
  console.log('No changes in submodule, skipping commit.');
} catch {
  execSync('git add src/assets/graphics', { stdio: 'inherit' });
  execSync('git commit -m "chore: update graphics submodule"', { stdio: 'inherit' });
  console.log('Submodule committed.');
}
