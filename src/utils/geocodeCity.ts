export async function geocodeCity(
    city: string,
    apiKey: string
  ): Promise<{ lat: number; lon: number }> {
    const endpoint = new URL("https://api.openweathermap.org/geo/1.0/direct");
    endpoint.searchParams.set("q", city);
    endpoint.searchParams.set("limit", "1");
    endpoint.searchParams.set("appid", apiKey);
  
    // Log the full URL for debugging
    console.log("Request URL:", endpoint.toString());
  
    const res = await fetch(endpoint.toString());
  
    // Check if the response is OK and log error if not
    if (!res.ok) {
      console.error("Fetch failed:", res.status, res.statusText);
      throw new Error(`Geocoding request failed: ${res.status} ${res.statusText}`);
    }
  
    // Parse the JSON response
    const data = await res.json();
    console.log("Geocode Data:", data); // Log the raw response data
  
    // Check if the data is in the expected format
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error(`City "${city}" not found`);
    }
  
    return { lat: data[0].lat, lon: data[0].lon };
  }
  