import { GlobalState } from './components/globalState/GlobalState';
import  {StoreProvider} from './store/storeProvider';
function App() {
	return (
		<>
		<StoreProvider>
			<GlobalState />
		</StoreProvider>
		</>
	);
}

export default App;
