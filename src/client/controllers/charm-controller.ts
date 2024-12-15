import { Controller, OnStart } from "@flamework/core";

@Controller()
export class CharmController implements OnStart {
  onStart() {
    print("hello world");
  }
}
