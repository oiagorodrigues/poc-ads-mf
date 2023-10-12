import { importShared, __tla as __tla_0 } from "./__federation_fn_import.js";
import AdsContainer, { j as jsxRuntimeExports } from "./__federation_expose_AdsContainer-b01e881e.js";
import { r as reactDomExports } from "./__federation_shared_react-dom-6fc2ee8d.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    var client = {};
    var m = reactDomExports;
    {
        client.createRoot = m.createRoot;
        client.hydrateRoot = m.hydrateRoot;
    }
    const App$1 = "";
    function App() {
        return jsxRuntimeExports.jsx(AdsContainer, {});
    }
    const index = "";
    const React = await importShared("react");
    client.createRoot(document.getElementById("root")).render(jsxRuntimeExports.jsx(React.StrictMode, {
        children: jsxRuntimeExports.jsx(App, {})
    }));
});
