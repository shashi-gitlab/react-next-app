export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const limit = searchParams.get("limit");
    const skip = searchParams.get("skip");
    const select = searchParams.get("select");

    // Build query string dynamically
    const query = new URLSearchParams();

    if (limit) query.append("limit", limit);
    if (skip) query.append("skip", skip);
    if (select) query.append("select", select);

    const url = `${process.env.BACKEND_URL}/posts${
      query.toString() ? `?${query.toString()}` : ""
    }`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}