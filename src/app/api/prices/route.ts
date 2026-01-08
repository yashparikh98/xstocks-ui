import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const symbols = searchParams.get("symbols");

  if (!symbols) {
    return NextResponse.json({ error: "Missing symbols parameter" }, { status: 400 });
  }

  try {
    // Fetch from Backed Finance API (server-side, no CORS issues)
    const response = await fetch(
      `https://api.backed.fi/api/v1/collateral/quote?symbol=${symbols}`,
      {
        headers: {
          "Accept": "application/json",
        },
        next: { revalidate: 30 }, // Cache for 30 seconds
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch prices" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching prices:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
