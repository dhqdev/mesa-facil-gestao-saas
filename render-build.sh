#!/bin/bash
set -e

echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Limpar cache
npm cache clean --force

# Instalar dependências
echo "Installing dependencies..."
npm install

# Fazer build da aplicação
echo "Building application..."
npm run build

echo "Build completed successfully!"
