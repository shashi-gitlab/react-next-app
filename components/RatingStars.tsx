interface RatingStarsProps {
    rating: number;
    reviewCount?: number;
    emptyStarClassName?: string;
    filledStarClassName?: string;
    ratingText?: string;
    showRatingText?: boolean;
    showReviewText?: boolean;
}

export default function RatingStars({
    rating,
    reviewCount,
    emptyStarClassName = "",
    filledStarClassName = "",
    ratingText = "Ratings",
    showRatingText = true,
    showReviewText = false,
}: RatingStarsProps) {
    return (
        <div className="flex items-center gap-2">
            {/* STARS */}
            <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => {
                    const fillPercentage = Math.min(
                        Math.max(rating - (star - 1), 0),
                        1
                    );

                    return (
                        <div
                            key={star}
                            className="relative"
                        >
                            {/* Empty Star */}
                            <span
                                className={`text-gray-300 text-xl ${emptyStarClassName}`}
                            >
                                ★
                            </span>

                            {/* Filled Star */}
                            <div
                                className="absolute inset-0 overflow-hidden"
                                style={{
                                    width: `${fillPercentage * 100}%`,
                                }}
                            >
                                <span
                                    className={`text-yellow-500 text-xl gradientText ${filledStarClassName}`}
                                >
                                    ★
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* RATING TEXT */}
            {showRatingText && (
                <span className="text-gray-600 text-xs">
                    {rating} {ratingText}
                </span>
            )}

            {/* REVIEW TEXT */}
            {showReviewText &&
                reviewCount !== undefined && (
                    <span className="text-gray-600 text-xs">
                        ({reviewCount} Reviews)
                    </span>
                )}
        </div>
    );
}