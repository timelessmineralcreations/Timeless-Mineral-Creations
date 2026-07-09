import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { cart } = await request.json();

    if (!cart || cart.length === 0) {
      return Response.json(
        { error: "Cart is empty." },
        { status: 400 }
      );
    }

    const lineItems = cart.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.collectionName || "Custom Memorial Ring",
          description: [
            item.material ? `Material: ${item.material}` : null,
            item.core?.edge ? `Style: ${item.core.edge}` : null,
            item.width?.width ? `Width: ${item.width.width}mm` : null,
            item.size ? `Size: ${item.size}` : null,
            item.design?.name ? `Design: ${item.design.name}` : null,
            item.memorialMaterials?.length
              ? `Memorial Material: ${item.memorialMaterials.join(", ")}`
              : "Memorial Material: None",
            item.minerals?.length
              ? `Minerals: ${item.minerals
                  .map((m) => m.name)
                  .join(", ")}`
              : "Minerals: None",
            `Glow Powder: ${item.glow?.name || "None"}`,
            `Engraving: ${
              item.engravingEnabled
                ? item.engravingText || "Yes"
                : "None"
            }`,
          ]
            .filter(Boolean)
            .join(" • "),
        },
        unit_amount: Math.round((item.price || 0) * 100),
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      success_url: `${request.headers.get(
        "origin"
      )}/checkout/success`,
      cancel_url: `${request.headers.get("origin")}/cart`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error.message);

    return Response.json(
      { error: "Unable to create checkout session." },
      { status: 500 }
    );
  }
}