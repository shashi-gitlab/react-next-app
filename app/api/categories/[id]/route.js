export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const parentId = searchParams.get("id");

  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/products/category/${parentId}`,
      { cache: "no-store" }
    );

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch subcategories" },
      { status: 500 }
    );
  }
}