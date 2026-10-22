"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => null;

export default function CurrentYear() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) ?? "";
}