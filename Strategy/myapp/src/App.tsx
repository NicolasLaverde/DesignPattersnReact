import PricingCard from './components/PricingCard';
import StandardPriceStrategy from './services/priceStrategies/StandardPriceStrategy';
import VietnamPriceStrategy from './services/priceStrategies/VietnamPriceStrategy';
import JapanPriceStrategy from './services/priceStrategies/JapanPriceStrategy';

import './styles.css';

export default function App() {
  return (
    <div className="App">
      <PricingCard price={9} strategy={new StandardPriceStrategy()} />
      <PricingCard price={1365000} strategy={new VietnamPriceStrategy()} />
      <PricingCard price={7669} strategy={new JapanPriceStrategy()} />
    </div>
  );
}
