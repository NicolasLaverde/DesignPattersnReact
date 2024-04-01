import React from 'react';
import PriceStrategy from '../services/priceStrategies/PriceStrategy';

import styles from './PricingCardBody.module.css';

interface PricingCardBodyProps {
  price: number;
  strategy: PriceStrategy;
}

const PricingCardBody: React.FC<PricingCardBodyProps> = ({
  price,
  strategy
}) => {
  return (
    <div className={styles.body}>
      <h1>{strategy.formatPrice(price)}</h1>
      {strategy.shouldDiscount() && (
        <div className={styles.discount}>
          {strategy.getDiscountMessage(price)}
        </div>
      )}
      <p>Learn the essential skills for modern fullstack app development.</p>
      <button className={styles.buyButton}>Get started</button>
    </div>
  );
};

export default PricingCardBody;
