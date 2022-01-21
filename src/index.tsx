import reactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { store } from "./store";
import ".//styles/App.css";

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
