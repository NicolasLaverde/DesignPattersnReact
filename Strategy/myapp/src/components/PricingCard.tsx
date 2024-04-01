import PricingCardHeader from './PricingCardHeader';
import PricingCardBody from './PricingCardBody';
import PriceStrategy from '../services/priceStrategies/PriceStrategy';

import styles from './PricingCard.module.css';

interface PricingCardProps {
  price: number;
  strategy: PriceStrategy;
}

const PricingCard: React.FC<PricingCardProps> = ({ price, strategy }) => {
  return (
    <div className={styles.card}>
      <PricingCardHeader />
      <div className={styles.divider} />
      <PricingCardBody price={price} strategy={strategy} />
    </div>
  );
};

export default PricingCard;
