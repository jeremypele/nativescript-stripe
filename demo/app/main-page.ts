import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { topmost } from "tns-core-modules/ui/frame"

export function pageLoaded(args: EventData) {
}

export function stdDemo(args: EventData) {
  const frame = topmost();
  frame.navigate("demo/std-page");
}

export function ccViewDemo(args: EventData) {
  const frame = topmost();
  frame.navigate("demo/ccview-page");
}
