# Troubleshooting Deploy Render - Erro 127

## O que é o erro 127?
O erro 127 significa "command not found" - geralmente acontece quando:
- npm/node não está disponível no PATH
- Versão incompatível do Node.js
- Problema com npm ci vs npm install

## SOLUÇÕES TESTADAS:

### ✅ SOLUÇÃO 1: Configuração Manual Simples
1. Ignore o render.yaml
2. Configure manualmente no dashboard:
   - Build: `npm install && npm run build`
   - Start: `npm start`
   - Deixe environment variables vazio inicialmente

### ✅ SOLUÇÃO 2: Build Command Robusto
```bash
npm cache clean --force && npm install && npm run build
```

### ✅ SOLUÇÃO 3: Reset Completo
```bash
rm -rf node_modules package-lock.json && npm install && npm run build
```

### ✅ SOLUÇÃO 4: Forçar versão do Node
Adicionar nas Environment Variables:
- `NODE_VERSION`: `18`

## EVITAR:
- ❌ npm ci (causa erro no Render free tier)
- ❌ --legacy-peer-deps (às vezes causa problemas)
- ❌ Comandos muito complexos no build

## DEBUG:
1. Vá em "Events" no dashboard
2. Clique no deploy que falhou
3. Veja os logs completos
4. Procure por "command not found" ou "npm: command not found"

## SE NADA FUNCIONAR:
1. Tente deploy manual via upload de arquivos estáticos
2. Use Netlify como alternativa
3. Verifique se a conta Render não tem limitações
