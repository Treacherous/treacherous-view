import {ViewTriggerRegistry} from "./registries/view-trigger-registry";
import {ViewStrategyRegistry} from "./registries/view-strategy-registry";
import {BlurTrigger} from "./view-triggers/blur-trigger";
import {ChangeTrigger} from "./view-triggers/change-trigger";
import {IntervalTrigger} from "./view-triggers/interval-trigger";
import {KeyUpTrigger} from "./view-triggers/key-up-trigger";
import {InlineStrategy} from "./view-strategies/inline-strategy";
import {SubmitTrigger} from "./view-triggers/submit-trigger";
import {InitTrigger} from "./view-triggers/init-trigger";

export var viewTriggerRegistry = new ViewTriggerRegistry();
viewTriggerRegistry.registerTrigger(new BlurTrigger());
viewTriggerRegistry.registerTrigger(new ChangeTrigger());
viewTriggerRegistry.registerTrigger(new IntervalTrigger());
viewTriggerRegistry.registerTrigger(new KeyUpTrigger());
viewTriggerRegistry.registerTrigger(new SubmitTrigger());
viewTriggerRegistry.registerTrigger(new InitTrigger());

export var viewStrategyRegistry = new ViewStrategyRegistry();
viewStrategyRegistry.registerStrategy(new InlineStrategy());
