module.exports = {
  singleQuote: true,
  semi: false,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'es5',
  importOrder: [
    '^react*',
    '^@nestjs*',
    '<THIRD_PARTY_MODULES>',
    '^@api/(.*)$',
    '^@web/(.*)$',
    '^@libs/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['decorators-legacy', 'jsx', 'typescript'],
}
