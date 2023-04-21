import {
  __export,
  computed,
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  renderSlot,
  unref
} from "./chunk-LA5AWHCE.js";

// ../node_modules/.pnpm/chunqing-ui@1.0.3/node_modules/chunqing-ui/es/src/index.mjs
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Icon: () => Icon
});

// ../node_modules/.pnpm/chunqing-ui@1.0.3/node_modules/chunqing-ui/es/src/button/button.vue.mjs
import "/Users/chunqinglin/Desktop/component-libaries/node_modules/.pnpm/chunqing-ui@1.0.3/node_modules/chunqing-ui/es/src/button/style/index.css";
var __default__ = defineComponent({ name: "ea-button" });
var _sfc_main = defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["ea-button", unref(buttonStyle)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});

// ../node_modules/.pnpm/chunqing-ui@1.0.3/node_modules/chunqing-ui/es/src/button/index.mjs
var withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
var Button = withInstall(_sfc_main);

// ../node_modules/.pnpm/chunqing-ui@1.0.3/node_modules/chunqing-ui/es/src/icon/icon.vue.mjs
import "/Users/chunqinglin/Desktop/component-libaries/node_modules/.pnpm/chunqing-ui@1.0.3/node_modules/chunqing-ui/es/src/icon/style/index.css";
var _hoisted_1 = { class: "ea-icon" };
var _sfc_main2 = defineComponent({
  name: "icon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, "Icon1");
    };
  }
});

// ../node_modules/.pnpm/chunqing-ui@1.0.3/node_modules/chunqing-ui/es/src/icon/index.mjs
var withInstall2 = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
var Icon = withInstall2(_sfc_main2);

// ../node_modules/.pnpm/chunqing-ui@1.0.3/node_modules/chunqing-ui/es/index.mjs
var index = {
  install: (app) => {
    for (let c in src_exports) {
      app.use(src_exports[c]);
    }
  }
};
export {
  Button,
  Icon,
  index as default
};
//# sourceMappingURL=chunqing-ui.js.map
