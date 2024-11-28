"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[9257],{6224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>h,toc:()=>m});var n=a(4848),o=a(8453);const r={UT1:"given name is no string or empty",UT2:"collection- and database-names must match the regex to be compatible with couchdb databases.\n    See https://neighbourhood.ie/blog/2020/10/13/everything-you-need-to-know-about-couchdb-database-names/\n    info: if your database-name specifies a folder, the name must contain the slash-char '/' or '\\'",UT3:"replication-direction must either be push or pull or both. But not none",UT4:"given leveldown is no valid adapter",UT5:"keyCompression is set to true in the schema but no key-compression handler is used in the storage",UT6:"schema contains encrypted fields but no encryption handler is used in the storage",UT7:"attachments.compression is enabled but no attachment-compression plugin is used",PL1:"Given plugin is not RxDB plugin.",PL3:"A plugin with the same name was already added but it was not the exact same JavaScript object",P2:"bulkWrite() cannot be called with an empty array",QU1:"RxQuery._execOverDatabase(): op not known",QU4:"RxQuery.regex(): You cannot use .regex() on the primary field",QU5:"RxQuery.sort(): does not work because key is not defined in the schema",QU6:"RxQuery.limit(): cannot be called on .findOne()",QU9:"throwIfMissing can only be used in findOne queries",QU10:"result empty and throwIfMissing: true",QU11:"RxQuery: no valid query params given",QU12:"Given index is not in schema",QU13:"A top level field of the query is not included in the schema",QU14:"Running a count() query in slow mode is now allowed. Either run a count() query with a selector that fully matches an index or set allowSlowCount=true when calling the createRxDatabase",QU15:"For count queries it is not allowed to use skip or limit",QU16:"$regex queries must be defined by a string, not an RegExp instance. This is because RegExp objects cannot be JSON stringified and also they are mutable which would be dangerous",QU17:"Chained queries cannot be used on findByIds() RxQuery instances",QU18:"Malformated query result data. This likely happens because you create a OPFS-storage RxDatabase inside of a worker but did not set the usesRxDatabaseInWorker setting. https://rxdb.info/rx-storage-opfs.html#setting-usesrxdatabaseinworker-when-a-rxdatabase-is-also-used-inside-of-the-worker ",MQ1:"path must be a string or object",MQ2:"Invalid argument",MQ3:"Invalid sort() argument. Must be a string, object, or array",MQ4:"Invalid argument. Expected instanceof mquery or plain object",MQ5:"method must be used after where() when called with these arguments",MQ6:"Can't mix sort syntaxes. Use either array or object | .sort([['field', 1], ['test', -1]]) | .sort({ field: 1, test: -1 })",MQ7:"Invalid sort value",MQ8:"Can't mix sort syntaxes. Use either array or object",DB1:"RxDocument.prepare(): another instance on this adapter has a different password",DB2:"RxDatabase.addCollections(): collection-names cannot start with underscore _",DB3:"RxDatabase.addCollections(): collection already exists. use myDatabase[collectionName] to get it",DB4:"RxDatabase.addCollections(): schema is missing",DB5:"RxDatabase.addCollections(): collection-name not allowed",DB6:"RxDatabase.addCollections(): another instance created this collection with a different schema. Read this https://rxdb.info/questions-answers.html?console=qa#cant-change-the-schema ",DB8:"createRxDatabase(): A RxDatabase with the same name and adapter already exists.\nMake sure to use this combination only once or set ignoreDuplicate to true if you do this intentional-\nThis often happens in react projects with hot reload that reloads the code without reloading the process.",DB11:"createRxDatabase(): Invalid db-name, folder-paths must not have an ending slash",DB12:"RxDatabase.addCollections(): could not write to internal store",DB13:"createRxDatabase(): Invalid db-name or collection name, name contains the dollar sign",DB14:"no custom reactivity factory added on database creation",COL1:"RxDocument.insert() You cannot insert an existing document",COL2:"RxCollection.insert() fieldName ._id can only be used as primaryKey",COL3:"RxCollection.upsert() does not work without primary",COL4:"RxCollection.incrementalUpsert() does not work without primary",COL5:"RxCollection.find() if you want to search by _id, use .findOne(_id)",COL6:"RxCollection.findOne() needs a queryObject or string",COL7:"hook must be a function",COL8:"hooks-when not known",COL9:"RxCollection.addHook() hook-name not known",COL10:"RxCollection .postCreate-hooks cannot be async",COL11:"migrationStrategies must be an object",COL12:"A migrationStrategy is missing or too much",COL13:"migrationStrategy must be a function",COL14:"given static method-name is not a string",COL15:"static method-names cannot start with underscore _",COL16:"given static method is not a function",COL17:"RxCollection.ORM: statics-name not allowed",COL18:"collection-method not allowed because fieldname is in the schema",COL20:"Storage write error",COL21:"The RxCollection is destroyed or removed already, either from this JavaScript realm or from another, like a browser tab",CONFLICT:"Document update conflict. When changing a document you must work on the previous revision",COL22:".bulkInsert() and .bulkUpsert() cannot be run with multiple documents that have the same primary key",DOC1:"RxDocument.get$ cannot get observable of in-array fields because order cannot be guessed",DOC2:"cannot observe primary path",DOC3:"final fields cannot be observed",DOC4:"RxDocument.get$ cannot observe a non-existed field",DOC5:"RxDocument.populate() cannot populate a non-existed field",DOC6:"RxDocument.populate() cannot populate because path has no ref",DOC7:"RxDocument.populate() ref-collection not in database",DOC8:"RxDocument.set(): primary-key cannot be modified",DOC9:"final fields cannot be modified",DOC10:"RxDocument.set(): cannot set childpath when rootPath not selected",DOC11:"RxDocument.save(): can't save deleted document",DOC13:"RxDocument.remove(): Document is already deleted",DOC14:"RxDocument.destroy() does not exist",DOC15:"query cannot be an array",DOC16:"Since version 8.0.0 RxDocument.set() can only be called on temporary RxDocuments",DOC17:"Since version 8.0.0 RxDocument.save() can only be called on non-temporary documents",DOC18:"Document property for composed primary key is missing",DOC19:"Value of primary key(s) cannot be changed",DOC20:"PrimaryKey missing",DOC21:"PrimaryKey must be equal to PrimaryKey.trim(). It cannot start or end with a whitespace",DOC22:"PrimaryKey must not contain a linebreak",DOC23:'PrimaryKey must not contain a double-quote ["]',DOC24:"Given document data could not be structured cloned. This happens if you pass non-plain-json data into it, like a Date() object or a Function. In vue.js this happens if you use ref() on the document data which transforms it into a Proxy object.",DM1:"migrate() Migration has already run",DM2:"migration of document failed final document does not match final schema",DM3:"migration already running",DM4:"Migration errored",DM5:"Cannot open database state with newer RxDB version. You have to migrate your database state first. See https://rxdb.info/migration-storage.html?console=storage ",AT1:"to use attachments, please define this in your schema",EN1:"password is not valid",EN2:"validatePassword: min-length of password not complied",EN3:"Schema contains encrypted properties but no password is given",EN4:"Password not valid",JD1:"You must create the collections before you can import their data",JD2:"RxCollection.importJSON(): the imported json relies on a different schema",JD3:"RxCollection.importJSON(): json.passwordHash does not match the own",LD1:"RxDocument.allAttachments$ can't use attachments on local documents",LD2:"RxDocument.get(): objPath must be a string",LD3:"RxDocument.get$ cannot get observable of in-array fields because order cannot be guessed",LD4:"cannot observe primary path",LD5:"RxDocument.set() id cannot be modified",LD6:"LocalDocument: Function is not usable on local documents",LD7:"Local document already exists",LD8:"localDocuments not activated. Set localDocuments=true on creation, when you want to store local documents on the RxDatabase or RxCollection.",RC1:"Replication: already added",RC2:"replicateCouchDB() query must be from the same RxCollection",RC4:"RxCouchDBReplicationState.awaitInitialReplication() cannot await initial replication when live: true",RC5:"RxCouchDBReplicationState.awaitInitialReplication() cannot await initial replication if multiInstance because the replication might run on another instance",RC6:"syncFirestore() serverTimestampField MUST NOT be part of the collections schema and MUST NOT be nested.",RC7:"SimplePeer requires to have process.nextTick() polyfilled, see https://rxdb.info/replication-webrtc.html?console=webrtc ",RC_PULL:"RxReplication pull handler threw an error - see .errors for more details",RC_STREAM:"RxReplication pull stream$ threw an error - see .errors for more details",RC_PUSH:"RxReplication push handler threw an error - see .errors for more details",RC_PUSH_NO_AR:"RxReplication push handler did not return an array with the conflicts",RC_WEBRTC_PEER:"RxReplication WebRTC Peer has error",RC_COUCHDB_1:"replicateCouchDB() url must end with a slash like 'https://example.com/mydatabase/'",RC_COUCHDB_2:"replicateCouchDB() did not get valid result with rows.",RC_OUTDATED:"Outdated client, update required. Replication was canceled",RC_UNAUTHORIZED:"Unauthorized client, update the replicationState.headers to set correct auth data",RC_FORBIDDEN:"Client behaves wrong so the replication was canceled. Mostly happens if the client tries to write data that it is not allowed to",SC1:"fieldnames do not match the regex",SC2:"SchemaCheck: name 'item' reserved for array-fields",SC3:"SchemaCheck: fieldname has a ref-array but items-type is not string",SC4:"SchemaCheck: fieldname has a ref but is not type string, [string,null] or array<string>",SC6:"SchemaCheck: primary can only be defined at top-level",SC7:"SchemaCheck: default-values can only be defined at top-level",SC8:"SchemaCheck: first level-fields cannot start with underscore _",SC10:"SchemaCheck: schema defines ._rev, this will be done automatically",SC11:"SchemaCheck: schema needs a number >=0 as version",SC13:"SchemaCheck: primary is always index, do not declare it as index",SC14:"SchemaCheck: primary is always unique, do not declare it as index",SC15:"SchemaCheck: primary cannot be encrypted",SC16:"SchemaCheck: primary must have type: string",SC17:"SchemaCheck: top-level fieldname is not allowed",SC18:"SchemaCheck: indexes must be an array",SC19:"SchemaCheck: indexes must contain strings or arrays of strings",SC20:"SchemaCheck: indexes.array must contain strings",SC21:"SchemaCheck: given index is not defined in schema",SC22:"SchemaCheck: given indexKey is not type:string",SC23:"SchemaCheck: fieldname is not allowed",SC24:"SchemaCheck: required fields must be set via array. See https://spacetelescope.github.io/understanding-json-schema/reference/object.html#required",SC25:"SchemaCheck: compoundIndexes needs to be specified in the indexes field",SC26:"SchemaCheck: indexes needs to be specified at collection schema level",SC27:"SchemaCheck: encrypted fields need to be specified at collection schema level",SC28:"SchemaCheck: encrypted fields is not defined in the schema",SC29:"SchemaCheck: missing object key 'properties'",SC30:"SchemaCheck: primaryKey is required",SC32:"SchemaCheck: primary field must have the type string/number/integer",SC33:"SchemaCheck: used primary key is not a property in the schema",SC34:"Fields of type string that are used in an index, must have set the maxLength attribute in the schema",SC35:"Fields of type number/integer that are used in an index, must have set the multipleOf attribute in the schema",SC36:"A field of this type cannot be used as index",SC37:"Fields of type number that are used in an index, must have set the minimum and maximum attribute in the schema",SC38:"Fields of type boolean that are used in an index, must be required in the schema",SC39:"The primary key must have the maxLength attribute set",SC40:"$ref fields in the schema are not allowed. RxDB cannot resolve related schemas because it would have a negative performance impact.It would have to run http requests on runtime. $ref fields should be resolved during build time.",SC41:"minimum, maximum and maxLength values for indexes must be real numbers, not Infinity or -Infinity",VD1:"Sub-schema not found, does the schemaPath exists in your schema?",VD2:"object does not match schema",S1:"You cannot create collections after calling RxDatabase.server()",GQL1:"GraphQL replication: cannot find sub schema by key",GQL3:"GraphQL replication: pull returns more documents then batchSize",CRDT1:"CRDT operations cannot be used because the crdt options are not set in the schema.",CRDT2:"RxDocument.incrementalModify() cannot be used when CRDTs are activated.",CRDT3:"To use CRDTs you MUST NOT set a conflictHandler because the default CRDT conflict handler must be used",SNH:"This should never happen"};var s=a(6347);const i=Object.entries(r);function c(){const e=(0,s.zy)();console.dir(r);const t={"":{boxSizing:"border-box"},ul:{listStyleType:"none"},li:{borderStyle:"solid",borderWidth:1,height:"auto",borderColor:"var(--color-top)",padding:32,borderRadius:14,backgroundColor:"var(--bg-color-dark)",justifyContent:"space-between",gap:48,margin:10,marginBottom:20},liHighlight:{boxShadow:"2px 2px 13px var(--color-top), -2px -1px 14px var(--color-top)"},errorCode:{fontSize:"1.3em",lineHeight:"130%",margin:"0 0 8px"},innerUl:{marginTop:14}};return(0,n.jsx)("ul",{style:t.ul,children:i.map((a=>{let[o,r]=a;return(0,n.jsxs)("li",{id:o,style:e.hash==="#"+o?{...t.li,...t.liHighlight}:t.li,children:[(0,n.jsxs)("h6",{style:t.errorCode,children:["Code: ",(0,n.jsx)("a",{href:"#"+o,children:o})]}),(s=r,(s+="").charAt(0).toUpperCase()+s.substr(1)),(0,n.jsxs)("ul",{style:t.innerUl,children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/pubkey/rxdb/search?q="+o+"&type=code",target:"_blank",children:"Search In Code"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/pubkey/rxdb/search?q="+o+"&type=issues",target:"_blank",children:"Search In Issues"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/chat",target:"_blank",children:"Search In Chat"})})]})]},o);var s}))})}const l={title:"Error Messages",slug:"errors.html"},d="RxDB Error Messages",h={id:"errors",title:"Error Messages",description:"When RxDB has an error, an RxError object is thrown instead of a normal JavaScript Error. This RxError contains additional properties such as a code field and parameters. By default the full human readable error messages are not included into the RxDB build. This is because error messages have a high entropy and cannot be compressed well. Therefore only an error message with the correct error-code and parameters is thrown but without the full text.",source:"@site/docs/errors.md",sourceDirName:".",slug:"/errors.html",permalink:"/errors.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Error Messages",slug:"errors.html"},sidebar:"tutorialSidebar",previous:{title:"RxDB NoSQL Performance Tips",permalink:"/nosql-performance-tips.html"},next:{title:"Third Party Plugins",permalink:"/third-party-plugins.html"}},u={},m=[{value:"All RxDB error messages",id:"all-rxdb-error-messages",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"rxdb-error-messages",children:"RxDB Error Messages"}),"\n",(0,n.jsxs)(t.p,{children:["When RxDB has an error, an ",(0,n.jsx)(t.code,{children:"RxError"})," object is thrown instead of a normal JavaScript ",(0,n.jsx)(t.code,{children:"Error"}),". This ",(0,n.jsx)(t.code,{children:"RxError"})," contains additional properties such as a ",(0,n.jsx)(t.code,{children:"code"})," field and ",(0,n.jsx)(t.code,{children:"parameters"}),". By default the full human readable error messages are not included into the RxDB build. This is because error messages have a high entropy and cannot be compressed well. Therefore only an error message with the correct error-code and parameters is thrown but without the full text.\nWhen you enable the ",(0,n.jsx)(t.a,{href:"/dev-mode.html",children:"DevMode Plugin"})," the full error messages are added to the ",(0,n.jsx)(t.code,{children:"RxError"}),". This should only be done in development, not in production builds to keep a small build size."]}),"\n",(0,n.jsx)(t.h2,{id:"all-rxdb-error-messages",children:"All RxDB error messages"}),"\n","\n","\n",(0,n.jsx)(c,{})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var n=a(6540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);