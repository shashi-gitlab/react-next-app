export async function GET(request, { params }) {
  const { category } = await params;
  
  if (!category) {
    return Response.json(
      { error: "Category is required" },
      { status: 400 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);

    // Optional query params
    const limit = Number(searchParams.get("limit") || 10);
    const skip = Number(searchParams.get("skip") || 0);

    const query = new URLSearchParams({
      limit: String(limit),
      skip: String(skip),
    });

    const url = `${process.env.BACKEND_URL}/products/category/${category}?${query.toString()}`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      return Response.json(
        { error: "Backend request failed" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}