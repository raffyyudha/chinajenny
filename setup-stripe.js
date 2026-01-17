import Stripe from 'stripe';
import fs from 'fs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_live_placeholder_key_do_not_commit');

async function createProduct() {
    try {
        const product = await stripe.products.create({
            name: 'BlessSpace 3D Package',
            description: 'Premium Interior Visualization Service',
            images: ['https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop'],
        });

        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: 20000, // 200.00 SGD
            currency: 'sgd',
        });

        const paymentLink = await stripe.paymentLinks.create({
            line_items: [{ price: price.id, quantity: 1 }],
            after_completion: { type: 'redirect', redirect: { url: 'http://localhost:3000?success=true' } } // Placeholder, user will likely change this
        });

        fs.writeFileSync('payment_link.txt', paymentLink.url);
        console.log('Link saved to payment_link.txt');
    } catch (error) {
        console.error('Error:', error);
    }
}

createProduct();
