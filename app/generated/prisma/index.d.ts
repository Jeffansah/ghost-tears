
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Move
 * 
 */
export type Move = $Result.DefaultSelection<Prisma.$MovePayload>
/**
 * Model HeadToHead
 * 
 */
export type HeadToHead = $Result.DefaultSelection<Prisma.$HeadToHeadPayload>
/**
 * Model WordCategory
 * 
 */
export type WordCategory = $Result.DefaultSelection<Prisma.$WordCategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GameStatus: {
  WAITING: 'WAITING',
  PLAYING: 'PLAYING',
  CHALLENGED: 'CHALLENGED',
  ENDED: 'ENDED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]

}

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.move`: Exposes CRUD operations for the **Move** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moves
    * const moves = await prisma.move.findMany()
    * ```
    */
  get move(): Prisma.MoveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.headToHead`: Exposes CRUD operations for the **HeadToHead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeadToHeads
    * const headToHeads = await prisma.headToHead.findMany()
    * ```
    */
  get headToHead(): Prisma.HeadToHeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wordCategory`: Exposes CRUD operations for the **WordCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WordCategories
    * const wordCategories = await prisma.wordCategory.findMany()
    * ```
    */
  get wordCategory(): Prisma.WordCategoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Game: 'Game',
    Move: 'Move',
    HeadToHead: 'HeadToHead',
    WordCategory: 'WordCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "game" | "move" | "headToHead" | "wordCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Move: {
        payload: Prisma.$MovePayload<ExtArgs>
        fields: Prisma.MoveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          findFirst: {
            args: Prisma.MoveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          findMany: {
            args: Prisma.MoveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          create: {
            args: Prisma.MoveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          createMany: {
            args: Prisma.MoveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          delete: {
            args: Prisma.MoveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          update: {
            args: Prisma.MoveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          deleteMany: {
            args: Prisma.MoveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          upsert: {
            args: Prisma.MoveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          aggregate: {
            args: Prisma.MoveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMove>
          }
          groupBy: {
            args: Prisma.MoveGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoveGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoveCountArgs<ExtArgs>
            result: $Utils.Optional<MoveCountAggregateOutputType> | number
          }
        }
      }
      HeadToHead: {
        payload: Prisma.$HeadToHeadPayload<ExtArgs>
        fields: Prisma.HeadToHeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeadToHeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadToHeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeadToHeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadToHeadPayload>
          }
          findFirst: {
            args: Prisma.HeadToHeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadToHeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeadToHeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadToHeadPayload>
          }
          findMany: {
            args: Prisma.HeadToHeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadToHeadPayload>[]
          }
          create: {
            args: Prisma.HeadToHeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadToHeadPayload>
          }
          createMany: {
            args: Prisma.HeadToHeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeadToHeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadToHeadPayload>[]
          }
          delete: {
            args: Prisma.HeadToHeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadToHeadPayload>
          }
          update: {
            args: Prisma.HeadToHeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadToHeadPayload>
          }
          deleteMany: {
            args: Prisma.HeadToHeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeadToHeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeadToHeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadToHeadPayload>[]
          }
          upsert: {
            args: Prisma.HeadToHeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadToHeadPayload>
          }
          aggregate: {
            args: Prisma.HeadToHeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeadToHead>
          }
          groupBy: {
            args: Prisma.HeadToHeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeadToHeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeadToHeadCountArgs<ExtArgs>
            result: $Utils.Optional<HeadToHeadCountAggregateOutputType> | number
          }
        }
      }
      WordCategory: {
        payload: Prisma.$WordCategoryPayload<ExtArgs>
        fields: Prisma.WordCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordCategoryPayload>
          }
          findFirst: {
            args: Prisma.WordCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordCategoryPayload>
          }
          findMany: {
            args: Prisma.WordCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordCategoryPayload>[]
          }
          create: {
            args: Prisma.WordCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordCategoryPayload>
          }
          createMany: {
            args: Prisma.WordCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordCategoryPayload>[]
          }
          delete: {
            args: Prisma.WordCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordCategoryPayload>
          }
          update: {
            args: Prisma.WordCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordCategoryPayload>
          }
          deleteMany: {
            args: Prisma.WordCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordCategoryPayload>[]
          }
          upsert: {
            args: Prisma.WordCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordCategoryPayload>
          }
          aggregate: {
            args: Prisma.WordCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWordCategory>
          }
          groupBy: {
            args: Prisma.WordCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<WordCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    game?: GameOmit
    move?: MoveOmit
    headToHead?: HeadToHeadOmit
    wordCategory?: WordCategoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gamesAsPlayer1: number
    gamesAsPlayer2: number
    gamesWon: number
    headToHeadAsPlayer1: number
    headToHeadAsPlayer2: number
    moves: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gamesAsPlayer1?: boolean | UserCountOutputTypeCountGamesAsPlayer1Args
    gamesAsPlayer2?: boolean | UserCountOutputTypeCountGamesAsPlayer2Args
    gamesWon?: boolean | UserCountOutputTypeCountGamesWonArgs
    headToHeadAsPlayer1?: boolean | UserCountOutputTypeCountHeadToHeadAsPlayer1Args
    headToHeadAsPlayer2?: boolean | UserCountOutputTypeCountHeadToHeadAsPlayer2Args
    moves?: boolean | UserCountOutputTypeCountMovesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHeadToHeadAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeadToHeadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHeadToHeadAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeadToHeadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMovesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    moves: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moves?: boolean | GameCountOutputTypeCountMovesArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountMovesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    wins: number | null
    losses: number | null
  }

  export type UserSumAggregateOutputType = {
    wins: number | null
    losses: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    username: string | null
    wins: number | null
    losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    username: string | null
    wins: number | null
    losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    username: number
    wins: number
    losses: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    wins?: true
    losses?: true
  }

  export type UserSumAggregateInputType = {
    wins?: true
    losses?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    username?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    username?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    username?: true
    wins?: true
    losses?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    username: string
    wins: number
    losses: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    username?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gamesAsPlayer1?: boolean | User$gamesAsPlayer1Args<ExtArgs>
    gamesAsPlayer2?: boolean | User$gamesAsPlayer2Args<ExtArgs>
    gamesWon?: boolean | User$gamesWonArgs<ExtArgs>
    headToHeadAsPlayer1?: boolean | User$headToHeadAsPlayer1Args<ExtArgs>
    headToHeadAsPlayer2?: boolean | User$headToHeadAsPlayer2Args<ExtArgs>
    moves?: boolean | User$movesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    username?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    username?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    username?: boolean
    wins?: boolean
    losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "username" | "wins" | "losses" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gamesAsPlayer1?: boolean | User$gamesAsPlayer1Args<ExtArgs>
    gamesAsPlayer2?: boolean | User$gamesAsPlayer2Args<ExtArgs>
    gamesWon?: boolean | User$gamesWonArgs<ExtArgs>
    headToHeadAsPlayer1?: boolean | User$headToHeadAsPlayer1Args<ExtArgs>
    headToHeadAsPlayer2?: boolean | User$headToHeadAsPlayer2Args<ExtArgs>
    moves?: boolean | User$movesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gamesAsPlayer1: Prisma.$GamePayload<ExtArgs>[]
      gamesAsPlayer2: Prisma.$GamePayload<ExtArgs>[]
      gamesWon: Prisma.$GamePayload<ExtArgs>[]
      headToHeadAsPlayer1: Prisma.$HeadToHeadPayload<ExtArgs>[]
      headToHeadAsPlayer2: Prisma.$HeadToHeadPayload<ExtArgs>[]
      moves: Prisma.$MovePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      username: string
      wins: number
      losses: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gamesAsPlayer1<T extends User$gamesAsPlayer1Args<ExtArgs> = {}>(args?: Subset<T, User$gamesAsPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamesAsPlayer2<T extends User$gamesAsPlayer2Args<ExtArgs> = {}>(args?: Subset<T, User$gamesAsPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamesWon<T extends User$gamesWonArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesWonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    headToHeadAsPlayer1<T extends User$headToHeadAsPlayer1Args<ExtArgs> = {}>(args?: Subset<T, User$headToHeadAsPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    headToHeadAsPlayer2<T extends User$headToHeadAsPlayer2Args<ExtArgs> = {}>(args?: Subset<T, User$headToHeadAsPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moves<T extends User$movesArgs<ExtArgs> = {}>(args?: Subset<T, User$movesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly wins: FieldRef<"User", 'Int'>
    readonly losses: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.gamesAsPlayer1
   */
  export type User$gamesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.gamesAsPlayer2
   */
  export type User$gamesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.gamesWon
   */
  export type User$gamesWonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.headToHeadAsPlayer1
   */
  export type User$headToHeadAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
    where?: HeadToHeadWhereInput
    orderBy?: HeadToHeadOrderByWithRelationInput | HeadToHeadOrderByWithRelationInput[]
    cursor?: HeadToHeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeadToHeadScalarFieldEnum | HeadToHeadScalarFieldEnum[]
  }

  /**
   * User.headToHeadAsPlayer2
   */
  export type User$headToHeadAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
    where?: HeadToHeadWhereInput
    orderBy?: HeadToHeadOrderByWithRelationInput | HeadToHeadOrderByWithRelationInput[]
    cursor?: HeadToHeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeadToHeadScalarFieldEnum | HeadToHeadScalarFieldEnum[]
  }

  /**
   * User.moves
   */
  export type User$movesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    where?: MoveWhereInput
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    cursor?: MoveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    status: $Enums.GameStatus | null
    currentWord: string | null
    currentTurn: string | null
    player1Id: string | null
    player2Id: string | null
    winnerId: string | null
    wordListCategory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    status: $Enums.GameStatus | null
    currentWord: string | null
    currentTurn: string | null
    player1Id: string | null
    player2Id: string | null
    winnerId: string | null
    wordListCategory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    status: number
    currentWord: number
    currentTurn: number
    player1Id: number
    player2Id: number
    player1GhostTears: number
    player2GhostTears: number
    winnerId: number
    wordListCategory: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    status?: true
    currentWord?: true
    currentTurn?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    wordListCategory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    status?: true
    currentWord?: true
    currentTurn?: true
    player1Id?: true
    player2Id?: true
    winnerId?: true
    wordListCategory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    status?: true
    currentWord?: true
    currentTurn?: true
    player1Id?: true
    player2Id?: true
    player1GhostTears?: true
    player2GhostTears?: true
    winnerId?: true
    wordListCategory?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1Id: string
    player2Id: string | null
    player1GhostTears: string[]
    player2GhostTears: string[]
    winnerId: string | null
    wordListCategory: string
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    currentWord?: boolean
    currentTurn?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1GhostTears?: boolean
    player2GhostTears?: boolean
    winnerId?: boolean
    wordListCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Game$player2Args<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
    moves?: boolean | Game$movesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    currentWord?: boolean
    currentTurn?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1GhostTears?: boolean
    player2GhostTears?: boolean
    winnerId?: boolean
    wordListCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Game$player2Args<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    currentWord?: boolean
    currentTurn?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1GhostTears?: boolean
    player2GhostTears?: boolean
    winnerId?: boolean
    wordListCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Game$player2Args<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    status?: boolean
    currentWord?: boolean
    currentTurn?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1GhostTears?: boolean
    player2GhostTears?: boolean
    winnerId?: boolean
    wordListCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "currentWord" | "currentTurn" | "player1Id" | "player2Id" | "player1GhostTears" | "player2GhostTears" | "winnerId" | "wordListCategory" | "createdAt" | "updatedAt", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Game$player2Args<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
    moves?: boolean | Game$movesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Game$player2Args<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Game$player2Args<ExtArgs>
    winner?: boolean | Game$winnerArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      player1: Prisma.$UserPayload<ExtArgs>
      player2: Prisma.$UserPayload<ExtArgs> | null
      winner: Prisma.$UserPayload<ExtArgs> | null
      moves: Prisma.$MovePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.GameStatus
      currentWord: string
      currentTurn: string
      player1Id: string
      player2Id: string | null
      player1GhostTears: string[]
      player2GhostTears: string[]
      winnerId: string | null
      wordListCategory: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends Game$player2Args<ExtArgs> = {}>(args?: Subset<T, Game$player2Args<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    winner<T extends Game$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Game$winnerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    moves<T extends Game$movesArgs<ExtArgs> = {}>(args?: Subset<T, Game$movesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly status: FieldRef<"Game", 'GameStatus'>
    readonly currentWord: FieldRef<"Game", 'String'>
    readonly currentTurn: FieldRef<"Game", 'String'>
    readonly player1Id: FieldRef<"Game", 'String'>
    readonly player2Id: FieldRef<"Game", 'String'>
    readonly player1GhostTears: FieldRef<"Game", 'String[]'>
    readonly player2GhostTears: FieldRef<"Game", 'String[]'>
    readonly winnerId: FieldRef<"Game", 'String'>
    readonly wordListCategory: FieldRef<"Game", 'String'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.player2
   */
  export type Game$player2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Game.winner
   */
  export type Game$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Game.moves
   */
  export type Game$movesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    where?: MoveWhereInput
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    cursor?: MoveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Move
   */

  export type AggregateMove = {
    _count: MoveCountAggregateOutputType | null
    _min: MoveMinAggregateOutputType | null
    _max: MoveMaxAggregateOutputType | null
  }

  export type MoveMinAggregateOutputType = {
    id: string | null
    gameId: string | null
    playerId: string | null
    letter: string | null
    word: string | null
    isChallenge: boolean | null
    challengeResult: boolean | null
    createdAt: Date | null
  }

  export type MoveMaxAggregateOutputType = {
    id: string | null
    gameId: string | null
    playerId: string | null
    letter: string | null
    word: string | null
    isChallenge: boolean | null
    challengeResult: boolean | null
    createdAt: Date | null
  }

  export type MoveCountAggregateOutputType = {
    id: number
    gameId: number
    playerId: number
    letter: number
    word: number
    isChallenge: number
    challengeResult: number
    createdAt: number
    _all: number
  }


  export type MoveMinAggregateInputType = {
    id?: true
    gameId?: true
    playerId?: true
    letter?: true
    word?: true
    isChallenge?: true
    challengeResult?: true
    createdAt?: true
  }

  export type MoveMaxAggregateInputType = {
    id?: true
    gameId?: true
    playerId?: true
    letter?: true
    word?: true
    isChallenge?: true
    challengeResult?: true
    createdAt?: true
  }

  export type MoveCountAggregateInputType = {
    id?: true
    gameId?: true
    playerId?: true
    letter?: true
    word?: true
    isChallenge?: true
    challengeResult?: true
    createdAt?: true
    _all?: true
  }

  export type MoveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Move to aggregate.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moves
    **/
    _count?: true | MoveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoveMaxAggregateInputType
  }

  export type GetMoveAggregateType<T extends MoveAggregateArgs> = {
        [P in keyof T & keyof AggregateMove]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMove[P]>
      : GetScalarType<T[P], AggregateMove[P]>
  }




  export type MoveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveWhereInput
    orderBy?: MoveOrderByWithAggregationInput | MoveOrderByWithAggregationInput[]
    by: MoveScalarFieldEnum[] | MoveScalarFieldEnum
    having?: MoveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoveCountAggregateInputType | true
    _min?: MoveMinAggregateInputType
    _max?: MoveMaxAggregateInputType
  }

  export type MoveGroupByOutputType = {
    id: string
    gameId: string
    playerId: string
    letter: string
    word: string
    isChallenge: boolean
    challengeResult: boolean | null
    createdAt: Date
    _count: MoveCountAggregateOutputType | null
    _min: MoveMinAggregateOutputType | null
    _max: MoveMaxAggregateOutputType | null
  }

  type GetMoveGroupByPayload<T extends MoveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoveGroupByOutputType[P]>
            : GetScalarType<T[P], MoveGroupByOutputType[P]>
        }
      >
    >


  export type MoveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    playerId?: boolean
    letter?: boolean
    word?: boolean
    isChallenge?: boolean
    challengeResult?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    playerId?: boolean
    letter?: boolean
    word?: boolean
    isChallenge?: boolean
    challengeResult?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    playerId?: boolean
    letter?: boolean
    word?: boolean
    isChallenge?: boolean
    challengeResult?: boolean
    createdAt?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectScalar = {
    id?: boolean
    gameId?: boolean
    playerId?: boolean
    letter?: boolean
    word?: boolean
    isChallenge?: boolean
    challengeResult?: boolean
    createdAt?: boolean
  }

  export type MoveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "playerId" | "letter" | "word" | "isChallenge" | "challengeResult" | "createdAt", ExtArgs["result"]["move"]>
  export type MoveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MovePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Move"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
      player: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameId: string
      playerId: string
      letter: string
      word: string
      isChallenge: boolean
      challengeResult: boolean | null
      createdAt: Date
    }, ExtArgs["result"]["move"]>
    composites: {}
  }

  type MoveGetPayload<S extends boolean | null | undefined | MoveDefaultArgs> = $Result.GetResult<Prisma.$MovePayload, S>

  type MoveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoveCountAggregateInputType | true
    }

  export interface MoveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Move'], meta: { name: 'Move' } }
    /**
     * Find zero or one Move that matches the filter.
     * @param {MoveFindUniqueArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoveFindUniqueArgs>(args: SelectSubset<T, MoveFindUniqueArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Move that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoveFindUniqueOrThrowArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoveFindUniqueOrThrowArgs>(args: SelectSubset<T, MoveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Move that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindFirstArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoveFindFirstArgs>(args?: SelectSubset<T, MoveFindFirstArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Move that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindFirstOrThrowArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoveFindFirstOrThrowArgs>(args?: SelectSubset<T, MoveFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moves
     * const moves = await prisma.move.findMany()
     * 
     * // Get first 10 Moves
     * const moves = await prisma.move.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moveWithIdOnly = await prisma.move.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoveFindManyArgs>(args?: SelectSubset<T, MoveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Move.
     * @param {MoveCreateArgs} args - Arguments to create a Move.
     * @example
     * // Create one Move
     * const Move = await prisma.move.create({
     *   data: {
     *     // ... data to create a Move
     *   }
     * })
     * 
     */
    create<T extends MoveCreateArgs>(args: SelectSubset<T, MoveCreateArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moves.
     * @param {MoveCreateManyArgs} args - Arguments to create many Moves.
     * @example
     * // Create many Moves
     * const move = await prisma.move.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoveCreateManyArgs>(args?: SelectSubset<T, MoveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moves and returns the data saved in the database.
     * @param {MoveCreateManyAndReturnArgs} args - Arguments to create many Moves.
     * @example
     * // Create many Moves
     * const move = await prisma.move.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moves and only return the `id`
     * const moveWithIdOnly = await prisma.move.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoveCreateManyAndReturnArgs>(args?: SelectSubset<T, MoveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Move.
     * @param {MoveDeleteArgs} args - Arguments to delete one Move.
     * @example
     * // Delete one Move
     * const Move = await prisma.move.delete({
     *   where: {
     *     // ... filter to delete one Move
     *   }
     * })
     * 
     */
    delete<T extends MoveDeleteArgs>(args: SelectSubset<T, MoveDeleteArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Move.
     * @param {MoveUpdateArgs} args - Arguments to update one Move.
     * @example
     * // Update one Move
     * const move = await prisma.move.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoveUpdateArgs>(args: SelectSubset<T, MoveUpdateArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moves.
     * @param {MoveDeleteManyArgs} args - Arguments to filter Moves to delete.
     * @example
     * // Delete a few Moves
     * const { count } = await prisma.move.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoveDeleteManyArgs>(args?: SelectSubset<T, MoveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moves
     * const move = await prisma.move.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoveUpdateManyArgs>(args: SelectSubset<T, MoveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moves and returns the data updated in the database.
     * @param {MoveUpdateManyAndReturnArgs} args - Arguments to update many Moves.
     * @example
     * // Update many Moves
     * const move = await prisma.move.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moves and only return the `id`
     * const moveWithIdOnly = await prisma.move.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoveUpdateManyAndReturnArgs>(args: SelectSubset<T, MoveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Move.
     * @param {MoveUpsertArgs} args - Arguments to update or create a Move.
     * @example
     * // Update or create a Move
     * const move = await prisma.move.upsert({
     *   create: {
     *     // ... data to create a Move
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Move we want to update
     *   }
     * })
     */
    upsert<T extends MoveUpsertArgs>(args: SelectSubset<T, MoveUpsertArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveCountArgs} args - Arguments to filter Moves to count.
     * @example
     * // Count the number of Moves
     * const count = await prisma.move.count({
     *   where: {
     *     // ... the filter for the Moves we want to count
     *   }
     * })
    **/
    count<T extends MoveCountArgs>(
      args?: Subset<T, MoveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Move.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoveAggregateArgs>(args: Subset<T, MoveAggregateArgs>): Prisma.PrismaPromise<GetMoveAggregateType<T>>

    /**
     * Group by Move.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoveGroupByArgs['orderBy'] }
        : { orderBy?: MoveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Move model
   */
  readonly fields: MoveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Move.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Move model
   */
  interface MoveFieldRefs {
    readonly id: FieldRef<"Move", 'String'>
    readonly gameId: FieldRef<"Move", 'String'>
    readonly playerId: FieldRef<"Move", 'String'>
    readonly letter: FieldRef<"Move", 'String'>
    readonly word: FieldRef<"Move", 'String'>
    readonly isChallenge: FieldRef<"Move", 'Boolean'>
    readonly challengeResult: FieldRef<"Move", 'Boolean'>
    readonly createdAt: FieldRef<"Move", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Move findUnique
   */
  export type MoveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move findUniqueOrThrow
   */
  export type MoveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move findFirst
   */
  export type MoveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moves.
     */
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move findFirstOrThrow
   */
  export type MoveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moves.
     */
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move findMany
   */
  export type MoveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Moves to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move create
   */
  export type MoveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The data needed to create a Move.
     */
    data: XOR<MoveCreateInput, MoveUncheckedCreateInput>
  }

  /**
   * Move createMany
   */
  export type MoveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moves.
     */
    data: MoveCreateManyInput | MoveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Move createManyAndReturn
   */
  export type MoveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * The data used to create many Moves.
     */
    data: MoveCreateManyInput | MoveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Move update
   */
  export type MoveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The data needed to update a Move.
     */
    data: XOR<MoveUpdateInput, MoveUncheckedUpdateInput>
    /**
     * Choose, which Move to update.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move updateMany
   */
  export type MoveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moves.
     */
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyInput>
    /**
     * Filter which Moves to update
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to update.
     */
    limit?: number
  }

  /**
   * Move updateManyAndReturn
   */
  export type MoveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * The data used to update Moves.
     */
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyInput>
    /**
     * Filter which Moves to update
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Move upsert
   */
  export type MoveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The filter to search for the Move to update in case it exists.
     */
    where: MoveWhereUniqueInput
    /**
     * In case the Move found by the `where` argument doesn't exist, create a new Move with this data.
     */
    create: XOR<MoveCreateInput, MoveUncheckedCreateInput>
    /**
     * In case the Move was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoveUpdateInput, MoveUncheckedUpdateInput>
  }

  /**
   * Move delete
   */
  export type MoveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter which Move to delete.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move deleteMany
   */
  export type MoveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moves to delete
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to delete.
     */
    limit?: number
  }

  /**
   * Move without action
   */
  export type MoveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
  }


  /**
   * Model HeadToHead
   */

  export type AggregateHeadToHead = {
    _count: HeadToHeadCountAggregateOutputType | null
    _avg: HeadToHeadAvgAggregateOutputType | null
    _sum: HeadToHeadSumAggregateOutputType | null
    _min: HeadToHeadMinAggregateOutputType | null
    _max: HeadToHeadMaxAggregateOutputType | null
  }

  export type HeadToHeadAvgAggregateOutputType = {
    player1Wins: number | null
    player2Wins: number | null
  }

  export type HeadToHeadSumAggregateOutputType = {
    player1Wins: number | null
    player2Wins: number | null
  }

  export type HeadToHeadMinAggregateOutputType = {
    id: string | null
    player1Id: string | null
    player2Id: string | null
    player1Wins: number | null
    player2Wins: number | null
    lastPlayed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeadToHeadMaxAggregateOutputType = {
    id: string | null
    player1Id: string | null
    player2Id: string | null
    player1Wins: number | null
    player2Wins: number | null
    lastPlayed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeadToHeadCountAggregateOutputType = {
    id: number
    player1Id: number
    player2Id: number
    player1Wins: number
    player2Wins: number
    lastPlayed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeadToHeadAvgAggregateInputType = {
    player1Wins?: true
    player2Wins?: true
  }

  export type HeadToHeadSumAggregateInputType = {
    player1Wins?: true
    player2Wins?: true
  }

  export type HeadToHeadMinAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    player1Wins?: true
    player2Wins?: true
    lastPlayed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeadToHeadMaxAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    player1Wins?: true
    player2Wins?: true
    lastPlayed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeadToHeadCountAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    player1Wins?: true
    player2Wins?: true
    lastPlayed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeadToHeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeadToHead to aggregate.
     */
    where?: HeadToHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadToHeads to fetch.
     */
    orderBy?: HeadToHeadOrderByWithRelationInput | HeadToHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeadToHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadToHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadToHeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeadToHeads
    **/
    _count?: true | HeadToHeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeadToHeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeadToHeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeadToHeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeadToHeadMaxAggregateInputType
  }

  export type GetHeadToHeadAggregateType<T extends HeadToHeadAggregateArgs> = {
        [P in keyof T & keyof AggregateHeadToHead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeadToHead[P]>
      : GetScalarType<T[P], AggregateHeadToHead[P]>
  }




  export type HeadToHeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeadToHeadWhereInput
    orderBy?: HeadToHeadOrderByWithAggregationInput | HeadToHeadOrderByWithAggregationInput[]
    by: HeadToHeadScalarFieldEnum[] | HeadToHeadScalarFieldEnum
    having?: HeadToHeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeadToHeadCountAggregateInputType | true
    _avg?: HeadToHeadAvgAggregateInputType
    _sum?: HeadToHeadSumAggregateInputType
    _min?: HeadToHeadMinAggregateInputType
    _max?: HeadToHeadMaxAggregateInputType
  }

  export type HeadToHeadGroupByOutputType = {
    id: string
    player1Id: string
    player2Id: string
    player1Wins: number
    player2Wins: number
    lastPlayed: Date
    createdAt: Date
    updatedAt: Date
    _count: HeadToHeadCountAggregateOutputType | null
    _avg: HeadToHeadAvgAggregateOutputType | null
    _sum: HeadToHeadSumAggregateOutputType | null
    _min: HeadToHeadMinAggregateOutputType | null
    _max: HeadToHeadMaxAggregateOutputType | null
  }

  type GetHeadToHeadGroupByPayload<T extends HeadToHeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeadToHeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeadToHeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeadToHeadGroupByOutputType[P]>
            : GetScalarType<T[P], HeadToHeadGroupByOutputType[P]>
        }
      >
    >


  export type HeadToHeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1Wins?: boolean
    player2Wins?: boolean
    lastPlayed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headToHead"]>

  export type HeadToHeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1Wins?: boolean
    player2Wins?: boolean
    lastPlayed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headToHead"]>

  export type HeadToHeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1Wins?: boolean
    player2Wins?: boolean
    lastPlayed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headToHead"]>

  export type HeadToHeadSelectScalar = {
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1Wins?: boolean
    player2Wins?: boolean
    lastPlayed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HeadToHeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player1Id" | "player2Id" | "player1Wins" | "player2Wins" | "lastPlayed" | "createdAt" | "updatedAt", ExtArgs["result"]["headToHead"]>
  export type HeadToHeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HeadToHeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HeadToHeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HeadToHeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeadToHead"
    objects: {
      player1: Prisma.$UserPayload<ExtArgs>
      player2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      player1Id: string
      player2Id: string
      player1Wins: number
      player2Wins: number
      lastPlayed: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["headToHead"]>
    composites: {}
  }

  type HeadToHeadGetPayload<S extends boolean | null | undefined | HeadToHeadDefaultArgs> = $Result.GetResult<Prisma.$HeadToHeadPayload, S>

  type HeadToHeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeadToHeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeadToHeadCountAggregateInputType | true
    }

  export interface HeadToHeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeadToHead'], meta: { name: 'HeadToHead' } }
    /**
     * Find zero or one HeadToHead that matches the filter.
     * @param {HeadToHeadFindUniqueArgs} args - Arguments to find a HeadToHead
     * @example
     * // Get one HeadToHead
     * const headToHead = await prisma.headToHead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeadToHeadFindUniqueArgs>(args: SelectSubset<T, HeadToHeadFindUniqueArgs<ExtArgs>>): Prisma__HeadToHeadClient<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HeadToHead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeadToHeadFindUniqueOrThrowArgs} args - Arguments to find a HeadToHead
     * @example
     * // Get one HeadToHead
     * const headToHead = await prisma.headToHead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeadToHeadFindUniqueOrThrowArgs>(args: SelectSubset<T, HeadToHeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeadToHeadClient<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeadToHead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadToHeadFindFirstArgs} args - Arguments to find a HeadToHead
     * @example
     * // Get one HeadToHead
     * const headToHead = await prisma.headToHead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeadToHeadFindFirstArgs>(args?: SelectSubset<T, HeadToHeadFindFirstArgs<ExtArgs>>): Prisma__HeadToHeadClient<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeadToHead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadToHeadFindFirstOrThrowArgs} args - Arguments to find a HeadToHead
     * @example
     * // Get one HeadToHead
     * const headToHead = await prisma.headToHead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeadToHeadFindFirstOrThrowArgs>(args?: SelectSubset<T, HeadToHeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeadToHeadClient<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HeadToHeads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadToHeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeadToHeads
     * const headToHeads = await prisma.headToHead.findMany()
     * 
     * // Get first 10 HeadToHeads
     * const headToHeads = await prisma.headToHead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const headToHeadWithIdOnly = await prisma.headToHead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeadToHeadFindManyArgs>(args?: SelectSubset<T, HeadToHeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HeadToHead.
     * @param {HeadToHeadCreateArgs} args - Arguments to create a HeadToHead.
     * @example
     * // Create one HeadToHead
     * const HeadToHead = await prisma.headToHead.create({
     *   data: {
     *     // ... data to create a HeadToHead
     *   }
     * })
     * 
     */
    create<T extends HeadToHeadCreateArgs>(args: SelectSubset<T, HeadToHeadCreateArgs<ExtArgs>>): Prisma__HeadToHeadClient<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HeadToHeads.
     * @param {HeadToHeadCreateManyArgs} args - Arguments to create many HeadToHeads.
     * @example
     * // Create many HeadToHeads
     * const headToHead = await prisma.headToHead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeadToHeadCreateManyArgs>(args?: SelectSubset<T, HeadToHeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HeadToHeads and returns the data saved in the database.
     * @param {HeadToHeadCreateManyAndReturnArgs} args - Arguments to create many HeadToHeads.
     * @example
     * // Create many HeadToHeads
     * const headToHead = await prisma.headToHead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HeadToHeads and only return the `id`
     * const headToHeadWithIdOnly = await prisma.headToHead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeadToHeadCreateManyAndReturnArgs>(args?: SelectSubset<T, HeadToHeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HeadToHead.
     * @param {HeadToHeadDeleteArgs} args - Arguments to delete one HeadToHead.
     * @example
     * // Delete one HeadToHead
     * const HeadToHead = await prisma.headToHead.delete({
     *   where: {
     *     // ... filter to delete one HeadToHead
     *   }
     * })
     * 
     */
    delete<T extends HeadToHeadDeleteArgs>(args: SelectSubset<T, HeadToHeadDeleteArgs<ExtArgs>>): Prisma__HeadToHeadClient<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HeadToHead.
     * @param {HeadToHeadUpdateArgs} args - Arguments to update one HeadToHead.
     * @example
     * // Update one HeadToHead
     * const headToHead = await prisma.headToHead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeadToHeadUpdateArgs>(args: SelectSubset<T, HeadToHeadUpdateArgs<ExtArgs>>): Prisma__HeadToHeadClient<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HeadToHeads.
     * @param {HeadToHeadDeleteManyArgs} args - Arguments to filter HeadToHeads to delete.
     * @example
     * // Delete a few HeadToHeads
     * const { count } = await prisma.headToHead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeadToHeadDeleteManyArgs>(args?: SelectSubset<T, HeadToHeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeadToHeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadToHeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeadToHeads
     * const headToHead = await prisma.headToHead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeadToHeadUpdateManyArgs>(args: SelectSubset<T, HeadToHeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeadToHeads and returns the data updated in the database.
     * @param {HeadToHeadUpdateManyAndReturnArgs} args - Arguments to update many HeadToHeads.
     * @example
     * // Update many HeadToHeads
     * const headToHead = await prisma.headToHead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HeadToHeads and only return the `id`
     * const headToHeadWithIdOnly = await prisma.headToHead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HeadToHeadUpdateManyAndReturnArgs>(args: SelectSubset<T, HeadToHeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HeadToHead.
     * @param {HeadToHeadUpsertArgs} args - Arguments to update or create a HeadToHead.
     * @example
     * // Update or create a HeadToHead
     * const headToHead = await prisma.headToHead.upsert({
     *   create: {
     *     // ... data to create a HeadToHead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeadToHead we want to update
     *   }
     * })
     */
    upsert<T extends HeadToHeadUpsertArgs>(args: SelectSubset<T, HeadToHeadUpsertArgs<ExtArgs>>): Prisma__HeadToHeadClient<$Result.GetResult<Prisma.$HeadToHeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HeadToHeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadToHeadCountArgs} args - Arguments to filter HeadToHeads to count.
     * @example
     * // Count the number of HeadToHeads
     * const count = await prisma.headToHead.count({
     *   where: {
     *     // ... the filter for the HeadToHeads we want to count
     *   }
     * })
    **/
    count<T extends HeadToHeadCountArgs>(
      args?: Subset<T, HeadToHeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeadToHeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeadToHead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadToHeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeadToHeadAggregateArgs>(args: Subset<T, HeadToHeadAggregateArgs>): Prisma.PrismaPromise<GetHeadToHeadAggregateType<T>>

    /**
     * Group by HeadToHead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadToHeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeadToHeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeadToHeadGroupByArgs['orderBy'] }
        : { orderBy?: HeadToHeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeadToHeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeadToHeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeadToHead model
   */
  readonly fields: HeadToHeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeadToHead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeadToHeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HeadToHead model
   */
  interface HeadToHeadFieldRefs {
    readonly id: FieldRef<"HeadToHead", 'String'>
    readonly player1Id: FieldRef<"HeadToHead", 'String'>
    readonly player2Id: FieldRef<"HeadToHead", 'String'>
    readonly player1Wins: FieldRef<"HeadToHead", 'Int'>
    readonly player2Wins: FieldRef<"HeadToHead", 'Int'>
    readonly lastPlayed: FieldRef<"HeadToHead", 'DateTime'>
    readonly createdAt: FieldRef<"HeadToHead", 'DateTime'>
    readonly updatedAt: FieldRef<"HeadToHead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HeadToHead findUnique
   */
  export type HeadToHeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
    /**
     * Filter, which HeadToHead to fetch.
     */
    where: HeadToHeadWhereUniqueInput
  }

  /**
   * HeadToHead findUniqueOrThrow
   */
  export type HeadToHeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
    /**
     * Filter, which HeadToHead to fetch.
     */
    where: HeadToHeadWhereUniqueInput
  }

  /**
   * HeadToHead findFirst
   */
  export type HeadToHeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
    /**
     * Filter, which HeadToHead to fetch.
     */
    where?: HeadToHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadToHeads to fetch.
     */
    orderBy?: HeadToHeadOrderByWithRelationInput | HeadToHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeadToHeads.
     */
    cursor?: HeadToHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadToHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadToHeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeadToHeads.
     */
    distinct?: HeadToHeadScalarFieldEnum | HeadToHeadScalarFieldEnum[]
  }

  /**
   * HeadToHead findFirstOrThrow
   */
  export type HeadToHeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
    /**
     * Filter, which HeadToHead to fetch.
     */
    where?: HeadToHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadToHeads to fetch.
     */
    orderBy?: HeadToHeadOrderByWithRelationInput | HeadToHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeadToHeads.
     */
    cursor?: HeadToHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadToHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadToHeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeadToHeads.
     */
    distinct?: HeadToHeadScalarFieldEnum | HeadToHeadScalarFieldEnum[]
  }

  /**
   * HeadToHead findMany
   */
  export type HeadToHeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
    /**
     * Filter, which HeadToHeads to fetch.
     */
    where?: HeadToHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeadToHeads to fetch.
     */
    orderBy?: HeadToHeadOrderByWithRelationInput | HeadToHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeadToHeads.
     */
    cursor?: HeadToHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeadToHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeadToHeads.
     */
    skip?: number
    distinct?: HeadToHeadScalarFieldEnum | HeadToHeadScalarFieldEnum[]
  }

  /**
   * HeadToHead create
   */
  export type HeadToHeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
    /**
     * The data needed to create a HeadToHead.
     */
    data: XOR<HeadToHeadCreateInput, HeadToHeadUncheckedCreateInput>
  }

  /**
   * HeadToHead createMany
   */
  export type HeadToHeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeadToHeads.
     */
    data: HeadToHeadCreateManyInput | HeadToHeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeadToHead createManyAndReturn
   */
  export type HeadToHeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * The data used to create many HeadToHeads.
     */
    data: HeadToHeadCreateManyInput | HeadToHeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeadToHead update
   */
  export type HeadToHeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
    /**
     * The data needed to update a HeadToHead.
     */
    data: XOR<HeadToHeadUpdateInput, HeadToHeadUncheckedUpdateInput>
    /**
     * Choose, which HeadToHead to update.
     */
    where: HeadToHeadWhereUniqueInput
  }

  /**
   * HeadToHead updateMany
   */
  export type HeadToHeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeadToHeads.
     */
    data: XOR<HeadToHeadUpdateManyMutationInput, HeadToHeadUncheckedUpdateManyInput>
    /**
     * Filter which HeadToHeads to update
     */
    where?: HeadToHeadWhereInput
    /**
     * Limit how many HeadToHeads to update.
     */
    limit?: number
  }

  /**
   * HeadToHead updateManyAndReturn
   */
  export type HeadToHeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * The data used to update HeadToHeads.
     */
    data: XOR<HeadToHeadUpdateManyMutationInput, HeadToHeadUncheckedUpdateManyInput>
    /**
     * Filter which HeadToHeads to update
     */
    where?: HeadToHeadWhereInput
    /**
     * Limit how many HeadToHeads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HeadToHead upsert
   */
  export type HeadToHeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
    /**
     * The filter to search for the HeadToHead to update in case it exists.
     */
    where: HeadToHeadWhereUniqueInput
    /**
     * In case the HeadToHead found by the `where` argument doesn't exist, create a new HeadToHead with this data.
     */
    create: XOR<HeadToHeadCreateInput, HeadToHeadUncheckedCreateInput>
    /**
     * In case the HeadToHead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeadToHeadUpdateInput, HeadToHeadUncheckedUpdateInput>
  }

  /**
   * HeadToHead delete
   */
  export type HeadToHeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
    /**
     * Filter which HeadToHead to delete.
     */
    where: HeadToHeadWhereUniqueInput
  }

  /**
   * HeadToHead deleteMany
   */
  export type HeadToHeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeadToHeads to delete
     */
    where?: HeadToHeadWhereInput
    /**
     * Limit how many HeadToHeads to delete.
     */
    limit?: number
  }

  /**
   * HeadToHead without action
   */
  export type HeadToHeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeadToHead
     */
    select?: HeadToHeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeadToHead
     */
    omit?: HeadToHeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadToHeadInclude<ExtArgs> | null
  }


  /**
   * Model WordCategory
   */

  export type AggregateWordCategory = {
    _count: WordCategoryCountAggregateOutputType | null
    _min: WordCategoryMinAggregateOutputType | null
    _max: WordCategoryMaxAggregateOutputType | null
  }

  export type WordCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WordCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WordCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    words: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WordCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WordCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WordCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    words?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WordCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordCategory to aggregate.
     */
    where?: WordCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordCategories to fetch.
     */
    orderBy?: WordCategoryOrderByWithRelationInput | WordCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WordCategories
    **/
    _count?: true | WordCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordCategoryMaxAggregateInputType
  }

  export type GetWordCategoryAggregateType<T extends WordCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateWordCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWordCategory[P]>
      : GetScalarType<T[P], AggregateWordCategory[P]>
  }




  export type WordCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordCategoryWhereInput
    orderBy?: WordCategoryOrderByWithAggregationInput | WordCategoryOrderByWithAggregationInput[]
    by: WordCategoryScalarFieldEnum[] | WordCategoryScalarFieldEnum
    having?: WordCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCategoryCountAggregateInputType | true
    _min?: WordCategoryMinAggregateInputType
    _max?: WordCategoryMaxAggregateInputType
  }

  export type WordCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    words: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: WordCategoryCountAggregateOutputType | null
    _min: WordCategoryMinAggregateOutputType | null
    _max: WordCategoryMaxAggregateOutputType | null
  }

  type GetWordCategoryGroupByPayload<T extends WordCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], WordCategoryGroupByOutputType[P]>
        }
      >
    >


  export type WordCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    words?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wordCategory"]>

  export type WordCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    words?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wordCategory"]>

  export type WordCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    words?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wordCategory"]>

  export type WordCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    words?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WordCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "words" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["wordCategory"]>

  export type $WordCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WordCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      words: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wordCategory"]>
    composites: {}
  }

  type WordCategoryGetPayload<S extends boolean | null | undefined | WordCategoryDefaultArgs> = $Result.GetResult<Prisma.$WordCategoryPayload, S>

  type WordCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordCategoryCountAggregateInputType | true
    }

  export interface WordCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WordCategory'], meta: { name: 'WordCategory' } }
    /**
     * Find zero or one WordCategory that matches the filter.
     * @param {WordCategoryFindUniqueArgs} args - Arguments to find a WordCategory
     * @example
     * // Get one WordCategory
     * const wordCategory = await prisma.wordCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordCategoryFindUniqueArgs>(args: SelectSubset<T, WordCategoryFindUniqueArgs<ExtArgs>>): Prisma__WordCategoryClient<$Result.GetResult<Prisma.$WordCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WordCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordCategoryFindUniqueOrThrowArgs} args - Arguments to find a WordCategory
     * @example
     * // Get one WordCategory
     * const wordCategory = await prisma.wordCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, WordCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordCategoryClient<$Result.GetResult<Prisma.$WordCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WordCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCategoryFindFirstArgs} args - Arguments to find a WordCategory
     * @example
     * // Get one WordCategory
     * const wordCategory = await prisma.wordCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordCategoryFindFirstArgs>(args?: SelectSubset<T, WordCategoryFindFirstArgs<ExtArgs>>): Prisma__WordCategoryClient<$Result.GetResult<Prisma.$WordCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WordCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCategoryFindFirstOrThrowArgs} args - Arguments to find a WordCategory
     * @example
     * // Get one WordCategory
     * const wordCategory = await prisma.wordCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, WordCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordCategoryClient<$Result.GetResult<Prisma.$WordCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WordCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WordCategories
     * const wordCategories = await prisma.wordCategory.findMany()
     * 
     * // Get first 10 WordCategories
     * const wordCategories = await prisma.wordCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordCategoryWithIdOnly = await prisma.wordCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordCategoryFindManyArgs>(args?: SelectSubset<T, WordCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WordCategory.
     * @param {WordCategoryCreateArgs} args - Arguments to create a WordCategory.
     * @example
     * // Create one WordCategory
     * const WordCategory = await prisma.wordCategory.create({
     *   data: {
     *     // ... data to create a WordCategory
     *   }
     * })
     * 
     */
    create<T extends WordCategoryCreateArgs>(args: SelectSubset<T, WordCategoryCreateArgs<ExtArgs>>): Prisma__WordCategoryClient<$Result.GetResult<Prisma.$WordCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WordCategories.
     * @param {WordCategoryCreateManyArgs} args - Arguments to create many WordCategories.
     * @example
     * // Create many WordCategories
     * const wordCategory = await prisma.wordCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordCategoryCreateManyArgs>(args?: SelectSubset<T, WordCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WordCategories and returns the data saved in the database.
     * @param {WordCategoryCreateManyAndReturnArgs} args - Arguments to create many WordCategories.
     * @example
     * // Create many WordCategories
     * const wordCategory = await prisma.wordCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WordCategories and only return the `id`
     * const wordCategoryWithIdOnly = await prisma.wordCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, WordCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WordCategory.
     * @param {WordCategoryDeleteArgs} args - Arguments to delete one WordCategory.
     * @example
     * // Delete one WordCategory
     * const WordCategory = await prisma.wordCategory.delete({
     *   where: {
     *     // ... filter to delete one WordCategory
     *   }
     * })
     * 
     */
    delete<T extends WordCategoryDeleteArgs>(args: SelectSubset<T, WordCategoryDeleteArgs<ExtArgs>>): Prisma__WordCategoryClient<$Result.GetResult<Prisma.$WordCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WordCategory.
     * @param {WordCategoryUpdateArgs} args - Arguments to update one WordCategory.
     * @example
     * // Update one WordCategory
     * const wordCategory = await prisma.wordCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordCategoryUpdateArgs>(args: SelectSubset<T, WordCategoryUpdateArgs<ExtArgs>>): Prisma__WordCategoryClient<$Result.GetResult<Prisma.$WordCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WordCategories.
     * @param {WordCategoryDeleteManyArgs} args - Arguments to filter WordCategories to delete.
     * @example
     * // Delete a few WordCategories
     * const { count } = await prisma.wordCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordCategoryDeleteManyArgs>(args?: SelectSubset<T, WordCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WordCategories
     * const wordCategory = await prisma.wordCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordCategoryUpdateManyArgs>(args: SelectSubset<T, WordCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordCategories and returns the data updated in the database.
     * @param {WordCategoryUpdateManyAndReturnArgs} args - Arguments to update many WordCategories.
     * @example
     * // Update many WordCategories
     * const wordCategory = await prisma.wordCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WordCategories and only return the `id`
     * const wordCategoryWithIdOnly = await prisma.wordCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WordCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, WordCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WordCategory.
     * @param {WordCategoryUpsertArgs} args - Arguments to update or create a WordCategory.
     * @example
     * // Update or create a WordCategory
     * const wordCategory = await prisma.wordCategory.upsert({
     *   create: {
     *     // ... data to create a WordCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WordCategory we want to update
     *   }
     * })
     */
    upsert<T extends WordCategoryUpsertArgs>(args: SelectSubset<T, WordCategoryUpsertArgs<ExtArgs>>): Prisma__WordCategoryClient<$Result.GetResult<Prisma.$WordCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WordCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCategoryCountArgs} args - Arguments to filter WordCategories to count.
     * @example
     * // Count the number of WordCategories
     * const count = await prisma.wordCategory.count({
     *   where: {
     *     // ... the filter for the WordCategories we want to count
     *   }
     * })
    **/
    count<T extends WordCategoryCountArgs>(
      args?: Subset<T, WordCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WordCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WordCategoryAggregateArgs>(args: Subset<T, WordCategoryAggregateArgs>): Prisma.PrismaPromise<GetWordCategoryAggregateType<T>>

    /**
     * Group by WordCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WordCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordCategoryGroupByArgs['orderBy'] }
        : { orderBy?: WordCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WordCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WordCategory model
   */
  readonly fields: WordCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WordCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WordCategory model
   */
  interface WordCategoryFieldRefs {
    readonly id: FieldRef<"WordCategory", 'String'>
    readonly name: FieldRef<"WordCategory", 'String'>
    readonly description: FieldRef<"WordCategory", 'String'>
    readonly words: FieldRef<"WordCategory", 'String[]'>
    readonly isActive: FieldRef<"WordCategory", 'Boolean'>
    readonly createdAt: FieldRef<"WordCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"WordCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WordCategory findUnique
   */
  export type WordCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
    /**
     * Filter, which WordCategory to fetch.
     */
    where: WordCategoryWhereUniqueInput
  }

  /**
   * WordCategory findUniqueOrThrow
   */
  export type WordCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
    /**
     * Filter, which WordCategory to fetch.
     */
    where: WordCategoryWhereUniqueInput
  }

  /**
   * WordCategory findFirst
   */
  export type WordCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
    /**
     * Filter, which WordCategory to fetch.
     */
    where?: WordCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordCategories to fetch.
     */
    orderBy?: WordCategoryOrderByWithRelationInput | WordCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordCategories.
     */
    cursor?: WordCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordCategories.
     */
    distinct?: WordCategoryScalarFieldEnum | WordCategoryScalarFieldEnum[]
  }

  /**
   * WordCategory findFirstOrThrow
   */
  export type WordCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
    /**
     * Filter, which WordCategory to fetch.
     */
    where?: WordCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordCategories to fetch.
     */
    orderBy?: WordCategoryOrderByWithRelationInput | WordCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordCategories.
     */
    cursor?: WordCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordCategories.
     */
    distinct?: WordCategoryScalarFieldEnum | WordCategoryScalarFieldEnum[]
  }

  /**
   * WordCategory findMany
   */
  export type WordCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
    /**
     * Filter, which WordCategories to fetch.
     */
    where?: WordCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordCategories to fetch.
     */
    orderBy?: WordCategoryOrderByWithRelationInput | WordCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WordCategories.
     */
    cursor?: WordCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordCategories.
     */
    skip?: number
    distinct?: WordCategoryScalarFieldEnum | WordCategoryScalarFieldEnum[]
  }

  /**
   * WordCategory create
   */
  export type WordCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a WordCategory.
     */
    data: XOR<WordCategoryCreateInput, WordCategoryUncheckedCreateInput>
  }

  /**
   * WordCategory createMany
   */
  export type WordCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WordCategories.
     */
    data: WordCategoryCreateManyInput | WordCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WordCategory createManyAndReturn
   */
  export type WordCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many WordCategories.
     */
    data: WordCategoryCreateManyInput | WordCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WordCategory update
   */
  export type WordCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a WordCategory.
     */
    data: XOR<WordCategoryUpdateInput, WordCategoryUncheckedUpdateInput>
    /**
     * Choose, which WordCategory to update.
     */
    where: WordCategoryWhereUniqueInput
  }

  /**
   * WordCategory updateMany
   */
  export type WordCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WordCategories.
     */
    data: XOR<WordCategoryUpdateManyMutationInput, WordCategoryUncheckedUpdateManyInput>
    /**
     * Filter which WordCategories to update
     */
    where?: WordCategoryWhereInput
    /**
     * Limit how many WordCategories to update.
     */
    limit?: number
  }

  /**
   * WordCategory updateManyAndReturn
   */
  export type WordCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
    /**
     * The data used to update WordCategories.
     */
    data: XOR<WordCategoryUpdateManyMutationInput, WordCategoryUncheckedUpdateManyInput>
    /**
     * Filter which WordCategories to update
     */
    where?: WordCategoryWhereInput
    /**
     * Limit how many WordCategories to update.
     */
    limit?: number
  }

  /**
   * WordCategory upsert
   */
  export type WordCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the WordCategory to update in case it exists.
     */
    where: WordCategoryWhereUniqueInput
    /**
     * In case the WordCategory found by the `where` argument doesn't exist, create a new WordCategory with this data.
     */
    create: XOR<WordCategoryCreateInput, WordCategoryUncheckedCreateInput>
    /**
     * In case the WordCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordCategoryUpdateInput, WordCategoryUncheckedUpdateInput>
  }

  /**
   * WordCategory delete
   */
  export type WordCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
    /**
     * Filter which WordCategory to delete.
     */
    where: WordCategoryWhereUniqueInput
  }

  /**
   * WordCategory deleteMany
   */
  export type WordCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordCategories to delete
     */
    where?: WordCategoryWhereInput
    /**
     * Limit how many WordCategories to delete.
     */
    limit?: number
  }

  /**
   * WordCategory without action
   */
  export type WordCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCategory
     */
    select?: WordCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordCategory
     */
    omit?: WordCategoryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    username: 'username',
    wins: 'wins',
    losses: 'losses',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    status: 'status',
    currentWord: 'currentWord',
    currentTurn: 'currentTurn',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    player1GhostTears: 'player1GhostTears',
    player2GhostTears: 'player2GhostTears',
    winnerId: 'winnerId',
    wordListCategory: 'wordListCategory',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const MoveScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    playerId: 'playerId',
    letter: 'letter',
    word: 'word',
    isChallenge: 'isChallenge',
    challengeResult: 'challengeResult',
    createdAt: 'createdAt'
  };

  export type MoveScalarFieldEnum = (typeof MoveScalarFieldEnum)[keyof typeof MoveScalarFieldEnum]


  export const HeadToHeadScalarFieldEnum: {
    id: 'id',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    player1Wins: 'player1Wins',
    player2Wins: 'player2Wins',
    lastPlayed: 'lastPlayed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HeadToHeadScalarFieldEnum = (typeof HeadToHeadScalarFieldEnum)[keyof typeof HeadToHeadScalarFieldEnum]


  export const WordCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    words: 'words',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WordCategoryScalarFieldEnum = (typeof WordCategoryScalarFieldEnum)[keyof typeof WordCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'GameStatus[]'
   */
  export type ListEnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    wins?: IntFilter<"User"> | number
    losses?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    gamesAsPlayer1?: GameListRelationFilter
    gamesAsPlayer2?: GameListRelationFilter
    gamesWon?: GameListRelationFilter
    headToHeadAsPlayer1?: HeadToHeadListRelationFilter
    headToHeadAsPlayer2?: HeadToHeadListRelationFilter
    moves?: MoveListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    username?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gamesAsPlayer1?: GameOrderByRelationAggregateInput
    gamesAsPlayer2?: GameOrderByRelationAggregateInput
    gamesWon?: GameOrderByRelationAggregateInput
    headToHeadAsPlayer1?: HeadToHeadOrderByRelationAggregateInput
    headToHeadAsPlayer2?: HeadToHeadOrderByRelationAggregateInput
    moves?: MoveOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    wins?: IntFilter<"User"> | number
    losses?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    gamesAsPlayer1?: GameListRelationFilter
    gamesAsPlayer2?: GameListRelationFilter
    gamesWon?: GameListRelationFilter
    headToHeadAsPlayer1?: HeadToHeadListRelationFilter
    headToHeadAsPlayer2?: HeadToHeadListRelationFilter
    moves?: MoveListRelationFilter
  }, "id" | "clerkId" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    username?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    wins?: IntWithAggregatesFilter<"User"> | number
    losses?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    currentWord?: StringFilter<"Game"> | string
    currentTurn?: StringFilter<"Game"> | string
    player1Id?: StringFilter<"Game"> | string
    player2Id?: StringNullableFilter<"Game"> | string | null
    player1GhostTears?: StringNullableListFilter<"Game">
    player2GhostTears?: StringNullableListFilter<"Game">
    winnerId?: StringNullableFilter<"Game"> | string | null
    wordListCategory?: StringFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    moves?: MoveListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    currentWord?: SortOrder
    currentTurn?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrderInput | SortOrder
    player1GhostTears?: SortOrder
    player2GhostTears?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    wordListCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
    winner?: UserOrderByWithRelationInput
    moves?: MoveOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    currentWord?: StringFilter<"Game"> | string
    currentTurn?: StringFilter<"Game"> | string
    player1Id?: StringFilter<"Game"> | string
    player2Id?: StringNullableFilter<"Game"> | string | null
    player1GhostTears?: StringNullableListFilter<"Game">
    player2GhostTears?: StringNullableListFilter<"Game">
    winnerId?: StringNullableFilter<"Game"> | string | null
    wordListCategory?: StringFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    moves?: MoveListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    currentWord?: SortOrder
    currentTurn?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrderInput | SortOrder
    player1GhostTears?: SortOrder
    player2GhostTears?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    wordListCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    status?: EnumGameStatusWithAggregatesFilter<"Game"> | $Enums.GameStatus
    currentWord?: StringWithAggregatesFilter<"Game"> | string
    currentTurn?: StringWithAggregatesFilter<"Game"> | string
    player1Id?: StringWithAggregatesFilter<"Game"> | string
    player2Id?: StringNullableWithAggregatesFilter<"Game"> | string | null
    player1GhostTears?: StringNullableListFilter<"Game">
    player2GhostTears?: StringNullableListFilter<"Game">
    winnerId?: StringNullableWithAggregatesFilter<"Game"> | string | null
    wordListCategory?: StringWithAggregatesFilter<"Game"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type MoveWhereInput = {
    AND?: MoveWhereInput | MoveWhereInput[]
    OR?: MoveWhereInput[]
    NOT?: MoveWhereInput | MoveWhereInput[]
    id?: StringFilter<"Move"> | string
    gameId?: StringFilter<"Move"> | string
    playerId?: StringFilter<"Move"> | string
    letter?: StringFilter<"Move"> | string
    word?: StringFilter<"Move"> | string
    isChallenge?: BoolFilter<"Move"> | boolean
    challengeResult?: BoolNullableFilter<"Move"> | boolean | null
    createdAt?: DateTimeFilter<"Move"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MoveOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    letter?: SortOrder
    word?: SortOrder
    isChallenge?: SortOrder
    challengeResult?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    game?: GameOrderByWithRelationInput
    player?: UserOrderByWithRelationInput
  }

  export type MoveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoveWhereInput | MoveWhereInput[]
    OR?: MoveWhereInput[]
    NOT?: MoveWhereInput | MoveWhereInput[]
    gameId?: StringFilter<"Move"> | string
    playerId?: StringFilter<"Move"> | string
    letter?: StringFilter<"Move"> | string
    word?: StringFilter<"Move"> | string
    isChallenge?: BoolFilter<"Move"> | boolean
    challengeResult?: BoolNullableFilter<"Move"> | boolean | null
    createdAt?: DateTimeFilter<"Move"> | Date | string
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MoveOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    letter?: SortOrder
    word?: SortOrder
    isChallenge?: SortOrder
    challengeResult?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MoveCountOrderByAggregateInput
    _max?: MoveMaxOrderByAggregateInput
    _min?: MoveMinOrderByAggregateInput
  }

  export type MoveScalarWhereWithAggregatesInput = {
    AND?: MoveScalarWhereWithAggregatesInput | MoveScalarWhereWithAggregatesInput[]
    OR?: MoveScalarWhereWithAggregatesInput[]
    NOT?: MoveScalarWhereWithAggregatesInput | MoveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Move"> | string
    gameId?: StringWithAggregatesFilter<"Move"> | string
    playerId?: StringWithAggregatesFilter<"Move"> | string
    letter?: StringWithAggregatesFilter<"Move"> | string
    word?: StringWithAggregatesFilter<"Move"> | string
    isChallenge?: BoolWithAggregatesFilter<"Move"> | boolean
    challengeResult?: BoolNullableWithAggregatesFilter<"Move"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Move"> | Date | string
  }

  export type HeadToHeadWhereInput = {
    AND?: HeadToHeadWhereInput | HeadToHeadWhereInput[]
    OR?: HeadToHeadWhereInput[]
    NOT?: HeadToHeadWhereInput | HeadToHeadWhereInput[]
    id?: StringFilter<"HeadToHead"> | string
    player1Id?: StringFilter<"HeadToHead"> | string
    player2Id?: StringFilter<"HeadToHead"> | string
    player1Wins?: IntFilter<"HeadToHead"> | number
    player2Wins?: IntFilter<"HeadToHead"> | number
    lastPlayed?: DateTimeFilter<"HeadToHead"> | Date | string
    createdAt?: DateTimeFilter<"HeadToHead"> | Date | string
    updatedAt?: DateTimeFilter<"HeadToHead"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HeadToHeadOrderByWithRelationInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1Wins?: SortOrder
    player2Wins?: SortOrder
    lastPlayed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
  }

  export type HeadToHeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    player1Id_player2Id?: HeadToHeadPlayer1IdPlayer2IdCompoundUniqueInput
    AND?: HeadToHeadWhereInput | HeadToHeadWhereInput[]
    OR?: HeadToHeadWhereInput[]
    NOT?: HeadToHeadWhereInput | HeadToHeadWhereInput[]
    player1Id?: StringFilter<"HeadToHead"> | string
    player2Id?: StringFilter<"HeadToHead"> | string
    player1Wins?: IntFilter<"HeadToHead"> | number
    player2Wins?: IntFilter<"HeadToHead"> | number
    lastPlayed?: DateTimeFilter<"HeadToHead"> | Date | string
    createdAt?: DateTimeFilter<"HeadToHead"> | Date | string
    updatedAt?: DateTimeFilter<"HeadToHead"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "player1Id_player2Id">

  export type HeadToHeadOrderByWithAggregationInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1Wins?: SortOrder
    player2Wins?: SortOrder
    lastPlayed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HeadToHeadCountOrderByAggregateInput
    _avg?: HeadToHeadAvgOrderByAggregateInput
    _max?: HeadToHeadMaxOrderByAggregateInput
    _min?: HeadToHeadMinOrderByAggregateInput
    _sum?: HeadToHeadSumOrderByAggregateInput
  }

  export type HeadToHeadScalarWhereWithAggregatesInput = {
    AND?: HeadToHeadScalarWhereWithAggregatesInput | HeadToHeadScalarWhereWithAggregatesInput[]
    OR?: HeadToHeadScalarWhereWithAggregatesInput[]
    NOT?: HeadToHeadScalarWhereWithAggregatesInput | HeadToHeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HeadToHead"> | string
    player1Id?: StringWithAggregatesFilter<"HeadToHead"> | string
    player2Id?: StringWithAggregatesFilter<"HeadToHead"> | string
    player1Wins?: IntWithAggregatesFilter<"HeadToHead"> | number
    player2Wins?: IntWithAggregatesFilter<"HeadToHead"> | number
    lastPlayed?: DateTimeWithAggregatesFilter<"HeadToHead"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"HeadToHead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HeadToHead"> | Date | string
  }

  export type WordCategoryWhereInput = {
    AND?: WordCategoryWhereInput | WordCategoryWhereInput[]
    OR?: WordCategoryWhereInput[]
    NOT?: WordCategoryWhereInput | WordCategoryWhereInput[]
    id?: StringFilter<"WordCategory"> | string
    name?: StringFilter<"WordCategory"> | string
    description?: StringNullableFilter<"WordCategory"> | string | null
    words?: StringNullableListFilter<"WordCategory">
    isActive?: BoolFilter<"WordCategory"> | boolean
    createdAt?: DateTimeFilter<"WordCategory"> | Date | string
    updatedAt?: DateTimeFilter<"WordCategory"> | Date | string
  }

  export type WordCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    words?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WordCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: WordCategoryWhereInput | WordCategoryWhereInput[]
    OR?: WordCategoryWhereInput[]
    NOT?: WordCategoryWhereInput | WordCategoryWhereInput[]
    description?: StringNullableFilter<"WordCategory"> | string | null
    words?: StringNullableListFilter<"WordCategory">
    isActive?: BoolFilter<"WordCategory"> | boolean
    createdAt?: DateTimeFilter<"WordCategory"> | Date | string
    updatedAt?: DateTimeFilter<"WordCategory"> | Date | string
  }, "id" | "name">

  export type WordCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    words?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WordCategoryCountOrderByAggregateInput
    _max?: WordCategoryMaxOrderByAggregateInput
    _min?: WordCategoryMinOrderByAggregateInput
  }

  export type WordCategoryScalarWhereWithAggregatesInput = {
    AND?: WordCategoryScalarWhereWithAggregatesInput | WordCategoryScalarWhereWithAggregatesInput[]
    OR?: WordCategoryScalarWhereWithAggregatesInput[]
    NOT?: WordCategoryScalarWhereWithAggregatesInput | WordCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WordCategory"> | string
    name?: StringWithAggregatesFilter<"WordCategory"> | string
    description?: StringNullableWithAggregatesFilter<"WordCategory"> | string | null
    words?: StringNullableListFilter<"WordCategory">
    isActive?: BoolWithAggregatesFilter<"WordCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WordCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WordCategory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer1?: HeadToHeadCreateNestedManyWithoutPlayer1Input
    headToHeadAsPlayer2?: HeadToHeadCreateNestedManyWithoutPlayer2Input
    moves?: MoveCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer1?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer1Input
    headToHeadAsPlayer2?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer2Input
    moves?: MoveUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer1?: HeadToHeadUpdateManyWithoutPlayer1NestedInput
    headToHeadAsPlayer2?: HeadToHeadUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer1?: HeadToHeadUncheckedUpdateManyWithoutPlayer1NestedInput
    headToHeadAsPlayer2?: HeadToHeadUncheckedUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutGamesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutGamesAsPlayer2Input
    winner?: UserCreateNestedOneWithoutGamesWonInput
    moves?: MoveCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1Id: string
    player2Id?: string | null
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    winnerId?: string | null
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moves?: MoveUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutGamesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutGamesAsPlayer2NestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
    moves?: MoveUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moves?: MoveUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1Id: string
    player2Id?: string | null
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    winnerId?: string | null
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveCreateInput = {
    id?: string
    letter: string
    word: string
    isChallenge?: boolean
    challengeResult?: boolean | null
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutMovesInput
    player: UserCreateNestedOneWithoutMovesInput
  }

  export type MoveUncheckedCreateInput = {
    id?: string
    gameId: string
    playerId: string
    letter: string
    word: string
    isChallenge?: boolean
    challengeResult?: boolean | null
    createdAt?: Date | string
  }

  export type MoveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isChallenge?: BoolFieldUpdateOperationsInput | boolean
    challengeResult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutMovesNestedInput
    player?: UserUpdateOneRequiredWithoutMovesNestedInput
  }

  export type MoveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isChallenge?: BoolFieldUpdateOperationsInput | boolean
    challengeResult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveCreateManyInput = {
    id?: string
    gameId: string
    playerId: string
    letter: string
    word: string
    isChallenge?: boolean
    challengeResult?: boolean | null
    createdAt?: Date | string
  }

  export type MoveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isChallenge?: BoolFieldUpdateOperationsInput | boolean
    challengeResult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isChallenge?: BoolFieldUpdateOperationsInput | boolean
    challengeResult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadToHeadCreateInput = {
    id?: string
    player1Wins?: number
    player2Wins?: number
    lastPlayed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutHeadToHeadAsPlayer1Input
    player2: UserCreateNestedOneWithoutHeadToHeadAsPlayer2Input
  }

  export type HeadToHeadUncheckedCreateInput = {
    id?: string
    player1Id: string
    player2Id: string
    player1Wins?: number
    player2Wins?: number
    lastPlayed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadToHeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Wins?: IntFieldUpdateOperationsInput | number
    player2Wins?: IntFieldUpdateOperationsInput | number
    lastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutHeadToHeadAsPlayer1NestedInput
    player2?: UserUpdateOneRequiredWithoutHeadToHeadAsPlayer2NestedInput
  }

  export type HeadToHeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    player1Wins?: IntFieldUpdateOperationsInput | number
    player2Wins?: IntFieldUpdateOperationsInput | number
    lastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadToHeadCreateManyInput = {
    id?: string
    player1Id: string
    player2Id: string
    player1Wins?: number
    player2Wins?: number
    lastPlayed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadToHeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Wins?: IntFieldUpdateOperationsInput | number
    player2Wins?: IntFieldUpdateOperationsInput | number
    lastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadToHeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    player1Wins?: IntFieldUpdateOperationsInput | number
    player2Wins?: IntFieldUpdateOperationsInput | number
    lastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    words?: WordCategoryCreatewordsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WordCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    words?: WordCategoryCreatewordsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WordCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordCategoryUpdatewordsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordCategoryUpdatewordsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    words?: WordCategoryCreatewordsInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WordCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordCategoryUpdatewordsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordCategoryUpdatewordsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type HeadToHeadListRelationFilter = {
    every?: HeadToHeadWhereInput
    some?: HeadToHeadWhereInput
    none?: HeadToHeadWhereInput
  }

  export type MoveListRelationFilter = {
    every?: MoveWhereInput
    some?: MoveWhereInput
    none?: MoveWhereInput
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeadToHeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    username?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    wins?: SortOrder
    losses?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    username?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    username?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    wins?: SortOrder
    losses?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    currentWord?: SortOrder
    currentTurn?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1GhostTears?: SortOrder
    player2GhostTears?: SortOrder
    winnerId?: SortOrder
    wordListCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    currentWord?: SortOrder
    currentTurn?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    wordListCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    currentWord?: SortOrder
    currentTurn?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    winnerId?: SortOrder
    wordListCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type MoveCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    letter?: SortOrder
    word?: SortOrder
    isChallenge?: SortOrder
    challengeResult?: SortOrder
    createdAt?: SortOrder
  }

  export type MoveMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    letter?: SortOrder
    word?: SortOrder
    isChallenge?: SortOrder
    challengeResult?: SortOrder
    createdAt?: SortOrder
  }

  export type MoveMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    playerId?: SortOrder
    letter?: SortOrder
    word?: SortOrder
    isChallenge?: SortOrder
    challengeResult?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type HeadToHeadPlayer1IdPlayer2IdCompoundUniqueInput = {
    player1Id: string
    player2Id: string
  }

  export type HeadToHeadCountOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1Wins?: SortOrder
    player2Wins?: SortOrder
    lastPlayed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeadToHeadAvgOrderByAggregateInput = {
    player1Wins?: SortOrder
    player2Wins?: SortOrder
  }

  export type HeadToHeadMaxOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1Wins?: SortOrder
    player2Wins?: SortOrder
    lastPlayed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeadToHeadMinOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1Wins?: SortOrder
    player2Wins?: SortOrder
    lastPlayed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeadToHeadSumOrderByAggregateInput = {
    player1Wins?: SortOrder
    player2Wins?: SortOrder
  }

  export type WordCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    words?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WordCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WordCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutWinnerInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type HeadToHeadCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<HeadToHeadCreateWithoutPlayer1Input, HeadToHeadUncheckedCreateWithoutPlayer1Input> | HeadToHeadCreateWithoutPlayer1Input[] | HeadToHeadUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: HeadToHeadCreateOrConnectWithoutPlayer1Input | HeadToHeadCreateOrConnectWithoutPlayer1Input[]
    createMany?: HeadToHeadCreateManyPlayer1InputEnvelope
    connect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
  }

  export type HeadToHeadCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<HeadToHeadCreateWithoutPlayer2Input, HeadToHeadUncheckedCreateWithoutPlayer2Input> | HeadToHeadCreateWithoutPlayer2Input[] | HeadToHeadUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: HeadToHeadCreateOrConnectWithoutPlayer2Input | HeadToHeadCreateOrConnectWithoutPlayer2Input[]
    createMany?: HeadToHeadCreateManyPlayer2InputEnvelope
    connect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
  }

  export type MoveCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput> | MoveCreateWithoutPlayerInput[] | MoveUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutPlayerInput | MoveCreateOrConnectWithoutPlayerInput[]
    createMany?: MoveCreateManyPlayerInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type HeadToHeadUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<HeadToHeadCreateWithoutPlayer1Input, HeadToHeadUncheckedCreateWithoutPlayer1Input> | HeadToHeadCreateWithoutPlayer1Input[] | HeadToHeadUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: HeadToHeadCreateOrConnectWithoutPlayer1Input | HeadToHeadCreateOrConnectWithoutPlayer1Input[]
    createMany?: HeadToHeadCreateManyPlayer1InputEnvelope
    connect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
  }

  export type HeadToHeadUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<HeadToHeadCreateWithoutPlayer2Input, HeadToHeadUncheckedCreateWithoutPlayer2Input> | HeadToHeadCreateWithoutPlayer2Input[] | HeadToHeadUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: HeadToHeadCreateOrConnectWithoutPlayer2Input | HeadToHeadCreateOrConnectWithoutPlayer2Input[]
    createMany?: HeadToHeadCreateManyPlayer2InputEnvelope
    connect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
  }

  export type MoveUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput> | MoveCreateWithoutPlayerInput[] | MoveUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutPlayerInput | MoveCreateOrConnectWithoutPlayerInput[]
    createMany?: MoveCreateManyPlayerInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer1Input | GameUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer1Input | GameUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer1Input | GameUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer2Input | GameUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer2Input | GameUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer2Input | GameUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutWinnerInput | GameUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutWinnerInput | GameUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutWinnerInput | GameUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type HeadToHeadUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<HeadToHeadCreateWithoutPlayer1Input, HeadToHeadUncheckedCreateWithoutPlayer1Input> | HeadToHeadCreateWithoutPlayer1Input[] | HeadToHeadUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: HeadToHeadCreateOrConnectWithoutPlayer1Input | HeadToHeadCreateOrConnectWithoutPlayer1Input[]
    upsert?: HeadToHeadUpsertWithWhereUniqueWithoutPlayer1Input | HeadToHeadUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: HeadToHeadCreateManyPlayer1InputEnvelope
    set?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    disconnect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    delete?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    connect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    update?: HeadToHeadUpdateWithWhereUniqueWithoutPlayer1Input | HeadToHeadUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: HeadToHeadUpdateManyWithWhereWithoutPlayer1Input | HeadToHeadUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: HeadToHeadScalarWhereInput | HeadToHeadScalarWhereInput[]
  }

  export type HeadToHeadUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<HeadToHeadCreateWithoutPlayer2Input, HeadToHeadUncheckedCreateWithoutPlayer2Input> | HeadToHeadCreateWithoutPlayer2Input[] | HeadToHeadUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: HeadToHeadCreateOrConnectWithoutPlayer2Input | HeadToHeadCreateOrConnectWithoutPlayer2Input[]
    upsert?: HeadToHeadUpsertWithWhereUniqueWithoutPlayer2Input | HeadToHeadUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: HeadToHeadCreateManyPlayer2InputEnvelope
    set?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    disconnect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    delete?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    connect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    update?: HeadToHeadUpdateWithWhereUniqueWithoutPlayer2Input | HeadToHeadUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: HeadToHeadUpdateManyWithWhereWithoutPlayer2Input | HeadToHeadUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: HeadToHeadScalarWhereInput | HeadToHeadScalarWhereInput[]
  }

  export type MoveUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput> | MoveCreateWithoutPlayerInput[] | MoveUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutPlayerInput | MoveCreateOrConnectWithoutPlayerInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutPlayerInput | MoveUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MoveCreateManyPlayerInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutPlayerInput | MoveUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutPlayerInput | MoveUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer1Input | GameUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer1Input | GameUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer1Input | GameUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer2Input | GameUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer2Input | GameUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer2Input | GameUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput> | GameCreateWithoutWinnerInput[] | GameUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: GameCreateOrConnectWithoutWinnerInput | GameCreateOrConnectWithoutWinnerInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutWinnerInput | GameUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: GameCreateManyWinnerInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutWinnerInput | GameUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: GameUpdateManyWithWhereWithoutWinnerInput | GameUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type HeadToHeadUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<HeadToHeadCreateWithoutPlayer1Input, HeadToHeadUncheckedCreateWithoutPlayer1Input> | HeadToHeadCreateWithoutPlayer1Input[] | HeadToHeadUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: HeadToHeadCreateOrConnectWithoutPlayer1Input | HeadToHeadCreateOrConnectWithoutPlayer1Input[]
    upsert?: HeadToHeadUpsertWithWhereUniqueWithoutPlayer1Input | HeadToHeadUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: HeadToHeadCreateManyPlayer1InputEnvelope
    set?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    disconnect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    delete?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    connect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    update?: HeadToHeadUpdateWithWhereUniqueWithoutPlayer1Input | HeadToHeadUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: HeadToHeadUpdateManyWithWhereWithoutPlayer1Input | HeadToHeadUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: HeadToHeadScalarWhereInput | HeadToHeadScalarWhereInput[]
  }

  export type HeadToHeadUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<HeadToHeadCreateWithoutPlayer2Input, HeadToHeadUncheckedCreateWithoutPlayer2Input> | HeadToHeadCreateWithoutPlayer2Input[] | HeadToHeadUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: HeadToHeadCreateOrConnectWithoutPlayer2Input | HeadToHeadCreateOrConnectWithoutPlayer2Input[]
    upsert?: HeadToHeadUpsertWithWhereUniqueWithoutPlayer2Input | HeadToHeadUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: HeadToHeadCreateManyPlayer2InputEnvelope
    set?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    disconnect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    delete?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    connect?: HeadToHeadWhereUniqueInput | HeadToHeadWhereUniqueInput[]
    update?: HeadToHeadUpdateWithWhereUniqueWithoutPlayer2Input | HeadToHeadUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: HeadToHeadUpdateManyWithWhereWithoutPlayer2Input | HeadToHeadUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: HeadToHeadScalarWhereInput | HeadToHeadScalarWhereInput[]
  }

  export type MoveUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput> | MoveCreateWithoutPlayerInput[] | MoveUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutPlayerInput | MoveCreateOrConnectWithoutPlayerInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutPlayerInput | MoveUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MoveCreateManyPlayerInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutPlayerInput | MoveUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutPlayerInput | MoveUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type GameCreateplayer1GhostTearsInput = {
    set: string[]
  }

  export type GameCreateplayer2GhostTearsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutGamesAsPlayer1Input = {
    create?: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGamesAsPlayer2Input = {
    create?: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer2Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGamesWonInput = {
    create?: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesWonInput
    connect?: UserWhereUniqueInput
  }

  export type MoveCreateNestedManyWithoutGameInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type MoveUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type GameUpdateplayer1GhostTearsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GameUpdateplayer2GhostTearsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutGamesAsPlayer1NestedInput = {
    create?: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer1Input
    upsert?: UserUpsertWithoutGamesAsPlayer1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesAsPlayer1Input, UserUpdateWithoutGamesAsPlayer1Input>, UserUncheckedUpdateWithoutGamesAsPlayer1Input>
  }

  export type UserUpdateOneWithoutGamesAsPlayer2NestedInput = {
    create?: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutGamesAsPlayer2Input
    upsert?: UserUpsertWithoutGamesAsPlayer2Input
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesAsPlayer2Input, UserUpdateWithoutGamesAsPlayer2Input>, UserUncheckedUpdateWithoutGamesAsPlayer2Input>
  }

  export type UserUpdateOneWithoutGamesWonNestedInput = {
    create?: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesWonInput
    upsert?: UserUpsertWithoutGamesWonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesWonInput, UserUpdateWithoutGamesWonInput>, UserUncheckedUpdateWithoutGamesWonInput>
  }

  export type MoveUpdateManyWithoutGameNestedInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutGameInput | MoveUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutGameInput | MoveUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutGameInput | MoveUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MoveUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutGameInput | MoveUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutGameInput | MoveUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutGameInput | MoveUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutMovesInput = {
    create?: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
    connectOrCreate?: GameCreateOrConnectWithoutMovesInput
    connect?: GameWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMovesInput = {
    create?: XOR<UserCreateWithoutMovesInput, UserUncheckedCreateWithoutMovesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type GameUpdateOneRequiredWithoutMovesNestedInput = {
    create?: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
    connectOrCreate?: GameCreateOrConnectWithoutMovesInput
    upsert?: GameUpsertWithoutMovesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutMovesInput, GameUpdateWithoutMovesInput>, GameUncheckedUpdateWithoutMovesInput>
  }

  export type UserUpdateOneRequiredWithoutMovesNestedInput = {
    create?: XOR<UserCreateWithoutMovesInput, UserUncheckedCreateWithoutMovesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovesInput
    upsert?: UserUpsertWithoutMovesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMovesInput, UserUpdateWithoutMovesInput>, UserUncheckedUpdateWithoutMovesInput>
  }

  export type UserCreateNestedOneWithoutHeadToHeadAsPlayer1Input = {
    create?: XOR<UserCreateWithoutHeadToHeadAsPlayer1Input, UserUncheckedCreateWithoutHeadToHeadAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutHeadToHeadAsPlayer1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHeadToHeadAsPlayer2Input = {
    create?: XOR<UserCreateWithoutHeadToHeadAsPlayer2Input, UserUncheckedCreateWithoutHeadToHeadAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutHeadToHeadAsPlayer2Input
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHeadToHeadAsPlayer1NestedInput = {
    create?: XOR<UserCreateWithoutHeadToHeadAsPlayer1Input, UserUncheckedCreateWithoutHeadToHeadAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutHeadToHeadAsPlayer1Input
    upsert?: UserUpsertWithoutHeadToHeadAsPlayer1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHeadToHeadAsPlayer1Input, UserUpdateWithoutHeadToHeadAsPlayer1Input>, UserUncheckedUpdateWithoutHeadToHeadAsPlayer1Input>
  }

  export type UserUpdateOneRequiredWithoutHeadToHeadAsPlayer2NestedInput = {
    create?: XOR<UserCreateWithoutHeadToHeadAsPlayer2Input, UserUncheckedCreateWithoutHeadToHeadAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutHeadToHeadAsPlayer2Input
    upsert?: UserUpsertWithoutHeadToHeadAsPlayer2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHeadToHeadAsPlayer2Input, UserUpdateWithoutHeadToHeadAsPlayer2Input>, UserUncheckedUpdateWithoutHeadToHeadAsPlayer2Input>
  }

  export type WordCategoryCreatewordsInput = {
    set: string[]
  }

  export type WordCategoryUpdatewordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GameStatus[] | ListEnumGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type GameCreateWithoutPlayer1Input = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    player2?: UserCreateNestedOneWithoutGamesAsPlayer2Input
    winner?: UserCreateNestedOneWithoutGamesWonInput
    moves?: MoveCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayer1Input = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player2Id?: string | null
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    winnerId?: string | null
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moves?: MoveUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayer1Input = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input>
  }

  export type GameCreateManyPlayer1InputEnvelope = {
    data: GameCreateManyPlayer1Input | GameCreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutPlayer2Input = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutGamesAsPlayer1Input
    winner?: UserCreateNestedOneWithoutGamesWonInput
    moves?: MoveCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayer2Input = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1Id: string
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    winnerId?: string | null
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moves?: MoveUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayer2Input = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input>
  }

  export type GameCreateManyPlayer2InputEnvelope = {
    data: GameCreateManyPlayer2Input | GameCreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutWinnerInput = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutGamesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutGamesAsPlayer2Input
    moves?: MoveCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutWinnerInput = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1Id: string
    player2Id?: string | null
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moves?: MoveUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutWinnerInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput>
  }

  export type GameCreateManyWinnerInputEnvelope = {
    data: GameCreateManyWinnerInput | GameCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type HeadToHeadCreateWithoutPlayer1Input = {
    id?: string
    player1Wins?: number
    player2Wins?: number
    lastPlayed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    player2: UserCreateNestedOneWithoutHeadToHeadAsPlayer2Input
  }

  export type HeadToHeadUncheckedCreateWithoutPlayer1Input = {
    id?: string
    player2Id: string
    player1Wins?: number
    player2Wins?: number
    lastPlayed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadToHeadCreateOrConnectWithoutPlayer1Input = {
    where: HeadToHeadWhereUniqueInput
    create: XOR<HeadToHeadCreateWithoutPlayer1Input, HeadToHeadUncheckedCreateWithoutPlayer1Input>
  }

  export type HeadToHeadCreateManyPlayer1InputEnvelope = {
    data: HeadToHeadCreateManyPlayer1Input | HeadToHeadCreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type HeadToHeadCreateWithoutPlayer2Input = {
    id?: string
    player1Wins?: number
    player2Wins?: number
    lastPlayed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutHeadToHeadAsPlayer1Input
  }

  export type HeadToHeadUncheckedCreateWithoutPlayer2Input = {
    id?: string
    player1Id: string
    player1Wins?: number
    player2Wins?: number
    lastPlayed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadToHeadCreateOrConnectWithoutPlayer2Input = {
    where: HeadToHeadWhereUniqueInput
    create: XOR<HeadToHeadCreateWithoutPlayer2Input, HeadToHeadUncheckedCreateWithoutPlayer2Input>
  }

  export type HeadToHeadCreateManyPlayer2InputEnvelope = {
    data: HeadToHeadCreateManyPlayer2Input | HeadToHeadCreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type MoveCreateWithoutPlayerInput = {
    id?: string
    letter: string
    word: string
    isChallenge?: boolean
    challengeResult?: boolean | null
    createdAt?: Date | string
    game: GameCreateNestedOneWithoutMovesInput
  }

  export type MoveUncheckedCreateWithoutPlayerInput = {
    id?: string
    gameId: string
    letter: string
    word: string
    isChallenge?: boolean
    challengeResult?: boolean | null
    createdAt?: Date | string
  }

  export type MoveCreateOrConnectWithoutPlayerInput = {
    where: MoveWhereUniqueInput
    create: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput>
  }

  export type MoveCreateManyPlayerInputEnvelope = {
    data: MoveCreateManyPlayerInput | MoveCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPlayer1Input, GameUncheckedUpdateWithoutPlayer1Input>
    create: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input>
  }

  export type GameUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPlayer1Input, GameUncheckedUpdateWithoutPlayer1Input>
  }

  export type GameUpdateManyWithWhereWithoutPlayer1Input = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: StringFilter<"Game"> | string
    status?: EnumGameStatusFilter<"Game"> | $Enums.GameStatus
    currentWord?: StringFilter<"Game"> | string
    currentTurn?: StringFilter<"Game"> | string
    player1Id?: StringFilter<"Game"> | string
    player2Id?: StringNullableFilter<"Game"> | string | null
    player1GhostTears?: StringNullableListFilter<"Game">
    player2GhostTears?: StringNullableListFilter<"Game">
    winnerId?: StringNullableFilter<"Game"> | string | null
    wordListCategory?: StringFilter<"Game"> | string
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
  }

  export type GameUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPlayer2Input, GameUncheckedUpdateWithoutPlayer2Input>
    create: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input>
  }

  export type GameUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPlayer2Input, GameUncheckedUpdateWithoutPlayer2Input>
  }

  export type GameUpdateManyWithWhereWithoutPlayer2Input = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type GameUpsertWithWhereUniqueWithoutWinnerInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutWinnerInput, GameUncheckedUpdateWithoutWinnerInput>
    create: XOR<GameCreateWithoutWinnerInput, GameUncheckedCreateWithoutWinnerInput>
  }

  export type GameUpdateWithWhereUniqueWithoutWinnerInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutWinnerInput, GameUncheckedUpdateWithoutWinnerInput>
  }

  export type GameUpdateManyWithWhereWithoutWinnerInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutWinnerInput>
  }

  export type HeadToHeadUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: HeadToHeadWhereUniqueInput
    update: XOR<HeadToHeadUpdateWithoutPlayer1Input, HeadToHeadUncheckedUpdateWithoutPlayer1Input>
    create: XOR<HeadToHeadCreateWithoutPlayer1Input, HeadToHeadUncheckedCreateWithoutPlayer1Input>
  }

  export type HeadToHeadUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: HeadToHeadWhereUniqueInput
    data: XOR<HeadToHeadUpdateWithoutPlayer1Input, HeadToHeadUncheckedUpdateWithoutPlayer1Input>
  }

  export type HeadToHeadUpdateManyWithWhereWithoutPlayer1Input = {
    where: HeadToHeadScalarWhereInput
    data: XOR<HeadToHeadUpdateManyMutationInput, HeadToHeadUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type HeadToHeadScalarWhereInput = {
    AND?: HeadToHeadScalarWhereInput | HeadToHeadScalarWhereInput[]
    OR?: HeadToHeadScalarWhereInput[]
    NOT?: HeadToHeadScalarWhereInput | HeadToHeadScalarWhereInput[]
    id?: StringFilter<"HeadToHead"> | string
    player1Id?: StringFilter<"HeadToHead"> | string
    player2Id?: StringFilter<"HeadToHead"> | string
    player1Wins?: IntFilter<"HeadToHead"> | number
    player2Wins?: IntFilter<"HeadToHead"> | number
    lastPlayed?: DateTimeFilter<"HeadToHead"> | Date | string
    createdAt?: DateTimeFilter<"HeadToHead"> | Date | string
    updatedAt?: DateTimeFilter<"HeadToHead"> | Date | string
  }

  export type HeadToHeadUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: HeadToHeadWhereUniqueInput
    update: XOR<HeadToHeadUpdateWithoutPlayer2Input, HeadToHeadUncheckedUpdateWithoutPlayer2Input>
    create: XOR<HeadToHeadCreateWithoutPlayer2Input, HeadToHeadUncheckedCreateWithoutPlayer2Input>
  }

  export type HeadToHeadUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: HeadToHeadWhereUniqueInput
    data: XOR<HeadToHeadUpdateWithoutPlayer2Input, HeadToHeadUncheckedUpdateWithoutPlayer2Input>
  }

  export type HeadToHeadUpdateManyWithWhereWithoutPlayer2Input = {
    where: HeadToHeadScalarWhereInput
    data: XOR<HeadToHeadUpdateManyMutationInput, HeadToHeadUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type MoveUpsertWithWhereUniqueWithoutPlayerInput = {
    where: MoveWhereUniqueInput
    update: XOR<MoveUpdateWithoutPlayerInput, MoveUncheckedUpdateWithoutPlayerInput>
    create: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput>
  }

  export type MoveUpdateWithWhereUniqueWithoutPlayerInput = {
    where: MoveWhereUniqueInput
    data: XOR<MoveUpdateWithoutPlayerInput, MoveUncheckedUpdateWithoutPlayerInput>
  }

  export type MoveUpdateManyWithWhereWithoutPlayerInput = {
    where: MoveScalarWhereInput
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyWithoutPlayerInput>
  }

  export type MoveScalarWhereInput = {
    AND?: MoveScalarWhereInput | MoveScalarWhereInput[]
    OR?: MoveScalarWhereInput[]
    NOT?: MoveScalarWhereInput | MoveScalarWhereInput[]
    id?: StringFilter<"Move"> | string
    gameId?: StringFilter<"Move"> | string
    playerId?: StringFilter<"Move"> | string
    letter?: StringFilter<"Move"> | string
    word?: StringFilter<"Move"> | string
    isChallenge?: BoolFilter<"Move"> | boolean
    challengeResult?: BoolNullableFilter<"Move"> | boolean | null
    createdAt?: DateTimeFilter<"Move"> | Date | string
  }

  export type UserCreateWithoutGamesAsPlayer1Input = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer1?: HeadToHeadCreateNestedManyWithoutPlayer1Input
    headToHeadAsPlayer2?: HeadToHeadCreateNestedManyWithoutPlayer2Input
    moves?: MoveCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutGamesAsPlayer1Input = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer1?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer1Input
    headToHeadAsPlayer2?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer2Input
    moves?: MoveUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutGamesAsPlayer1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
  }

  export type UserCreateWithoutGamesAsPlayer2Input = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer1?: HeadToHeadCreateNestedManyWithoutPlayer1Input
    headToHeadAsPlayer2?: HeadToHeadCreateNestedManyWithoutPlayer2Input
    moves?: MoveCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutGamesAsPlayer2Input = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer1?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer1Input
    headToHeadAsPlayer2?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer2Input
    moves?: MoveUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutGamesAsPlayer2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
  }

  export type UserCreateWithoutGamesWonInput = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
    headToHeadAsPlayer1?: HeadToHeadCreateNestedManyWithoutPlayer1Input
    headToHeadAsPlayer2?: HeadToHeadCreateNestedManyWithoutPlayer2Input
    moves?: MoveCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutGamesWonInput = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
    headToHeadAsPlayer1?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer1Input
    headToHeadAsPlayer2?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer2Input
    moves?: MoveUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutGamesWonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
  }

  export type MoveCreateWithoutGameInput = {
    id?: string
    letter: string
    word: string
    isChallenge?: boolean
    challengeResult?: boolean | null
    createdAt?: Date | string
    player: UserCreateNestedOneWithoutMovesInput
  }

  export type MoveUncheckedCreateWithoutGameInput = {
    id?: string
    playerId: string
    letter: string
    word: string
    isChallenge?: boolean
    challengeResult?: boolean | null
    createdAt?: Date | string
  }

  export type MoveCreateOrConnectWithoutGameInput = {
    where: MoveWhereUniqueInput
    create: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput>
  }

  export type MoveCreateManyGameInputEnvelope = {
    data: MoveCreateManyGameInput | MoveCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGamesAsPlayer1Input = {
    update: XOR<UserUpdateWithoutGamesAsPlayer1Input, UserUncheckedUpdateWithoutGamesAsPlayer1Input>
    create: XOR<UserCreateWithoutGamesAsPlayer1Input, UserUncheckedCreateWithoutGamesAsPlayer1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesAsPlayer1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesAsPlayer1Input, UserUncheckedUpdateWithoutGamesAsPlayer1Input>
  }

  export type UserUpdateWithoutGamesAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer1?: HeadToHeadUpdateManyWithoutPlayer1NestedInput
    headToHeadAsPlayer2?: HeadToHeadUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer1?: HeadToHeadUncheckedUpdateManyWithoutPlayer1NestedInput
    headToHeadAsPlayer2?: HeadToHeadUncheckedUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserUpsertWithoutGamesAsPlayer2Input = {
    update: XOR<UserUpdateWithoutGamesAsPlayer2Input, UserUncheckedUpdateWithoutGamesAsPlayer2Input>
    create: XOR<UserCreateWithoutGamesAsPlayer2Input, UserUncheckedCreateWithoutGamesAsPlayer2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesAsPlayer2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesAsPlayer2Input, UserUncheckedUpdateWithoutGamesAsPlayer2Input>
  }

  export type UserUpdateWithoutGamesAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer1?: HeadToHeadUpdateManyWithoutPlayer1NestedInput
    headToHeadAsPlayer2?: HeadToHeadUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer1?: HeadToHeadUncheckedUpdateManyWithoutPlayer1NestedInput
    headToHeadAsPlayer2?: HeadToHeadUncheckedUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserUpsertWithoutGamesWonInput = {
    update: XOR<UserUpdateWithoutGamesWonInput, UserUncheckedUpdateWithoutGamesWonInput>
    create: XOR<UserCreateWithoutGamesWonInput, UserUncheckedCreateWithoutGamesWonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesWonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesWonInput, UserUncheckedUpdateWithoutGamesWonInput>
  }

  export type UserUpdateWithoutGamesWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
    headToHeadAsPlayer1?: HeadToHeadUpdateManyWithoutPlayer1NestedInput
    headToHeadAsPlayer2?: HeadToHeadUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesWonInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
    headToHeadAsPlayer1?: HeadToHeadUncheckedUpdateManyWithoutPlayer1NestedInput
    headToHeadAsPlayer2?: HeadToHeadUncheckedUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type MoveUpsertWithWhereUniqueWithoutGameInput = {
    where: MoveWhereUniqueInput
    update: XOR<MoveUpdateWithoutGameInput, MoveUncheckedUpdateWithoutGameInput>
    create: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput>
  }

  export type MoveUpdateWithWhereUniqueWithoutGameInput = {
    where: MoveWhereUniqueInput
    data: XOR<MoveUpdateWithoutGameInput, MoveUncheckedUpdateWithoutGameInput>
  }

  export type MoveUpdateManyWithWhereWithoutGameInput = {
    where: MoveScalarWhereInput
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyWithoutGameInput>
  }

  export type GameCreateWithoutMovesInput = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    player1: UserCreateNestedOneWithoutGamesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutGamesAsPlayer2Input
    winner?: UserCreateNestedOneWithoutGamesWonInput
  }

  export type GameUncheckedCreateWithoutMovesInput = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1Id: string
    player2Id?: string | null
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    winnerId?: string | null
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutMovesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
  }

  export type UserCreateWithoutMovesInput = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer1?: HeadToHeadCreateNestedManyWithoutPlayer1Input
    headToHeadAsPlayer2?: HeadToHeadCreateNestedManyWithoutPlayer2Input
  }

  export type UserUncheckedCreateWithoutMovesInput = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer1?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer1Input
    headToHeadAsPlayer2?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type UserCreateOrConnectWithoutMovesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMovesInput, UserUncheckedCreateWithoutMovesInput>
  }

  export type GameUpsertWithoutMovesInput = {
    update: XOR<GameUpdateWithoutMovesInput, GameUncheckedUpdateWithoutMovesInput>
    create: XOR<GameCreateWithoutMovesInput, GameUncheckedCreateWithoutMovesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutMovesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutMovesInput, GameUncheckedUpdateWithoutMovesInput>
  }

  export type GameUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutGamesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutGamesAsPlayer2NestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
  }

  export type GameUncheckedUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMovesInput = {
    update: XOR<UserUpdateWithoutMovesInput, UserUncheckedUpdateWithoutMovesInput>
    create: XOR<UserCreateWithoutMovesInput, UserUncheckedCreateWithoutMovesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMovesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMovesInput, UserUncheckedUpdateWithoutMovesInput>
  }

  export type UserUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer1?: HeadToHeadUpdateManyWithoutPlayer1NestedInput
    headToHeadAsPlayer2?: HeadToHeadUpdateManyWithoutPlayer2NestedInput
  }

  export type UserUncheckedUpdateWithoutMovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer1?: HeadToHeadUncheckedUpdateManyWithoutPlayer1NestedInput
    headToHeadAsPlayer2?: HeadToHeadUncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type UserCreateWithoutHeadToHeadAsPlayer1Input = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer2?: HeadToHeadCreateNestedManyWithoutPlayer2Input
    moves?: MoveCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutHeadToHeadAsPlayer1Input = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer2?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer2Input
    moves?: MoveUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutHeadToHeadAsPlayer1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHeadToHeadAsPlayer1Input, UserUncheckedCreateWithoutHeadToHeadAsPlayer1Input>
  }

  export type UserCreateWithoutHeadToHeadAsPlayer2Input = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
    gamesWon?: GameCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer1?: HeadToHeadCreateNestedManyWithoutPlayer1Input
    moves?: MoveCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutHeadToHeadAsPlayer2Input = {
    id?: string
    clerkId: string
    username: string
    wins?: number
    losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
    gamesWon?: GameUncheckedCreateNestedManyWithoutWinnerInput
    headToHeadAsPlayer1?: HeadToHeadUncheckedCreateNestedManyWithoutPlayer1Input
    moves?: MoveUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutHeadToHeadAsPlayer2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHeadToHeadAsPlayer2Input, UserUncheckedCreateWithoutHeadToHeadAsPlayer2Input>
  }

  export type UserUpsertWithoutHeadToHeadAsPlayer1Input = {
    update: XOR<UserUpdateWithoutHeadToHeadAsPlayer1Input, UserUncheckedUpdateWithoutHeadToHeadAsPlayer1Input>
    create: XOR<UserCreateWithoutHeadToHeadAsPlayer1Input, UserUncheckedCreateWithoutHeadToHeadAsPlayer1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHeadToHeadAsPlayer1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHeadToHeadAsPlayer1Input, UserUncheckedUpdateWithoutHeadToHeadAsPlayer1Input>
  }

  export type UserUpdateWithoutHeadToHeadAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer2?: HeadToHeadUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutHeadToHeadAsPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer2?: HeadToHeadUncheckedUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserUpsertWithoutHeadToHeadAsPlayer2Input = {
    update: XOR<UserUpdateWithoutHeadToHeadAsPlayer2Input, UserUncheckedUpdateWithoutHeadToHeadAsPlayer2Input>
    create: XOR<UserCreateWithoutHeadToHeadAsPlayer2Input, UserUncheckedCreateWithoutHeadToHeadAsPlayer2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHeadToHeadAsPlayer2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHeadToHeadAsPlayer2Input, UserUncheckedUpdateWithoutHeadToHeadAsPlayer2Input>
  }

  export type UserUpdateWithoutHeadToHeadAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
    gamesWon?: GameUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer1?: HeadToHeadUpdateManyWithoutPlayer1NestedInput
    moves?: MoveUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutHeadToHeadAsPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
    gamesWon?: GameUncheckedUpdateManyWithoutWinnerNestedInput
    headToHeadAsPlayer1?: HeadToHeadUncheckedUpdateManyWithoutPlayer1NestedInput
    moves?: MoveUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type GameCreateManyPlayer1Input = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player2Id?: string | null
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    winnerId?: string | null
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateManyPlayer2Input = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1Id: string
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    winnerId?: string | null
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateManyWinnerInput = {
    id?: string
    status: $Enums.GameStatus
    currentWord: string
    currentTurn: string
    player1Id: string
    player2Id?: string | null
    player1GhostTears?: GameCreateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameCreateplayer2GhostTearsInput | string[]
    wordListCategory?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadToHeadCreateManyPlayer1Input = {
    id?: string
    player2Id: string
    player1Wins?: number
    player2Wins?: number
    lastPlayed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadToHeadCreateManyPlayer2Input = {
    id?: string
    player1Id: string
    player1Wins?: number
    player2Wins?: number
    lastPlayed?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MoveCreateManyPlayerInput = {
    id?: string
    gameId: string
    letter: string
    word: string
    isChallenge?: boolean
    challengeResult?: boolean | null
    createdAt?: Date | string
  }

  export type GameUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player2?: UserUpdateOneWithoutGamesAsPlayer2NestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
    moves?: MoveUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moves?: MoveUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutGamesAsPlayer1NestedInput
    winner?: UserUpdateOneWithoutGamesWonNestedInput
    moves?: MoveUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moves?: MoveUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutGamesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutGamesAsPlayer2NestedInput
    moves?: MoveUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moves?: MoveUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    currentWord?: StringFieldUpdateOperationsInput | string
    currentTurn?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableStringFieldUpdateOperationsInput | string | null
    player1GhostTears?: GameUpdateplayer1GhostTearsInput | string[]
    player2GhostTears?: GameUpdateplayer2GhostTearsInput | string[]
    wordListCategory?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadToHeadUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1Wins?: IntFieldUpdateOperationsInput | number
    player2Wins?: IntFieldUpdateOperationsInput | number
    lastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player2?: UserUpdateOneRequiredWithoutHeadToHeadAsPlayer2NestedInput
  }

  export type HeadToHeadUncheckedUpdateWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    player1Wins?: IntFieldUpdateOperationsInput | number
    player2Wins?: IntFieldUpdateOperationsInput | number
    lastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadToHeadUncheckedUpdateManyWithoutPlayer1Input = {
    id?: StringFieldUpdateOperationsInput | string
    player2Id?: StringFieldUpdateOperationsInput | string
    player1Wins?: IntFieldUpdateOperationsInput | number
    player2Wins?: IntFieldUpdateOperationsInput | number
    lastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadToHeadUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1Wins?: IntFieldUpdateOperationsInput | number
    player2Wins?: IntFieldUpdateOperationsInput | number
    lastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutHeadToHeadAsPlayer1NestedInput
  }

  export type HeadToHeadUncheckedUpdateWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player1Wins?: IntFieldUpdateOperationsInput | number
    player2Wins?: IntFieldUpdateOperationsInput | number
    lastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadToHeadUncheckedUpdateManyWithoutPlayer2Input = {
    id?: StringFieldUpdateOperationsInput | string
    player1Id?: StringFieldUpdateOperationsInput | string
    player1Wins?: IntFieldUpdateOperationsInput | number
    player2Wins?: IntFieldUpdateOperationsInput | number
    lastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isChallenge?: BoolFieldUpdateOperationsInput | boolean
    challengeResult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutMovesNestedInput
  }

  export type MoveUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isChallenge?: BoolFieldUpdateOperationsInput | boolean
    challengeResult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isChallenge?: BoolFieldUpdateOperationsInput | boolean
    challengeResult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveCreateManyGameInput = {
    id?: string
    playerId: string
    letter: string
    word: string
    isChallenge?: boolean
    challengeResult?: boolean | null
    createdAt?: Date | string
  }

  export type MoveUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isChallenge?: BoolFieldUpdateOperationsInput | boolean
    challengeResult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutMovesNestedInput
  }

  export type MoveUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isChallenge?: BoolFieldUpdateOperationsInput | boolean
    challengeResult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    letter?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isChallenge?: BoolFieldUpdateOperationsInput | boolean
    challengeResult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}