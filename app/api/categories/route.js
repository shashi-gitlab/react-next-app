export async function GET() {
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/products/categories`, {
            cache: "no-store",
        });

        const data = await res.json();

        return Response.json(data);
    } catch (error) {
        return Response.json(
            { error: "Failed to fetch categories" },
            { status: 500 }
        );
    }
}