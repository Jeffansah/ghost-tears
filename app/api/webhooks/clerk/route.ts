// app/api/webhooks/clerk/route.ts
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { createUser } from "@/server/user/create-user.action";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    console.log("🔔 Webhook received!", evt.type);

    // Handle the webhook
    if (evt.type === "user.created") {
      const { id, username } = evt.data;
      const result = await createUser(id, username);

      if (!result.success) {
        return NextResponse.json(
          { error: "Error creating user" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return NextResponse.json(
      { error: "Error verifying webhook" },
      { status: 400 }
    );
  }
}
