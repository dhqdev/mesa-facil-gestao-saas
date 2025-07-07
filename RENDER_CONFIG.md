# Configurações para Deploy Manual no Render

## SOLUÇÃO PARA ERRO 127:

### OPÇÃO 1: Configuração Manual (RECOMENDADO)
No dashboard do Render, configure EXATAMENTE assim:

**Build Command:**
```
npm install && npm run build
```

**Start Command:**
```
npm start
```

**Environment Variables:**
- Deixe em branco inicialmente

**Advanced Settings:**
- Runtime: Detectar automaticamente
- Root Directory: . (ponto)
- Node Version: Deixe em branco (usar .nvmrc)

### OPÇÃO 2: Se ainda der erro, use este Build Command:
```
npm cache clean --force && npm install && npm run build
```

### OPÇÃO 3: Build Command mais robusto:
```
rm -rf node_modules package-lock.json && npm install && npm run build
```

## IMPORTANTES:
1. NÃO use npm ci no Render (causa erro 127)
2. Use npm install simples
3. Certifique-se que o repositório tem .nvmrc e .node-version
4. Se persistir o erro, tente sem render.yaml (configuração manual)

## Troubleshooting:
- Vá em "Events" no dashboard para ver logs detalhados
- Se der timeout, aumente o tempo de build nas configurações
- Verifique se o branch está correto (main/master)
