import "react-native-url-polyfill/auto";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import store from "./store";
import { StripeProvider } from "@stripe/stripe-react-native";
import { Provider as ProviderPaper } from "react-native-paper";
export default function App() {
  const stripeKey="pk_test_51M3FNZSG3M7QpDhKuEtWuor4Qs6gfIveb1Q98jY5SiRVyDdL7cJHg1IcZXffYeq2ebggnjRskUHux2H0ldDHcTsR00DTOzht4a";
  return (
    <StripeProvider
    threeDSecureParams={{
      backgroundColor:"white",
      timeout:5
    }}
       publishableKey={stripeKey}
       merchantIdentifier="wajid-ali-altamash"
    >
       <Provider store={store}>
       <ProviderPaper>
       <Main />
       </ProviderPaper>
        
      </Provider>
    </StripeProvider>
   
  );
}
