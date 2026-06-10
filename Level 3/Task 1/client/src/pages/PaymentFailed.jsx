import { Link, useLocation } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const PaymentFailed = () => {
  const { state } = useLocation();

  return (
    <>
      <Navbar />

      <main className="payment-result-page">
        <section className="payment-result-card failed glass-panel">
          <XCircle size={72} />
          <h1>Payment failed</h1>
          <p>{state?.reason || 'The payment could not be completed. Your cart is still safe.'}</p>
          {state?.orderId && (
            <div className="payment-result-summary">
              <span>Order ID</span>
              <strong>{state.orderId}</strong>
            </div>
          )}
          <div className="payment-result-actions">
            <Link to="/checkout" className="btn btn-primary">Retry Payment</Link>
            <Link to="/cart" className="btn btn-secondary">Return to Cart</Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default PaymentFailed;
