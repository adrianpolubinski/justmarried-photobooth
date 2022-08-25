const requireDir = require('require-dir');

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./backend', { recurse: true });
requireDir('./build', { recurse: true });
requireDir('./frontend', { recurse: true });


