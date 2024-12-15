import { OnStart, Service } from "@flamework/core";

@Service()
export class CharmService implements OnStart {
  onStart() {
    print("Hello !");
  }
}
