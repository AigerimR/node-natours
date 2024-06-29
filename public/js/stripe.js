import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51PWwWKBQZAWmDZve7ceyfVRs6kTTIJJYBi2784YO6lFeotIdzbZce4nNbISV3IyIlDkXcyE8ol0QWLjj7AjrAO3N00E6JXIScN',
);

export const bookTour = async (tourId) => {
  try {
    // get checkout-session from api
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
    //use stripe
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
