import {ViewTriggerRegistry} from "./registries/view-trigger-registry";
import {ViewStrategyRegistry} from "./registries/view-strategy-registry";
import {IntervalTrigger} from "./view-triggers/interval-trigger";
import {InlineStrategy} from "./view-strategies/inline-strategy";
import {SubmitTrigger} from "./view-triggers/submit-trigger";
import {InitTrigger} from "./view-triggers/init-trigger";
import {DOMEventTrigger} from "./view-triggers/dom-event-trigger";

export var viewTriggerRegistry = new ViewTriggerRegistry();
viewTriggerRegistry.registerTrigger(new DOMEventTrigger("blur"));
viewTriggerRegistry.registerTrigger(new DOMEventTrigger("focus"));
viewTriggerRegistry.registerTrigger(new DOMEventTrigger("change"));
viewTriggerRegistry.registerTrigger(new DOMEventTrigger("input"));
viewTriggerRegistry.registerTrigger(new DOMEventTrigger("keyup"));
viewTriggerRegistry.registerTrigger(new IntervalTrigger());
viewTriggerRegistry.registerTrigger(new SubmitTrigger());
viewTriggerRegistry.registerTrigger(new InitTrigger());

export var viewStrategyRegistry = new ViewStrategyRegistry();
viewStrategyRegistry.registerStrategy(new InlineStrategy());
