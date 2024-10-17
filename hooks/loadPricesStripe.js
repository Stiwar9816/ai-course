import { Stripe } from "stripe"

export const loadPricesStripe = async () => {
    const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY)
    const prices = await stripe.prices.list()
    return prices.data
}
