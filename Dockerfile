# Use Node.js LTS como base
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar código fonte
COPY . .

# Fazer build da aplicação
RUN npm run build

# Expor porta
EXPOSE 4173

# Comando para iniciar a aplicação
CMD ["npm", "start"]
