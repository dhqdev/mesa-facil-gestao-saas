# Mesa Fácil - Sistema de Gestão para Restaurantes

Realizei o deploy dele no Render, toda via, é valido dizer que ao acessar é necessário aguardar agluns segundos até renderizar, pois eu não pago a versão PRO:
https://mesa-facil-gestao-saas-1.onrender.com


Sistema completo de gestão para restaurantes desenvolvido com React, TypeScript, Vite e Tailwind CSS.

A ideia deste app é monitorar mesas e cardápios em um restaurante.

## 🚀 Deploy no Render

### Opção 1: Deploy Automático via GitHub

1. **Conecte seu repositório ao GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <URL_DO_SEU_REPOSITORIO>
   git push -u origin main
   ```

2. **Configure no Render Dashboard**
   - Acesse [render.com](https://render.com)
   - Clique em "New" → "Web Service"
   - Conecte seu repositório GitHub
   - Configure as seguintes opções:

   **Build & Deploy Settings:**
   - **Build Command:** `npm ci && npm run build`
   - **Start Command:** `npm start`
   - **Environment:** `Node`
   - **Node Version:** `18`

### Opção 2: Deploy Manual via render.yaml

O projeto já inclui um arquivo `render.yaml` configurado. Basta conectar o repositório e o Render usará essas configurações automaticamente.

### Opção 3: Deploy via Docker

```bash
# Build da imagem
docker build -t mesa-facil-gestao-saas .

# Executar localmente
docker run -p 4173:4173 mesa-facil-gestao-saas
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm start` - Inicia a aplicação em produção
- `npm run lint` - Executa o linter

## 📦 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes de UI (shadcn/ui)
│   ├── OrdersPanel.tsx
│   ├── ReportsPanel.tsx
│   ├── StockPanel.tsx
│   └── TablesPanel.tsx
├── hooks/              # Custom hooks
├── lib/                # Utilitários
└── pages/              # Páginas da aplicação
```

## 🔧 Tecnologias Utilizadas

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **UI Framework:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Icons:** Lucide React

## 📱 Funcionalidades

- ✅ Gestão de Mesas
- ✅ Controle de Pedidos
- ✅ Gestão de Estoque
- ✅ Relatórios e Análises
- ✅ Interface Responsiva
- ✅ Design Moderno

## 🌐 Variáveis de Ambiente

Para produção no Render, as seguintes variáveis são configuradas automaticamente:
- `PORT` - Porta da aplicação (definida pelo Render)
- `NODE_ENV` - Ambiente de execução

## 📋 Checklist para Deploy

- [x] Build testado e funcionando
- [x] Scripts de produção configurados
- [x] Configuração do Render (render.yaml)
- [x] Dockerfile criado
- [x] Redirects configurados (_redirects)
- [x] Favicon personalizado
- [x] Meta tags otimizadas

## 🔄 Processo de Deploy

1. **Desenvolvimento Local:**
   ```bash
   npm install
   npm run dev
   ```

2. **Teste de Build:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Deploy no Render:**
   - Push para o repositório GitHub
   - Configure o serviço no Render
   - O deploy será automático a cada push

## 📞 Suporte

Para dúvidas ou problemas, verifique:
- Os logs do build no Render Dashboard
- A seção de troubleshooting na documentação do Render
- Os arquivos de configuração incluídos no projeto

---

Caso queiram me ajudar, podem criar PRs sem problemas :)
