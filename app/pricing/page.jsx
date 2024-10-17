import { loadPricesStripe } from '@/hooks/loadPricesStripe'
import ButtonCheckout from '../_components/ButtonCheckout'

async function PricingPage() {
    const prices = await loadPricesStripe()
    console.log(prices)
    return (
        <>
            <h1>Princing </h1>

            {
                prices.map((price) => (
                    <div key={price.id}>
                        <h2> {price.product} </h2>
                        <span> {price.unit_amount / 100}$ </span>
                        <ButtonCheckout priceId={price.id} />
                    </div>
                ))
            }
        </>
    )
}

export default PricingPage