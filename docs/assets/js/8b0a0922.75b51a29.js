"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[4557],{767:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(4848),a=t(8453);const i={title:"Slow IndexedDB",slug:"slow-indexeddb.html"},r="Why IndexedDB is slow and what to use instead",o={id:"slow-indexeddb",title:"Slow IndexedDB",description:"So you have a JavaScript web application that needs to store data at the client side, either to make it offline usable, just for caching purposes or for other reasons.",source:"@site/docs/slow-indexeddb.md",sourceDirName:".",slug:"/slow-indexeddb.html",permalink:"/slow-indexeddb.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Slow IndexedDB",slug:"slow-indexeddb.html"},sidebar:"tutorialSidebar",previous:{title:"RxDB NoSQL Performance Tips",permalink:"/nosql-performance-tips.html"},next:{title:"LocalStorage vs. IndexedDB vs. Cookies vs. OPFS vs. WASM-SQLite",permalink:"/articles/localstorage-indexeddb-cookies-opfs-sqlite-wasm.html"}},d={},l=[{value:"Batched Cursor",id:"batched-cursor",level:2},{value:"IndexedDB Sharding",id:"indexeddb-sharding",level:2},{value:"Custom Indexes",id:"custom-indexes",level:2},{value:"Relaxed durability",id:"relaxed-durability",level:2},{value:"Explicit transaction commits",id:"explicit-transaction-commits",level:2},{value:"In-Memory on top of IndexedDB",id:"in-memory-on-top-of-indexeddb",level:2},{value:"In-Memory: Persistence",id:"in-memory-persistence",level:3},{value:"In-Memory: Multi Tab Support",id:"in-memory-multi-tab-support",level:3},{value:"Further read",id:"further-read",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"why-indexeddb-is-slow-and-what-to-use-instead",children:"Why IndexedDB is slow and what to use instead"}),"\n",(0,s.jsx)(n.p,{children:"So you have a JavaScript web application that needs to store data at the client side, either to make it offline usable, just for caching purposes or for other reasons."}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.a,{href:"/articles/browser-database.html",children:"in-browser data storage"}),", you have some options:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cookies"})," are sent with each HTTP request, so you cannot store more than a few strings in them."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WebSQL"})," ",(0,s.jsx)(n.a,{href:"https://hacks.mozilla.org/2010/06/beyond-html5-database-apis-and-the-road-to-indexeddb/",children:"is deprecated"})," because it never was a real standard and turning it into a standard would have been too difficult."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/articles/localstorage.html",children:"LocalStorage"})," is a synchronous API over asynchronous IO-access. Storing and reading data can fully block the JavaScript process so you cannot use LocalStorage for more than few simple key-value pairs."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"FileSystem API"})," could be used to store plain binary files, but it is ",(0,s.jsx)(n.a,{href:"https://caniuse.com/filesystem",children:"only supported in chrome"})," for now."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IndexedDB"})," is an indexed key-object database. It can store json data and iterate over its indexes. It is ",(0,s.jsx)(n.a,{href:"https://caniuse.com/indexeddb",children:"widely supported"})," and stable."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"UPDATE April 2023",type:"note",children:[(0,s.jsxs)(n.p,{children:["Since beginning of 2023, all modern browsers ship the ",(0,s.jsx)(n.strong,{children:"File System Access API"})," which allows to persistently store data in the browser with a way better performance. For ",(0,s.jsx)(n.a,{href:"https://rxdb.info/",children:"RxDB"})," you can use the ",(0,s.jsx)(n.a,{href:"/rx-storage-opfs.html",children:"OPFS RxStorage"})," to get about 4x performance improvement compared to IndexedDB."]}),(0,s.jsx)("center",{children:(0,s.jsx)("a",{href:"https://rxdb.info/",children:(0,s.jsx)("img",{src:"./files/logo/rxdb_javascript_database.svg",alt:"IndexedDB Database",width:"250"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["It becomes clear that the only way to go is IndexedDB. You start developing your app and everything goes fine.\nBut as soon as your app gets bigger, more complex or just handles more data, you might notice something. ",(0,s.jsx)(n.strong,{children:"IndexedDB is slow"}),". Not slow like a database on a cheap server, ",(0,s.jsx)(n.strong,{children:"even slower"}),"! Inserting a few hundred documents can take up several seconds. Time which can be critical for a fast page load. Even sending data over the internet to the backend can be faster then storing it inside of an IndexedDB database."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Transactions vs Throughput"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["So before we start complaining, lets analyze what exactly is slow. When you run tests on Nolans ",(0,s.jsx)(n.a,{href:"http://nolanlawson.github.io/database-comparison/",children:"Browser Database Comparison"})," you can see that inserting 1k documents into IndexedDB takes about 80 milliseconds, 0.08ms per document. This is not really slow. It is quite fast and it is very unlikely that you want to store that many document at the same time at the client side. But the key point here is that all these documents get written in a ",(0,s.jsx)(n.code,{children:"single transaction"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["I forked the comparison tool ",(0,s.jsx)(n.a,{href:"https://pubkey.github.io/client-side-databases/database-comparison/index.html",children:"here"})," and changed it to use one transaction per document write. And there we have it. Inserting 1k documents with one transaction per write, takes about 2 seconds. Interestingly if we increase the document size to be 100x bigger, it still takes about the same time to store them. This makes clear that the limiting factor to IndexedDB performance is the transaction handling, not the data throughput."]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"./files/indexeddb-transaction-throughput.png",alt:"IndexedDB transaction throughput",width:"700"})}),"\n",(0,s.jsxs)(n.p,{children:["To fix your IndexedDB performance problems you have to make sure to use as less data transfers/transactions as possible.\nSometimes this is easy, as instead of iterating over a documents list and calling single inserts, with RxDB you could use the ",(0,s.jsx)(n.a,{href:"https://rxdb.info/rx-collection.html#bulkinsert",children:"bulk methods"})," to store many document at once.\nBut most of the time is not so easy. Your user clicks around, data gets replicated from the backend, another browser tab writes data. All these things can happen at random time and you cannot crunch all that data in a single transaction."]}),"\n",(0,s.jsxs)(n.p,{children:["Another solution is to just not care about performance at all. In a few releases the browser vendors will have optimized IndexedDB and everything is fast again. Well, IndexedDB was slow ",(0,s.jsx)(n.a,{href:"https://www.researchgate.net/publication/281065948_Performance_Testing_and_Comparison_of_Client_Side_Databases_Versus_Server_Side",children:"in 2013"})," and it is still slow today. If this trend continues, it will still be slow in a few years from now. Waiting is not an option. The chromium devs made ",(0,s.jsx)(n.a,{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=1025456#c15",children:"a statement"})," to focus on optimizing read performance, not write performance."]}),"\n",(0,s.jsxs)(n.p,{children:["Switching to WebSQL (even if it is deprecated) is also not an option because, like ",(0,s.jsx)(n.a,{href:"https://pubkey.github.io/client-side-databases/database-comparison/index.html",children:"the comparison tool shows"}),", it has even slower transactions."]}),"\n",(0,s.jsxs)(n.p,{children:["So you need a way to ",(0,s.jsx)(n.strong,{children:"make IndexedDB faster"}),". In the following I lay out some performance optimizations than can be made to have faster reads and writes in IndexedDB."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"HINT:"})," You can reproduce all performance tests ",(0,s.jsx)(n.a,{href:"https://github.com/pubkey/indexeddb-performance-tests",children:"in this repo"}),". In all tests we work on a dataset of 40000 ",(0,s.jsx)(n.code,{children:"human"})," documents with a random ",(0,s.jsx)(n.code,{children:"age"})," between ",(0,s.jsx)(n.code,{children:"1"})," and ",(0,s.jsx)(n.code,{children:"100"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"batched-cursor",children:"Batched Cursor"}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.a,{href:"https://caniuse.com/indexeddb2",children:"IndexedDB 2.0"}),", new methods were introduced which can be utilized to improve performance. With the ",(0,s.jsx)(n.code,{children:"getAll()"})," method, a faster alternative to the old ",(0,s.jsx)(n.code,{children:"openCursor()"})," can be created which improves performance when reading data from the IndexedDB store."]}),"\n",(0,s.jsxs)(n.p,{children:["Lets say we want to query all user documents that have an ",(0,s.jsx)(n.code,{children:"age"})," greater then ",(0,s.jsx)(n.code,{children:"25"})," out of the store.\nTo implement a fast batched cursor that only needs calls to ",(0,s.jsx)(n.code,{children:"getAll()"})," and not to ",(0,s.jsx)(n.code,{children:"getAllKeys()"}),", we first need to create an ",(0,s.jsx)(n.code,{children:"age"})," index that contains the primary ",(0,s.jsx)(n.code,{children:"id"})," as last field."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"myIndexedDBObjectStore.createIndex(\n    'age-index',\n    [\n        'age',\n        'id'\n    ]\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is required because the ",(0,s.jsx)(n.code,{children:"age"})," field is not unique, and we need a way to checkpoint the last returned batch so we can continue from there in the next call to ",(0,s.jsx)(n.code,{children:"getAll()"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const maxAge = 25;\nlet result = [];\nconst tx: IDBTransaction = db.transaction([storeName], 'readonly', TRANSACTION_SETTINGS);\nconst store = tx.objectStore(storeName);\nconst index = store.index('age-index');\nlet lastDoc;\nlet done = false;\n/**\n * Run the batched cursor until all results are retrieved\n * or the end of the index is reached.\n */\nwhile (done === false) {\n    await new Promise((res, rej) => {\n        const range = IDBKeyRange.bound(\n          /**\n           * If we have a previous document as checkpoint,\n           * we have to continue from it's age and id values.\n           */\n            [\n                lastDoc ? lastDoc.age : -Infinity,\n                lastDoc ? lastDoc.id : -Infinity,\n            ],\n            [\n                maxAge + 0.00000001,\n                String.fromCharCode(65535)\n            ],\n            true,\n            false\n        );\n        const openCursorRequest = index.getAll(range, batchSize);\n        openCursorRequest.onerror = err => rej(err);\n        openCursorRequest.onsuccess = e => {\n            const subResult: TestDocument[] = e.target.result;\n            lastDoc = lastOfArray(subResult);\n            if (subResult.length === 0) {\n                done = true;\n            } else {\n                result = result.concat(subResult);\n            }\n            res();\n        };\n    });\n}\nconsole.dir(result);\n"})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"./files/indexeddb-batched-cursor.png",alt:"IndexedDB batched cursor",width:"100%"})}),"\n",(0,s.jsxs)(n.p,{children:["As the performance test results show, using a batched cursor can give a huge improvement. Interestingly choosing a high batch size is important. When you known that all results of a given ",(0,s.jsx)(n.code,{children:"IDBKeyRange"})," are needed, you should not set a batch size at all and just directly query all documents via ",(0,s.jsx)(n.code,{children:"getAll()"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["RxDB uses batched cursors in the ",(0,s.jsx)(n.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"indexeddb-sharding",children:"IndexedDB Sharding"}),"\n",(0,s.jsxs)(n.p,{children:["Sharding is a technique, normally used in server side databases, where the database is partitioned horizontally. Instead of storing all documents at one table/collection, the documents are split into so called ",(0,s.jsx)(n.strong,{children:"shards"})," and each shard is stored on one table/collection. This is done in server side architectures to spread the load between multiple physical servers which ",(0,s.jsx)(n.strong,{children:"increases scalability"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When you use IndexedDB in a browser, there is of course no way to split the load between the client and other servers. But you can still benefit from sharding. Partitioning the documents horizontally into ",(0,s.jsx)(n.strong,{children:"multiple IndexedDB stores"}),", has shown to have a big performance improvement in write- and read operations while only increasing initial pageload slightly."]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"./files/indexeddb-sharding-performance.png",alt:"IndexedDB sharding performance",width:"100%"})}),"\n",(0,s.jsxs)(n.p,{children:["As shown in the performance test results, sharding should always be done by ",(0,s.jsx)(n.code,{children:"IDBObjectStore"})," and not by database. Running a batched cursor over the whole dataset with 10 store shards in parallel is about ",(0,s.jsx)(n.strong,{children:"28% faster"})," then running it over a single store. Initialization time increases minimal from ",(0,s.jsx)(n.code,{children:"9"})," to ",(0,s.jsx)(n.code,{children:"17"})," milliseconds.\nGetting a quarter of the dataset by batched iterating over an index, is even ",(0,s.jsx)(n.strong,{children:"43%"})," faster with sharding then when a single store is queried."]}),"\n",(0,s.jsx)(n.p,{children:"As downside, getting 10k documents by their id is slower when it has to run over the shards.\nAlso it can be much effort to recombined the results from the different shards into the required query result. When a query without a limit is done, the sharding method might cause a data load huge overhead."}),"\n",(0,s.jsxs)(n.p,{children:["Sharding can be used with RxDB with the ",(0,s.jsx)(n.a,{href:"/rx-storage-sharding.html",children:"Sharding Plugin"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"custom-indexes",children:"Custom Indexes"}),"\n",(0,s.jsx)(n.p,{children:"Indexes improve the query performance of IndexedDB significant. Instead of fetching all data from the storage when you search for a subset of it, you can iterate over the index and stop iterating when all relevant data has been found."}),"\n",(0,s.jsxs)(n.p,{children:["For example to query for all user documents that have an ",(0,s.jsx)(n.code,{children:"age"})," greater than ",(0,s.jsx)(n.code,{children:"25"}),", you would create an ",(0,s.jsx)(n.code,{children:"age+id"})," index.\nTo be able to run a batched cursor over the index, we always need our primary key (",(0,s.jsx)(n.code,{children:"id"}),") as the last index field."]}),"\n",(0,s.jsxs)(n.p,{children:["Instead of doing this, you can use a ",(0,s.jsx)(n.code,{children:"custom index"})," which can improve the performance. The custom index runs over a helper field ",(0,s.jsx)(n.code,{children:"ageIdCustomIndex"})," which is added to each document on write. Our index now only contains a single ",(0,s.jsx)(n.code,{children:"string"})," field instead of two (age-",(0,s.jsx)(n.code,{children:"number"})," and id-",(0,s.jsx)(n.code,{children:"string"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// On document insert add the ageIdCustomIndex field.\nconst idMaxLength = 20; // must be known to craft a custom index  \ndocData.ageIdCustomIndex = docData.age + docData.id.padStart(idMaxLength, ' ');\nstore.put(docData);\n// ...\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// normal index\nmyIndexedDBObjectStore.createIndex(\n    'age-index',\n    [\n        'age',\n        'id'\n    ]\n);\n\n// custom index\nmyIndexedDBObjectStore.createIndex(\n    'age-index-custom',\n    [\n        'ageIdCustomIndex'\n    ]\n);\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To iterate over the index, you also use a custom crafted keyrange, depending on the last batched cursor checkpoint. Therefore the ",(0,s.jsx)(n.code,{children:"maxLength"})," of ",(0,s.jsx)(n.code,{children:"id"})," must be known."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// keyrange for normal index\nconst range = IDBKeyRange.bound(\n    [25, ''],\n    [Infinity, Infinity],\n    true,\n    false\n);\n\n// keyrange for custom index\nconst range = IDBKeyRange.bound(\n    // combine both values to a single string\n    25 + ''.padStart(idMaxLength, ' '),\n    Infinity,\n    true,\n    false\n);\n"})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"./files/indexeddb-custom-index.png",alt:"IndexedDB custom index",width:"700"})}),"\n",(0,s.jsxs)(n.p,{children:["As shown, using a custom index can further improve the performance of running a batched cursor by about ",(0,s.jsx)(n.code,{children:"10%"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Another big benefit of using custom indexes, is that you can also encode ",(0,s.jsx)(n.code,{children:"boolean"})," values in them, which ",(0,s.jsx)(n.a,{href:"https://github.com/w3c/IndexedDB/issues/76",children:"cannot be done"})," with normal IndexedDB indexes."]}),"\n",(0,s.jsxs)(n.p,{children:["RxDB uses custom indexes in the ",(0,s.jsx)(n.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"relaxed-durability",children:"Relaxed durability"}),"\n",(0,s.jsxs)(n.p,{children:["Chromium based browsers allow to set ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/durability",children:"durability"})," to ",(0,s.jsx)(n.code,{children:"relaxed"})," when creating an IndexedDB transaction. Which runs the transaction in a less secure durability mode, which can improve the performance."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The user agent may consider that the transaction has successfully committed as soon as all outstanding changes have been written to the operating system, without subsequent verification."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["As shown ",(0,s.jsx)(n.a,{href:"https://nolanlawson.com/2021/08/22/speeding-up-indexeddb-reads-and-writes/",children:"here"}),", using the relaxed durability mode can improve performance slightly. The best performance improvement could be measured when many small transactions have to be run. Less, bigger transaction do not benefit that much."]}),"\n",(0,s.jsx)(n.h2,{id:"explicit-transaction-commits",children:"Explicit transaction commits"}),"\n",(0,s.jsxs)(n.p,{children:["By explicitly committing a transaction, another slight performance improvement can be achieved. Instead of waiting for the browser to commit an open transaction, we call the ",(0,s.jsx)(n.code,{children:"commit()"})," method to explicitly close it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// .commit() is not available on all browsers, so first check if it exists.\nif (transaction.commit) {\n    transaction.commit()\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The improvement of this technique is minimal, but observable as ",(0,s.jsx)(n.a,{href:"https://nolanlawson.com/2021/08/22/speeding-up-indexeddb-reads-and-writes/",children:"these tests"})," show."]}),"\n",(0,s.jsx)(n.h2,{id:"in-memory-on-top-of-indexeddb",children:"In-Memory on top of IndexedDB"}),"\n",(0,s.jsxs)(n.p,{children:["To prevent transaction handling and to fix the performance problems, we need to stop using IndexedDB as a database. Instead all data is loaded into the memory on the initial page load. Here all reads and writes happen in memory which is about 100x faster. Only some time after a write occurred, the memory state is persisted into IndexedDB with a ",(0,s.jsx)(n.strong,{children:"single write transaction"}),". In this scenario IndexedDB is used as a filesystem, not as a database."]}),"\n",(0,s.jsx)(n.p,{children:"There are some libraries that already do that:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["LokiJS with the ",(0,s.jsx)(n.a,{href:"https://techfort.github.io/LokiJS/LokiIndexedAdapter.html",children:"IndexedDB Adapter"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/jlongster/absurd-sql",children:"Absurd-SQL"})}),"\n",(0,s.jsxs)(n.li,{children:["SQL.js with the ",(0,s.jsx)(n.a,{href:"https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api-idbfs",children:"empscripten Filesystem API"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://duckdb.org/2021/10/29/duckdb-wasm.html",children:"DuckDB Wasm"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"in-memory-persistence",children:"In-Memory: Persistence"}),"\n",(0,s.jsxs)(n.p,{children:["One downside of not directly using IndexedDB, is that your data is not persistent all the time. And when the JavaScript process exists without having persisted to IndexedDB, data can be lost. To prevent this from happening, we have to ensure that the in-memory state is written down to the disc. One point is make persisting as fast as possible. LokiJS for example has the ",(0,s.jsx)(n.code,{children:"incremental-indexeddb-adapter"})," which only saves new writes to the disc instead of persisting the whole state. Another point is to run the persisting at the correct point in time. For example the RxDB ",(0,s.jsx)(n.a,{href:"https://rxdb.info/rx-storage-lokijs.html",children:"LokiJS storage"})," persists in the following situations:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When the database is idle and no write or query is running. In that time we can persist the state if any new writes appeared before."}),"\n",(0,s.jsxs)(n.li,{children:["When the ",(0,s.jsx)(n.code,{children:"window"})," fires the ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload",children:"beforeunload event"})," we can assume that the JavaScript process is exited any moment and we have to persist the state. After ",(0,s.jsx)(n.code,{children:"beforeunload"})," there are several seconds time which are sufficient to store all new changes. This has shown to work quite reliable."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The only missing event that can happen is when the browser exists unexpectedly like when it crashes or when the power of the computer is shut of."}),"\n",(0,s.jsx)(n.h3,{id:"in-memory-multi-tab-support",children:"In-Memory: Multi Tab Support"}),"\n",(0,s.jsx)(n.p,{children:"One big difference between a web application and a 'normal' app, is that your users can use the app in multiple browser tabs at the same time. But when you have all database state in memory and only periodically write it to disc, multiple browser tabs could overwrite each other and you would loose data. This might not be a problem when you rely on a client-server replication, because the lost data might already be replicated with the backend and therefore with the other tabs. But this would not work when the client is offline."}),"\n",(0,s.jsxs)(n.p,{children:["The ideal way to solve that problem, is to use a ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en/docs/Web/API/SharedWorker",children:"SharedWorker"}),". A SharedWorker is like a ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en/docs/Web/API/Web_Workers_API",children:"WebWorker"})," that runs its own JavaScript process only that the SharedWorker is shared between multiple contexts. You could create the database in the SharedWorker and then all browser tabs could request the Worker for data instead of having their own database. But unfortunately the SharedWorker API does ",(0,s.jsx)(n.a,{href:"https://caniuse.com/sharedworkers",children:"not work"})," in all browsers. Safari ",(0,s.jsx)(n.a,{href:"https://bugs.webkit.org/show_bug.cgi?id=140344",children:"dropped"})," its support and InternetExplorer or Android Chrome, never adopted it. Also it cannot be polyfilled. ",(0,s.jsx)(n.strong,{children:"UPDATE:"})," ",(0,s.jsx)(n.a,{href:"https://developer.apple.com/safari/technology-preview/release-notes/",children:"Apple added SharedWorkers back in Safari 142"})]}),"\n",(0,s.jsxs)(n.p,{children:["Instead, we could use the ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API",children:"BroadcastChannel API"})," to communicate between tabs and then apply a ",(0,s.jsx)(n.a,{href:"https://github.com/pubkey/broadcast-channel#using-the-leaderelection",children:"leader election"})," between them. The leader election ensures that, no matter how many tabs are open, always one tab is the ",(0,s.jsx)(n.code,{children:"Leader"}),"."]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"./files/leader-election.gif",alt:"Leader Election",width:"500"})}),"\n",(0,s.jsx)(n.p,{children:"The disadvantage is that the leader election process takes some time on the initial page load (about 150 milliseconds). Also the leader election can break when a JavaScript process is fully blocked for a longer time. When this happens, a good way is to just reload the browser tab to restart the election process."}),"\n",(0,s.jsx)(n.h2,{id:"further-read",children:"Further read"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/pubkey/client-side-databases",children:"Offline First Database Comparison"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nolanlawson.com/2021/08/22/speeding-up-indexeddb-reads-and-writes/",children:"Speeding up IndexedDB reads and writes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://hackaday.com/2021/08/24/sqlite-on-the-web-absurd-sql/",children:"SQLITE ON THE WEB: ABSURD-SQL"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://anita-app.com/blog/articles/sqlite-in-a-pwa-with-file-system-access-api.html",children:"SQLite in a PWA with FileSystemAccessAPI"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://ravendb.net/articles/re-why-indexeddb-is-slow-and-what-to-use-instead",children:"Response to this article by Oren Eini"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);