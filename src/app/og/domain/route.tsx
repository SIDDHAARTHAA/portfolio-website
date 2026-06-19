import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const domain = searchParams.get("domain") || "siddhaartha.in";
  const isForSale = searchParams.get("sale") === "true";

  const [magistralMedium, robotoMedium] = await Promise.all([
    fetch(new URL("../../../assets/fonts/Magistral-Medium.ttf", import.meta.url))
      .then((response) => response.arrayBuffer()),
    fetch(new URL("../../../assets/fonts/Roboto-Medium.ttf", import.meta.url))
      .then((response) => response.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div tw="flex text-black bg-white w-full h-full p-16">
        <div tw="flex-1 flex flex-col justify-center border-l border-r border-zinc-200">
          <div tw="flex justify-center border-t border-b border-zinc-200">
            <h1
              tw="mt-8 mb-4 ml-8 mr-8 font-medium"
              style={{
                fontFamily: "Magistral",
                fontSize: 88,
              }}
            >
              {domain}
            </h1>
          </div>

          <div tw="flex justify-center border-b border-zinc-200">
            <p
              tw="mt-0 mb-0 pt-4 pb-4 pl-8 pr-8 font-medium"
              style={{
                fontFamily: "Roboto",
                fontSize: 32,
                color: isForSale ? "#22c55e" : "#71717a",
              }}
            >
              {isForSale
                ? "The domain name is for sale"
                : "The website will be launched soon"}
            </p>
          </div>
        </div>

        <div tw="absolute flex inset-y-0 w-px bg-zinc-200 left-16" />
        <div tw="absolute flex inset-y-0 w-px bg-zinc-200 right-16" />
        <div tw="absolute flex inset-x-0 h-px bg-zinc-200 top-16" />
        <div tw="absolute flex inset-x-0 h-px bg-zinc-200 bottom-16" />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Magistral",
          data: magistralMedium,
          weight: 500,
        },
        {
          name: "Roboto",
          data: robotoMedium,
          weight: 500,
        },
      ],
    }
  );
}
