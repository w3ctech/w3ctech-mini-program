module.exports = {
  extends: ['cz'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['config', 'README.md']
    ],
    'type-enum': [
      2,
      'always',
      ['Feat', 'Fix', 'Docs', 'Style', 'Refactor', 'Perf', 'Test', 'Build', 'CI', 'Chore', 'Revert', 'WIP']
    ]
  }
}
