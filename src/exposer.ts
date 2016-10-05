import {ViewStrategyRegistry} from "./registries/view-strategy-registry";
import {InlineStrategy} from "./view-strategies/inline-strategy";

export var viewStrategyRegistry = new ViewStrategyRegistry();
viewStrategyRegistry.registerStrategy(new InlineStrategy());
