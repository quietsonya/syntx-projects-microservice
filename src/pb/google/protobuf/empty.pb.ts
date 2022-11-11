/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "google.protobuf";

/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 *
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 *
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface Empty {}

export const GOOGLE_PROTOBUF_PACKAGE_NAME = "google.protobuf";

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
