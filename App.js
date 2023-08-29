import "react-native-url-polyfill/auto";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
