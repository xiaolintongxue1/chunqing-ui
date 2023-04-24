#!/usr/bin/env node
import { program } from 'commander';
import packageJson from './package.json' assert { type: 'json' };

program.usage('<command>');

program.version(packageJson.version);

program
  .command('add')
  .description('add a new template')
  .action(() => {
    import('../commands/add');
  });

program
  .command('delete')
  .description('delete a template')
  .action(() => {
    import('../commands/delete');
  });

program
  .command('list')
  .description('List the templateList')
  .action(() => {
    import('../commands/list');
  });

program
  .command('init')
  .description('init a project')
  .action(() => {
    import('./cli.js');
  });

program.parse(process.argv);
