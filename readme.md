# Node + TypeScript Project Setup Guide

This project demonstrates a basic Node.js environment configured with TypeScript. Follow the steps below to initialize the setup and run TypeScript code effectively.

## 📦 Environment Setup Commands

### 1. `nvm ls`

Lists all installed Node.js versions using Node Version Manager (NVM). Helps ensure the correct Node.js version is being used.

### 2. `npm init -y`

Automatically creates a `package.json` file with default values. This file keeps track of project metadata and dependencies.

### 3, 4 & 17. `npm install -D typescript`

Installs TypeScript locally as a development dependency. This allows TypeScript compilation inside the project without requiring global installation.

### 5. `npm install -g ts-node`

Globally installs `ts-node`, a utility that allows running TypeScript files directly with Node.js, skipping the manual transpilation step.

### 6 & 12. `ts-node index.ts`

Executes your TypeScript file (`index.ts`) instantly using `ts-node`. Great for quick testing during development.

### 8, 10 & 11. `tsc --init`

Creates a `tsconfig.json` file, which specifies compiler options like target version, module system, and more.

### 9. `npm install -g typescript`

Globally installs the TypeScript compiler (`tsc`). This lets you use TypeScript across any project from the command line.

### 14 & 15. `tsc index.ts`

Compiles your TypeScript file into JavaScript (`index.js` by default). Use this if you're not using `ts-node`.

### 16. `node index.js`

Runs the compiled JavaScript file using Node.js. Typically used after manual compilation with `tsc`.

### 18. `npm install`

Installs all dependencies listed in `package.json`. Run this after cloning a repo or modifying dependencies manually.

### 19. `history`

Displays your command-line history. Useful for reviewing previously executed commands and debugging your setup process.

---

## 🛠 Summary

With this setup, you've:

- Initialized a Node.js project using `npm`
- Installed TypeScript and configured its compiler
- Experimented with both manual (`tsc`) and direct (`ts-node`) execution
- Tested file compilation and runtime workflows

# Node + TypeScript Project Setup Guide

This project demonstrates a basic Node.js environment configured with TypeScript. It includes tools like NVM, npm, and TypeScript, all essential for building scalable and maintainable Node.js applications.

## 🔧 What You'll Need

### 🌀 NVM (Node Version Manager)

NVM is a tool for managing multiple Node.js versions. It's useful when different projects require different Node versions.

- **Check if installed**:
  ```bash
  nvm --version
  ```
