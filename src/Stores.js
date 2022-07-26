import { writable } from "svelte/store";

const CurrentPageIndex = writable(0);

export default CurrentPageIndex;