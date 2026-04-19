import { NextResponse } from 'next/server';

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_IDS = [
  process.env.GOOGLE_PLACE_ID_LAS_FUENTES,
  process.env.GOOGLE_PLACE_ID_ACTUR,
].filter(Boolean) as string[];

export async function GET() {
  if (!API_KEY || PLACE_IDS.length === 0) {
    return NextResponse.json({ reviews: null, configured: false });
  }

  try {
    const results = await Promise.all(
      PLACE_IDS.map(placeId =>
        fetch(
          `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&languageCode=es`,
          {
            headers: { 'X-Goog-Api-Key': API_KEY },
            next: { revalidate: 3600 },
          }
        ).then(r => r.json())
      )
    );

    const allReviews = results
      .flatMap(r => (r.reviews ?? []).map((rv: GoogleReview) => ({ ...rv, _location: r.displayName?.text ?? '' })))
      .sort((a: GoogleReview, b: GoogleReview) => (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 6);

    const avgRating =
      results.reduce((sum, r) => sum + (r.rating ?? 0), 0) / results.filter(r => r.rating).length;

    return NextResponse.json({ reviews: allReviews, avgRating, configured: true });
  } catch {
    return NextResponse.json({ reviews: null, configured: true, error: 'fetch_failed' });
  }
}

interface GoogleReview {
  rating?: number;
  text?: { text: string };
  authorAttribution?: { displayName: string; photoUri?: string };
  publishTime?: string;
  _location?: string;
}
