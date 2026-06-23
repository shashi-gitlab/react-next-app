export async function GET(
    request,
    { params }
) {
    const { id } = await params;

    if (!id) {
        return Response.json(
            {
                error: "Product Id is required",
            },
            { status: 400 }
        );
    }

    try {
        const res = await fetch(
            `${process.env.BACKEND_URL}/products/${id}`,
            {
                cache: "no-store",
            }
        );

        if (!res.ok) {
            return Response.json(
                {
                    error: "Failed to fetch product",
                },
                { status: res.status }
            );
        }

        const data = await res.json();

        return Response.json(data);
    } catch (error) {
        console.error(error);

        return Response.json(
            {
                error: "Internal Server Error",
            },
            { status: 500 }
        );
    }
}