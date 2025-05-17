import { GameStatus } from "@/app/generated/prisma";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const gameId = params.id;

  // Set up SSE headers
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      // Send initial game state
      const game = await prisma.game.findUnique({
        where: { id: gameId },
      });

      if (game) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(game)}\n\n`));
      }

      // Set up polling for game updates
      const interval = setInterval(async () => {
        const updatedGame = await prisma.game.findUnique({
          where: { id: gameId },
        });

        if (updatedGame) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(updatedGame)}\n\n`)
          );
        }
      }, 1000); // Poll every second

      // Clean up on close
      request.signal.addEventListener("abort", () => {
        clearInterval(interval);
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
