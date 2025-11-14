# React Lang - Webpack Configuration

## Webpack Setup

Este projeto agora usa **Webpack** como bundler principal. Vite foi mantido como alternativa.

### Scripts Disponíveis

#### Webpack (Principal)
- `yarn dev` - Inicia o servidor de desenvolvimento (porta 5173)
- `yarn build` - Build de produção otimizado
- `yarn serve` - Serve o build de produção localmente

#### Vite (Alternativo)
- `yarn vite:dev` - Inicia o Vite em desenvolvimento
- `yarn vite:build` - Build com Vite
- `yarn vite:preview` - Preview do build Vite

### Instalação de Dependências

```bash
yarn install
```

### Configuração Webpack

**Arquivo:** `webpack.config.js`

**Features:**
- ✅ TypeScript + React suporte via Babel
- ✅ CSS/SCSS processing com extração em produção
- ✅ Asset optimization (imagens, fontes)
- ✅ Code splitting automático (vendors + common)
- ✅ Source maps em desenvolvimento
- ✅ HMR (Hot Module Replacement)
- ✅ Minificação CSS e JS em produção
- ✅ HTML template plugin

### Estrutura do Projeto

```
react-lang/
├── src/
│   ├── components/
│   ├── locales/        # Arquivos de tradução
│   ├── pages/
│   ├── App.tsx
│   ├── i18n.ts
│   ├── index.css
│   └── main.tsx
├── public/
│   ├── locales/        # Cópia para produção
│   └── vite.svg
├── index.html          # Template HTML
├── webpack.config.js   # Config do Webpack
├── .babelrc           # Config do Babel
├── tsconfig.json
└── package.json
```

### Detalhes da Configuração

#### Entry Point
- `./src/main.tsx` - Arquivo de entrada principal

#### Output
- `dist/` - Diretório de saída
- Arquivos com hash em produção para cache busting
- Clean automático antes de cada build

#### Loaders
- **babel-loader**: TypeScript + React JSX
- **css-loader**: Importar CSS
- **style-loader**: Injetar CSS (dev)
- **mini-css-extract-plugin**: Extrair CSS (prod)
- **asset modules**: Imagens e fontes

#### Plugins
- **HtmlWebpackPlugin**: Gerar HTML
- **MiniCssExtractPlugin**: Extrair CSS em produção
- **TerserPlugin**: Minificação JS
- **CssMinimizerPlugin**: Minificação CSS

#### Dev Server
- Porta: 5173
- Hot reload automático
- Histoy API fallback para SPA routing

### Desenvolvimentos

1. **Modificações no código** ativam HMR automático
2. **Webpack reconstrói** assets modificados
3. **Browser recarrega** automaticamente

### Build de Produção

```bash
yarn build
```

Gera arquivos otimizados em `dist/`:
- JS minificado com hashes
- CSS separado e minificado
- Assets otimizados
- Source maps para debug

### Monitoramento de Performance

O webpack.config.js incluí:
- Hints de performance (warnings se exceder 512KB)
- Code splitting automático de vendors
- Lazy loading automático

### Migração para Webpack

Se você estava usando Vite:
1. Scripts mudaram (`yarn dev` agora usa webpack)
2. Vite ainda disponível via `yarn vite:*`
3. Configuração equivalente mantida
4. Estrutura de pastas idêntica

### Troubleshooting

**Erro de porta em uso:**
```bash
# Altere a porta em webpack.config.js devServer.port
```

**Problemas com importações:**
- Verifique as extensões em `resolve.extensions`
- Use alias `@/src` para imports relativos

**Performance slow:**
- Aumentar splitChunks threshold
- Desabilitar source maps em produção
- Usar `yarn build` sem `--watch`

### Próximos Passos

- [ ] Adicionar ESLint pre-commit
- [ ] Configurar Prettier
- [ ] Setup de testes (Jest)
- [ ] CI/CD pipeline
- [ ] Docker configuration
