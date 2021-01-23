# Minimal Repro for `googleapis/gax-nodejs/issues/948`

See [#948](https://github.com/googleapis/gax-nodejs/issues/948)

# Running

Note: this was run with node 14 but will probably work with earlier versions too; `nvm use` will switch to 14 if `nvm` is installed.

```
nvm use # optional
npm i
npm run build
node build
```

Expected output similar to this (paths will change depending on src dir)

```
Error: ENOENT: no such file or directory, open 'iam_service.json'
    at Object.openSync (fs.js:466:3)
    at Object.readFileSync (fs.js:369:35)
    at f (/home/liam/src/gax-node-948-repo/build/index.js:2:1534708)
    at u.e [as load] (/home/liam/src/gax-node-948-repo/build/index.js:2:1534940)
    at u.loadSync (/home/liam/src/gax-node-948-repo/build/index.js:2:1535062)
    at Object.t.loadSync (/home/liam/src/gax-node-948-repo/build/index.js:2:550237)
    at t.GrpcClient.loadFromProto (/home/liam/src/gax-node-948-repo/build/index.js:2:1031230)
    at t.GrpcClient.loadProto (/home/liam/src/gax-node-948-repo/build/index.js:2:1031507)
    at new t.IamClient (/home/liam/src/gax-node-948-repo/build/index.js:2:1034262)
    at new t.PublisherClient (/home/liam/src/gax-node-948-repo/build/index.js:2:377865) {
  errno: -2,
  syscall: 'open',
  code: 'ENOENT',
  path: 'iam_service.json'
}
```
