import { ViewStrategyRegistry } from "./registries/view-strategy-registry";
import { InlineStrategy } from "./view-strategies/inline-strategy";
import { ViewSummaryRegistry } from "./registries/view-summary-registry";
import { DefaultViewSummary } from "./view-summary-strategies/default-summary-strategy";
export var viewStrategyRegistry = new ViewStrategyRegistry();
viewStrategyRegistry.registerStrategy(new InlineStrategy());
export var viewSummaryRegistry = new ViewSummaryRegistry();
viewSummaryRegistry.registerSummary(new DefaultViewSummary());
