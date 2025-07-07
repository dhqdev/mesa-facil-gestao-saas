#!/bin/bash
set -e

echo "=== Build Script Starting ==="
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Current directory: $(pwd)"
echo "Files in directory:"
ls -la

echo "=== Cleaning npm cache ==="
npm cache clean --force

echo "=== Installing dependencies ==="
npm install

echo "=== Running build ==="
npm run build

echo "=== Build completed successfully ==="
echo "Contents of dist directory:"
ls -la dist/

echo "=== Build Script Finished ==="
