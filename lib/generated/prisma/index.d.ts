
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
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model Competitor
 * 
 */
export type Competitor = $Result.DefaultSelection<Prisma.$CompetitorPayload>
/**
 * Model AdAnalysis
 * 
 */
export type AdAnalysis = $Result.DefaultSelection<Prisma.$AdAnalysisPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Businesses
 * const businesses = await prisma.business.findMany()
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
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs>;

  /**
   * `prisma.competitor`: Exposes CRUD operations for the **Competitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitors
    * const competitors = await prisma.competitor.findMany()
    * ```
    */
  get competitor(): Prisma.CompetitorDelegate<ExtArgs>;

  /**
   * `prisma.adAnalysis`: Exposes CRUD operations for the **AdAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdAnalyses
    * const adAnalyses = await prisma.adAnalysis.findMany()
    * ```
    */
  get adAnalysis(): Prisma.AdAnalysisDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Business: 'Business',
    Competitor: 'Competitor',
    AdAnalysis: 'AdAnalysis'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "business" | "competitor" | "adAnalysis"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      Competitor: {
        payload: Prisma.$CompetitorPayload<ExtArgs>
        fields: Prisma.CompetitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          findFirst: {
            args: Prisma.CompetitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          findMany: {
            args: Prisma.CompetitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>[]
          }
          create: {
            args: Prisma.CompetitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          createMany: {
            args: Prisma.CompetitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>[]
          }
          delete: {
            args: Prisma.CompetitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          update: {
            args: Prisma.CompetitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          deleteMany: {
            args: Prisma.CompetitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompetitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorPayload>
          }
          aggregate: {
            args: Prisma.CompetitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitor>
          }
          groupBy: {
            args: Prisma.CompetitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitorCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitorCountAggregateOutputType> | number
          }
        }
      }
      AdAnalysis: {
        payload: Prisma.$AdAnalysisPayload<ExtArgs>
        fields: Prisma.AdAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAnalysisPayload>
          }
          findFirst: {
            args: Prisma.AdAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAnalysisPayload>
          }
          findMany: {
            args: Prisma.AdAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAnalysisPayload>[]
          }
          create: {
            args: Prisma.AdAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAnalysisPayload>
          }
          createMany: {
            args: Prisma.AdAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAnalysisPayload>[]
          }
          delete: {
            args: Prisma.AdAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAnalysisPayload>
          }
          update: {
            args: Prisma.AdAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.AdAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdAnalysisPayload>
          }
          aggregate: {
            args: Prisma.AdAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdAnalysis>
          }
          groupBy: {
            args: Prisma.AdAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<AdAnalysisCountAggregateOutputType> | number
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
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    competitors: number
    adAnalyses: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competitors?: boolean | BusinessCountOutputTypeCountCompetitorsArgs
    adAnalyses?: boolean | BusinessCountOutputTypeCountAdAnalysesArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountCompetitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitorWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountAdAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdAnalysisWhereInput
  }


  /**
   * Count Type CompetitorCountOutputType
   */

  export type CompetitorCountOutputType = {
    adAnalyses: number
  }

  export type CompetitorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adAnalyses?: boolean | CompetitorCountOutputTypeCountAdAnalysesArgs
  }

  // Custom InputTypes
  /**
   * CompetitorCountOutputType without action
   */
  export type CompetitorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorCountOutputType
     */
    select?: CompetitorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitorCountOutputType without action
   */
  export type CompetitorCountOutputTypeCountAdAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdAnalysisWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    industry: string | null
    location: string | null
    keywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    industry: string | null
    location: string | null
    keywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    industry: number
    location: number
    keywords: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    industry?: true
    location?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    industry?: true
    location?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    industry?: true
    location?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: string
    userId: string
    name: string
    industry: string
    location: string | null
    keywords: string
    createdAt: Date
    updatedAt: Date
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    industry?: boolean
    location?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    competitors?: boolean | Business$competitorsArgs<ExtArgs>
    adAnalyses?: boolean | Business$adAnalysesArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    industry?: boolean
    location?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    industry?: boolean
    location?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competitors?: boolean | Business$competitorsArgs<ExtArgs>
    adAnalyses?: boolean | Business$adAnalysesArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      competitors: Prisma.$CompetitorPayload<ExtArgs>[]
      adAnalyses: Prisma.$AdAnalysisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      industry: string
      location: string | null
      keywords: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
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
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competitors<T extends Business$competitorsArgs<ExtArgs> = {}>(args?: Subset<T, Business$competitorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findMany"> | Null>
    adAnalyses<T extends Business$adAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, Business$adAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Business model
   */ 
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'String'>
    readonly userId: FieldRef<"Business", 'String'>
    readonly name: FieldRef<"Business", 'String'>
    readonly industry: FieldRef<"Business", 'String'>
    readonly location: FieldRef<"Business", 'String'>
    readonly keywords: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
    readonly updatedAt: FieldRef<"Business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
  }

  /**
   * Business.competitors
   */
  export type Business$competitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    where?: CompetitorWhereInput
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    cursor?: CompetitorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Business.adAnalyses
   */
  export type Business$adAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
    where?: AdAnalysisWhereInput
    orderBy?: AdAnalysisOrderByWithRelationInput | AdAnalysisOrderByWithRelationInput[]
    cursor?: AdAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdAnalysisScalarFieldEnum | AdAnalysisScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model Competitor
   */

  export type AggregateCompetitor = {
    _count: CompetitorCountAggregateOutputType | null
    _min: CompetitorMinAggregateOutputType | null
    _max: CompetitorMaxAggregateOutputType | null
  }

  export type CompetitorMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    name: string | null
    platform: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitorMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    name: string | null
    platform: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitorCountAggregateOutputType = {
    id: number
    businessId: number
    name: number
    platform: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompetitorMinAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitorMaxAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitorCountAggregateInputType = {
    id?: true
    businessId?: true
    name?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompetitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitor to aggregate.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitors
    **/
    _count?: true | CompetitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitorMaxAggregateInputType
  }

  export type GetCompetitorAggregateType<T extends CompetitorAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitor[P]>
      : GetScalarType<T[P], AggregateCompetitor[P]>
  }




  export type CompetitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitorWhereInput
    orderBy?: CompetitorOrderByWithAggregationInput | CompetitorOrderByWithAggregationInput[]
    by: CompetitorScalarFieldEnum[] | CompetitorScalarFieldEnum
    having?: CompetitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitorCountAggregateInputType | true
    _min?: CompetitorMinAggregateInputType
    _max?: CompetitorMaxAggregateInputType
  }

  export type CompetitorGroupByOutputType = {
    id: string
    businessId: string
    name: string
    platform: string
    createdAt: Date
    updatedAt: Date
    _count: CompetitorCountAggregateOutputType | null
    _min: CompetitorMinAggregateOutputType | null
    _max: CompetitorMaxAggregateOutputType | null
  }

  type GetCompetitorGroupByPayload<T extends CompetitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitorGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitorGroupByOutputType[P]>
        }
      >
    >


  export type CompetitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    name?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    adAnalyses?: boolean | Competitor$adAnalysesArgs<ExtArgs>
    _count?: boolean | CompetitorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitor"]>

  export type CompetitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    name?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitor"]>

  export type CompetitorSelectScalar = {
    id?: boolean
    businessId?: boolean
    name?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompetitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    adAnalyses?: boolean | Competitor$adAnalysesArgs<ExtArgs>
    _count?: boolean | CompetitorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $CompetitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competitor"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      adAnalyses: Prisma.$AdAnalysisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      name: string
      platform: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["competitor"]>
    composites: {}
  }

  type CompetitorGetPayload<S extends boolean | null | undefined | CompetitorDefaultArgs> = $Result.GetResult<Prisma.$CompetitorPayload, S>

  type CompetitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompetitorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompetitorCountAggregateInputType | true
    }

  export interface CompetitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competitor'], meta: { name: 'Competitor' } }
    /**
     * Find zero or one Competitor that matches the filter.
     * @param {CompetitorFindUniqueArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitorFindUniqueArgs>(args: SelectSubset<T, CompetitorFindUniqueArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Competitor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompetitorFindUniqueOrThrowArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitorFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Competitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindFirstArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitorFindFirstArgs>(args?: SelectSubset<T, CompetitorFindFirstArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Competitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindFirstOrThrowArgs} args - Arguments to find a Competitor
     * @example
     * // Get one Competitor
     * const competitor = await prisma.competitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitorFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Competitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitors
     * const competitors = await prisma.competitor.findMany()
     * 
     * // Get first 10 Competitors
     * const competitors = await prisma.competitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitorWithIdOnly = await prisma.competitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitorFindManyArgs>(args?: SelectSubset<T, CompetitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Competitor.
     * @param {CompetitorCreateArgs} args - Arguments to create a Competitor.
     * @example
     * // Create one Competitor
     * const Competitor = await prisma.competitor.create({
     *   data: {
     *     // ... data to create a Competitor
     *   }
     * })
     * 
     */
    create<T extends CompetitorCreateArgs>(args: SelectSubset<T, CompetitorCreateArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Competitors.
     * @param {CompetitorCreateManyArgs} args - Arguments to create many Competitors.
     * @example
     * // Create many Competitors
     * const competitor = await prisma.competitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitorCreateManyArgs>(args?: SelectSubset<T, CompetitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitors and returns the data saved in the database.
     * @param {CompetitorCreateManyAndReturnArgs} args - Arguments to create many Competitors.
     * @example
     * // Create many Competitors
     * const competitor = await prisma.competitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitors and only return the `id`
     * const competitorWithIdOnly = await prisma.competitor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitorCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Competitor.
     * @param {CompetitorDeleteArgs} args - Arguments to delete one Competitor.
     * @example
     * // Delete one Competitor
     * const Competitor = await prisma.competitor.delete({
     *   where: {
     *     // ... filter to delete one Competitor
     *   }
     * })
     * 
     */
    delete<T extends CompetitorDeleteArgs>(args: SelectSubset<T, CompetitorDeleteArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Competitor.
     * @param {CompetitorUpdateArgs} args - Arguments to update one Competitor.
     * @example
     * // Update one Competitor
     * const competitor = await prisma.competitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitorUpdateArgs>(args: SelectSubset<T, CompetitorUpdateArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Competitors.
     * @param {CompetitorDeleteManyArgs} args - Arguments to filter Competitors to delete.
     * @example
     * // Delete a few Competitors
     * const { count } = await prisma.competitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitorDeleteManyArgs>(args?: SelectSubset<T, CompetitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitors
     * const competitor = await prisma.competitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitorUpdateManyArgs>(args: SelectSubset<T, CompetitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Competitor.
     * @param {CompetitorUpsertArgs} args - Arguments to update or create a Competitor.
     * @example
     * // Update or create a Competitor
     * const competitor = await prisma.competitor.upsert({
     *   create: {
     *     // ... data to create a Competitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competitor we want to update
     *   }
     * })
     */
    upsert<T extends CompetitorUpsertArgs>(args: SelectSubset<T, CompetitorUpsertArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Competitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorCountArgs} args - Arguments to filter Competitors to count.
     * @example
     * // Count the number of Competitors
     * const count = await prisma.competitor.count({
     *   where: {
     *     // ... the filter for the Competitors we want to count
     *   }
     * })
    **/
    count<T extends CompetitorCountArgs>(
      args?: Subset<T, CompetitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitorAggregateArgs>(args: Subset<T, CompetitorAggregateArgs>): Prisma.PrismaPromise<GetCompetitorAggregateType<T>>

    /**
     * Group by Competitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorGroupByArgs} args - Group by arguments.
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
      T extends CompetitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitorGroupByArgs['orderBy'] }
        : { orderBy?: CompetitorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competitor model
   */
  readonly fields: CompetitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    adAnalyses<T extends Competitor$adAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, Competitor$adAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Competitor model
   */ 
  interface CompetitorFieldRefs {
    readonly id: FieldRef<"Competitor", 'String'>
    readonly businessId: FieldRef<"Competitor", 'String'>
    readonly name: FieldRef<"Competitor", 'String'>
    readonly platform: FieldRef<"Competitor", 'String'>
    readonly createdAt: FieldRef<"Competitor", 'DateTime'>
    readonly updatedAt: FieldRef<"Competitor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Competitor findUnique
   */
  export type CompetitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor findUniqueOrThrow
   */
  export type CompetitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor findFirst
   */
  export type CompetitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitors.
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitors.
     */
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Competitor findFirstOrThrow
   */
  export type CompetitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitor to fetch.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitors.
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitors.
     */
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Competitor findMany
   */
  export type CompetitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter, which Competitors to fetch.
     */
    where?: CompetitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitors to fetch.
     */
    orderBy?: CompetitorOrderByWithRelationInput | CompetitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitors.
     */
    cursor?: CompetitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitors.
     */
    skip?: number
    distinct?: CompetitorScalarFieldEnum | CompetitorScalarFieldEnum[]
  }

  /**
   * Competitor create
   */
  export type CompetitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Competitor.
     */
    data: XOR<CompetitorCreateInput, CompetitorUncheckedCreateInput>
  }

  /**
   * Competitor createMany
   */
  export type CompetitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competitors.
     */
    data: CompetitorCreateManyInput | CompetitorCreateManyInput[]
  }

  /**
   * Competitor createManyAndReturn
   */
  export type CompetitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Competitors.
     */
    data: CompetitorCreateManyInput | CompetitorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Competitor update
   */
  export type CompetitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Competitor.
     */
    data: XOR<CompetitorUpdateInput, CompetitorUncheckedUpdateInput>
    /**
     * Choose, which Competitor to update.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor updateMany
   */
  export type CompetitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competitors.
     */
    data: XOR<CompetitorUpdateManyMutationInput, CompetitorUncheckedUpdateManyInput>
    /**
     * Filter which Competitors to update
     */
    where?: CompetitorWhereInput
  }

  /**
   * Competitor upsert
   */
  export type CompetitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Competitor to update in case it exists.
     */
    where: CompetitorWhereUniqueInput
    /**
     * In case the Competitor found by the `where` argument doesn't exist, create a new Competitor with this data.
     */
    create: XOR<CompetitorCreateInput, CompetitorUncheckedCreateInput>
    /**
     * In case the Competitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitorUpdateInput, CompetitorUncheckedUpdateInput>
  }

  /**
   * Competitor delete
   */
  export type CompetitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
    /**
     * Filter which Competitor to delete.
     */
    where: CompetitorWhereUniqueInput
  }

  /**
   * Competitor deleteMany
   */
  export type CompetitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitors to delete
     */
    where?: CompetitorWhereInput
  }

  /**
   * Competitor.adAnalyses
   */
  export type Competitor$adAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
    where?: AdAnalysisWhereInput
    orderBy?: AdAnalysisOrderByWithRelationInput | AdAnalysisOrderByWithRelationInput[]
    cursor?: AdAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdAnalysisScalarFieldEnum | AdAnalysisScalarFieldEnum[]
  }

  /**
   * Competitor without action
   */
  export type CompetitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competitor
     */
    select?: CompetitorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorInclude<ExtArgs> | null
  }


  /**
   * Model AdAnalysis
   */

  export type AggregateAdAnalysis = {
    _count: AdAnalysisCountAggregateOutputType | null
    _min: AdAnalysisMinAggregateOutputType | null
    _max: AdAnalysisMaxAggregateOutputType | null
  }

  export type AdAnalysisMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    competitorId: string | null
    platform: string | null
    adType: string | null
    content: string | null
    mediaUrl: string | null
    landingPage: string | null
    cta: string | null
    emotions: string | null
    targetDemographic: string | null
    designStyle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdAnalysisMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    competitorId: string | null
    platform: string | null
    adType: string | null
    content: string | null
    mediaUrl: string | null
    landingPage: string | null
    cta: string | null
    emotions: string | null
    targetDemographic: string | null
    designStyle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdAnalysisCountAggregateOutputType = {
    id: number
    businessId: number
    competitorId: number
    platform: number
    adType: number
    content: number
    mediaUrl: number
    landingPage: number
    cta: number
    emotions: number
    targetDemographic: number
    designStyle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdAnalysisMinAggregateInputType = {
    id?: true
    businessId?: true
    competitorId?: true
    platform?: true
    adType?: true
    content?: true
    mediaUrl?: true
    landingPage?: true
    cta?: true
    emotions?: true
    targetDemographic?: true
    designStyle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdAnalysisMaxAggregateInputType = {
    id?: true
    businessId?: true
    competitorId?: true
    platform?: true
    adType?: true
    content?: true
    mediaUrl?: true
    landingPage?: true
    cta?: true
    emotions?: true
    targetDemographic?: true
    designStyle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdAnalysisCountAggregateInputType = {
    id?: true
    businessId?: true
    competitorId?: true
    platform?: true
    adType?: true
    content?: true
    mediaUrl?: true
    landingPage?: true
    cta?: true
    emotions?: true
    targetDemographic?: true
    designStyle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdAnalysis to aggregate.
     */
    where?: AdAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdAnalyses to fetch.
     */
    orderBy?: AdAnalysisOrderByWithRelationInput | AdAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdAnalyses
    **/
    _count?: true | AdAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdAnalysisMaxAggregateInputType
  }

  export type GetAdAnalysisAggregateType<T extends AdAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateAdAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdAnalysis[P]>
      : GetScalarType<T[P], AggregateAdAnalysis[P]>
  }




  export type AdAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdAnalysisWhereInput
    orderBy?: AdAnalysisOrderByWithAggregationInput | AdAnalysisOrderByWithAggregationInput[]
    by: AdAnalysisScalarFieldEnum[] | AdAnalysisScalarFieldEnum
    having?: AdAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdAnalysisCountAggregateInputType | true
    _min?: AdAnalysisMinAggregateInputType
    _max?: AdAnalysisMaxAggregateInputType
  }

  export type AdAnalysisGroupByOutputType = {
    id: string
    businessId: string
    competitorId: string
    platform: string
    adType: string
    content: string
    mediaUrl: string | null
    landingPage: string | null
    cta: string | null
    emotions: string
    targetDemographic: string | null
    designStyle: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdAnalysisCountAggregateOutputType | null
    _min: AdAnalysisMinAggregateOutputType | null
    _max: AdAnalysisMaxAggregateOutputType | null
  }

  type GetAdAnalysisGroupByPayload<T extends AdAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], AdAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type AdAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    competitorId?: boolean
    platform?: boolean
    adType?: boolean
    content?: boolean
    mediaUrl?: boolean
    landingPage?: boolean
    cta?: boolean
    emotions?: boolean
    targetDemographic?: boolean
    designStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    competitor?: boolean | CompetitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adAnalysis"]>

  export type AdAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    competitorId?: boolean
    platform?: boolean
    adType?: boolean
    content?: boolean
    mediaUrl?: boolean
    landingPage?: boolean
    cta?: boolean
    emotions?: boolean
    targetDemographic?: boolean
    designStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    competitor?: boolean | CompetitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adAnalysis"]>

  export type AdAnalysisSelectScalar = {
    id?: boolean
    businessId?: boolean
    competitorId?: boolean
    platform?: boolean
    adType?: boolean
    content?: boolean
    mediaUrl?: boolean
    landingPage?: boolean
    cta?: boolean
    emotions?: boolean
    targetDemographic?: boolean
    designStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    competitor?: boolean | CompetitorDefaultArgs<ExtArgs>
  }
  export type AdAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    competitor?: boolean | CompetitorDefaultArgs<ExtArgs>
  }

  export type $AdAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdAnalysis"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      competitor: Prisma.$CompetitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      competitorId: string
      platform: string
      adType: string
      content: string
      mediaUrl: string | null
      landingPage: string | null
      cta: string | null
      emotions: string
      targetDemographic: string | null
      designStyle: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adAnalysis"]>
    composites: {}
  }

  type AdAnalysisGetPayload<S extends boolean | null | undefined | AdAnalysisDefaultArgs> = $Result.GetResult<Prisma.$AdAnalysisPayload, S>

  type AdAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdAnalysisFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdAnalysisCountAggregateInputType | true
    }

  export interface AdAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdAnalysis'], meta: { name: 'AdAnalysis' } }
    /**
     * Find zero or one AdAnalysis that matches the filter.
     * @param {AdAnalysisFindUniqueArgs} args - Arguments to find a AdAnalysis
     * @example
     * // Get one AdAnalysis
     * const adAnalysis = await prisma.adAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdAnalysisFindUniqueArgs>(args: SelectSubset<T, AdAnalysisFindUniqueArgs<ExtArgs>>): Prisma__AdAnalysisClient<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdAnalysis that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdAnalysisFindUniqueOrThrowArgs} args - Arguments to find a AdAnalysis
     * @example
     * // Get one AdAnalysis
     * const adAnalysis = await prisma.adAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, AdAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdAnalysisClient<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAnalysisFindFirstArgs} args - Arguments to find a AdAnalysis
     * @example
     * // Get one AdAnalysis
     * const adAnalysis = await prisma.adAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdAnalysisFindFirstArgs>(args?: SelectSubset<T, AdAnalysisFindFirstArgs<ExtArgs>>): Prisma__AdAnalysisClient<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAnalysisFindFirstOrThrowArgs} args - Arguments to find a AdAnalysis
     * @example
     * // Get one AdAnalysis
     * const adAnalysis = await prisma.adAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, AdAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdAnalysisClient<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdAnalyses
     * const adAnalyses = await prisma.adAnalysis.findMany()
     * 
     * // Get first 10 AdAnalyses
     * const adAnalyses = await prisma.adAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adAnalysisWithIdOnly = await prisma.adAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdAnalysisFindManyArgs>(args?: SelectSubset<T, AdAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdAnalysis.
     * @param {AdAnalysisCreateArgs} args - Arguments to create a AdAnalysis.
     * @example
     * // Create one AdAnalysis
     * const AdAnalysis = await prisma.adAnalysis.create({
     *   data: {
     *     // ... data to create a AdAnalysis
     *   }
     * })
     * 
     */
    create<T extends AdAnalysisCreateArgs>(args: SelectSubset<T, AdAnalysisCreateArgs<ExtArgs>>): Prisma__AdAnalysisClient<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdAnalyses.
     * @param {AdAnalysisCreateManyArgs} args - Arguments to create many AdAnalyses.
     * @example
     * // Create many AdAnalyses
     * const adAnalysis = await prisma.adAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdAnalysisCreateManyArgs>(args?: SelectSubset<T, AdAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdAnalyses and returns the data saved in the database.
     * @param {AdAnalysisCreateManyAndReturnArgs} args - Arguments to create many AdAnalyses.
     * @example
     * // Create many AdAnalyses
     * const adAnalysis = await prisma.adAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdAnalyses and only return the `id`
     * const adAnalysisWithIdOnly = await prisma.adAnalysis.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, AdAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdAnalysis.
     * @param {AdAnalysisDeleteArgs} args - Arguments to delete one AdAnalysis.
     * @example
     * // Delete one AdAnalysis
     * const AdAnalysis = await prisma.adAnalysis.delete({
     *   where: {
     *     // ... filter to delete one AdAnalysis
     *   }
     * })
     * 
     */
    delete<T extends AdAnalysisDeleteArgs>(args: SelectSubset<T, AdAnalysisDeleteArgs<ExtArgs>>): Prisma__AdAnalysisClient<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdAnalysis.
     * @param {AdAnalysisUpdateArgs} args - Arguments to update one AdAnalysis.
     * @example
     * // Update one AdAnalysis
     * const adAnalysis = await prisma.adAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdAnalysisUpdateArgs>(args: SelectSubset<T, AdAnalysisUpdateArgs<ExtArgs>>): Prisma__AdAnalysisClient<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdAnalyses.
     * @param {AdAnalysisDeleteManyArgs} args - Arguments to filter AdAnalyses to delete.
     * @example
     * // Delete a few AdAnalyses
     * const { count } = await prisma.adAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdAnalysisDeleteManyArgs>(args?: SelectSubset<T, AdAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdAnalyses
     * const adAnalysis = await prisma.adAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdAnalysisUpdateManyArgs>(args: SelectSubset<T, AdAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdAnalysis.
     * @param {AdAnalysisUpsertArgs} args - Arguments to update or create a AdAnalysis.
     * @example
     * // Update or create a AdAnalysis
     * const adAnalysis = await prisma.adAnalysis.upsert({
     *   create: {
     *     // ... data to create a AdAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends AdAnalysisUpsertArgs>(args: SelectSubset<T, AdAnalysisUpsertArgs<ExtArgs>>): Prisma__AdAnalysisClient<$Result.GetResult<Prisma.$AdAnalysisPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAnalysisCountArgs} args - Arguments to filter AdAnalyses to count.
     * @example
     * // Count the number of AdAnalyses
     * const count = await prisma.adAnalysis.count({
     *   where: {
     *     // ... the filter for the AdAnalyses we want to count
     *   }
     * })
    **/
    count<T extends AdAnalysisCountArgs>(
      args?: Subset<T, AdAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdAnalysisAggregateArgs>(args: Subset<T, AdAnalysisAggregateArgs>): Prisma.PrismaPromise<GetAdAnalysisAggregateType<T>>

    /**
     * Group by AdAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAnalysisGroupByArgs} args - Group by arguments.
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
      T extends AdAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: AdAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdAnalysis model
   */
  readonly fields: AdAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    competitor<T extends CompetitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitorDefaultArgs<ExtArgs>>): Prisma__CompetitorClient<$Result.GetResult<Prisma.$CompetitorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AdAnalysis model
   */ 
  interface AdAnalysisFieldRefs {
    readonly id: FieldRef<"AdAnalysis", 'String'>
    readonly businessId: FieldRef<"AdAnalysis", 'String'>
    readonly competitorId: FieldRef<"AdAnalysis", 'String'>
    readonly platform: FieldRef<"AdAnalysis", 'String'>
    readonly adType: FieldRef<"AdAnalysis", 'String'>
    readonly content: FieldRef<"AdAnalysis", 'String'>
    readonly mediaUrl: FieldRef<"AdAnalysis", 'String'>
    readonly landingPage: FieldRef<"AdAnalysis", 'String'>
    readonly cta: FieldRef<"AdAnalysis", 'String'>
    readonly emotions: FieldRef<"AdAnalysis", 'String'>
    readonly targetDemographic: FieldRef<"AdAnalysis", 'String'>
    readonly designStyle: FieldRef<"AdAnalysis", 'String'>
    readonly createdAt: FieldRef<"AdAnalysis", 'DateTime'>
    readonly updatedAt: FieldRef<"AdAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdAnalysis findUnique
   */
  export type AdAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AdAnalysis to fetch.
     */
    where: AdAnalysisWhereUniqueInput
  }

  /**
   * AdAnalysis findUniqueOrThrow
   */
  export type AdAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AdAnalysis to fetch.
     */
    where: AdAnalysisWhereUniqueInput
  }

  /**
   * AdAnalysis findFirst
   */
  export type AdAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AdAnalysis to fetch.
     */
    where?: AdAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdAnalyses to fetch.
     */
    orderBy?: AdAnalysisOrderByWithRelationInput | AdAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdAnalyses.
     */
    cursor?: AdAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdAnalyses.
     */
    distinct?: AdAnalysisScalarFieldEnum | AdAnalysisScalarFieldEnum[]
  }

  /**
   * AdAnalysis findFirstOrThrow
   */
  export type AdAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AdAnalysis to fetch.
     */
    where?: AdAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdAnalyses to fetch.
     */
    orderBy?: AdAnalysisOrderByWithRelationInput | AdAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdAnalyses.
     */
    cursor?: AdAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdAnalyses.
     */
    distinct?: AdAnalysisScalarFieldEnum | AdAnalysisScalarFieldEnum[]
  }

  /**
   * AdAnalysis findMany
   */
  export type AdAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AdAnalyses to fetch.
     */
    where?: AdAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdAnalyses to fetch.
     */
    orderBy?: AdAnalysisOrderByWithRelationInput | AdAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdAnalyses.
     */
    cursor?: AdAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdAnalyses.
     */
    skip?: number
    distinct?: AdAnalysisScalarFieldEnum | AdAnalysisScalarFieldEnum[]
  }

  /**
   * AdAnalysis create
   */
  export type AdAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a AdAnalysis.
     */
    data: XOR<AdAnalysisCreateInput, AdAnalysisUncheckedCreateInput>
  }

  /**
   * AdAnalysis createMany
   */
  export type AdAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdAnalyses.
     */
    data: AdAnalysisCreateManyInput | AdAnalysisCreateManyInput[]
  }

  /**
   * AdAnalysis createManyAndReturn
   */
  export type AdAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdAnalyses.
     */
    data: AdAnalysisCreateManyInput | AdAnalysisCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdAnalysis update
   */
  export type AdAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a AdAnalysis.
     */
    data: XOR<AdAnalysisUpdateInput, AdAnalysisUncheckedUpdateInput>
    /**
     * Choose, which AdAnalysis to update.
     */
    where: AdAnalysisWhereUniqueInput
  }

  /**
   * AdAnalysis updateMany
   */
  export type AdAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdAnalyses.
     */
    data: XOR<AdAnalysisUpdateManyMutationInput, AdAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which AdAnalyses to update
     */
    where?: AdAnalysisWhereInput
  }

  /**
   * AdAnalysis upsert
   */
  export type AdAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the AdAnalysis to update in case it exists.
     */
    where: AdAnalysisWhereUniqueInput
    /**
     * In case the AdAnalysis found by the `where` argument doesn't exist, create a new AdAnalysis with this data.
     */
    create: XOR<AdAnalysisCreateInput, AdAnalysisUncheckedCreateInput>
    /**
     * In case the AdAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdAnalysisUpdateInput, AdAnalysisUncheckedUpdateInput>
  }

  /**
   * AdAnalysis delete
   */
  export type AdAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
    /**
     * Filter which AdAnalysis to delete.
     */
    where: AdAnalysisWhereUniqueInput
  }

  /**
   * AdAnalysis deleteMany
   */
  export type AdAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdAnalyses to delete
     */
    where?: AdAnalysisWhereInput
  }

  /**
   * AdAnalysis without action
   */
  export type AdAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdAnalysis
     */
    select?: AdAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdAnalysisInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    industry: 'industry',
    location: 'location',
    keywords: 'keywords',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const CompetitorScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    name: 'name',
    platform: 'platform',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompetitorScalarFieldEnum = (typeof CompetitorScalarFieldEnum)[keyof typeof CompetitorScalarFieldEnum]


  export const AdAnalysisScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    competitorId: 'competitorId',
    platform: 'platform',
    adType: 'adType',
    content: 'content',
    mediaUrl: 'mediaUrl',
    landingPage: 'landingPage',
    cta: 'cta',
    emotions: 'emotions',
    targetDemographic: 'targetDemographic',
    designStyle: 'designStyle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdAnalysisScalarFieldEnum = (typeof AdAnalysisScalarFieldEnum)[keyof typeof AdAnalysisScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: StringFilter<"Business"> | string
    userId?: StringFilter<"Business"> | string
    name?: StringFilter<"Business"> | string
    industry?: StringFilter<"Business"> | string
    location?: StringNullableFilter<"Business"> | string | null
    keywords?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    competitors?: CompetitorListRelationFilter
    adAnalyses?: AdAnalysisListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    location?: SortOrderInput | SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    competitors?: CompetitorOrderByRelationAggregateInput
    adAnalyses?: AdAnalysisOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    userId?: StringFilter<"Business"> | string
    name?: StringFilter<"Business"> | string
    industry?: StringFilter<"Business"> | string
    location?: StringNullableFilter<"Business"> | string | null
    keywords?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    competitors?: CompetitorListRelationFilter
    adAnalyses?: AdAnalysisListRelationFilter
  }, "id">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    location?: SortOrderInput | SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Business"> | string
    userId?: StringWithAggregatesFilter<"Business"> | string
    name?: StringWithAggregatesFilter<"Business"> | string
    industry?: StringWithAggregatesFilter<"Business"> | string
    location?: StringNullableWithAggregatesFilter<"Business"> | string | null
    keywords?: StringWithAggregatesFilter<"Business"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
  }

  export type CompetitorWhereInput = {
    AND?: CompetitorWhereInput | CompetitorWhereInput[]
    OR?: CompetitorWhereInput[]
    NOT?: CompetitorWhereInput | CompetitorWhereInput[]
    id?: StringFilter<"Competitor"> | string
    businessId?: StringFilter<"Competitor"> | string
    name?: StringFilter<"Competitor"> | string
    platform?: StringFilter<"Competitor"> | string
    createdAt?: DateTimeFilter<"Competitor"> | Date | string
    updatedAt?: DateTimeFilter<"Competitor"> | Date | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    adAnalyses?: AdAnalysisListRelationFilter
  }

  export type CompetitorOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    adAnalyses?: AdAnalysisOrderByRelationAggregateInput
  }

  export type CompetitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompetitorWhereInput | CompetitorWhereInput[]
    OR?: CompetitorWhereInput[]
    NOT?: CompetitorWhereInput | CompetitorWhereInput[]
    businessId?: StringFilter<"Competitor"> | string
    name?: StringFilter<"Competitor"> | string
    platform?: StringFilter<"Competitor"> | string
    createdAt?: DateTimeFilter<"Competitor"> | Date | string
    updatedAt?: DateTimeFilter<"Competitor"> | Date | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    adAnalyses?: AdAnalysisListRelationFilter
  }, "id">

  export type CompetitorOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompetitorCountOrderByAggregateInput
    _max?: CompetitorMaxOrderByAggregateInput
    _min?: CompetitorMinOrderByAggregateInput
  }

  export type CompetitorScalarWhereWithAggregatesInput = {
    AND?: CompetitorScalarWhereWithAggregatesInput | CompetitorScalarWhereWithAggregatesInput[]
    OR?: CompetitorScalarWhereWithAggregatesInput[]
    NOT?: CompetitorScalarWhereWithAggregatesInput | CompetitorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Competitor"> | string
    businessId?: StringWithAggregatesFilter<"Competitor"> | string
    name?: StringWithAggregatesFilter<"Competitor"> | string
    platform?: StringWithAggregatesFilter<"Competitor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Competitor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Competitor"> | Date | string
  }

  export type AdAnalysisWhereInput = {
    AND?: AdAnalysisWhereInput | AdAnalysisWhereInput[]
    OR?: AdAnalysisWhereInput[]
    NOT?: AdAnalysisWhereInput | AdAnalysisWhereInput[]
    id?: StringFilter<"AdAnalysis"> | string
    businessId?: StringFilter<"AdAnalysis"> | string
    competitorId?: StringFilter<"AdAnalysis"> | string
    platform?: StringFilter<"AdAnalysis"> | string
    adType?: StringFilter<"AdAnalysis"> | string
    content?: StringFilter<"AdAnalysis"> | string
    mediaUrl?: StringNullableFilter<"AdAnalysis"> | string | null
    landingPage?: StringNullableFilter<"AdAnalysis"> | string | null
    cta?: StringNullableFilter<"AdAnalysis"> | string | null
    emotions?: StringFilter<"AdAnalysis"> | string
    targetDemographic?: StringNullableFilter<"AdAnalysis"> | string | null
    designStyle?: StringNullableFilter<"AdAnalysis"> | string | null
    createdAt?: DateTimeFilter<"AdAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"AdAnalysis"> | Date | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    competitor?: XOR<CompetitorRelationFilter, CompetitorWhereInput>
  }

  export type AdAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    competitorId?: SortOrder
    platform?: SortOrder
    adType?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    landingPage?: SortOrderInput | SortOrder
    cta?: SortOrderInput | SortOrder
    emotions?: SortOrder
    targetDemographic?: SortOrderInput | SortOrder
    designStyle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    competitor?: CompetitorOrderByWithRelationInput
  }

  export type AdAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdAnalysisWhereInput | AdAnalysisWhereInput[]
    OR?: AdAnalysisWhereInput[]
    NOT?: AdAnalysisWhereInput | AdAnalysisWhereInput[]
    businessId?: StringFilter<"AdAnalysis"> | string
    competitorId?: StringFilter<"AdAnalysis"> | string
    platform?: StringFilter<"AdAnalysis"> | string
    adType?: StringFilter<"AdAnalysis"> | string
    content?: StringFilter<"AdAnalysis"> | string
    mediaUrl?: StringNullableFilter<"AdAnalysis"> | string | null
    landingPage?: StringNullableFilter<"AdAnalysis"> | string | null
    cta?: StringNullableFilter<"AdAnalysis"> | string | null
    emotions?: StringFilter<"AdAnalysis"> | string
    targetDemographic?: StringNullableFilter<"AdAnalysis"> | string | null
    designStyle?: StringNullableFilter<"AdAnalysis"> | string | null
    createdAt?: DateTimeFilter<"AdAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"AdAnalysis"> | Date | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    competitor?: XOR<CompetitorRelationFilter, CompetitorWhereInput>
  }, "id">

  export type AdAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    competitorId?: SortOrder
    platform?: SortOrder
    adType?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    landingPage?: SortOrderInput | SortOrder
    cta?: SortOrderInput | SortOrder
    emotions?: SortOrder
    targetDemographic?: SortOrderInput | SortOrder
    designStyle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdAnalysisCountOrderByAggregateInput
    _max?: AdAnalysisMaxOrderByAggregateInput
    _min?: AdAnalysisMinOrderByAggregateInput
  }

  export type AdAnalysisScalarWhereWithAggregatesInput = {
    AND?: AdAnalysisScalarWhereWithAggregatesInput | AdAnalysisScalarWhereWithAggregatesInput[]
    OR?: AdAnalysisScalarWhereWithAggregatesInput[]
    NOT?: AdAnalysisScalarWhereWithAggregatesInput | AdAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdAnalysis"> | string
    businessId?: StringWithAggregatesFilter<"AdAnalysis"> | string
    competitorId?: StringWithAggregatesFilter<"AdAnalysis"> | string
    platform?: StringWithAggregatesFilter<"AdAnalysis"> | string
    adType?: StringWithAggregatesFilter<"AdAnalysis"> | string
    content?: StringWithAggregatesFilter<"AdAnalysis"> | string
    mediaUrl?: StringNullableWithAggregatesFilter<"AdAnalysis"> | string | null
    landingPage?: StringNullableWithAggregatesFilter<"AdAnalysis"> | string | null
    cta?: StringNullableWithAggregatesFilter<"AdAnalysis"> | string | null
    emotions?: StringWithAggregatesFilter<"AdAnalysis"> | string
    targetDemographic?: StringNullableWithAggregatesFilter<"AdAnalysis"> | string | null
    designStyle?: StringNullableWithAggregatesFilter<"AdAnalysis"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdAnalysis"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdAnalysis"> | Date | string
  }

  export type BusinessCreateInput = {
    id?: string
    userId: string
    name: string
    industry: string
    location?: string | null
    keywords: string
    createdAt?: Date | string
    updatedAt?: Date | string
    competitors?: CompetitorCreateNestedManyWithoutBusinessInput
    adAnalyses?: AdAnalysisCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    industry: string
    location?: string | null
    keywords: string
    createdAt?: Date | string
    updatedAt?: Date | string
    competitors?: CompetitorUncheckedCreateNestedManyWithoutBusinessInput
    adAnalyses?: AdAnalysisUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitors?: CompetitorUpdateManyWithoutBusinessNestedInput
    adAnalyses?: AdAnalysisUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitors?: CompetitorUncheckedUpdateManyWithoutBusinessNestedInput
    adAnalyses?: AdAnalysisUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: string
    userId: string
    name: string
    industry: string
    location?: string | null
    keywords: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorCreateInput = {
    id?: string
    name: string
    platform: string
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutCompetitorsInput
    adAnalyses?: AdAnalysisCreateNestedManyWithoutCompetitorInput
  }

  export type CompetitorUncheckedCreateInput = {
    id?: string
    businessId: string
    name: string
    platform: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adAnalyses?: AdAnalysisUncheckedCreateNestedManyWithoutCompetitorInput
  }

  export type CompetitorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutCompetitorsNestedInput
    adAnalyses?: AdAnalysisUpdateManyWithoutCompetitorNestedInput
  }

  export type CompetitorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adAnalyses?: AdAnalysisUncheckedUpdateManyWithoutCompetitorNestedInput
  }

  export type CompetitorCreateManyInput = {
    id?: string
    businessId: string
    name: string
    platform: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAnalysisCreateInput = {
    id?: string
    platform: string
    adType: string
    content: string
    mediaUrl?: string | null
    landingPage?: string | null
    cta?: string | null
    emotions: string
    targetDemographic?: string | null
    designStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutAdAnalysesInput
    competitor: CompetitorCreateNestedOneWithoutAdAnalysesInput
  }

  export type AdAnalysisUncheckedCreateInput = {
    id?: string
    businessId: string
    competitorId: string
    platform: string
    adType: string
    content: string
    mediaUrl?: string | null
    landingPage?: string | null
    cta?: string | null
    emotions: string
    targetDemographic?: string | null
    designStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    adType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPage?: NullableStringFieldUpdateOperationsInput | string | null
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    emotions?: StringFieldUpdateOperationsInput | string
    targetDemographic?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutAdAnalysesNestedInput
    competitor?: CompetitorUpdateOneRequiredWithoutAdAnalysesNestedInput
  }

  export type AdAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    competitorId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    adType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPage?: NullableStringFieldUpdateOperationsInput | string | null
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    emotions?: StringFieldUpdateOperationsInput | string
    targetDemographic?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAnalysisCreateManyInput = {
    id?: string
    businessId: string
    competitorId: string
    platform: string
    adType: string
    content: string
    mediaUrl?: string | null
    landingPage?: string | null
    cta?: string | null
    emotions: string
    targetDemographic?: string | null
    designStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    adType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPage?: NullableStringFieldUpdateOperationsInput | string | null
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    emotions?: StringFieldUpdateOperationsInput | string
    targetDemographic?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    competitorId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    adType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPage?: NullableStringFieldUpdateOperationsInput | string | null
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    emotions?: StringFieldUpdateOperationsInput | string
    targetDemographic?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompetitorListRelationFilter = {
    every?: CompetitorWhereInput
    some?: CompetitorWhereInput
    none?: CompetitorWhereInput
  }

  export type AdAnalysisListRelationFilter = {
    every?: AdAnalysisWhereInput
    some?: AdAnalysisWhereInput
    none?: AdAnalysisWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompetitorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    location?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    location?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    industry?: SortOrder
    location?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BusinessRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type CompetitorCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitorMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitorMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitorRelationFilter = {
    is?: CompetitorWhereInput
    isNot?: CompetitorWhereInput
  }

  export type AdAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    competitorId?: SortOrder
    platform?: SortOrder
    adType?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    landingPage?: SortOrder
    cta?: SortOrder
    emotions?: SortOrder
    targetDemographic?: SortOrder
    designStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    competitorId?: SortOrder
    platform?: SortOrder
    adType?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    landingPage?: SortOrder
    cta?: SortOrder
    emotions?: SortOrder
    targetDemographic?: SortOrder
    designStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    competitorId?: SortOrder
    platform?: SortOrder
    adType?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    landingPage?: SortOrder
    cta?: SortOrder
    emotions?: SortOrder
    targetDemographic?: SortOrder
    designStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitorCreateNestedManyWithoutBusinessInput = {
    create?: XOR<CompetitorCreateWithoutBusinessInput, CompetitorUncheckedCreateWithoutBusinessInput> | CompetitorCreateWithoutBusinessInput[] | CompetitorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutBusinessInput | CompetitorCreateOrConnectWithoutBusinessInput[]
    createMany?: CompetitorCreateManyBusinessInputEnvelope
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
  }

  export type AdAnalysisCreateNestedManyWithoutBusinessInput = {
    create?: XOR<AdAnalysisCreateWithoutBusinessInput, AdAnalysisUncheckedCreateWithoutBusinessInput> | AdAnalysisCreateWithoutBusinessInput[] | AdAnalysisUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AdAnalysisCreateOrConnectWithoutBusinessInput | AdAnalysisCreateOrConnectWithoutBusinessInput[]
    createMany?: AdAnalysisCreateManyBusinessInputEnvelope
    connect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
  }

  export type CompetitorUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<CompetitorCreateWithoutBusinessInput, CompetitorUncheckedCreateWithoutBusinessInput> | CompetitorCreateWithoutBusinessInput[] | CompetitorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutBusinessInput | CompetitorCreateOrConnectWithoutBusinessInput[]
    createMany?: CompetitorCreateManyBusinessInputEnvelope
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
  }

  export type AdAnalysisUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<AdAnalysisCreateWithoutBusinessInput, AdAnalysisUncheckedCreateWithoutBusinessInput> | AdAnalysisCreateWithoutBusinessInput[] | AdAnalysisUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AdAnalysisCreateOrConnectWithoutBusinessInput | AdAnalysisCreateOrConnectWithoutBusinessInput[]
    createMany?: AdAnalysisCreateManyBusinessInputEnvelope
    connect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompetitorUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<CompetitorCreateWithoutBusinessInput, CompetitorUncheckedCreateWithoutBusinessInput> | CompetitorCreateWithoutBusinessInput[] | CompetitorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutBusinessInput | CompetitorCreateOrConnectWithoutBusinessInput[]
    upsert?: CompetitorUpsertWithWhereUniqueWithoutBusinessInput | CompetitorUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: CompetitorCreateManyBusinessInputEnvelope
    set?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    disconnect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    delete?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    update?: CompetitorUpdateWithWhereUniqueWithoutBusinessInput | CompetitorUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: CompetitorUpdateManyWithWhereWithoutBusinessInput | CompetitorUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
  }

  export type AdAnalysisUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<AdAnalysisCreateWithoutBusinessInput, AdAnalysisUncheckedCreateWithoutBusinessInput> | AdAnalysisCreateWithoutBusinessInput[] | AdAnalysisUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AdAnalysisCreateOrConnectWithoutBusinessInput | AdAnalysisCreateOrConnectWithoutBusinessInput[]
    upsert?: AdAnalysisUpsertWithWhereUniqueWithoutBusinessInput | AdAnalysisUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: AdAnalysisCreateManyBusinessInputEnvelope
    set?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    disconnect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    delete?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    connect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    update?: AdAnalysisUpdateWithWhereUniqueWithoutBusinessInput | AdAnalysisUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: AdAnalysisUpdateManyWithWhereWithoutBusinessInput | AdAnalysisUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: AdAnalysisScalarWhereInput | AdAnalysisScalarWhereInput[]
  }

  export type CompetitorUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<CompetitorCreateWithoutBusinessInput, CompetitorUncheckedCreateWithoutBusinessInput> | CompetitorCreateWithoutBusinessInput[] | CompetitorUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CompetitorCreateOrConnectWithoutBusinessInput | CompetitorCreateOrConnectWithoutBusinessInput[]
    upsert?: CompetitorUpsertWithWhereUniqueWithoutBusinessInput | CompetitorUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: CompetitorCreateManyBusinessInputEnvelope
    set?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    disconnect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    delete?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    connect?: CompetitorWhereUniqueInput | CompetitorWhereUniqueInput[]
    update?: CompetitorUpdateWithWhereUniqueWithoutBusinessInput | CompetitorUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: CompetitorUpdateManyWithWhereWithoutBusinessInput | CompetitorUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
  }

  export type AdAnalysisUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<AdAnalysisCreateWithoutBusinessInput, AdAnalysisUncheckedCreateWithoutBusinessInput> | AdAnalysisCreateWithoutBusinessInput[] | AdAnalysisUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: AdAnalysisCreateOrConnectWithoutBusinessInput | AdAnalysisCreateOrConnectWithoutBusinessInput[]
    upsert?: AdAnalysisUpsertWithWhereUniqueWithoutBusinessInput | AdAnalysisUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: AdAnalysisCreateManyBusinessInputEnvelope
    set?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    disconnect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    delete?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    connect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    update?: AdAnalysisUpdateWithWhereUniqueWithoutBusinessInput | AdAnalysisUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: AdAnalysisUpdateManyWithWhereWithoutBusinessInput | AdAnalysisUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: AdAnalysisScalarWhereInput | AdAnalysisScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutCompetitorsInput = {
    create?: XOR<BusinessCreateWithoutCompetitorsInput, BusinessUncheckedCreateWithoutCompetitorsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutCompetitorsInput
    connect?: BusinessWhereUniqueInput
  }

  export type AdAnalysisCreateNestedManyWithoutCompetitorInput = {
    create?: XOR<AdAnalysisCreateWithoutCompetitorInput, AdAnalysisUncheckedCreateWithoutCompetitorInput> | AdAnalysisCreateWithoutCompetitorInput[] | AdAnalysisUncheckedCreateWithoutCompetitorInput[]
    connectOrCreate?: AdAnalysisCreateOrConnectWithoutCompetitorInput | AdAnalysisCreateOrConnectWithoutCompetitorInput[]
    createMany?: AdAnalysisCreateManyCompetitorInputEnvelope
    connect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
  }

  export type AdAnalysisUncheckedCreateNestedManyWithoutCompetitorInput = {
    create?: XOR<AdAnalysisCreateWithoutCompetitorInput, AdAnalysisUncheckedCreateWithoutCompetitorInput> | AdAnalysisCreateWithoutCompetitorInput[] | AdAnalysisUncheckedCreateWithoutCompetitorInput[]
    connectOrCreate?: AdAnalysisCreateOrConnectWithoutCompetitorInput | AdAnalysisCreateOrConnectWithoutCompetitorInput[]
    createMany?: AdAnalysisCreateManyCompetitorInputEnvelope
    connect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
  }

  export type BusinessUpdateOneRequiredWithoutCompetitorsNestedInput = {
    create?: XOR<BusinessCreateWithoutCompetitorsInput, BusinessUncheckedCreateWithoutCompetitorsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutCompetitorsInput
    upsert?: BusinessUpsertWithoutCompetitorsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutCompetitorsInput, BusinessUpdateWithoutCompetitorsInput>, BusinessUncheckedUpdateWithoutCompetitorsInput>
  }

  export type AdAnalysisUpdateManyWithoutCompetitorNestedInput = {
    create?: XOR<AdAnalysisCreateWithoutCompetitorInput, AdAnalysisUncheckedCreateWithoutCompetitorInput> | AdAnalysisCreateWithoutCompetitorInput[] | AdAnalysisUncheckedCreateWithoutCompetitorInput[]
    connectOrCreate?: AdAnalysisCreateOrConnectWithoutCompetitorInput | AdAnalysisCreateOrConnectWithoutCompetitorInput[]
    upsert?: AdAnalysisUpsertWithWhereUniqueWithoutCompetitorInput | AdAnalysisUpsertWithWhereUniqueWithoutCompetitorInput[]
    createMany?: AdAnalysisCreateManyCompetitorInputEnvelope
    set?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    disconnect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    delete?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    connect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    update?: AdAnalysisUpdateWithWhereUniqueWithoutCompetitorInput | AdAnalysisUpdateWithWhereUniqueWithoutCompetitorInput[]
    updateMany?: AdAnalysisUpdateManyWithWhereWithoutCompetitorInput | AdAnalysisUpdateManyWithWhereWithoutCompetitorInput[]
    deleteMany?: AdAnalysisScalarWhereInput | AdAnalysisScalarWhereInput[]
  }

  export type AdAnalysisUncheckedUpdateManyWithoutCompetitorNestedInput = {
    create?: XOR<AdAnalysisCreateWithoutCompetitorInput, AdAnalysisUncheckedCreateWithoutCompetitorInput> | AdAnalysisCreateWithoutCompetitorInput[] | AdAnalysisUncheckedCreateWithoutCompetitorInput[]
    connectOrCreate?: AdAnalysisCreateOrConnectWithoutCompetitorInput | AdAnalysisCreateOrConnectWithoutCompetitorInput[]
    upsert?: AdAnalysisUpsertWithWhereUniqueWithoutCompetitorInput | AdAnalysisUpsertWithWhereUniqueWithoutCompetitorInput[]
    createMany?: AdAnalysisCreateManyCompetitorInputEnvelope
    set?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    disconnect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    delete?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    connect?: AdAnalysisWhereUniqueInput | AdAnalysisWhereUniqueInput[]
    update?: AdAnalysisUpdateWithWhereUniqueWithoutCompetitorInput | AdAnalysisUpdateWithWhereUniqueWithoutCompetitorInput[]
    updateMany?: AdAnalysisUpdateManyWithWhereWithoutCompetitorInput | AdAnalysisUpdateManyWithWhereWithoutCompetitorInput[]
    deleteMany?: AdAnalysisScalarWhereInput | AdAnalysisScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutAdAnalysesInput = {
    create?: XOR<BusinessCreateWithoutAdAnalysesInput, BusinessUncheckedCreateWithoutAdAnalysesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAdAnalysesInput
    connect?: BusinessWhereUniqueInput
  }

  export type CompetitorCreateNestedOneWithoutAdAnalysesInput = {
    create?: XOR<CompetitorCreateWithoutAdAnalysesInput, CompetitorUncheckedCreateWithoutAdAnalysesInput>
    connectOrCreate?: CompetitorCreateOrConnectWithoutAdAnalysesInput
    connect?: CompetitorWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutAdAnalysesNestedInput = {
    create?: XOR<BusinessCreateWithoutAdAnalysesInput, BusinessUncheckedCreateWithoutAdAnalysesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAdAnalysesInput
    upsert?: BusinessUpsertWithoutAdAnalysesInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutAdAnalysesInput, BusinessUpdateWithoutAdAnalysesInput>, BusinessUncheckedUpdateWithoutAdAnalysesInput>
  }

  export type CompetitorUpdateOneRequiredWithoutAdAnalysesNestedInput = {
    create?: XOR<CompetitorCreateWithoutAdAnalysesInput, CompetitorUncheckedCreateWithoutAdAnalysesInput>
    connectOrCreate?: CompetitorCreateOrConnectWithoutAdAnalysesInput
    upsert?: CompetitorUpsertWithoutAdAnalysesInput
    connect?: CompetitorWhereUniqueInput
    update?: XOR<XOR<CompetitorUpdateToOneWithWhereWithoutAdAnalysesInput, CompetitorUpdateWithoutAdAnalysesInput>, CompetitorUncheckedUpdateWithoutAdAnalysesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompetitorCreateWithoutBusinessInput = {
    id?: string
    name: string
    platform: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adAnalyses?: AdAnalysisCreateNestedManyWithoutCompetitorInput
  }

  export type CompetitorUncheckedCreateWithoutBusinessInput = {
    id?: string
    name: string
    platform: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adAnalyses?: AdAnalysisUncheckedCreateNestedManyWithoutCompetitorInput
  }

  export type CompetitorCreateOrConnectWithoutBusinessInput = {
    where: CompetitorWhereUniqueInput
    create: XOR<CompetitorCreateWithoutBusinessInput, CompetitorUncheckedCreateWithoutBusinessInput>
  }

  export type CompetitorCreateManyBusinessInputEnvelope = {
    data: CompetitorCreateManyBusinessInput | CompetitorCreateManyBusinessInput[]
  }

  export type AdAnalysisCreateWithoutBusinessInput = {
    id?: string
    platform: string
    adType: string
    content: string
    mediaUrl?: string | null
    landingPage?: string | null
    cta?: string | null
    emotions: string
    targetDemographic?: string | null
    designStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    competitor: CompetitorCreateNestedOneWithoutAdAnalysesInput
  }

  export type AdAnalysisUncheckedCreateWithoutBusinessInput = {
    id?: string
    competitorId: string
    platform: string
    adType: string
    content: string
    mediaUrl?: string | null
    landingPage?: string | null
    cta?: string | null
    emotions: string
    targetDemographic?: string | null
    designStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdAnalysisCreateOrConnectWithoutBusinessInput = {
    where: AdAnalysisWhereUniqueInput
    create: XOR<AdAnalysisCreateWithoutBusinessInput, AdAnalysisUncheckedCreateWithoutBusinessInput>
  }

  export type AdAnalysisCreateManyBusinessInputEnvelope = {
    data: AdAnalysisCreateManyBusinessInput | AdAnalysisCreateManyBusinessInput[]
  }

  export type CompetitorUpsertWithWhereUniqueWithoutBusinessInput = {
    where: CompetitorWhereUniqueInput
    update: XOR<CompetitorUpdateWithoutBusinessInput, CompetitorUncheckedUpdateWithoutBusinessInput>
    create: XOR<CompetitorCreateWithoutBusinessInput, CompetitorUncheckedCreateWithoutBusinessInput>
  }

  export type CompetitorUpdateWithWhereUniqueWithoutBusinessInput = {
    where: CompetitorWhereUniqueInput
    data: XOR<CompetitorUpdateWithoutBusinessInput, CompetitorUncheckedUpdateWithoutBusinessInput>
  }

  export type CompetitorUpdateManyWithWhereWithoutBusinessInput = {
    where: CompetitorScalarWhereInput
    data: XOR<CompetitorUpdateManyMutationInput, CompetitorUncheckedUpdateManyWithoutBusinessInput>
  }

  export type CompetitorScalarWhereInput = {
    AND?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
    OR?: CompetitorScalarWhereInput[]
    NOT?: CompetitorScalarWhereInput | CompetitorScalarWhereInput[]
    id?: StringFilter<"Competitor"> | string
    businessId?: StringFilter<"Competitor"> | string
    name?: StringFilter<"Competitor"> | string
    platform?: StringFilter<"Competitor"> | string
    createdAt?: DateTimeFilter<"Competitor"> | Date | string
    updatedAt?: DateTimeFilter<"Competitor"> | Date | string
  }

  export type AdAnalysisUpsertWithWhereUniqueWithoutBusinessInput = {
    where: AdAnalysisWhereUniqueInput
    update: XOR<AdAnalysisUpdateWithoutBusinessInput, AdAnalysisUncheckedUpdateWithoutBusinessInput>
    create: XOR<AdAnalysisCreateWithoutBusinessInput, AdAnalysisUncheckedCreateWithoutBusinessInput>
  }

  export type AdAnalysisUpdateWithWhereUniqueWithoutBusinessInput = {
    where: AdAnalysisWhereUniqueInput
    data: XOR<AdAnalysisUpdateWithoutBusinessInput, AdAnalysisUncheckedUpdateWithoutBusinessInput>
  }

  export type AdAnalysisUpdateManyWithWhereWithoutBusinessInput = {
    where: AdAnalysisScalarWhereInput
    data: XOR<AdAnalysisUpdateManyMutationInput, AdAnalysisUncheckedUpdateManyWithoutBusinessInput>
  }

  export type AdAnalysisScalarWhereInput = {
    AND?: AdAnalysisScalarWhereInput | AdAnalysisScalarWhereInput[]
    OR?: AdAnalysisScalarWhereInput[]
    NOT?: AdAnalysisScalarWhereInput | AdAnalysisScalarWhereInput[]
    id?: StringFilter<"AdAnalysis"> | string
    businessId?: StringFilter<"AdAnalysis"> | string
    competitorId?: StringFilter<"AdAnalysis"> | string
    platform?: StringFilter<"AdAnalysis"> | string
    adType?: StringFilter<"AdAnalysis"> | string
    content?: StringFilter<"AdAnalysis"> | string
    mediaUrl?: StringNullableFilter<"AdAnalysis"> | string | null
    landingPage?: StringNullableFilter<"AdAnalysis"> | string | null
    cta?: StringNullableFilter<"AdAnalysis"> | string | null
    emotions?: StringFilter<"AdAnalysis"> | string
    targetDemographic?: StringNullableFilter<"AdAnalysis"> | string | null
    designStyle?: StringNullableFilter<"AdAnalysis"> | string | null
    createdAt?: DateTimeFilter<"AdAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"AdAnalysis"> | Date | string
  }

  export type BusinessCreateWithoutCompetitorsInput = {
    id?: string
    userId: string
    name: string
    industry: string
    location?: string | null
    keywords: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adAnalyses?: AdAnalysisCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutCompetitorsInput = {
    id?: string
    userId: string
    name: string
    industry: string
    location?: string | null
    keywords: string
    createdAt?: Date | string
    updatedAt?: Date | string
    adAnalyses?: AdAnalysisUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutCompetitorsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutCompetitorsInput, BusinessUncheckedCreateWithoutCompetitorsInput>
  }

  export type AdAnalysisCreateWithoutCompetitorInput = {
    id?: string
    platform: string
    adType: string
    content: string
    mediaUrl?: string | null
    landingPage?: string | null
    cta?: string | null
    emotions: string
    targetDemographic?: string | null
    designStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutAdAnalysesInput
  }

  export type AdAnalysisUncheckedCreateWithoutCompetitorInput = {
    id?: string
    businessId: string
    platform: string
    adType: string
    content: string
    mediaUrl?: string | null
    landingPage?: string | null
    cta?: string | null
    emotions: string
    targetDemographic?: string | null
    designStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdAnalysisCreateOrConnectWithoutCompetitorInput = {
    where: AdAnalysisWhereUniqueInput
    create: XOR<AdAnalysisCreateWithoutCompetitorInput, AdAnalysisUncheckedCreateWithoutCompetitorInput>
  }

  export type AdAnalysisCreateManyCompetitorInputEnvelope = {
    data: AdAnalysisCreateManyCompetitorInput | AdAnalysisCreateManyCompetitorInput[]
  }

  export type BusinessUpsertWithoutCompetitorsInput = {
    update: XOR<BusinessUpdateWithoutCompetitorsInput, BusinessUncheckedUpdateWithoutCompetitorsInput>
    create: XOR<BusinessCreateWithoutCompetitorsInput, BusinessUncheckedCreateWithoutCompetitorsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutCompetitorsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutCompetitorsInput, BusinessUncheckedUpdateWithoutCompetitorsInput>
  }

  export type BusinessUpdateWithoutCompetitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adAnalyses?: AdAnalysisUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutCompetitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adAnalyses?: AdAnalysisUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type AdAnalysisUpsertWithWhereUniqueWithoutCompetitorInput = {
    where: AdAnalysisWhereUniqueInput
    update: XOR<AdAnalysisUpdateWithoutCompetitorInput, AdAnalysisUncheckedUpdateWithoutCompetitorInput>
    create: XOR<AdAnalysisCreateWithoutCompetitorInput, AdAnalysisUncheckedCreateWithoutCompetitorInput>
  }

  export type AdAnalysisUpdateWithWhereUniqueWithoutCompetitorInput = {
    where: AdAnalysisWhereUniqueInput
    data: XOR<AdAnalysisUpdateWithoutCompetitorInput, AdAnalysisUncheckedUpdateWithoutCompetitorInput>
  }

  export type AdAnalysisUpdateManyWithWhereWithoutCompetitorInput = {
    where: AdAnalysisScalarWhereInput
    data: XOR<AdAnalysisUpdateManyMutationInput, AdAnalysisUncheckedUpdateManyWithoutCompetitorInput>
  }

  export type BusinessCreateWithoutAdAnalysesInput = {
    id?: string
    userId: string
    name: string
    industry: string
    location?: string | null
    keywords: string
    createdAt?: Date | string
    updatedAt?: Date | string
    competitors?: CompetitorCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutAdAnalysesInput = {
    id?: string
    userId: string
    name: string
    industry: string
    location?: string | null
    keywords: string
    createdAt?: Date | string
    updatedAt?: Date | string
    competitors?: CompetitorUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutAdAnalysesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutAdAnalysesInput, BusinessUncheckedCreateWithoutAdAnalysesInput>
  }

  export type CompetitorCreateWithoutAdAnalysesInput = {
    id?: string
    name: string
    platform: string
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutCompetitorsInput
  }

  export type CompetitorUncheckedCreateWithoutAdAnalysesInput = {
    id?: string
    businessId: string
    name: string
    platform: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitorCreateOrConnectWithoutAdAnalysesInput = {
    where: CompetitorWhereUniqueInput
    create: XOR<CompetitorCreateWithoutAdAnalysesInput, CompetitorUncheckedCreateWithoutAdAnalysesInput>
  }

  export type BusinessUpsertWithoutAdAnalysesInput = {
    update: XOR<BusinessUpdateWithoutAdAnalysesInput, BusinessUncheckedUpdateWithoutAdAnalysesInput>
    create: XOR<BusinessCreateWithoutAdAnalysesInput, BusinessUncheckedCreateWithoutAdAnalysesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutAdAnalysesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutAdAnalysesInput, BusinessUncheckedUpdateWithoutAdAnalysesInput>
  }

  export type BusinessUpdateWithoutAdAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitors?: CompetitorUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutAdAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitors?: CompetitorUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type CompetitorUpsertWithoutAdAnalysesInput = {
    update: XOR<CompetitorUpdateWithoutAdAnalysesInput, CompetitorUncheckedUpdateWithoutAdAnalysesInput>
    create: XOR<CompetitorCreateWithoutAdAnalysesInput, CompetitorUncheckedCreateWithoutAdAnalysesInput>
    where?: CompetitorWhereInput
  }

  export type CompetitorUpdateToOneWithWhereWithoutAdAnalysesInput = {
    where?: CompetitorWhereInput
    data: XOR<CompetitorUpdateWithoutAdAnalysesInput, CompetitorUncheckedUpdateWithoutAdAnalysesInput>
  }

  export type CompetitorUpdateWithoutAdAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutCompetitorsNestedInput
  }

  export type CompetitorUncheckedUpdateWithoutAdAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorCreateManyBusinessInput = {
    id?: string
    name: string
    platform: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdAnalysisCreateManyBusinessInput = {
    id?: string
    competitorId: string
    platform: string
    adType: string
    content: string
    mediaUrl?: string | null
    landingPage?: string | null
    cta?: string | null
    emotions: string
    targetDemographic?: string | null
    designStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitorUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adAnalyses?: AdAnalysisUpdateManyWithoutCompetitorNestedInput
  }

  export type CompetitorUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adAnalyses?: AdAnalysisUncheckedUpdateManyWithoutCompetitorNestedInput
  }

  export type CompetitorUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAnalysisUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    adType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPage?: NullableStringFieldUpdateOperationsInput | string | null
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    emotions?: StringFieldUpdateOperationsInput | string
    targetDemographic?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitor?: CompetitorUpdateOneRequiredWithoutAdAnalysesNestedInput
  }

  export type AdAnalysisUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitorId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    adType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPage?: NullableStringFieldUpdateOperationsInput | string | null
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    emotions?: StringFieldUpdateOperationsInput | string
    targetDemographic?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAnalysisUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitorId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    adType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPage?: NullableStringFieldUpdateOperationsInput | string | null
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    emotions?: StringFieldUpdateOperationsInput | string
    targetDemographic?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAnalysisCreateManyCompetitorInput = {
    id?: string
    businessId: string
    platform: string
    adType: string
    content: string
    mediaUrl?: string | null
    landingPage?: string | null
    cta?: string | null
    emotions: string
    targetDemographic?: string | null
    designStyle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdAnalysisUpdateWithoutCompetitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    adType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPage?: NullableStringFieldUpdateOperationsInput | string | null
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    emotions?: StringFieldUpdateOperationsInput | string
    targetDemographic?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutAdAnalysesNestedInput
  }

  export type AdAnalysisUncheckedUpdateWithoutCompetitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    adType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPage?: NullableStringFieldUpdateOperationsInput | string | null
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    emotions?: StringFieldUpdateOperationsInput | string
    targetDemographic?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdAnalysisUncheckedUpdateManyWithoutCompetitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    adType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    landingPage?: NullableStringFieldUpdateOperationsInput | string | null
    cta?: NullableStringFieldUpdateOperationsInput | string | null
    emotions?: StringFieldUpdateOperationsInput | string
    targetDemographic?: NullableStringFieldUpdateOperationsInput | string | null
    designStyle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BusinessCountOutputTypeDefaultArgs instead
     */
    export type BusinessCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusinessCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompetitorCountOutputTypeDefaultArgs instead
     */
    export type CompetitorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompetitorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusinessDefaultArgs instead
     */
    export type BusinessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusinessDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompetitorDefaultArgs instead
     */
    export type CompetitorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompetitorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdAnalysisDefaultArgs instead
     */
    export type AdAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdAnalysisDefaultArgs<ExtArgs>

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