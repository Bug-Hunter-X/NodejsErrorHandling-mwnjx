# Unhandled 'error' Event in Node.js Server

This repository demonstrates a common issue in Node.js servers: the lack of proper error handling leading to crashes without informative error messages.  The `server.js` file shows a basic server vulnerable to this problem. The solution is provided in `serverSolution.js`.

## Problem

Node.js applications often fail silently when unhandled exceptions occur, especially within event emitters like the HTTP server.  This makes debugging significantly harder.

## Solution

The key is to add comprehensive error handling using event listeners, such as `'error'` for the HTTP server and `'uncaughtException'` for global errors.  This allows for logging useful debugging information and implementing graceful shutdown mechanisms.