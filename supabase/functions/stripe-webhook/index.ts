
// Follow this setup guide to deploy: https://supabase.com/docs/guides/functions/deploy
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@12.0.0?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
    apiVersion: "2022-11-15",
    httpClient: Stripe.createFetchHttpClient(),
});

const cryptoProvider = Stripe.createSubtleCryptoProvider();

serve(async (req) => {
    const signature = req.headers.get("Stripe-Signature");
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

    if (!signature || !webhookSecret) {
        return new Response("Missing signature or secret", { status: 400 });
    }

    try {
        const body = await req.text();
        const event = await stripe.webhooks.constructEventAsync(
            body,
            signature,
            webhookSecret,
            undefined,
            cryptoProvider
        );

        // Handle the event
        if (event.type === "checkout.session.completed") {
            const session = event.data.object;

            // Initialize Supabase Admin Client
            // Note: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are system-managed secrets
            const supabaseAdmin = createClient(
                Deno.env.get("SUPABASE_URL") ?? "",
                Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
            );

            const customerEmail = session.customer_details?.email || session.customer_email;
            const amount = session.amount_total ? session.amount_total / 100 : 0; // Convert cents to dollars

            console.log(`Processing Order for: ${customerEmail}`);

            // Insert into payments table
            const { error } = await supabaseAdmin
                .from("payments")
                .insert({
                    email: customerEmail,
                    amount: amount,
                    currency: session.currency,
                    stripe_payment_id: session.id,
                    status: "succeeded"
                });

            if (error) {
                console.error("Supabase Write Error:", error);
                return new Response("Database Error", { status: 500 });
            }
        }

        return new Response(JSON.stringify({ received: true }), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (err) {
        console.error(`Webhook Error: ${err.message}`);
        return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }
});
