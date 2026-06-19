import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Siddhaartha B S";

  const robotoCondensedMedium = await fetch(
    new URL("../../../assets/fonts/RobotoCondensed-Medium.ttf", import.meta.url)
  ).then((response) => response.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="w-full h-full flex items-center justify-center text-white bg-black p-16">
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 left-16" />
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 right-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 top-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 bottom-16" />

        <h1
          tw="text-center font-medium"
          style={{
            fontFamily: "RobotoCondensed",
            fontSize: 64,
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "RobotoCondensed",
          data: robotoCondensedMedium,
          weight: 500,
        },
      ],
    }
  );
}
