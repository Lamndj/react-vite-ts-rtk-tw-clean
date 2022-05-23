import React from "react";
import { Provider } from "inversify-react";
import Counter from "./presentation/Components/Counter";
import { di } from "./core/injection_container";

function App(): JSX.Element {
  return (
    <Provider container={di}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
